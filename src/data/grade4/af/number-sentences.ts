import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Getalsinne',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS ʼN GETALSIN?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-number-sentence',
      title: 'Wat is ʼn Getalsin?',
      icon: '🔣',
      explanation: `<p style="margin-bottom:18px;">ʼn <strong>Getalsin</strong> is ʼn wiskundige stelling wat <span style="color:#1e40af;font-weight:700;">getalle</span>, <span style="color:#dc2626;font-weight:700;">bewerkingsimbole</span>, en ʼn <span style="color:#16a34a;font-weight:700;">vergelykingsimbool</span> gebruik om ʼn verwantskap te toon. Net soos ʼn sin in Afrikaans jou iets vertel, vertel ʼn getalsin jou ʼn wiskundige feit.</p>

<p style="margin-bottom:12px;font-weight:600;">Twee soorte getalsinne:</p>

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
          question: 'Is 4 + 5 = 9 ʼn ware getalsin?',
          answer: 'Ja, dit is waar.',
          steps: [
            `Bereken die <strong>linkerkant</strong>: <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">5</span> = <span style="color:#1e40af;font-weight:700;">9</span>`,
            `Vergelyk met die <strong>regterkant</strong>: is <span style="color:#1e40af;font-weight:700;">9</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">9</span>? <strong>Ja</strong> — albei kante is gelyk.`,
            `<span style="color:#16a34a;font-weight:700;">✓ Ware getalsin.</span> &nbsp; <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">5</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">9</span> is korrek.`,
          ],
        },
        {
          question: 'Is 3 × 4 > 10 ʼn ware getalsin?',
          answer: 'Waar.',
          steps: [
            `Bereken die <strong>linkerkant</strong>: <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#1e40af;font-weight:700;">12</span>`,
            `Vergelyk: is <span style="color:#1e40af;font-weight:700;">12</span> <span style="color:#16a34a;font-weight:700;">&gt;</span> <span style="color:#1e40af;font-weight:700;">10</span>? <strong>Ja</strong> — 12 is groter as 10.`,
            `<span style="color:#16a34a;font-weight:700;">✓ Ware getalsin.</span> &nbsp; <span style="color:#1e40af;font-weight:700;">3</span> <span style="color:#dc2626;font-weight:700;">×</span> <span style="color:#1e40af;font-weight:700;">4</span> <span style="color:#16a34a;font-weight:700;">&gt;</span> <span style="color:#1e40af;font-weight:700;">10</span> want 12 &gt; 10.`,
          ],
        },
      ],

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OOP GETALSINNE EN ONTBREKENDE WAARDES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'open-number-sentences',
      title: 'Oop Getalsinne en Ontbrekende Waardes',
      icon: '🔲',
      explanation: `<p style="margin-bottom:18px;">ʼn <strong>Oop getalsin</strong> is ʼn getalsin wat ʼn <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 7px;color:#ea580c;font-weight:700;">□</span> of ʼn oop spasie in die plek van ʼn ontbrekende waarde het. Jou taak is om die getal te vind wat die sin waar maak.</p>

<p style="margin-bottom:12px;font-weight:600;">Voorbeelde van oop getalsinne:</p>

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
  <div style="color:#374151;font-size:14px;">Nadat jy die ontbrekende waarde gevind het, vervang dit terug in die oorspronklike getalsin om seker te maak dit is waar. As albei kante gelyk is, is jou antwoord korrek.</div>
</div>`,

      videoPlaceholder: 'Kort video wat wys hoe om ontbrekende waardes in oop getalsinne te vind deur inverse bewerkings te gebruik',

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

      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — WOORDPROBLEME OMSKAKEL NA GETALSINNE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translating-word-problems',
      title: 'Woordprobleme Omskakel na Getalsinne',
      icon: '📖',
      explanation: `<p style="margin-bottom:18px;">Elke woordprobleem steek ʼn getalsin weg. As jy dit kan vind, word die probleem baie makliker om op te los. Die geheim is om te soek na <span style="color:#ea580c;font-weight:700;">sleutelwoorde</span> wat jou vertel watter bewerking om te gebruik.</p>

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
    <div><strong>Skryf</strong> die getalsin met behulp van <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:1px 6px;color:#ea580c;font-weight:700;">□</span> vir die onbekende waarde.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">4</span>
    <div><strong>Los op</strong> met behulp van ʼn inverse bewerking om die ontbrekende waarde te vind.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">5</span>
    <div><strong>Kontroleer</strong> — vervang jou antwoord terug en maak seker die getalsin is waar.</div>
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

      videoPlaceholder: 'Kort video wat wys hoe om woordprobleme stap vir stap in getalsinne om te skakel',
      diagramPlaceholder: 'Stap-vir-stap vloeidiagram wat wys hoe om van ʼn woordprobleem na ʼn getalsin na ʼn oplossing te gaan',

      workedExamples: [
        {
          question: 'Thabo het 45 albasters. Hy <span style="color:#ea580c;font-weight:700;">gee ʼn paar</span> vir sy vriend en het 28 <span style="color:#ea580c;font-weight:700;">oor</span>. Hoeveel het hy weggegee?',
          answer: '□ = 17. Thabo het 17 albasters weggegee.',
          steps: [
            `Sleutelwoorde: "<span style="color:#ea580c;font-weight:700;">gee ʼn paar</span>" en "<span style="color:#ea580c;font-weight:700;">oor</span>" — dit dui op <strong>aftrekking</strong>. Thabo begin met 45, gee ʼn paar weg, en 28 bly oor.`,
            `Skryf die getalsin: <span style="color:#1e40af;font-weight:700;">45</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">28</span>`,
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
            `Skryf die getalsin: <span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">14</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">31</span>`,
            `Gebruik die inverse bewerking: <span style="color:#1e40af;font-weight:700;">31</span> <span style="color:#dc2626;font-weight:700;">−</span> <span style="color:#1e40af;font-weight:700;">14</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>`,
            `<span style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:4px;padding:2px 8px;color:#ea580c;font-weight:700;">□</span> = <span style="color:#ea580c;font-weight:700;font-size:18px;">17</span>. Daar was <strong>17 potlode</strong> aan die begin.`,
            `Kontroleer: <span style="color:#ea580c;font-weight:700;">17</span> <span style="color:#dc2626;font-weight:700;">+</span> <span style="color:#1e40af;font-weight:700;">14</span> <span style="color:#16a34a;font-weight:700;">=</span> <span style="color:#1e40af;font-weight:700;">31</span> <span style="color:#16a34a;font-weight:700;">✓</span>`,
          ],
        },
      ],

      practiceQuestions: [],
    },
  ],

  topicPractice: [
    // ── AFDELING 1 — Wat is ʼn Getalsin? ──────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Is die volgende getalsin waar of onwaar?\n\n' +
        '6 + 7 = 13\n\n' +
        'Skryf waar of onwaar.',
      answer: 'waar',
      correctAnswer: 'waar',
      correctAnswers: ['waar', 'ja'],
      explanation:
        'Bereken die linkerkant: 6 + 7 = 13.\n' +
        'Vergelyk met die regterkant: 13 = 13 ✓\n' +
        'Albei kante is gelyk — dit is ʼn ware getalsin.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skryf waar of onwaar vir elke getalsin:\n\n' +
        'a) 4 × 5 > 18\n' +
        'b) 24 ÷ 6 = 5\n' +
        'c) 3 + 9 < 15',
      answer: 'a) Waar  b) Onwaar  c) Waar',
      parts: [
        {
          label: 'a) 4 × 5 > 18',
          correctAnswer: 'waar',
          correctAnswers: ['waar', 'ja'],
          explanation:
            'Bereken die linkerkant: 4 × 5 = 20.\n' +
            'Is 20 > 18? Ja — 20 is groter as 18.\n' +
            'Ware getalsin.',
        },
        {
          label: 'b) 24 ÷ 6 = 5',
          correctAnswer: 'onwaar',
          correctAnswers: ['onwaar', 'nee'],
          explanation:
            'Bereken die linkerkant: 24 ÷ 6 = 4.\n' +
            'Is 4 = 5? Nee — 4 is nie gelyk aan 5 nie.\n' +
            'Onware getalsin.',
        },
        {
          label: 'c) 3 + 9 < 15',
          correctAnswer: 'waar',
          correctAnswers: ['waar', 'ja'],
          explanation:
            'Bereken die linkerkant: 3 + 9 = 12.\n' +
            'Is 12 < 15? Ja — 12 is kleiner as 15.\n' +
            'Ware getalsin.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Skryf jou eie ware getalsin wat elk van hierdie simbole presies een keer gebruik: ×, =, >\n\n' +
        'Wys jou werk om te bewys dit is waar.',
      answer:
        'Enige geldige getalsin is korrek, byvoorbeeld:\n\n' +
        '3 × 4 > 10\n\n' +
        'Werk: 3 × 4 = 12 en 12 > 10. ✓\n\n' +
        'Kontroleer dat:\n' +
        '• Jy × een keer, = een keer, en > een keer gebruik het.\n' +
        '• Die linkerkant van > groter is as die regterkant.\n' +
        '• Albei dele van die = gelyk is.',
    },

    // ── AFDELING 2 — Oop Getalsinne en Ontbrekende Waardes ───────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n' +
        '□ + 8 = 15',
      answer: '7',
      correctAnswer: '7',
      explanation:
        'Gebruik die inverse bewerking — aftrekking:\n' +
        '15 − 8 = 7\n\n' +
        '□ = 7\n' +
        'Kontroleer: 7 + 8 = 15 ✓',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Vind die ontbrekende waarde in elke getalsin. Skryf slegs die getal.\n\n' +
        'a) □ × 6 = 42\n' +
        'b) 35 − □ = 18\n' +
        'c) □ ÷ 4 = 9',
      answer: 'a) 7  b) 17  c) 36',
      parts: [
        {
          label: 'a) □ × 6 = 42',
          correctAnswer: '7',
          explanation:
            'Gebruik die inverse — deling: 42 ÷ 6 = 7.\n' +
            '□ = 7\n' +
            'Kontroleer: 7 × 6 = 42 ✓',
        },
        {
          label: 'b) 35 − □ = 18',
          correctAnswer: '17',
          explanation:
            'Gebruik die inverse — aftrekking: 35 − 18 = 17.\n' +
            '□ = 17\n' +
            'Kontroleer: 35 − 17 = 18 ✓',
        },
        {
          label: 'c) □ ÷ 4 = 9',
          correctAnswer: '36',
          explanation:
            'Gebruik die inverse — vermenigvuldiging: 9 × 4 = 36.\n' +
            '□ = 36\n' +
            'Kontroleer: 36 ÷ 4 = 9 ✓',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Vind die ontbrekende waarde in die getalsin, skryf dan die inverse bewerking om jou antwoord te kontroleer.\n\n' +
        '48 ÷ □ = 6\n\n' +
        'a) Wat is die ontbrekende waarde? Skryf slegs die getal.\n' +
        'b) Skryf die inverse bewerking as ʼn getalsin.',
      answer: 'a) 8  b) 6 × 8 = 48',
      parts: [
        {
          label: 'a) Ontbrekende waarde',
          correctAnswer: '8',
          explanation:
            'Gebruik die inverse — vermenigvuldiging: 48 ÷ 6 = 8.\n' +
            '□ = 8\n' +
            'Kontroleer: 48 ÷ 8 = 6 ✓',
        },
        {
          label: 'b) Inverse bewerking',
          correctAnswer: '6x8=48',
          correctAnswers: ['6x8=48', '8x6=48', '6×8=48', '8×6=48'],
          explanation:
            'Deling en vermenigvuldiging is inverse bewerkings.\n' +
            '48 ÷ □ = 6, dus is die inverse 6 × 8 = 48 (of 8 × 6 = 48).',
        },
      ],
    },

    // ── AFDELING 3 — Woordprobleme Omskakel na Getalsinne ─────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skryf ʼn getalsin en los dit op:\n\n' +
        'Lerato het 24 lekkers. Sy eet ʼn paar en het 15 oor. Hoeveel het sy geëet?\n\n' +
        'a) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\n' +
        'b) Los dit op. Skryf slegs die getal.',
      answer: 'a) 24 − □ = 15  b) 9',
      parts: [
        {
          label: 'a) Getalsin',
          correctAnswer: '24-□=15',
          correctAnswers: ['24-□=15', '24−□=15', '24-?=15', '24-n=15'],
          explanation:
            'Lerato begin met 24, eet ʼn paar (□), en 15 bly oor.\n' +
            'Getalsin: 24 − □ = 15',
        },
        {
          label: 'b) Ontbrekende waarde',
          correctAnswer: '9',
          explanation:
            'Gebruik die inverse — aftrekking: 24 − 15 = 9.\n' +
            '□ = 9\n' +
            'Kontroleer: 24 − 9 = 15 ✓',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skryf ʼn getalsin en los dit op:\n\n' +
        'ʼn Boks het ʼn aantal boeke. Nadat 17 meer bygevoeg is, is daar altesaam 43 boeke. Hoeveel boeke was in die boks aan die begin?\n\n' +
        'a) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\n' +
        'b) Los op met inverse bewerkings. Skryf die berekening.\n' +
        'c) Kontroleer jou antwoord. Skryf die kontrole-getalsin.',
      answer: 'a) □ + 17 = 43  b) 43 − 17 = 26  c) 26 + 17 = 43',
      parts: [
        {
          label: 'a) Getalsin',
          correctAnswer: '□+17=43',
          correctAnswers: ['□+17=43', '?+17=43', 'n+17=43', '17+□=43', '17+?=43', '17+n=43'],
          explanation:
            'ʼn Onbekende getal plus 17 is gelyk aan 43.\n' +
            'Getalsin: □ + 17 = 43',
        },
        {
          label: 'b) Inverse berekening',
          correctAnswer: '43-17=26',
          correctAnswers: ['43-17=26', '43−17=26', '26'],
          explanation:
            'Optelling word deur aftrekking ongedaan gemaak: 43 − 17 = 26.\n' +
            '□ = 26. Daar was 26 boeke aan die begin.',
        },
        {
          label: 'c) Kontrole',
          correctAnswer: '26+17=43',
          correctAnswers: ['26+17=43', '17+26=43', '43', 'waar'],
          explanation:
            'Vervang terug: 26 + 17 = 43 ✓\n' +
            'Die antwoord is korrek.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Skryf ʼn getalsin en los dit op:\n\n' +
        'Sipho verdien elke dag dieselfde bedrag geld. Na 6 dae het hy R168 verdien. Hoeveel verdien hy per dag?\n\n' +
        'a) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\n' +
        'b) Los dit op. Skryf slegs die getal sonder die R-simbool.\n' +
        'c) As hy 3 dae langer werk, hoeveel sal hy altesaam verdien het? Skryf slegs die getal sonder die R-simbool.',
      answer: 'a) 6 × □ = 168  b) 28  c) 252',
      parts: [
        {
          label: 'a) Getalsin',
          correctAnswer: '6x□=168',
          correctAnswers: ['6x□=168', '6x?=168', '□x6=168', '?x6=168', '6×□=168', '□×6=168'],
          explanation:
            '6 dae keer die daaglikse bedrag is gelyk aan R168.\n' +
            'Getalsin: 6 × □ = 168',
        },
        {
          label: 'b) Daaglikse verdienste (R…)',
          correctAnswer: '28',
          correctAnswers: ['28', 'r28'],
          explanation:
            'Gebruik die inverse — deling: 168 ÷ 6 = 28.\n' +
            '□ = 28. Sipho verdien R28 per dag.\n' +
            'Kontroleer: 6 × 28 = 168 ✓',
        },
        {
          label: 'c) Totaal na 3 dae langer (R…)',
          correctAnswer: '252',
          correctAnswers: ['252', 'r252'],
          explanation:
            'Hy het reeds R168. Hy werk 3 dae langer teen R28 per dag:\n' +
            '3 × 28 = 84\n' +
            '168 + 84 = R252',
        },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 19, message: 'Volpunte! Jy het getalsinne baasgeraak.' },
    { minScore: 15, message: 'Uitstekende werk! Jy is amper daar — gaan die vrae wat jy verkeerd gehad het weer deur.' },
    { minScore: 11, message: 'Goeie poging! Gaan terug en lees deur die studiegids vir die afdelings waarmee jy gesukkel het.' },
    { minScore: 0, message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
