import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: '2D-vorms',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS 2D-VORMS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-2d-shapes',
      title: 'Wat is 2D-vorms?',
      icon: '🔷',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>2D-vorm</strong> is ʼn <strong>plat vorm</strong> met slegs twee dimensies — <strong>lengte</strong> en <strong>breedte</strong>. Dit het geen diepte of dikte nie — jy kan dit nie optel en vashou soos ʼn boks nie. Dink daaraan as ʼn vorm wat op ʼn plat stuk papier geteken is.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Alledaagse voorbeelde 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>ʼn Stuk papier:</strong> heeltemal plat met lengte en breedte maar geen dikte nie</li>
    <li><strong>ʼn Skaduwee op die grond:</strong> ʼn plat beeld met glad geen diepte nie</li>
    <li><strong>ʼn Tekening op ʼn bladsy:</strong> jy kan die vorm sien maar jy kan geen dikte voel nie</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Sleuteleienskappe van 2D-vorms</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Sye</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Die <strong style="color:#1e40af;">reguit of geboë lyne</strong> wat die grens van die vorm vorm. Die meeste 2D-vorms het reguit sye, maar ʼn sirkel het een geboë rand.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Hoeke</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Die <strong style="color:#dc2626;">hoeveelheid draai by elke hoekpunt</strong> waar twee sye ontmoet. ʼn Regte hoek meet presies 90°, soos die hoek van ʼn vierkant.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Hoekpunte</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Die <strong style="color:#16a34a;">punte waar twee sye ontmoet</strong>. ʼn Enkele punt word ʼn <em>hoekpunt</em> genoem; meer as een word <em>hoekpunte</em> genoem. ʼn Sirkel het geen hoekpunte nie omdat sy rand geboë is.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Algemene 2D-vorms</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;border-radius:6px 0 0 0;">Vorm</th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#1e40af;">Sye</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#16a34a;">Hoekpunte</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;border-radius:0 6px 0 0;"><span style="color:#dc2626;">Hoeke</span></th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Sirkel</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">0 reguit sye<br/><span style="font-size:12px;">(1 geboë rand)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">0</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">0</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Driehoek</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">3</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">3</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">3</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Vierkant</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">4 <span style="font-size:12px;">(almal gelyk)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">4</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">4 regte hoeke</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Reghoek</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">4 <span style="font-size:12px;">(2 pare gelyk)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">4</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">4 regte hoeke</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Vyfhoek</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">5</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">5</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">5</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Seshoek</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">6</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">6</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">6</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Beskryf ʼn reghoek aan die hand van sy eienskappe.',
          steps: [
            '<strong style="color:#1e40af;">Tel die sye</strong> — ʼn reghoek het <strong>4 sye</strong>.',
            '<strong style="color:#1e40af;">Identifiseer gelyke sye</strong> — die <strong>oorstaande sye is gelyk</strong> in lengte (die twee lang sye is dieselfde en die twee kort sye is dieselfde).',
            '<strong style="color:#16a34a;">Tel die hoekpunte</strong> — ʼn reghoek het <strong>4 hoekpunte</strong>, een by elke hoek.',
            '<strong style="color:#dc2626;">Beskryf die hoeke</strong> — al <strong>4 hoeke is regte hoeke (90°)</strong>, net soos die hoek van ʼn stuk papier.',
          ],
          answer:
            'ʼn Reghoek het 4 sye met oorstaande sye gelyk in lengte, 4 hoekpunte en 4 regte hoeke (90°).',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Ses 2D-vorms duidelik gemerk — sirkel, driehoek, vierkant, reghoek, vyfhoek, seshoek — elkeen met sye, hoekpunte en hoeke aangedui',
      videoPlaceholder:
        'Kort video wat die eienskappe van algemene 2D-vorms noem en beskryf',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — 2D-VORMS SORTEER EN KLASSIFISEER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-classifying-2d-shapes',
      title: '2D-vorms Sorteer en Klassifiseer',
      icon: '🗂️',
      explanation: `
<p style="margin-bottom:14px;">Vorms kan <strong>gesorteer en geklassifiseer</strong> word volgens hul eienskappe. Wanneer ons vorms klassifiseer, kyk ons na dinge wat hulle in gemeen het — soos hoeveel sye hulle het, of hul hoeke regte hoeke is, of hul sye almal gelyk is.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Maniere om vorms te sorteer</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens aantal sye</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Driehoeke — 3 sye</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Vierhoeke — 4 sye</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Vyfhoeke — 5 sye</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Seshoeke — 6 sye</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Vierkante en reghoeke is albei <em>vierhoeke</em> omdat hulle albei 4 sye het.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens hoektipe</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Met regte hoeke — vierkant, reghoek, reghoekige driehoek</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Sonder regte hoeke — sirkel, gelyksydige driehoek, seshoek</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">ʼn <strong>Regte hoek</strong> lyk soos die hoek van ʼn boek of ʼn stuk papier — dit meet presies 90°.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens gelyke sye</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Reëlmatig — al die sye gelyk (bv. vierkant, gelyksydige driehoek)</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Onreëlmatig — sye nie almal gelyk nie (bv. reghoek, skalene driehoek)</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">ʼn <strong>Reëlmatige veelhoek</strong> het al die sye dieselfde lengte EN al die hoeke dieselfde grootte.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens reguit teenoor geboë sye</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Slegs reguit sye — driehoek, vierkant, reghoek, seshoek</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Geboë sye — sirkel, ovaal</span>
      </div>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Wat is ʼn veelhoek? 📐</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">ʼn <strong>Veelhoek</strong> is ʼn <strong>geslote 2D-vorm wat heeltemal uit reguit sye bestaan</strong>. Al die sye moet verbind wees en daar mag geen gapings wees nie. Driehoeke, vierkante, reghoeke, vyfhoeke en seshoeke is almal veelhoeke.</p>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;"><strong>Sirkels is NIE veelhoeke nie</strong> — ʼn sirkel het ʼn geboë rand, nie reguit sye nie. Ovale is ook nie veelhoeke om dieselfde rede nie.</p>
</div>
`,
      workedExamples: [
        {
          question:
            'Sorteer hierdie vorms in twee groepe — veelhoeke en nie-veelhoeke: sirkel, vierkant, driehoek, ovaal, reghoek, seshoek.',
          steps: [
            'Kyk na elke vorm: het dit <strong style="color:#1e40af;">slegs reguit sye</strong> EN is dit ʼn <strong style="color:#1e40af;">geslote vorm</strong>?',
            '<strong style="color:#1e40af;">Vierkant</strong> — 4 reguit sye, geslote ✔ veelhoek.',
            '<strong style="color:#1e40af;">Driehoek</strong> — 3 reguit sye, geslote ✔ veelhoek.',
            '<strong style="color:#1e40af;">Reghoek</strong> — 4 reguit sye, geslote ✔ veelhoek.',
            '<strong style="color:#1e40af;">Seshoek</strong> — 6 reguit sye, geslote ✔ veelhoek.',
            '<strong style="color:#64748b;">Sirkel</strong> — geboë rand, geen reguit sye nie ✘ nie ʼn veelhoek nie.',
            '<strong style="color:#64748b;">Ovaal</strong> — geboë rand, geen reguit sye nie ✘ nie ʼn veelhoek nie.',
          ],
          answer:
            'Veelhoeke: vierkant, driehoek, reghoek, seshoek.\nNie-veelhoeke: sirkel, ovaal.',
        },
        {
          question:
            'Watter van hierdie vorms het ten minste een regte hoek? Vierkant, driehoek, reghoek, sirkel, reghoekige driehoek.',
          steps: [
            'ʼn <strong style="color:#dc2626;">Regte hoek</strong> meet presies 90° — soos die hoek van ʼn stuk papier.',
            '<strong>Vierkant:</strong> al 4 hoeke is regte hoeke ✔',
            '<strong>Driehoek (gelyksydig):</strong> geen regte hoeke nie ✘',
            '<strong>Reghoek:</strong> al 4 hoeke is regte hoeke ✔',
            '<strong>Sirkel:</strong> glad geen hoeke nie ✘',
            '<strong>Reghoekige driehoek:</strong> het presies 1 regte hoek ✔',
          ],
          answer:
            'Vierkant, reghoek en reghoekige driehoek het ten minste een regte hoek.',
        },
        {
          question:
            'Sorteer hierdie in reëlmatige en onreëlmatige veelhoeke: gelyksydige driehoek, skalene driehoek, vierkant, reghoek.',
          steps: [
            'ʼn <strong style="color:#1e40af;">Reëlmatige veelhoek</strong> het <strong>al die sye gelyk</strong> EN <strong>al die hoeke gelyk</strong>.',
            '<strong>Gelyksydige driehoek:</strong> al 3 sye gelyk, al die hoeke 60° ✔ reëlmatig.',
            '<strong>Vierkant:</strong> al 4 sye gelyk, al die hoeke 90° ✔ reëlmatig.',
            '<strong>Skalene driehoek:</strong> al 3 sye verskillende lengtes ✘ onreëlmatig.',
            '<strong>Reghoek:</strong> oorstaande sye gelyk maar aangrensende sye verskillende lengtes ✘ onreëlmatig.',
          ],
          answer:
            'Reëlmatig: gelyksydige driehoek, vierkant.\nOnreëlmatig: skalene driehoek, reghoek.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Venn-diagram wat vorms sorteer in veelhoeke en nie-veelhoeke met voorbeeldvorms in elke afdeling',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — 2D-VORMS VERGELYK EN KONTRASTEER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-contrasting-2d-shapes',
      title: '2D-vorms Vergelyk en Kontrasteer',
      icon: '⚖️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Vorms vergelyk</strong> beteken om noukeurig na twee vorms langs mekaar te kyk om uit te vind hoe hulle <strong style="color:#16a34a;">eenders</strong> (dieselfde) is en hoe hulle <strong style="color:#dc2626;">verskil</strong>. Dit help ons om elke vorm se spesiale eienskappe dieper te verstaan.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Stap-vir-stap-metode om twee vorms te vergelyk</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Tel en vergelyk die aantal sye.</strong> Het elke vorm dieselfde aantal sye?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vergelyk die lengtes van die sye.</strong> Is al die sye gelyk, of verskil sommige sye?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vergelyk die hoeke.</strong> Is hulle regte hoeke, kleiner of groter?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vergelyk die aantal hoekpunte.</strong> Hoeveel hoeke het elke vorm?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Let op enige spesiale eienskappe</strong> — soos regte hoeke, gelyke sye, of geboë rande.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Vergelyk ʼn vierkant en ʼn reghoek.',
          steps: [
            '<strong style="color:#16a34a;">Ooreenkomste:</strong>',
            '✔ Albei het <strong>4 sye</strong>.',
            '✔ Albei het <strong>4 hoekpunte</strong>.',
            '✔ Albei het <strong>4 regte hoeke</strong> (90° elk).',
            '✔ Albei is <strong>vierhoeke</strong> (4-syige veelhoeke).',
            '✔ Albei is <strong>veelhoeke</strong> (geslote vorms met reguit sye).',
            '<strong style="color:#dc2626;">Verskille:</strong>',
            '✘ ʼn Vierkant het <strong>4 gelyke sye</strong>. ʼn Reghoek het <strong>2 pare gelyke sye</strong> (oorstaande sye is gelyk, maar aangrensende sye verskil).',
            '✘ ʼn Vierkant het <strong>gelyke lengte en breedte</strong>. ʼn Reghoek is <strong>langer as wat dit breed is</strong>.',
          ],
          answer:
            'Ooreenkomste: 4 sye, 4 hoekpunte, 4 regte hoeke, albei vierhoeke en veelhoeke.\nVerskille: ʼn Vierkant het 4 gelyke sye; ʼn reghoek het 2 pare gelyke sye. ʼn Vierkant het dieselfde lengte en breedte; ʼn reghoek is langer as wat dit breed is.',
        },
        {
          question: 'Vergelyk ʼn driehoek en ʼn seshoek.',
          steps: [
            '<strong style="color:#16a34a;">Ooreenkomste:</strong>',
            '✔ Albei is <strong>veelhoeke</strong> (geslote vorms met slegs reguit sye).',
            '✔ Albei het <strong>reguit sye</strong>.',
            '✔ Albei het <strong>hoekpunte</strong> (hoeke waar sye ontmoet).',
            '<strong style="color:#dc2626;">Verskille:</strong>',
            '✘ ʼn Driehoek het <strong>3 sye</strong>. ʼn Seshoek het <strong>6 sye</strong>.',
            '✘ ʼn Driehoek het <strong>3 hoekpunte</strong>. ʼn Seshoek het <strong>6 hoekpunte</strong>.',
            '✘ ʼn Driehoek het <strong>3 hoeke</strong>. ʼn Seshoek het <strong>6 hoeke</strong>.',
          ],
          answer:
            'Ooreenkomste: albei is veelhoeke met reguit sye en hoekpunte.\nVerskille: ʼn driehoek het 3 sye, 3 hoekpunte en 3 hoeke; ʼn seshoek het 6 sye, 6 hoekpunte en 6 hoeke.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — 2D-VORMS IN DIE OMGEWING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '2d-shapes-in-the-environment',
      title: '2D-vorms in die Omgewing',
      icon: '🌍',
      explanation: `
<p style="margin-bottom:14px;">2D-vorms is elke dag rondom ons! Sodra jy weet waarna om te soek, sal jy hulle oral begin raaksien — in jou klaskamer, by die huis en buite. Om vorms in die werklike lewe te leer herken, help jou om hul eienskappe nog beter te verstaan.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Vorms rondom jou</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Sirkel</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Wiele, munte, klokke, pizzas</strong> — almal rond sonder hoeke en sonder reguit sye.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Driehoek</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Dakvorms, waarskuwingsverkeersborde, pizzasnye</strong> — drie sye en drie hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Vierkant</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Teëls, vensters, skaakbordblokkies, plaknotas</strong> — vier gelyke sye en vier regte hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Reghoek</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Deure, boeke, skerms, bakstene</strong> — langer as wat hulle breed is, met vier regte hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Vyfhoek</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Die Pentagon-gebou in die VSA, sommige sokkerbal-lappies</strong> — vyf sye en vyf hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Seshoek</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Heuningkoekselle, sommige neute en boute</strong> — ses gelyke sye wat sonder enige gapings inpas.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Kyk na ʼn klaskamerdeur. Watter 2D-vorm is dit en wat is sy eienskappe?',
          steps: [
            'Kyk na die deur en <strong style="color:#1e40af;">tel die sye</strong> — ʼn deur het 4 sye.',
            'Kyk of die sye <strong style="color:#1e40af;">gelyk</strong> is — die twee lang sye is dieselfde lengte en die twee kort sye is dieselfde lengte, maar die lang sye is langer as die kort sye.',
            'Kyk na die <strong style="color:#dc2626;">hoeke</strong> — elke hoek van ʼn deur is ʼn regte hoek (90°).',
            'Identifiseer die <strong style="color:#16a34a;">vorm</strong> — 4 sye met 2 pare gelyke sye en 4 regte hoeke beteken dit is ʼn <strong>reghoek</strong>.',
            'Let op die <strong>spesiale eienskap</strong> — die hoogte van die deur is groter as sy breedte.',
          ],
          answer:
            'ʼn Deur is ʼn reghoek. Dit het 4 sye met 2 pare gelyke sye (oorstaande sye is gelyk), 4 regte hoeke en 4 hoekpunte. Die hoogte is groter as die breedte.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Ses regte-lewe-voorwerpe elkeen gemerk met hul 2D-vorm — ʼn munt (sirkel), ʼn toegeeteken (driehoek), ʼn venster (vierkant), ʼn deur (reghoek), ʼn heuningkoek (seshoek)',
      videoPlaceholder:
        'Kort video wat 2D-vorms wys wat in alledaagse regte-lewe-omgewings gevind word',
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Vorms Noem en Tel (pos 0-3, Maklik)
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn driehoek?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], answer: '3', explanation: 'ʼn Driehoek het 3 reguit sye.' },
        { difficulty: 'Easy', question: 'Hoeveel sye en hoeveel hoekpunte het ʼn vyfhoek?', checkMode: 'auto', correctAnswer: '5 sye, 5 hoekpunte', correctAnswers: ['5 sye, 5 hoekpunte', '5, 5', 'vyf sye, vyf hoekpunte'], answer: '5 sye, 5 hoekpunte', explanation: 'ʼn Vyfhoek het 5 reguit sye en 5 hoekpunte — een hoekpunt waar elke paar sye ontmoet.' },
        { difficulty: 'Easy', question: 'Hoeveel reguit sye en hoeveel hoekpunte het ʼn sirkel?', checkMode: 'auto', correctAnswer: '0 sye, 0 hoekpunte', correctAnswers: ['0 sye, 0 hoekpunte', '0, 0', 'nul sye, nul hoekpunte', 'geen, geen'], answer: '0 sye, 0 hoekpunte', explanation: 'ʼn Sirkel het een geboë rand en geen reguit sye nie, dus het dit ook geen hoekpunte nie (ʼn hoekpunt vorm slegs waar twee reguit sye ontmoet).' },
        { difficulty: 'Medium', question: 'ʼn Vorm het 6 hoekpunte. Hoeveel sye en hoeveel hoeke het dit — en waarom is al drie getalle altyd gelyk in ʼn veelhoek?', checkMode: 'self', answer: 'Dit het 6 sye en 6 hoeke. In enige veelhoek loop ʼn sy tussen twee hoekpunte en word ʼn hoek by elke hoekpunt gevorm waar twee sye ontmoet, dus is die aantal sye, hoekpunte en hoeke altyd dieselfde.' },

        // Blok 2 — Identifiseer die Vorm vanaf Leidrade (pos 4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Ek het 4 gelyke sye. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'ʼn vierkant'], answer: 'Vierkant', explanation: 'ʼn Vorm met 4 gelyke sye (en 4 regte hoeke) is ʼn vierkant.' },
        { difficulty: 'Easy', question: 'Ek het 6 reguit sye en 6 hoekpunte. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Seshoek', correctAnswers: ['Seshoek', 'seshoek', 'ʼn seshoek'], answer: 'Seshoek', explanation: 'ʼn Geslote vorm met 6 reguit sye is ʼn seshoek.' },
        { difficulty: 'Medium', question: 'Ek het 4 sye, 2 pare gelyke sye, en 4 regte hoeke, maar ek is langer as wat ek breed is. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], answer: 'Reghoek', explanation: 'ʼn Vorm met 2 pare gelyke sye, 4 regte hoeke, en ongelyke lengte en breedte is ʼn reghoek.' },
        { difficulty: 'Medium', question: 'Ek het een geboë rand, geen reguit sye nie, en glad geen hoekpunte nie. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Vorm met een geboë rand en geen reguit sye of hoekpunte is ʼn sirkel.' },

        // Blok 3 — Vierhoek- en Driehoek-eienskappe (pos 8-12, Medium) — rykste blok
        { difficulty: 'Medium', question: 'ʼn Vierhoek het al die sye gelyk, maar sy hoeke is nie regte hoeke nie. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Ruit', correctAnswers: ['Ruit', 'ruit', 'ʼn ruit'], answer: 'Ruit', explanation: 'ʼn Vierhoek met 4 gelyke sye maar hoeke wat nie noodwendig 90° is nie, is ʼn ruit.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het 2 pare parallelle, gelyke sye, maar geen regte hoeke nie. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Parallelogram', correctAnswers: ['Parallelogram', 'parallelogram', 'ʼn parallelogram'], answer: 'Parallelogram', explanation: 'ʼn Vierhoek met 2 pare parallelle, gelyke sye (en geen regte hoeke nie) is ʼn parallelogram.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het 2 gelyke sye en 2 gelyke hoeke. Watter tipe driehoek is dit?', checkMode: 'auto', correctAnswer: 'Gelykbenige driehoek', correctAnswers: ['Gelykbenige driehoek', 'gelykbenig', 'ʼn gelykbenige driehoek'], answer: 'Gelykbenige driehoek', explanation: 'ʼn Driehoek met presies 2 gelyke sye (en 2 gelyke hoeke) word ʼn gelykbenige driehoek genoem.' },
        {
          difficulty: 'Medium',
          question: 'Kyk na hierdie reghoek. Twee van sy sye is 6 cm en twee is 4 cm lank. Is dit ʼn reëlmatige of onreëlmatige veelhoek?',
          checkMode: 'auto',
          correctAnswer: 'Onreëlmatig',
          correctAnswers: ['Onreëlmatig', 'onreëlmatig', 'onreëlmatige veelhoek'],
          answer: 'Onreëlmatig',
          explanation: 'ʼn Reëlmatige veelhoek moet al die sye gelyk hê. Omdat twee sye 6 cm en twee sye 4 cm is, is hierdie reghoek onreëlmatig.',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="45" width="140" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="38" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="30" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><text x="190" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><rect x="40" y="45" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde reghoek (6 cm en 4 cm sye), hoeveel simmetrielyne het dit?',
          checkMode: 'auto',
          correctAnswer: '2',
          correctAnswers: ['2', 'twee'],
          answer: '2',
          explanation: 'ʼn Reghoek het 2 simmetrielyne — een horisontaal en een vertikaal, elkeen deur die middelpunte van oorstaande sye.',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="45" width="140" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="38" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="30" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><text x="190" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><rect x="40" y="45" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 4 — Sorteer en Klassifiseer (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: vierkant, sirkel, driehoek, seshoek, ovaal. Watter vorms is NIE veelhoeke nie?', checkMode: 'auto', correctAnswer: 'Sirkel, ovaal', correctAnswers: ['Sirkel, ovaal', 'ovaal, sirkel'], answer: 'Sirkel, ovaal', explanation: 'ʼn Sirkel en ʼn ovaal het albei geboë rande in plaas van reguit sye, dus is geeneen ʼn veelhoek nie.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: reghoek, gelyksydige driehoek, ruit, reghoekige driehoek. Watter vorms het ten minste een regte hoek?', checkMode: 'auto', correctAnswer: 'Reghoek, reghoekige driehoek', correctAnswers: ['Reghoek, reghoekige driehoek', 'reghoekige driehoek, reghoek'], answer: 'Reghoek, reghoekige driehoek', explanation: 'ʼn Reghoek het 4 regte hoeke, en ʼn reghoekige driehoek het presies 1 regte hoek. ʼn Gelyksydige driehoek en ʼn ruit het geen regte hoeke nie.' },
        {
          difficulty: 'Medium',
          question: 'Kyk na die vorms wat rondom die twee sirkels hieronder versprei is. Watter vorms behoort in die "Geboë sye" sirkel eerder as die "Slegs reguit sye" sirkel?',
          checkMode: 'auto',
          correctAnswer: 'Die sirkel en die ovaal-agtige vorm',
          correctAnswers: ['Die sirkel en die ovaal-agtige vorm', 'sirkel en ovaal', 'die sirkel en die ovaal'],
          answer: 'Die sirkel en die ovaal-agtige vorm',
          explanation: 'Die sirkel en die ovaalvorm het albei geboë buitelyne, dus behoort hulle in die "Geboë sye" groep. Die driehoek, vierkant en seshoek het almal slegs reguit sye.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Slegs reguit sye</text><text x="155" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Geboë sye</text><polygon points="45,60 65,45 85,60 78,80 52,80" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="40" y="105" width="30" height="30" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="185,45 200,55 197,73 173,73 170,55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="150" cy="120" r="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><ellipse cx="115" cy="150" rx="16" ry="10" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 5 — 2D-vorms in die Regte Lewe (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'ʼn Stopteken het 8 gelyke sye. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Agthoek', correctAnswers: ['Agthoek', 'agthoek', 'ʼn agthoek'], answer: 'Agthoek', explanation: 'ʼn Stopteken het 8 sye, wat dit ʼn agthoek maak.' },
        { difficulty: 'Medium', question: 'ʼn Heuningkoeksel het 6 gelyke sye. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Seshoek', correctAnswers: ['Seshoek', 'seshoek', 'ʼn seshoek'], answer: 'Seshoek', explanation: 'Heuningkoekselle is 6-syige vorms — seshoeke.' },

        // Blok 6 — Redenering, Vergelyking en Foutopsporing (pos 18-19, Moeilik)
        { difficulty: 'Hard', question: 'Sipho sê alle vierkante is reghoeke. Is hy korrek? Skryf ja of nee.', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], answer: 'Ja', explanation: 'Ja — ʼn vierkant het 4 regte hoeke en 2 pare gelyke sye, wat aan elke eienskap van ʼn reghoek voldoen, plus al 4 sye gelyk.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ʼn sirkel nie as ʼn veelhoek geklassifiseer kan word nie.', checkMode: 'self', answer: 'ʼn Veelhoek moet ʼn geslote vorm wees wat heeltemal uit reguit sye bestaan wat by hoekpunte ontmoet. ʼn Sirkel het een deurlopende geboë rand met geen reguit sye en geen hoekpunte nie, dus voldoen dit nie aan die definisie van ʼn veelhoek nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy ken jou 2D-vorms, eienskappe en redenering deur en deur.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug en hersien die eienskappe van elke vorm noukeurig.' },
        { minScore: 0, message: 'Hou aan oefen! Lees weer deur die studiegids en leer elke vorm noukeurig.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Vorms Noem en Tel (pos 0-3, Maklik)
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn seshoek?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], answer: '6', explanation: 'ʼn Seshoek het 6 reguit sye.' },
        { difficulty: 'Easy', question: 'Hoeveel sye en hoeveel hoekpunte het ʼn agthoek?', checkMode: 'auto', correctAnswer: '8 sye, 8 hoekpunte', correctAnswers: ['8 sye, 8 hoekpunte', '8, 8', 'agt sye, agt hoekpunte'], answer: '8 sye, 8 hoekpunte', explanation: 'ʼn Agthoek het 8 reguit sye en 8 hoekpunte — een waar elke paar sye ontmoet.' },
        { difficulty: 'Easy', question: 'Hoeveel regte hoeke het ʼn vierkant?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], answer: '4', explanation: 'ʼn Vierkant het 4 regte hoeke, een by elke hoek.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek en ʼn vierkant word langs mekaar geplaas. Hoeveel sye het hulle altesaam, en hoeveel hoekpunte het hulle altesaam?', checkMode: 'auto', correctAnswer: '7 sye, 7 hoekpunte', correctAnswers: ['7 sye, 7 hoekpunte', '7, 7', 'sewe sye, sewe hoekpunte'], answer: '7 sye, 7 hoekpunte', explanation: 'ʼn Driehoek het 3 sye en 3 hoekpunte, en ʼn vierkant het 4 sye en 4 hoekpunte. 3 + 4 = 7 vir albei totale.' },

        // Blok 2 — Identifiseer die Vorm vanaf Leidrade (pos 4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Ek het 3 sye wat almal verskillende lengtes is. Watter tipe driehoek is ek?', checkMode: 'auto', correctAnswer: 'Skalene driehoek', correctAnswers: ['Skalene driehoek', 'skalene', 'ʼn skalene driehoek'], answer: 'Skalene driehoek', explanation: 'ʼn Driehoek met al 3 sye verskillende lengtes word ʼn skalene driehoek genoem.' },
        { difficulty: 'Easy', question: 'Ek het 5 reguit sye en 5 hoekpunte. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Vyfhoek', correctAnswers: ['Vyfhoek', 'vyfhoek', 'ʼn vyfhoek'], answer: 'Vyfhoek', explanation: 'ʼn Geslote vorm met 5 reguit sye is ʼn vyfhoek.' },
        { difficulty: 'Medium', question: 'Ek het 4 sye wat almal gelyk in lengte is, maar my hoeke is 60° en 120°, nie 90° nie. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Ruit', correctAnswers: ['Ruit', 'ruit', 'ʼn ruit'], answer: 'Ruit', explanation: 'ʼn Vorm met 4 gelyke sye maar hoeke wat nie 90° is nie, is ʼn ruit, nie ʼn vierkant nie.' },
        { difficulty: 'Medium', question: 'Ek het presies een regte hoek, en my ander twee hoeke is nie gelyk aan mekaar nie. Watter tipe driehoek is ek?', checkMode: 'auto', correctAnswer: 'Reghoekige driehoek', correctAnswers: ['Reghoekige driehoek', 'ʼn reghoekige driehoek'], answer: 'Reghoekige driehoek', explanation: 'ʼn Driehoek met presies een hoek van 90° word ʼn reghoekige driehoek genoem.' },

        // Blok 3 — Vierhoek- en Driehoek-eienskappe (pos 8-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Vierhoek het presies een paar parallelle sye. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Trapesium', correctAnswers: ['Trapesium', 'trapesium', 'ʼn trapesium'], answer: 'Trapesium', explanation: 'ʼn Vierhoek met slegs een paar parallelle sye word ʼn trapesium genoem.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het 2 pare aangrensende gelyke sye, maar sy oorstaande sye is nie gelyk of parallel nie. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Vlieër', correctAnswers: ['Vlieër', 'vlieër', 'ʼn vlieër'], answer: 'Vlieër', explanation: 'ʼn Vlieër is ʼn vierhoek met 2 pare gelyke aangrensende sye, anders as ʼn reghoek of ruit waar oorstaande sye gelyk is.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het 3 gelyke sye en 3 gelyke hoeke. Watter tipe driehoek is dit, en is dit ʼn reëlmatige of onreëlmatige veelhoek?', checkMode: 'auto', correctAnswer: 'Gelyksydige driehoek, reëlmatig', correctAnswers: ['Gelyksydige driehoek, reëlmatig', 'gelyksydig, reëlmatig', 'ʼn gelyksydige driehoek, reëlmatig'], answer: 'Gelyksydige driehoek, reëlmatig', explanation: 'ʼn Driehoek met al 3 sye en hoeke gelyk is ʼn gelyksydige driehoek. Omdat al sy sye en hoeke gelyk is, is dit ook ʼn reëlmatige veelhoek.' },
        {
          difficulty: 'Medium',
          question: 'Kyk na die twee vierhoek-buitelyne hieronder. Die kepies wys gelyke sye en die pyltjies wys parallelle sye. Watter buitelyn (A of B) is die parallelogram?',
          checkMode: 'auto',
          correctAnswer: 'A',
          correctAnswers: ['A', 'a', 'vorm a', 'buitelyn a'],
          answer: 'A',
          explanation: 'Buitelyn A het 2 pare parallelle sye met pyltjies gemerk en 2 pare gelyke sye met kepies gemerk, dus is dit die parallelogram. Buitelyn B het slegs een paar parallelle sye, dus is dit ʼn trapesium.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="55" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">A</text><polygon points="20,50 90,45 100,95 30,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M50,47.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M60,97.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M22,75 l0,6" stroke="#2563eb" stroke-width="2"/><path d="M95,70 l0,6" stroke="#2563eb" stroke-width="2"/><text x="165" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">B</text><polygon points="140,55 200,50 190,100 130,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M165,52.5 l6,-1" stroke="#ea580c" stroke-width="2"/><path d="M155,100 l6,0" stroke="#ea580c" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde twee buitelyne (A en B), watter buitelyn is die trapesium, en hoeveel pare parallelle sye het dit?',
          checkMode: 'auto',
          correctAnswer: 'B, een paar',
          correctAnswers: ['B, een paar', 'b, 1 paar', 'buitelyn b, een paar'],
          answer: 'B, een paar',
          explanation: 'Buitelyn B het slegs een paar parallelle sye (gewys deur die passende pyltjies bo en onder), wat dit ʼn trapesium maak.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="55" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">A</text><polygon points="20,50 90,45 100,95 30,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M50,47.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M60,97.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M22,75 l0,6" stroke="#2563eb" stroke-width="2"/><path d="M95,70 l0,6" stroke="#2563eb" stroke-width="2"/><text x="165" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">B</text><polygon points="140,55 200,50 190,100 130,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M165,52.5 l6,-1" stroke="#ea580c" stroke-width="2"/><path d="M155,100 l6,0" stroke="#ea580c" stroke-width="2"/></svg>',
        },

        // Blok 4 — Sorteer en Klassifiseer (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: vierkant, reghoek, ruit, skalene driehoek. Watter vorms is reëlmatige veelhoeke?', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'slegs die vierkant'], answer: 'Vierkant', explanation: 'Slegs die vierkant het al die sye en al die hoeke gelyk. ʼn Reghoek en ruit het gelyke oorstaande sye maar nie al 4 gelyk nie, en ʼn skalene driehoek het geen gelyke sye nie.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: seshoek, sirkel, vlieër, ovaal. Watter vorms is veelhoeke?', checkMode: 'auto', correctAnswer: 'Seshoek, vlieër', correctAnswers: ['Seshoek, vlieër', 'vlieër, seshoek'], answer: 'Seshoek, vlieër', explanation: 'ʼn Seshoek en ʼn vlieër bestaan albei slegs uit reguit sye, dus is hulle veelhoeke. ʼn Sirkel en ʼn ovaal het geboë rande.' },
        {
          difficulty: 'Medium',
          question: 'Kyk na die vorms wat rondom die twee sirkels hieronder versprei is. Watter vorms behoort in die "Het ʼn regte hoek" sirkel?',
          checkMode: 'auto',
          correctAnswer: 'Die vierkant en die reghoekige driehoek',
          correctAnswers: ['Die vierkant en die reghoekige driehoek', 'vierkant en reghoekige driehoek', 'die vierkant en die reghoekige driehoek'],
          answer: 'Die vierkant en die reghoekige driehoek',
          explanation: 'Die vierkant het 4 regte hoeke en die reghoekige driehoek het presies 1 regte hoek, dus behoort albei in daardie sirkel. Die vyfhoek en die gelyksydig-lykende driehoek het geen regte hoeke nie.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Geen regte hoek</text><text x="155" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Het ʼn regte hoek</text><polygon points="50,50 80,45 90,70 65,85 40,70" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="45,110 65,95 85,110 78,130 52,130" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="55" width="35" height="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="150,120 190,120 150,155" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 5 — 2D-vorms in die Regte Lewe (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'ʼn Sokkerbal is bedek met lappies. Watter twee veelhoeke word gebruik om sy geboë oppervlak te bedek?', checkMode: 'auto', correctAnswer: 'Vyfhoeke en seshoeke', correctAnswers: ['Vyfhoeke en seshoeke', 'seshoeke en vyfhoeke', 'vyfhoek en seshoek', 'seshoek en vyfhoek'], answer: 'Vyfhoeke en seshoeke', explanation: 'Sokkerballe word tradisioneel bedek met vyfhoek- en seshoeklappies wat sonder gapings inpas.' },
        { difficulty: 'Medium', question: 'Waarom kom vloertëels gewoonlik in vierkante of seshoeke voor eerder as sirkels?', checkMode: 'self', answer: 'Vierkante en seshoeke het reguit sye wat perfek sonder gapings tussen hulle inpas (hulle tesseleer). Sirkels is geboë, dus laat hulle altyd klein gapings as hulle bymekaar gepak word, wat materiaal sou mors en ʼn ongelyke vloer sou laat.' },

        // Blok 6 — Redenering, Vergelyking en Foutopsporing (pos 18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Parallelogram en ʼn ruit het albei 2 pare parallelle sye. Watter ekstra eienskap moet ʼn ruit hê wat ʼn algemene parallelogram nie hoef te hê nie?', checkMode: 'auto', correctAnswer: 'Al 4 sye gelyk', correctAnswers: ['Al 4 sye gelyk', 'al die sye gelyk', '4 gelyke sye'], answer: 'Al 4 sye gelyk', explanation: 'ʼn Ruit is ʼn spesiale parallelogram waar al 4 sye gelyk in lengte is.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn ruit, ʼn vierkant, en ʼn reghoek. Watter eienskap deel die ruit met die vierkant maar NIE met die reghoek nie?', checkMode: 'self', answer: 'ʼn Ruit en ʼn vierkant het altyd albei 4 gelyke sye. ʼn Reghoek het net 2 pare gelyke oorstaande sye nodig, nie al 4 sye gelyk nie, dus deel die reghoek nie hierdie eienskap nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy kan vorms met ware selfvertroue vanaf hul eienskappe identifiseer.' },
        { minScore: 15, message: 'Puik werk! ʼn Vinnige hersiening van die lastiger eienskappe sal dit volmaak maak.' },
        { minScore: 10, message: 'Goeie poging! Hersien die eienskappe van vierhoeke soos die ruit en trapesium.' },
        { minScore: 0, message: 'Hou aan! Lees weer noukeurig deur die eienskappe van elke vorm.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Vorms Noem en Tel (pos 0-3, Maklik)
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn sewehoek?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'sewe'], answer: '7', explanation: 'ʼn Sewehoek het 7 reguit sye.' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn reghoek, en hoeveel pare van daardie sye is gelyk?', checkMode: 'auto', correctAnswer: '4 sye, 2 pare', correctAnswers: ['4 sye, 2 pare', '4, 2', 'vier sye, twee pare'], answer: '4 sye, 2 pare', explanation: 'ʼn Reghoek het altesaam 4 sye, bestaande uit 2 pare gelyke oorstaande sye.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn sirkel, en waarom?', checkMode: 'auto', correctAnswer: '0, omdat dit geen reguit sye het nie', correctAnswers: ['0, omdat dit geen reguit sye het nie', '0', 'nul, geen reguit sye nie', 'geen, geen reguit sye nie'], answer: '0, omdat dit geen reguit sye het nie', explanation: 'ʼn Hoekpunt is waar twee reguit sye ontmoet. ʼn Sirkel het een geboë rand en geen reguit sye nie, dus het dit 0 hoekpunte.' },
        { difficulty: 'Medium', question: 'ʼn Vorm het meer sye as ʼn seshoek maar minder sye as ʼn agthoek. Noem die vorm.', checkMode: 'auto', correctAnswer: 'Sewehoek', correctAnswers: ['Sewehoek', 'sewehoek', 'ʼn sewehoek'], answer: 'Sewehoek', explanation: 'ʼn Seshoek het 6 sye en ʼn agthoek het 8 sye. Die vorm met 7 sye, tussen hulle, is ʼn sewehoek.' },

        // Blok 2 — Identifiseer die Vorm vanaf Leidrade (pos 4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Ek het 3 gelyke sye en 3 gelyke hoeke. Watter tipe driehoek is ek?', checkMode: 'auto', correctAnswer: 'Gelyksydige driehoek', correctAnswers: ['Gelyksydige driehoek', 'gelyksydig', 'ʼn gelyksydige driehoek'], answer: 'Gelyksydige driehoek', explanation: 'ʼn Driehoek met al 3 sye en al 3 hoeke gelyk is ʼn gelyksydige driehoek.' },
        { difficulty: 'Easy', question: 'Ek het 4 sye, 2 pare gelyke sye en 4 regte hoeke, maar ek is nie ʼn vierkant nie. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], answer: 'Reghoek', explanation: 'ʼn Vorm met 2 pare gelyke sye en 4 regte hoeke, maar nie al 4 sye gelyk nie, is ʼn reghoek.' },
        { difficulty: 'Medium', question: 'Ek het presies een geboë rand, geen hoeke nie, en ek rol glad in elke rigting. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Vorm met slegs ʼn geboë rand en geen hoeke nie is ʼn sirkel.' },
        { difficulty: 'Medium', question: 'Ek het 6 reguit sye, 6 hoekpunte, en al my sye en hoeke is gelyk. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Reëlmatige seshoek', correctAnswers: ['Reëlmatige seshoek', 'seshoek', 'ʼn reëlmatige seshoek', 'ʼn seshoek'], answer: 'Reëlmatige seshoek', explanation: 'ʼn Geslote vorm met 6 gelyke sye en 6 gelyke hoeke is ʼn reëlmatige seshoek.' },

        // Blok 3 — Vierhoek- en Driehoek-eienskappe (pos 8-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Vierhoek het 2 pare parallelle sye en 2 pare gelyke sye, maar geen regte hoeke nie. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Parallelogram', correctAnswers: ['Parallelogram', 'parallelogram', 'ʼn parallelogram'], answer: 'Parallelogram', explanation: 'ʼn Vierhoek met 2 pare parallelle, gelyke sye (en geen regte hoeke nie) is ʼn parallelogram.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het 3 sye wat almal verskillende lengtes is, en 3 verskillende hoeke. Watter tipe driehoek is dit?', checkMode: 'auto', correctAnswer: 'Skalene driehoek', correctAnswers: ['Skalene driehoek', 'skalene', 'ʼn skalene driehoek'], answer: 'Skalene driehoek', explanation: 'ʼn Driehoek sonder gelyke sye (en dus sonder gelyke hoeke) is ʼn skalene driehoek.' },
        { difficulty: 'Medium', question: 'Watter vorm het al die sye gelyk EN al die hoeke gelyk aan 90°?', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'ʼn vierkant'], answer: 'Vierkant', explanation: 'ʼn Vierkant het albei eienskappe: 4 gelyke sye en 4 regte hoeke (90° elk).' },
        {
          difficulty: 'Medium',
          question: 'Kyk na hierdie reghoek. Twee van sy sye is 9 cm en twee is 5 cm lank. Is dit ʼn reëlmatige of onreëlmatige veelhoek?',
          checkMode: 'auto',
          correctAnswer: 'Onreëlmatig',
          correctAnswers: ['Onreëlmatig', 'onreëlmatig', 'onreëlmatige veelhoek'],
          answer: 'Onreëlmatig',
          explanation: 'ʼn Reëlmatige veelhoek moet al die sye gelyk hê. Omdat twee sye 9 cm en twee sye 5 cm is, is hierdie reghoek onreëlmatig.',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="43" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="25" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><text x="195" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><rect x="35" y="50" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde reghoek (9 cm en 5 cm sye), hoeveel simmetrielyne het dit?',
          checkMode: 'auto',
          correctAnswer: '2',
          correctAnswers: ['2', 'twee'],
          answer: '2',
          explanation: 'ʼn Reghoek het 2 simmetrielyne — een horisontaal en een vertikaal, elkeen deur die middelpunte van oorstaande sye.',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="43" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="25" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><text x="195" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><rect x="35" y="50" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 4 — Sorteer en Klassifiseer (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: vyfhoek, sirkel, ruit, ovaal, sewehoek. Watter vorms is veelhoeke?', checkMode: 'auto', correctAnswer: 'Vyfhoek, ruit, sewehoek', correctAnswers: ['Vyfhoek, ruit, sewehoek', 'vyfhoek, sewehoek, ruit', 'ruit, vyfhoek, sewehoek', 'ruit, sewehoek, vyfhoek', 'sewehoek, vyfhoek, ruit', 'sewehoek, ruit, vyfhoek'], answer: 'Vyfhoek, ruit, sewehoek', explanation: 'ʼn Vyfhoek, ruit, en sewehoek bestaan almal slegs uit reguit sye. ʼn Sirkel en ʼn ovaal het geboë rande, dus is hulle nie veelhoeke nie.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: gelyksydige driehoek, gelykbenige driehoek, vierkant, vlieër. Watter vorms is reëlmatige veelhoeke?', checkMode: 'auto', correctAnswer: 'Gelyksydige driehoek, vierkant', correctAnswers: ['Gelyksydige driehoek, vierkant', 'vierkant, gelyksydige driehoek'], answer: 'Gelyksydige driehoek, vierkant', explanation: 'ʼn Gelyksydige driehoek en ʼn vierkant het albei al die sye en al die hoeke gelyk, wat hulle reëlmatige veelhoeke maak. ʼn Gelykbenige driehoek en ʼn vlieër het nie al die sye gelyk nie.' },
        {
          difficulty: 'Medium',
          question: 'Kyk na die vorms wat rondom die twee sirkels hieronder versprei is. Watter vorms behoort in die "Reëlmatig" sirkel?',
          checkMode: 'auto',
          correctAnswer: 'Die vierkant en die gelyksydig-lykende driehoek',
          correctAnswers: ['Die vierkant en die gelyksydig-lykende driehoek', 'vierkant en driehoek', 'die vierkant en die driehoek'],
          answer: 'Die vierkant en die gelyksydig-lykende driehoek',
          explanation: 'Die vierkant en die driehoek met gelyke sye het al die sye en hoeke gelyk, dus is hulle reëlmatig. Die reghoek en die vlieër-vormige buitelyn het nie al die sye gelyk nie, dus is hulle onreëlmatig.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Onreëlmatig</text><text x="155" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Reëlmatig</text><rect x="35" y="55" width="45" height="25" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="45,110 65,100 85,115 75,135 50,132" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="140" y="60" width="35" height="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="160,115 180,145 140,145" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 5 — 2D-vorms in die Regte Lewe (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'ʼn Boek se voorblad het 2 pare gelyke sye en 4 regte hoeke, en dit is langer as wat dit breed is. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], answer: 'Reghoek', explanation: 'ʼn Boekomslag met hierdie eienskappe pas by ʼn reghoek.' },
        { difficulty: 'Medium', question: 'ʼn Sny waatlemoen (die geboë skil) laat ons dink aan deel van watter 2D-vorm?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Hele waatlemoen is rond soos ʼn sirkel (ʼn sfeer in 3D), dus wys ʼn sny deel van ʼn sirkel.' },

        // Blok 6 — Redenering, Vergelyking en Foutopsporing (pos 18-19, Moeilik)
        { difficulty: 'Hard', question: 'Amahle sê alle reghoeke is vierkante. Is sy korrek? Skryf ja of nee.', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], answer: 'Nee', explanation: 'Nee — ʼn reghoek het net 2 pare gelyke sye nodig, nie al 4 sye gelyk nie, dus is nie elke reghoek ʼn vierkant nie.' },
        { difficulty: 'Hard', question: 'Thabo beskryf ʼn vorm so: "Dit het 4 sye, al 4 hoeke is regte hoeke, en al 4 sye is 5 cm." Toe noem hy dit ʼn ruit. Vind sy fout en noem die vorm korrek.', checkMode: 'self', answer: 'Thabo het ʼn fout gemaak met die naam. ʼn Vorm met 4 gelyke sye en 4 regte hoeke is ʼn vierkant, nie ʼn ruit nie. ʼn Ruit het ook 4 gelyke sye, maar sy hoeke hoef nie 90° te wees nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het 2D-vorms oor elke vaardigheid heen ten volle bemeester.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug en lees deur die afdelings wat jy lastig gevind het.' },
        { minScore: 0, message: 'Hou aan! Lees weer noukeurig deur die hele studiegids en probeer dan weer.' },
      ],
    },
  ],
}
