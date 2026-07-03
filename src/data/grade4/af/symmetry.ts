import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Simmetrie',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS SYMMETRY?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-symmetry',
      title: 'Wat is Simmetrie?',
      icon: '🪞',
      explanation: `
<p style="margin-bottom:14px;">’n Vorm is <strong>simmetries</strong> as jy dit presies in die helfte kan vou sodat albei kante <strong>perfek pas</strong>. Die vouliyn word die <strong>simmetrielyn</strong> genoem. Dit is soos wanneer jy ’n spieël langs die vou plaas — die een kant is die presiese refleksie van die ander.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Voorbeelde uit die alledaagse lewe 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>’n Skoenlapper:</strong> vou dit in die middel en albei vlerke is identies</li>
    <li><strong>’n Mens se gesig:</strong> die linker- en regterkant is spieëlbeelde van mekaar</li>
    <li><strong>Die letter A:</strong> ’n vertikale vou deur die middel gee twee bypassende helftes</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = simmetrielyn</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = linkerhelfte</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = regterhelfte</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die voutoets vir simmetrie</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vou die vorm</strong> langs die lyn wat jy dink ’n simmetrielyn is.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">As <strong>albei helftes presies pas</strong> — is die vorm <span style="color:#16a34a;font-weight:700;">simmetries</span> langs daardie lyn.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">As <strong>die helftes nie pas nie</strong> — is daardie lyn <span style="color:#dc2626;font-weight:700;">nie</span> ’n simmetrielyn nie.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Simmetries vs nie-simmetries</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">✓ Simmetries</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">Albei helftes is <strong>spieëlbeelde</strong> van mekaar wanneer dit langs die simmetrielyn gevou word.</div>
    </div>
    <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px;">✗ Nie simmetries nie</div>
      <div style="color:#7f1d1d;font-size:14px;line-height:1.7;">Maak nie saak waar jy die vorm vou nie, die twee helftes sal <strong>nooit presies pas nie</strong>.</div>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Is ’n vierkant simmetries? Indien wel, hoeveel simmetrielyne het dit?',
          answer: 'Ja — ’n vierkant het 4 simmetrielyne.',
          steps: [
            `<strong>Stap 1:</strong> Probeer om die vierkant <span style="color:#dc2626;font-weight:700;">vertikaal</span> te vou (links na regs):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;align-items:stretch;gap:0;border:2px solid #d1d5db;border-radius:6px;overflow:hidden;width:80px;height:80px;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">links</span>
    </div>
    <div style="width:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#f0fdf4;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#16a34a;">regs</span>
    </div>
  </div>
  <span style="color:#16a34a;font-weight:700;">Albei helftes pas ✓</span>
</div>`,
            `<strong>Stap 2:</strong> Probeer <span style="color:#dc2626;font-weight:700;">horisontaal</span> vou (bo na onder):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:stretch;gap:0;border:2px solid #d1d5db;border-radius:6px;overflow:hidden;width:80px;height:80px;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">bo</span>
    </div>
    <div style="height:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#f0fdf4;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#16a34a;">onder</span>
    </div>
  </div>
  <span style="color:#16a34a;font-weight:700;">Albei helftes pas ✓</span>
</div>`,
            `<strong>Stap 3:</strong> Probeer om langs <span style="color:#dc2626;font-weight:700;">albei diagonale</span> te vou:<br/>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Hoek tot hoek in albei rigtings — elke diagonale vou lewer twee bypassende driehoeke op.</p>
<div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
  <span style="color:#16a34a;font-weight:700;">Albei diagonale voue pas ook ✓</span>
</div>`,
            `<strong>Antwoord:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">Ja — ’n vierkant is simmetries. Dit het <span style="font-size:17px;">4 simmetrielyne</span> (vertikaal, horisontaal, en 2 diagonale).</span>
</div>`,
          ],
        },
        {
          question: 'Is die letter S simmetries?',
          answer: 'Nee — die letter S het geen simmetrielyne nie.',
          steps: [
            `<strong>Stap 1:</strong> Probeer om die letter S <span style="color:#dc2626;font-weight:700;">vertikaal</span> te vou (links na regs):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;align-items:stretch;gap:0;border:2px solid #d1d5db;border-radius:6px;overflow:hidden;width:80px;height:80px;background:#f9fafb;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;">Ʂ</span>
    </div>
    <div style="width:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#f0fdf4;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:22px;font-weight:700;color:#16a34a;">)</span>
    </div>
  </div>
  <span style="color:#dc2626;font-weight:700;">Helftes pas nie ✗</span>
