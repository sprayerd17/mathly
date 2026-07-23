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
      openQuestions: [],
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
      openQuestions: [],
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
            `<strong>Stap 1:</strong> Identifiseer die <span style="color:#dc2626;font-weight:700;">simmetrielyn</span> — die vertikale stippellyn in rooi — en die <span style="color:#1e40af;font-weight:700;">gegewe (blou) helfte</span> met punte A, B en C daarop gemerk:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <svg viewBox="0 0 220 180" width="220" height="180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><polygon points="110,30 90,50 70,90 50,130 110,150" fill="#dbeafe" fill-opacity="0.7" stroke="#1e40af" stroke-width="2.5"/><circle cx="90" cy="50" r="4" fill="#1e40af"/><text x="85" y="46" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">A</text><circle cx="70" cy="90" r="4" fill="#1e40af"/><text x="65" y="86" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#1e40af"/><text x="45" y="126" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">C</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>
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
            `<strong>Stap 4:</strong> Verbind die spieëlpunte A′ → B′ → C′ in dieselfde volgorde as wat die oorspronklike punte verbind is. Die <span style="color:#16a34a;font-weight:700;">groen helfte</span> behoort soos ’n presiese refleksie van die <span style="color:#1e40af;font-weight:700;">blou helfte</span> te lyk:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <svg viewBox="0 0 220 180" width="220" height="180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><polygon points="110,30 90,50 70,90 50,130 110,150" fill="#dbeafe" fill-opacity="0.7" stroke="#1e40af" stroke-width="2.5"/><polygon points="110,30 130,50 150,90 170,130 110,150" fill="#dcfce7" fill-opacity="0.7" stroke="#16a34a" stroke-width="2.5"/><circle cx="90" cy="50" r="4" fill="#1e40af"/><text x="85" y="46" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">A</text><circle cx="70" cy="90" r="4" fill="#1e40af"/><text x="65" y="86" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#1e40af"/><text x="45" y="126" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">C</text><circle cx="130" cy="50" r="4" fill="#16a34a"/><text x="135" y="46" font-size="13" font-weight="700" fill="#16a34a">A′</text><circle cx="150" cy="90" r="4" fill="#16a34a"/><text x="155" y="86" font-size="13" font-weight="700" fill="#16a34a">B′</text><circle cx="170" cy="130" r="4" fill="#16a34a"/><text x="175" y="126" font-size="13" font-weight="700" fill="#16a34a">C′</text></svg>
