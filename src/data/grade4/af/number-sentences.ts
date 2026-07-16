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
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Ontbrekende waardes, een bewerking (Maklik) — posisies 0-4
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ − 15 = 27', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Gebruik die inverse — optelling: 27 + 15 = 42.\n□ = 42\nKontroleer: 42 − 15 = 27 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n22 − □ = 13', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Gebruik die inverse — aftrekking: 22 − 13 = 9.\n□ = 9\nKontroleer: 22 − 9 = 13 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 7 = 63', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Gebruik die inverse — deling: 63 ÷ 7 = 9.\n□ = 9\nKontroleer: 9 × 7 = 63 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n48 ÷ □ = 8', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Gebruik die inverse — vermenigvuldiging: 8 × 6 = 48.\n□ = 6\nKontroleer: 48 ÷ 6 = 8 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 56 = 100', answer: '44', checkMode: 'auto', correctAnswer: '44', explanation: 'Gebruik die inverse — aftrekking: 100 − 56 = 44.\n□ = 44\nKontroleer: 44 + 56 = 100 ✓' },

        // Blok 2 — Waar/onwaar-oordeel (Maklik-Medium) — posisies 5-8
        { difficulty: 'Easy', question: 'Is die volgende getalsin waar of onwaar?\n\n7 + 8 = 16\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 7 + 8 = 15.\nIs 15 = 16? Nee — 15 is nie gelyk aan 16 nie.\nOnware getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n9 × 6 > 50\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 9 × 6 = 54.\nIs 54 > 50? Ja — 54 is groter as 50.\nWare getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n84 ÷ 7 < 11\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 84 ÷ 7 = 12.\nIs 12 < 11? Nee — 12 is groter as 11, nie kleiner nie.\nOnware getalsin.' },
        { difficulty: 'Medium', question: 'Skryf waar of onwaar vir elke getalsin:\n\na) 6 × 9 = 54\nb) 72 − 28 < 50\nc) 13 × 4 > 60', answer: 'a) Waar  b) Waar  c) Onwaar', checkMode: 'auto', parts: [ { label: 'a) 6 × 9 = 54', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 6 × 9 = 54. Is 54 = 54? Ja. Ware getalsin.' }, { label: 'b) 72 − 28 < 50', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 72 − 28 = 44. Is 44 < 50? Ja. Ware getalsin.' }, { label: 'c) 13 × 4 > 60', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Linkerkant: 13 × 4 = 52. Is 52 > 60? Nee, 52 is kleiner as 60. Onware getalsin.' } ] },

        // Blok 3 — Redenering / foutopsporing (Medium) — posisies 9-11
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat jy 6 by 13 moet optel om die ontbrekende waarde in □ + 6 = 13 te vind. Is die leerder korrek? Verduidelik jou redenasie.', answer: 'Nee, die leerder is nie korrek nie. Aangesien 6 by die ontbrekende waarde bygetel word, moet jy die inverse bewerking — aftrekking — gebruik om die optelling ongedaan te maak. Jy moet aftrek: 13 − 6 = 7, dus □ = 7. Om 6 by 13 te tel sou eerder die verkeerde antwoord (19) gee, wat nie die oorspronklike getalsin waar maak nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sipho los die getalsin □ × 4 = 36 op en kry □ = 9. Verduidelik hoe hy kan kontroleer of sy antwoord korrek is, en wys die kontrole.', answer: 'Sipho kan sy antwoord kontroleer deur sy waarde terug in die oorspronklike getalsin te vervang. Hy vervang □ met 9: 9 × 4 = 36. Aangesien die linkerkant (36) gelyk is aan die regterkant (36), is die getalsin waar, so sy antwoord van □ = 9 is korrek.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Klasmaat sê dat 8 × 6 = 42 ʼn ware getalsin is "omdat 42 min of meer reg klink vir 8 keer 6." Stem jy saam met hierdie redenasie? Verduidelik wat verkeerd is daarmee en gee die korrekte antwoord.', answer: 'Nee, ek stem nie saam nie. Jy kan nie besluit of ʼn getalsin waar is net omdat ʼn getal "min of meer reg klink" nie — jy moet werklik die linkerkant bereken en dit met die regterkant vergelyk. 8 × 6 = 48, nie 42 nie. Aangesien 48 ≠ 42, is die getalsin 8 × 6 = 42 onwaar. Die korrekte berekening wys die fout — bereken altyd noukeurig eerder as om te raai op grond van ʼn vae indruk van hoe groot die antwoord moet wees.', checkMode: 'self' },

        // Blok 4 — Woordprobleme: omskakel en oplos, een stap (Medium) — posisies 12-16
        { difficulty: 'Medium', question: 'Thabo het 34 plakkers. Hy koop nog 19. Skryf ʼn getalsin en los dit op om te vind hoeveel plakkers hy altesaam het.\n\nSkryf slegs die totale getal.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Getalsin: 34 + 19 = □\n34 + 19 = 53\nThabo het altesaam 53 plakkers ✓' },
        { difficulty: 'Medium', question: 'ʼn Netbalspan behaal 45 punte in die eerste helfte. Teen die einde van die wedstryd het hulle altesaam 78 punte behaal. Skryf ʼn getalsin en los dit op om te vind hoeveel punte hulle in die tweede helfte behaal het.\n\nSkryf slegs die getal.', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: 'Getalsin: 45 + □ = 78\nGebruik die inverse: 78 − 45 = 33\nHulle het 33 punte in die tweede helfte behaal ✓' },
        { difficulty: 'Medium', question: 'ʼn Resep benodig 3 eiers om een bondel muffins te maak. Skryf ʼn getalsin en los dit op om te vind hoeveel eiers benodig word vir 8 bondels.\n\nSkryf slegs die getal.', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: 'Getalsin: 3 × 8 = □\n3 × 8 = 24\n24 eiers word benodig vir 8 bondels ✓' },
        { difficulty: 'Medium', question: 'Die klas moet 36 stoele in gelyke rye rangskik vir ʼn klaskamervergadering, met 9 stoele in elke ry. Skryf ʼn getalsin en los dit op om te vind hoeveel rye nodig is.\n\nSkryf slegs die getal.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Getalsin: 36 ÷ 9 = □\n36 ÷ 9 = 4\n4 rye is nodig ✓' },
        { difficulty: 'Medium', question: 'ʼn Gesin reis 240 km op die eerste dag van ʼn padtoer. Teen die einde van dag twee het hulle altesaam 410 km gereis.\n\na) Skryf die getalsin vir hierdie probleem. Gebruik □ vir die onbekende waarde.\nb) Los dit op om te vind hoe ver hulle op dag twee gereis het. Skryf slegs die getal.\nc) Verduidelik waarom jy aftrekking (as die inverse) eerder as optelling gekies het om die ontbrekende waarde op te los.', answer: 'a) 240 + □ = 410  b) 170  c) Omdat die onbekende afstand by 240 getel is om die totaal van 410 te bereik, maak die aftrekking van 240 van 410 daardie optelling ongedaan en onthul dit die ontbrekende waarde.', parts: [ { label: 'a) Getalsin', correctAnswer: '240+□=410', correctAnswers: ['240+□=410', '240+?=410', '240+n=410'], explanation: 'ʼn Onbekende afstand word by 240 getel om ʼn totaal van 410 te gee.\nGetalsin: 240 + □ = 410', checkMode: 'auto' }, { label: 'b) Afstand op dag twee', correctAnswer: '170', explanation: 'Gebruik die inverse — aftrekking: 410 − 240 = 170.\n□ = 170', checkMode: 'auto' }, { label: 'c) Redenasie', answer: 'Omdat die onbekende afstand by 240 getel is, word die inverse bewerking (aftrekking) benodig om dit te isoleer en te vind: 410 − 240 = 170.', explanation: 'Aangesien die ontbrekende waarde by 240 getel is, maak aftrekking daardie optelling ongedaan en onthul dit die ontbrekende waarde.', checkMode: 'self' } ], checkMode: 'auto' },

        // Blok 5 — Meervoudige-stap en vergelykings (Moeilik) — posisies 17-19
        { difficulty: 'Hard', question: 'Sipho koop 3 bokse penne met 12 penne in elke boks, en koop dan nog 7 los penne. Skryf die berekening en vind die totale getal penne.\n\nSkryf slegs die getal.', answer: '43', checkMode: 'auto', correctAnswer: '43', explanation: '3 × 12 = 36\n36 + 7 = 43\nSipho het altesaam 43 penne ✓' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee getalsinne is waar — A of B?\n\nA) 9 × 7 − 15 = 48\nB) 6 × 8 + 10 = 60\n\nSkryf slegs "A" of "B".', answer: 'A', checkMode: 'auto', correctAnswer: 'a', correctAnswers: ['a', 'A'], explanation: 'A) 9 × 7 = 63, dan 63 − 15 = 48. Dit stem ooreen, dus is A waar.\nB) 6 × 8 = 48, dan 48 + 10 = 58. Dit is nie gelyk aan 60 nie, dus is B onwaar.\nDie ware getalsin is A.' },
        { difficulty: 'Hard', question: 'Verduidelik die verskil tussen ʼn oop getalsin en ʼn getalsin wat as waar of onwaar beoordeel kan word. Gee een voorbeeld van elk.', answer: 'ʼn Getalsin wat as waar of onwaar beoordeel kan word, het geen ontbrekende waarde nie — elke getal is bekend, so jy kan albei kante bereken en vergelyk, bv. 4 + 5 = 9 (waar) of 3 × 6 = 20 (onwaar). ʼn Oop getalsin het ʼn ontbrekende waarde wat as ʼn boks (□) of letter getoon word, en in plaas daarvan om net waar of onwaar te wees, moet jy die getal vind wat dit waar maak, bv. □ + 5 = 9, waar □ = 4.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die vind van en redenering oor ontbrekende waardes in getalsinne baasgeraak.' },
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
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ − 25 = 17', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Gebruik die inverse — optelling: 17 + 25 = 42.\n□ = 42\nKontroleer: 42 − 25 = 17 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n5 × □ = 35', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — deling: 35 ÷ 5 = 7.\n□ = 7\nKontroleer: 5 × 7 = 35 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ ÷ 5 = 7', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Gebruik die inverse — vermenigvuldiging: 7 × 5 = 35.\n□ = 35\nKontroleer: 35 ÷ 5 = 7 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n15 − □ = 8', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — aftrekking: 15 − 8 = 7.\n□ = 7\nKontroleer: 15 − 7 = 8 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 48 = 91', answer: '43', checkMode: 'auto', correctAnswer: '43', explanation: 'Gebruik die inverse — aftrekking: 91 − 48 = 43.\n□ = 43\nKontroleer: 43 + 48 = 91 ✓' },

        // Blok 2 — Waar/onwaar-oordeel (Maklik-Medium) — posisies 5-8
        { difficulty: 'Easy', question: 'Is die volgende getalsin waar of onwaar?\n\n45 ÷ 5 = 9\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 45 ÷ 5 = 9.\nIs 9 = 9? Ja — albei kante is gelyk.\nWare getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n12 + 19 = 30\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 12 + 19 = 31.\nIs 31 = 30? Nee — 31 is nie gelyk aan 30 nie.\nOnware getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n11 × 6 < 60\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 11 × 6 = 66.\nIs 66 < 60? Nee — 66 is groter as 60, nie kleiner nie.\nOnware getalsin.' },
        { difficulty: 'Medium', question: 'Skryf waar of onwaar vir elke getalsin:\n\na) 9 × 6 = 54\nb) 100 − 37 = 63\nc) 96 ÷ 8 > 13', answer: 'a) Waar  b) Waar  c) Onwaar', checkMode: 'auto', parts: [ { label: 'a) 9 × 6 = 54', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 9 × 6 = 54. Is 54 = 54? Ja. Ware getalsin.' }, { label: 'b) 100 − 37 = 63', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 100 − 37 = 63. Is 63 = 63? Ja. Ware getalsin.' }, { label: 'c) 96 ÷ 8 > 13', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Linkerkant: 96 ÷ 8 = 12. Is 12 > 13? Nee, 12 is kleiner as 13. Onware getalsin.' } ] },

        // Blok 3 — Redenering / foutopsporing (Medium) — posisies 9-11
        { difficulty: 'Medium', question: 'Verduidelik, in jou eie woorde, waarom jy aftrekking gebruik om die ontbrekende waarde in □ + 6 = 13 te vind, maar jy gebruik optelling om die ontbrekende waarde in □ − 6 = 13 te vind.', answer: 'Optelling en aftrekking is inverse bewerkings — hulle maak mekaar ongedaan. In □ + 6 = 13 word ʼn getal bygetel, so deur 6 van 13 af te trek, word die optelling ongedaan gemaak en die ontbrekende waarde (7) onthul. In □ − 6 = 13 word ʼn getal afgetrek, so deur 6 by 13 te tel, word die aftrekking ongedaan gemaak en die ontbrekende waarde (19) onthul. Deur die inverse bewerking te gebruik, word altyd "ongedaan gemaak" wat gedoen is om die ontbrekende waarde te isoleer.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo beweer dat in die getalsin □ + □ = 20, die ontbrekende waarde altyd 10 moet wees. Is hy korrek? Verduidelik jou redenasie.', answer: 'Thabo is slegs korrek as albei bokse presies dieselfde ontbrekende waarde moet verteenwoordig. In daardie geval het ons ʼn getal nodig wat wanneer dit by homself getel word, 20 gee, en 10 is die enigste getal wat werk (10 + 10 = 20). Dit is belangrik om te kyk of die probleem bedoel dat albei bokse dieselfde onbekende waarde verteenwoordig, of dat hulle twee verskillende onbekendes kan wees — as hulle kan verskil, sou baie ander pare (soos 8 en 12, of 15 en 5) ook die sin waar maak.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat 90 ÷ 9 = 8 ʼn ware getalsin is. ʼn Klasmaat stem nie saam nie. Wie is korrek, en hoe sou jy dit bewys?', answer: 'Die klasmaat is korrek — die leerder het ʼn fout gemaak. Om dit te bewys, bereken die linkerkant: 90 ÷ 9 = 10 (aangesien 9 × 10 = 90), nie 8 nie. Aangesien 10 ≠ 8, is die getalsin 90 ÷ 9 = 8 onwaar. Jy kan altyd bewys of ʼn getalsin waar of onwaar is deur die berekening op een kant werklik uit te werk en dit met die ander kant te vergelyk, eerder as om op ʼn raaiskoot staat te maak.', checkMode: 'self' },

        // Blok 4 — Woordprobleme: omskakel en oplos, een stap (Medium) — posisies 12-16
        { difficulty: 'Medium', question: 'Sipho het 50 lekkers. Hy gee ʼn paar weg en het 22 oor. Skryf ʼn getalsin en los dit op om te vind hoeveel hy weggegee het.\n\nSkryf slegs die getal.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Getalsin: 50 − □ = 22\nGebruik die inverse: 50 − 22 = 28\nSipho het 28 lekkers weggegee ✓' },
        { difficulty: 'Medium', question: 'ʼn Sokkerspan reis 18 km na ʼn uitwedstryd en reis dan ʼn verdere afstand ʼn ander pad huis toe, en dek altesaam 45 km vir die retoerrit. Skryf ʼn getalsin en los dit op om die afstand op die terugrit te vind.\n\nSkryf slegs die getal.', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Getalsin: 18 + □ = 45\nGebruik die inverse: 45 − 18 = 27\nDie span het 27 km op die terugrit gereis ✓' },
        { difficulty: 'Medium', question: 'Elke klaskamerdesk huisves 4 leerders. Skryf ʼn getalsin en los dit op om te vind hoeveel leerders by 11 desks kan sit.\n\nSkryf slegs die getal.', answer: '44', checkMode: 'auto', correctAnswer: '44', explanation: 'Getalsin: 4 × 11 = □\n4 × 11 = 44\n44 leerders kan sit ✓' },
        { difficulty: 'Medium', question: 'Amahle het 96 krale. Sy deel dit gelykop tussen 8 vriende. Skryf ʼn getalsin en los dit op om te vind hoeveel krale elke vriend kry.\n\nSkryf slegs die getal.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Getalsin: 96 ÷ 8 = □\n96 ÷ 8 = 12\nElke vriend kry 12 krale ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel het ʼn aantal brode gehad. Teen die einde van die dag is 59 brode verkoop, en 37 brode het oorgebly.\n\na) Skryf die getalsin vir hierdie probleem. Gebruik □ vir die onbekende waarde.\nb) Los dit op om te vind hoeveel brode die winkel aan die begin gehad het. Skryf slegs die getal.\nc) Verduidelik waarom jy optelling (as die inverse) gekies het om die ontbrekende waarde op te los.', answer: 'a) □ − 59 = 37  b) 96  c) Omdat 59 van die ontbrekende waarde afgetrek is, maak dit om 59 terug by 37 te tel daardie aftrekking ongedaan en onthul dit die ontbrekende waarde.', parts: [ { label: 'a) Getalsin', correctAnswer: '□-59=37', correctAnswers: ['□-59=37', '?-59=37', 'n-59=37', '□−59=37'], explanation: 'ʼn Onbekende beginhoeveelheid minus 59 (verkoop) laat 37 oor.\nGetalsin: □ − 59 = 37', checkMode: 'auto' }, { label: 'b) Beginbrode', correctAnswer: '96', explanation: 'Gebruik die inverse — optelling: 37 + 59 = 96.\n□ = 96', checkMode: 'auto' }, { label: 'c) Redenasie', answer: 'Aangesien 59 van die ontbrekende waarde afgetrek is, is optelling die inverse bewerking wat nodig is om dit te isoleer en te vind: 37 + 59 = 96.', explanation: 'Optelling maak aftrekking ongedaan — deur terug te tel wat weggeneem is, word die oorspronklike beginwaarde onthul.', checkMode: 'self' } ], checkMode: 'auto' },

        // Blok 5 — Meervoudige-stap en vergelykings (Moeilik) — posisies 17-19
        { difficulty: 'Hard', question: 'ʼn Bakkery maak 5 pakke van 8 broodjies. Dit verkoop 15 broodjies. Skryf die berekening en vind hoeveel broodjies oor is.\n\nSkryf slegs die getal.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '5 × 8 = 40\n40 − 15 = 25\nDaar is 25 broodjies oor ✓' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee getalsinne is waar — A of B?\n\nA) 8 × 9 − 12 = 65\nB) 7 × 8 + 5 = 61\n\nSkryf slegs "A" of "B".', answer: 'B', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'B'], explanation: 'A) 8 × 9 = 72, dan 72 − 12 = 60, nie 65 nie. Dit stem nie ooreen nie, dus is A onwaar.\nB) 7 × 8 = 56, dan 56 + 5 = 61. Dit stem ooreen, dus is B waar.\nDie ware getalsin is B.' },
        { difficulty: 'Hard', question: 'Verduidelik hoe jy besluit watter bewerking (+, −, ×, ÷) om te gebruik wanneer jy ʼn woordprobleem na ʼn getalsin omskakel. Gebruik jou eie voorbeeld.', answer: 'Ek soek na sleutelwoorde in die probleem. Woorde soos "altesaam", "totaal", of "meer" beteken gewoonlik optelling. Woorde soos "oor", "verskil", of "spandeer" beteken gewoonlik aftrekking. Woorde soos "elk", "keer", of "groepe van" beteken gewoonlik vermenigvuldiging. Woorde soos "deel", "verdeel", of "gelykop" beteken gewoonlik deling. Byvoorbeeld, in "Thabo het 20 lekkers en deel dit gelykop tussen 4 vriende", vertel die woord "gelykop" my om deling te gebruik: 20 ÷ 4 = 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die vind van en redenering oor ontbrekende waardes in getalsinne baasgeraak.' },
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
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ + 27 = 45', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Gebruik die inverse — aftrekking: 45 − 27 = 18.\n□ = 18\nKontroleer: 18 + 27 = 45 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n93 − □ = 47', answer: '46', checkMode: 'auto', correctAnswer: '46', explanation: 'Gebruik die inverse — aftrekking: 93 − 47 = 46.\n□ = 46\nKontroleer: 93 − 46 = 47 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ × 8 = 56', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — deling: 56 ÷ 8 = 7.\n□ = 7\nKontroleer: 7 × 8 = 56 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n63 ÷ □ = 9', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Gebruik die inverse — vermenigvuldiging: 9 × 7 = 63.\n□ = 7\nKontroleer: 63 ÷ 7 = 9 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende waarde. Skryf slegs die getal.\n\n□ − 38 = 54', answer: '92', checkMode: 'auto', correctAnswer: '92', explanation: 'Gebruik die inverse — optelling: 54 + 38 = 92.\n□ = 92\nKontroleer: 92 − 38 = 54 ✓' },

        // Blok 2 — Waar/onwaar-oordeel (Maklik-Medium) — posisies 5-8
        { difficulty: 'Easy', question: 'Is die volgende getalsin waar of onwaar?\n\n72 ÷ 8 = 9\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 72 ÷ 8 = 9.\nIs 9 = 9? Ja — albei kante is gelyk.\nWare getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n9 × 6 = 50\n\nSkryf waar of onwaar.', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Bereken die linkerkant: 9 × 6 = 54.\nIs 54 = 50? Nee — 54 is nie gelyk aan 50 nie.\nOnware getalsin.' },
        { difficulty: 'Medium', question: 'Is die volgende getalsin waar of onwaar?\n\n144 ÷ 12 > 11\n\nSkryf waar of onwaar.', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 144 ÷ 12 = 12.\nIs 12 > 11? Ja — 12 is groter as 11.\nWare getalsin.' },
        { difficulty: 'Medium', question: 'Skryf waar of onwaar vir elke getalsin:\n\na) 8 × 7 = 56\nb) 13 × 4 < 50\nc) 76 − 29 > 50', answer: 'a) Waar  b) Onwaar  c) Onwaar', checkMode: 'auto', parts: [ { label: 'a) 8 × 7 = 56', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Linkerkant: 8 × 7 = 56. Is 56 = 56? Ja. Ware getalsin.' }, { label: 'b) 13 × 4 < 50', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Linkerkant: 13 × 4 = 52. Is 52 < 50? Nee, 52 is groter as 50. Onware getalsin.' }, { label: 'c) 76 − 29 > 50', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'nee'], explanation: 'Linkerkant: 76 − 29 = 47. Is 47 > 50? Nee, 47 is kleiner as 50. Onware getalsin.' } ] },

        // Blok 3 — Redenering / foutopsporing (Medium) — posisies 9-11
        { difficulty: 'Medium', question: 'Verduidelik die verskil tussen □ + 5 = 9 en die vraag "is 4 + 5 = 9 waar of onwaar?" Waarom benodig een ʼn inverse bewerking en die ander nie?', answer: '□ + 5 = 9 is ʼn oop getalsin — een waarde is onbekend, so jy moet ʼn inverse bewerking (aftrekking: 9 − 5 = 4) gebruik om dit te vind. "Is 4 + 5 = 9 waar of onwaar?" het geen onbekendes nie — elke getal is reeds gegee, so jy bereken bloot die linkerkant (4 + 5 = 9) en vergelyk dit met die regterkant om te besluit of die stelling waar of onwaar is. Geen inverse bewerking word benodig nie, aangesien daar niks ontbrekend is om voor op te los nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê dat om te kontroleer of □ = 6 korrek is vir die getalsin 54 ÷ □ = 9, jy 54 ÷ 9 moet bereken. Is dit die korrekte manier om te kontroleer? Verduidelik.', answer: 'Nee, dit is nie die korrekte manier om te kontroleer nie. Om ʼn antwoord te kontroleer, vervang jy die gevonde waarde terug in die oorspronklike getalsin in die plek van die boks, en deel jy nie weer deur die boks se posisie nie. Die korrekte kontrole is om □ met 6 te vervang: 54 ÷ 6 = 9. Aangesien dit met die regterkant van die oorspronklike sin ooreenstem, word □ = 6 bevestig as korrek. Om 54 ÷ 9 te bereken (wat 6 gee) werk ook toevallig hier weens hoe deling en vermenigvuldiging verband hou, maar die korrekte kontrolemetode is altyd substitusie terug in die oorspronklike sin.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Klasmaat beweer dat 11 × 8 = 98 ʼn ware getalsin is. Stem jy saam? Verduidelik hoe jy dit sou kontroleer.', answer: 'Nee, ek stem nie saam nie. Om te kontroleer, bereken 11 × 8 = 88, nie 98 nie. Aangesien 88 ≠ 98, is die getalsin 11 × 8 = 98 onwaar. Jy moet altyd die berekening self uitwerk eerder as om ʼn bewerde antwoord sonder meer te aanvaar — dit is die beste manier om ʼn fout soos hierdie een raak te sien.', checkMode: 'self' },

        // Blok 4 — Woordprobleme: omskakel en oplos, een stap (Medium) — posisies 12-16
        { difficulty: 'Medium', question: 'Lerato spaar elke week R15. Skryf ʼn getalsin en los dit op om te vind hoeveel sy in 6 weke spaar.\n\nSkryf slegs die getal sonder die R-simbool.', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', 'r90'], explanation: 'Getalsin: 15 × 6 = □\n15 × 6 = 90\nLerato spaar R90 in 6 weke ✓' },
        { difficulty: 'Medium', question: 'ʼn Fietsryer ry 22 km op Saterdag. Op Sondag ry sy ʼn verdere afstand, en dek altesaam 58 km oor die naweek. Skryf ʼn getalsin en los dit op om te vind hoe ver sy op Sondag gery het.\n\nSkryf slegs die getal.', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Getalsin: 22 + □ = 58\nGebruik die inverse: 58 − 22 = 36\nSy het 36 km op Sondag gery ✓' },
        { difficulty: 'Medium', question: 'ʼn Resep vir ʼn pot sop gebruik 6 aartappels vir een pot. Skryf ʼn getalsin en los dit op om te vind hoeveel aartappels nodig is om 7 potte te maak.\n\nSkryf slegs die getal.', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Getalsin: 6 × 7 = □\n6 × 7 = 42\n42 aartappels is nodig vir 7 potte ✓' },
        { difficulty: 'Medium', question: '117 potlode word gelykop tussen 9 leerders verdeel. Skryf ʼn getalsin en los dit op om te vind hoeveel potlode elke leerder kry.\n\nSkryf slegs die getal.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'Getalsin: 117 ÷ 9 = □\n117 ÷ 9 = 13\nElke leerder kry 13 potlode ✓' },
        { difficulty: 'Medium', question: 'ʼn Minibustaxi het 68 passasiers wat gedurende ʼn oggendroete opklim. By die taxistaanplek klim 24 passasiers af.\n\na) Skryf die getalsin vir hierdie probleem. Gebruik □ vir die onbekende waarde.\nb) Los dit op om te vind hoeveel passasiers steeds op die taxi is. Skryf slegs die getal.\nc) Verduidelik waarom aftrekking hier die korrekte bewerking is, eerder as deling.', answer: 'a) 68 − 24 = □  b) 44  c) Omdat passasiers afklim (ʼn groep word van ʼn totaal verwyder), verminder die totaal met daardie vaste groepgrootte, so aftrekking modelleer dit korrek — deling sou slegs van toepassing wees as die passasiers in gelyke groepe verdeel is, wat nie hier gebeur nie.', parts: [ { label: 'a) Getalsin', correctAnswer: '68-24=□', correctAnswers: ['68-24=□', '68-24=?', '68-24=n', '68−24=□'], explanation: 'Die taxi begin met 68 passasiers en 24 klim af (afgetrek).\nGetalsin: 68 − 24 = □', checkMode: 'auto' }, { label: 'b) Oorblywende passasiers', correctAnswer: '44', explanation: '68 − 24 = 44\nDaar is 44 passasiers steeds op die taxi ✓', checkMode: 'auto' }, { label: 'c) Redenasie', answer: 'Wanneer passasiers afklim, word ʼn hele groep van die totaal verwyder, so aftrekking modelleer die afname korrek — deling sou eerder gebruik word as die totaal in gelyke groepe verdeel is.', explanation: 'Om ʼn groep van ʼn totaal te verwyder vereis aftrekking, nie deling nie, aangesien niks in gelyke dele verdeel word nie.', checkMode: 'self' } ], checkMode: 'auto' },

        // Blok 5 — Meervoudige-stap en vergelykings (Moeilik) — posisies 17-19
        { difficulty: 'Hard', question: 'Amahle het R200. Sy koop 8 items wat elk R15 kos. Skryf die berekening en vind hoeveel geld sy oor het.\n\nSkryf slegs die getal sonder die R-simbool.', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', 'r80'], explanation: '8 × 15 = 120\n200 − 120 = 80\nAmahle het R80 oor ✓' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee getalsinne is waar — A of B?\n\nA) 5 × 9 + 8 = 53\nB) 6 × 7 − 9 = 32\n\nSkryf slegs "A" of "B".', answer: 'A', checkMode: 'auto', correctAnswer: 'a', correctAnswers: ['a', 'A'], explanation: 'A) 5 × 9 = 45, dan 45 + 8 = 53. Dit stem ooreen, dus is A waar.\nB) 6 × 7 = 42, dan 42 − 9 = 33, nie 32 nie. Dit stem nie ooreen nie, dus is B onwaar.\nDie ware getalsin is A.' },
        { difficulty: 'Hard', question: 'Nomvula en Kagiso kry elkeen ʼn ander oop getalsin om op te los: Nomvula het □ − 18 = 25 en Kagiso het □ − 18 = 32. Kagiso kyk na Nomvula se werk en kopieer haar antwoord van □ = 43 vir sy eie sin. Verduidelik waarom dit ʼn fout is, en vind die korrekte ontbrekende waarde vir Kagiso se sin.', answer: 'Dit is ʼn fout omdat Kagiso se getalsin nie dieselfde is as Nomvula s\'n nie — die regterkant is anders (32 in plaas van 25), so dit benodig sy eie ontbrekende waarde; om ʼn antwoord van ʼn ander sin te kopieer maak nie sy sin waar nie. Om Kagiso se korrekte antwoord te vind, gebruik die inverse bewerking op sy eie sin: 32 + 18 = 50, so □ = 50 vir Kagiso. (Kontroleer: 50 − 18 = 32 ✓, terwyl 43 − 18 = 25, wat slegs Nomvula se sin bevredig, nie Kagiso s\'n nie.)', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die vind van en redenering oor ontbrekende waardes in getalsinne baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en sleutelwoorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
