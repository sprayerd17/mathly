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

      openQuestions: [],
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

      openQuestions: [],
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

      openQuestions: [],
    },
  ],


  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — GRONDSLAE: OOP GETALSINNE, EEN BEWERKING (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondslae',
      questions: [
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 5 = 12', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — aftrekking: 12 − 5 = 7.\n□ = 7\nKontroleer: 7 + 5 = 12 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 9 = 17', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Gebruik die inverse — aftrekking: 17 − 9 = 8.\n□ = 8\nKontroleer: 8 + 9 = 17 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 14 = 23', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Gebruik die inverse — aftrekking: 23 − 14 = 9.\n□ = 9\nKontroleer: 9 + 14 = 23 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 18 = 30', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Gebruik die inverse — aftrekking: 30 − 18 = 12.\n□ = 12\nKontroleer: 12 + 18 = 30 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 27 = 45', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Gebruik die inverse — aftrekking: 45 − 27 = 18.\n□ = 18\nKontroleer: 18 + 27 = 45 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n9 − □ = 4', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Gebruik die inverse — aftrekking: 9 − 4 = 5.\n□ = 5\nKontroleer: 9 − 5 = 4 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n15 − □ = 8', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — aftrekking: 15 − 8 = 7.\n□ = 7\nKontroleer: 15 − 7 = 8 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n22 − □ = 13', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Gebruik die inverse — aftrekking: 22 − 13 = 9.\n□ = 9\nKontroleer: 22 − 9 = 13 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ − 6 = 9', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: 'Gebruik die inverse — optelling: 9 + 6 = 15.\n□ = 15\nKontroleer: 15 − 6 = 9 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ − 14 = 19', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: 'Gebruik die inverse — optelling: 19 + 14 = 33.\n□ = 33\nKontroleer: 33 − 14 = 19 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ − 25 = 17', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Gebruik die inverse — optelling: 17 + 25 = 42.\n□ = 42\nKontroleer: 42 − 25 = 17 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 3 = 15', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Gebruik die inverse — deling: 15 ÷ 3 = 5.\n□ = 5\nKontroleer: 5 × 3 = 15 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 4 = 28', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — deling: 28 ÷ 4 = 7.\n□ = 7\nKontroleer: 7 × 4 = 28 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 6 = 42', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — deling: 42 ÷ 6 = 7.\n□ = 7\nKontroleer: 7 × 6 = 42 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 7 = 63', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Gebruik die inverse — deling: 63 ÷ 7 = 9.\n□ = 9\nKontroleer: 9 × 7 = 63 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 8 = 56', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — deling: 56 ÷ 8 = 7.\n□ = 7\nKontroleer: 7 × 8 = 56 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n5 × □ = 35', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — deling: 35 ÷ 5 = 7.\n□ = 7\nKontroleer: 5 × 7 = 35 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ ÷ 2 = 8', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Gebruik die inverse — vermenigvuldiging: 8 × 2 = 16.\n□ = 16\nKontroleer: 16 ÷ 2 = 8 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ ÷ 3 = 9', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Gebruik die inverse — vermenigvuldiging: 9 × 3 = 27.\n□ = 27\nKontroleer: 27 ÷ 3 = 9 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ ÷ 5 = 7', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Gebruik die inverse — vermenigvuldiging: 7 × 5 = 35.\n□ = 35\nKontroleer: 35 ÷ 5 = 7 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n24 ÷ □ = 6', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Gebruik die inverse — vermenigvuldiging: 6 × 4 = 24.\n□ = 4\nKontroleer: 24 ÷ 4 = 6 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n36 ÷ □ = 4', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Gebruik die inverse — vermenigvuldiging: 4 × 9 = 36.\n□ = 9\nKontroleer: 36 ÷ 9 = 4 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n48 ÷ □ = 8', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Gebruik die inverse — vermenigvuldiging: 8 × 6 = 48.\n□ = 6\nKontroleer: 48 ÷ 6 = 8 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n63 ÷ □ = 9', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — vermenigvuldiging: 9 × 7 = 63.\n□ = 7\nKontroleer: 63 ÷ 7 = 9 ✓' },
        { difficulty: 'Hard', question: 'Verduidelik, in jou eie woorde, waarom jy aftrekking gebruik om die ontbrekende waarde in □ + 6 = 13 te vind, maar jy gebruik optelling om die ontbrekende waarde in □ − 6 = 13 te vind.', answer: 'Optelling en aftrekking is inverse bewerkings — hulle maak mekaar ongedaan. In □ + 6 = 13 word ʼn getal bygetel, so deur 6 van 13 af te trek, word die optelling ongedaan gemaak en die ontbrekende waarde (7) onthul. In □ − 6 = 13 word ʼn getal afgetrek, so deur 6 by 13 te tel, word die aftrekking ongedaan gemaak en die ontbrekende waarde (19) onthul. Deur die inverse bewerking te gebruik, word altyd "ongedaan gemaak" wat gedoen is om die ontbrekende waarde te isoleer.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het die vind van ontbrekende waardes in getalsinne baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Jy is selfversekerd met inverse bewerkings — gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — GROTER GETALLE EN WAAR/ONWAAR GETALSINNE (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Groter Getalle en Waar of Onwaar',
      questions: [
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 35 = 62', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Gebruik die inverse — aftrekking: 62 − 35 = 27.\n□ = 27\nKontroleer: 27 + 35 = 62 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 48 = 91', answer: '43', checkMode: 'auto', correctAnswer: '43', explanation: 'Gebruik die inverse — aftrekking: 91 − 48 = 43.\n□ = 43\nKontroleer: 43 + 48 = 91 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 56 = 100', answer: '44', checkMode: 'auto', correctAnswer: '44', explanation: 'Gebruik die inverse — aftrekking: 100 − 56 = 44.\n□ = 44\nKontroleer: 44 + 56 = 100 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n76 − □ = 29', answer: '47', checkMode: 'auto', correctAnswer: '47', explanation: 'Gebruik die inverse — aftrekking: 76 − 29 = 47.\n□ = 47\nKontroleer: 76 − 47 = 29 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n93 − □ = 47', answer: '46', checkMode: 'auto', correctAnswer: '46', explanation: 'Gebruik die inverse — aftrekking: 93 − 47 = 46.\n□ = 46\nKontroleer: 93 − 46 = 47 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ − 38 = 54', answer: '92', checkMode: 'auto', correctAnswer: '92', explanation: 'Gebruik die inverse — optelling: 54 + 38 = 92.\n□ = 92\nKontroleer: 92 − 38 = 54 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ − 65 = 27', answer: '92', checkMode: 'auto', correctAnswer: '92', explanation: 'Gebruik die inverse — optelling: 27 + 65 = 92.\n□ = 92\nKontroleer: 92 − 65 = 27 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 9 = 81', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Gebruik die inverse — deling: 81 ÷ 9 = 9.\n□ = 9\nKontroleer: 9 × 9 = 81 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 12 = 60', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Gebruik die inverse — deling: 60 ÷ 12 = 5.\n□ = 5\nKontroleer: 5 × 12 = 60 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n11 × □ = 99', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Gebruik die inverse — deling: 99 ÷ 11 = 9.\n□ = 9\nKontroleer: 11 × 9 = 99 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ ÷ 6 = 12', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Gebruik die inverse — vermenigvuldiging: 12 × 6 = 72.\n□ = 72\nKontroleer: 72 ÷ 6 = 12 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ ÷ 7 = 11', answer: '77', checkMode: 'auto', correctAnswer: '77', explanation: 'Gebruik die inverse — vermenigvuldiging: 11 × 7 = 77.\n□ = 77\nKontroleer: 77 ÷ 7 = 11 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n84 ÷ □ = 7', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Gebruik die inverse — vermenigvuldiging: 7 × 12 = 84.\n□ = 12\nKontroleer: 84 ÷ 12 = 7 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n96 ÷ □ = 8', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Gebruik die inverse — vermenigvuldiging: 8 × 12 = 96.\n□ = 12\nKontroleer: 96 ÷ 12 = 8 ✓' },
        { difficulty: 'Easy', question: 'Is die volgende getalsin waar of onwaar?\n\n7 + 8 = 16\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 7 + 8 = 15.\nIs 15 = 16? Nee — 15 is nie gelyk aan 16 nie.\nOnware getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n9 × 6 = 50\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 9 × 6 = 54.\nIs 54 = 50? Nee — 54 is nie gelyk aan 50 nie.\nOnware getalsin.' },
        { difficulty: 'Easy', question: 'Is die volgende getalsin waar of onwaar?\n\n45 ÷ 5 = 9\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 45 ÷ 5 = 9.\nIs 9 = 9? Ja — albei kante is gelyk.\nWare getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n12 + 19 = 30\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 12 + 19 = 31.\nIs 31 = 30? Nee — 31 is nie gelyk aan 30 nie.\nOnware getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n8 × 7 > 50\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 8 × 7 = 56.\nIs 56 > 50? Ja — 56 is groter as 50.\nWare getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n100 − 37 = 63\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 100 − 37 = 63.\nIs 63 = 63? Ja — albei kante is gelyk.\nWare getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n13 × 4 < 50\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 13 × 4 = 52.\nIs 52 < 50? Nee — 52 is groter as 50, nie kleiner nie.\nOnware getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n72 ÷ 8 = 9\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 72 ÷ 8 = 9.\nIs 9 = 9? Ja — albei kante is gelyk.\nWare getalsin.' },
        { difficulty: 'Hard', question: 'Is die volgende getalsin waar of onwaar?\n\n144 ÷ 12 > 11\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 144 ÷ 12 = 12.\nIs 12 > 11? Ja — 12 is groter as 11.\nWare getalsin.' },
        { difficulty: 'Hard', question: 'Is die volgende getalsin waar of onwaar?\n\n11 × 8 > 85\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 11 × 8 = 88.\nIs 88 > 85? Ja — 88 is groter as 85.\nWare getalsin.' },
        { difficulty: 'Hard', question: 'Skryf waar of onwaar vir elke getalsin:\n\na) 6 × 9 = 54\nb) 72 − 28 < 50\nc) 7 × 9 > 60', answer: 'a) Waar  b) Waar  c) Waar', checkMode: 'auto', parts: [ { label: 'a) 6 × 9 = 54', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 6 × 9 = 54. Is 54 = 54? Ja. Ware getalsin.' }, { label: 'b) 72 − 28 < 50', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 72 − 28 = 44. Is 44 < 50? Ja. Ware getalsin.' }, { label: 'c) 7 × 9 > 60', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 7 × 9 = 63. Is 63 > 60? Ja. Ware getalsin.' } ] },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue met groter getalle en waar/onwaar-getalsinne werk.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor ware en onware getalsinne weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — WOORDPROBLEME OMSKAKEL NA GETALSINNE (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Woordprobleme',
      questions: [
        { difficulty: 'Easy', question: 'Thabo het 34 plakkers. Hy koop nog 19. Skryf ʼn getalsin en los dit op om te vind hoeveel plakkers hy altesaam het.\n\nSkryf slegs die totale getal.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Getalsin: 34 + 19 = □\n34 + 19 = 53\nThabo het altesaam 53 plakkers ✓' },
        { difficulty: 'Easy', question: 'Sipho het 50 lekkers. Hy gee ʼn paar weg en het 22 oor. Skryf ʼn getalsin en los dit op om te vind hoeveel hy weggegee het.\n\nSkryf slegs die getal.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Getalsin: 50 − □ = 22\nGebruik die inverse: 50 − 22 = 28\nSipho het 28 lekkers weggegee ✓' },
        { difficulty: 'Medium', question: 'Lerato spaar elke week R15. Skryf ʼn getalsin en los dit op om te vind hoeveel sy in 6 weke spaar.\n\nSkryf slegs die getal sonder die R-simbool.', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', 'r90'], explanation: 'Getalsin: 15 × 6 = □\n15 × 6 = 90\nLerato spaar R90 in 6 weke ✓' },
        { difficulty: 'Medium', question: 'Amahle het 96 krale. Sy deel dit gelykop tussen 8 vriende. Skryf ʼn getalsin en los dit op om te vind hoeveel krale elke vriend kry.\n\nSkryf slegs die getal.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Getalsin: 96 ÷ 8 = □\n96 ÷ 8 = 12\nElke vriend kry 12 krale ✓' },
        { difficulty: 'Medium', question: 'ʼn Boks het ʼn aantal appels. Nadat 27 meer bygevoeg is, is daar altesaam 63 appels. Skryf ʼn getalsin en los dit op om te vind hoeveel appels aan die begin in die boks was.\n\nSkryf slegs die getal.', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Getalsin: □ + 27 = 63\nGebruik die inverse: 63 − 27 = 36\nDaar was 36 appels aan die begin ✓' },
        { difficulty: 'Medium', question: '48 stoele word in rye van 6 gerangskik. Skryf ʼn getalsin en los dit op om te vind hoeveel rye daar is.\n\nSkryf slegs die getal.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Getalsin: □ × 6 = 48\nGebruik die inverse: 48 ÷ 6 = 8\nDaar is 8 rye ✓' },
        { difficulty: 'Easy', question: 'Thabo lees 23 bladsye van ʼn boek, en lees dan nog 18 bladsye. Skryf ʼn getalsin en los dit op om die totale getal bladsye te vind wat hy gelees het.\n\nSkryf slegs die getal.', answer: '41', checkMode: 'auto', correctAnswer: '41', explanation: 'Getalsin: 23 + 18 = □\n23 + 18 = 41\nThabo het altesaam 41 bladsye gelees ✓' },
        { difficulty: 'Medium', question: '84 lemoene word in bokse van 7 gepak. Skryf ʼn getalsin en los dit op om te vind hoeveel bokse nodig is.\n\nSkryf slegs die getal.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Getalsin: 84 ÷ 7 = □\n84 ÷ 7 = 12\n12 bokse is nodig ✓' },
        { difficulty: 'Medium', question: 'Sipho het R120. Hy spandeer ʼn bedrag geld en het R45 oor. Skryf ʼn getalsin en los dit op om te vind hoeveel hy spandeer het.\n\nSkryf slegs die getal sonder die R-simbool.', answer: '75', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', 'r75'], explanation: 'Getalsin: 120 − □ = 45\nGebruik die inverse: 120 − 45 = 75\nSipho het R75 spandeer ✓' },
        { difficulty: 'Medium', question: 'Daar is 9 spanne in ʼn kompetisie, elk met 8 spelers. Skryf ʼn getalsin en los dit op om die totale getal spelers te vind.\n\nSkryf slegs die getal.', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Getalsin: 9 × 8 = □\n9 × 8 = 72\nDaar is altesaam 72 spelers ✓' },
        { difficulty: 'Medium', question: 'Lerato het 145 albasters. Sy gee 67 vir haar broer. Skryf ʼn getalsin en los dit op om te vind hoeveel albasters sy oor het.\n\nSkryf slegs die getal.', answer: '78', checkMode: 'auto', correctAnswer: '78', explanation: 'Getalsin: 145 − 67 = □\n145 − 67 = 78\nLerato het 78 albasters oor ✓' },
        { difficulty: 'Medium', question: 'Amahle verdien R12 per dag. Skryf ʼn getalsin en los dit op om te vind hoeveel sy in 9 dae verdien.\n\nSkryf slegs die getal sonder die R-simbool.', answer: '108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', 'r108'], explanation: 'Getalsin: 12 × 9 = □\n12 × 9 = 108\nAmahle verdien R108 in 9 dae ✓' },
        { difficulty: 'Hard', question: '117 potlode word gelykop tussen 9 leerders verdeel. Skryf ʼn getalsin en los dit op om te vind hoeveel potlode elke leerder kry.\n\nSkryf slegs die getal.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'Getalsin: 117 ÷ 9 = □\n117 ÷ 9 = 13\nElke leerder kry 13 potlode ✓' },
        { difficulty: 'Medium', question: 'ʼn Boks bevat 56 eiers, 8 per houertjie verpak. Skryf ʼn getalsin en los dit op om te vind hoeveel houertjies gebruik word.\n\nSkryf slegs die getal.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Getalsin: 56 ÷ 8 = □\n56 ÷ 8 = 7\n7 houertjies word gebruik ✓' },
        { difficulty: 'Medium', question: 'Thabo het 215 seëls. Hy ontvang nog 85. Skryf ʼn getalsin en los dit op om die totale getal seëls te vind.\n\nSkryf slegs die getal.', answer: '300', checkMode: 'auto', correctAnswer: '300', explanation: 'Getalsin: 215 + 85 = □\n215 + 85 = 300\nThabo het altesaam 300 seëls ✓' },
        { difficulty: 'Easy', question: 'Skryf ʼn getalsin en los dit op:\n\nʼn Boer het 42 hoenders. Hy koop nog 16 hoenders. Hoeveel hoenders het hy altesaam?\n\na) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\nb) Los dit op. Skryf slegs die getal.', answer: 'a) 42 + 16 = □  b) 58', parts: [ { label: 'a) Getalsin', correctAnswer: '42+16=□', correctAnswers: ['42+16=□', '42+16=?', '42+16=n', '16+42=□', '16+42=?'], explanation: 'Die boer begin met 42 hoenders en koop nog 16.\nGetalsin: 42 + 16 = □' }, { label: 'b) Totaal', correctAnswer: '58', explanation: '42 + 16 = 58\nDie boer het altesaam 58 hoenders ✓' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Skryf ʼn getalsin en los dit op:\n\nʼn Winkel het 96 brode gehad. Teen die einde van die dag is 59 brode verkoop. Hoeveel brode is oor?\n\na) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\nb) Los dit op. Skryf slegs die getal.', answer: 'a) 96 − 59 = □  b) 37', parts: [ { label: 'a) Getalsin', correctAnswer: '96-59=□', correctAnswers: ['96-59=□', '96-59=?', '96-59=n', '96−59=□'], explanation: 'Die winkel begin met 96 brode en 59 word verkoop (afgetrek).\nGetalsin: 96 − 59 = □' }, { label: 'b) Brode oor', correctAnswer: '37', explanation: '96 − 59 = 37\nDaar is 37 brode oor ✓' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Skryf ʼn getalsin en los dit op:\n\nSipho pak 13 bokse met 7 lemoene in elke boks. Hoeveel lemoene pak hy altesaam?\n\na) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\nb) Los dit op. Skryf slegs die getal.', answer: 'a) 13 × 7 = □  b) 91', parts: [ { label: 'a) Getalsin', correctAnswer: '13x7=□', correctAnswers: ['13x7=□', '13x7=?', '13×7=□', '7x13=□', '7×13=□'], explanation: '13 groepe van 7 lemoene elk.\nGetalsin: 13 × 7 = □' }, { label: 'b) Totale lemoene', correctAnswer: '91', explanation: '13 × 7 = 91\nSipho pak altesaam 91 lemoene ✓' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Skryf ʼn getalsin en los dit op:\n\nʼn Bakker het ʼn aantal brode. Nadat 48 brode verkoop is, bly 29 brode oor. Hoeveel brode het die bakker aan die begin gehad?\n\na) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\nb) Los op met inverse bewerkings. Skryf slegs die getal.\nc) Kontroleer jou antwoord. Skryf die kontrole-berekening.', answer: 'a) □ − 48 = 29  b) 77  c) 77 − 48 = 29', parts: [ { label: 'a) Getalsin', correctAnswer: '□-48=29', correctAnswers: ['□-48=29', '?-48=29', 'n-48=29', '□−48=29'], explanation: 'ʼn Onbekende getal minus 48 is gelyk aan 29.\nGetalsin: □ − 48 = 29' }, { label: 'b) Ontbrekende waarde', correctAnswer: '77', explanation: 'Gebruik die inverse — optelling: 29 + 48 = 77.\n□ = 77' }, { label: 'c) Kontrole', correctAnswer: '77-48=29', correctAnswers: ['77-48=29', '77−48=29', '29'], explanation: 'Vervang terug: 77 − 48 = 29 ✓\nDie antwoord is korrek.' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Skryf ʼn getalsin en los dit op:\n\nAmahle koop pakkies penne. Elke pakkie het dieselfde aantal penne. Sy koop 7 pakkies en kry altesaam 84 penne. Hoeveel penne is in elke pakkie?\n\na) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\nb) Los dit op. Skryf slegs die getal.\nc) As Amahle 3 meer pakkies koop, hoeveel ekstra penne sal sy kry? Skryf slegs die getal.', answer: 'a) 7 × □ = 84  b) 12  c) 36', parts: [ { label: 'a) Getalsin', correctAnswer: '7x□=84', correctAnswers: ['7x□=84', '7x?=84', '□x7=84', '7×□=84', '□×7=84'], explanation: '7 pakkies keer die aantal penne per pakkie is gelyk aan 84.\nGetalsin: 7 × □ = 84' }, { label: 'b) Penne per pakkie', correctAnswer: '12', explanation: 'Gebruik die inverse — deling: 84 ÷ 7 = 12.\n□ = 12' }, { label: 'c) Ekstra penne vir 3 meer pakkies', correctAnswer: '36', explanation: '3 × 12 = 36 ekstra penne.' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Skryf ʼn getalsin en los dit op:\n\nʼn Klas van 32 leerders word in gelyke groepe van 4 leerders verdeel. Hoeveel groepe is daar?\n\na) Skryf die getalsin. Gebruik □ of ? vir die onbekende waarde.\nb) Los dit op. Skryf slegs die getal.', answer: 'a) 32 ÷ 4 = □  b) 8', parts: [ { label: 'a) Getalsin', correctAnswer: '32÷4=□', correctAnswers: ['32÷4=□', '32/4=□', '32÷4=?', '32/4=?'], explanation: '32 leerders gelykop verdeel in groepe van 4.\nGetalsin: 32 ÷ 4 = □' }, { label: 'b) Aantal groepe', correctAnswer: '8', explanation: '32 ÷ 4 = 8\nDaar is 8 groepe ✓' } ], checkMode: 'auto' },
        { difficulty: 'Medium', question: 'Lerato het ʼn bedrag geld. Sy spandeer R38 en het R57 oor. Skryf ʼn getalsin en los dit op om te vind hoeveel geld sy aan die begin gehad het.\n\nSkryf slegs die getal sonder die R-simbool.', answer: '95', checkMode: 'auto', correctAnswer: '95', correctAnswers: ['95', 'r95'], explanation: 'Getalsin: □ − 38 = 57\nGebruik die inverse: 57 + 38 = 95\nLerato het R95 aan die begin gehad ✓' },
        { difficulty: 'Medium', question: 'ʼn Taxi vervoer 15 passasiers per rit. Skryf ʼn getalsin en los dit op om te vind hoeveel passasiers dit in 6 ritte vervoer.\n\nSkryf slegs die getal.', answer: '90', checkMode: 'auto', correctAnswer: '90', explanation: 'Getalsin: 15 × 6 = □\n15 × 6 = 90\nDie taxi vervoer 90 passasiers in 6 ritte ✓' },
        { difficulty: 'Hard', question: 'ʼn Krat bevat ʼn aantal koeldrankblikkies. 108 blikkies word gelykop tussen 9 krate verdeel. Skryf ʼn getalsin en los dit op om te vind hoeveel blikkies in elke krat is.\n\nSkryf slegs die getal.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Getalsin: 108 ÷ 9 = □\n108 ÷ 9 = 12\nElke krat het 12 blikkies ✓' },
        { difficulty: 'Hard', question: 'Verduidelik, met jou eie voorbeeld, hoe jy besluit watter bewerking (+, −, ×, ÷) om te gebruik wanneer jy ʼn woordprobleem na ʼn getalsin omskakel.', answer: 'Ek soek na sleutelwoorde in die probleem. Woorde soos "altesaam", "totaal", of "meer" beteken gewoonlik optelling. Woorde soos "oor", "verskil", of "spandeer" beteken gewoonlik aftrekking. Woorde soos "elk", "keer", of "groepe van" beteken gewoonlik vermenigvuldiging. Woorde soos "deel", "verdeel", of "gelykop" beteken gewoonlik deling. Byvoorbeeld, in "Thabo het 20 lekkers en deel dit gelykop tussen 4 vriende", vertel die woord "gelykop" my om deling te gebruik: 20 ÷ 4 = 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue woordprobleme na getalsinne omskakel.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die vyf-stap metode en die sleutelwoordgids weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MEERVOUDIGE-STAP EN GEKOMBINEERDE PROBLEME (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Meervoudige-stap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Medium', question: 'Sipho koop 3 bokse penne met 12 penne in elke boks, en koop dan nog 7 los penne. Skryf die berekening en vind die totale getal penne.\n\nSkryf slegs die getal.', answer: '43', checkMode: 'auto', correctAnswer: '43', explanation: '3 × 12 = 36\n36 + 7 = 43\nSipho het altesaam 43 penne ✓' },
        { difficulty: 'Medium', question: 'Thabo het 45 kaarte. Hy gee 12 weg, en koop dan nog 20. Skryf die berekening en vind hoeveel kaarte hy nou het.\n\nSkryf slegs die getal.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: '45 − 12 = 33\n33 + 20 = 53\nThabo het nou 53 kaarte ✓' },
        { difficulty: 'Medium', question: 'ʼn Bakkery maak 5 pakke van 8 broodjies. Dit verkoop 15 broodjies. Skryf die berekening en vind hoeveel broodjies oor is.\n\nSkryf slegs die getal.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '5 × 8 = 40\n40 − 15 = 25\nDaar is 25 broodjies oor ✓' },
        { difficulty: 'Hard', question: 'Sipho verdien R25 per dag vir 4 dae, en spandeer dan R60. Skryf die berekening en vind hoeveel geld hy oor het.\n\nSkryf slegs die getal sonder die R-simbool.', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', 'r40'], explanation: '25 × 4 = 100\n100 − 60 = 40\nSipho het R40 oor ✓' },
        { difficulty: 'Medium', question: 'ʼn Boekrak het 6 rakke met 9 boeke op elke rak. 14 meer boeke word bygevoeg. Skryf die berekening en vind die totale getal boeke.\n\nSkryf slegs die getal.', answer: '68', checkMode: 'auto', correctAnswer: '68', explanation: '6 × 9 = 54\n54 + 14 = 68\nDaar is altesaam 68 boeke ✓' },
        { difficulty: 'Hard', question: 'Amahle het R200. Sy koop 8 items wat elk R15 kos. Skryf die berekening en vind hoeveel geld sy oor het.\n\nSkryf slegs die getal sonder die R-simbool.', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', 'r80'], explanation: '8 × 15 = 120\n200 − 120 = 80\nAmahle het R80 oor ✓' },
        { difficulty: 'Medium', question: 'Lerato het 4 sakke met 25 albasters elk. Sy gee 30 albasters weg. Skryf die berekening en vind hoeveel albasters sy oor het.\n\nSkryf slegs die getal.', answer: '70', checkMode: 'auto', correctAnswer: '70', explanation: '4 × 25 = 100\n100 − 30 = 70\nLerato het 70 albasters oor ✓' },
        { difficulty: 'Medium', question: 'Verdubbel 34, en tel dan 12 by. Skryf die berekening en gee die antwoord.\n\nSkryf slegs die getal.', answer: '80', checkMode: 'auto', correctAnswer: '80', explanation: '34 × 2 = 68\n68 + 12 = 80' },
        { difficulty: 'Medium', question: 'Neem die helfte van 96, en trek dan 20 af. Skryf die berekening en gee die antwoord.\n\nSkryf slegs die getal.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: '96 ÷ 2 = 48\n48 − 20 = 28' },
        { difficulty: 'Medium', question: 'Bereken 7 × 6, en tel dan 19 by. Skryf die berekening en gee die antwoord.\n\nSkryf slegs die getal.', answer: '61', checkMode: 'auto', correctAnswer: '61', explanation: '7 × 6 = 42\n42 + 19 = 61' },
        { difficulty: 'Hard', question: 'ʼn Boer het 150 eiers. Hy verkoop 6 skaaltjies van 9 eiers elk. Skryf die berekening en vind hoeveel eiers oorbly.\n\nSkryf slegs die getal.', answer: '96', checkMode: 'auto', correctAnswer: '96', explanation: '6 × 9 = 54\n150 − 54 = 96\n96 eiers bly oor ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool bestel 3 groepe van 14 stoele en 2 groepe van 9 tafels. Skryf die berekening en vind die totale getal stoele en tafels wat bestel is.\n\nSkryf slegs die getal.', answer: '60', checkMode: 'auto', correctAnswer: '60', explanation: '3 × 14 = 42\n2 × 9 = 18\n42 + 18 = 60\nDie skool bestel altesaam 60 items ✓' },
        { difficulty: 'Hard', question: 'Skryf ʼn getalsin en los dit stap vir stap op:\n\nThabo koop 4 pakkies koekies met 16 koekies in elke pakkie. Hy deel dan al die koekies gelykop tussen 8 vriende. Hoeveel koekies kry elke vriend?\n\na) Hoeveel koekies is daar altesaam? Skryf slegs die getal.\nb) Hoeveel koekies kry elke vriend? Skryf slegs die getal.', answer: 'a) 64  b) 8', parts: [ { label: 'a) Totale koekies', correctAnswer: '64', explanation: '4 × 16 = 64 koekies altesaam.' }, { label: 'b) Koekies per vriend', correctAnswer: '8', explanation: '64 ÷ 8 = 8\nElke vriend kry 8 koekies ✓' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Skryf ʼn getalsin en los dit stap vir stap op:\n\nʼn Winkel het 90 appels. Dit ontvang ʼn aflewering van 5 bokse met 12 appels in elke boks. Daarna verkoop dit 84 appels. Hoeveel appels is oor?\n\na) Hoeveel appels is daar na die aflewering? Skryf slegs die getal.\nb) Hoeveel appels is oor na die verkoping? Skryf slegs die getal.', answer: 'a) 150  b) 66', parts: [ { label: 'a) Na aflewering', correctAnswer: '150', explanation: '5 × 12 = 60\n90 + 60 = 150 appels na die aflewering.' }, { label: 'b) Na verkoping', correctAnswer: '66', explanation: '150 − 84 = 66\nDaar is 66 appels oor ✓' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Skryf ʼn getalsin en los dit stap vir stap op:\n\nSipho spaar elke week R20 vir 5 weke. Hy spandeer dan R45 op ʼn geskenk. Hoeveel geld het hy oor?\n\na) Hoeveel het Sipho altesaam gespaar? Skryf slegs die getal sonder die R-simbool.\nb) Hoeveel het hy oor nadat hy die geskenk gekoop het? Skryf slegs die getal sonder die R-simbool.', answer: 'a) 100  b) 55', parts: [ { label: 'a) Totaal gespaar', correctAnswer: '100', correctAnswers: ['100', 'r100'], explanation: '20 × 5 = R100 altesaam gespaar.' }, { label: 'b) Oor na geskenk', correctAnswer: '55', correctAnswers: ['55', 'r55'], explanation: '100 − 45 = 55\nSipho het R55 oor ✓' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Amahle het 12 bokse met 15 lemoene in elke boks. Sy verwyder 3 bokse heeltemal omdat hulle beskadig is. Skryf die berekening en vind hoeveel lemoene oorbly.\n\nSkryf slegs die getal.', answer: '135', checkMode: 'auto', correctAnswer: '135', explanation: 'Totale lemoene: 12 × 15 = 180\nBeskadigde lemoene: 3 × 15 = 45\nOorblywend: 180 − 45 = 135 lemoene ✓' },
        { difficulty: 'Hard', question: 'Lerato koop 6 pakkies van 9 lekkers elk vir ʼn partytjie. Sy koop ook 4 ekstra pakkies van 5 lekkers elk. Skryf die berekening en vind die totale getal lekkers.\n\nSkryf slegs die getal.', answer: '74', checkMode: 'auto', correctAnswer: '74', explanation: '6 × 9 = 54\n4 × 5 = 20\n54 + 20 = 74 lekkers altesaam ✓' },
        { difficulty: 'Medium', question: 'ʼn Getalsin sê: □ + 15 = 40. As die ontbrekende waarde verdubbel word, wat sal die nuwe ontbrekende waarde wees?\n\nSkryf slegs die getal.', answer: '50', checkMode: 'auto', correctAnswer: '50', explanation: 'Vind eers □: 40 − 15 = 25.\nVerdubbel dit: 25 × 2 = 50' },
        { difficulty: 'Medium', question: 'ʼn Getalsin sê: 6 × □ = 48. As jy 10 by die ontbrekende waarde tel, watter getal sal jy kry?\n\nSkryf slegs die getal.', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Vind eers □: 48 ÷ 6 = 8.\nTel 10 by: 8 + 10 = 18' },
        { difficulty: 'Hard', question: 'ʼn Getalsin sê: 84 ÷ □ = 12. As jy 3 van die ontbrekende waarde aftrek, watter getal sal jy kry?\n\nSkryf slegs die getal.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Vind eers □: 84 ÷ 12 = 7.\nTrek 3 af: 7 − 3 = 4' },
        { difficulty: 'Hard', question: 'ʼn Getalsin sê: □ − 27 = 35. Vind die ontbrekende waarde, en vind dan die helfte van daardie waarde.\n\na) Wat is die ontbrekende waarde? Skryf slegs die getal.\nb) Wat is die helfte van die ontbrekende waarde? Skryf slegs die getal.', answer: 'a) 62  b) 31', parts: [ { label: 'a) Ontbrekende waarde', correctAnswer: '62', explanation: 'Gebruik die inverse — optelling: 35 + 27 = 62.\n□ = 62' }, { label: 'b) Helfte van die ontbrekende waarde', correctAnswer: '31', explanation: '62 ÷ 2 = 31' } ], checkMode: 'auto' },
        { difficulty: 'Hard', question: 'Thabo sê dat in die getalsin □ + □ = 20, die ontbrekende waarde altyd 10 moet wees. Is hy korrek? Verduidelik jou redenasie.', answer: 'Nee, Thabo is nie korrek nie. Alhoewel □ = 10 die sin waar maak (10 + 10 = 20), verteenwoordig die boks dieselfde onbekende waarde wat twee keer gebruik word, en daar kan ander interpretasies wees afhangende van hoe die getalsin geskryf is. As albei bokse egter presies dieselfde getal moet verteenwoordig, dan is 10 inderdaad die enigste waarde wat werk, aangesien ons ʼn getal nodig het wat wanneer dit by homself getel word, 20 gee. Dit is belangrik om te kyk of albei bokse dieselfde ontbrekende waarde of twee verskillende onbekendes verteenwoordig voordat jy besluit.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho los die getalsin □ × 4 = 36 op en kry □ = 9. Verduidelik hoe hy kan kontroleer of sy antwoord korrek is, en wys die kontrole.', answer: 'Sipho kan sy antwoord kontroleer deur sy waarde terug in die oorspronklike getalsin te vervang. Hy vervang □ met 9: 9 × 4 = 36. Aangesien die linkerkant (36) gelyk is aan die regterkant (36), is die getalsin waar, so sy antwoord van □ = 9 is korrek.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik die verskil tussen ʼn oop getalsin en ʼn getalsin wat as waar of onwaar beoordeel kan word. Gee een voorbeeld van elk.', answer: 'ʼn Getalsin wat as waar of onwaar beoordeel kan word, het geen ontbrekende waarde nie — elke getal is bekend, so jy kan albei kante bereken en vergelyk, bv. 4 + 5 = 9 (waar) of 3 × 6 = 20 (onwaar). ʼn Oop getalsin het ʼn ontbrekende waarde wat as ʼn boks (□) of letter getoon word, en in plaas daarvan om net waar of onwaar te wees, moet jy die getal vind wat dit waar maak, bv. □ + 5 = 9, waar □ = 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige groentetuin het 8 rye met 7 plante in elke ry. Die boer voeg nog 2 rye by met 7 plante in elke nuwe ry. Skryf die berekening en vind die totale getal plante nou.\n\nSkryf slegs die getal.', answer: '70', checkMode: 'auto', correctAnswer: '70', explanation: 'Oorspronklike plante: 8 × 7 = 56\nNuwe plante: 2 × 7 = 14\nTotaal: 56 + 14 = 70 plante ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het meervoudige-stap en gekombineerde getalsinprobleme baasgeraak.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die meervoudige-stap uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