</div>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">Die twee helftes vorm saam die volledige simmetriese vorm ✓</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: "Rooster wat die helfte van ’n onreëlmatige vorm links van ’n vertikale rooi simmetrielyn wys, met die spieëlhelfte in groen regs voltooi",
      diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><polygon points="110,30 90,50 70,90 50,130 110,150" fill="#dbeafe" fill-opacity="0.7" stroke="#1e40af" stroke-width="2.5"/><polygon points="110,30 130,50 150,90 170,130 110,150" fill="#dcfce7" fill-opacity="0.7" stroke="#16a34a" stroke-width="2.5"/><circle cx="90" cy="50" r="4" fill="#1e40af"/><text x="85" y="46" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">A</text><circle cx="70" cy="90" r="4" fill="#1e40af"/><text x="65" y="86" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#1e40af"/><text x="45" y="126" font-size="13" font-weight="700" fill="#1e40af" text-anchor="end">C</text><circle cx="130" cy="50" r="4" fill="#16a34a"/><text x="135" y="46" font-size="13" font-weight="700" fill="#16a34a">A′</text><circle cx="150" cy="90" r="4" fill="#16a34a"/><text x="155" y="86" font-size="13" font-weight="700" fill="#16a34a">B′</text><circle cx="170" cy="130" r="4" fill="#16a34a"/><text x="175" y="126" font-size="13" font-weight="700" fill="#16a34a">C′</text></svg>',

      videoPlaceholder: "Kort video wat stap vir stap wys hoe om die ander helfte van ’n simmetriese figuur op ’n rooster te teken deur die simmetrielyn te gebruik",

      practiceQuestions: [],
      openQuestions: [],
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
      openQuestions: [],
    },
  ],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae): A basics(0-3) B tel(4-8) C letters(9-11) D veelhoek(12-14) E rooster(15-17) F redenering(18-19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: "’n Vorm word presies in die helfte gevou en albei kante pas perfek. Wat word hierdie vouliyn genoem?", answer: 'Simmetrielyn', checkMode: 'auto', correctAnswer: 'simmetrielyn', correctAnswers: ['simmetrielyn', 'die simmetrielyn', 'vouliyn'], explanation: 'Die vouliyn wat ’n vorm in twee bypassende spieëlbeeld-helftes verdeel, word die simmetrielyn genoem.' },
        { difficulty: 'Easy', question: "Is ’n vierkant simmetries?", answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: "’n Vierkant kan gevou word sodat albei helftes presies pas — dit is simmetries." },
        { difficulty: 'Easy', question: "Waar of Onwaar: As jy ’n vorm langs ’n lyn vou en die twee helftes pas NIE, is daardie lyn steeds ’n simmetrielyn.", answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: '’n Lyn tel slegs as ’n simmetrielyn as albei helftes presies pas wanneer dit gevou word. As hulle nie pas nie, is dit nie ’n simmetrielyn nie.' },
        { difficulty: 'Easy', question: 'Is die letter S simmetries?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Maak nie saak hoe jy die letter S vou nie, die twee helftes pas nooit — dit het 0 simmetrielyne.' },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n sirkel?", answer: 'Oneindig', checkMode: 'auto', correctAnswer: 'oneindig', correctAnswers: ['oneindig', 'oneindiglyne', 'onbeperk', 'eindeloos', 'oneindigvellyne'], explanation: 'Enige lyn deur die middelpunt van ’n sirkel (’n middellyn) is ’n simmetrielyn, so ’n sirkel het oneindige simmetrielyne.' },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n vierkant?", answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier', '4 lyne'], explanation: "’n Vierkant het 4 simmetrielyne: vertikaal, horisontaal, en 2 diagonale." },
        { difficulty: 'Easy-Medium', question: "Watter een van hierdie het meer simmetrielyne: ’n vierkant of ’n reghoek (nie ’n vierkant nie)?", answer: "’n Vierkant", checkMode: 'auto', correctAnswer: 'vierkant', correctAnswers: ['vierkant', 'nvierkant', 'dievierkant'], explanation: "’n Vierkant het 4 simmetrielyne, terwyl ’n reghoek wat nie ’n vierkant is nie, slegs 2 het." },
        { difficulty: 'Medium', question: "Hoeveel simmetrielyne het ’n skalene driehoek (al die sye verskillende lengtes)?", answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen'], explanation: '’n Skalene driehoek het al die sye en hoeke verskillend, so geen vou lewer twee bypassende helftes op nie. Dit het 0 simmetrielyne.' },
        { difficulty: 'Medium', question: "Kagiso sê ’n ruit (al 4 sye gelyk, geen regte hoeke) het 4 simmetrielyne, net soos ’n vierkant, omdat albei vorms 4 gelyke sye het. Is Kagiso korrek?", answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: "Kagiso is verkeerd. ’n Ruit het slegs 2 simmetrielyne — sy twee diagonale. Omdat sy hoeke nie regte hoeke is nie, pas die vertikale en horisontale voue nie, anders as by ’n vierkant. Om gelyke sye te hê is nie op sy eie genoeg nie." },
        { difficulty: 'Medium', question: 'Het die letter M ’n vertikale simmetrielyn?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter M vou netjies deur die middel — die linker- en regterhelftes pas.' },
        { difficulty: 'Medium', question: 'Watter letter het BEIDE ’n vertikale en ’n horisontale simmetrielyn: H of N?', answer: 'H', checkMode: 'auto', correctAnswer: 'H', correctAnswers: ['H', 'h'], explanation: 'Die letter H kan vertikaal en horisontaal gevou word, en in albei gevalle pas die helftes. N het glad geen simmetrielyne nie.' },
        { difficulty: 'Medium', question: 'Watter letters in die woord "MUM" (MA) het ten minste een simmetrielyn?', answer: 'M, U en M (al drie letters)', checkMode: 'auto', correctAnswer: 'MUM', correctAnswers: ['MUM', 'M,U,M', 'M, U, M', 'aldrieletters', 'mum'], explanation: 'M het ’n vertikale simmetrielyn, en U het ook ’n vertikale simmetrielyn. Aangesien die woord M-U-M is, het elke letter daarin ten minste een simmetrielyn.' },
        { difficulty: 'Medium', question: "’n Reëlmatige veelhoek het 5 gelyke sye (’n reëlmatige vyfhoek). Hoeveel simmetrielyne het dit?", answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf', '5 lyne'], explanation: 'ʼn Reëlmatige veelhoek het dieselfde aantal simmetrielyne as wat dit sye het. ’n Reëlmatige vyfhoek het 5 sye, so dit het 5 simmetrielyne.' },
        { difficulty: 'Medium', question: "’n Reëlmatige veelhoek het 8 gelyke sye (’n reëlmatige agthoek). Hoeveel simmetrielyne het dit?", answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt', '8 lyne'], explanation: "Vir ’n reëlmatige veelhoek is die aantal simmetrielyne altyd gelyk aan die aantal sye — 8 sye beteken 8 simmetrielyne." },
        { difficulty: 'Medium', question: "Verduidelik hoekom ’n reëlmatige veelhoek altyd dieselfde aantal simmetrielyne het as wat dit sye het.", answer: 'Omdat al die sye en hoeke gelyk is, lewer elke vou vanaf ’n hoek (of middelpunt) na die teenoorgestelde sy twee identiese helftes op.', checkMode: 'self', explanation: 'In ’n reëlmatige veelhoek is elke sy en elke hoek presies gelyk, so vir elke hoek is daar presies een bypassende vouliyn na die teenoorgestelde sy of middelpunt wat twee identiese helftes oplewer — dit gee een simmetrielyn per sy.' },
        { difficulty: 'Medium-Hard', question: "Die rooster wys ’n vertikale rooi stippellyn as simmetrielyn met punte A, B en C slegs aan die linkerkant gemerk. Hoeveel blokkies vanaf die lyn is punt A, en hoeveel blokkies vanaf die lyn behoort sy spieëlpunt aan die regterkant te wees?", answer: 'A is 2 blokkies vanaf die lyn; sy spieëlpunt is ook 2 blokkies vanaf die lyn, aan die regterkant.', checkMode: 'auto', correctAnswer: '2en2', correctAnswers: ['2en2', '2,2', '22', 'albeitwee', '2blokkiesen2blokkies'], explanation: 'Punt A sit 2 blokkies links van die simmetrielyn. ’n Spieëlpunt is altyd dieselfde afstand vanaf die lyn as die oorspronklike punt, net aan die teenoorgestelde kant — so A′ is ook 2 blokkies vanaf die lyn, maar aan die regterkant.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="70" cy="50" r="4" fill="#2563eb"/><text x="65" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">A</text><circle cx="90" cy="90" r="4" fill="#2563eb"/><text x="85" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#2563eb"/><text x="45" y="126" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">C</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Medium-Hard', question: "Met dieselfde rooster: punt C is 3 blokkies vanaf die simmetrielyn, en punt B is 1 blokkie vanaf die lyn. As jy die spieëlpunte vir A, B en C sou inteken, sou die totale hoogte van die voltooide vorm verander van die hoogte van net die gegewe helfte?", answer: 'Nee, die hoogte bly dieselfde — slegs die wydte verander.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'neeblydieselfde', 'blydieselfde', 'onveranderd', 'hoogteverandernie'], explanation: '’n Vertikale simmetrielyn reflekteer punte slegs links en regs. Dit verskuif nooit iets op of af nie, so die algehele hoogte van die vorm bly presies dieselfde — slegs die wydte neem toe soos die spieëlhelfte bygevoeg word.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="70" cy="50" r="4" fill="#2563eb"/><text x="65" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">A</text><circle cx="90" cy="90" r="4" fill="#2563eb"/><text x="85" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#2563eb"/><text x="45" y="126" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">C</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Medium-Hard', question: "Met dieselfde rooster weer: is die rooi stippellyn (simmetrielyn) vertikaal of horisontaal georiënteer, en wat wys jou dit?", answer: 'Vertikaal — die rooi stippellyn loop op en af (bo na onder) op die rooster.', checkMode: 'auto', correctAnswer: 'vertikaal', correctAnswers: ['vertikaal', 'vertikaalopaf'], explanation: "’n Vertikale simmetrielyn loop reguit op en af, en verdeel die rooster in ’n linkerkant en ’n regterkant, presies soos die rooi stippellyn hier geteken is — nie sy-aan-sy soos ’n horisontale lyn sou wees nie.", diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="70" cy="50" r="4" fill="#2563eb"/><text x="65" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">A</text><circle cx="90" cy="90" r="4" fill="#2563eb"/><text x="85" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">B</text><circle cx="50" cy="130" r="4" fill="#2563eb"/><text x="45" y="126" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">C</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Hard', question: "Is ’n mens se gesig perfek simmetries? Verduidelik jou redenasie.", answer: "Nee — ’n regte gesig is slegs redelik simmetries.", checkMode: 'self', explanation: '’n Mens se gesig lyk met die eerste oogopslag simmetries, maar in werklikheid is geen twee helftes van ’n regte gesig ooit perfek identies nie — daar is altyd klein natuurlike verskille, so ons sê dit is "redelik" of "ongeveer" simmetries, nie perfek simmetries nie.' },
        { difficulty: 'Hard', question: "Lerato sê elke 4-sydige vorm het 4 simmetrielyne, net soos ’n vierkant. Is sy korrek? Verduidelik, en gee ten minste een voorbeeld wat haar bewering weerlê.", answer: "Nee — byvoorbeeld, ’n reghoek het 2, en ’n algemene parallelogram het 0.", checkMode: 'self', explanation: "Lerato is verkeerd. Slegs spesiale 4-sydige vorms soos ’n vierkant het 4 simmetrielyne. ’n Reghoek (nie ’n vierkant nie) het 2, ’n ruit het 2, en ’n parallelogram het 0 simmetrielyne — die aantal lyne hang af van die presiese vorm, nie net die aantal sye nie." },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het simmetrie in vorms, letters, veelhoeke en roosters baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan simmetrie goed — gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die afdelings van die studiegids wat jy moeilik gevind het weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae): dieselfde bloklaaiuit, gevarieerde bewoording/getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: "Wanneer ’n vorm gevou word sodat albei helftes presies op mekaar land, wat noem ons hierdie vouliyn?", answer: 'Simmetrielyn', checkMode: 'auto', correctAnswer: 'simmetrielyn', correctAnswers: ['simmetrielyn', 'die simmetrielyn', 'vouliyn'], explanation: '’n Vouliyn waarlangs albei helftes van ’n vorm presies pas, word die simmetrielyn genoem.' },
        { difficulty: 'Easy', question: 'Is die letter A simmetries?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter A kan deur die middel gevou word, en die linker- en regterhelftes pas — dit is simmetries.' },
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Lyn wat enige plek oor ’n vorm getrek word, is outomaties ’n simmetrielyn, selfs al lyk die twee helftes verskillend.", answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: '’n Lyn tel slegs as ’n simmetrielyn as om daarlangs te vou, twee helftes oplewer wat presies pas. ’n Lukrake lyn oor ’n vorm sal gewoonlik nie.' },
        { difficulty: 'Easy', question: 'Het die letter F enige simmetrielyne?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die letter F kan langs geen lyn gevou word sodat albei helftes pas nie — dit het 0 simmetrielyne.' },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n gelykbenige driehoek (twee gelyke sye)?", answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een', '1 lyn'], explanation: "’n Gelykbenige driehoek het presies een simmetrielyn — die vouliyn wat vanaf die boonste hoek reguit af na die middel van die basis loop." },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n reghoek (nie ’n vierkant nie)?", answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee', '2 lyne'], explanation: "’n Reghoek het 2 simmetrielyne: een vertikaal en een horisontaal. Die diagonale werk nie omdat die sye nie almal gelyk is nie." },
        { difficulty: 'Easy-Medium', question: "Watter vorm het meer simmetrielyne: ’n reëlmatige vyfhoek of ’n reëlmatige seshoek?", answer: "’n Reëlmatige seshoek", checkMode: 'auto', correctAnswer: 'seshoek', correctAnswers: ['seshoek', 'reelmatigeseshoek', 'dieseshoek'], explanation: "’n Reëlmatige seshoek het 6 simmetrielyne, meer as die vyfhoek se 5 lyne." },
        { difficulty: 'Medium', question: "Hoeveel simmetrielyne het ’n algemene parallelogram (skuins sye, teenoorgestelde sye gelyk, maar nie ’n reghoek of ruit nie)?", answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen', 'geen lyne'], explanation: '’n Algemene parallelogram het 0 simmetrielyne — geen vou lewer twee bypassende helftes op nie, al is die teenoorgestelde sye gelyk.' },
        { difficulty: 'Medium', question: "Naledi sê ’n gelykbenige driehoek en ’n gelyksydige driehoek moet dieselfde aantal simmetrielyne hê, aangesien albei ten minste 2 gelyke sye het. Is Naledi korrek?", answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: "Naledi is verkeerd. ’n Gelykbenige driehoek het 1 simmetrielyn, maar ’n gelyksydige driehoek (al 3 sye gelyk) het 3 simmetrielyne — een vanaf elke hoek. Om sommige gelyke sye te hê waarborg nie dieselfde simmetrie nie." },
        { difficulty: 'Medium', question: 'Het die letter W ’n vertikale simmetrielyn?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter W vou netjies deur die middel — die linker- en regterhelftes pas.' },
        { difficulty: 'Medium', question: 'Watter letter het GLAD GEEN simmetrielyne nie: O of Z?', answer: 'Z', checkMode: 'auto', correctAnswer: 'Z', correctAnswers: ['Z', 'z'], explanation: 'O het albei vertikale en horisontale simmetrie, maar Z het glad geen simmetrielyn nie.' },
        { difficulty: 'Medium', question: 'Watter letters in die woord "TOY" (SPEELDING) het ten minste een simmetrielyn?', answer: 'T, O en Y (al drie letters)', checkMode: 'auto', correctAnswer: 'TOY', correctAnswers: ['TOY', 'T,O,Y', 'T, O, Y', 'aldrieletters', 'T, O en Y'], explanation: 'T het ’n vertikale simmetrielyn, O het beide vertikale en horisontale simmetrie, en Y het ook ’n vertikale simmetrielyn. Al drie letters in TOY het ten minste een simmetrielyn.' },
        { difficulty: 'Medium', question: "’n Reëlmatige veelhoek het 6 gelyke sye (’n reëlmatige seshoek). Hoeveel simmetrielyne het dit?", answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses', '6 lyne'], explanation: "’n Reëlmatige seshoek het 6 gelyke sye, so dit het 6 simmetrielyne — 3 deur teenoorgestelde hoeke en 3 deur middelpunte van teenoorgestelde sye." },
        { difficulty: 'Medium', question: "’n Reëlmatige veelhoek het 10 gelyke sye (’n reëlmatige tienhoek). Hoeveel simmetrielyne het dit?", answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', 'tien', '10 lyne'], explanation: "’n Reëlmatige veelhoek het altyd dieselfde aantal simmetrielyne as wat dit sye het — 10 sye beteken 10 simmetrielyne." },
        { difficulty: 'Medium', question: 'Verduidelik hoekom die reël "simmetrielyne is gelyk aan aantal sye" slegs vir REËLMATIGE veelhoeke werk en nie vir onreëlmatige veelhoeke nie.', answer: 'Omdat onreëlmatige veelhoeke nie al hul sye en hoeke gelyk het nie, so die meeste voue lewer nie bypassende helftes op nie.', checkMode: 'self', explanation: 'Die reël berus daarop dat elke sy en hoek identies is, sodat elke hoek met ’n bypassende vou ooreenstem. In ’n onreëlmatige veelhoek is die sye en hoeke verskillende groottes, so die meeste moontlike vouliyne sal nie twee identiese helftes skep nie — die vorm kan minder simmetrielyne hê as wat dit sye het, of glad geen.' },
        { difficulty: 'Medium-Hard', question: "Die rooster wys ’n vertikale rooi stippellyn as simmetrielyn met punte P, Q en R slegs aan die linkerkant gemerk. Punt P is 1 blokkie vanaf die lyn. Hoe ver vanaf die lyn behoort sy spieëlpunt te wees, en aan watter kant?", answer: '1 blokkie vanaf die lyn, aan die regterkant.', checkMode: 'auto', correctAnswer: '1regs', correctAnswers: ['1regs', '1blokkieregs', '1', 'eenblokkieregs'], explanation: '’n Spieëlpunt is altyd dieselfde afstand vanaf die simmetrielyn as die oorspronklike punt, net aan die teenoorgestelde kant. Aangesien P 1 blokkie links van die lyn is, is sy spieëlpunt P′ 1 blokkie na regs.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="90" cy="50" r="4" fill="#2563eb"/><text x="85" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">P</text><circle cx="50" cy="90" r="4" fill="#2563eb"/><text x="45" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Q</text><circle cx="70" cy="150" r="4" fill="#2563eb"/><text x="65" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">R</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Medium-Hard', question: "Met dieselfde rooster: punt Q is 3 blokkies vanaf die lyn en punt R is 2 blokkies vanaf die lyn. Sodra die spieëlhelfte met P, Q en R ingeteken is, sal die wydte van die hele vorm meer, minder, of dieselfde wees as net die gegewe (linker) helfte?", answer: 'Meer — die totale wydte neem toe omdat die spieëlhelfte nuwe blokkies aan die regterkant byvoeg.', checkMode: 'auto', correctAnswer: 'meer', correctAnswers: ['meer', 'wyer', 'groter', 'neemtoe'], explanation: 'Om die gegewe helfte oor die simmetrielyn te reflekteer, voeg ’n heeltemal nuwe spieëlhelfte aan die regterkant by. Dit maak die voltooide vorm wyer as net die oorspronklike helfte — ongeveer dubbel die wydte, aangesien die spieëlhelfte in grootte ooreenstem met die oorspronklike.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="90" cy="50" r="4" fill="#2563eb"/><text x="85" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">P</text><circle cx="50" cy="90" r="4" fill="#2563eb"/><text x="45" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Q</text><circle cx="70" cy="150" r="4" fill="#2563eb"/><text x="65" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">R</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Medium-Hard', question: "Met dieselfde rooster weer: as die rooi stippellyn eerder van links na regs oor die middel van die rooster getrek was, in plaas van op en af, watter tipe simmetrielyn sou dit wees?", answer: '’n Horisontale simmetrielyn.', checkMode: 'auto', correctAnswer: 'horisontaal', correctAnswers: ['horisontaal', 'nhorisontalelyn'], explanation: "’n Lyn wat van links na regs (sy-aan-sy) oor ’n vorm of rooster loop, en dit in ’n boonste en onderste helfte verdeel, word ’n horisontale simmetrielyn genoem — anders as die vertikale lyn hier, wat links en regs verdeel.", diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="90" cy="50" r="4" fill="#2563eb"/><text x="85" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">P</text><circle cx="50" cy="90" r="4" fill="#2563eb"/><text x="45" y="86" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Q</text><circle cx="70" cy="150" r="4" fill="#2563eb"/><text x="65" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">R</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Hard', question: "’n Stopteken is ’n reëlmatige agthoek en ’n heuningkoekvak is ’n reëlmatige seshoek. Sipho sê hulle het dieselfde aantal simmetrielyne. Kontroleer sy redenasie en verduidelik of hy korrek is.", answer: 'Nee — die agthoek het 8 lyne, die seshoek het 6 lyne.', checkMode: 'self', explanation: "Sipho is verkeerd. ’n Reëlmatige agthoek het 8 sye en dus 8 simmetrielyne, terwyl ’n reëlmatige seshoek 6 sye en 6 simmetrielyne het. Hulle is verskillende vorms met verskillende aantal sye, so hulle kan nie dieselfde aantal simmetrielyne hê nie." },
        { difficulty: 'Hard', question: "’n Vlagontwerp gebruik ’n reghoek met ’n kleiner gelyksydige driehoek presies in die middel geplaas. Verduidelik hoeveel simmetrielyne die gekombineerde ontwerp kan hê, en motiveer jou antwoord.", answer: "Dit kan 1 vertikale simmetrielyn hê, as die driehoek gesentreer is en reguit op of af wys.", checkMode: 'self', explanation: "’n Reghoek alleen sou 2 simmetrielyne hê (vertikaal en horisontaal), maar om ’n driehoek in die middel by te voeg, breek die horisontale simmetrie tensy die driehoek self ook simmetries is om daardie selfde lyn. As die driehoek gesentreer is en reguit op (of af) wys, werk slegs die gedeelde vertikale lyn nog vir albei vorms, so die gekombineerde ontwerp het net 1 simmetrielyn." },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het simmetrie in vorms, letters, veelhoeke en roosters baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan simmetrie goed — gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die afdelings van die studiegids wat jy moeilik gevind het weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae): dieselfde bloklaaiuit, gevarieerde bewoording/getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: "Wat noem ons die vouliyn waarlangs ’n vorm in twee spieëlbeeld-helftes verdeel kan word?", answer: 'Simmetrielyn', checkMode: 'auto', correctAnswer: 'simmetrielyn', correctAnswers: ['simmetrielyn', 'die simmetrielyn', 'vouliyn'], explanation: 'Hierdie vouliyn, waarlangs die twee helftes presies pas, word die simmetrielyn genoem.' },
        { difficulty: 'Easy', question: 'Is die letter B simmetries?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter B kan horisontaal (bo na onder) gevou word en die twee boggels pas — dit is simmetries.' },
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Vouliyn tel slegs as ’n simmetrielyn as dit presies deur die middel van die vorm loop op ’n manier wat albei helftes identies maak.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: '’n Simmetrielyn moet twee helftes oplewer wat presies pas wanneer dit gevou word — dit is die definisie van die voutoets.' },
        { difficulty: 'Easy', question: 'Het die letter Z enige simmetrielyne?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die letter Z kan langs geen reguit lyn gevou word sodat albei helftes pas nie — dit het 0 simmetrielyne.' },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n ruit (al 4 sye gelyk, geen regte hoeke nie)?", answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee', '2 lyne'], explanation: "’n Ruit het 2 simmetrielyne — sy twee diagonale. Die vertikale en horisontale voue werk nie omdat sy hoeke nie regte hoeke is nie." },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n gelyksydige driehoek (al 3 sye gelyk)?", answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie', '3 lyne'], explanation: "’n Gelyksydige driehoek het 3 gelyke sye, so dit het 3 simmetrielyne — een vanaf elke hoek na die middelpunt van die teenoorgestelde sy." },
        { difficulty: 'Easy-Medium', question: "Watter een het meer simmetrielyne: ’n gelyksydige driehoek of ’n gelykbenige driehoek?", answer: 'Die gelyksydige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydige', correctAnswers: ['gelyksydige', 'gelyksydigedriehoek', 'diegelyksydigedriehoek'], explanation: "’n Gelyksydige driehoek het 3 simmetrielyne, terwyl ’n gelykbenige driehoek slegs 1 het — so die gelyksydige driehoek het meer." },
        { difficulty: 'Medium', question: "Hoeveel simmetrielyne het ’n vierkant in vergelyking met ’n skalene driehoek?", answer: 'Die vierkant het 4, die skalene driehoek het 0.', checkMode: 'auto', correctAnswer: '4en0', correctAnswers: ['4en0', '4,0', '40'], explanation: "’n Vierkant het 4 simmetrielyne. ’n Skalene driehoek, met al die sye en hoeke verskillend, het 0 simmetrielyne." },
        { difficulty: 'Medium', question: "Bongani sê ’n reghoek (nie ’n vierkant nie) het 4 simmetrielyne, net soos ’n vierkant, omdat albei vorms 4 regte hoeke het. Is Bongani korrek?", answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: "Bongani is verkeerd. ’n Reghoek wat nie ’n vierkant is nie, het slegs 2 simmetrielyne (vertikaal en horisontaal) — sy diagonale werk nie as simmetrielyne nie omdat sy sye nie almal gelyk is nie, anders as ’n vierkant. Om regte hoeke te hê is nie op sy eie genoeg nie." },
        { difficulty: 'Medium', question: 'Het die letter T ’n vertikale simmetrielyn?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter T vou deur die middel van sy stam, en die linker- en regterhelftes pas.' },
        { difficulty: 'Medium', question: 'Watter letter het BEIDE ’n vertikale en ’n horisontale simmetrielyn: X of S?', answer: 'X', checkMode: 'auto', correctAnswer: 'X', correctAnswers: ['X', 'x'], explanation: 'Die letter X kan vertikaal en horisontaal gevou word, en in albei gevalle pas die helftes. S het glad geen simmetrielyne nie.' },
        { difficulty: 'Medium', question: 'Watter letters in die woord "HAT" (HOED) het ten minste een simmetrielyn?', answer: 'H, A en T (al drie letters)', checkMode: 'auto', correctAnswer: 'HAT', correctAnswers: ['HAT', 'H,A,T', 'H, A, T', 'aldrieletters', 'hat'], explanation: 'H het beide vertikale en horisontale simmetrie, A het ’n vertikale simmetrielyn, en T het ook ’n vertikale simmetrielyn. Elke letter in HAT het ten minste een simmetrielyn.' },
        { difficulty: 'Medium', question: "’n Reëlmatige veelhoek het 9 gelyke sye (’n reëlmatige negehoek). Hoeveel simmetrielyne het dit?", answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nege', '9 lyne'], explanation: "’n Reëlmatige veelhoek het dieselfde aantal simmetrielyne as wat dit sye het. ’n Reëlmatige negehoek het 9 sye, so dit het 9 simmetrielyne." },
        { difficulty: 'Medium', question: "’n Reëlmatige veelhoek het 12 gelyke sye (’n reëlmatige twaalfhoek). Hoeveel simmetrielyne het dit?", answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twaalf', '12 lyne'], explanation: "Vir enige reëlmatige veelhoek is die aantal simmetrielyne gelyk aan die aantal sye — 12 sye gee 12 simmetrielyne." },
        { difficulty: 'Medium', question: "Verduidelik hoekom om die aantal sye van ’n reëlmatige veelhoek te verdubbel (byvoorbeeld, van ’n seshoek na ’n 12-sydige vorm), ook sy aantal simmetrielyne verdubbel.", answer: 'Omdat elke sy altyd presies een bypassende simmetrielyn bydra in ’n reëlmatige veelhoek.', checkMode: 'self', explanation: 'In ’n reëlmatige veelhoek is die aantal simmetrielyne altyd gelyk aan die aantal sye — elke sy (of hoek) dra presies een lyn by. So as die aantal sye van 6 na 12 verdubbel, verdubbel die aantal simmetrielyne ook, van 6 na 12.' },
        { difficulty: 'Medium-Hard', question: "Die rooster wys ’n vertikale rooi stippellyn as simmetrielyn met punte X, Y en Z slegs aan die linkerkant gemerk. Punt X is 3 blokkies vanaf die lyn. Hoe ver vanaf die lyn behoort sy spieëlpunt te wees, en aan watter kant?", answer: '3 blokkies vanaf die lyn, aan die regterkant.', checkMode: 'auto', correctAnswer: '3regs', correctAnswers: ['3regs', '3blokkiesregs', '3', 'drieblokkiesregs'], explanation: '’n Spieëlpunt sit dieselfde afstand vanaf die simmetrielyn as die oorspronklike punt, net aan die teenoorgestelde kant. Aangesien X 3 blokkies links van die lyn is, is sy spieëlpunt X′ 3 blokkies na regs.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="50" cy="50" r="4" fill="#2563eb"/><text x="45" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">X</text><circle cx="70" cy="100" r="4" fill="#2563eb"/><text x="65" y="96" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Y</text><circle cx="90" cy="150" r="4" fill="#2563eb"/><text x="85" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Z</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Medium-Hard', question: "Met dieselfde rooster: punt Y is 2 blokkies vanaf die lyn en punt Z is 1 blokkie vanaf die lyn. Verander dit hoe hoog of laag Y en Z is, in vergelyking met hul oorspronklike hoogtes, as jy hulle oor die lyn reflekteer?", answer: 'Nee — elke spieëlpunt bly op presies dieselfde hoogte as sy oorspronklike punt.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'blydieselfde', 'dieselfdehoogte', 'onveranderd'], explanation: '’n Vertikale simmetrielyn reflekteer punte slegs van links na regs — dit verander nooit hoe hoog of laag ’n punt is nie. So die spieëlpunte vir Y en Z bly op presies dieselfde hoogtes as Y en Z self.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="50" cy="50" r="4" fill="#2563eb"/><text x="45" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">X</text><circle cx="70" cy="100" r="4" fill="#2563eb"/><text x="65" y="96" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Y</text><circle cx="90" cy="150" r="4" fill="#2563eb"/><text x="85" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Z</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Medium-Hard', question: "Met dieselfde rooster weer: as jy kyk na waar punte X, Y en Z gemerk is, is die simmetrielyn vertikaal of horisontaal, en hoe kan jy dit net sien aan die manier waarop die rooi stippellyn geteken is?", answer: 'Vertikaal — die rooi stippellyn loop reguit op en af, nie sy-aan-sy nie.', checkMode: 'auto', correctAnswer: 'vertikaal', correctAnswers: ['vertikaal', 'vertikale', 'nvertikalelyn'], explanation: "Die rooi stippellyn loop van die bokant van die rooster na die onderkant, en verdeel dit in ’n linkerkant en ’n regterkant — daardie op-en-af-rigting is wat dit ’n vertikale simmetrielyn maak, eerder as ’n horisontale een wat sy-aan-sy sou loop.", diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><rect x="10" y="10" width="200" height="160" fill="none" stroke="#9ca3af" stroke-width="1"/><g stroke="#e5e7eb" stroke-width="1"><line x1="30" y1="10" x2="30" y2="170"/><line x1="50" y1="10" x2="50" y2="170"/><line x1="70" y1="10" x2="70" y2="170"/><line x1="90" y1="10" x2="90" y2="170"/><line x1="110" y1="10" x2="110" y2="170"/><line x1="130" y1="10" x2="130" y2="170"/><line x1="150" y1="10" x2="150" y2="170"/><line x1="170" y1="10" x2="170" y2="170"/><line x1="190" y1="10" x2="190" y2="170"/><line x1="10" y1="30" x2="210" y2="30"/><line x1="10" y1="50" x2="210" y2="50"/><line x1="10" y1="70" x2="210" y2="70"/><line x1="10" y1="90" x2="210" y2="90"/><line x1="10" y1="110" x2="210" y2="110"/><line x1="10" y1="130" x2="210" y2="130"/><line x1="10" y1="150" x2="210" y2="150"/></g><line x1="110" y1="10" x2="110" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><circle cx="50" cy="50" r="4" fill="#2563eb"/><text x="45" y="46" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">X</text><circle cx="70" cy="100" r="4" fill="#2563eb"/><text x="65" y="96" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Y</text><circle cx="90" cy="150" r="4" fill="#2563eb"/><text x="85" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">Z</text><text x="110" y="22" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">simmetrielyn</text></svg>' },
        { difficulty: 'Hard', question: "’n Padteken is in die vorm van ’n reëlmatige agthoek (’n stopteken) en ’n ander is in die vorm van ’n gelyksydige driehoek (’n toegeeteken). Watter een het meer simmetrielyne, en beteken dit dat die agthoekige teken in elke sin \"meer simmetries\" is?", answer: "Die agthoek het meer (8 teenoor 3), maar albei is steeds volledig simmetriese vorms — meer lyne beteken nie \"meer simmetries\" nie, net meer voue wat werk.", checkMode: 'self', explanation: "Die agthoek (stopteken) het 8 simmetrielyne, terwyl die gelyksydige driehoek (toegeeteken) 3 het. Die agthoek het meer moontlike vouliyne wat werk, maar albei vorms is ewe \"simmetries\" in die sin dat elke vou langs een van hul simmetrielyne twee bypassende helftes oplewer — die een is nie perfekter simmetries as die ander nie, dit het bloot meer lyne omdat dit meer sye het." },
        { difficulty: 'Hard', question: "Thabo sê ’n bynes-heuningkoek (gemaak van reëlmatige seshoeke) en ’n sokkerbalpatroon (gedeeltelik gemaak van reëlmatige vyfhoeke en seshoeke) moet presies dieselfde simmetrie hê omdat albei \"natuur-geïnspireerde\" ontwerpe is. Is Thabo korrek? Verduidelik.", answer: "Nee — ’n reëlmatige seshoek het 6 simmetrielyne terwyl ’n reëlmatige vyfhoek 5 het, so die vorms waaruit elke patroon bestaan, het verskillende simmetrie.", checkMode: 'self', explanation: "Thabo is verkeerd om aan te neem dat die twee ontwerpe dieselfde simmetrie deel net omdat albei van natuur-geïnspireerde vorms kom. ’n Heuningkoek se seshoeke het elk 6 simmetrielyne, maar die vyfhoeke wat in ’n sokkerbalpatroon gebruik word, het elk slegs 5 simmetrielyne — verskillende reëlmatige veelhoeke het verskillende hoeveelhede simmetrie, afhangende van hul aantal sye." },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het simmetrie in vorms, letters, veelhoeke en roosters baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan simmetrie goed — gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die afdelings van die studiegids wat jy moeilik gevind het weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
