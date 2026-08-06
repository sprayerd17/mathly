import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Getallesinne',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS ʼN GETALSIN?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-number-sentence',
      title: 'Wat is ʼn Getallesin?',
      icon: '🔣',
      explanation: `<p style="margin-bottom:18px;">ʼn <strong>Getallesin</strong> is ʼn wiskundige stelling wat <span style="color:#1e40af;font-weight:700;">getalle</span>, <span style="color:#dc2626;font-weight:700;">bewerkingsimbole</span>, en ʼn <span style="color:#16a34a;font-weight:700;">vergelykingsimbool</span> gebruik om ʼn verwantskap te toon. Net soos ʼn sin in Afrikaans jou iets vertel, vertel ʼn getallesin jou ʼn wiskundige feit.</p>

<p style="margin-bottom:12px;font-weight:600;">Twee soorte getallesinne:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Vergelyking</div>
    <div style="font-size:17px;margin-bottom:8px;"><span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">7</span></div>
    <div style="font-size:14px;color:#374151;">Gebruik <span style="color:#16a34a;font-weight:700;">=</span> om te wys dat albei kante <strong>gelyk</strong> is. Die linkerkant balanseer die regterkant presies.</div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Ongelykheid</div>
    <div style="font-size:17px;margin-bottom:8px;"><span style="color:#1e40af;font-weight:700;">5</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#16a34a;font-weight:700;">&gt;</span> <span style="color:#1e40af;font-weight:700;">6</span></div>
    <div style="font-size:14px;color:#374151;">Gebruik <span style="color:#16a34a;font-weight:700;">&lt;</span> of <span style="color:#16a34a;font-weight:700;">&gt;</span> om te wys dat een kant <strong>groter of kleiner</strong> as die ander is.</div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Simbole wat jy moet ken:</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#dc2626;font-weight:700;">+</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Optel</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#dc2626;font-weight:700;">−</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Aftrek</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#dc2626;font-weight:700;">×</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Vermenigvuldig</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#dc2626;font-weight:700;">÷</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Deel</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#16a34a;font-weight:700;">=</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Gelyk aan</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#16a34a;font-weight:700;">&lt;</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Kleiner as</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;text-align:center;">
    <div style="font-size:22px;color:#16a34a;font-weight:700;">&gt;</div>
    <div style="font-size:13px;color:#374151;margin-top:4px;">Groter as</div>
  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Wenk: onthou &lt; en &gt;</div>
  <div style="color:#374151;font-size:14px;">Die klein spits punt wys altyd na die <strong>kleiner getal</strong>. Dink daaraan soos ʼn honger krokodil — dit maak altyd sy bek oop na die <em>groter</em> getal toe!</div>
</div>`,

      videoPlaceholder: 'Kort video wat die verskil tussen vergelykings en ongelykhede verduidelik met voorbeelde',

      workedExamples: [
        {
          question: 'Is 4 + 5 = 9 ʼn ware getallesin?',
          answer: 'Ja, dit is waar.',
          steps: [
            `Bereken die <strong>linkerkant</strong>: <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">5</span> = <span style="color:#1e40af;font-weight:700;">9</span>`,
            `Vergelyk met die <strong>regterkant</strong>: is <span style="color:#1e40af;font-weight:700;">9</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">9</span>? <strong>Ja</strong> — albei kante is gelyk.`,
            `<span style="color:#16a34a;font-weight:700;">✓ Ware getallesin.</span> &nbsp; <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">5</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">9</span> is korrek.`,
          ],
        },
        {
          question: 'Is 3 × 4 > 10 ʼn ware getallesin?',
          answer: 'Waar.',
          steps: [
            `Bereken die <strong>linkerkant</strong>: <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#1e40af;font-weight:700;">12</span>`,
            `Vergelyk: is <span style="color:#1e40af;font-weight:700;">12</span> <span style="color:#16a34a;font-weight:700;">&gt;</span> <span style="color:#1e40af;font-weight:700;">10</span>? <strong>Ja</strong> — 12 is groter as 10.`,
            `<span style="color:#16a34a;font-weight:700;">✓ Ware getallesin.</span> &nbsp; <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">&gt;</span> <span style="color:#1e40af;font-weight:700;">10</span> want 12 &gt; 10.`,
          ],
        },
      ],


      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OOP GETALSINNE EN ONTBREKENDE WAARDES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'open-number-sentences',
      title: 'Oop Getallesinne en Ontbrekende Waardes',
      icon: '🔲',
      explanation: `<p style="margin-bottom:18px;">ʼn <strong>Oop getallesin</strong> is ʼn getallesin wat ʼn <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 7px;color:#ea580c;font-weight:700;">□</span> of ʼn oop spasie in die plek van ʼn ontbrekende waarde het. Jou taak is om die getal te vind wat die sin waar maak.</p>

<p style="margin-bottom:12px;font-weight:600;">Voorbeelde van oop getallesinne:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;font-size:18px;">
    <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 10px;color:#ea580c;font-weight:700;">□</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">9</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">— watter getal plus 4 gee 9?</span>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;font-size:18px;">
    <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 10px;color:#ea580c;font-weight:700;">□</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">15</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">— 3 keer watter getal gee 15?</span>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Hoe om die ontbrekende waarde te vind — gebruik inverse bewerkings:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;">+/−</span>
    <div style="font-size:14px;color:#374151;">As ʼn getal <span style="color:#dc2626;font-weight:700;">bygetel</span> word, gebruik <span style="color:#dc2626;font-weight:700;">aftrekking</span> om die ontbrekende waarde te vind.<br/><span style="color:#6b7280;margin-top:4px;display:block;"><span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 6px;color:#ea580c;font-weight:700;">□</span> + 4 = 9 → trek af: 9 − 4 = <span style="color:#ea580c;font-weight:700;">5</span></span></div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;">−/+</span>
    <div style="font-size:14px;color:#374151;">As ʼn getal <span style="color:#dc2626;font-weight:700;">afgetrek</span> word, gebruik <span style="color:#dc2626;font-weight:700;">optelling</span> om die ontbrekende waarde te vind.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;">×/÷</span>
    <div style="font-size:14px;color:#374151;">As ʼn getal <span style="color:#dc2626;font-weight:700;">vermenigvuldig</span> word, gebruik <span style="color:#dc2626;font-weight:700;">deling</span> om die ontbrekende waarde te vind.<br/><span style="color:#6b7280;margin-top:4px;display:block;">3 × <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 6px;color:#ea580c;font-weight:700;">□</span> = 15 → deel: 15 ÷ 3 = <span style="color:#ea580c;font-weight:700;">5</span></span></div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;">÷/×</span>
    <div style="font-size:14px;color:#374151;">As ʼn getal <span style="color:#dc2626;font-weight:700;">gedeel</span> word, gebruik <span style="color:#dc2626;font-weight:700;">vermenigvuldiging</span> om die ontbrekende waarde te vind.</div>
  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Kontroleer altyd jou antwoord</div>
  <div style="color:#374151;font-size:14px;">Nadat jy die ontbrekende waarde gevind het, vervang dit terug in die oorspronklike getallesin om seker te maak dit is waar. As albei kante gelyk is, is jou antwoord korrek.</div>
</div>`,

      videoPlaceholder: 'Kort video wat wys hoe om ontbrekende waardes in oop getallesinne te vind deur inverse bewerkings te gebruik',

      workedExamples: [
        {
          question: 'Vind die ontbrekende waarde: □ + 6 = 13',
          answer: '□ = 7',
          steps: [
            `Identifiseer die bewerking: <span style="color:#1e40af;font-weight:700;">6</span> word <span style="color:#dc2626;font-weight:700;">bygetel</span> by die ontbrekende waarde. Gebruik die inverse — <span style="color:#dc2626;font-weight:700;">aftrekking</span>.`,
            `Bereken: <span style="color:#1e40af;font-weight:700;">13</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#1e40af;font-weight:700;">6</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">7</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">7</span>`,
            `Kontroleer: vervang terug → <span style="color:#ea580c;font-weight:700;">7</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">6</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">13</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
        {
          question: 'Vind die ontbrekende waarde: 24 ÷ □ = 4',
          answer: '□ = 6',
          steps: [
            `Identifiseer die bewerking: ons <span style="color:#dc2626;font-weight:700;">deel</span> 24 deur die ontbrekende waarde. Gebruik die inverse — <span style="color:#dc2626;font-weight:700;">vermenigvuldiging</span>.`,
            `Dink: <span style="color:#1e40af;font-weight:700;">24</span> ÷ <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">6</span> &nbsp; (aangesien 4 × 6 = 24)`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">6</span>`,
            `Kontroleer: vervang terug → <span style="color:#1e40af;font-weight:700;">24</span> <span style="color:#dc2626;font-weight:700;">÷</span> <span style="color:#ea580c;font-weight:700;">6</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
        {
          question: 'Vind die ontbrekende waarde: □ × 7 = 56',
          answer: '□ = 8',
          steps: [
            `Identifiseer die bewerking: die ontbrekende waarde word <span style="color:#dc2626;font-weight:700;">vermenigvuldig</span> met 7. Gebruik die inverse — <span style="color:#dc2626;font-weight:700;">deling</span>.`,
            `Bereken: <span style="color:#1e40af;font-weight:700;">56</span> <span style="color:#dc2626;font-weight:700;">÷</span> <span style="color:#1e40af;font-weight:700;">7</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">8</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">8</span>`,
            `Kontroleer: vervang terug → <span style="color:#ea580c;font-weight:700;">8</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="color:#1e40af;font-weight:700;">7</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">56</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
      ],


      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — WOORDPROBLEME OMSKAKEL NA GETALSINNE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translating-word-problems',
      title: 'Woordprobleme Omskakel na Getallesinne',
      icon: '📖',
      explanation: `<p style="margin-bottom:18px;">Elke woordprobleem steek ʼn getallesin weg. As jy dit kan vind, word die probleem baie makliker om op te los. Die geheim is om te soek na <span style="color:#ea580c;font-weight:700;">sleutelwoorde</span> wat jou vertel watter bewerking om te gebruik.</p>

<p style="margin-bottom:12px;font-weight:600;">Vyf-stap metode:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">1</span>
    <div><strong>Lees</strong> die probleem noukeurig — meer as een keer indien nodig.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">2</span>
    <div><strong>Identifiseer</strong> die <span style="color:#ea580c;font-weight:700;">sleutelwoorde</span> en die bewerking wat hulle voorstel.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">3</span>
    <div><strong>Skryf</strong> die getallesin met behulp van <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 6px;color:#ea580c;font-weight:700;">□</span> vir die onbekende waarde.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">4</span>
    <div><strong>Los op</strong> met behulp van ʼn inverse bewerking om die ontbrekende waarde te vind.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">5</span>
    <div><strong>Kontroleer</strong> — vervang jou antwoord terug en maak seker die getallesin is waar.</div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Sleutelwoordgids:</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;">
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Optelling</div>
    <div style="font-size:13px;color:#374151;"><span style="color:#ea580c;font-weight:700;">meer</span>, <span style="color:#ea580c;font-weight:700;">bygevoeg</span>, <span style="color:#ea580c;font-weight:700;">totaal</span>, <span style="color:#ea580c;font-weight:700;">altesaam</span>, <span style="color:#ea580c;font-weight:700;">in alles</span>, <span style="color:#ea580c;font-weight:700;">som</span></div>
  </div>
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Aftrekking</div>
    <div style="font-size:13px;color:#374151;"><span style="color:#ea580c;font-weight:700;">weggegee</span>, <span style="color:#ea580c;font-weight:700;">oorgebly</span>, <span style="color:#ea580c;font-weight:700;">minder</span>, <span style="color:#ea580c;font-weight:700;">verskil</span>, <span style="color:#ea580c;font-weight:700;">minder as</span>, <span style="color:#ea580c;font-weight:700;">spandeer</span></div>
  </div>
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Vermenigvuldiging</div>
    <div style="font-size:13px;color:#374151;"><span style="color:#ea580c;font-weight:700;">keer</span>, <span style="color:#ea580c;font-weight:700;">groepe van</span>, <span style="color:#ea580c;font-weight:700;">elk</span>, <span style="color:#ea580c;font-weight:700;">per</span>, <span style="color:#ea580c;font-weight:700;">baie van</span>, <span style="color:#ea580c;font-weight:700;">produk</span></div>
  </div>
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Deling</div>
    <div style="font-size:13px;color:#374151;"><span style="color:#ea580c;font-weight:700;">deel</span>, <span style="color:#ea580c;font-weight:700;">verdeel</span>, <span style="color:#ea580c;font-weight:700;">hoeveel elk</span>, <span style="color:#ea580c;font-weight:700;">gelykop</span>, <span style="color:#ea580c;font-weight:700;">kwosiënt</span></div>
  </div>
</div>`,

      videoPlaceholder: 'Kort video wat wys hoe om woordprobleme stap vir stap in getallesinne om te skakel',

      workedExamples: [
        {
          question: 'Thabo het 45 albasters. Hy <span style="color:#ea580c;font-weight:700;">gee ʼn paar</span> vir sy vriend en het 28 <span style="color:#ea580c;font-weight:700;">oor</span>. Hoeveel het hy weggegee?',
          answer: '□ = 17. Thabo het 17 albasters weggegee.',
          steps: [
            `Sleutelwoorde: "<span style="color:#ea580c;font-weight:700;">gee ʼn paar</span>" en "<span style="color:#ea580c;font-weight:700;">oor</span>" — dit dui op <strong>aftrekking</strong>. Thabo begin met 45, gee ʼn paar weg, en 28 bly oor.`,
            `Skryf die getallesin: <span style="color:#1e40af;font-weight:700;">45</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">28</span>`,
            `Gebruik die inverse bewerking: <span style="color:#1e40af;font-weight:700;">45</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#1e40af;font-weight:700;">28</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>. Thabo het <strong>17 albasters</strong> weggegee.`,
            `Kontroleer: <span style="color:#1e40af;font-weight:700;">45</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#ea580c;font-weight:700;">17</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">28</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
        {
          question: 'ʼn Boks het ʼn aantal potlode. Nadat 14 <span style="color:#ea580c;font-weight:700;">meer</span> <span style="color:#ea580c;font-weight:700;">bygevoeg</span> is, is daar 31 potlode. Hoeveel was daar aan die begin?',
          answer: '□ = 17. Daar was 17 potlode aan die begin.',
          steps: [
            `Sleutelwoorde: "<span style="color:#ea580c;font-weight:700;">bygevoeg</span>" en "<span style="color:#ea580c;font-weight:700;">meer</span>" — dit dui op <strong>optelling</strong>. ʼn Onbekende beginhoeveelheid plus 14 gee 31.`,
            `Skryf die getallesin: <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">14</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">31</span>`,
            `Gebruik die inverse bewerking: <span style="color:#1e40af;font-weight:700;">31</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#1e40af;font-weight:700;">14</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>. Daar was <strong>17 potlode</strong> aan die begin.`,
            `Kontroleer: <span style="color:#ea580c;font-weight:700;">17</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">14</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">31</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
      ],


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
        // Blok 1 — Ontbrekende waardes, een bewerking (Maklik) — posisies 0-4
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ − 15 = 27', checkMode: 'auto', options: ['42', '27', '12', '15'], correctIndex: 0, explanation: 'Gebruik die inverse — optelling: 27 + 15 = 42. □ = 42. Kontroleer: 42 − 15 = 27 ✓ (27 herhaal net die gegewe totaal sonder om op te los; 12 kom van 27 − 15 af te trek in plaas van op te tel; 15 herhaal net die getal wat afgetrek word.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n22 − □ = 13', checkMode: 'auto', options: ['13', '9', '35', '22'], correctIndex: 1, explanation: 'Gebruik die inverse — aftrekking: 22 − 13 = 9. □ = 9. Kontroleer: 22 − 9 = 13 ✓ (13 herhaal net ʼn gegewe getal; 35 kom van 22 + 13 op te tel in plaas van af te trek; 22 herhaal net die ander gegewe getal.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ × 7 = 63', checkMode: 'auto', options: ['63', '7', '9', '441'], correctIndex: 2, explanation: 'Gebruik die inverse — deling: 63 ÷ 7 = 9. □ = 9. Kontroleer: 9 × 7 = 63 ✓ (63 en 7 herhaal net die gegewe getalle; 441 kom van 63 × 7 vermenigvuldig in plaas van te deel.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n48 ÷ □ = 8', checkMode: 'auto', options: ['48', '8', '384', '6'], correctIndex: 3, explanation: 'Gebruik die inverse — vermenigvuldiging: 8 × 6 = 48. □ = 6. Kontroleer: 48 ÷ 6 = 8 ✓ (48 en 8 herhaal net die gegewe getalle; 384 kom van 48 × 8 vermenigvuldig in plaas van die ontbrekende faktor te vind.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ + 56 = 100', checkMode: 'auto', options: ['44', '100', '56', '156'], correctIndex: 0, explanation: 'Gebruik die inverse — aftrekking: 100 − 56 = 44. □ = 44. Kontroleer: 44 + 56 = 100 ✓ (100 en 56 herhaal net die gegewe getalle; 156 kom van 100 + 56 op te tel in plaas van af te trek.)' },

        // Blok 2 — Waar/onwaar-oordeel (Maklik-Medium) — posisies 5-8
        { difficulty: 'Easy', question: 'Is die volgende getallesin waar of onwaar?\n\n7 + 8 = 16', checkMode: 'auto', options: ['Waar — 7 + 8 = 16', 'Onwaar — 7 + 8 = 15, nie 16 nie', 'Onwaar — 7 + 8 = 14, nie 16 nie', 'Waar — 7 + 8 = 15, wat naby genoeg aan 16 is'], correctIndex: 1, explanation: 'Bereken die linkerkant: 7 + 8 = 15. Aangesien 15 ≠ 16, is die getallesin onwaar. (14 is ʼn rekenfout; "naby genoeg" is nie geldige wiskundige redenasie nie — die kante moet presies gelyk wees.)' },
        { difficulty: 'Medium', question: 'Is die volgende getallesin waar of onwaar?\n\n9 × 6 > 50', checkMode: 'auto', options: ['Onwaar — 9 × 6 = 45, wat kleiner is as 50', 'Onwaar — 9 × 6 = 54, maar dit is nie groter as 50 nie', 'Waar — 9 × 6 = 54, wat groter is as 50', 'Waar — 9 × 6 = 63, wat groter is as 50'], correctIndex: 2, explanation: 'Bereken die linkerkant: 9 × 6 = 54. Aangesien 54 > 50, is die getallesin waar. (45 en 63 is tafelfoute; die tweede opsie kry 54 reg maar beoordeel die vergelyking verkeerd.)' },
        { difficulty: 'Medium', question: 'Is die volgende getallesin waar of onwaar?\n\n84 ÷ 7 < 11', checkMode: 'auto', options: ['Waar — 84 ÷ 7 = 12, en 12 is kleiner as 11', 'Waar — 84 ÷ 7 = 11, dus is dit gelyk, nie kleiner nie', 'Onwaar — 84 ÷ 7 = 13, wat groter is as 11', 'Onwaar — 84 ÷ 7 = 12, wat groter is as 11, nie kleiner nie'], correctIndex: 3, explanation: 'Bereken die linkerkant: 84 ÷ 7 = 12. Aangesien 12 groter is as 11, nie kleiner nie, is die getallesin onwaar. (12 < 11 is ʼn onware bewering oor ʼn korrekte berekening; 11 en 13 is delingsfoute.)' },
        { difficulty: 'Medium', question: 'Skryf waar of onwaar vir elke getallesin:\n\na) 6 × 9 = 54\nb) 72 − 28 < 50\nc) 13 × 4 > 60', answer: 'a) Waar  b) Waar  c) Onwaar', checkMode: 'auto', parts: [ { label: 'a) 6 × 9 = 54', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 6 × 9 = 54. Is 54 = 54? Ja. Ware getallesin.' }, { label: 'b) 72 − 28 < 50', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 72 − 28 = 44. Is 44 < 50? Ja. Ware getallesin.' }, { label: 'c) 13 × 4 > 60', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Linkerkant: 13 × 4 = 52. Is 52 > 60? Nee, 52 is kleiner as 60. Onware getallesin.' } ] },

        // Blok 3 — Redenering / foutopsporing (Medium) — posisies 9-11
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat jy 6 by 13 moet optel om die ontbrekende waarde in □ + 6 = 13 te vind. Watter stelling evalueer die leerder se metode korrek?', checkMode: 'auto', options: ['Die leerder is verkeerd — jy moet eerder 6 van 13 aftrek, wat □ = 7 gee.', 'Die leerder is korrek — om op te tel gee □ = 19, wat die ontbrekende waarde is.', 'Die leerder is korrek, aangesien 6 + 13 = 19 en 19 − 6 = 13.', 'Die leerder is verkeerd — jy moet eerder 6 met 13 vermenigvuldig, wat □ = 78 gee.'], correctIndex: 0, explanation: 'Aangesien 6 by die ontbrekende waarde getel word, maak die inverse bewerking — aftrekking — die optelling ongedaan: 13 − 6 = 7, dus □ = 7. Om 6 by 13 te tel gee die verkeerde antwoord (19); vermenigvuldig is glad nie die korrekte inverse van optelling nie.' },
        { difficulty: 'Medium', question: 'Sipho los die getallesin □ × 4 = 36 op en kry □ = 9. Watter een van die volgende kontroleer sy antwoord korrek?', checkMode: 'auto', options: ['Vervang □ = 9: 9 + 4 = 13, wat nie ooreenstem met 36 nie, so die antwoord is verkeerd.', 'Vervang □ = 9: 9 × 4 = 36, wat ooreenstem, so die antwoord is korrek.', 'Deel 36 deur 4 om 9 te kry, maar aangesien volgorde saak maak, is die antwoord steeds verkeerd.', 'Vervang □ = 9 in 4 × 36 om die antwoord te kontroleer.'], correctIndex: 1, explanation: 'Om te kontroleer, vervang die gevonde waarde terug in die oorspronklike getallesin: 9 × 4 = 36, wat met die regterkant ooreenstem, so □ = 9 is korrek. Om op te tel in plaas van te vermenigvuldig, of om in die verkeerde uitdrukking te vervang, kontroleer nie die oorspronklike sin nie.' },
        { difficulty: 'Medium', question: 'ʼn Klasmaat sê dat 8 × 6 = 42 ʼn ware getallesin is "omdat 42 min of meer reg klink vir 8 keer 6." Watter stelling evalueer dit korrek?', checkMode: 'auto', options: ['Die klasmaat is korrek — 8 × 6 = 42.', 'Die klasmaat is verkeerd — 8 × 6 = 36, nie 42 nie, so die getallesin is onwaar.', 'Die klasmaat is verkeerd — 8 × 6 = 48, nie 42 nie, so die getallesin is onwaar.', 'Die klasmaat is korrek, aangesien skatting ʼn aanvaarbare manier is om ʼn getallesin te beoordeel.'], correctIndex: 2, explanation: 'Jy kan nie besluit of ʼn getallesin waar is net omdat ʼn getal "min of meer reg klink" nie — jy moet bereken. 8 × 6 = 48, nie 42 nie, so die getallesin is onwaar. (36 is ʼn tafelfout; skatting is nooit ʼn geldige manier om te beoordeel of ʼn getallesin waar is nie.)' },

        // Blok 4 — Woordprobleme: omskakel en oplos, een stap (Medium) — posisies 12-16
        { difficulty: 'Medium', question: 'Thabo het 34 plakkers. Hy koop nog 19. Watter berekening vind korrek hoeveel plakkers hy altesaam het?', checkMode: 'auto', options: ['34 + 19 = 43', '34 − 19 = 15', '34 + 19 = 63', '34 + 19 = 53'], correctIndex: 3, explanation: 'Getallesin: 34 + 19 = □. 34 + 19 = 53, dus het Thabo altesaam 53 plakkers. (43 vergeet om die tiental oor te dra; 15 trek verkeerdelik af in plaas van op te tel; 63 is ʼn rekenfout.)' },
        { difficulty: 'Medium', question: 'ʼn Netbalspan behaal 45 punte in die eerste helfte. Teen die einde van die wedstryd het hulle altesaam 78 punte behaal. Watter berekening vind korrek hoeveel punte hulle in die tweede helfte behaal het?', checkMode: 'auto', options: ['78 − 45 = 33', '45 + 78 = 123', '78 − 45 = 43', '78'], correctIndex: 0, explanation: 'Getallesin: 45 + □ = 78. Gebruik die inverse: 78 − 45 = 33, dus het hulle 33 punte in die tweede helfte behaal. (123 tel verkeerdelik op in plaas van af te trek; 43 is ʼn leenfout; 78 herhaal net die totaal sonder om op te los.)' },
        { difficulty: 'Medium', question: 'ʼn Resep benodig 3 eiers om een bondel muffins te maak. Watter berekening vind korrek hoeveel eiers benodig word vir 8 bondels?', checkMode: 'auto', options: ['3 + 8 = 11', '3 × 8 = 24', '3 × 8 = 21', '8 − 3 = 5'], correctIndex: 1, explanation: 'Getallesin: 3 × 8 = □. 3 × 8 = 24, dus word 24 eiers benodig vir 8 bondels. (11 tel verkeerdelik op in plaas van te vermenigvuldig; 21 is ʼn tafelfout; 5 trek verkeerdelik af in plaas van te vermenigvuldig.)' },
        { difficulty: 'Medium', question: 'Die klas moet 36 stoele in gelyke rye rangskik vir ʼn klaskamervergadering, met 9 stoele in elke ry. Watter berekening vind korrek hoeveel rye nodig is?', checkMode: 'auto', options: ['36 × 9 = 324', '36 − 9 = 27', '36 ÷ 9 = 4', '36 ÷ 9 = 3'], correctIndex: 2, explanation: 'Getallesin: 36 ÷ 9 = □. 36 ÷ 9 = 4, dus is 4 rye nodig. (324 vermenigvuldig verkeerdelik in plaas van te deel; 27 trek verkeerdelik af; 3 is ʼn tafelfout — 9 × 4 = 36, nie 9 × 3 nie.)' },
        { difficulty: 'Medium', question: 'ʼn Gesin reis 240 km op die eerste dag van ʼn padtoer. Teen die einde van dag twee het hulle altesaam 410 km gereis.\n\na) Skryf die getallesin vir hierdie probleem. Gebruik □ vir die onbekende waarde.\nb) Los dit op om te vind hoe ver hulle op dag twee gereis het. Skryf slegs die getal.\nc) Verduidelik waarom jy aftrekking (as die inverse) eerder as optelling gekies het om die ontbrekende waarde op te los.', answer: 'a) 240 + □ = 410  b) 170  c) Omdat die onbekende afstand by 240 getel is om die totaal van 410 te bereik, maak die aftrekking van 240 van 410 daardie optelling ongedaan en onthul dit die ontbrekende waarde.', parts: [ { label: 'a) Getallesin', correctAnswer: '240+□=410', correctAnswers: ['240+□=410', '240+?=410', '240+n=410'], explanation: 'ʼn Onbekende afstand word by 240 getel om ʼn totaal van 410 te gee.\nGetallesin: 240 + □ = 410', checkMode: 'auto' }, { label: 'b) Afstand op dag twee', correctAnswer: '170', explanation: 'Gebruik die inverse — aftrekking: 410 − 240 = 170.\n□ = 170', checkMode: 'auto' }, { label: 'c) Redenasie', answer: 'Omdat die onbekende afstand by 240 getel is, word die inverse bewerking (aftrekking) benodig om dit te isoleer en te vind: 410 − 240 = 170.', explanation: 'Aangesien die ontbrekende waarde by 240 getel is, maak aftrekking daardie optelling ongedaan en onthul dit die ontbrekende waarde.', checkMode: 'self' } ], checkMode: 'auto' },

        // Blok 5 — Meervoudige-stap en vergelykings (Moeilik) — posisies 17-19
        { difficulty: 'Hard', question: 'Sipho koop 3 bokse penne met 12 penne in elke boks, en koop dan nog 7 los penne. Watter berekening vind korrek die totale getal penne?', checkMode: 'auto', options: ['3 × (12 + 7) = 57', '3 + 12 × 7 = 87', '3 × 12 − 7 = 29', '3 × 12 + 7 = 43'], correctIndex: 3, explanation: '3 × 12 = 36, dan 36 + 7 = 43, dus het Sipho altesaam 43 penne. (57 tel verkeerdelik binne die hakies op voordat dit vermenigvuldig; 87 vermenigvuldig die verkeerde twee getalle; 29 trek verkeerdelik die los penne af in plaas van dit by te tel.)' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee getallesinne is waar?\n\nA) 9 × 7 − 15 = 48\nB) 6 × 8 + 10 = 60', checkMode: 'auto', options: ['Slegs A is waar', 'Slegs B is waar', 'Beide A en B is waar', 'Nóg A nóg B is waar'], correctIndex: 0, explanation: 'A) 9 × 7 = 63, dan 63 − 15 = 48. Dit stem ooreen, dus is A waar. B) 6 × 8 = 48, dan 48 + 10 = 58. Dit is nie gelyk aan 60 nie, dus is B onwaar. Slegs A is waar.' },
        { difficulty: 'Hard', question: 'Watter stelling verduidelik korrek die verskil tussen ʼn oop getallesin en ʼn getallesin wat as waar of onwaar beoordeel kan word?', checkMode: 'auto', options: ['ʼn Oop getallesin het geen ontbrekende waarde nie, bv. 4 + 5 = 9; ʼn waar/onwaar-sin het ʼn ontbrekende waarde, bv. □ + 5 = 9.', 'ʼn Oop getallesin het ʼn ontbrekende waarde wat as □ getoon word, bv. □ + 5 = 9; ʼn waar/onwaar-sin het elke waarde gegee, bv. 4 + 5 = 9, en jy bereken albei kante om te besluit of dit waar of onwaar is.', 'Daar is geen werklike verskil nie — albei soorte getallesinne word op dieselfde manier opgelos.', 'ʼn Oop getallesin behels altyd vermenigvuldiging, terwyl ʼn waar/onwaar-sin altyd optelling behels.'], correctIndex: 1, explanation: 'ʼn Waar/onwaar-getallesin het geen onbekendes nie — jy bereken albei kante en vergelyk hulle, bv. 4 + 5 = 9 (waar). ʼn Oop getallesin het ʼn ontbrekende waarde wat as □ getoon word, en jy moet die getal vind wat dit waar maak, bv. □ + 5 = 9, waar □ = 4.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die vind van en redenering oor ontbrekende waardes in getallesinne baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en sleutelwoorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Ontbrekende waardes, een bewerking (Maklik) — posisies 0-4
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ − 25 = 17', checkMode: 'auto', options: ['42', '17', '8', '25'], correctIndex: 0, explanation: 'Gebruik die inverse — optelling: 17 + 25 = 42. □ = 42. Kontroleer: 42 − 25 = 17 ✓ (17 en 25 herhaal net die gegewe getalle; 8 kom van 25 − 17 af te trek in plaas van op te tel.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n5 × □ = 35', checkMode: 'auto', options: ['35', '7', '175', '5'], correctIndex: 1, explanation: 'Gebruik die inverse — deling: 35 ÷ 5 = 7. □ = 7. Kontroleer: 5 × 7 = 35 ✓ (35 en 5 herhaal net die gegewe getalle; 175 kom van 35 × 5 vermenigvuldig in plaas van te deel.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ ÷ 5 = 7', checkMode: 'auto', options: ['7', '5', '35', '1,4'], correctIndex: 2, explanation: 'Gebruik die inverse — vermenigvuldiging: 7 × 5 = 35. □ = 35. Kontroleer: 35 ÷ 5 = 7 ✓ (7 en 5 herhaal net die gegewe getalle; 1,4 kom van 7 ÷ 5 deel in plaas van te vermenigvuldig.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n15 − □ = 8', checkMode: 'auto', options: ['8', '23', '15', '7'], correctIndex: 3, explanation: 'Gebruik die inverse — aftrekking: 15 − 8 = 7. □ = 7. Kontroleer: 15 − 7 = 8 ✓ (8 en 15 herhaal net die gegewe getalle; 23 kom van 15 + 8 op te tel in plaas van af te trek.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ + 48 = 91', checkMode: 'auto', options: ['43', '91', '48', '139'], correctIndex: 0, explanation: 'Gebruik die inverse — aftrekking: 91 − 48 = 43. □ = 43. Kontroleer: 43 + 48 = 91 ✓ (91 en 48 herhaal net die gegewe getalle; 139 kom van 91 + 48 op te tel in plaas van af te trek.)' },

        // Blok 2 — Waar/onwaar-oordeel (Maklik-Medium) — posisies 5-8
        { difficulty: 'Easy', question: 'Is die volgende getallesin waar of onwaar?\n\n45 ÷ 5 = 9', checkMode: 'auto', options: ['Onwaar — 45 ÷ 5 = 8, nie 9 nie', 'Waar — 45 ÷ 5 = 9, dus is albei kante gelyk', 'Onwaar — 45 ÷ 5 = 10, nie 9 nie', 'Waar, maar net omdat 9 naby die antwoord is'], correctIndex: 1, explanation: 'Bereken die linkerkant: 45 ÷ 5 = 9. Aangesien 9 = 9, is die getallesin waar. (8 en 10 is delingsfoute; "naby" is nie geldige redenasie nie — die kante moet presies gelyk wees.)' },
        { difficulty: 'Medium', question: 'Is die volgende getallesin waar of onwaar?\n\n12 + 19 = 30', checkMode: 'auto', options: ['Waar — 12 + 19 = 30', 'Onwaar — 12 + 19 = 32, nie 30 nie', 'Onwaar — 12 + 19 = 31, nie 30 nie', 'Waar — 12 + 19 = 31, wat naby genoeg aan 30 is'], correctIndex: 2, explanation: 'Bereken die linkerkant: 12 + 19 = 31. Aangesien 31 ≠ 30, is die getallesin onwaar. (32 is ʼn rekenfout; "naby genoeg" is nie geldige wiskundige redenasie nie.)' },
        { difficulty: 'Medium', question: 'Is die volgende getallesin waar of onwaar?\n\n11 × 6 < 60', checkMode: 'auto', options: ['Waar — 11 × 6 = 66, en 66 is kleiner as 60', 'Waar — 11 × 6 = 60, dus kan dit nie kleiner as homself wees nie', 'Onwaar — 11 × 6 = 56, wat kleiner is as 60', 'Onwaar — 11 × 6 = 66, wat groter is as 60, nie kleiner nie'], correctIndex: 3, explanation: 'Bereken die linkerkant: 11 × 6 = 66. Aangesien 66 groter is as 60, nie kleiner nie, is die getallesin onwaar. (56 is ʼn tafelfout; "66 is kleiner as 60" is ʼn onware bewering oor ʼn korrekte berekening.)' },
        { difficulty: 'Medium', question: 'Skryf waar of onwaar vir elke getallesin:\n\na) 9 × 6 = 54\nb) 100 − 37 = 63\nc) 96 ÷ 8 > 13', answer: 'a) Waar  b) Waar  c) Onwaar', checkMode: 'auto', parts: [ { label: 'a) 9 × 6 = 54', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 9 × 6 = 54. Is 54 = 54? Ja. Ware getallesin.' }, { label: 'b) 100 − 37 = 63', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 100 − 37 = 63. Is 63 = 63? Ja. Ware getallesin.' }, { label: 'c) 96 ÷ 8 > 13', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Linkerkant: 96 ÷ 8 = 12. Is 12 > 13? Nee, 12 is kleiner as 13. Onware getallesin.' } ] },

        // Blok 3 — Redenering / foutopsporing (Medium) — posisies 9-11
        { difficulty: 'Medium', question: 'Watter stelling verduidelik korrek waarom jy aftrekking gebruik om die ontbrekende waarde in □ + 6 = 13 te vind, maar optelling om die ontbrekende waarde in □ − 6 = 13 te vind?', checkMode: 'auto', options: ['Omdat optelling en aftrekking inverse bewerkings is — aftrekking maak optelling ongedaan, en optelling maak aftrekking ongedaan.', 'Omdat aftrekking altyd eerste in enige getallesin gebruik word, ongeag die bewerking wat getoon word.', 'Omdat die getal 6 se waarde verander na gelang van aan watter kant van die gelykaan-teken dit is.', 'Omdat jy altyd dieselfde bewerking wat in die getallesin getoon word, moet gebruik om die ontbrekende waarde te vind.'], correctIndex: 0, explanation: 'Optelling en aftrekking is inverse bewerkings — hulle maak mekaar ongedaan. In □ + 6 = 13 maak die aftrek van 6 van 13 die optelling ongedaan en onthul □ = 7. In □ − 6 = 13 maak die optel van 6 by 13 die aftrekking ongedaan en onthul □ = 19.' },
        { difficulty: 'Medium', question: 'Thabo beweer dat in die getallesin □ + 8 = 20, die ontbrekende waarde 12 moet wees. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Hy is verkeerd — die ontbrekende waarde is 28, aangesien 20 + 8 = 28.', 'Hy is korrek — 20 − 8 = 12, en om te kontroleer gee 12 + 8 = 20.', 'Hy is verkeerd — die ontbrekende waarde is 8, aangesien hy die verkeerde getal gekopieer het.', 'Hy is korrek, maar net omdat 8 en 12 optel tot ʼn getal naby 20.'], correctIndex: 1, explanation: 'Aangesien 8 by die ontbrekende waarde getel word, gebruik die inverse bewerking — aftrekking — om dit ongedaan te maak: 20 − 8 = 12, dus □ = 12. Deur terug te vervang om te kontroleer: 12 + 8 = 20 ✓, wat bevestig dat Thabo korrek is.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat 90 ÷ 9 = 8 ʼn ware getallesin is. ʼn Klasmaat stem nie saam nie. Watter stelling los dit korrek op?', checkMode: 'auto', options: ['Die leerder is korrek — 90 ÷ 9 = 8.', 'Die klasmaat is korrek — 90 ÷ 9 = 9, nie 8 nie.', 'Die klasmaat is korrek — 90 ÷ 9 = 10, nie 8 nie.', 'Albei is verkeerd — 90 ÷ 9 = 11.'], correctIndex: 2, explanation: 'Bereken die linkerkant: 90 ÷ 9 = 10 (aangesien 9 × 10 = 90), nie 8 nie. Aangesien 10 ≠ 8, is die getallesin 90 ÷ 9 = 8 onwaar, dus is die klasmaat korrek.' },

        // Blok 4 — Woordprobleme: omskakel en oplos, een stap (Medium) — posisies 12-16
        { difficulty: 'Medium', question: 'Sipho het 50 lekkers. Hy gee ʼn paar weg en het 22 oor. Watter berekening vind korrek hoeveel hy weggegee het?', checkMode: 'auto', options: ['50 + 22 = 72', '50 − 22 = 38', '22 = 22', '50 − 22 = 28'], correctIndex: 3, explanation: 'Getallesin: 50 − □ = 22. Gebruik die inverse: 50 − 22 = 28, dus het Sipho 28 lekkers weggegee. (72 tel verkeerdelik op in plaas van af te trek; 38 is ʼn leenfout; 22 herhaal net die gegewe oorblywende hoeveelheid sonder om op te los.)' },
        { difficulty: 'Medium', question: 'ʼn Sokkerspan reis 18 km na ʼn uitwedstryd en reis dan ʼn verdere afstand ʼn ander pad huis toe, en dek altesaam 45 km vir die retoerrit. Watter berekening vind korrek die afstand op die terugrit?', checkMode: 'auto', options: ['45 − 18 = 27', '18 + 45 = 63', '45 − 18 = 37', '45'], correctIndex: 0, explanation: 'Getallesin: 18 + □ = 45. Gebruik die inverse: 45 − 18 = 27, dus het die span 27 km op die terugrit gereis. (63 tel verkeerdelik op in plaas van af te trek; 37 is ʼn leenfout; 45 herhaal net die totaal sonder om op te los.)' },
        { difficulty: 'Medium', question: 'Elke klaskamerdesk huisves 4 leerders. Watter berekening vind korrek hoeveel leerders by 11 desks kan sit?', checkMode: 'auto', options: ['4 + 11 = 15', '4 × 11 = 44', '4 × 11 = 41', '11 − 4 = 7'], correctIndex: 1, explanation: 'Getallesin: 4 × 11 = □. 4 × 11 = 44, dus kan 44 leerders sit. (15 tel verkeerdelik op in plaas van te vermenigvuldig; 41 is ʼn tafelfout; 7 trek verkeerdelik af in plaas van te vermenigvuldig.)' },
        { difficulty: 'Medium', question: 'Amahle het 96 krale. Sy deel dit gelykop tussen 8 vriende. Watter berekening vind korrek hoeveel krale elke vriend kry?', checkMode: 'auto', options: ['96 × 8 = 768', '96 − 8 = 88', '96 ÷ 8 = 12', '96 ÷ 8 = 11'], correctIndex: 2, explanation: 'Getallesin: 96 ÷ 8 = □. 96 ÷ 8 = 12, dus kry elke vriend 12 krale. (768 vermenigvuldig verkeerdelik in plaas van te deel; 88 trek verkeerdelik af; 11 is ʼn tafelfout — 8 × 12 = 96, nie 8 × 11 nie.)' },
        { difficulty: 'Medium', question: 'ʼn Winkel het ʼn aantal brode gehad. Teen die einde van die dag is 59 brode verkoop, en 37 brode het oorgebly.\n\na) Skryf die getallesin vir hierdie probleem. Gebruik □ vir die onbekende waarde.\nb) Los dit op om te vind hoeveel brode die winkel aan die begin gehad het. Skryf slegs die getal.\nc) Verduidelik waarom jy optelling (as die inverse) gekies het om die ontbrekende waarde op te los.', answer: 'a) □ − 59 = 37  b) 96  c) Omdat 59 van die ontbrekende waarde afgetrek is, maak dit om 59 terug by 37 te tel daardie aftrekking ongedaan en onthul dit die ontbrekende waarde.', parts: [ { label: 'a) Getallesin', correctAnswer: '□-59=37', correctAnswers: ['□-59=37', '?-59=37', 'n-59=37', '□−59=37'], explanation: 'ʼn Onbekende beginhoeveelheid minus 59 (verkoop) laat 37 oor.\nGetallesin: □ − 59 = 37', checkMode: 'auto' }, { label: 'b) Beginbrode', correctAnswer: '96', explanation: 'Gebruik die inverse — optelling: 37 + 59 = 96.\n□ = 96', checkMode: 'auto' }, { label: 'c) Redenasie', answer: 'Aangesien 59 van die ontbrekende waarde afgetrek is, is optelling die inverse bewerking wat nodig is om dit te isoleer en te vind: 37 + 59 = 96.', explanation: 'Optelling maak aftrekking ongedaan — deur terug te tel wat weggeneem is, word die oorspronklike beginwaarde onthul.', checkMode: 'self' } ], checkMode: 'auto' },

        // Blok 5 — Meervoudige-stap en vergelykings (Moeilik) — posisies 17-19
        { difficulty: 'Hard', question: 'ʼn Bakkery maak 5 pakke van 8 broodjies. Dit verkoop 15 broodjies. Watter berekening vind korrek hoeveel broodjies oor is?', checkMode: 'auto', options: ['5 × (8 − 15) = −35', '5 + 8 × 15 = 125', '5 × 8 + 15 = 55', '5 × 8 − 15 = 25'], correctIndex: 3, explanation: '5 × 8 = 40, dan 40 − 15 = 25, dus is daar 25 broodjies oor. (−35 trek verkeerdelik binne die hakies af voordat dit vermenigvuldig; 125 vermenigvuldig die verkeerde twee getalle; 55 tel verkeerdelik die verkoopte broodjies by in plaas van dit af te trek.)' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee getallesinne is waar?\n\nA) 8 × 9 − 12 = 65\nB) 7 × 8 + 5 = 61', checkMode: 'auto', options: ['Slegs B is waar', 'Slegs A is waar', 'Beide A en B is waar', 'Nóg A nóg B is waar'], correctIndex: 0, explanation: 'A) 8 × 9 = 72, dan 72 − 12 = 60, nie 65 nie, dus is A onwaar. B) 7 × 8 = 56, dan 56 + 5 = 61. Dit stem ooreen, dus is B waar. Slegs B is waar.' },
        { difficulty: 'Hard', question: 'Watter stelling verduidelik korrek hoe jy besluit watter bewerking (+, −, ×, ÷) om te gebruik wanneer jy ʼn woordprobleem na ʼn getallesin omskakel?', checkMode: 'auto', options: ['Jy moet altyd die bewerking raai op grond van hoe groot die getalle in die probleem lyk.', 'Soek na sleutelwoorde: woorde soos "altesaam" of "meer" dui op optelling, "oor" of "verskil" dui op aftrekking, "elk" of "keer" dui op vermenigvuldiging, en "deel" of "gelykop" dui op deling.', 'Die bewerking word altyd bepaal deur watter getal eerste in die sin verskyn.', 'Woordprobleme kan slegs met optelling en aftrekking opgelos word, nooit vermenigvuldiging of deling nie.'], correctIndex: 1, explanation: 'Sleutelwoorde vertel jou watter bewerking om te gebruik — byvoorbeeld, "gelykop" in "Thabo het 20 lekkers en deel dit gelykop tussen 4 vriende" vertel jou om te deel: 20 ÷ 4 = 5. Om te raai op grond van getalgrootte, sinvolgorde, of bewerkings uit te sluit, is nie betroubaar nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die vind van en redenering oor ontbrekende waardes in getallesinne baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en sleutelwoorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Ontbrekende waardes, een bewerking (Maklik) — posisies 0-4
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ + 27 = 45', checkMode: 'auto', options: ['18', '45', '27', '72'], correctIndex: 0, explanation: 'Gebruik die inverse — aftrekking: 45 − 27 = 18. □ = 18. Kontroleer: 18 + 27 = 45 ✓ (45 en 27 herhaal net die gegewe getalle; 72 kom van 45 + 27 op te tel in plaas van af te trek.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n93 − □ = 47', checkMode: 'auto', options: ['47', '46', '140', '93'], correctIndex: 1, explanation: 'Gebruik die inverse — aftrekking: 93 − 47 = 46. □ = 46. Kontroleer: 93 − 46 = 47 ✓ (47 en 93 herhaal net die gegewe getalle; 140 kom van 93 + 47 op te tel in plaas van af te trek.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ × 8 = 56', checkMode: 'auto', options: ['56', '8', '7', '448'], correctIndex: 2, explanation: 'Gebruik die inverse — deling: 56 ÷ 8 = 7. □ = 7. Kontroleer: 7 × 8 = 56 ✓ (56 en 8 herhaal net die gegewe getalle; 448 kom van 56 × 8 vermenigvuldig in plaas van te deel.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n63 ÷ □ = 9', checkMode: 'auto', options: ['63', '9', '567', '7'], correctIndex: 3, explanation: 'Gebruik die inverse — vermenigvuldiging: 9 × 7 = 63. □ = 7. Kontroleer: 63 ÷ 7 = 9 ✓ (63 en 9 herhaal net die gegewe getalle; 567 kom van 63 × 9 vermenigvuldig in plaas van die ontbrekende faktor te vind.)' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde.\n\n□ − 38 = 54', checkMode: 'auto', options: ['92', '54', '38', '16'], correctIndex: 0, explanation: 'Gebruik die inverse — optelling: 54 + 38 = 92. □ = 92. Kontroleer: 92 − 38 = 54 ✓ (54 en 38 herhaal net die gegewe getalle; 16 kom van 54 − 38 af te trek in plaas van op te tel.)' },

        // Blok 2 — Waar/onwaar-oordeel (Maklik-Medium) — posisies 5-8
        { difficulty: 'Easy', question: 'Is die volgende getallesin waar of onwaar?\n\n72 ÷ 8 = 9', checkMode: 'auto', options: ['Onwaar — 72 ÷ 8 = 8, nie 9 nie', 'Waar — 72 ÷ 8 = 9, dus is albei kante gelyk', 'Onwaar — 72 ÷ 8 = 10, nie 9 nie', 'Waar, maar net omdat 9 naby die antwoord is'], correctIndex: 1, explanation: 'Bereken die linkerkant: 72 ÷ 8 = 9. Aangesien 9 = 9, is die getallesin waar. (8 en 10 is delingsfoute; "naby" is nie geldige redenasie nie — die kante moet presies gelyk wees.)' },
        { difficulty: 'Medium', question: 'Is die volgende getallesin waar of onwaar?\n\n9 × 6 = 50', checkMode: 'auto', options: ['Waar — 9 × 6 = 50', 'Onwaar — 9 × 6 = 56, nie 50 nie', 'Onwaar — 9 × 6 = 54, nie 50 nie', 'Waar — 9 × 6 = 54, wat naby genoeg aan 50 is'], correctIndex: 2, explanation: 'Bereken die linkerkant: 9 × 6 = 54. Aangesien 54 ≠ 50, is die getallesin onwaar. (56 is ʼn tafelfout; "naby genoeg" is nie geldige wiskundige redenasie nie.)' },
        { difficulty: 'Medium', question: 'Is die volgende getallesin waar of onwaar?\n\n144 ÷ 12 > 11', checkMode: 'auto', options: ['Onwaar — 144 ÷ 12 = 11, dus kan dit nie groter as 11 wees nie', 'Onwaar — 144 ÷ 12 = 10, wat kleiner is as 11', 'Waar — 144 ÷ 12 = 13, wat groter is as 11', 'Waar — 144 ÷ 12 = 12, wat groter is as 11'], correctIndex: 3, explanation: 'Bereken die linkerkant: 144 ÷ 12 = 12. Aangesien 12 groter is as 11, is die getallesin waar. (10 en 13 is delingsfoute; die eerste opsie verwar die vergelykingsrigting met ʼn verkeerde berekening.)' },
        { difficulty: 'Medium', question: 'Skryf waar of onwaar vir elke getallesin:\n\na) 8 × 7 = 56\nb) 13 × 4 < 50\nc) 76 − 29 > 50', answer: 'a) Waar  b) Onwaar  c) Onwaar', checkMode: 'auto', parts: [ { label: 'a) 8 × 7 = 56', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 8 × 7 = 56. Is 56 = 56? Ja. Ware getallesin.' }, { label: 'b) 13 × 4 < 50', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Linkerkant: 13 × 4 = 52. Is 52 < 50? Nee, 52 is groter as 50. Onware getallesin.' }, { label: 'c) 76 − 29 > 50', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Linkerkant: 76 − 29 = 47. Is 47 > 50? Nee, 47 is kleiner as 50. Onware getallesin.' } ] },

        // Blok 3 — Redenering / foutopsporing (Medium) — posisies 9-11
        { difficulty: 'Medium', question: 'Watter stelling verduidelik korrek die verskil tussen □ + 5 = 9 en die vraag "is 4 + 5 = 9 waar of onwaar?"', checkMode: 'auto', options: ['□ + 5 = 9 benodig ʼn inverse bewerking omdat ʼn waarde ontbreek (9 − 5 = 4); "is 4 + 5 = 9 waar of onwaar?" het geen ontbrekende waarde nie, so jy bereken net en vergelyk.', 'Albei benodig ʼn inverse bewerking, aangesien elke getallesin op dieselfde manier opgelos moet word.', '□ + 5 = 9 het geen ontbrekende waarde nie, maar "is 4 + 5 = 9 waar of onwaar?" wel, so slegs die tweede benodig ʼn inverse bewerking.', 'Geen van beide benodig ʼn inverse bewerking nie, aangesien albei sinne optelling gebruik.'], correctIndex: 0, explanation: '□ + 5 = 9 is ʼn oop getallesin — een waarde is onbekend, so ʼn inverse bewerking (9 − 5 = 4) word benodig. "Is 4 + 5 = 9 waar of onwaar?" het elke getal gegee, so jy bereken bloot 4 + 5 en vergelyk dit met 9 — geen inverse bewerking word benodig nie.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat om te kontroleer of □ = 6 korrek is vir 54 ÷ □ = 9, jy 54 ÷ 9 moet bereken. Watter stelling evalueer hierdie metode korrek?', checkMode: 'auto', options: ['Ja — om 54 deur 9 te deel is presies hoe jy enige antwoord kontroleer.', 'Nee — jy moet □ = 6 terug in die oorspronklike sin vervang: 54 ÷ 6 = 9, wat die antwoord bevestig.', 'Nee — jy moet eerder 9 × 54 bereken om die antwoord te kontroleer.', 'Ja, maar net omdat deling en vermenigvuldiging heeltemal onverwante resultate gee.'], correctIndex: 1, explanation: 'Om ʼn antwoord te kontroleer, vervang die gevonde waarde terug in die oorspronklike getallesin: 54 ÷ 6 = 9, wat ooreenstem, en bevestig dat □ = 6 korrek is. Om 54 ÷ 9 te bereken gee toevallig ook 6, maar die korrekte kontrolemetode is substitusie terug in die oorspronklike sin, nie om ʼn ander uitdrukking te herbereken nie.' },
        { difficulty: 'Medium', question: 'ʼn Klasmaat beweer dat 11 × 8 = 98 ʼn ware getallesin is. Watter stelling evalueer hierdie bewering korrek?', checkMode: 'auto', options: ['Ja, 11 × 8 = 98.', 'Nee, 11 × 8 = 80, nie 98 nie.', 'Nee, 11 × 8 = 88, nie 98 nie.', 'Ja, maar net omdat 98 en 88 tot omtrent dieselfde waarde afrond.'], correctIndex: 2, explanation: 'Bereken 11 × 8 = 88, nie 98 nie. Aangesien 88 ≠ 98, is die getallesin 11 × 8 = 98 onwaar. (80 is ʼn tafelfout; afronding is nooit ʼn geldige manier om te beoordeel of ʼn getallesin waar is nie.)' },

        // Blok 4 — Woordprobleme: omskakel en oplos, een stap (Medium) — posisies 12-16
        { difficulty: 'Medium', question: 'Lerato spaar elke week R15. Watter berekening vind korrek hoeveel sy in 6 weke spaar?', checkMode: 'auto', options: ['15 + 6 = 21', '15 × 6 = 60', '15 × 6 = 105', '15 × 6 = 90'], correctIndex: 3, explanation: 'Getallesin: 15 × 6 = □. 15 × 6 = 90, dus spaar Lerato R90 in 6 weke. (21 tel verkeerdelik op in plaas van te vermenigvuldig; 60 en 105 is tafelfoute.)' },
        { difficulty: 'Medium', question: 'ʼn Fietsryer ry 22 km op Saterdag. Op Sondag ry sy ʼn verdere afstand, en dek altesaam 58 km oor die naweek. Watter berekening vind korrek hoe ver sy op Sondag gery het?', checkMode: 'auto', options: ['58 − 22 = 36', '22 + 58 = 80', '58 − 22 = 46', '58'], correctIndex: 0, explanation: 'Getallesin: 22 + □ = 58. Gebruik die inverse: 58 − 22 = 36, dus het sy 36 km op Sondag gery. (80 tel verkeerdelik op in plaas van af te trek; 46 is ʼn leenfout; 58 herhaal net die totaal sonder om op te los.)' },
        { difficulty: 'Medium', question: 'ʼn Resep vir ʼn pot sop gebruik 6 aartappels vir een pot. Watter berekening vind korrek hoeveel aartappels nodig is om 7 potte te maak?', checkMode: 'auto', options: ['6 + 7 = 13', '6 × 7 = 42', '6 × 7 = 36', '7 − 6 = 1'], correctIndex: 1, explanation: 'Getallesin: 6 × 7 = □. 6 × 7 = 42, dus is 42 aartappels nodig vir 7 potte. (13 tel verkeerdelik op in plaas van te vermenigvuldig; 36 is ʼn tafelfout; 1 trek verkeerdelik af in plaas van te vermenigvuldig.)' },
        { difficulty: 'Medium', question: '117 potlode word gelykop tussen 9 leerders verdeel. Watter berekening vind korrek hoeveel potlode elke leerder kry?', checkMode: 'auto', options: ['117 × 9 = 1053', '117 − 9 = 108', '117 ÷ 9 = 13', '117 ÷ 9 = 12'], correctIndex: 2, explanation: 'Getallesin: 117 ÷ 9 = □. 117 ÷ 9 = 13, dus kry elke leerder 13 potlode. (1053 vermenigvuldig verkeerdelik in plaas van te deel; 108 trek verkeerdelik af; 12 is ʼn delingsfout.)' },
        { difficulty: 'Medium', question: 'ʼn Minibustaxi het 68 passasiers wat gedurende ʼn oggendroete opklim. By die taxistaanplek klim 24 passasiers af.\n\na) Skryf die getallesin vir hierdie probleem. Gebruik □ vir die onbekende waarde.\nb) Los dit op om te vind hoeveel passasiers steeds op die taxi is. Skryf slegs die getal.\nc) Verduidelik waarom aftrekking hier die korrekte bewerking is, eerder as deling.', answer: 'a) 68 − 24 = □  b) 44  c) Omdat passasiers afklim (ʼn groep word van ʼn totaal verwyder), verminder die totaal met daardie vaste groepgrootte, so aftrekking modelleer dit korrek — deling sou slegs van toepassing wees as die passasiers in gelyke groepe verdeel is, wat nie hier gebeur nie.', parts: [ { label: 'a) Getallesin', correctAnswer: '68-24=□', correctAnswers: ['68-24=□', '68-24=?', '68-24=n', '68−24=□'], explanation: 'Die taxi begin met 68 passasiers en 24 klim af (afgetrek).\nGetallesin: 68 − 24 = □', checkMode: 'auto' }, { label: 'b) Oorblywende passasiers', correctAnswer: '44', explanation: '68 − 24 = 44\nDaar is 44 passasiers steeds op die taxi ✓', checkMode: 'auto' }, { label: 'c) Redenasie', answer: 'Wanneer passasiers afklim, word ʼn hele groep van die totaal verwyder, so aftrekking modelleer die afname korrek — deling sou eerder gebruik word as die totaal in gelyke groepe verdeel is.', explanation: 'Om ʼn groep van ʼn totaal te verwyder vereis aftrekking, nie deling nie, aangesien niks in gelyke dele verdeel word nie.', checkMode: 'self' } ], checkMode: 'auto' },

        // Blok 5 — Meervoudige-stap en vergelykings (Moeilik) — posisies 17-19
        { difficulty: 'Hard', question: 'Amahle het R200. Sy koop 8 items wat elk R15 kos. Watter berekening vind korrek hoeveel geld sy oor het?', checkMode: 'auto', options: ['200 − 8 × 15 bereken as (200 − 8) × 15 = 2880', '8 × 15 = 120, dan 200 + 120 = 320', '8 × 15 = 105, dan 200 − 105 = 95', '8 × 15 = 120, dan 200 − 120 = 80'], correctIndex: 3, explanation: '8 × 15 = 120, dan 200 − 120 = 80, dus het Amahle R80 oor. (2880 gebruik die verkeerde bewerkingsvolgorde; 320 tel verkeerdelik op in plaas van af te trek; 95 is ʼn tafelfout.)' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee getallesinne is waar?\n\nA) 5 × 9 + 8 = 53\nB) 6 × 7 − 9 = 32', checkMode: 'auto', options: ['Slegs A is waar', 'Slegs B is waar', 'Beide A en B is waar', 'Nóg A nóg B is waar'], correctIndex: 0, explanation: 'A) 5 × 9 = 45, dan 45 + 8 = 53. Dit stem ooreen, dus is A waar. B) 6 × 7 = 42, dan 42 − 9 = 33, nie 32 nie, dus is B onwaar. Slegs A is waar.' },
        { difficulty: 'Hard', question: 'Nomvula en Kagiso kry elkeen ʼn ander oop getallesin om op te los: Nomvula het □ − 18 = 25 en Kagiso het □ − 18 = 32. Kagiso kyk na Nomvula se werk en kopieer haar antwoord van □ = 43 vir sy eie sin. Watter stelling evalueer korrek wat Kagiso moes gedoen het?', checkMode: 'auto', options: ['Kagiso is korrek om die antwoord te kopieer, aangesien albei getallesinne dieselfde ontbrekende-waarde-boks gebruik.', 'Kagiso is verkeerd om die antwoord te kopieer — sy sin het ʼn ander regterkant (32, nie 25 nie), so hy moet sy eie oplos: 32 + 18 = 50.', 'Kagiso is verkeerd omdat hy vermenigvuldiging in plaas van optelling moes gebruik het om sy antwoord te vind.', 'Kagiso is korrek, en die korrekte antwoord vir albei sinne is 43.'], correctIndex: 1, explanation: 'Kagiso se getallesin is nie dieselfde as Nomvula s\'n nie — die regterkant is anders (32 in plaas van 25) — so om haar antwoord te kopieer maak nie sy sin waar nie. Deur die inverse bewerking op sy eie sin te gebruik: 32 + 18 = 50, dus □ = 50 vir Kagiso. (Kontroleer: 50 − 18 = 32 ✓)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die vind van en redenering oor ontbrekende waardes in getallesinne baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en sleutelwoorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
