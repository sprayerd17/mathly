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
    },
  ],

  topicPractice: [

    // ── AFDELING 1: WAT IS ʼN GEOMETRIESE PATROON? ───────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Is dit ʼn herhalende of ʼn groeiende patroon?\n\nsirkel, vierkant, sirkel, vierkant, sirkel, vierkant',
      answer: 'Herhalend',
      correctAnswer: 'Herhalend',
      correctAnswers: ['Herhalend', 'herhalend', 'herhaal', 'herhalende patroon', 'Repeating', 'repeating'],
      explanation:
        'Dieselfde volgorde — sirkel, vierkant — kom oor en oor terug sonder om te groei.\n' +
        'Wanneer dieselfde groep herhaal, word dit ʼn herhalende patroon genoem.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Beskryf die patroon en vind die volgende twee terme:\n\n' +
        '1 kolletjie, 3 kolletjies, 5 kolletjies, 7 kolletjies, …\n\n' +
        'a) Is dit herhalend of groeiend?\n' +
        'b) Wat is die reël?\n' +
        'c) Wat is die volgende twee terme?',
      answer: 'a) Groeiend    b) Tel elke keer 2 kolletjies by    c) 9 kolletjies, 11 kolletjies',
      parts: [
        {
          label: 'a) Is dit herhalend of groeiend?',
          correctAnswer: 'Groeiend',
          correctAnswers: ['Groeiend', 'groeiend', 'groeiende patroon', 'Growing', 'growing'],
          explanation:
            'Die aantal kolletjies neem elke keer toe: 1, 3, 5, 7 …\n' +
            'Omdat die hoeveelhede groter word, is dit ʼn groeiende patroon.',
        },
        {
          label: 'b) Wat is die reël?',
          correctAnswer: 'Tel elke keer 2 kolletjies by',
          correctAnswers: [
            'Tel elke keer 2 kolletjies by', 'tel elke keer 2 kolletjies by',
            'Tel 2 by', 'tel 2 by', '+2', 'plus 2', 'plus2',
            'tel elke keer 2 by', 'Tel elke keer 2 by',
          ],
          explanation:
            'Vind die verskil tussen opeenvolgende terme:\n' +
            '3 − 1 = 2,  5 − 3 = 2,  7 − 5 = 2\n' +
            'Reël: tel elke keer 2 kolletjies by.',
        },
        {
          label: 'c) Wat is die volgende twee terme?',
          correctAnswer: '9kolletjies11kolletjies',
          correctAnswers: [
            '9kolletjies11kolletjies', '9 kolletjies11 kolletjies', '9kolletjie11kolletjie',
            '9,11', '911', '9dots11dots',
          ],
          explanation:
            'Pas die reël (tel 2 by) twee keer toe vanaf die laaste bekende term:\n' +
            '7 + 2 = 9 kolletjies\n' +
            '9 + 2 = 11 kolletjies',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Patroon begin met 1 driehoek en voeg elke keer 3 driehoeke by.\n\n' +
        'a) Hoeveel driehoeke is in die 5de term?\n' +
        'b) Hoeveel driehoeke is in die 8ste term?\n' +
        'c) Watter term het 22 driehoeke?',
      answer: 'a) 13    b) 22    c) 8ste term',
      parts: [
        {
          label: 'a) Hoeveel driehoeke in die 5de term?',
          correctAnswer: '13',
          explanation:
            'Term 1 = 1 driehoek. Tel elke keer 3 by:\n' +
            'Term 2 = 1 + 3 = 4\n' +
            'Term 3 = 4 + 3 = 7\n' +
            'Term 4 = 7 + 3 = 10\n' +
            'Term 5 = 10 + 3 = 13',
        },
        {
          label: 'b) Hoeveel driehoeke in die 8ste term?',
          correctAnswer: '22',
          explanation:
            'Gaan voort vanaf Term 5 (13):\n' +
            'Term 6 = 13 + 3 = 16\n' +
            'Term 7 = 16 + 3 = 19\n' +
            'Term 8 = 19 + 3 = 22',
        },
        {
          label: 'c) Watter term het 22 driehoeke?',
          correctAnswer: '8ste term',
          correctAnswers: ['8ste term', '8', 'term 8', 'agtste', 'agtste term', '8th term', '8th'],
          explanation:
            'Uit deel b) het ons gevind Term 8 = 22 driehoeke.\n' +
            'Jy kan ook die formule gebruik: Term n = 1 + (n − 1) × 3\n' +
            '22 = 1 + (n − 1) × 3  →  21 = (n − 1) × 3  →  n − 1 = 7  →  n = 8',
        },
      ],
    },

    // ── AFDELING 2: GEOMETRIESE PATRONE UITBREI ──────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'ʼn Patroon wys: 2 vierkante, 4 vierkante, 6 vierkante, 8 vierkante.\n\nHoeveel vierkante is in die volgende term?',
      answer: '10',
      correctAnswer: '10',
      correctAnswers: ['10', '10 vierkante'],
      explanation:
        'Vind die reël: 4 − 2 = 2, 6 − 4 = 2, 8 − 6 = 2.\n' +
        'Reël: tel elke keer 2 vierkante by.\n' +
        'Volgende term = 8 + 2 = 10 vierkante.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Trappatroon het 1 vierkant in ry 1, 2 vierkante in ry 2, 3 vierkante in ry 3, ensovoorts.\n\n' +
        'a) Hoeveel vierkante is in ry 6?\n' +
        'b) Hoeveel vierkante is daar altesaam na 5 rye?',
      answer: 'a) 6    b) 15',
      parts: [
        {
          label: 'a) Hoeveel vierkante in ry 6?',
          correctAnswer: '6',
          correctAnswers: ['6', '6 vierkante'],
          explanation:
            'Die reël is: die rynommer is gelyk aan die aantal vierkante in daardie ry.\n' +
            'Ry 1 = 1,  Ry 2 = 2,  Ry 3 = 3 …\n' +
            'Ry 6 = 6 vierkante.',
        },
        {
          label: 'b) Totale vierkante na 5 rye?',
          correctAnswer: '15',
          correctAnswers: ['15', '15 vierkante'],
          explanation:
            'Tel al die rye van 1 tot 5 op:\n' +
            '1 + 2 + 3 + 4 + 5 = 15 vierkante.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Patroon van vierkante groei soos volg:\n' +
        'Term 1: 3 vierkante,  Term 2: 5 vierkante,  Term 3: 7 vierkante, …\n\n' +
        'a) Wat is die reël?\n' +
        'b) Hoeveel vierkante is in term 6?\n' +
        'c) Watter term het 19 vierkante?',
      answer: 'a) Tel elke keer 2 by    b) 13    c) Term 9',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Tel elke keer 2 by',
          correctAnswers: [
            'Tel elke keer 2 by', 'tel elke keer 2 by',
            'Tel 2 by', 'tel 2 by', '+2', 'plus 2', 'plus2',
          ],
          explanation:
            'Vind die verskil tussen opeenvolgende terme:\n' +
            '5 − 3 = 2,  7 − 5 = 2\n' +
            'Reël: tel elke keer 2 by.',
        },
        {
          label: 'b) Hoeveel vierkante in term 6?',
          correctAnswer: '13',
          correctAnswers: ['13', '13 vierkante'],
          explanation:
            'Gaan voort vanaf Term 3 (7 vierkante), tel elke keer 2 by:\n' +
            'Term 4 = 7 + 2 = 9\n' +
            'Term 5 = 9 + 2 = 11\n' +
            'Term 6 = 11 + 2 = 13 vierkante.',
        },
        {
          label: 'c) Watter term het 19 vierkante?',
          correctAnswer: 'Term 9',
          correctAnswers: ['Term 9', 'term 9', '9', 'negende', 'negende term', 'term9'],
          explanation:
            'Gaan voort met die patroon:\n' +
            'Term 7 = 13 + 2 = 15\n' +
            'Term 8 = 15 + 2 = 17\n' +
            'Term 9 = 17 + 2 = 19 ✓',
        },
      ],
    },

    // ── AFDELING 3: PATRONE WAT KLEUR OF VORM VERANDER ───────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'ʼn Patroon gaan: rooi, blou, rooi, blou, rooi, blou, …\n\nWatter kleur is die 9de vorm?',
      answer: 'Rooi',
      correctAnswer: 'Rooi',
      correctAnswers: ['Rooi', 'rooi', 'Red', 'red'],
      explanation:
        'Die herhalende eenheid is: rooi, blou — 2 kleure per eenheid.\n' +
        'Deel die posisie deur die eenheidslengte: 9 ÷ 2 = 4 res 1.\n' +
        'Res 1 → die 1ste kleur in die eenheid, wat rooi is.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Patroon gaan: sirkel, vierkant, driehoek, sirkel, vierkant, driehoek, …\n\n' +
        'a) Wat is die herhalende eenheid?\n' +
        'b) Wat is die 11de vorm?\n' +
        'c) Wat is die 20ste vorm?',
      answer: 'a) sirkel, vierkant, driehoek    b) vierkant    c) vierkant',
      parts: [
        {
          label: 'a) Wat is die herhalende eenheid?',
          correctAnswer: 'sirkelvierkantdriehoek',
          correctAnswers: [
            'sirkelvierkantdriehoek',
            'sirkel vierkant driehoek',
            'sirkel,vierkant,driehoek',
            'circlesquaretriangle',
          ],
          explanation:
            'Die groep wat herhaal, is: sirkel, vierkant, driehoek — 3 vorms per eenheid.',
        },
        {
          label: 'b) Wat is die 11de vorm?',
          correctAnswer: 'vierkant',
          correctAnswers: ['vierkant', 'Vierkant', 'square', 'Square'],
          explanation:
            'Eenheidslengte = 3.\n' +
            '11 ÷ 3 = 3 res 2.\n' +
            'Res 2 → die 2de vorm in die eenheid.\n' +
            'Eenheid: sirkel (1ste), vierkant (2de), driehoek (3de).\n\n' +
            'Die 2de vorm is vierkant.\n\n' +
            'Kontroleer deur te lys: 1-sirkel, 2-vierkant, 3-driehoek, 4-sirkel, 5-vierkant, 6-driehoek, 7-sirkel, 8-vierkant, 9-driehoek, 10-sirkel, 11-vierkant ✓',
        },
        {
          label: 'c) Wat is die 20ste vorm?',
          correctAnswer: 'vierkant',
          correctAnswers: ['vierkant', 'Vierkant', 'square', 'Square'],
          explanation:
            'Eenheidslengte = 3.\n' +
            '20 ÷ 3 = 6 res 2.\n' +
            'Res 2 → die 2de vorm in die eenheid = vierkant.\n\n' +
            'Kontroleer: 18-driehoek, 19-sirkel, 20-vierkant ✓',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Kleurpatroon gaan: rooi, rooi, blou, groen, rooi, rooi, blou, groen, …\n\n' +
        'a) Wat is die herhalende eenheid?\n' +
        'b) Watter kleur is die 15de vorm?\n' +
        'c) Watter kleur is die 22ste vorm?',
      answer: 'a) rooi, rooi, blou, groen    b) blou    c) rooi',
      parts: [
        {
          label: 'a) Wat is die herhalende eenheid?',
          correctAnswer: 'rooirooiblougroen',
          correctAnswers: [
            'rooirooiblougroen',
            'rooi rooi blou groen',
            'rooi,rooi,blou,groen',
            'redredbluegreen',
          ],
          explanation:
            'Die groep wat herhaal, is: rooi, rooi, blou, groen — 4 kleure per eenheid.',
        },
        {
          label: 'b) Watter kleur is die 15de vorm?',
          correctAnswer: 'blou',
          correctAnswers: ['blou', 'Blou', 'blue', 'Blue'],
          explanation:
            'Eenheidslengte = 4.\n' +
            '15 ÷ 4 = 3 res 3.\n' +
            'Res 3 → die 3de kleur in die eenheid.\n' +
            'Eenheid: rooi (1ste), rooi (2de), blou (3de), groen (4de).\n\n' +
            'Die 3de kleur is blou.\n\n' +
            'Kontroleer: 12-groen, 13-rooi, 14-rooi, 15-blou ✓',
        },
        {
          label: 'c) Watter kleur is die 22ste vorm?',
          correctAnswer: 'rooi',
          correctAnswers: ['rooi', 'Rooi', 'red', 'Red'],
          explanation:
            'Eenheidslengte = 4.\n' +
            '22 ÷ 4 = 5 res 2.\n' +
            'Res 2 → die 2de kleur in die eenheid = rooi.\n\n' +
            'Kontroleer: 20-groen, 21-rooi, 22-rooi ✓',
        },
      ],
    },

    // ── AFDELING 4: TESSELLERENDE PATRONE ────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Tesseleer ʼn vierkant? Skryf ja of nee en gee een rede.',
      answer:
        'Ja — vierkante tesseleer.\n\n' +
        'Rede: vierkante het reguit rande wat perfek inmekaar pas met geen gapings en geen oorvleueling nie. Die vier 90°-hoeke ontmoet by elke punt, en 4 × 90° = 360°.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'Noem twee vorms wat tesseleer en twee vorms wat nie tesseleer nie.\n' +
        'Verduidelik waarom sirkels nie tesseleer nie.',
      answer:
        'Vorms wat tesseleer: vierkante en driehoeke (ook reghoeke en reëlmatige seshoeke).\n\n' +
        'Vorms wat nie tesseleer nie: sirkels en reëlmatige vyfhoeke.\n\n' +
        'Waarom sirkels nie tesseleer nie: sirkels het geboë rande wat nie plat teen mekaar kan pas nie. Dit laat altyd gapings tussen die sirkels, sodat hulle nie ʼn oppervlak volledig kan bedek nie.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Badkamervloer word met reëlmatige seshoeke geteël. Elke hoek van ʼn reëlmatige seshoek is 120°.\n\n' +
        'a) Hoeveel seshoeke ontmoet by elke punt?\n' +
        'b) Tel die hoeke korrek op vir tessellasie?\n' +
        'c) Sal die seshoeke tesseleer?',
      answer: 'a) 3    b) Ja, 3 × 120° = 360°    c) Ja',
      parts: [
        {
          label: 'a) Hoeveel seshoeke ontmoet by elke punt?',
          correctAnswer: '3',
          correctAnswers: ['3', 'drie', '3 seshoeke'],
          explanation:
            'Vir tessellasie moet die hoeke by elke ontmoetingspunt tot 360° optel.\n' +
            'Elke hoek = 120°.\n' +
            '360° ÷ 120° = 3.\n' +
            'Dus ontmoet 3 seshoeke by elke punt.',
        },
        {
          label: 'b) Tel die hoeke korrek op vir tessellasie?',
          correctAnswer: 'Ja',
          correctAnswers: ['Ja', 'ja', 'ja 3x120=360', 'ja 3×120=360', 'Yes', 'yes'],
          explanation:
            'Kontroleer: 3 × 120° = 360°.\n' +
            '360° is presies die volle draai rondom ʼn punt, dus ja — die hoeke tel korrek op.',
        },
        {
          label: 'c) Sal die seshoeke tesseleer?',
          correctAnswer: 'Ja',
          correctAnswers: ['Ja', 'ja', 'Yes', 'yes'],
          explanation:
            'Omdat 3 seshoeke perfek rondom elke ontmoetingspunt pas (3 × 120° = 360°) met geen gapings en geen oorvleueling nie, tesseleer reëlmatige seshoeke. Dit is waarom heuningkoeke uit seshoeke gemaak word!',
        },
      ],
    },

    // ── AFDELING 5: GEOMETRIESE PATRONE IN DIE ALLEDAAGSE LEWE ───────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Noem twee plekke in die alledaagse lewe waar jy ʼn tessellerende patroon kan sien.',
      answer:
        'Enige twee geldige voorbeelde uit die alledaagse lewe is korrek.\n\n' +
        'Voorbeelde sluit in:\n' +
        '• Badkamervloerteëls\n' +
        '• Baksteenmure\n' +
        '• ʼn Heuningkoek\n' +
        '• ʼn Skaakbord\n' +
        '• Vensterrame\n' +
        '• ʼn Geplaveide voetpad',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'Kyk na ʼn baksteenmuurpatroon. Beantwoord die volgende:\n\n' +
        'a) Watter vorm het die bakstene?\n' +
        'b) Waarom word ʼn baksteenmuur as ʼn tessellerende patroon beskou?\n' +
        'c) Wat sou gebeur as die bakstene sirkels was in plaas van reghoeke?',
      answer:
        'a) Die bakstene is reghoeke.\n\n' +
        'b) ʼn Baksteenmuur is ʼn tessellerende patroon omdat die bakstene inmekaar pas met geen gapings en geen oorvleueling nie — hulle bedek die oppervlak volledig.\n\n' +
        'c) As die bakstene sirkels was, sou daar gapings tussen hulle wees omdat sirkels geboë rande het wat nie plat teen mekaar kan pas nie. Die muur sou nie bymekaar hou nie en sou uitmekaar val.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Ndebele-muurskilderye gebruik geometriese patrone.\n\n' +
        'a) Noem twee geometriese vorms wat algemeen in hierdie patrone gebruik word.\n' +
        'b) Waarom dink jy word geometriese vorms eerder as geboë vorms gebruik?\n' +
        'c) Hoe is dit ʼn voorbeeld van ʼn tessellerende patroon?',
      answer:
        'a) Enige twee geldige geometriese vorms is korrek — byvoorbeeld: vierkante, reghoeke, driehoeke, ruite.\n\n' +
        'b) Geometriese vorms het reguit rande wat maklik inmekaar pas sonder om gapings te laat. Hulle is ook makliker om netjies in rye en roosters te verf, en hulle skep vetterige, duidelike patrone.\n\n' +
        'c) Die geometriese vorms in Ndebele-skilderye pas inmekaar met reguit rande wat geen gapings laat nie — dit is wat hulle tessellerende patrone maak. Dieselfde rangskikking van vorms herhaal oor die hele muur.',
    },

    // ── AFDELING 6: SKEP JOU EIE GEOMETRIESE PATROON ─────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question:
        'Skep ʼn herhalende patroon met twee verskillende vorms.\n\n' +
        'Skryf die eerste 6 terme neer en stel die reël.',
      answer:
        'Enige geldige herhalende patroon met twee vorms is korrek.\n\n' +
        'Kontrolelys:\n' +
        '• Gebruik ten minste twee verskillende vorms\n' +
        '• Dieselfde volgorde herhaal presies\n' +
        '• Ten minste 6 terme word neergeskryf\n' +
        '• Die reël word duidelik gestel\n\n' +
        'Voorbeeld: sirkel, vierkant, sirkel, vierkant, sirkel, vierkant\n' +
        'Reël: herhaal sirkel, vierkant oor en oor.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skep ʼn groeiende patroon wat met 2 vorms begin en elke keer 3 byvoeg.\n\n' +
        'a) Skryf die eerste 5 terme neer.\n' +
        'b) Wat is die reël?\n' +
        'c) Hoeveel vorms is in die 8ste term?',
      answer: 'a) 2, 5, 8, 11, 14    b) Tel elke keer 3 by    c) 23',
      parts: [
        {
          label: 'a) Skryf die eerste 5 terme neer',
          correctAnswer: '2,5,8,11,14',
          correctAnswers: ['2,5,8,11,14', '2581114'],
          explanation:
            'Begin by 2, tel elke keer 3 by:\n' +
            'Term 1 = 2\n' +
            'Term 2 = 2 + 3 = 5\n' +
            'Term 3 = 5 + 3 = 8\n' +
            'Term 4 = 8 + 3 = 11\n' +
            'Term 5 = 11 + 3 = 14\n\n' +
            'Eerste 5 terme: 2, 5, 8, 11, 14',
        },
        {
          label: 'b) Wat is die reël?',
          correctAnswer: 'Tel elke keer 3 by',
          correctAnswers: [
            'Tel elke keer 3 by', 'tel elke keer 3 by',
            'Tel 3 by', 'tel 3 by', '+3', 'plus 3', 'plus3',
          ],
          explanation:
            'Vind die verskil tussen opeenvolgende terme:\n' +
            '5 − 2 = 3,  8 − 5 = 3,  11 − 8 = 3.\n' +
            'Reël: tel elke keer 3 by.',
        },
        {
          label: 'c) Hoeveel vorms is in die 8ste term?',
          correctAnswer: '23',
          correctAnswers: ['23', '23 vorms'],
          explanation:
            'Gaan voort vanaf Term 5 (14), tel elke keer 3 by:\n' +
            'Term 6 = 14 + 3 = 17\n' +
            'Term 7 = 17 + 3 = 20\n' +
            'Term 8 = 20 + 3 = 23',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Ontwerp jou eie geometriese patroon wat gebruik kan word om ʼn vloer te teël.\n\n' +
        'a) Watter vorm of vorms gaan jy gebruik?\n' +
        'b) Skryf die reël vir jou patroon neer.\n' +
        'c) Verduidelik waarom jou gekose vorm of vorms sal tesseleer.\n' +
        'd) Hoeveel teëls sou jy nodig hê vir 5 rye van 6 teëls elk?',
      answer:
        'a) Enige geldige tessellerende vorm is korrek — byvoorbeeld: vierkante, reghoeke, driehoeke, of reëlmatige seshoeke.\n\n' +
        'b) Enige duidelike reël is korrek — byvoorbeeld: "herhaal dieselfde vierkant in ʼn rooster" of "wissel tussen twee driehoekoriëntasies."\n\n' +
        'c) ʼn Geldige tessellasieverduideliking moet noem dat die gekose vorm reguit rande het wat inmekaar pas met geen gapings en geen oorvleueling nie, en dat die hoeke by elke ontmoetingspunt tot 360° optel.\n\n' +
        'd) 5 rye × 6 teëls = 30 teëls.',
    },

  ],

  scoreMessages: [
    {
      minScore: 33,
      message:
        'Uitstekend! 33 uit 33 — jy het Geometriese Patrone heeltemal bemeester. Elke enkele deel was korrek. Uitstekende werk! 🌟',
    },
    {
      minScore: 27,
      message:
        'Uitstekende werk! Jy het ʼn sterk begrip van geometriese patrone. Gaan die dele wat jy gemis het weer deur en jy sal volpunte behaal.',
    },
    {
      minScore: 20,
      message:
        'Goeie poging! Jy maak goeie vordering met geometriese patrone. Gaan terug oor die afdelings waar jy punte verloor het en probeer daardie vrae weer.',
    },
    {
      minScore: 0,
      message:
        'Hou aan — geometriese patrone verg oefening! Werk weer deur die studiegids, fokus op die uitgewerkte voorbeelde, en probeer dan die vrae weer. Jy kan dit doen!',
    },
  ],
}
