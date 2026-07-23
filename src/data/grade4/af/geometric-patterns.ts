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
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — Herhalende patroon basiese beginsels (posisies 0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Ry vloerteëls word gelê in ʼn herhalende volgorde: sirkel, vierkant, sirkel, vierkant, sirkel, vierkant, …\n\nWat is die 4de teël?', answer: 'Vierkant', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'Square', 'square'], explanation: 'Die herhalende eenheid is: sirkel, vierkant — 2 vorms per eenheid.\n4 ÷ 2 = 2 res 0. ʼn Res van 0 beteken dit is die laaste vorm in die eenheid, wat vierkant is.' },
        { difficulty: 'Easy', question: 'Palesa ryg ʼn halssnoer. Sy ryg die krale in die volgorde rooi, blou, rooi, blou, … en beplan om by die 9de kraal op te hou.\n\nWatter kleur sal daardie laaste kraal wees?', answer: 'Rooi', checkMode: 'auto', correctAnswer: 'Rooi', correctAnswers: ['Rooi', 'rooi', 'Red', 'red'], explanation: 'Eenheidslengte = 2 (rooi, blou).\n9 ÷ 2 = 4 res 1.\nRes 1 → die 1ste kleur in die eenheid, wat rooi is.' },
        { difficulty: 'Medium', question: 'Vyf vlae hang bo ʼn verhoog in ʼn vaste volgorde wat dan herhaal: ster, maan, son, wolk, vlag, ster, maan, son, wolk, vlag, …\n\nSipho tel verder en hou op by die 23ste vlag. Watter vlag is dit?', answer: 'Son', checkMode: 'auto', correctAnswer: 'Son', correctAnswers: ['Son', 'son'], explanation: 'Eenheidslengte = 5 (ster, maan, son, wolk, vlag).\n23 ÷ 5 = 4 res 3.\nRes 3 → die 3de item in die eenheid, wat son is.' },
        { difficulty: 'Medium', question: 'ʼn Armbandpatroon herhaal elke 3 krale: rooi, geel, blou, rooi, geel, blou, …\n\nNomvula sê die 16de kraal moet geel wees, "omdat 16 naby die middel van die eenheid is." Is sy korrek? Gee die werklike kleur en verduidelik haar fout.', answer: 'Nee, Nomvula is nie korrek nie — die 16de kraal is rooi, nie geel nie. Eenheidslengte = 3 (rooi, geel, blou). 16 ÷ 3 = 5 res 1, en ʼn res van 1 beteken die 1ste kleur in die eenheid, wat rooi is. Haar redenasie oor "die middel van die eenheid" is nie ʼn geldige metode nie — net die res na deling deur die eenheidslengte wys die posisie.', checkMode: 'self' },

        // Blok B — Groeiende/krimpende patrone (posisies 4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'ʼn Groeiende patroon gebruik 2 kolletjies in stap 1, 4 kolletjies in stap 2, 6 kolletjies in stap 3, 8 kolletjies in stap 4, …\n\nHoeveel kolletjies is in stap 6?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 kolletjies'], explanation: 'Die reël is tel elke keer 2 kolletjies by.\nStap 4 = 8, Stap 5 = 10, Stap 6 = 12 kolletjies.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Krimpende patroon gebruik 24 fiches in stap 1, 20 fiches in stap 2, 16 fiches in stap 3, …\n\nHoeveel fiches is in stap 5?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 fiches'], explanation: 'Die reël is trek elke keer 4 fiches af.\nStap 3 = 16, Stap 4 = 12, Stap 5 = 8 fiches.' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 1 vorm in stap 1, 4 vorms in stap 2, 7 vorms in stap 3, 10 vorms in stap 4, …\n\nWatter stap het 25 vorms?', answer: 'Stap 9', checkMode: 'auto', correctAnswer: 'Stap 9', correctAnswers: ['Stap 9', 'stap 9', '9', 'negende', '9de', '9de stap'], explanation: 'Die reël is tel elke keer 3 vorms by.\nStap 4 = 10, Stap 5 = 13, Stap 6 = 16, Stap 7 = 19, Stap 8 = 22, Stap 9 = 25 vorms. ✓' },
        { difficulty: 'Medium', question: 'ʼn Verdubbelende patroon gebruik 2 kolletjies in stap 1, 4 kolletjies in stap 2, 8 kolletjies in stap 3, 16 kolletjies in stap 4, …\n\nHoeveel kolletjies is in stap 6?', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 kolletjies'], explanation: 'Die reël is verdubbel die aantal kolletjies elke keer.\nStap 4 = 16, Stap 5 = 32, Stap 6 = 32 × 2 = 64 kolletjies.' },
        { difficulty: 'Medium', question: 'Kyk na hierdie groeiende patroon: 1 vierkant, 3 vierkante, 6 vierkante, 10 vierkante, …\n\nKeenan sê die reël is "tel elke keer 3 vierkante by." Is Keenan korrek? Verduidelik jou antwoord.', answer: 'Nee, Keenan is nie korrek nie. Die hoeveelheid wat bygetel word, is nie altyd 3 nie: van 1 na 3 tel jy 2 by, van 3 na 6 tel jy 3 by, en van 6 na 10 tel jy 4 by. Die getal wat bygetel word, neem self elke keer met 1 toe, dus is die reël nie ʼn konstante optelling nie.', checkMode: 'self' },

        // Blok C — Vorm- en tessellasieredenering (posisies 9-12, Medium)
        { difficulty: 'Medium', question: 'Kyk na die diagram. Tesseleer die vierkante? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Vierkante het reguit rande wat inmekaar pas met geen gapings en geen oorvleueling nie, soos in die diagram gewys. Ja, vierkante tesseleer.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Kyk na die diagram. Tesseleer die sirkels? Verduidelik waarom, deur te gebruik wat jy in die diagram sien.', answer: 'Nee, sirkels tesseleer nie. Sirkels het geboë rande, dus maak nie saak hoe hulle gerangskik word nie, klein geboë gapings word altyd tussen hulle gelaat — jy kan dit in die diagram sien, anders as die vierkante wat heeltemal sonder gapings inmekaar pas.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Die diagram wys reëlmatige seshoeke wat by ʼn punt ontmoet. Elke hoek van ʼn reëlmatige seshoek is 120°. Hoeveel seshoeke ontmoet by elke punt in ʼn tessellerende patroon?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 seshoeke'], explanation: 'Vir tessellasie moet die hoeke by ʼn punt tot 360° optel.\n360° ÷ 120° = 3 seshoeke, soos gewys waar hulle by die punt in die diagram ontmoet.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,100 144.6,120 144.6,160 110,180 75.4,160 75.4,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 75.4,120 40.7,100 40.7,60 75.4,40 110,60" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 110,60 144.6,40 179.3,60 179.3,100 144.6,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M 124 117 A 20 20 0 0 1 96 117" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 96 117 A 20 20 0 0 1 100 82" fill="none" stroke="#ea580c" stroke-width="1.5"/><path d="M 100 82 A 20 20 0 0 1 124 117" fill="none" stroke="#ea580c" stroke-width="1.5"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Elke hoek van ʼn vierkant is 90°. Deur dieselfde 360°-by-ʼn-punt-reël in die diagram te gebruik, hoeveel vierkante ontmoet by elke punt in ʼn tessellerende patroon?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 vierkante'], explanation: 'Vir tessellasie moet die hoeke by ʼn punt tot 360° optel.\n360° ÷ 90° = 4 vierkante, soos gewys waar hulle by die punt in die diagram ontmoet.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="60" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="110" y="60" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="110" y="100" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="70" y="100" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="103" y="93" width="14" height="14" fill="none" stroke="#ea580c" stroke-width="1.5"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },

        // Blok D — Alledaagse rooster- en ry/kolomvraagstukke (posisies 13-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Badkamervloer word geteël met vierkantige teëls in 6 rye van 7 teëls elk. Hoeveel teëls word altesaam gebruik?', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 teëls'], explanation: '6 rye × 7 teëls = 42 teëls.' },
        { difficulty: 'Medium', question: 'ʼn Baksteenpaadjie word gelê met bakstene in 8 rye van 9 bakstene elk. Hoeveel bakstene word altesaam gebruik?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 bakstene'], explanation: '8 rye × 9 bakstene = 72 bakstene.' },
        { difficulty: 'Medium', question: 'ʼn Kraalarmband herhaal ʼn eenheid van 3 kleure: rooi, blou, groen. As daar altesaam 24 krale is en die patroon eweredig verdeel, hoeveel rooi krale is daar?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 krale', '8 rooi krale'], explanation: 'Eenheidslengte = 3 (rooi, blou, groen). 24 ÷ 3 = 8 volledige eenhede, dus is daar 8 rooi krale.' },

        // Blok E — Veelvoudige dele & vergelyking (posisies 16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, sirkel, vierkant, driehoek, …\n\na) Wat is die eenheidslengte?\nb) Wat is die 26ste vorm?\nc) Is die 26ste vorm dieselfde as die 3de vorm? Verduidelik.', answer: 'a) 3    b) vierkant    c) Nee', parts: [ { label: 'a) Wat is die eenheidslengte?', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'Die herhalende groep is sirkel, vierkant, driehoek — 3 vorms per eenheid.' }, { label: 'b) Wat is die 26ste vorm?', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'Square', 'square'], explanation: '26 ÷ 3 = 8 res 2. Res 2 → die 2de vorm, wat vierkant is.' }, { label: 'c) Is die 26ste vorm dieselfde as die 3de vorm? Verduidelik.', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Die 3de vorm in die eenheid is driehoek, maar die 26ste vorm blyk vierkant te wees (res 2, nie res 0 nie), dus is hulle nie dieselfde nie.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Patroon A herhaal elke 3 vorms: sirkel, vierkant, driehoek. Patroon B herhaal elke 4 vorms: sirkel, sirkel, vierkant, driehoek. Watter patroon het ʼn driehoek by posisie 12 — A, B, of altwee?', answer: 'Altwee', checkMode: 'auto', correctAnswer: 'Altwee', correctAnswers: ['Altwee', 'altwee', 'Both', 'both'], explanation: 'Patroon A: 12 ÷ 3 = 4 res 0 → laaste vorm in eenheid → driehoek.\nPatroon B: 12 ÷ 4 = 3 res 0 → laaste vorm in eenheid → driehoek.\nAltwee patrone het ʼn driehoek by posisie 12.' },

        // Blok F — Regverdig, kritiseer, en skep (posisies 18-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: sirkel, vierkant, driehoek, ster, sirkel, vierkant, driehoek, ster, …\n\nJada sê die 22ste vorm is ʼn driehoek. Is Jada korrek? Wys jou werk en verduidelik enige fout.', answer: 'Nee, Jada is nie korrek nie. Eenheidslengte = 4 (sirkel, vierkant, driehoek, ster). 22 ÷ 4 = 5 res 2. ʼn Res van 2 beteken die 2de vorm in die eenheid, wat vierkant is, nie driehoek nie. Jada het waarskynlik die res of die posisie in die eenheid verkeerd getel.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Ontwerp jou eie groeiende patroon wat by ʼn getal van jou keuse begin en elke keer dieselfde hoeveelheid bytel. Skryf die reël en lys die eerste 5 terme.', answer: 'Enige geldige groeiende patroon met ʼn konstante optellingsreël is korrek.\n\nKontrolelys:\n• Stel ʼn duidelike beginwaarde\n• Tel elke stap dieselfde vaste hoeveelheid by\n• Lys presies 5 terme wat die reël korrek volg\n• Die reël word duidelik gestel\n\nVoorbeeld: begin by 2, tel elke keer 3 by: 2, 5, 8, 11, 14.\nReël: begin by 2 en tel elke keer 3 vorms by.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het geometriese patrone op elke vlak bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met die meeste patroonvaardighede — gaan gemiste vrae na.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug oor die studiegids en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A — Herhalende patroon basiese beginsels (posisies 0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Grens word teen ʼn muur geverf en herhaal: vierkant, driehoek, vierkant, driehoek, vierkant, driehoek, …\n\nWat is die 6de vorm in die grens?', answer: 'Driehoek', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'Triangle', 'triangle'], explanation: 'Die herhalende eenheid is: vierkant, driehoek — 2 vorms per eenheid.\n6 ÷ 2 = 3 res 0. ʼn Res van 0 beteken dit is die laaste vorm in die eenheid, wat driehoek is.' },
        { difficulty: 'Easy', question: 'Vlaggies word in die volgorde geel, pers, geel, pers, … langs ʼn heining opgehang.\n\nWatter kleur is die 11de vlaggie vanaf die begin?', answer: 'Geel', checkMode: 'auto', correctAnswer: 'Geel', correctAnswers: ['Geel', 'geel', 'Yellow', 'yellow'], explanation: 'Eenheidslengte = 2 (geel, pers).\n11 ÷ 2 = 5 res 1.\nRes 1 → die 1ste kleur in die eenheid, wat geel is.' },
        { difficulty: 'Medium', question: 'Vyf vorms word op ʼn atletiekbaan geverf in ʼn vaste volgorde wat aanhou herhaal: sirkel, vierkant, driehoek, ster, maan, sirkel, vierkant, driehoek, ster, maan, …\n\nʼn Hardloper hou presies op die 27ste vorm stil. Op watter vorm staan hy?', answer: 'Vierkant', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'Square', 'square'], explanation: 'Eenheidslengte = 5 (sirkel, vierkant, driehoek, ster, maan).\n27 ÷ 5 = 5 res 2.\nRes 2 → die 2de item in die eenheid, wat vierkant is.' },
        { difficulty: 'Medium', question: 'ʼn Kraaleenheid van 4 kleure herhaal: blou, groen, geel, rooi, blou, groen, geel, rooi, …\n\nTshepo beweer dat elke 4de kraal in hierdie patroon rooi is. Is hy korrek, en watter kleur is die 19de kraal?', answer: 'Ja, Tshepo is korrek dat elke 4de kraal rooi is — maar die 19de kraal self is geel, nie die 4de kraal nie. Eenheidslengte = 4 (blou, groen, geel, rooi). 19 ÷ 4 = 4 res 3, en ʼn res van 3 beteken die 3de kleur in die eenheid, wat geel is.', checkMode: 'self' },

        // Blok B — Groeiende/krimpende patrone (posisies 4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'ʼn Groeiende patroon gebruik 2 vorms in stap 1, 5 vorms in stap 2, 8 vorms in stap 3, 11 vorms in stap 4, …\n\nHoeveel vorms is in stap 6?', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17 vorms'], explanation: 'Die reël is tel elke keer 3 vorms by.\nStap 4 = 11, Stap 5 = 14, Stap 6 = 17 vorms.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Krimpende patroon gebruik 30 blokke in stap 1, 25 blokke in stap 2, 20 blokke in stap 3, …\n\nHoeveel blokke is in stap 5?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 blokke'], explanation: 'Die reël is trek elke keer 5 blokke af.\nStap 3 = 20, Stap 4 = 15, Stap 5 = 10 blokke.' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 2 vorms in stap 1, 6 vorms in stap 2, 10 vorms in stap 3, 14 vorms in stap 4, …\n\nWatter stap het 26 vorms?', answer: 'Stap 7', checkMode: 'auto', correctAnswer: 'Stap 7', correctAnswers: ['Stap 7', 'stap 7', '7', 'sewende', '7de', '7de stap'], explanation: 'Die reël is tel elke keer 4 vorms by.\nStap 4 = 14, Stap 5 = 18, Stap 6 = 22, Stap 7 = 26 vorms. ✓' },
        { difficulty: 'Medium', question: 'ʼn Verdubbelende patroon gebruik 3 kolletjies in stap 1, 6 kolletjies in stap 2, 12 kolletjies in stap 3, 24 kolletjies in stap 4, …\n\nHoeveel kolletjies is in stap 5?', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48 kolletjies'], explanation: 'Die reël is verdubbel die aantal kolletjies elke keer.\nStap 4 = 24, Stap 5 = 24 × 2 = 48 kolletjies.' },
        { difficulty: 'Medium', question: 'Beskryf, in jou eie woorde, die reël vir hierdie patroon: 2 driehoeke, 5 driehoeke, 8 driehoeke, 11 driehoeke, …', answer: 'Die reël is: begin met 2 driehoeke en tel elke keer 3 driehoeke by om die volgende term te kry.', checkMode: 'self' },

        // Blok C — Vorm- en tessellasieredenering (posisies 9-12, Medium)
        { difficulty: 'Medium', question: 'Kyk na die diagram. Tesseleer die driehoeke? Skryf Ja of Nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Gelyksydige driehoeke het reguit rande wat inmekaar pas met geen gapings en geen oorvleueling nie wanneer hulle afwisselend punt-op en punt-af gerangskik word, soos in die diagram gewys. Ja, driehoeke tesseleer.', diagramSvg: '<svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg"><polygon points="20,80 45,30 70,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="45,30 95,30 70,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="70,80 95,30 120,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="95,30 145,30 120,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="120,80 145,30 170,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Kyk na die diagram. Tesseleer die sirkels? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Sirkels het geboë rande, dus word gapings altyd tussen hulle gelaat wanneer hulle langs mekaar geplaas word, soos in die diagram gewys. Nee, sirkels tesseleer nie.', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Drie reëlmatige seshoeke ontmoet by ʼn punt in ʼn tessellerende patroon, met geen gapings of oorvleueling nie. Wat is die grootte van elke seshoek se hoek by daardie punt?', answer: '120°', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120', '120 grade'], explanation: 'Vir tessellasie moet die hoeke by ʼn punt tot 360° optel.\n360° ÷ 3 seshoeke = 120° vir elke seshoek se hoek.' },
        { difficulty: 'Medium', question: 'Elke hoek van ʼn gelyksydige driehoek is 60°. Deur dieselfde 360°-by-ʼn-punt-reël in die diagram te gebruik, hoeveel driehoeke ontmoet by elke punt in ʼn tessellerende patroon?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 driehoeke'], explanation: 'Vir tessellasie moet die hoeke by ʼn punt tot 360° optel.\n360° ÷ 60° = 6 driehoeke, soos gewys waar hulle by die punt in die diagram ontmoet.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,100 150,100 130,65.4" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 130,65.4 90,65.4" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 90,65.4 70,100" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 70,100 90,134.6" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 90,134.6 130,134.6" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 130,134.6 150,100" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },

        // Blok D — Alledaagse rooster- en ry/kolomvraagstukke (posisies 13-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Heuningkoekafdeling het 7 rye van 8 seshoekige selle elk. Hoeveel selle is daar altesaam?', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56 selle'], explanation: '7 rye × 8 selle = 56 selle.' },
        { difficulty: 'Medium', question: 'ʼn Venster het reghoekige panele gerangskik in 9 rye van 6 panele elk. Hoeveel panele is daar altesaam?', answer: '54', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 panele'], explanation: '9 rye × 6 panele = 54 panele.' },
        { difficulty: 'Medium', question: 'ʼn Ndebele-muurskildery gebruik ʼn herhalende eenheid van 3 kleure rondom ʼn grens. As die grens 30 vorms het en die patroon eweredig verdeel, hoeveel vorms is daar van elke kleur?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 vorms'], explanation: 'Eenheidslengte = 3 kleure. 30 ÷ 3 = 10 vorms van elke kleur.' },

        // Blok E — Veelvoudige dele & vergelyking (posisies 16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon herhaal: geel, groen, geel, groen, geel, groen, …\n\na) Wat is die eenheidslengte?\nb) Watter kleur is die 15de vorm?\nc) Is die 15de vorm dieselfde kleur as die 2de vorm? Verduidelik.', answer: 'a) 2    b) Geel    c) Nee', parts: [ { label: 'a) Wat is die eenheidslengte?', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'Die herhalende groep is geel, groen — 2 kleure per eenheid.' }, { label: 'b) Watter kleur is die 15de vorm?', correctAnswer: 'Geel', correctAnswers: ['Geel', 'geel', 'Yellow', 'yellow'], explanation: '15 ÷ 2 = 7 res 1. Res 1 → die 1ste kleur, wat geel is.' }, { label: 'c) Is die 15de vorm dieselfde kleur as die 2de vorm? Verduidelik.', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Die 2de vorm in die eenheid is groen, maar die 15de vorm blyk geel te wees (res 1, nie res 0 nie), dus is hulle nie dieselfde kleur nie.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Patroon A begin by 2 en tel elke stap 3 vorms by. Patroon B begin by 1 en tel elke stap 4 vorms by. Watter patroon bereik presies 20 vorms — A, B, of altwee? Wys jou werk.', answer: 'Net A. Patroon A: 2, 5, 8, 11, 14, 17, 20, … — bereik 20 by stap 7. Patroon B: 1, 5, 9, 13, 17, 21, 25, … — spring van 17 reguit na 21, dus land dit nooit presies op 20 nie.', checkMode: 'self' },

        // Blok F — Regverdig, kritiseer, en skep (posisies 18-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Patroon van krale herhaal: rooi, rooi, blou, geel, rooi, rooi, blou, geel, …\n\nThabiso sê die 30ste kraal is blou. Is Thabiso korrek? Wys jou werk en verduidelik enige fout.', answer: 'Nee, Thabiso is nie korrek nie. Eenheidslengte = 4 (rooi, rooi, blou, geel). 30 ÷ 4 = 7 res 2. ʼn Res van 2 beteken die 2de item in die eenheid, wat rooi is, nie blou nie. Thabiso het waarskynlik die res getel asof dit na die 3de item wys, in plaas van die 2de.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik die verskil tussen ʼn herhalende patroon en ʼn groeiende patroon, en gee een voorbeeld uit die alledaagse lewe van elkeen.', answer: 'ʼn Herhalende patroon gebruik dieselfde volgorde van vorms, kleure of voorwerpe oor en oor sonder om in getal te verander — byvoorbeeld, krale op ʼn armband wat in dieselfde kleurvolgorde weer en weer gerangskik is. ʼn Groeiende patroon neem toe in getal of grootte by elke stap — byvoorbeeld, ʼn stapel blokke waar elke laag een blok meer het as die laag daarbo.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het geometriese patrone op elke vlak bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met die meeste patroonvaardighede — gaan gemiste vrae na.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug oor die studiegids en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — Herhalende patroon basiese beginsels (posisies 0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Stapel blokke word van onder na bo in ʼn herhalende volgorde gerangskik: driehoek, vierkant, driehoek, vierkant, driehoek, vierkant, …\n\nWatter vorm is die 5de blok?', answer: 'Driehoek', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'Triangle', 'triangle'], explanation: 'Die herhalende eenheid is: driehoek, vierkant — 2 vorms per eenheid.\n5 ÷ 2 = 2 res 1. Res 1 → die 1ste vorm in die eenheid, wat driehoek is.' },
        { difficulty: 'Easy', question: 'ʼn Ry vlae by ʼn sportdag herhaal: groen, wit, groen, wit, groen, wit, …\n\nʼn Beampte word gevra om na die 12de vlag in die ry te kyk. Watter kleur sal sy sien?', answer: 'Wit', checkMode: 'auto', correctAnswer: 'Wit', correctAnswers: ['Wit', 'wit', 'White', 'white'], explanation: 'Eenheidslengte = 2 (groen, wit).\n12 ÷ 2 = 6 res 0.\nRes 0 → die laaste kleur in die eenheid, wat wit is.' },
        { difficulty: 'Medium', question: 'ʼn Geweefde mat gebruik 5 draadkleure in ʼn vaste herhalende volgorde: rooi, blou, geel, groen, wit, rooi, blou, geel, groen, wit, …\n\nWatter kleur is die 29ste draad, getel vanaf die rand van die mat?', answer: 'Groen', checkMode: 'auto', correctAnswer: 'Groen', correctAnswers: ['Groen', 'groen', 'Green', 'green'], explanation: 'Eenheidslengte = 5 (rooi, blou, geel, groen, wit).\n29 ÷ 5 = 5 res 4.\nRes 4 → die 4de kleur in die eenheid, wat groen is.' },
        { difficulty: 'Medium', question: 'Drie simbole herhaal in ʼn vaste volgorde op ʼn serp: ster, maan, son, ster, maan, son, …\n\nʼn Klasmaat sê: "aangesien 19 onewe is, moet die 19de simbool die middelste een van die eenheid wees — maan." Verduidelik of hierdie redenasie geldig is, en gee die werklike 19de simbool.', answer: 'Die redenasie is nie geldig nie — of ʼn posisienommer ewe of onewe is, sê niks oor watter item in die eenheid dit tref nie; slegs deling deur die eenheidslengte en die res wys dit. Eenheidslengte = 3 (ster, maan, son). 19 ÷ 3 = 6 res 1, en ʼn res van 1 beteken die 1ste simbool in die eenheid, dus is die 19de simbool eintlik ster, nie maan nie.', checkMode: 'self' },

        // Blok B — Groeiende/krimpende patrone (posisies 4-8, Maklik-Medium)
        { difficulty: 'Easy', question: 'ʼn Groeiende patroon gebruik 3 vorms in stap 1, 6 vorms in stap 2, 9 vorms in stap 3, 12 vorms in stap 4, …\n\nHoeveel vorms is in stap 6?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18 vorms'], explanation: 'Die reël is tel elke keer 3 vorms by.\nStap 4 = 12, Stap 5 = 15, Stap 6 = 18 vorms.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Krimpende patroon gebruik 40 fiches in stap 1, 34 fiches in stap 2, 28 fiches in stap 3, …\n\nHoeveel fiches is in stap 5?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 fiches'], explanation: 'Die reël is trek elke keer 6 fiches af.\nStap 3 = 28, Stap 4 = 22, Stap 5 = 16 fiches.' },
        { difficulty: 'Medium', question: 'ʼn Groeiende patroon gebruik 3 vorms in stap 1, 8 vorms in stap 2, 13 vorms in stap 3, 18 vorms in stap 4, …\n\nWatter stap het 38 vorms?', answer: 'Stap 8', checkMode: 'auto', correctAnswer: 'Stap 8', correctAnswers: ['Stap 8', 'stap 8', '8', 'agtste', '8ste', '8ste stap'], explanation: 'Die reël is tel elke keer 5 vorms by.\nStap 4 = 18, Stap 5 = 23, Stap 6 = 28, Stap 7 = 33, Stap 8 = 38 vorms. ✓' },
        { difficulty: 'Medium', question: 'ʼn Verdubbelende patroon gebruik 5 kolletjies in stap 1, 10 kolletjies in stap 2, 20 kolletjies in stap 3, 40 kolletjies in stap 4, …\n\nHoeveel kolletjies is in stap 5?', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', '80 kolletjies'], explanation: 'Die reël is verdubbel die aantal kolletjies elke keer.\nStap 4 = 40, Stap 5 = 40 × 2 = 80 kolletjies.' },
        { difficulty: 'Medium', question: 'Kyk na hierdie groeiende patroon: 1 kolletjie, 3 kolletjies, 6 kolletjies, 10 kolletjies, …\n\nZinhle sê die reël is "tel elke keer 2 kolletjies by." Is Zinhle korrek? Verduidelik jou antwoord.', answer: 'Nee, Zinhle is nie korrek nie. Die hoeveelheid wat bygetel word, verander elke keer: van 1 na 3 tel jy 2 by, van 3 na 6 tel jy 3 by, en van 6 na 10 tel jy 4 by. Aangesien die hoeveelheid wat bygetel word, aanhou toeneem eerder as om by 2 te bly, is dit nie ʼn konstante "tel 2 by"-reël nie.', checkMode: 'self' },

        // Blok C — Vorm- en tessellasieredenering (posisies 9-12, Medium)
        { difficulty: 'Medium', question: 'Kyk na die diagram. Tesseleer reëlmatige seshoeke? Skryf Ja of Nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Die diagram wys drie reëlmatige seshoeke wat perfek by ʼn punt ontmoet met geen gapings of oorvleueling nie. Reëlmatige seshoeke het reguit rande wat rand-aan-rand inmekaar pas. Ja, seshoeke tesseleer.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,100 144.6,120 144.6,160 110,180 75.4,160 75.4,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 75.4,120 40.7,100 40.7,60 75.4,40 110,60" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,100 110,60 144.6,40 179.3,60 179.3,100 144.6,120" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="110" cy="100" r="3" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Kyk na die diagram. Verduidelik waarom die sirkels gapings laat terwyl die vierkante dit nie doen nie.', answer: 'Die vierkante het reguit rande, dus kan elke rand plat teen die volgende vierkant sit met geen spasie oor nie. Die sirkels het geboë rande, dus waar twee sirkels ook al raak, buig die kurwe weg van sy buurman en laat ʼn klein gaping — maak nie saak hoe die sirkels gerangskik word nie, geboë rande kan nie so perfek soos reguit rande inmekaar pas nie.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="20" width="50" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="45" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="105" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="165" cy="135" r="25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'Vier kongruente vorms ontmoet by ʼn punt in ʼn tessellerende patroon, met geen gapings of oorvleueling nie. Wat is die grootte van elke vorm se hoek by daardie punt?', answer: '90°', checkMode: 'auto', correctAnswer: '90°', correctAnswers: ['90°', '90', '90 grade'], explanation: 'Vir tessellasie moet die hoeke by ʼn punt tot 360° optel.\n360° ÷ 4 vorms = 90° vir elke vorm se hoek.' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige vyfhoek het ʼn binnehoek van 108°. Deur dieselfde 360°-by-ʼn-punt-reël in die diagram te gebruik, verduidelik waarom reëlmatige vyfhoeke nie op hulle eie kan tesseleer nie.', answer: '360° ÷ 108° = 3,33…, wat nie ʼn heelgetal is nie. Vyfhoeke kan nie by ʼn punt ontmoet sonder om óf ʼn gaping te laat nie (met 3 vyfhoeke, wat net 324° vul) óf te oorvleuel nie (met 4 vyfhoeke, wat 432° sou benodig). Aangesien geen heelgetal van vyfhoeke presies 360° vul sonder gapings of oorvleueling nie, tesseleer reëlmatige vyfhoeke nie op hulle eie nie.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,105 93,157.3 65.5,72.7" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,105 65.5,72.7 154.5,72.7" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,105 154.5,72.7 127,157.3" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="105" x2="93" y2="157.3" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/><line x1="110" y1="105" x2="127" y2="157.3" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/><circle cx="110" cy="105" r="3" fill="#dc2626"/><text x="110" y="148" font-size="14" font-weight="700" fill="#dc2626" text-anchor="middle">?</text></svg>' },

        // Blok D — Alledaagse rooster- en ry/kolomvraagstukke (posisies 13-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Patio word geplavei met vierkantige plaveistene in 8 rye van 9 stene elk. Hoeveel plaveistene word altesaam gebruik?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 plaveistene', '72 stene'], explanation: '8 rye × 9 stene = 72 plaveistene.' },
        { difficulty: 'Medium', question: 'ʼn Kombuisvloer word geteël met vierkantige teëls in 10 rye van 6 teëls elk. Hoeveel teëls word altesaam gebruik?', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 teëls'], explanation: '10 rye × 6 teëls = 60 teëls.' },
        { difficulty: 'Medium', question: 'ʼn Kraalhalssnoer herhaal ʼn eenheid van 4 items: sirkel, sirkel, vierkant, driehoek. As daar altesaam 28 krale is en die patroon eweredig verdeel, hoeveel volledige eenhede is daar?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 eenhede'], explanation: 'Eenheidslengte = 4. 28 ÷ 4 = 7 volledige eenhede.' },

        // Blok E — Veelvoudige dele & vergelyking (posisies 16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon herhaal: rooi, rooi, blou, rooi, rooi, blou, …\n\na) Wat is die eenheidslengte?\nb) Watter kleur is die 20ste vorm?\nc) Is die 20ste vorm dieselfde kleur as die 3de vorm? Verduidelik.', answer: 'a) 3    b) Rooi    c) Nee', parts: [ { label: 'a) Wat is die eenheidslengte?', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'Die herhalende groep is rooi, rooi, blou — 3 kleure per eenheid.' }, { label: 'b) Watter kleur is die 20ste vorm?', correctAnswer: 'Rooi', correctAnswers: ['Rooi', 'rooi', 'Red', 'red'], explanation: '20 ÷ 3 = 6 res 2. Res 2 → die 2de kleur in die eenheid, wat rooi is.' }, { label: 'c) Is die 20ste vorm dieselfde kleur as die 3de vorm? Verduidelik.', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Die 3de vorm in die eenheid is blou, maar die 20ste vorm blyk rooi te wees (res 2, nie res 0 nie), dus is hulle nie dieselfde kleur nie.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Patroon A herhaal elke 4 vorms en Patroon B herhaal elke 6 vorms. Altwee patrone begin hul eenheid by posisie 1. By watter posisienommer sal altwee patrone weer saam ʼn nuwe eenheid begin (behalwe by posisie 1)?', answer: 'Posisie 13. Patroon A begin ʼn nuwe eenheid by posisies 1, 5, 9, 13, 17, … (elke 4). Patroon B begin ʼn nuwe eenheid by posisies 1, 7, 13, 19, … (elke 6). Die eerste posisie wat hulle na 1 deel, is 13.', checkMode: 'self' },

        // Blok F — Regverdig, kritiseer, en skep (posisies 18-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Patroon herhaal: sirkel, sirkel, vierkant, driehoek, sirkel, sirkel, vierkant, driehoek, …\n\nLindiwe sê die 21ste vorm is ʼn vierkant. Is Lindiwe korrek? Wys jou werk en verduidelik enige fout.', answer: 'Nee, Lindiwe is nie korrek nie. Eenheidslengte = 4 (sirkel, sirkel, vierkant, driehoek). 21 ÷ 4 = 5 res 1. ʼn Res van 1 beteken die 1ste vorm in die eenheid, wat sirkel is, nie vierkant nie. Lindiwe het waarskynlik die res getel asof dit na die 3de item wys, in plaas van die 1ste.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Ontwerp jou eie herhalende patroon met 4 verskillende vorms of kleure. Skryf die reël en die eerste 8 terme.', answer: 'Enige geldige herhalende patroon met 4 verskillende vorms of kleure is korrek.\n\nKontrolelys:\n• Gebruik presies 4 verskillende vorms of kleure\n• Dieselfde volgorde herhaal presies\n• Die eerste 8 terme word neergeskryf (2 volledige herhalings van die eenheid)\n• Die reël word duidelik gestel\n\nVoorbeeld: sirkel, vierkant, driehoek, ster, sirkel, vierkant, driehoek, ster\nReël: herhaal sirkel, vierkant, driehoek, ster oor en oor.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het geometriese patrone op elke vlak bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met die meeste patroonvaardighede — gaan gemiste vrae na.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug oor die studiegids en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