</div>`,
            `<strong>Stap 2:</strong> Probeer <span style="color:#dc2626;font-weight:700;">horisontaal</span> vou (bo na onder):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:stretch;gap:0;border:2px solid #d1d5db;border-radius:6px;overflow:hidden;width:80px;height:80px;background:#f9fafb;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:13px;font-weight:700;color:#1e40af;">bo van S</span>
    </div>
    <div style="height:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#f0fdf4;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:13px;font-weight:700;color:#16a34a;">onder van S</span>
    </div>
  </div>
  <span style="color:#dc2626;font-weight:700;">Helftes pas nie ✗</span>
</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Die boonste helfte van die S krul die teenoorgestelde kant toe as die onderste helfte — hulle is nie spieëlbeelde nie.</p>`,
            `<strong>Antwoord:</strong>
<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Nee — die letter S het geen simmetrielyne nie. Maak nie saak hoe jy dit vou nie, die helftes pas nooit presies nie.</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Vier vorms langs mekaar — ’n vierkant met al 4 simmetrielyne in rooi geteken, ’n reghoek met 2 lyne, ’n driehoek met 1 lyn, en die letter S met geen lyne nie',

      videoPlaceholder: 'Kort video wat wys hoe om simmetrielyne te vind deur vorms te vou en te kyk of albei helftes pas',

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LINES OF SYMMETRY IN COMMON SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'lines-of-symmetry-in-shapes',
      title: 'Simmetrielyne in Algemene Vorms',
      icon: '📐',
      explanation: `
<p style="margin-bottom:14px;">Verskillende vorms het verskillende hoeveelhede simmetrielyne. Hoe meer <strong>reëlmatig</strong> ’n vorm is — dit beteken al sy sye en hoeke is gelyk — hoe meer simmetrielyne het dit gewoonlik. Sommige vorms het glad geen nie!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = simmetrielyne</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = vorm-buitelyne</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px;">Simmetrielyne volgens vorm</div>
  <div style="display:flex;flex-direction:column;gap:0;">

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Sirkel</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">Oneindige lyne</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Enige middellyn is ’n simmetrielyn</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Vierkant</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">4 lyne</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Vertikaal, horisontaal, en 2 diagonale</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Reghoek</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">2 lyne</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Slegs vertikaal en horisontaal (diagonale werk nie)</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Gelyksydige driehoek</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">3 lyne</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Een vanaf elke hoek na die middelpunt van die teenoorgestelde sy</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Gelykbenige driehoek</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">1 lyn</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Vanaf die boonste hoek na die middelpunt van die basis</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Skalene driehoek</span>
      <span style="background:#f3f4f6;border-radius:6px;padding:3px 12px;color:#6b7280;font-weight:700;font-size:13px;">0 lyne</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Al die sye en hoeke is verskillend — geen vou werk nie</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #e0e7ff;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Reëlmatige vyfhoek</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">5 lyne</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">Een vanaf elk van die 5 hoeke na die middelpunt van die teenoorgestelde sy</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;">
      <span style="min-width:170px;font-weight:700;color:#1e3a8a;font-size:15px;">Reëlmatige seshoek</span>
      <span style="background:#fee2e2;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">6 lyne</span>
      <span style="color:#374151;font-size:13px;margin-left:4px;">3 deur teenoorgestelde hoeke + 3 deur middelpunte van teenoorgestelde sye</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:12px 18px;margin-bottom:8px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;">💡 Sleutelreël:</span>
  <span style="color:#78350f;font-size:14px;margin-left:6px;">Vir ’n <strong>reëlmatige veelhoek</strong> (al die sye en hoeke gelyk), is die aantal simmetrielyne gelyk aan die aantal sye.</span>
</div>`,

      workedExamples: [
        {
          question: 'Hoeveel simmetrielyne het ’n reghoek?',
          answer: "’n Reghoek het 2 simmetrielyne — een vertikaal en een horisontaal.",
          steps: [
            `<strong>Stap 1:</strong> Probeer ’n <span style="color:#dc2626;font-weight:700;">vertikale vou</span> (linkerhelfte vou oor die regterhelfte):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;align-items:stretch;gap:0;border:2px solid #1e40af;border-radius:6px;overflow:hidden;width:100px;height:60px;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">links</span>
    </div>
    <div style="width:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">regs</span>
    </div>
  </div>
  <span style="color:#16a34a;font-weight:700;">Albei helftes pas ✓  →  Simmetrielyn!</span>
</div>`,
            `<strong>Stap 2:</strong> Probeer ’n <span style="color:#dc2626;font-weight:700;">horisontale vou</span> (boonste helfte vou oor die onderste helfte):<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:stretch;gap:0;border:2px solid #1e40af;border-radius:6px;overflow:hidden;width:100px;height:60px;">
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">bo</span>
    </div>
    <div style="height:3px;background:#dc2626;"></div>
    <div style="flex:1;background:#dbeafe;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:11px;font-weight:700;color:#1e40af;">onder</span>
    </div>
  </div>
  <span style="color:#16a34a;font-weight:700;">Albei helftes pas ✓  →  Simmetrielyn!</span>
</div>`,
            `<strong>Stap 3:</strong> Probeer <span style="color:#dc2626;font-weight:700;">diagonale voue</span> (hoek tot hoek):<br/>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Wanneer jy ’n reghoek hoek tot hoek vou, is die twee helftes verskillende groottes — ’n kort sy ontmoet ’n lang sy. Hulle pas nie.</p>
<div style="background:#fef2f2;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Diagonale voue werk nie vir reghoeke nie ✗</span>
</div>`,
            `<strong>Antwoord:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">’n Reghoek het <span style="font-size:17px;">2 simmetrielyne</span> — een vertikaal en een horisontaal. Die diagonale vou werk nie omdat die sye van ’n reghoek nie almal gelyk is nie.</span>
</div>`,
          ],
        },
        {
          question: 'Hoeveel simmetrielyne het ’n gelyksydige driehoek?',
          answer: "’n Gelyksydige driehoek het 3 simmetrielyne.",
          steps: [
            `’n Gelyksydige driehoek het <strong>3 gelyke sye</strong> en <strong>3 gelyke hoeke</strong>. Elke simmetrielyn loop vanaf een <span style="color:#1e40af;font-weight:700;">hoek</span> na die <span style="color:#dc2626;font-weight:700;">middelpunt van die teenoorgestelde sy</span>.<br/>
<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:12px;">
  <div style="text-align:center;">
    <div style="width:70px;height:60px;position:relative;display:inline-block;">
      <svg viewBox="0 0 70 60" width="70" height="60">
        <polygon points="35,4 66,56 4,56" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/>
        <line x1="35" y1="4" x2="35" y2="56" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      </svg>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:2px;">Lyn 1</div>
  </div>
  <div style="text-align:center;">
    <div style="width:70px;height:60px;position:relative;display:inline-block;">
      <svg viewBox="0 0 70 60" width="70" height="60">
        <polygon points="35,4 66,56 4,56" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/>
        <line x1="66" y1="56" x2="19.5" y2="30" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      </svg>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:2px;">Lyn 2</div>
  </div>
  <div style="text-align:center;">
    <div style="width:70px;height:60px;position:relative;display:inline-block;">
      <svg viewBox="0 0 70 60" width="70" height="60">
        <polygon points="35,4 66,56 4,56" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/>
        <line x1="4" y1="56" x2="50.5" y2="30" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      </svg>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:2px;">Lyn 3</div>
  </div>
</div>`,
            `Daar is <strong>3 hoeke</strong> en elkeen gee presies een simmetrielyn, so die totaal is <strong>3 lyne</strong>.<br/>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Dit stem ooreen met die reël: ’n <em>reëlmatige veelhoek</em> het net soveel simmetrielyne as wat dit sye het — ’n gelyksydige driehoek het 3 sye, so dit het 3 simmetrielyne.</p>`,
            `<strong>Antwoord:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">’n Gelyksydige driehoek het <span style="font-size:17px;">3 simmetrielyne</span>.</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: "’n Rooster van algemene vorms wat elk hul simmetrielyne in rooi geteken wys — sirkel, vierkant, reghoek, gelyksydige driehoek, gelykbenige driehoek en reëlmatige seshoek",

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DRAWING THE OTHER HALF OF A SYMMETRICAL FIGURE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'drawing-the-other-half',
      title: 'Teken die Ander Helfte van ’n Simmetriese Figuur',
      icon: '✏️',
      explanation: `
<p style="margin-bottom:14px;">As jy <strong>die helfte van ’n simmetriese vorm</strong> en die <strong>simmetrielyn</strong> gegee word, kan jy die ontbrekende helfte teken deur <strong>elke punt te reflekteer</strong> oor die lyn. Reflekteer beteken om ’n punt na presies dieselfde afstand aan die <em>ander</em> kant van die lyn te skuif — soos die vorm wat na homself in ’n spieël kyk.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = die gegewe helfte</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = simmetrielyn</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = die getekende (gereflekteerde) helfte</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die 5-stap-metode</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Identifiseer die simmetrielyn</strong> — dit word in <span style="color:#dc2626;font-weight:700;">rooi</span> op die rooster geteken.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vind elke hoek of punt</strong> van die gegewe helfte — merk hulle A, B, C ensovoorts.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#7c3aed;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Tel die blokkies</strong> vanaf elke punt tot by die simmetrielyn.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#d97706;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Merk die spieëlpunt</strong> dieselfde <em>aantal blokkies</em> aan die ander kant van die lyn.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Verbind die spieëlpunte</strong> in volgorde om die gereflekteerde helfte in <span style="color:#16a34a;font-weight:700;">groen</span> te voltooi.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: "Die helfte van ’n vorm word op ’n rooster geteken. Die simmetrielyn is ’n vertikale rooi lyn in die middel. Punte A, B en C is 1, 2 en 3 blokkies links van die lyn. Teken die ander helfte.",
          answer: "Spieëlpunt A is 1 blokkie regs, B is 2 blokkies regs, C is 3 blokkies regs. Verbind A′B′C′ om die vorm te voltooi.",
          steps: [
            `<strong>Stap 1:</strong> Identifiseer die <span style="color:#dc2626;font-weight:700;">simmetrielyn</span> — die vertikale rooi lyn verdeel die rooster in die helfte.<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <div style="display:inline-flex;align-items:stretch;gap:0;border:1.5px solid #d1d5db;border-radius:8px;overflow:hidden;min-width:260px;">
    <div style="background:#dbeafe;padding:16px 28px;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:13px;font-weight:700;color:#1e40af;">Gegewe helfte<br/>(blou)</span>
    </div>
    <div style="width:4px;background:#dc2626;"></div>
    <div style="background:#f9fafb;padding:16px 28px;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:13px;font-weight:700;color:#6b7280;">Teken hier<br/>(groen)</span>
    </div>
  </div>
</div>`,
            `<strong>Stap 2:</strong> Vind elke gemerkte punt op die <span style="color:#1e40af;font-weight:700;">gegewe (blou) helfte</span> en tel sy afstand vanaf die lyn:<br/>
<div style="overflow-x:auto;margin-top:10px;">
  <table style="border-collapse:collapse;min-width:300px;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;">Punt</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;">Blokkies vanaf lyn (links)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">A</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;color:#374151;">1 blokkie</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">B</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;color:#374151;">2 blokkies</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">C</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;color:#374151;">3 blokkies</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Stap 3:</strong> Merk elke <span style="color:#16a34a;font-weight:700;">spieëlpunt</span> dieselfde afstand aan die <em>regter</em>kant van die lyn:<br/>
<div style="overflow-x:auto;margin-top:10px;">
  <table style="border-collapse:collapse;min-width:420px;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 14px;border:1.5px solid #bfdbfe;font-size:13px;">Oorspronklike punt</th>
        <th style="background:#fee2e2;color:#dc2626;font-weight:700;padding:8px 14px;border:1.5px solid #fca5a5;font-size:13px;">Afstand vanaf lyn</th>
        <th style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:8px 14px;border:1.5px solid #86efac;font-size:13px;">Spieëlpunt</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">A  (1 links)</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">1 blokkie</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;">A′  (1 regs)</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">B  (2 links)</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">2 blokkies</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;">B′  (2 regs)</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">C  (3 links)</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">3 blokkies</td>
        <td style="text-align:center;padding:8px 14px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;">C′  (3 regs)</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Stap 4:</strong> Verbind die spieëlpunte A′ → B′ → C′ in dieselfde volgorde as wat die oorspronklike punte verbind is. Die <span style="color:#16a34a;font-weight:700;">groen helfte</span> behoort soos ’n presiese refleksie van die <span style="color:#1e40af;font-weight:700;">blou helfte</span> te lyk.<br/>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">Die twee helftes vorm saam die volledige simmetriese vorm ✓</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: "Rooster wat die helfte van ’n onreëlmatige vorm links van ’n vertikale rooi simmetrielyn wys, met die spieëlhelfte in groen regs voltooi",

      videoPlaceholder: "Kort video wat stap vir stap wys hoe om die ander helfte van ’n simmetriese figuur op ’n rooster te teken deur die simmetrielyn te gebruik",

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SYMMETRY IN REAL LIFE AND LETTERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetry-real-life-letters',
      title: 'Simmetrie in die Alledaagse Lewe en Letters',
      icon: '🌿',
      explanation: `
<p style="margin-bottom:14px;">Simmetrie is nie net ’n wiskunde-idee nie — dit verskyn <strong>oral om ons</strong> in die natuur, in geboue wat mense ontwerp, en selfs in die letters van die alfabet. Sodra jy weet waarna om te kyk, sal jy dit oral begin sien!</p>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">

  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#15803d;margin-bottom:8px;">🌿 Die natuur</div>
    <ul style="margin:0;padding-left:20px;color:#14532d;line-height:2;font-size:15px;">
      <li><strong>Skoenlappervlerke:</strong> vou ’n skoenlapper in die helfte en albei vlerke pas presies</li>
      <li><strong>Blare:</strong> die meeste blare het ’n sentrale nerf wat as ’n simmetrielyn dien</li>
      <li><strong>Sneeuvlokkies:</strong> het 6 simmetrielyne wat vanaf die middelpunt uitstraal</li>
      <li><strong>Seesterre:</strong> het 5 simmetrielyne, een deur elke arm</li>
    </ul>
  </div>

  <div style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#1e40af;margin-bottom:8px;">🏛️ Geboue</div>
    <ul style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2;font-size:15px;">
      <li><strong>Die Taj Mahal:</strong> ’n volkome simmetriese gebou — die linker- en regterkant is identies</li>
      <li><strong>Deure en vensters:</strong> die meeste is reghoeke met ’n vertikale simmetrielyn deur die middel</li>
    </ul>
  </div>

</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px;">Simmetrie in die alfabet</div>

  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
      <span style="min-width:200px;font-weight:700;color:#1e3a8a;font-size:14px;padding-top:6px;">Slegs vertikale simmetrie:</span>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${['A','H','I','M','O','T','U','V','W','X','Y'].map(l =>
          `<span style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:6px;padding:4px 10px;font-size:16px;font-weight:700;color:#1e40af;">${l}</span>`
        ).join('')}
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
      <span style="min-width:200px;font-weight:700;color:#1e3a8a;font-size:14px;padding-top:6px;">Slegs horisontale simmetrie:</span>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${['B','C','D','E','K'].map(l =>
          `<span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:4px 10px;font-size:16px;font-weight:700;color:#16a34a;">${l}</span>`
        ).join('')}
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
      <span style="min-width:200px;font-weight:700;color:#1e3a8a;font-size:14px;padding-top:6px;">Beide vertikaal en horisontaal:</span>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${['H','I','O','X'].map(l =>
          `<span style="background:#fef3c7;border:1.5px solid #fcd34d;border-radius:6px;padding:4px 10px;font-size:16px;font-weight:700;color:#b45309;">${l}</span>`
        ).join('')}
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
      <span style="min-width:200px;font-weight:700;color:#1e3a8a;font-size:14px;padding-top:6px;">Geen simmetrie nie:</span>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${['F','G','J','L','N','P','Q','R','S','Z'].map(l =>
          `<span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:4px 10px;font-size:16px;font-weight:700;color:#6b7280;">${l}</span>`
        ).join('')}
      </div>
    </div>

  </div>
</div>`,

      workedExamples: [
        {
          question: "Watter letters in die woord MATH (WISK) het ’n simmetrielyn?",
          answer: "Al vier letters — M, A, T en H — het ten minste een simmetrielyn.",
          steps: [
            `Kyk na elke letter een vir een met behulp van die voutoets:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <table style="border-collapse:collapse;min-width:380px;width:100%;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:14px;">Letter</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:14px;">Simmetries?</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:14px;">Tipe simmetrie</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:20px;font-weight:700;color:#1e40af;">M</td>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;">
          <span style="background:#f0fdf4;border-radius:6px;padding:3px 10px;color:#16a34a;font-weight:700;">Ja ✓</span>
        </td>
        <td style="padding:10px 16px;border:1.5px solid #bfdbfe;color:#374151;font-size:14px;">Vertikale simmetrielyn</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:20px;font-weight:700;color:#1e40af;">A</td>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;">
          <span style="background:#f0fdf4;border-radius:6px;padding:3px 10px;color:#16a34a;font-weight:700;">Ja ✓</span>
        </td>
        <td style="padding:10px 16px;border:1.5px solid #bfdbfe;color:#374151;font-size:14px;">Vertikale simmetrielyn</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:20px;font-weight:700;color:#1e40af;">T</td>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;">
          <span style="background:#f0fdf4;border-radius:6px;padding:3px 10px;color:#16a34a;font-weight:700;">Ja ✓</span>
        </td>
        <td style="padding:10px 16px;border:1.5px solid #bfdbfe;color:#374151;font-size:14px;">Vertikale simmetrielyn</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;font-size:20px;font-weight:700;color:#1e40af;">H</td>
        <td style="text-align:center;padding:10px 16px;border:1.5px solid #bfdbfe;">
          <span style="background:#fef3c7;border-radius:6px;padding:3px 10px;color:#b45309;font-weight:700;">Ja ✓✓</span>
        </td>
        <td style="padding:10px 16px;border:1.5px solid #bfdbfe;color:#374151;font-size:14px;">Beide vertikale en horisontale simmetrie</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Antwoord:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">Al vier letters in MATH het ten minste een simmetrielyn. H het twee — beide vertikaal en horisontaal.</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: "Die alfabet uitgelê met simmetrielyne geteken op elke letter wat een het, en ’n kruis op letters sonder simmetrie",

      practiceQuestions: [],
    },
  ],

  topicPractice: [

    // ── SECTION 1: WHAT IS SYMMETRY? ─────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: "Is ’n skoenlapper simmetries? Skryf ja of nee en verduidelik hoekom in een sin.",
      answer:
        "Ja — ’n skoenlapper is simmetries.\n\n" +
        "As jy ’n skoenlapper in die middel vou, pas albei vlerke presies. Die vouliyn is ’n vertikale simmetrielyn.",
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Watter van hierdie is simmetries? Skryf ja of nee vir elkeen:\n\n' +
        "a) ’n Vierkant\n" +
        'b) Die letter S\n' +
        "c) ’n Reghoek\n" +
        'd) Die letter A',
      answer: 'a) Ja    b) Nee    c) Ja    d) Ja',
      parts: [
        {
          label: "a) ’n Vierkant",
          correctAnswer: 'Ja',
          correctAnswers: ['Ja', 'ja'],
          explanation:
            "’n Vierkant het 4 simmetrielyne — vertikaal, horisontaal, en albei diagonale.\n" +
            'Dit is simmetries.',
        },
        {
          label: 'b) Die letter S',
          correctAnswer: 'Nee',
          correctAnswers: ['Nee', 'nee'],
          explanation:
            'Maak nie saak hoe jy die letter S vou nie, die twee helftes pas nooit.\n' +
            'Die letter S het geen simmetrielyne nie.',
        },
        {
          label: "c) ’n Reghoek",
          correctAnswer: 'Ja',
          correctAnswers: ['Ja', 'ja'],
          explanation:
            "’n Reghoek het 2 simmetrielyne — een vertikaal en een horisontaal.\n" +
            'Dit is simmetries.',
        },
        {
          label: 'd) Die letter A',
          correctAnswer: 'Ja',
          correctAnswers: ['Ja', 'ja'],
          explanation:
            'Die letter A het een vertikale simmetrielyn deur die middel.\n' +
            'Die linker- en regterhelftes pas presies.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        "Thabo sê ’n sirkel het presies 4 simmetrielyne omdat ’n vierkant dit het. Is hy korrek? Verduidelik volledig.",
      answer:
        'Nee — Thabo is verkeerd.\n\n' +
        "’n Sirkel het oneindige simmetrielyne. Enige reguit lyn wat deur die middelpunt van ’n sirkel loop, verdeel dit in twee gelyke helftes wat spieëlbeelde van mekaar is.\n\n" +
        "’n Vierkant het 4 simmetrielyne omdat dit 4 sye en 4 hoeke het. ’n Sirkel het geen sye of hoeke nie, so dit is nie beperk tot 4 lyne nie — enige middellyn werk as ’n simmetrielyn.",
    },

    // ── SECTION 2: LINES OF SYMMETRY IN COMMON SHAPES ────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: "Hoeveel simmetrielyne het ’n vierkant?",
      answer: '4',
      correctAnswer: '4',
      correctAnswers: ['4', '4 lyne', 'vier'],
      explanation:
        "’n Vierkant het 4 simmetrielyne:\n" +
        '1. Vertikaal (links na regs)\n' +
        '2. Horisontaal (bo na onder)\n' +
        '3. Diagonaal van bo-links na onder-regs\n' +
        '4. Diagonaal van bo-regs na onder-links\n\n' +
        'Al vier voue lewer twee helftes op wat presies pas.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skryf die aantal simmetrielyne vir elke vorm:\n\n' +
        'a) Reghoek\n' +
        'b) Gelyksydige driehoek\n' +
        'c) Skalene driehoek\n' +
        'd) Reëlmatige seshoek',
      answer: 'a) 2    b) 3    c) 0    d) 6',
      parts: [
        {
          label: 'a) Reghoek',
          correctAnswer: '2',
          correctAnswers: ['2', 'twee', '2 lyne'],
          explanation:
            "’n Reghoek het 2 simmetrielyne: een vertikaal en een horisontaal.\n" +
            'Diagonale voue werk nie omdat die sye van ’n reghoek nie almal gelyk is nie.',
        },
        {
          label: 'b) Gelyksydige driehoek',
          correctAnswer: '3',
          correctAnswers: ['3', 'drie', '3 lyne'],
          explanation:
            '’n Gelyksydige driehoek het al sy sye en hoeke gelyk.\n' +
            'Elke simmetrielyn loop vanaf een hoek na die middelpunt van die teenoorgestelde sy.\n' +
            'Daar is 3 hoeke, so daar is 3 simmetrielyne.',
        },
        {
          label: 'c) Skalene driehoek',
          correctAnswer: '0',
          correctAnswers: ['0', 'nul', 'geen', 'geen lyne'],
          explanation:
            '’n Skalene driehoek het al sy sye en al sy hoeke verskillend.\n' +
            'Geen vou lewer twee helftes op wat pas nie, so dit het 0 simmetrielyne.',
        },
        {
          label: 'd) Reëlmatige seshoek',
          correctAnswer: '6',
          correctAnswers: ['6', 'ses', '6 lyne'],
          explanation:
            "’n Reëlmatige seshoek het 6 gelyke sye en 6 gelyke hoeke.\n" +
            'Dit het 6 simmetrielyne: 3 deur teenoorgestelde hoeke en 3 deur die middelpunte van teenoorgestelde sye.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: "’n Reëlmatige veelhoek het 8 sye. Hoeveel simmetrielyne het dit?",
      answer: '8',
      correctAnswer: '8',
      correctAnswers: ['8', 'agt', '8 lyne', '8 simmetrielyne'],
      explanation:
        "’n Reëlmatige veelhoek het dieselfde aantal simmetrielyne as wat dit sye het.\n" +
        '8 sye → 8 simmetrielyne.\n\n' +
        'Elke lyn loop óf deur twee teenoorgestelde hoeke óf deur die middelpunte van twee teenoorgestelde sye.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: "Verduidelik hoe jy weet dat ’n reëlmatige 8-sydige veelhoek daardie aantal simmetrielyne het.",
      answer:
        "’n Reëlmatige veelhoek het dieselfde aantal simmetrielyne as wat dit sye het.\n\n" +
        'Dit is omdat al die sye en hoeke gelyk is, so elke vou vanaf ’n hoek na die teenoorgestelde sy (of middelpunt na middelpunt) lewer twee identiese helftes op.\n\n' +
        "Vir ’n reëlmatige 8-sydige veelhoek: 8 sye → 8 simmetrielyne.",
    },

    // ── SECTION 3: DRAWING THE OTHER HALF OF A SYMMETRICAL FIGURE ────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        "’n Vorm het ’n vertikale simmetrielyn. ’n Punt aan die linkerkant is 3 blokkies vanaf die lyn af.\n\n" +
        'Hoe ver vanaf die lyn is die spieëlpunt aan die regterkant?',
      answer: '3 blokkies',
      correctAnswer: '3',
      correctAnswers: ['3', 'drie', '3 blokkies', 'drieblokkies'],
      explanation:
        "Wanneer jy ’n punt oor ’n simmetrielyn reflekteer, is die spieëlpunt altyd dieselfde afstand vanaf die lyn — net aan die ander kant.\n" +
        '3 blokkies links → spieëlpunt is 3 blokkies regs.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        "Die helfte van ’n vorm word op ’n rooster geteken. Die hoeke van die halwe vorm is 1, 3 en 5 blokkies vanaf die vertikale simmetrielyn af.\n\n" +
        'a) Hoe ver is die spieëlpunte vanaf die lyn?\n' +
        'b) As die oorspronklike punt in die boonste gedeelte van die vorm is, waar is die spieëlpunt?',
      answer: 'a) 1, 3 en 5 blokkies    b) Ook in die boonste gedeelte op dieselfde hoogte',
      parts: [
        {
          label: 'a) Hoe ver is die spieëlpunte vanaf die lyn?',
          correctAnswer: '1,3en5blokkies',
          correctAnswers: [
            '1,3en5blokkies', '135blokkies', '135',
            '1en3en5blokkies', '1en3en5',
            '13en5', '1,3,5',
          ],
          explanation:
            "Elke spieëlpunt is dieselfde afstand vanaf die lyn as sy oorspronklike punt — net aan die ander kant.\n" +
            'Oorspronklike afstande: 1, 3 en 5 blokkies.\n' +
            'Spieëlafstande: ook 1, 3 en 5 blokkies.',
        },
        {
          label: 'b) Waar is die spieëlpunt as die oorspronklike in die boonste gedeelte is?',
          correctAnswer: 'ookbo',
          correctAnswers: [
            'ookbo', 'ookindieboonstegedeelte', 'dieselfdehoogte',
            'ookindieboonste', 'dieselfdevertikaleafstand', 'dieselfdehoogtebo',
            'boonstegedeelte', 'bodieselfde', 'ookhoog',
          ],
          explanation:
            '’n Vertikale simmetrielyn flip slegs links en regs — dit verander nie die hoogte van ’n punt nie.\n' +
            'As die oorspronklike punt in die boonste gedeelte van die vorm is, is die spieëlpunt ook in die boonste gedeelte op presies dieselfde hoogte.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        "’n Vorm op ’n rooster het hoeke op hierdie afstande vanaf die vertikale simmetrielyn: 2 blokkies, 4 blokkies en 6 blokkies. Die vorm is 3 blokkies hoog.\n\n" +
        'a) Beskryf waar die spieëlhoeke sou wees.\n' +
        'b) As jy al die spieëlhoeke verbind, watter vorm sou jy kry?\n' +
        'c) Hoe wyd sou die volledige simmetriese vorm wees?',
      answer:
        'a) Die spieëlhoeke is 2, 4 en 6 blokkies aan die ander kant van die simmetrielyn, op dieselfde hoogtes as die oorspronklike hoeke.\n\n' +
        'b) Deur die spieëlhoeke te verbind kry jy dieselfde vorm as die oorspronklike helfte, maar omgeflip — ’n spieëlbeeld.\n\n' +
        'c) Die wydste punt strek 6 blokkies links en 6 blokkies regs van die lyn, wat ’n totale wydte van 6 + 6 = 12 blokkies gee.',
    },

    // ── SECTION 4: SYMMETRY IN REAL LIFE AND LETTERS ─────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Skryf twee voorbeelde van simmetrie wat jy in die natuur kan vind.',
      answer:
        'Enige twee geldige voorbeelde uit die natuur is korrek.\n\n' +
        'Voorbeelde sluit in:\n' +
        '• Skoenlappervlerke — vou in die middel en albei vlerke pas\n' +
        '• Blare — die sentrale nerf dien as ’n simmetrielyn\n' +
        '• Sneeuvlokkies — het 6 simmetrielyne\n' +
        '• Seesterre — het 5 simmetrielyne',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        "Watter van hierdie letters het ’n vertikale simmetrielyn?\n\nA, B, C, F, H, M, S, T, X",
      answer: 'A, H, M, T, X',
      correctAnswer: 'AHMTX',
      correctAnswers: ['AHMTX', 'A,H,M,T,X', 'AHMT,X', 'A H M T X'],
      explanation:
        'Toets elke letter met \’n vertikale vou (linkerhelfte spieël regterhelfte):\n' +
        '• A — ja, vertikale simmetrie ✓\n' +
        '• B — nee (B het horisontale simmetrie, nie vertikaal nie)\n' +
        '• C — nee (C het horisontale simmetrie, nie vertikaal nie)\n' +
        '• F — geen simmetrielyne nie\n' +
        '• H — ja, vertikale simmetrie ✓\n' +
        '• M — ja, vertikale simmetrie ✓\n' +
        '• S — geen simmetrielyne nie\n' +
        '• T — ja, vertikale simmetrie ✓\n' +
        '• X — ja, vertikale simmetrie ✓\n\n' +
        'Letters met vertikale simmetrie: A, H, M, T, X',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Hoeveel simmetrielyne het die woord MOM in totaal, deur elke letter apart te tel?\n\n' +
        'M het 1 vertikale simmetrielyn.\n' +
        'O het oneindige lyne — tel slegs vertikaal en horisontaal (2 in totaal).\n' +
        'M het 1 vertikale simmetrielyn.',
      answer: '4',
      correctAnswer: '4',
      correctAnswers: ['4', 'vier', '4 lyne', '4 simmetrielyne'],
      explanation:
        'Tel elke letter se simmetrielyne:\n' +
        'M → 1 (slegs vertikaal)\n' +
        'O → 2 (vertikaal + horisontaal, soos aangedui)\n' +
        'M → 1 (slegs vertikaal)\n\n' +
        'Totaal: 1 + 2 + 1 = 4 simmetrielyne.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Verduidelik jou werkwyse vir hoe jy die simmetrielyne in die woord MOM getel het.',
      answer:
        'Werkwyse:\n' +
        '• M — het 1 vertikale simmetrielyn (vou links na regs, albei helftes pas)\n' +
        '• O — het oneindige simmetrielyne, maar as ons slegs vertikaal en horisontaal tel, kry ons 2\n' +
        '• M — het weer 1 vertikale simmetrielyn\n\n' +
        'Totaal: 1 + 2 + 1 = 4 simmetrielyne.',
    },

  ],

  scoreMessages: [
    { minScore: 21, message: 'Volpunte! Jy het simmetrie baasgeraak.' },
    { minScore: 16, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit baasraak.' },
    { minScore: 11, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0, message: 'Hou aan! Lees weer versigtig deur die studiegids en probeer dan weer.' },
  ],
}
