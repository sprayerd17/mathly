import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Geometriese Patrone',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS ʼN GEOMETRIESE PATROON?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-geometric-pattern',
      title: "Wat is ʼn Geometriese Patroon?",
      icon: '🔷',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>Geometriese patroon</strong> is ʼn patroon wat bestaan uit <strong>vorms, kleure of groottes</strong> wat herhaal of groei volgens ʼn reël. As jy die reël ken, kan jy voorspel wat volgende kom — net soos met getalpatrone!</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Voorbeelde uit die alledaagse lewe 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Teëls op ʼn vloer:</strong> dieselfde vorm of kleur word in ʼn herhalende rangskikking neergelê</li>
    <li><strong>Bakstene in ʼn muur:</strong> elke ry bakstene word op dieselfde manier verskuif, oor en oor</li>
    <li><strong>ʼn Kraalhalssnoer:</strong> krale van verskillende kleure herhaal in dieselfde volgorde om die halssnoer</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Twee tipes geometriese patrone</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#1e40af;margin-bottom:6px;">🔁 Herhalende patroon</div>
      <div style="color:#1e3a8a;font-size:14px;line-height:1.7;">Die <strong>dieselfde volgorde</strong> van vorms herhaal oor en oor.<br/>
        Voorbeeld: <span style="color:#1e40af;font-weight:700;">▲ ● ■ ▲ ● ■ ▲ ● ■ …</span>
      </div>
    </div>
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">📈 Groeiende patroon</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">Die vorms <strong>neem toe in getal of grootte</strong> elke keer.<br/>
        Voorbeeld: <span style="color:#16a34a;font-weight:700;">■ &nbsp; ■■■ &nbsp; ■■■■■ &nbsp; ■■■■■■■ …</span>
      </div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = herhalende patrone</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = groeiende patrone</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = die reël</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: "Beskryf hierdie herhalende patroon en sê wat volgende kom:\nsirkel, vierkant, driehoek, sirkel, vierkant, driehoek, …",
          answer: 'sirkel',
          steps: [
            `Identifiseer die <strong>herhalende eenheid</strong> — die groep vorms wat telkens weer terugkom:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <span style="background:#dbeafe;border:2px solid #93c5fd;border-radius:8px;padding:8px 16px;font-size:15px;font-weight:700;color:#1e40af;">sirkel, vierkant, driehoek</span>
  <span style="color:#374151;font-size:14px;">← dit is die herhalende eenheid</span>
</div>`,
            `Tel hoeveel vorms in een eenheid is:<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">3 vorms per eenheid</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Die patroon <strong>begin elke 3 vorms weer van voor af</strong>.</p>`,
            `Stel die <strong>reël</strong>:<br/>
<div style="background:#fee2e2;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Reël: herhaal die groep van 3 vorms (sirkel → vierkant → driehoek) oor en oor</span>
</div>`,
            `Vind wat volgende kom — na <span style="color:#1e40af;font-weight:700;">… driehoek</span> begin die eenheid weer van voor af:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="color:#1e40af;font-weight:700;font-size:16px;">sirkel, vierkant, driehoek,</span>
  <span style="color:#1e40af;font-weight:700;font-size:16px;">sirkel, vierkant, driehoek,</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">sirkel</span>
  <span style="color:#16a34a;font-weight:700;">← volgende</span>
</div>`,
          ],
        },
        {
          question: "Beskryf hierdie groeiende patroon en sê wat volgende kom:\n1 vierkant, 3 vierkante, 5 vierkante, 7 vierkante, …",
          answer: '9 vierkante',
          steps: [
            `Tel die aantal vorms by elke stap:<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Stap 1</span>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">■</span>
    <span style="font-size:14px;font-weight:700;color:#16a34a;">1</span>
  </div>
  <span style="font-size:18px;color:#dc2626;font-weight:700;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Stap 2</span>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">■■■</span>
    <span style="font-size:14px;font-weight:700;color:#16a34a;">3</span>
  </div>
  <span style="font-size:18px;color:#dc2626;font-weight:700;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Stap 3</span>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">■■■■■</span>
    <span style="font-size:14px;font-weight:700;color:#16a34a;">5</span>
  </div>
  <span style="font-size:18px;color:#dc2626;font-weight:700;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Stap 4</span>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">■■■■■■■</span>
    <span style="font-size:14px;font-weight:700;color:#16a34a;">7</span>
  </div>
</div>`,
            `Vind die reël — kyk hoe die telling by elke stap verander:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:4px 10px;font-weight:600;color:#16a34a;">3 − 1 = 2</span>
  <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:4px 10px;font-weight:600;color:#16a34a;">5 − 3 = 2</span>
  <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:4px 10px;font-weight:600;color:#16a34a;">7 − 5 = 2</span>
</div>
<p style="margin-top:8px;margin-bottom:0;"><strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">tel elke keer 2 vierkante by</span></p>`,
            `Pas die reël toe om te vind wat volgende kom:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#16a34a;">7</span>
  <span style="color:#dc2626;font-weight:700;">+ 2</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">= 9 vierkante</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Twee rye — boonste ry wys ʼn herhalende patroon van sirkel vierkant driehoek, onderste ry wys ʼn groeiende patroon van 1 dan 3 dan 5 vierkante in ʼn L-vorm gerangskik',

      videoPlaceholder: 'Kort video wat die verskil tussen herhalende en groeiende geometriese patrone wys met voorbeelde uit die alledaagse lewe',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — GEOMETRIESE PATRONE UITBREI
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'extending-geometric-patterns',
      title: 'Geometriese Patrone Uitbrei',
      icon: '➕',
      explanation: `
<p style="margin-bottom:14px;">Om ʼn <strong>geometriese patroon uit te brei</strong> moet jy eers <strong>die reël vind</strong> en dit dan <strong>toepas</strong> om te teken of te beskryf wat volgende kom. Die reël vertel jou presies wat elke keer verander — en sodra jy dit ken, kan jy die patroon so lank voortsit as wat jy wil.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = die reël</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = bekende vorms (gegewe)</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = nuwe vorms (uitgebrei)</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die 4 stappe om enige geometriese patroon uit te brei</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Kyk noukeurig na die patroon</strong> — neem jou tyd voordat jy raai.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vind wat elke keer verander</strong> — is dit die vorm, die kleur, die grootte, of die aantal vorms?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#7c3aed;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vind die reël</strong> — beskryf presies wat elke keer gebeur met woorde soos "tel by", "verwyder" of "herhaal".</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Pas die reël toe</strong> — gebruik die reël om die volgende vorm of groep in die patroon te teken of te beskryf.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: "ʼn Patroon wys: 2 driehoeke, 4 driehoeke, 6 driehoeke, 8 driehoeke, …\nWat is die volgende 2 terme?",
          answer: '10 driehoeke, dan 12 driehoeke',
          steps: [
            `<strong>Stap 1:</strong> Kyk na die patroon — die aantal <span style="color:#1e40af;font-weight:700;">driehoeke</span> verander elke keer.<br/>
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 1</span>
    <span style="font-size:22px;color:#1e40af;">▲▲</span>
    <span style="font-size:14px;font-weight:700;color:#1e40af;">2</span>
  </div>
  <span style="font-size:18px;color:#374151;font-weight:300;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 2</span>
    <span style="font-size:22px;color:#1e40af;">▲▲▲▲</span>
    <span style="font-size:14px;font-weight:700;color:#1e40af;">4</span>
  </div>
  <span style="font-size:18px;color:#374151;font-weight:300;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 3</span>
    <span style="font-size:22px;color:#1e40af;">▲▲▲▲▲▲</span>
    <span style="font-size:14px;font-weight:700;color:#1e40af;">6</span>
  </div>
  <span style="font-size:18px;color:#374151;font-weight:300;">→</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 4</span>
    <span style="font-size:22px;color:#1e40af;">▲▲▲▲▲▲▲▲</span>
    <span style="font-size:14px;font-weight:700;color:#1e40af;">8</span>
  </div>
</div>`,
            `<strong>Stap 2:</strong> Vind die verskil tussen opeenvolgende terme:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">4 − 2 = 2</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">6 − 4 = 2</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">8 − 6 = 2</span>
</div>
<p style="margin-top:8px;margin-bottom:0;">Die aantal driehoeke groei met <strong>2</strong> elke keer — dit is ʼn groeiende patroon.</p>`,
            `<strong>Stap 3 — Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">tel elke keer 2 driehoeke by</span>`,
            `<strong>Stap 4:</strong> Pas die reël toe om die patroon uit te brei:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:16px;font-weight:700;color:#1e40af;">…, 8</span>
  <span style="color:#dc2626;font-weight:700;">+ 2</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 10 driehoeke</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:16px;font-weight:700;color:#16a34a;">10</span>
  <span style="color:#dc2626;font-weight:700;">+ 2</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 12 driehoeke</span>
</div>`,
          ],
        },
        {
          question: "Vierkante word soos trappe gerangskik:\nRy 1: 1 vierkant, Ry 2: 2 vierkante, Ry 3: 3 vierkante.\nHoeveel vierkante is in ry 4? Hoeveel vierkante altesaam oor 4 rye?",
          answer: 'Ry 4 het 4 vierkante. Totaal oor 4 rye: 1 + 2 + 3 + 4 = 10 vierkante.',
          steps: [
            `<strong>Stap 1:</strong> Kyk na die trap — elke ry is een trap hoër as die ry voor dit.<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <table style="border-collapse:collapse;min-width:280px;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;text-transform:uppercase;">Ry</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;text-transform:uppercase;">Vierkante</th>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:13px;text-transform:uppercase;">Visueel</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">1</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">1</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:18px;color:#1e40af;">■</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">2</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">2</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:18px;color:#1e40af;">■ ■</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;">3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:18px;color:#1e40af;">■ ■ ■</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Stap 2 — Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">tel een vierkant by elke nuwe ry</span><br/>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Elke rynommer is gelyk aan die aantal vierkante in daardie ry: ry 1 het 1, ry 2 het 2, ry 3 het 3 — die rynommer <em>is</em> die aantal vierkante.</p>`,
            `<strong>Stap 3:</strong> Pas die reël toe om ry 4 en ry 5 te vind:<br/>
<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;text-align:center;">
    <div style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;margin-bottom:4px;">Ry 4</div>
    <div style="font-size:20px;color:#16a34a;">■ ■ ■ ■</div>
    <div style="font-size:14px;font-weight:700;color:#16a34a;margin-top:4px;">4 vierkante</div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;text-align:center;">
    <div style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;margin-bottom:4px;">Ry 5</div>
    <div style="font-size:20px;color:#16a34a;">■ ■ ■ ■ ■</div>
    <div style="font-size:14px;font-weight:700;color:#16a34a;margin-top:4px;">5 vierkante</div>
  </div>
</div>`,
            `<strong>Totale vierkante oor 4 rye:</strong> Tel al die rye op:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:16px;font-weight:700;color:#1e40af;">1 + 2 + 3 +</span>
  <span style="font-size:16px;font-weight:700;color:#16a34a;">4</span>
  <span style="font-size:16px;font-weight:700;color:#374151;">=</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">10 vierkante</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Trappatroon wat 1 vierkant in eerste kolom, 2 in tweede, 3 in derde, 4 in vierde wys, elke kolom ʼn ander kleur',

      videoPlaceholder: 'Kort video wat wys hoe om die reël in ʼn geometriese patroon te vind en dit korrek uit te brei',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — PATRONE WAT KLEUR OF VORM VERANDER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'patterns-colour-shape',
      title: 'Patrone Wat Kleur of Vorm Verander',
      icon: '🎨',
      explanation: `
<p style="margin-bottom:14px;">Nie alle geometriese patrone groei in getal nie. Sommige patrone verander <strong>kleur</strong> of <strong>vorm</strong> volgens ʼn reël. Die vorms of kleure volg ʼn herhalende volgorde — en as jy die volgorde ken, kan jy uitwerk watter kleur of vorm by enige posisie in die patroon val.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = eerste kleur in die volgorde</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = tweede kleur in die volgorde</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = derde kleur in die volgorde</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Twee tipes kleur- of vormpatrone</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#1e40af;margin-bottom:6px;">🎨 Kleurpatrone</div>
      <div style="color:#1e3a8a;font-size:14px;line-height:1.7;">Die <strong>vorm bly dieselfde</strong> maar die <strong>kleure herhaal</strong> in ʼn volgorde.<br/>
        Voorbeeld: <span style="color:#1e40af;font-weight:700;">● </span><span style="color:#dc2626;font-weight:700;">● </span><span style="color:#16a34a;font-weight:700;">●</span><span style="color:#1e40af;font-weight:700;"> ●</span><span style="color:#dc2626;font-weight:700;"> ●</span><span style="color:#16a34a;font-weight:700;"> ● …</span>
      </div>
    </div>
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">🔷 Vormpatrone</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">Die <strong>kleur bly dieselfde</strong> maar die <strong>vorms herhaal</strong> in ʼn volgorde.<br/>
        Voorbeeld: <span style="color:#1e40af;font-weight:700;">● ● ■ ▲ ● ● ■ ▲ …</span>
      </div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Slim truuk: gebruik deling met res</div>
  <p style="color:#1e3a8a;font-size:15px;margin:0 0 8px 0;">Om die <strong>nde vorm of kleur</strong> in ʼn herhalende patroon te vind:</p>
  <ol style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2.1;font-size:15px;">
    <li>Tel die aantal items in een herhalende eenheid.</li>
    <li>Deel die posisienommer deur die eenheidslengte.</li>
    <li>Die <strong>res</strong> vertel jou watter item in die eenheid dit is. As die res <strong>0</strong> is, is dit die <em>laaste</em> item in die eenheid.</li>
  </ol>
</div>`,

      workedExamples: [
        {
          question: "ʼn Patroon van sirkels herhaal: rooi, blou, groen, rooi, blou, groen, …\nWatter kleur is die 10de sirkel?",
          answer: 'Die 10de sirkel is rooi.',
          steps: [
            `<strong>Stap 1:</strong> Identifiseer die herhalende kleurvolgorde:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="width:28px;height:28px;border-radius:50%;background:#dc2626;display:block;"></span>
    <span style="font-size:13px;font-weight:700;color:#dc2626;">rooi</span>
    <span style="font-size:12px;color:#374151;">1ste</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="width:28px;height:28px;border-radius:50%;background:#1e40af;display:block;"></span>
    <span style="font-size:13px;font-weight:700;color:#1e40af;">blou</span>
    <span style="font-size:12px;color:#374151;">2de</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="width:28px;height:28px;border-radius:50%;background:#16a34a;display:block;"></span>
    <span style="font-size:13px;font-weight:700;color:#16a34a;">groen</span>
    <span style="font-size:12px;color:#374151;">3de</span>
  </div>
  <span style="color:#374151;font-size:14px;margin-left:4px;">← dan herhaal dit</span>
</div>`,
            `<strong>Stap 2:</strong> Tel die items in een eenheid:<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">3 kleure per eenheid (rooi, blou, groen)</div>`,
            `<strong>Stap 3:</strong> Ons soek die <strong>10de</strong> sirkel. Deel die posisie deur die eenheidslengte:<br/>
<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#ea580c;font-weight:700;font-size:16px;">10 ÷ 3 = 3 res 1</span>
</div>`,
            `<strong>Stap 4:</strong> Die res is <strong>1</strong>, dus is die 10de sirkel die <strong>1ste kleur</strong> in die volgorde — naamlik <span style="color:#dc2626;font-weight:700;">rooi</span>.<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:13px;font-weight:600;color:#374151;">Volgordekontrole:</span>
  <span style="color:#dc2626;font-weight:700;">rooi(1)</span>
  <span style="color:#1e40af;font-weight:700;">blou(2)</span>
  <span style="color:#16a34a;font-weight:700;">groen(3)</span>
  <span style="color:#dc2626;font-weight:700;">rooi(4)</span>
  <span style="color:#1e40af;font-weight:700;">blou(5)</span>
  <span style="color:#16a34a;font-weight:700;">groen(6)</span>
  <span style="color:#dc2626;font-weight:700;">rooi(7)</span>
  <span style="color:#1e40af;font-weight:700;">blou(8)</span>
  <span style="color:#16a34a;font-weight:700;">groen(9)</span>
  <span style="background:#fee2e2;border:2px solid #dc2626;border-radius:6px;padding:2px 8px;color:#dc2626;font-weight:700;">rooi(10) ✓</span>
</div>`,
          ],
        },
        {
          question: "ʼn Patroon herhaal: sirkel, sirkel, vierkant, driehoek, sirkel, sirkel, vierkant, driehoek, …\nWat is die 15de vorm?",
          answer: 'Die 15de vorm is ʼn vierkant.',
          steps: [
            `<strong>Stap 1:</strong> Identifiseer die herhalende eenheid:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:22px;color:#1e40af;">●</span>
    <span style="font-size:12px;color:#374151;">1ste</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:22px;color:#1e40af;">●</span>
    <span style="font-size:12px;color:#374151;">2de</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:22px;color:#1e40af;">■</span>
    <span style="font-size:12px;color:#374151;">3de</span>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:22px;color:#1e40af;">▲</span>
    <span style="font-size:12px;color:#374151;">4de</span>
  </div>
  <span style="color:#374151;font-size:14px;margin-left:4px;">← dan herhaal dit</span>
</div>`,
            `<strong>Stap 2:</strong> Tel die items in een eenheid:<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">4 vorms per eenheid (sirkel, sirkel, vierkant, driehoek)</div>`,
            `<strong>Stap 3:</strong> Ons soek die <strong>15de</strong> vorm. Deel die posisie deur die eenheidslengte:<br/>
<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#ea580c;font-weight:700;font-size:16px;">15 ÷ 4 = 3 res 3</span>
</div>`,
            `<strong>Stap 4:</strong> Die res is <strong>3</strong>, dus is die 15de vorm die <strong>3de vorm</strong> in die eenheid — naamlik <span style="color:#1e40af;font-weight:700;">vierkant</span>.<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:13px;font-weight:600;color:#374151;">Eenheidsposisies:</span>
  <span style="color:#1e40af;font-weight:700;">● (1)</span>
  <span style="color:#1e40af;font-weight:700;">● (2)</span>
  <span style="background:#dbeafe;border:2px solid #1e40af;border-radius:6px;padding:2px 8px;color:#1e40af;font-weight:700;">■ (3) ← res 3 ✓</span>
  <span style="color:#1e40af;font-weight:700;">▲ (4)</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Twee rye — boonste ry wys kleurpatroon rooi blou groen herhalend, onderste ry wys vormpatroon sirkel sirkel vierkant driehoek herhalend',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — TESSELLERENDE PATRONE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tessellating-patterns',
      title: 'Tessellerende Patrone',
      icon: '🔲',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>Tessellerende patroon</strong> is een waar vorms perfek inmekaar pas — met <strong>geen gapings</strong> en <strong>geen oorvleueling</strong> nie. Jy kan ʼn plat oppervlak vir ewig teël met dieselfde vorm, en dit sal altyd pas sonder om enige leë ruimte te laat.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Voorbeelde uit die alledaagse lewe 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Badkamerteëls:</strong> vierkantige teëls bedek ʼn vloer met geen gapings tussen hulle nie</li>
    <li><strong>ʼn Heuningkoek:</strong> bye bou perfekte seshoekige selle wat sonder enige vermorste ruimte inmekaar pas</li>
    <li><strong>ʼn Baksteenmuur:</strong> reghoekige bakstene word in rye gelê wat styf inmekaar sluit</li>
    <li><strong>ʼn Skaakbord:</strong> 64 vierkante gerangskik in ʼn perfekte 8 × 8-rooster met glad geen gapings nie</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Watter vorms tesseleer?</div>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">■</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Vierkante</span>
      <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:3px 12px;color:#16a34a;font-weight:700;font-size:13px;">✓ Ja — tesseleer perfek</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">▬</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Reghoeke</span>
      <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:3px 12px;color:#16a34a;font-weight:700;font-size:13px;">✓ Ja — tesseleer perfek</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">▲</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Driehoeke</span>
      <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:3px 12px;color:#16a34a;font-weight:700;font-size:13px;">✓ Ja — tesseleer perfek</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">⬡</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Reëlmatige seshoeke</span>
      <span style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:6px;padding:3px 12px;color:#16a34a;font-weight:700;font-size:13px;">✓ Ja — tesseleer perfek</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="font-size:20px;">●</span>
      <span style="min-width:160px;font-weight:700;color:#1e3a8a;font-size:15px;">Sirkels</span>
      <span style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:6px;padding:3px 12px;color:#dc2626;font-weight:700;font-size:13px;">✗ Nee — laat altyd gapings</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Waarom werk tessellasie?</div>
  <p style="color:#1e3a8a;font-size:15px;margin:0 0 8px 0;">ʼn Vorm tesseleer wanneer die <strong>hoeke rondom elke ontmoetingspunt presies 360° optel</strong>. Dit beteken die vorms vul al die ruimte rondom daardie punt op sonder dat iets oorbly.</p>
  <div style="background:#dbeafe;border-radius:6px;padding:8px 14px;display:inline-block;">
    <span style="color:#1e40af;font-weight:700;">Vierkante: 4 hoeke × 90° = 360° ✓</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Kan gelyksydige driehoeke tesseleer? Verduidelik waarom.',
          answer: 'Ja, gelyksydige driehoeke tesseleer perfek.',
          steps: [
            `<strong>Stap 1:</strong> Vind die grootte van elke hoek in ʼn gelyksydige driehoek.<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">Elke hoek = 60°</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">(Al drie hoeke in ʼn gelyksydige driehoek is gelyk, en hulle tel op tot 180°, dus is elkeen 180° ÷ 3 = 60°.)</p>`,
            `<strong>Stap 2:</strong> Vir ʼn vorm om te tesseleer, moet die hoeke rondom elke ontmoetingspunt tot <strong>360°</strong> optel.<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">Teiken: 360°</div>`,
            `<strong>Stap 3:</strong> Deel 360° deur die hoekgrootte om te vind hoeveel driehoeke rondom elke punt pas:<br/>
<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#ea580c;font-weight:700;font-size:16px;">360° ÷ 60° = 6</span>
</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Ses driehoeke pas perfek rondom elke ontmoetingspunt. Kontroleer: <span style="color:#16a34a;font-weight:700;">6 × 60° = 360° ✓</span></p>`,
            `<strong>Antwoord:</strong>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#15803d;font-weight:700;">Ja — gelyksydige driehoeke tesseleer perfek. Ses driehoeke ontmoet by elke punt en hulle hoeke tel presies tot 360° op.</span>
</div>`,
          ],
        },
        {
          question: 'Waarom tesseleer sirkels nie?',
          answer: 'Sirkels tesseleer nie omdat hulle geboë rande altyd gapings laat nie.',
          steps: [
            `<strong>Stap 1:</strong> Kyk na die rande van ʼn sirkel — hulle is <strong>geboë</strong>, nie reguit nie.<br/>
<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#dc2626;font-weight:700;">Sirkels het geboë rande — geen plat kante nie</div>`,
            `<strong>Stap 2:</strong> Wanneer jy sirkels langs mekaar plaas, kan die geboë rande nie plat teen mekaar lê nie.<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:32px;line-height:1;color:#1e40af;">●</span>
  <span style="font-size:32px;line-height:1;color:#1e40af;">●</span>
  <span style="font-size:32px;line-height:1;color:#1e40af;">●</span>
  <span style="color:#dc2626;font-weight:700;margin-left:8px;font-size:14px;">← gapings verskyn tussen die sirkels</span>
</div>`,
            `<strong>Stap 3:</strong> Die geboë rande skep altyd <strong>driehoekvormige gapings</strong> tussen sirkels. Daar is geen manier om sirkels so te rangskik dat elke gaping verdwyn nie.<br/>
<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Hoeke rondom elke ontmoetingspunt tel nie tot 360° op nie — daar bly altyd ruimte oor.</span>
</div>`,
            `<strong>Antwoord:</strong>
<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:10px 16px;display:inline-block;margin-top:8px;">
  <span style="color:#dc2626;font-weight:700;">Sirkels tesseleer nie omdat hulle geboë rande nie plat teen mekaar kan pas nie — daar sal altyd gapings wees.</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Twee beelde langs mekaar — links wys vierkante wat perfek tesseleer met geen gapings, regs wys sirkels met sigbare gapings tussen hulle',

      videoPlaceholder: 'Kort video wat voorbeelde uit die alledaagse lewe van tessellerende patrone wys en verduidelik waarom sommige vorms tesseleer en ander nie',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — GEOMETRIESE PATRONE IN DIE ALLEDAAGSE LEWE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns-real-life',
      title: 'Geometriese Patrone in die Alledaagse Lewe',
      icon: '🌍',
      explanation: `
<p style="margin-bottom:14px;">Geometriese patrone kom nie net in wiskundeklas voor nie — hulle verskyn <strong>oral om ons</strong> in die natuur, in dinge wat mense bou, en in kuns en kultuur. Sodra jy weet waarna om te soek, sal jy hulle oral begin sien!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = natuurlike patrone</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = mensgemaakte patrone</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#d97706;display:inline-block;"></span>
      <span style="color:#d97706;font-weight:700;">Amber = kunspatrone</span>
    </div>
  </div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:8px;">

  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#15803d;margin-bottom:8px;">🌿 Natuur</div>
    <ul style="margin:0;padding-left:20px;color:#14532d;line-height:2;font-size:15px;">
      <li><strong>Heuningkoek:</strong> bye rangskik seshoekige selle in ʼn perfek tessellerende patroon</li>
      <li><strong>Sonneblomsaad:</strong> saadjies word in inmekaarwerkende spirale gerangskik wat vanaf die middelpunt uitstraal</li>
      <li><strong>Slangskubbe:</strong> oorvleuelende skubbe vorm ʼn herhalende patroon langs die slang se lyf</li>
      <li><strong>Sebrastrepe:</strong> afwisselende swart en wit strepe vorm ʼn unieke herhalende patroon</li>
    </ul>
  </div>

  <div style="background:#dbeafe;border:1.5px solid #93c5fd;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#1e40af;margin-bottom:8px;">🏗️ Mensgemaak</div>
    <ul style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2;font-size:15px;">
      <li><strong>Baksteenmure:</strong> reghoekige bakstene wat in verspringende rye gelê word, skep ʼn sterk tessellerende patroon</li>
      <li><strong>Vloerteëls:</strong> vierkantige of seshoekige teëls bedek ʼn oppervlak met geen gapings nie</li>
      <li><strong>Vensterrame:</strong> reghoekige glaspanele wat in ʼn herhalende rooster gerangskik is</li>
      <li><strong>Heinings:</strong> gelykafstand-pale of panele vorm ʼn herhalende patroon langs ʼn grens</li>
    </ul>
  </div>

  <div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;">
    <div style="font-size:14px;font-weight:700;color:#b45309;margin-bottom:8px;">🎨 Kuns en kultuur</div>
    <ul style="margin:0;padding-left:20px;color:#92400e;line-height:2;font-size:15px;">
      <li><strong>Ndebele-muurskilderye:</strong> vetterige geometriese vorms in herhalende kleurvolgordes versier die buitekant van huise</li>
      <li><strong>Kente-lappatrone:</strong> inmekaargeweefde repe helderkleurige stof skep ʼn ingewikkelde herhalende patroon</li>
      <li><strong>Islamitiese geometriese kuns:</strong> ingewikkelde herhalende teëlpatrone gebaseer op sterre en veelhoeke bedek moskeemure en -vloere</li>
    </ul>
  </div>

</div>`,

      workedExamples: [
        {
          question: 'Kyk na ʼn baksteenmuur. Beskryf die geometriese patroon.',
          answer: 'ʼn Herhalende tessellerende patroon waar elke ry ʼn halwe baksteen na regs verskuif.',
          steps: [
            `<strong>Stap 1:</strong> Identifiseer die vorm wat gebruik word:<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 14px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:700;">Die bakstene is reghoeke</div>`,
            `<strong>Stap 2:</strong> Kyk hoe die rye gerangskik is — lê die bakstene direk bo mekaar, of is hulle verskuif?<br/>
<div style="background:#dbeafe;border-radius:6px;padding:8px 14px;display:inline-block;margin-top:8px;">
  <span style="color:#1e40af;font-weight:700;">Elke ry is met ʼn halwe baksteen verskuif vanaf die ry daaronder.</span>
</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Dit beteken die voeë in een ry lê nooit reg bo die voeë in die ry daarbo nie — wat die muur baie sterker maak.</p>`,
            `<strong>Stap 3:</strong> Identifiseer die tipe patroon:<br/>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 12px;color:#1e40af;font-weight:700;">Herhalende patroon ✓</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 12px;color:#1e40af;font-weight:700;">Tessellerende patroon ✓</span>
</div>
<p style="margin-top:8px;margin-bottom:0;color:#374151;font-size:14px;">Die reghoeke bedek die muur volledig met geen gapings en geen oorvleueling nie.</p>`,
            `<strong>Stap 4 — Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">elke ry verskuif ʼn halwe baksteen na regs, dan herhaal dieselfde rangskikking</span>`,
          ],
        },
      ],

      diagramPlaceholder: 'Drie beelde langs mekaar wat ʼn heuningkoekpatroon, ʼn baksteenmuurpatroon en ʼn Ndebele geometriese muurskildery-patroon wys',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — SKEP JOU EIE GEOMETRIESE PATROON
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'creating-your-own-geometric-pattern',
      title: 'Skep Jou Eie Geometriese Patroon',
      icon: '✏️',
      explanation: `
<p style="margin-bottom:14px;">Jy kan jou eie geometriese patroon van voor af ontwerp! Al wat jy nodig het, is ʼn vorm, ʼn reël, en ʼn paar stappe — dan kan jy ʼn patroon bou wat iemand anders kan lees en uitbrei. ʼn Goeie patroon het ʼn <strong>duidelike reël</strong> wat elke keer op dieselfde manier werk.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die 5 stappe om jou eie geometriese patroon te skep</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Kies jou vorm of vorms</strong> — kies een of meer vorms soos vierkante, driehoeke of sirkels.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Besluit op ʼn reël</strong> — gaan jou patroon herhaal, groei in getal of grootte, of van kleur verander?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#7c3aed;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Teken die eerste 4 tot 6 terme</strong> — pas jou reël stap vir stap toe om die patroon te bou.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#d97706;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Skryf die reël duidelik neer</strong> — beskryf dit in eenvoudige woorde sodat enigiemand dit kan verstaan.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Kontroleer jou patroon</strong> — sou iemand anders jou reël kon lees en die volgende term korrek kon teken?</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Skep ʼn groeiende patroon met vierkante waar elke term ʼn nuwe ry byvoeg met een vierkant meer as die ry daarvoor.',
          answer: 'Term 1: 1 vierkant. Term 2: 3 vierkante. Term 3: 6 vierkante. Reël: elke nuwe term voeg ʼn ry by met een vierkant meer as die vorige ry.',
          steps: [
            `<strong>Stap 1 — Kies die vorm:</strong> <span style="background:#dbeafe;border-radius:6px;padding:4px 12px;color:#1e40af;font-weight:700;">vierkante</span>`,
            `<strong>Stap 2 — Besluit op die reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">groeiende patroon — elke nuwe term voeg ʼn ry by met een vierkant meer</span>`,
            `<strong>Stap 3 — Teken die eerste 3 terme:</strong><br/>
<div style="display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-top:12px;">

  <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 1</span>
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <span style="font-size:22px;color:#1e40af;line-height:1;">■</span>
    </div>
    <span style="font-size:13px;font-weight:700;color:#1e40af;">1 vierkant</span>
  </div>

  <span style="font-size:18px;color:#374151;font-weight:300;margin-bottom:18px;">→</span>

  <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 2</span>
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <span style="font-size:22px;color:#1e40af;line-height:1;">■</span>
      <span style="font-size:22px;color:#16a34a;line-height:1;">■ ■</span>
    </div>
    <span style="font-size:13px;font-weight:700;color:#1e40af;">1 </span><span style="font-size:13px;font-weight:700;color:#16a34a;">+ 2 </span><span style="font-size:13px;font-weight:700;color:#374151;">= 3 vierkante</span>
  </div>

  <span style="font-size:18px;color:#374151;font-weight:300;margin-bottom:18px;">→</span>

  <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
    <span style="font-size:13px;font-weight:700;color:#374151;text-transform:uppercase;">Term 3</span>
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <span style="font-size:22px;color:#1e40af;line-height:1;">■</span>
      <span style="font-size:22px;color:#1e40af;line-height:1;">■ ■</span>
      <span style="font-size:22px;color:#16a34a;line-height:1;">■ ■ ■</span>
    </div>
    <span style="font-size:13px;font-weight:700;color:#1e40af;">1 + 2 </span><span style="font-size:13px;font-weight:700;color:#16a34a;">+ 3 </span><span style="font-size:13px;font-weight:700;color:#374151;">= 6 vierkante</span>
  </div>

</div>`,
            `<strong>Stap 4 — Skryf die reël neer:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">elke nuwe term voeg ʼn ry by met een vierkant meer as die ry daarvoor</span>`,
            `<strong>Stap 5 — Kontroleer:</strong> Sou iemand dit kon uitbrei? Hoe sou term 4 lyk?<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <span style="color:#374151;font-size:14px;">Term 4 = 1 + 2 + 3 +</span>
  <span style="font-size:16px;font-weight:700;color:#16a34a;">4 (nuwe ry)</span>
  <span style="color:#374151;font-size:14px;">=</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">10 vierkante ✓</span>
</div>`,
          ],
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe om jou eie geometriese patroon stap vir stap te ontwerp en te beskryf',

      practiceQuestions: [],
      openQuestions: [],
    },
  ],


  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — HERHALENDE PATRONE: IDENTIFISEER DIE NDE VORM (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Herhalende Patrone',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Patroon herhaal: sirkel, vierkant, sirkel, vierkant, sirkel, vierkant, …\n\nWat is die 4de vorm?', answer: 'Vierkant', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'Square', 'square'], explanation: 'Die herhalende eenheid is: sirkel, vierkant — 2 vorms per eenheid.\n4 ÷ 2 = 2 res 0. ʼn Res van 0 beteken dit is die laaste vorm in die eenheid, wat vierkant is.' },
        { difficulty: 'Easy', question: 'ʼn Patroon herhaal: sirkel, vierkant, sirkel, vierkant, sirkel, vierkant, …\n\nWat is die 7de vorm?', answer: 'Sirkel', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: 'Eenheidslengte = 2.\n7 ÷ 2 = 3 res 1.\nRes 1 → die 1ste vorm in die eenheid, wat sirkel is.' },
        { difficulty: 'Easy', question: 'ʼn Patroon herhaal: driehoek, sirkel, driehoek, sirkel, driehoek, sirkel, …\n\nWat is die 10de vorm?', answer: 'Sirkel', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: 'Eenheidslengte = 2 (driehoek, sirkel).\n10 ÷ 2 = 5 res 0.\nRes 0 → die laaste vorm in die eenheid, wat sirkel is.' },
        { difficulty: 'Easy', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, sirkel, vierkant, driehoek, …\n\nWat is die 6de vorm?', answer: 'Driehoek', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'Triangle', 'triangle'], explanation: 'Eenheidslengte = 3 (sirkel, vierkant, driehoek).\n6 ÷ 3 = 2 res 0.\nRes 0 → die laaste vorm in die eenheid, wat driehoek is.' },
        { difficulty: 'Easy', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, sirkel, vierkant, driehoek, …\n\nWat is die 9de vorm?', answer: 'Driehoek', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'Triangle', 'triangle'], explanation: 'Eenheidslengte = 3.\n9 ÷ 3 = 3 res 0.\nRes 0 → die laaste vorm in die eenheid, wat driehoek is.' },
        { difficulty: 'Medium', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, sirkel, vierkant, driehoek, …\n\nWat is die 14de vorm?', answer: 'Vierkant', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'Square', 'square'], explanation: 'Eenheidslengte = 3.\n14 ÷ 3 = 4 res 2.\nRes 2 → die 2de vorm in die eenheid, wat vierkant is.' },
        { difficulty: 'Easy', question: 'ʼn Patroon van krale herhaal: rooi, blou, groen, rooi, blou, groen, …\n\nWatter kleur is die 8ste kraal?', answer: 'Blou', checkMode: 'auto', correctAnswer: 'Blou', correctAnswers: ['Blou', 'blou', 'Blue', 'blue'], explanation: 'Eenheidslengte = 3 (rooi, blou, groen).\n8 ÷ 3 = 2 res 2.\nRes 2 → die 2de kleur in die eenheid, wat blou is.' },
        { difficulty: 'Medium', question: 'ʼn Patroon van krale herhaal: rooi, blou, groen, rooi, blou, groen, …\n\nWatter kleur is die 11de kraal?', answer: 'Blou', checkMode: 'auto', correctAnswer: 'Blou', correctAnswers: ['Blou', 'blou', 'Blue', 'blue'], explanation: 'Eenheidslengte = 3.\n11 ÷ 3 = 3 res 2.\nRes 2 → die 2de kleur in die eenheid, wat blou is.' },
        { difficulty: 'Medium', question: 'ʼn Patroon van krale herhaal: rooi, blou, groen, rooi, blou, groen, …\n\nWatter kleur is die 16de kraal?', answer: 'Rooi', checkMode: 'auto', correctAnswer: 'Rooi', correctAnswers: ['Rooi', 'rooi', 'Red', 'red'], explanation: 'Eenheidslengte = 3.\n16 ÷ 3 = 5 res 1.\nRes 1 → die 1ste kleur in die eenheid, wat rooi is.' },
        { difficulty: 'Medium', question: 'ʼn Patroon herhaal: sirkel, sirkel, driehoek, vierkant, sirkel, sirkel, driehoek, vierkant, …\n\nWat is die 10de vorm?', answer: 'Sirkel', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: 'Eenheidslengte = 4 (sirkel, sirkel, driehoek, vierkant).\n10 ÷ 4 = 2 res 2.\nRes 2 → die 2de vorm in die eenheid, wat sirkel is.' },
        { difficulty: 'Medium', question: 'ʼn Patroon herhaal: sirkel, sirkel, driehoek, vierkant, sirkel, sirkel, driehoek, vierkant, …\n\nWat is die 13de vorm?', answer: 'Sirkel', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: 'Eenheidslengte = 4.\n13 ÷ 4 = 3 res 1.\nRes 1 → die 1ste vorm in die eenheid, wat sirkel is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: sirkel, sirkel, driehoek, vierkant, sirkel, sirkel, driehoek, vierkant, …\n\nWat is die 18de vorm?', answer: 'Sirkel', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: 'Eenheidslengte = 4.\n18 ÷ 4 = 4 res 2.\nRes 2 → die 2de vorm in die eenheid, wat sirkel is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: sirkel, sirkel, driehoek, vierkant, sirkel, sirkel, driehoek, vierkant, …\n\nWat is die 22ste vorm?', answer: 'Sirkel', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: 'Eenheidslengte = 4.\n22 ÷ 4 = 5 res 2.\nRes 2 → die 2de vorm in die eenheid, wat sirkel is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: ster, ster, maan, son, wolk, ster, ster, maan, son, wolk, …\n\nWat is die 12de vorm?', answer: 'Ster', checkMode: 'auto', correctAnswer: 'Ster', correctAnswers: ['Ster', 'ster', 'Star', 'star'], explanation: 'Eenheidslengte = 5 (ster, ster, maan, son, wolk).\n12 ÷ 5 = 2 res 2.\nRes 2 → die 2de vorm in die eenheid, wat ster is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: ster, ster, maan, son, wolk, ster, ster, maan, son, wolk, …\n\nWat is die 17de vorm?', answer: 'Ster', checkMode: 'auto', correctAnswer: 'Ster', correctAnswers: ['Ster', 'ster', 'Star', 'star'], explanation: 'Eenheidslengte = 5.\n17 ÷ 5 = 3 res 2.\nRes 2 → die 2de vorm in die eenheid, wat ster is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: ster, ster, maan, son, wolk, ster, ster, maan, son, wolk, …\n\nWat is die 23ste vorm?', answer: 'Maan', checkMode: 'auto', correctAnswer: 'Maan', correctAnswers: ['Maan', 'maan', 'Moon', 'moon'], explanation: 'Eenheidslengte = 5.\n23 ÷ 5 = 4 res 3.\nRes 3 → die 3de vorm in die eenheid, wat maan is.' },
        { difficulty: 'Easy', question: 'ʼn Patroon van vlae herhaal: rooi, geel, rooi, geel, rooi, geel, …\n\nWatter kleur is die 15de vlag?', answer: 'Rooi', checkMode: 'auto', correctAnswer: 'Rooi', correctAnswers: ['Rooi', 'rooi', 'Red', 'red'], explanation: 'Eenheidslengte = 2 (rooi, geel).\n15 ÷ 2 = 7 res 1.\nRes 1 → die 1ste kleur in die eenheid, wat rooi is.' },
        { difficulty: 'Easy', question: 'ʼn Patroon van vlae herhaal: rooi, geel, rooi, geel, rooi, geel, …\n\nWatter kleur is die 20ste vlag?', answer: 'Geel', checkMode: 'auto', correctAnswer: 'Geel', correctAnswers: ['Geel', 'geel', 'Yellow', 'yellow'], explanation: 'Eenheidslengte = 2.\n20 ÷ 2 = 10 res 0.\nRes 0 → die laaste kleur in die eenheid, wat geel is.' },
        { difficulty: 'Medium', question: 'ʼn Patroon herhaal: driehoek, driehoek, vierkant, driehoek, driehoek, vierkant, …\n\nWat is die 19de vorm?', answer: 'Driehoek', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'Triangle', 'triangle'], explanation: 'Eenheidslengte = 3 (driehoek, driehoek, vierkant).\n19 ÷ 3 = 6 res 1.\nRes 1 → die 1ste vorm in die eenheid, wat driehoek is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: driehoek, driehoek, vierkant, driehoek, driehoek, vierkant, …\n\nWat is die 25ste vorm?', answer: 'Driehoek', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'Triangle', 'triangle'], explanation: 'Eenheidslengte = 3.\n25 ÷ 3 = 8 res 1.\nRes 1 → die 1ste vorm in die eenheid, wat driehoek is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, ster, sirkel, vierkant, driehoek, ster, …\n\nWat is die 30ste vorm?', answer: 'Vierkant', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'Square', 'square'], explanation: 'Eenheidslengte = 4 (sirkel, vierkant, driehoek, ster).\n30 ÷ 4 = 7 res 2.\nRes 2 → die 2de vorm in die eenheid, wat vierkant is.' },
        { difficulty: 'Medium', question: 'ʼn Patroon van linte herhaal: blou, groen, geel, blou, groen, geel, …\n\nWatter kleur is die 27ste lint?', answer: 'Geel', checkMode: 'auto', correctAnswer: 'Geel', correctAnswers: ['Geel', 'geel', 'Yellow', 'yellow'], explanation: 'Eenheidslengte = 3 (blou, groen, geel).\n27 ÷ 3 = 9 res 0.\nRes 0 → die laaste kleur in die eenheid, wat geel is.' },
        { difficulty: 'Medium', question: 'ʼn Patroon van linte herhaal: blou, groen, geel, blou, groen, geel, …\n\nWatter kleur is die 21ste lint?', answer: 'Geel', checkMode: 'auto', correctAnswer: 'Geel', correctAnswers: ['Geel', 'geel', 'Yellow', 'yellow'], explanation: 'Eenheidslengte = 3.\n21 ÷ 3 = 7 res 0.\nRes 0 → die laaste kleur in die eenheid, wat geel is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: vierkant, sirkel, sirkel, driehoek, vierkant, sirkel, sirkel, driehoek, …\n\nWat is die 24ste vorm?', answer: 'Driehoek', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'Triangle', 'triangle'], explanation: 'Eenheidslengte = 4 (vierkant, sirkel, sirkel, driehoek).\n24 ÷ 4 = 6 res 0.\nRes 0 → die laaste vorm in die eenheid, wat driehoek is.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, ster, maan, sirkel, vierkant, driehoek, ster, maan, …\n\nWat is die 5de vorm?', answer: 'Maan', checkMode: 'auto', correctAnswer: 'Maan', correctAnswers: ['Maan', 'maan', 'Moon', 'moon'], explanation: 'Eenheidslengte = 5 (sirkel, vierkant, driehoek, ster, maan).\n5 ÷ 5 = 1 res 0.\nRes 0 → die laaste vorm in die eenheid, wat maan is.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het dit bemeester om vorms in ʼn herhalende patroon raak te sien.' },
        { minScore: 19, message: 'Goeie werk! Jy kan met selfvertroue die nde vorm in ʼn patroon vind — gaan gemiste vrae na.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug oor om deur die eenheidslengte te deel en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — GROEIENDE EN KRIMPENDE PATRONE (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Groeiende en Krimpende Patrone',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Groeiende patroon gebruik 1 kolletjie in stap 1, 3 kolletjies in stap 2, 5 kolletjies in stap 3, 7 kolletjies in stap 4, …\n\nVolgens hierdie reël, hoeveel kolletjies is in stap 6?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11 kolletjies'], explanation: 'Die reël is tel elke keer 2 kolletjies by.\nStap 4 = 7, Stap 5 = 7 + 2 = 9, Stap 6 = 9 + 2 = 11 kolletjies.' },
        { difficulty: 'Easy', question: 'ʼn Groeiende patroon gebruik 2 vierkante in stap 1, 4 vierkante in stap 2, 6 vierkante in stap 3, 8 vierkante in stap 4, …\n\nHoeveel vierkante is in stap 7?', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14 vierkante'], explanation: 'Die reël is tel elke keer 2 vierkante by.\nStap 4 = 8, Stap 5 = 10, Stap 6 = 12, Stap 7 = 14 vierkante.' },
        { difficulty: 'Easy', question: 'ʼn Groeiende patroon gebruik 3 driehoeke in stap 1, 6 driehoeke in stap 2, 9 driehoeke in stap 3, …\n\nHoeveel driehoeke is in stap 5?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 driehoeke'], explanation: 'Die reël is tel elke keer 3 driehoeke by.\nStap 3 = 9, Stap 4 = 12, Stap 5 = 15 driehoeke.' },
        { difficulty: 'Easy', question: 'ʼn Groeiende patroon gebruik 2 sirkels in stap 1, 5 sirkels in stap 2, 8 sirkels in stap 3, …\n\nHoeveel sirkels is in stap 6?', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17 sirkels'], explanation: 'Die reël is tel elke keer 3 sirkels by.\nStap 3 = 8, Stap 4 = 11, Stap 5 = 14, Stap 6 = 17 sirkels.' },
        { difficulty: 'Medium', question: 'ʼn Trappatroon het 1 vierkant in ry 1, 2 vierkante in ry 2, 3 vierkante in ry 3, ensovoorts.\n\nHoeveel vierkante is daar altesaam na 6 rye?', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21 vierkante'], explanation: 'Tel al die rye van 1 tot 6 op:\n1 + 2 + 3 + 4 + 5 + 6 = 21 vierkante.' },
        { difficulty: 'Medium', question: 'ʼn Trappatroon het 1 vierkant in ry 1, 2 vierkante in ry 2, 3 vierkante in ry 3, ensovoorts.\n\nHoeveel vierkante is daar altesaam na 7 rye?', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28 vierkante'], explanation: 'Tel al die rye van 1 tot 7 op:\n1 + 2 + 3 + 4 + 5 + 6 + 7 = 28 vierkante.' },
        { difficulty: 'Easy', question: 'ʼn Groeiende patroon gebruik 4 sterre in stap 1, 8 sterre in stap 2, 12 sterre in stap 3, …\n\nHoeveel sterre is in stap 5?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 sterre'], explanation: 'Die reël is tel elke keer 4 sterre by.\nStap 3 = 12, Stap 4 = 16, Stap 5 = 20 sterre.' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 5 teëls in stap 1, 10 teëls in stap 2, 15 teëls in stap 3, …\n\nHoeveel teëls is in stap 6?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 teëls'], explanation: 'Die reël is tel elke keer 5 teëls by.\nStap 3 = 15, Stap 4 = 20, Stap 5 = 25, Stap 6 = 30 teëls.' },
        { difficulty: 'Medium', question: 'ʼn Krimpende patroon gebruik 20 fiches in stap 1, 17 fiches in stap 2, 14 fiches in stap 3, …\n\nHoeveel fiches is in stap 5?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 fiches'], explanation: 'Die reël is trek elke keer 3 fiches af.\nStap 3 = 14, Stap 4 = 11, Stap 5 = 8 fiches.' },
        { difficulty: 'Medium', question: 'ʼn Krimpende patroon gebruik 30 blokke in stap 1, 25 blokke in stap 2, 20 blokke in stap 3, …\n\nHoeveel blokke is in stap 6?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 blokke'], explanation: 'Die reël is trek elke keer 5 blokke af.\nStap 3 = 20, Stap 4 = 15, Stap 5 = 10, Stap 6 = 5 blokke.' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 1 vorm in stap 1, 4 vorms in stap 2, 7 vorms in stap 3, 10 vorms in stap 4, …\n\nWatter stap het 22 vorms?', answer: 'Stap 8', checkMode: 'auto', correctAnswer: 'Stap 8', correctAnswers: ['Stap 8', 'stap 8', '8', 'agtste', '8ste', '8ste stap'], explanation: 'Die reël is tel elke keer 3 vorms by.\nStap 4 = 10, Stap 5 = 13, Stap 6 = 16, Stap 7 = 19, Stap 8 = 22 vorms. ✓' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 2 vorms in stap 1, 6 vorms in stap 2, 10 vorms in stap 3, 14 vorms in stap 4, …\n\nWatter stap het 26 vorms?', answer: 'Stap 7', checkMode: 'auto', correctAnswer: 'Stap 7', correctAnswers: ['Stap 7', 'stap 7', '7', 'sewende', '7de', '7de stap'], explanation: 'Die reël is tel elke keer 4 vorms by.\nStap 4 = 14, Stap 5 = 18, Stap 6 = 22, Stap 7 = 26 vorms. ✓' },
        { difficulty: 'Hard', question: 'ʼn Trappatroon het 1 vierkant in ry 1, 2 vierkante in ry 2, 3 vierkante in ry 3, ensovoorts.\n\nHoeveel vierkante is daar altesaam na 8 rye?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 vierkante'], explanation: 'Tel al die rye van 1 tot 8 op:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 vierkante.' },
        { difficulty: 'Hard', question: 'ʼn Trappatroon het 1 vierkant in ry 1, 2 vierkante in ry 2, 3 vierkante in ry 3, ensovoorts.\n\nHoeveel vierkante is daar altesaam na 9 rye?', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45 vierkante'], explanation: 'Tel al die rye van 1 tot 9 op:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 vierkante.' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 3 vorms in stap 1, 7 vorms in stap 2, 11 vorms in stap 3, …\n\nHoeveel vorms is in stap 7?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 vorms'], explanation: 'Die reël is tel elke keer 4 vorms by.\nStap 3 = 11, Stap 4 = 15, Stap 5 = 19, Stap 6 = 23, Stap 7 = 27 vorms.' },
        { difficulty: 'Hard', question: 'ʼn Groeiende patroon gebruik 6 vorms in stap 1, 11 vorms in stap 2, 16 vorms in stap 3, …\n\nHoeveel vorms is in stap 8?', answer: '41', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41 vorms'], explanation: 'Die reël is tel elke keer 5 vorms by.\nStap 3 = 16, Stap 4 = 21, Stap 5 = 26, Stap 6 = 31, Stap 7 = 36, Stap 8 = 41 vorms.' },
        { difficulty: 'Hard', question: 'ʼn Groeiende patroon gebruik 1 vorm in stap 1, 4 vorms in stap 2, 7 vorms in stap 3, …\n\nHoeveel vorms is in stap 9?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 vorms'], explanation: 'Die reël is tel elke keer 3 vorms by.\nStap 3 = 7, Stap 4 = 10, Stap 5 = 13, Stap 6 = 16, Stap 7 = 19, Stap 8 = 22, Stap 9 = 25 vorms.' },
        { difficulty: 'Medium', question: 'ʼn Verdubbelende patroon gebruik 2 kolletjies in stap 1, 4 kolletjies in stap 2, 8 kolletjies in stap 3, 16 kolletjies in stap 4, …\n\nHoeveel kolletjies is in stap 5?', answer: '32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32 kolletjies'], explanation: 'Die reël is verdubbel die aantal kolletjies elke keer.\nStap 4 = 16, Stap 5 = 16 × 2 = 32 kolletjies.' },
        { difficulty: 'Hard', question: 'ʼn Verdubbelende patroon gebruik 2 kolletjies in stap 1, 4 kolletjies in stap 2, 8 kolletjies in stap 3, 16 kolletjies in stap 4, 32 kolletjies in stap 5, …\n\nHoeveel kolletjies is in stap 6?', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 kolletjies'], explanation: 'Die reël is verdubbel die aantal kolletjies elke keer.\nStap 5 = 32, Stap 6 = 32 × 2 = 64 kolletjies.' },
        { difficulty: 'Hard', question: 'ʼn Trappatroon het 1 vierkant in ry 1, 2 vierkante in ry 2, 3 vierkante in ry 3, ensovoorts.\n\nHoeveel vierkante is daar altesaam na 10 rye?', answer: '55', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 vierkante'], explanation: 'Tel al die rye van 1 tot 10 op:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55 vierkante.' },
        { difficulty: 'Hard', question: 'ʼn Groeiende patroon gebruik 5 vorms in stap 1, 9 vorms in stap 2, 13 vorms in stap 3, …\n\nWatter stap het 33 vorms?', answer: 'Stap 8', checkMode: 'auto', correctAnswer: 'Stap 8', correctAnswers: ['Stap 8', 'stap 8', '8', 'agtste', '8ste', '8ste stap'], explanation: 'Die reël is tel elke keer 4 vorms by.\nStap 3 = 13, Stap 4 = 17, Stap 5 = 21, Stap 6 = 25, Stap 7 = 29, Stap 8 = 33 vorms. ✓' },
        { difficulty: 'Medium', question: 'ʼn Krimpende patroon gebruik 24 krale in stap 1, 20 krale in stap 2, 16 krale in stap 3, …\n\nHoeveel krale is in stap 6?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 krale'], explanation: 'Die reël is trek elke keer 4 krale af.\nStap 3 = 16, Stap 4 = 12, Stap 5 = 8, Stap 6 = 4 krale.' },
        { difficulty: 'Medium', question: 'ʼn Krimpende patroon gebruik 40 fiches in stap 1, 35 fiches in stap 2, 30 fiches in stap 3, …\n\nHoeveel fiches is in stap 7?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 fiches'], explanation: 'Die reël is trek elke keer 5 fiches af.\nStap 3 = 30, Stap 4 = 25, Stap 5 = 20, Stap 6 = 15, Stap 7 = 10 fiches.' },
        { difficulty: 'Hard', question: 'ʼn Groeiende patroon gebruik 2 vorms in stap 1, 7 vorms in stap 2, 12 vorms in stap 3, …\n\nWatter stap het 47 vorms?', answer: 'Stap 10', checkMode: 'auto', correctAnswer: 'Stap 10', correctAnswers: ['Stap 10', 'stap 10', '10', 'tiende', '10de', '10de stap'], explanation: 'Die reël is tel elke keer 5 vorms by.\nStap 3 = 12, Stap 4 = 17, Stap 5 = 22, Stap 6 = 27, Stap 7 = 32, Stap 8 = 37, Stap 9 = 42, Stap 10 = 47 vorms. ✓' },
        { difficulty: 'Hard', question: 'ʼn Trappatroon het 1 vierkant in ry 1, 2 vierkante in ry 2, 3 vierkante in ry 3, ensovoorts.\n\nHoeveel vierkante is daar altesaam na 12 rye?', answer: '78', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78 vierkante'], explanation: 'Tel al die rye van 1 tot 12 op:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 = 78 vierkante.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het groeiende en krimpende patrone bemeester.' },
        { minScore: 19, message: 'Goeie werk! Jy kan met selfvertroue die reël vind en toepas — gaan gemiste vrae na.' },
        { minScore: 13, message: 'Goeie poging! Oefen om die verskil tussen stappe te vind en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — TESSELLASIE EN ALLEDAAGSE PATROONVRAAGSTUKKE (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Tessellasie en Alledaagse Patrone',
      questions: [
        { difficulty: 'Easy', question: 'Tesseleer ʼn vierkant? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Vierkante het reguit rande wat inmekaar pas met geen gapings en geen oorvleueling nie. Ja, vierkante tesseleer.' },
        { difficulty: 'Easy', question: 'Tesseleer ʼn sirkel? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Sirkels het geboë rande wat altyd gapings laat wanneer hulle langs mekaar geplaas word. Nee, sirkels tesseleer nie.' },
        { difficulty: 'Easy', question: 'Tesseleer ʼn gelyksydige driehoek? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Driehoeke het reguit rande wat inmekaar pas met geen gapings nie. Ja, driehoeke tesseleer.' },
        { difficulty: 'Medium', question: 'Elke hoek van ʼn vierkant is 90°. Hoeveel vierkante ontmoet by elke punt in ʼn tessellerende patroon?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 vierkante'], explanation: 'Vir tessellasie moet die hoeke by ʼn punt tot 360° optel.\n360° ÷ 90° = 4 vierkante.' },
        { difficulty: 'Medium', question: 'Elke hoek van ʼn gelyksydige driehoek is 60°. Hoeveel driehoeke ontmoet by elke punt in ʼn tessellerende patroon?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 driehoeke'], explanation: 'Vir tessellasie moet die hoeke by ʼn punt tot 360° optel.\n360° ÷ 60° = 6 driehoeke.' },
        { difficulty: 'Medium', question: 'Elke hoek van ʼn reëlmatige seshoek is 120°. Hoeveel seshoeke ontmoet by elke punt in ʼn tessellerende patroon?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 seshoeke'], explanation: 'Vir tessellasie moet die hoeke by ʼn punt tot 360° optel.\n360° ÷ 120° = 3 seshoeke.' },
        { difficulty: 'Easy', question: 'ʼn Badkamervloer word geteël met vierkantige teëls in 4 rye van 5 teëls elk. Hoeveel teëls word altesaam gebruik?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 teëls'], explanation: '4 rye × 5 teëls = 20 teëls.' },
        { difficulty: 'Easy', question: 'ʼn Muur word geteël met vierkantige teëls in 6 rye van 7 teëls elk. Hoeveel teëls word altesaam gebruik?', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 teëls'], explanation: '6 rye × 7 teëls = 42 teëls.' },
        { difficulty: 'Medium', question: 'ʼn Patio word geplavei met vierkantige plaveistene in 8 rye van 9 stene elk. Hoeveel plaveistene word altesaam gebruik?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 plaveistene', '72 stene'], explanation: '8 rye × 9 stene = 72 plaveistene.' },
        { difficulty: 'Medium', question: 'ʼn Kombuisvloer word geteël met vierkantige teëls in 10 rye van 6 teëls elk. Hoeveel teëls word altesaam gebruik?', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 teëls'], explanation: '10 rye × 6 teëls = 60 teëls.' },
        { difficulty: 'Easy', question: 'ʼn Baksteenmuur het bakstene in 3 rye van 12 bakstene elk gelê. Hoeveel bakstene word altesaam gebruik?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 bakstene'], explanation: '3 rye × 12 bakstene = 36 bakstene.' },
        { difficulty: 'Medium', question: 'ʼn Skaakbordrooster het 5 rye van 5 vierkante elk. Hoeveel vierkante is daar altesaam?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 vierkante'], explanation: '5 rye × 5 vierkante = 25 vierkante.' },
        { difficulty: 'Medium', question: 'ʼn Heuningkoekafdeling het 7 rye van 8 seshoekige selle elk. Hoeveel selle is daar altesaam?', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56 selle'], explanation: '7 rye × 8 selle = 56 selle.' },
        { difficulty: 'Medium', question: 'ʼn Venster het reghoekige panele in 9 rye van 4 panele elk gerangskik. Hoeveel panele is daar altesaam?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 panele'], explanation: '9 rye × 4 panele = 36 panele.' },
        { difficulty: 'Medium', question: 'ʼn Heining het pale in 12 rye van 3 pale elk gerangskik. Hoeveel pale is daar altesaam?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 pale'], explanation: '12 rye × 3 pale = 36 pale.' },
        { difficulty: 'Easy', question: 'ʼn Kraalarmband het krale wat herhaal: rooi, blou, groen. As daar altesaam 18 krale is en die patroon eweredig verdeel, hoeveel rooi krale is daar?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 krale', '6 rooi krale'], explanation: 'Eenheidslengte = 3 (rooi, blou, groen). 18 ÷ 3 = 6 volledige eenhede, dus is daar 6 rooi krale.' },
        { difficulty: 'Medium', question: 'ʼn Kraalhalssnoer het krale wat herhaal: sirkel, sirkel, vierkant, driehoek (eenheidslengte 4). As daar altesaam 24 krale is en die patroon eweredig verdeel, hoeveel volledige eenhede is daar?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 eenhede'], explanation: 'Eenheidslengte = 4. 24 ÷ 4 = 6 volledige eenhede.' },
        { difficulty: 'Hard', question: 'Lerato teël ʼn vloer met reëlmatige seshoekteëls. Elke seshoek het ʼn binnehoek van 120°. Tesseleer die seshoeke? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: '360° ÷ 120° = 3 (ʼn heelgetal), dus pas die seshoeke perfek rondom elke punt. Ja, hulle tesseleer.' },
        { difficulty: 'Hard', question: 'Amahle teël ʼn vloer met reëlmatige vyfhoekteëls. Elke vyfhoek het ʼn binnehoek van 108°. Tesseleer die vyfhoeke op hulle eie? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: '360° ÷ 108° = 3.33…, wat nie ʼn heelgetal is nie, dus laat vyfhoeke gapings en tesseleer nie op hulle eie nie.' },
        { difficulty: 'Medium', question: 'ʼn Ndebele-muurskildery gebruik ʼn herhalende patroon van 4 kleure rondom ʼn grens. As die grens 32 vorms het en die patroon eweredig verdeel, hoeveel vorms is daar van elke kleur?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 vorms'], explanation: 'Eenheidslengte = 4 kleure. 32 ÷ 4 = 8 vorms van elke kleur.' },
        { difficulty: 'Easy', question: 'Thabo sien vloerteëls in 6 rye van 6 teëls gerangskik. Hoeveel teëls is op die vloer altesaam?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 teëls'], explanation: '6 rye × 6 teëls = 36 teëls.' },
        { difficulty: 'Medium', question: 'Sipho bou ʼn baksteenpaadjie met ʼn herhalende patroon van 3 baksteenkleure. As die paadjie 27 bakstene het en die patroon eweredig verdeel, hoeveel bakstene is daar van elke kleur?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 bakstene'], explanation: 'Eenheidslengte = 3 kleure. 27 ÷ 3 = 9 bakstene van elke kleur.' },
        { difficulty: 'Hard', question: 'ʼn Teëlwerker wil reëlmatige agthoeke (binnehoek 135°) gebruik om ʼn vloer op hulle eie te teël. Sal reëlmatige agthoeke op hulle eie tesseleer? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: '360° ÷ 135° = 2.67…, wat nie ʼn heelgetal is nie, dus laat reëlmatige agthoeke gapings en kan nie op hulle eie tesseleer nie.' },
        { difficulty: 'Medium', question: 'Waarom tesseleer ʼn reghoek maar ʼn sirkel nie? Gee een rede.', answer: 'ʼn Reghoek het reguit rande wat plat teen mekaar pas met geen gapings nie, terwyl ʼn sirkel geboë rande het wat altyd gapings laat wanneer dit langs mekaar geplaas word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die hoeke rondom ʼn ontmoetingspunt presies tot 360° moet optel vir ʼn vorm om te tesseleer.', answer: '360° is ʼn volle draai heeltemal rondom ʼn enkele punt. As die hoeke van die vorms wat by daardie punt ontmoet presies tot 360° optel, vul hulle al die ruimte rondom die punt op sonder dat iets oorbly — geen gapings en geen oorvleueling nie. As hulle minder as 360° optel, is daar gapings; as dit meer is, oorvleuel die vorms.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het tessellasie en alledaagse patroonvraagstukke bemeester.' },
        { minScore: 19, message: 'Goeie werk! Jy verstaan tessellerende vorms en patroonvraagstukke — gaan gemiste vrae na.' },
        { minScore: 13, message: 'Goeie poging! Gaan die tessellasie-uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — VEELSTAP-, GEKOMBINEERDE EN SELFKONTROLEVRAE (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Veelstap- en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Easy', question: 'Is hierdie patroon herhalend of groeiend?\n\nsirkel, vierkant, sirkel, vierkant, sirkel, vierkant', answer: 'Herhalend', checkMode: 'auto', correctAnswer: 'Herhalend', correctAnswers: ['Herhalend', 'herhalend', 'Repeating', 'repeating'], explanation: 'Dieselfde groep — sirkel, vierkant — kom oor en oor terug sonder om in getal te verander. Dit is ʼn herhalende patroon.' },
        { difficulty: 'Easy', question: 'Is hierdie patroon herhalend of groeiend?\n\n2 kolletjies, 5 kolletjies, 8 kolletjies, 11 kolletjies', answer: 'Groeiend', checkMode: 'auto', correctAnswer: 'Groeiend', correctAnswers: ['Groeiend', 'groeiend', 'Growing', 'growing'], explanation: 'Die aantal kolletjies neem elke keer toe: 2, 5, 8, 11. Dit is ʼn groeiende patroon.' },
        { difficulty: 'Medium', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, ster (eenheidslengte 4).\n\nWat is die 27ste vorm?', answer: 'Driehoek', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'Triangle', 'triangle'], explanation: 'Eenheidslengte = 4.\n27 ÷ 4 = 6 res 3.\nRes 3 → die 3de vorm in die eenheid, wat driehoek is.' },
        { difficulty: 'Medium', question: 'ʼn Trappatroon het 1 vierkant in ry 1, 2 vierkante in ry 2, ensovoorts. Hoeveel vierkante is daar altesaam na 15 rye?', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120 vierkante'], explanation: 'Tel al die rye van 1 tot 15 op:\n1 + 2 + 3 + … + 15 = 120 vierkante.' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 4 vorms in stap 1, 9 vorms in stap 2, 14 vorms in stap 3, …\n\nWatter stap het 49 vorms?', answer: 'Stap 10', checkMode: 'auto', correctAnswer: 'Stap 10', correctAnswers: ['Stap 10', 'stap 10', '10', 'tiende', '10de', '10de stap'], explanation: 'Die reël is tel elke keer 5 vorms by.\nStap 3 = 14, Stap 4 = 19, Stap 5 = 24, Stap 6 = 29, Stap 7 = 34, Stap 8 = 39, Stap 9 = 44, Stap 10 = 49 vorms. ✓' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 3 driehoeke in stap 1, 6 driehoeke in stap 2, 9 driehoeke in stap 3, …\n\nHoeveel driehoeke is in stap 12?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 driehoeke'], explanation: 'Die reël is tel elke keer 3 driehoeke by, dus stap n = 3 × n.\nStap 12 = 3 × 12 = 36 driehoeke.' },
        { difficulty: 'Medium', question: 'ʼn Patroon herhaal: ster, ster, maan, son, wolk (eenheidslengte 5).\n\nWat is die 33ste vorm?', answer: 'Maan', checkMode: 'auto', correctAnswer: 'Maan', correctAnswers: ['Maan', 'maan', 'Moon', 'moon'], explanation: 'Eenheidslengte = 5.\n33 ÷ 5 = 6 res 3.\nRes 3 → die 3de vorm in die eenheid, wat maan is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek (eenheidslengte 3).\n\nWat is die 100ste vorm?', answer: 'Sirkel', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: 'Eenheidslengte = 3.\n100 ÷ 3 = 33 res 1.\nRes 1 → die 1ste vorm in die eenheid, wat sirkel is.' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: sirkel, sirkel, driehoek, vierkant (eenheidslengte 4).\n\nWat is die 50ste vorm?', answer: 'Sirkel', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: 'Eenheidslengte = 4.\n50 ÷ 4 = 12 res 2.\nRes 2 → die 2de vorm in die eenheid, wat sirkel is.' },
        { difficulty: 'Medium', question: 'ʼn Verdubbelende patroon gebruik 3 kolletjies in stap 1, 6 kolletjies in stap 2, 12 kolletjies in stap 3, 24 kolletjies in stap 4, …\n\nHoeveel kolletjies is in stap 5?', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48 kolletjies'], explanation: 'Die reël is verdubbel die aantal kolletjies elke keer.\nStap 4 = 24, Stap 5 = 24 × 2 = 48 kolletjies.' },
        { difficulty: 'Hard', question: 'ʼn Groeiende patroon gebruik 2 vorms in stap 1, 6 vorms in stap 2, 10 vorms in stap 3, …\n\nWatter stap het 50 vorms?', answer: 'Stap 13', checkMode: 'auto', correctAnswer: 'Stap 13', correctAnswers: ['Stap 13', 'stap 13', '13', 'dertiende', '13de', '13de stap'], explanation: 'Die reël is tel elke keer 4 vorms by.\nStap 3 = 10, Stap 4 = 14, Stap 5 = 18, Stap 6 = 22, Stap 7 = 26, Stap 8 = 30, Stap 9 = 34, Stap 10 = 38, Stap 11 = 42, Stap 12 = 46, Stap 13 = 50 vorms. ✓' },
        { difficulty: 'Easy', question: 'Tesseleer ʼn reghoek? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Reghoeke het reguit rande wat inmekaar pas met geen gapings nie. Ja, reghoeke tesseleer.' },
        { difficulty: 'Medium', question: 'ʼn Patroon wys: 5 vorms, 5 vorms, 5 vorms, 5 vorms, …\n\nIs dit ʼn herhalende patroon, ʼn groeiende patroon, of nie een van die twee nie? Verduidelik jou antwoord.', answer: 'Nie een van die twee nie — die aantal vorms bly presies dieselfde elke keer (5, 5, 5, 5), dus groei dit nie. Dit is ook nie ʼn herhalende patroon in die gewone sin nie omdat daar net een term is wat herhaal, eerder as ʼn volgorde van verskillende vorms wat deur ʼn eenheid loop.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Beskryf, in jou eie woorde, die reël vir hierdie patroon: 1 vierkant, 4 vierkante, 7 vierkante, 10 vierkante, …', answer: 'Die reël is: begin met 1 vierkant en tel elke keer 3 vierkante by om die volgende term te kry.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Patroon herhaal: rooi, rooi, blou, rooi, rooi, blou, …\n\nIs hierdie patroon herhalend of groeiend? Wat is die eenheidslengte?', answer: 'a) Herhalend    b) Eenheidslengte 3', parts: [ { label: 'a) Herhalend of groeiend?', correctAnswer: 'Herhalend', correctAnswers: ['Herhalend', 'herhalend', 'Repeating', 'repeating'], explanation: 'Dieselfde groep kleure (rooi, rooi, blou) kom oor en oor terug sonder om in getal te verander.' }, { label: 'b) Wat is die eenheidslengte?', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'Die herhalende groep is rooi, rooi, blou — 3 kleure per eenheid.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'ʼn Groeiende patroon en ʼn herhalende patroon begin altwee met 2 vorms. Na 4 stappe, watter tipe patroon het gewoonlik meer vorms — groeiend of herhalend? Verduidelik waarom.', answer: 'ʼn Groeiende patroon het gewoonlik meer vorms na verskeie stappe, omdat dit elke keer meer vorms bysit. ʼn Herhalende patroon hou dieselfde klein groep vorms wat deurgaan, dus neem die hoeveelheid wat in elke siklus gebruik word nie toe nie — net die posisie in die patroon verander.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik die verskil tussen ʼn herhalende patroon en ʼn groeiende patroon, en gee een voorbeeld uit die alledaagse lewe van elkeen.', answer: 'ʼn Herhalende patroon gebruik dieselfde volgorde van vorms, kleure of voorwerpe oor en oor sonder om in getal te verander — byvoorbeeld, teëls op ʼn vloer wat in dieselfde kleurvolgorde weer en weer gerangskik is. ʼn Groeiende patroon neem toe in getal of grootte by elke stap — byvoorbeeld, ʼn trap waar elke trap een baksteen meer het as die trap daarvoor.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Patroon herhaal: geel, groen, geel, groen, geel, groen, …\n\na) Wat is die eenheidslengte?\nb) Watter kleur is die 13de vorm?', answer: 'a) 2    b) Geel', parts: [ { label: 'a) Wat is die eenheidslengte?', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'Die herhalende groep is geel, groen — 2 kleure per eenheid.' }, { label: 'b) Watter kleur is die 13de vorm?', correctAnswer: 'Geel', correctAnswers: ['Geel', 'geel', 'Yellow', 'yellow'], explanation: 'Eenheidslengte = 2. 13 ÷ 2 = 6 res 1. Res 1 → die 1ste kleur, wat geel is.' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 2 vorms in stap 1 en tel elke keer 4 vorms by.\n\na) Hoeveel vorms is in stap 4?\nb) Hoeveel vorms is in stap 6?', answer: 'a) 14    b) 22', parts: [ { label: 'a) Hoeveel vorms in stap 4?', correctAnswer: '14', correctAnswers: ['14', '14 vorms'], explanation: 'Stap 1 = 2. Stap 2 = 6. Stap 3 = 10. Stap 4 = 14 vorms.' }, { label: 'b) Hoeveel vorms in stap 6?', correctAnswer: '22', correctAnswers: ['22', '22 vorms'], explanation: 'Gaan voort vanaf Stap 4 (14): Stap 5 = 18. Stap 6 = 22 vorms.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Ontwerp ʼn herhalende patroon met 3 verskillende vorms. Skryf die reël en die eerste 9 terme neer.', answer: 'Enige geldige herhalende patroon met 3 verskillende vorms is korrek.\n\nKontrolelys:\n• Gebruik presies 3 verskillende vorms\n• Dieselfde volgorde herhaal presies\n• Die eerste 9 terme word neergeskryf (3 volledige herhalings van die eenheid)\n• Die reël word duidelik gestel\n\nVoorbeeld: sirkel, vierkant, driehoek, sirkel, vierkant, driehoek, sirkel, vierkant, driehoek\nReël: herhaal sirkel, vierkant, driehoek oor en oor.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, sirkel, vierkant, driehoek, …\n\na) Wat is die eenheidslengte?\nb) Wat is die 40ste vorm?\nc) Word ʼn driehoek by posisie 40 gebruik? Verduidelik.', answer: 'a) 3    b) sirkel    c) Nee', parts: [ { label: 'a) Wat is die eenheidslengte?', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'Die herhalende groep is sirkel, vierkant, driehoek — 3 vorms per eenheid.' }, { label: 'b) Wat is die 40ste vorm?', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'Circle', 'circle'], explanation: '40 ÷ 3 = 13 res 1. Res 1 → die 1ste vorm, wat sirkel is.' }, { label: 'c) Word ʼn driehoek by posisie 40 gebruik? Verduidelik.', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Die 40ste vorm is sirkel, nie driehoek nie, omdat die res 1 is (nie 0 nie), dus val posisie 40 op die 1ste vorm in die eenheid.' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Kyk na hierdie groeiende patroon: 1 vierkant, 3 vierkante, 6 vierkante, 10 vierkante, …\n\nIs die reël "tel elke keer dieselfde getal by"? Verduidelik jou antwoord.', answer: 'Nee — die hoeveelheid wat bygetel word, is nie elke keer dieselfde nie. Van 1 na 3 tel jy 2 by, van 3 na 6 tel jy 3 by, en van 6 na 10 tel jy 4 by. Die hoeveelheid wat bygetel word, neem self elke keer met 1 toe, dus groei hierdie patroon vinniger as ʼn eenvoudige "tel dieselfde getal by"-patroon.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Patroon van gekleurde teëls herhaal elke 6 teëls: rooi, rooi, blou, blou, groen, groen.\n\nWatter kleur is die 29ste teël?', answer: 'Groen', checkMode: 'auto', correctAnswer: 'Groen', correctAnswers: ['Groen', 'groen', 'Green', 'green'], explanation: 'Eenheidslengte = 6.\n29 ÷ 6 = 4 res 5.\nRes 5 → die 5de item in die eenheid (rooi, rooi, blou, blou, groen, groen), wat groen is.' },
        { difficulty: 'Easy', question: 'ʼn Tuinpaadjie gebruik plaveistene in ʼn groeiende patroon: 2 stene in ry 1, 4 stene in ry 2, 6 stene in ry 3.\n\nHoeveel stene is in ry 5?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 stene'], explanation: 'Die reël is tel elke keer 2 stene by.\nRy 3 = 6, Ry 4 = 8, Ry 5 = 10 stene.' },
        { difficulty: 'Medium', question: 'Kyk na hierdie patroon: sirkel, vierkant, sirkel, vierkant, sirkel, vierkant, …\n\nIs dit ʼn voorbeeld van tessellasie, ʼn herhalende patroon, of altwee? Verduidelik jou antwoord.', answer: 'Dit is ʼn herhalende patroon omdat dieselfde twee vorms (sirkel, vierkant) in dieselfde volgorde oor en oor terugkom. Dit is nie noodwendig ʼn voorbeeld van tessellasie nie, want tessellasie gaan oor vorms wat inmekaar pas met geen gapings en geen oorvleueling nie wanneer ʼn oppervlak geteël word — hierdie patroon is net ʼn volgorde, en of die vorms werklik tesseleer, hang af van of sirkels en vierkante werklik rand-aan-rand inmekaar pas (sirkels alleen sou nie tesseleer nie).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het veelstap- en gekombineerde geometriese patroonprobleme bemeester.' },
        { minScore: 19, message: 'Goeie werk! Jy kan met selfvertroue idees oor patrone kombineer — gaan gemiste vrae na.' },
        { minScore: 13, message: 'Goeie poging! Gaan die veelstap-uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
