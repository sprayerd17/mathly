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
    // SET 1 — SPOTTING SYMMETRY: SHAPES, LETTERS AND COUNTING LINES (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Wat is Simmetrie?',
      questions: [
        { difficulty: 'Easy', question: "’n Vorm word presies in die helfte gevou en albei kante pas perfek. Wat word hierdie vouliyn genoem?", answer: 'Simmetrielyn', checkMode: 'auto', correctAnswer: 'simmetrielyn', correctAnswers: ['simmetrielyn', 'die simmetrielyn', 'vouliyn'], explanation: 'Die vouliyn wat ’n vorm in twee bypassende spieëlbeeld-helftes verdeel, word die simmetrielyn genoem.' },
        { difficulty: 'Easy', question: "Is ’n vierkant simmetries?", answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: "’n Vierkant kan gevou word sodat albei helftes presies pas — dit is simmetries." },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n vierkant?", answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier', '4 lyne'], explanation: "’n Vierkant het 4 simmetrielyne: vertikaal, horisontaal, en 2 diagonale." },
        { difficulty: 'Easy', question: 'Het die letter S enige simmetrielyne?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Maak nie saak hoe jy die letter S vou nie, die twee helftes pas nooit — dit het 0 simmetrielyne.' },
        { difficulty: 'Easy', question: "Is ’n skoenlapper met vlerke saamgevou simmetries?", answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: "’n Skoenlapper wat in die middel gevou word, het twee vlerke wat presies pas — dit is simmetries." },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n reghoek (nie ’n vierkant nie)?", answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee', '2 lyne'], explanation: "’n Reghoek het 2 simmetrielyne: een vertikaal en een horisontaal. Die diagonale werk nie." },
        { difficulty: 'Easy', question: 'Het die letter A ’n vertikale simmetrielyn?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter A kan deur die middel gevou word en die linker- en regterkante pas — dit het vertikale simmetrie.' },
        { difficulty: 'Easy', question: "’n Vorm het geen lyn waarlangs dit gevou kan word sodat albei helftes pas nie. Wat noem ons hierdie vorm?", answer: 'Nie simmetries nie (asimmetries)', checkMode: 'auto', correctAnswer: 'niesimmetriesnie', correctAnswers: ['niesimmetriesnie', 'nie simmetries nie', 'asimmetries', 'geensimmetrie'], explanation: '’n Vorm sonder enige simmetrielyn word "nie simmetries nie" of "asimmetries" genoem.' },
        { difficulty: 'Easy', question: "As jy ’n vorm vou en die twee helftes pas NIE, is daardie vouliyn ’n simmetrielyn?", answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: '’n Lyn tel slegs as ’n simmetrielyn as albei helftes presies pas wanneer dit gevou word.' },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n sirkel?", answer: 'Oneindig', checkMode: 'auto', correctAnswer: 'oneindig', correctAnswers: ['oneindig', 'oneindiglyne', 'onbeperk', 'eindeloos', 'oneindigvellyne'], explanation: 'Enige lyn deur die middelpunt van ’n sirkel (’n middellyn) is ’n simmetrielyn, so ’n sirkel het oneindige simmetrielyne.' },
        { difficulty: 'Medium', question: "Is ’n skalene driehoek (al die sye verskillende lengtes) simmetries?", answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: '’n Skalene driehoek het al die sye en hoeke verskillend, so geen vou lewer twee bypassende helftes op nie. Dit het 0 simmetrielyne.' },
        { difficulty: 'Medium', question: "Hoeveel simmetrielyne het ’n gelyksydige driehoek (3 gelyke sye)?", answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie', '3 lyne'], explanation: "’n Gelyksydige driehoek het 3 gelyke sye, so dit het 3 simmetrielyne — een vanaf elke hoek na die middelpunt van die teenoorgestelde sy." },
        { difficulty: 'Medium', question: "Hoeveel simmetrielyne het ’n gelykbenige driehoek (slegs 2 gelyke sye)?", answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een', '1 lyn'], explanation: "’n Gelykbenige driehoek het presies 1 simmetrielyn, wat vanaf die boonste hoek na die middelpunt van die basis loop." },
        { difficulty: 'Medium', question: "Watter een hiervan het meer simmetrielyne: ’n vierkant of ’n reghoek (nie ’n vierkant nie)?", answer: "’n Vierkant", checkMode: 'auto', correctAnswer: 'vierkant', correctAnswers: ['vierkant', 'nvierkant', 'dievierkant'], explanation: "’n Vierkant het 4 simmetrielyne, terwyl ’n reghoek wat nie ’n vierkant is nie, slegs 2 het." },
        { difficulty: 'Medium', question: 'Die letter H word vertikaal deur die middel gevou. Pas die twee helftes?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter H het ’n vertikale simmetrielyn — die linker- en regterhelftes pas presies.' },
        { difficulty: 'Medium', question: 'Die letter H word ook horisontaal deur die middel gevou. Pas die twee helftes?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter H het ook ’n horisontale simmetrielyn — die boonste en onderste helftes pas. H het albei tipes.' },
        { difficulty: 'Medium', question: 'Het die letter F enige simmetrielyne?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die letter F kan langs geen lyn gevou word sodat albei helftes pas nie — dit het 0 simmetrielyne.' },
        { difficulty: 'Medium', question: "Amahle vou ’n hartvorm in die middel en albei kante pas. Is ’n hartvorm simmetries?", answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: "’n Hartvorm het een vertikale simmetrielyn deur die middel." },
        { difficulty: 'Medium', question: "Sipho sê ’n vorm kan slegs ooit 1 simmetrielyn hê. Is Sipho korrek?", answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: "Sipho is verkeerd — vorms kan 0, 1, 2, of baie simmetrielyne hê (’n vierkant het 4, ’n sirkel het oneindig)." },
        { difficulty: 'Medium', question: 'Hoeveel simmetrielyne het die letter O?', answer: '2 (vertikaal en horisontaal)', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee', '2 lyne'], explanation: 'Geskryf as ’n eenvoudige ovaal-/sirkelvorm, het die letter O ’n vertikale en ’n horisontale simmetrielyn — 2 lyne as ons slegs hierdie twee rigtings tel.' },
        { difficulty: 'Hard', question: "Lerato sê elke 4-sydige vorm het 4 simmetrielyne, net soos ’n vierkant. Is sy korrek?", answer: 'Nee', checkMode: 'self', explanation: "Lerato is verkeerd. Slegs spesiale 4-sydige vorms soos ’n vierkant het 4 simmetrielyne. ’n Reghoek het 2, ’n ruit het 2, en ’n parallelogram het 0 simmetrielyne — die aantal lyne hang af van die vorm, nie net die aantal sye nie." },
        { difficulty: 'Hard', question: "Thabo sê ’n sirkel het presies 4 simmetrielyne omdat ’n vierkant dit het. Verduidelik hoekom Thabo verkeerd is.", answer: "’n Sirkel het oneindige simmetrielyne.", checkMode: 'self', explanation: "’n Sirkel het oneindige simmetrielyne omdat enige reguit lyn deur die middelpunt dit in twee identiese helftes verdeel. ’n Vierkant is beperk tot 4 lyne omdat dit slegs 4 hoeke en 4 sye het — ’n sirkel het glad geen hoeke nie, so dit is nie op dieselfde manier beperk nie." },
        { difficulty: 'Hard', question: "Verduidelik in jou eie woorde wat dit beteken vir ’n vorm om simmetries te wees.", answer: "’n Vorm is simmetries as dit langs ’n lyn gevou kan word sodat albei helftes presies pas.", checkMode: 'self', explanation: 'ʼn Goeie antwoord verduidelik dat ’n simmetriese vorm langs ’n lyn (die simmetrielyn) gevou kan word sodat die een helfte presies op die ander land, soos ’n spieëlrefleksie.' },
        { difficulty: 'Hard', question: "’n Vorm het 0 simmetrielyne. Wat sê dit vir jou oor die vou van die vorm?", answer: 'Maak nie saak waar jy dit vou nie, die twee helftes sal nooit pas nie.', checkMode: 'self', explanation: '’n Vorm met 0 simmetrielyne het geen reguit lyn erens op die vorm waarlangs dit gevou kan word sodat albei helftes presies pas nie.' },
        { difficulty: 'Hard', question: "Hoekom het ’n vierkant meer simmetrielyne as ’n reghoek wat nie ’n vierkant is nie?", answer: "Omdat al 4 sye van ’n vierkant gelyk is, werk die diagonale ook as simmetrielyne.", checkMode: 'self', explanation: "’n Vierkant het al 4 sye gelyk, wat beteken dat om hoek tot hoek (diagonaal) te vou ook twee bypassende driehoeke oplewer. ’n Reghoek wat nie ’n vierkant is nie, het twee pare ongelyke sye, so sy diagonale voue pas nie — slegs die vertikale en horisontale voue werk." },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het die opspoor van simmetrie in vorms en letters baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy verstaan simmetrielyne goed — gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 13, message: 'Goeie poging! Oefen die voutoets op ’n paar meer vorms en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — TRICKIER SHAPES, POLYGONS AND MORE LETTERS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Vorms, Veelhoeke en Letters',
      questions: [
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n reëlmatige vyfhoek (5 gelyke sye)?", answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf', '5 lyne'], explanation: 'ʼn Reëlmatige veelhoek het dieselfde aantal simmetrielyne as wat dit sye het. ’n Reëlmatige vyfhoek het 5 sye, so dit het 5 simmetrielyne.' },
        { difficulty: 'Easy', question: "Hoeveel simmetrielyne het ’n reëlmatige seshoek (6 gelyke sye)?", answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses', '6 lyne'], explanation: "’n Reëlmatige seshoek het 6 gelyke sye, so dit het 6 simmetrielyne — 3 deur teenoorgestelde hoeke en 3 deur middelpunte van teenoorgestelde sye." },
        { difficulty: 'Easy', question: "’n Reëlmatige veelhoek het 8 gelyke sye. Hoeveel simmetrielyne het dit?", answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt', '8 lyne'], explanation: "Vir ’n reëlmatige veelhoek is die aantal simmetrielyne altyd gelyk aan die aantal sye — 8 sye beteken 8 simmetrielyne." },
        { difficulty: 'Easy', question: 'Het die letter M ’n vertikale simmetrielyn?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter M vou netjies deur die middel — die linker- en regterhelftes pas.' },
        { difficulty: 'Easy', question: 'Het die letter N enige simmetrielyne?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die letter N kan langs geen reguit lyn gevou word sodat albei helftes pas nie — dit het 0 simmetrielyne.' },
        { difficulty: 'Easy', question: 'Het die letter T ’n vertikale simmetrielyn?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter T vou deur die middel van sy vertikale stam, en die linker- en regterhelftes pas.' },
        { difficulty: 'Easy', question: 'Het die letter B ’n horisontale simmetrielyn?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Die letter B kan bo na onder gevou word en die twee boggels pas — dit het horisontale simmetrie.' },
        { difficulty: 'Easy', question: 'Het die letter B ’n vertikale simmetrielyn?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die letter B vou nie links-na-regs in bypassende helftes nie — sy enigste simmetrie is horisontaal.' },
        { difficulty: 'Easy', question: 'Watter letter het BEIDE ’n vertikale en ’n horisontale simmetrielyn: X of P?', answer: 'X', checkMode: 'auto', correctAnswer: 'X', correctAnswers: ['X', 'x'], explanation: 'Die letter X kan vertikaal en horisontaal gevou word, en in albei gevalle pas die helftes. P het geen simmetrielyne nie.' },
        { difficulty: 'Easy', question: 'Het die letter C ’n vertikale simmetrielyn?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die letter C het slegs ’n horisontale simmetrielyn (bo na onder), nie ’n vertikale nie.' },
        { difficulty: 'Medium', question: 'Het die letter C ’n horisontale simmetrielyn?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Om die letter C bo na onder te vou, gee twee bypassende geboë helftes — dit het horisontale simmetrie.' },
        { difficulty: 'Medium', question: '’n Ruit (’n "leunende" 4-sydige vorm met al die sye gelyk maar geen regte hoeke nie) het hoeveel simmetrielyne?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee', '2 lyne'], explanation: "’n Ruit het 2 simmetrielyne — sy twee diagonale. Die horisontale en vertikale voue werk nie tensy dit ook ’n vierkant is nie." },
        { difficulty: 'Medium', question: "’n Parallelogram wat nie ’n reghoek of ruit is nie (skuins sye, teenoorgestelde sye gelyk) het hoeveel simmetrielyne?", answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen', 'geen lyne'], explanation: '’n Algemene parallelogram (nie ’n reghoek of ruit nie) het 0 simmetrielyne — geen vou lewer twee bypassende helftes op nie.' },
        { difficulty: 'Medium', question: 'Watter een van hierdie letters het vertikale simmetrie: W, S, of Z?', answer: 'W', checkMode: 'auto', correctAnswer: 'W', correctAnswers: ['W', 'w'], explanation: 'Die letter W vou netjies deur die middel. S en Z het glad geen simmetrielyne nie.' },
        { difficulty: 'Medium', question: 'Watter een van hierdie letters het GEEN simmetrielyne nie: H, O, of Z?', answer: 'Z', checkMode: 'auto', correctAnswer: 'Z', correctAnswers: ['Z', 'z'], explanation: 'H en O het albei vertikale en horisontale simmetrie, maar Z het glad geen simmetrielyn nie.' },
        { difficulty: 'Medium', question: 'Watter letters in die woord "TOY" (SPEELDING) het ten minste een simmetrielyn?', answer: 'T, O en Y', checkMode: 'auto', correctAnswer: 'TOY', correctAnswers: ['TOY', 'T,O,Y', 'T, O, Y', 'TenOenY', 'T, O en Y'], explanation: 'T het ’n vertikale simmetrielyn, O het beide vertikale en horisontale simmetrie, en Y het ook ’n vertikale simmetrielyn. Al drie letters — T, O en Y — het ten minste een simmetrielyn.' },
        { difficulty: 'Medium', question: 'Hoeveel simmetrielyne het die woord "TOOT" in totaal as jy die letter O elke keer een keer tel?', answer: '4', checkMode: 'self', explanation: 'T het 1 simmetrielyn, O het 1 (tel slegs vertikaal, om dit eenvoudig te hou), O het 1, T het 1. Totaal: 1 + 1 + 1 + 1 = 4.' },
        { difficulty: 'Medium', question: "’n Reëlmatige veelhoek het 10 gelyke sye. Hoeveel simmetrielyne het dit?", answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', 'tien', '10 lyne'], explanation: "’n Reëlmatige veelhoek het altyd dieselfde aantal simmetrielyne as wat dit sye het — 10 sye beteken 10 simmetrielyne." },
        { difficulty: 'Medium', question: "Watter vorm het meer simmetrielyne: ’n reëlmatige vyfhoek of ’n reëlmatige seshoek?", answer: "’n Reëlmatige seshoek", checkMode: 'auto', correctAnswer: 'seshoek', correctAnswers: ['seshoek', 'reelmatigeseshoek', 'dieseshoek'], explanation: "’n Reëlmatige seshoek het 6 simmetrielyne, meer as die vyfhoek se 5 lyne." },
        { difficulty: 'Medium', question: "Het ’n gelykbenige driehoek meer of minder simmetrielyne as ’n gelyksydige driehoek?", answer: 'Minder', checkMode: 'auto', correctAnswer: 'minder', correctAnswers: ['minder', 'minderas'], explanation: "’n Gelykbenige driehoek het slegs 1 simmetrielyn, terwyl ’n gelyksydige driehoek 3 het — so die gelykbenige driehoek het minder." },
        { difficulty: 'Hard', question: "’n Reëlmatige veelhoek het 12 gelyke sye. Hoeveel simmetrielyne het dit?", answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twaalf', '12 lyne'], explanation: "Vir enige reëlmatige veelhoek is die aantal simmetrielyne gelyk aan die aantal sye — 12 sye gee 12 simmetrielyne." },
        { difficulty: 'Hard', question: "Verduidelik hoekom ’n reëlmatige veelhoek altyd dieselfde aantal simmetrielyne het as wat dit sye het.", answer: 'Omdat al die sye en hoeke gelyk is, lewer elke vou vanaf ’n hoek (of middelpunt) na die teenoorgestelde sy twee identiese helftes op.', checkMode: 'self', explanation: 'In ’n reëlmatige veelhoek is elke sy en elke hoek presies gelyk, so vir elke hoek is daar presies een bypassende vouliyn na die teenoorgestelde sy of middelpunt wat twee identiese helftes oplewer — dit gee een simmetrielyn per sy.' },
        { difficulty: 'Hard', question: 'Hoeveel simmetrielyne het die woord "WOW" in totaal, deur elke letter apart te tel (tel O as 2 lyne: vertikaal en horisontaal)?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier', '4 lyne'], explanation: 'W het 1 simmetrielyn, O het 2 (vertikaal en horisontaal), W het 1. Totaal: 1 + 2 + 1 = 4 simmetrielyne.' },
        { difficulty: 'Hard', question: "Hoekom het ’n ruit slegs 2 simmetrielyne (sy diagonale) in plaas van 4 soos ’n vierkant?", answer: "Omdat ’n ruit nie regte hoeke soos ’n vierkant het nie, werk slegs die diagonale voue om bypassende helftes te lewer.", checkMode: 'self', explanation: "’n Ruit het al 4 sye gelyk (soos ’n vierkant) maar sy hoeke is nie regte hoeke nie. Dit beteken die vertikale en horisontale voue lyn nie eweredig op nie, so slegs die twee diagonale voue werk as simmetrielyne." },
        { difficulty: 'Hard', question: "Vergelyk ’n vierkant en ’n reëlmatige seshoek: watter een het meer simmetrielyne, en met hoeveel meer?", answer: "Die reëlmatige seshoek het 2 meer simmetrielyne as die vierkant.", checkMode: 'self', explanation: "’n Vierkant het 4 simmetrielyne en ’n reëlmatige seshoek het 6 simmetrielyne. 6 − 4 = 2, so die seshoek het 2 meer simmetrielyne as die vierkant." },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het simmetrie in veelhoeke en die alfabet baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy verstaan reëlmatige veelhoeke en lettersimmetrie goed — gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die vorms-tabel en die alfabetkaart weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — REAL-WORLD SYMMETRY AND TRUE/FALSE CHECKS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Die Alledaagse Lewe en Waar of Onwaar',
      questions: [
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Skoenlapper se vlerke is ’n goeie voorbeeld van simmetrie in die natuur.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: "’n Skoenlapper wat in die middel gevou word, het twee vlerke wat pas — ’n klassieke alledaagse voorbeeld van simmetrie." },
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Mens se gesig is redelik simmetries, met die linker- en regterkant wat soortgelyk lyk.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: "’n Mens se gesig is ’n bekende alledaagse voorbeeld van benaderde simmetrie — die linker- en regterkant is spieëlbeelde van mekaar." },
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Blaar met ’n sentrale nerf is dikwels simmetries langs daardie nerf.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: 'Baie blare het ’n sentrale nerf wat as ’n simmetrielyn dien, met bypassende helftes aan weerskante.' },
        { difficulty: 'Easy', question: 'Waar of Onwaar: Sneeuvlokkies het 6 simmetrielyne.', answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: 'Sneeuvlokkies het tipies 6 simmetrielyne wat vanaf die middelpunt uitstraal.' },
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Seester het gewoonlik 5 simmetrielyne, een deur elke arm.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: '’n Seester het gewoonlik 5 arms simmetries gerangskik, wat dit 5 simmetrielyne gee.' },
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Deur is gewoonlik ’n reghoek met ’n vertikale simmetrielyn deur die middel.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: 'Die meeste deure is reghoekig en kan vertikaal deur die middel gevou word met albei helftes wat pas.' },
        { difficulty: 'Easy', question: 'Waar of Onwaar: Alle geboue is perfek simmetries.', answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: "Nie alle geboue is simmetries nie — sommige beroemde geboue soos die Taj Mahal is, maar baie geboue het onreëlmatige vorms sonder ’n simmetrielyn." },
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Skalene driehoek is ’n goeie voorbeeld van ’n simmetriese vorm.", answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: "’n Skalene driehoek het 0 simmetrielyne omdat al sy sye en hoeke verskillend is — dit is nie simmetries nie." },
        { difficulty: 'Easy', question: 'Waar of Onwaar: Die letter S is simmetries.', answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: 'Die letter S het geen simmetrielyne nie — geen vou maak die twee helftes pas nie.' },
        { difficulty: 'Easy', question: "Waar of Onwaar: ’n Sirkel het meer simmetrielyne as ’n vierkant.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: "’n Sirkel het oneindige simmetrielyne, wat meer is as ’n vierkant se 4 lyne." },
        { difficulty: 'Medium', question: 'Waar of Onwaar: Vensters is dikwels reghoekig en simmetries, net soos deure.', answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: 'Die meeste vensters is reghoeke met ’n vertikale (en dikwels horisontale) simmetrielyn, soortgelyk aan deure.' },
        { difficulty: 'Medium', question: "Waar of Onwaar: Die Taj Mahal is ’n voorbeeld van ’n simmetriese gebou.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: 'Die Taj Mahal is bekend daarvoor dat dit ’n perfek simmetriese gebou is — die linker- en regterkant is identies.' },
        { difficulty: 'Medium', question: "Waar of Onwaar: As jy ’n simmetriese natuurlike voorwerp soos ’n blaar vou en die helftes pas, is die vouliyn ’n simmetrielyn.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: 'Dit is presies die definisie van ’n simmetrielyn — ’n vouliyn waar albei helftes presies pas.' },
        { difficulty: 'Medium', question: "Waar of Onwaar: ’n Reghoekige venster het altyd presies 4 simmetrielyne, net soos ’n vierkant.", answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: "’n Reghoek (wat nie ’n vierkant is nie) het slegs 2 simmetrielyne — vertikaal en horisontaal. Net ’n vierkant het 4." },
        { difficulty: 'Medium', question: "Waar of Onwaar: ’n Reëlmatige seshoek, soos die vorm van ’n heuningkoekvak, het 6 simmetrielyne.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: 'Heuningkoekvakke is reëlmatige seshoeke, wat 6 simmetrielyne het.' },
        { difficulty: 'Medium', question: "Waar of Onwaar: Lerato sê ’n stopteken, wat ’n reëlmatige agthoek is (8 sye), het 8 simmetrielyne. Is sy korrek?", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: "’n Reëlmatige agthoek (8 gelyke sye) het 8 simmetrielyne, so Lerato is korrek." },
        { difficulty: 'Medium', question: "Waar of Onwaar: ’n Padteken in die vorm van ’n skalene driehoek sou geen simmetrielyn hê nie.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: "’n Skalene driehoek het al die sye en hoeke verskillend, so dit het 0 simmetrielyne." },
        { difficulty: 'Medium', question: 'Thabo sê alle blomme is simmetries. Is dit altyd waar?', answer: 'Nee', checkMode: 'self', explanation: 'Nie alle blomme is perfek simmetries nie, maar baie algemene blomme (soos baie madeliefies) het verskeie simmetrielyne deur hul middelpunt. Dit hang af van die tipe blom — sommige is meer onreëlmatig.' },
        { difficulty: 'Medium', question: "Waar of Onwaar: ’n Wiel is ’n goeie voorbeeld van ’n vorm met oneindige simmetrielyne.", answer: 'Waar', checkMode: 'auto', correctAnswer: 'Waar', correctAnswers: ['Waar', 'waar'], explanation: "’n Wiel is sirkelvormig, en ’n sirkel het oneindige simmetrielyne deur sy middelpunt." },
        { difficulty: 'Medium', question: "Waar of Onwaar: ’n Handafdruk (die buitelyn van ’n hand) is gewoonlik perfek simmetries.", answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: "’n Handbuitelyn is oor die algemeen NIE simmetries nie omdat die duim slegs aan een kant is, so die twee helftes pas nie." },
        { difficulty: 'Hard', question: "Gee twee alledaagse voorbeelde van simmetrie, buiten ’n skoenlapper.", answer: "Enige twee geldige voorbeelde, bv. ’n blaar, ’n sneeuvlokkie, ’n seester, ’n mens se gesig, ’n deur.", checkMode: 'self', explanation: 'Geldige voorbeelde sluit in: blare (sentrale nerf), sneeuvlokkies (6 lyne), seesterre (5 lyne), ’n mens se gesig, deure en vensters (vertikale simmetrie), en die Taj Mahal.' },
        { difficulty: 'Hard', question: "Sipho sê ’n stopteken (reëlmatige agthoek) en ’n heuningkoekvak (reëlmatige seshoek) het dieselfde aantal simmetrielyne. Is hy korrek? Verduidelik.", answer: 'Nee — die agthoek het 8 lyne, die seshoek het 6 lyne.', checkMode: 'self', explanation: "Sipho is verkeerd. ’n Reëlmatige agthoek het 8 sye en dus 8 simmetrielyne, terwyl ’n reëlmatige seshoek 6 sye en 6 simmetrielyne het. Hulle verskil omdat hulle verskillende aantal sye het." },
        { difficulty: 'Hard', question: 'Verduidelik hoekom ’n mens se gesig slegs "redelik" simmetries is en nie perfek simmetries nie.', answer: 'Regte gesigte het klein natuurlike verskille tussen die linker- en regterkant.', checkMode: 'self', explanation: '’n Goeie antwoord noem dat ’n gesig met die eerste oogopslag simmetries lyk, maar in werklikheid is geen twee helftes van ’n regte gesig ooit perfek identies nie — daar is altyd klein natuurlike verskille, so ons sê dit is "redelik" of "ongeveer" simmetries.' },
        { difficulty: 'Hard', question: "’n Venster is in die vorm van ’n reëlmatige vyfhoek. Hoeveel simmetrielyne het dit, en verduidelik hoe jy weet.", answer: '5 simmetrielyne.', checkMode: 'self', explanation: "’n Reëlmatige vyfhoek het 5 gelyke sye, en vir enige reëlmatige veelhoek is die aantal simmetrielyne gelyk aan die aantal sye, so dit het 5 simmetrielyne." },
        { difficulty: 'Hard', question: "Amahle vou ’n foto van ’n gebou presies vertikaal in die helfte en die twee helftes pas perfek. Wat kan sy oor die gebou se ontwerp aflei?", answer: "Die gebou het ’n vertikale simmetrielyn — dit is simmetries.", checkMode: 'self', explanation: 'As die twee helftes presies pas nadat dit gevou is, is die vouliyn ’n egte simmetrielyn, so Amahle kan aflei dat die gebou simmetries ontwerp is, soos die Taj Mahal.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het die opspoor van alledaagse simmetrie baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy kan waar-en-onwaar simmetrie-stellings met selfvertroue beoordeel — gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 13, message: 'Goeie poging! Kyk weer na die afdeling oor alledaagse voorbeelde en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP, COMBINED AND EXPLAIN-YOUR-REASONING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Multi-stap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Easy', question: "’n Vorm het ’n vertikale simmetrielyn. ’n Punt aan die linkerkant is 4 blokkies vanaf die lyn. Hoe ver vanaf die lyn is die spieëlpunt aan die regterkant?", answer: '4 blokkies', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier', '4 blokkies'], explanation: 'Die spieëlpunt is altyd dieselfde afstand vanaf die simmetrielyn, net aan die ander kant — 4 blokkies.' },
        { difficulty: 'Easy', question: 'Watter letters in die woord "HAT" (HOED) het ten minste een simmetrielyn?', answer: 'H, A en T', checkMode: 'auto', correctAnswer: 'HAT', correctAnswers: ['HAT', 'H,A,T', 'H, A, T', 'hat'], explanation: 'H, A, en T het almal ’n vertikale simmetrielyn, so al drie letters in HAT het simmetrie.' },
        { difficulty: 'Easy', question: "’n Vierkant en ’n gelyksydige driehoek word vergelyk. Watter vorm het meer simmetrielyne?", answer: 'Die vierkant', checkMode: 'auto', correctAnswer: 'vierkant', correctAnswers: ['vierkant', 'dievierkant', 'nvierkant'], explanation: "’n Vierkant het 4 simmetrielyne, terwyl ’n gelyksydige driehoek 3 het — so die vierkant het meer." },
        { difficulty: 'Easy', question: "Tel die totale simmetrielyne in ’n vierkant (4) plus ’n reghoek (2). Wat is die totaal?", answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: "’n Vierkant het 4 simmetrielyne en ’n reghoek het 2. 4 + 2 = 6." },
        { difficulty: 'Easy', question: "Tel die totale simmetrielyne in ’n gelyksydige driehoek (3) plus ’n gelykbenige driehoek (1). Wat is die totaal?", answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: "’n Gelyksydige driehoek het 3 lyne en ’n gelykbenige driehoek het 1 lyn. 3 + 1 = 4." },
        { difficulty: 'Medium', question: "’n Vorm het hoeke 2, 5 en 7 blokkies vanaf ’n vertikale simmetrielyn. Wat is die afstande van die spieëlpunte vanaf die lyn?", answer: '2, 5 en 7 blokkies', checkMode: 'auto', correctAnswer: '2,5en7blokkies', correctAnswers: ['2,5en7blokkies', '257blokkies', '2en5en7', '2,5,7', '2 5 7'], explanation: 'Elke spieëlpunt is dieselfde afstand vanaf die lyn as sy oorspronklike punt, net aan die ander kant: 2, 5 en 7 blokkies.' },
        { difficulty: 'Medium', question: "Hoeveel simmetrielyne is daar in totaal oor ’n reëlmatige vyfhoek (5) en ’n reëlmatige seshoek (6)?", answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', 'elf'], explanation: "’n Reëlmatige vyfhoek het 5 lyne en ’n reëlmatige seshoek het 6 lyne. 5 + 6 = 11." },
        { difficulty: 'Medium', question: 'Hoeveel simmetrielyne het die woord "MUM" (MA) in totaal, deur M as 1 lyn en U as 1 lyn elk te tel?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'M het 1 simmetrielyn, U het 1 simmetrielyn, M het 1 simmetrielyn. Totaal: 1 + 1 + 1 = 3.' },
        { difficulty: 'Medium', question: 'Watter een het meer totale simmetrielyne: die woord "TOOT" (T=1, O=2, O=2, T=1) of ’n reëlmatige seshoek?', answer: 'Die woord TOOT (6 lyne) is gelyk aan die seshoek (6 lyne)', checkMode: 'self', explanation: 'TOOT: 1 + 2 + 2 + 1 = 6 simmetrielyne. ’n Reëlmatige seshoek het 6 simmetrielyne. Hulle is gelyk.' },
        { difficulty: 'Medium', question: "’n Vorm op ’n rooster het ’n horisontale simmetrielyn. ’n Punt in die boonste gedeelte is 3 blokkies bo die lyn. Waar is sy spieëlpunt?", answer: '3 blokkies onder die lyn', checkMode: 'auto', correctAnswer: '3blokkiesonder', correctAnswers: ['3blokkiesonder', '3onder', '3blokkiesonderdielyn', 'onderdriedrie'], explanation: '’n Horisontale simmetrielyn flip op en af, so die spieëlpunt is dieselfde afstand aan die teenoorgestelde kant — 3 blokkies onder die lyn.' },
        { difficulty: 'Medium', question: "’n Helfte van ’n vorm het punte 1, 2 en 4 blokkies vanaf ’n vertikale simmetrielyn. As die vorm 5 blokkies hoog is, verander die hoogte wanneer jy die spieëlhelfte teken?", answer: 'Nee, die hoogte bly dieselfde', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'neeblydieselfde', 'blydieselfde', 'onveranderd'], explanation: '’n Vertikale simmetrielyn reflekteer slegs links en regs — dit verander nooit die hoogte van die vorm nie, so dit bly 5 blokkies hoog.' },
        { difficulty: 'Medium', question: "’n Reëlmatige veelhoek het 7 sye. Amahle sê dit het 6 simmetrielyne. Is sy korrek?", answer: 'Nee, dit het 7 simmetrielyne.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', '7', 'sewe', 'sewelyne'], explanation: "’n Reëlmatige veelhoek het dieselfde aantal simmetrielyne as sye, so ’n 7-sydige reëlmatige veelhoek het 7 simmetrielyne, nie 6 nie." },
        { difficulty: 'Medium', question: 'Vergelyk die letter X (2 simmetrielyne) en die letter A (1 simmetrielyn). Hoeveel meer lyne het X as A?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'X het 2 simmetrielyne (vertikaal en horisontaal) en A het 1 (vertikaal). 2 − 1 = 1.' },
        { difficulty: 'Medium', question: "’n Vorm het 2 simmetrielyne. Sipho teken slegs die helfte daarvan korrek deur een van die lyne te gebruik. Hoeveel totale kwarte sou jy verwag as jy BEIDE simmetrielyne gebruik om die volledige vorm vanaf net een kwart te voltooi?", answer: '4 kwarte', checkMode: 'self', explanation: 'As ’n vorm 2 simmetrielyne het wat by die middelpunt kruis (soos ’n reghoek), lewer die reflektering van een kwart oor albei lyne al 4 kwarte van die vorm op.' },
        { difficulty: 'Medium', question: "Waar of Onwaar: ’n Vorm met 6 simmetrielyne moet ’n reëlmatige seshoek wees.", answer: 'Onwaar', checkMode: 'auto', correctAnswer: 'Onwaar', correctAnswers: ['Onwaar', 'onwaar'], explanation: "Dit is onwaar — ’n sirkel het effektief ook meer as 6 lyne (oneindig), en ander spesiale vorms kan ook toevallig 6 lyne hê. Om 6 simmetrielyne te hê waarborg nie dat die vorm ’n reëlmatige seshoek is nie." },
        { difficulty: 'Hard', question: "’n Vorm op ’n rooster het ’n vertikale simmetrielyn. Hoeke is 2, 4 en 6 blokkies vanaf die lyn, en die vorm is 3 blokkies hoog. Beskryf waar die spieëlhoeke sou wees, en hoe wyd die hele vorm sou wees.", answer: 'Spieëlhoeke is 2, 4 en 6 blokkies aan die ander kant, op dieselfde hoogtes. Totale wydte: 6 + 6 = 12 blokkies.', checkMode: 'self', explanation: 'Die spieëlhoeke sit op 2, 4 en 6 blokkies aan die teenoorgestelde kant van die lyn, op dieselfde hoogtes as die oorspronklikes (’n vertikale lyn verander nie hoogte nie). Die wydste punt van die vorm strek 6 blokkies links en 6 blokkies regs van die lyn, wat ’n totale wydte van 12 blokkies gee.' },
        { difficulty: 'Hard', question: "Verduidelik stap vir stap hoe jy sou kontroleer of ’n seshoekige teël ’n REËLMATIGE seshoek is deur simmetrie te gebruik.", answer: 'Kontroleer of dit 6 gelyke sye en 6 simmetrielyne het.', checkMode: 'self', explanation: 'Meet eers die sye om te sien of al 6 gelyk is. Toets dan voue: ’n reëlmatige seshoek behoort presies 6 simmetrielyne te hê (3 deur teenoorgestelde hoeke, 3 deur middelpunte van teenoorgestelde sye). As enige vou nie pas nie, is die seshoek nie reëlmatig nie.' },
        { difficulty: 'Hard', question: 'Lerato sê die woord "BOX" (DOOS) het ’n totaal van 3 simmetrielyne as jy B=1 (horisontaal), O=2 (vertikaal+horisontaal), X=2 (vertikaal+horisontaal) tel. Kontroleer haar werk en gee die korrekte totaal.', answer: 'Die korrekte totaal is 5 (1 + 2 + 2), nie 3 nie.', checkMode: 'self', explanation: 'B het 1 simmetrielyn (horisontaal). O het 2 lyne (vertikaal en horisontaal). X het 2 lyne (vertikaal en horisontaal). Die korrekte totaal is 1 + 2 + 2 = 5, so Lerato het ’n optelfout gemaak.' },
        { difficulty: 'Hard', question: "’n Vorm het beide ’n vertikale ÉN ’n horisontale simmetrielyn, soos ’n reghoek. As ’n hoekpunt 3 blokkies regs en 2 blokkies op vanaf die middelpunt is, waar is al 3 van sy spieëlbeelde?", answer: '3 links & 2 op, 3 regs & 2 af, en 3 links & 2 af.', checkMode: 'self', explanation: 'Om oor die vertikale lyn te reflekteer, gee ’n punt 3 blokkies links en 2 op. Om die oorspronklike oor die horisontale lyn te reflekteer, gee 3 blokkies regs en 2 af. Om oor albei lyne te reflekteer, gee 3 blokkies links en 2 af. Saam met die oorspronklike vorm dit al 4 hoeke van die reghoek.' },
        { difficulty: 'Hard', question: 'Verduidelik hoekom ’n reëlmatige veelhoek met meer sye (soos ’n seshoek) "meer soos ’n sirkel" lyk as een met minder sye (soos ’n driehoek).', answer: 'Meer sye beteken meer simmetrielyne, wat die vorm gladder en ronder laat lyk, nader aan ’n sirkel wat oneindige lyne het.', checkMode: 'self', explanation: 'Namate die aantal gelyke sye in ’n reëlmatige veelhoek toeneem, neem die aantal simmetrielyne ook toe. Met meer simmetrielyne word die vorm meer eweredig gebalanseer in elke rigting, wat dit al hoe meer soos ’n sirkel laat lyk, wat oneindige simmetrielyne het.' },
        { difficulty: 'Hard', question: "Thabo het ’n vorm met 4 simmetrielyne en Sipho het ’n vorm met 3 simmetrielyne. As albei vorms reëlmatige veelhoeke is, hoeveel sye het elke vorm?", answer: "Thabo se vorm het 4 sye (’n vierkant), Sipho s’n het 3 sye (’n gelyksydige driehoek).", checkMode: 'auto', correctAnswer: '4en3', correctAnswers: ['4en3', '4,3', 'vierkantendriehoek', '4syeen3sye'], explanation: 'Vir reëlmatige veelhoeke is die aantal simmetrielyne gelyk aan die aantal sye. 4 simmetrielyne → 4 sye (vierkant). 3 simmetrielyne → 3 sye (gelyksydige driehoek).' },
        { difficulty: 'Hard', question: "’n Ontwerp gebruik ’n reëlmatige vyfhoek en ’n reëlmatige seshoek langs mekaar. Verduidelik watter vorm meer \"sirkelvormig\" sou lyk en hoekom.", answer: 'Die seshoek, omdat dit meer sye en meer simmetrielyne het.', checkMode: 'self', explanation: 'Die reëlmatige seshoek het 6 sye en 6 simmetrielyne, in vergelyking met die vyfhoek se 5 sye en 5 lyne. Meer sye en simmetrielyne laat ’n reëlmatige veelhoek nader aan ’n sirkel lyk.' },
        { difficulty: 'Hard', question: 'Amahle sê die letters in "SYMMETRY" (SIMMETRIE) wat ’n simmetrielyn het, is: Y, M, M, en Y. Kontroleer haar antwoord deur elke letter se simmetrietipe te lys.', answer: 'Y (vertikaal), M (vertikaal), M (vertikaal), Y (vertikaal) — Amahle is korrek oor hierdie 4 letters (T het ook vertikale simmetrie).', checkMode: 'self', explanation: 'Deur S-Y-M-M-E-T-R-Y na te gaan: S het geen, Y het vertikale simmetrie, M het vertikale simmetrie, M het vertikale simmetrie, E het horisontale simmetrie (Amahle het dit gemis), T het vertikale simmetrie (ook gemis), R het geen, Y het vertikale simmetrie. Amahle het korrek Y, M, M, Y gevind, maar het gemis dat E en T ook simmetrielyne het.' },
        { difficulty: 'Hard', question: "’n Vorm het 0 simmetrielyne. Sy \"tweeling\"-vorm word geskep deur 2 meer gelyke sye by te voeg om dit ’n reëlmatige veelhoek te maak met ’n ooreenstemmende aantal sye as simmetrielyne. As die tweeling nou 5 simmetrielyne het, hoeveel sye het die tweeling, en watter vorm is dit?", answer: '5 sye — ’n reëlmatige vyfhoek.', checkMode: 'auto', correctAnswer: '5syevyfhoek', correctAnswers: ['5syevyfhoek', '5', 'vyfhoek', '5sye', 'reelmatigevyfhoek'], explanation: 'Aangesien die tweeling ’n reëlmatige veelhoek is, is sy aantal sye gelyk aan sy aantal simmetrielyne. Met 5 simmetrielyne is die tweelingvorm ’n reëlmatige vyfhoek met 5 sye.' },
        { difficulty: 'Hard', question: "Som in jou eie woorde die sleutelreël op wat ’n reëlmatige veelhoek se aantal sye aan sy simmetrielyne verbind, en gee een voorbeeld.", answer: "Vir ’n reëlmatige veelhoek is die aantal simmetrielyne gelyk aan die aantal sye. Voorbeeld: ’n reëlmatige seshoek het 6 sye en 6 simmetrielyne.", checkMode: 'self', explanation: 'ʼn Sterk antwoord stel die sleutelreël duidelik (gelyke sye en hoeke beteken die aantal simmetrielyne stem altyd ooreen met die aantal sye) en steun dit met ’n korrekte voorbeeld, soos ’n vierkant (4 en 4), vyfhoek (5 en 5), of seshoek (6 en 6).' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het multi-stap en gekombineerde simmetrieprobleme baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy kan idees oor simmetrie met selfvertroue kombineer — gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde vir gekombineerde probleme weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
