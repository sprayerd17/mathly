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
      diagramPlaceholder:
        'Ses regte-lewe-voorwerpe elkeen gemerk met hul 2D-vorm — ʼn munt (sirkel), ʼn toegeeteken (driehoek), ʼn venster (vierkant), ʼn deur (reghoek), ʼn heuningkoek (seshoek)',
      videoPlaceholder:
        'Kort video wat 2D-vorms wys wat in alledaagse regte-lewe-omgewings gevind word',
    },
  ],

  topicPractice: [

    // ── AFDELING 1 — Wat is 2D-vorms ───────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Hoeveel sye en hoekpunte het ʼn seshoek?',
      checkMode: 'auto',
      answer: 'a) 6   b) 6',
      parts: [
        {
          label: 'a) Aantal sye',
          correctAnswer: '6',
          correctAnswers: ['6', 'ses'],
          explanation: 'ʼn Seshoek het 6 sye.',
        },
        {
          label: 'b) Aantal hoekpunte',
          correctAnswer: '6',
          correctAnswers: ['6', 'ses'],
          explanation: 'ʼn Seshoek het 6 hoekpunte — een by elke hoek waar twee sye ontmoet.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Beskryf die eienskappe van ʼn vierkant. Sluit die aantal sye, hoekpunte, hoeke in en of die sye gelyk is.',
      checkMode: 'self',
      answer:
        'ʼn Vierkant het 4 gelyke sye, 4 hoekpunte en 4 regte hoeke (90°). Omdat al die sye gelyk is en al die hoeke gelyk is, is dit ʼn reëlmatige vierhoek.',
    },

    {
      difficulty: 'Hard',
      question:
        'ʼn Vorm het 5 sye en 5 hoekpunte. Al die sye is gelyk en al die hoeke is gelyk.',
      checkMode: 'auto',
      answer: 'a) Vyfhoek   b) Reëlmatig   c) 5',
      parts: [
        {
          label: 'a) Naam van hierdie vorm',
          correctAnswer: 'Vyfhoek',
          correctAnswers: ['Vyfhoek', 'vyfhoek', 'ʼn vyfhoek'],
          explanation:
            'ʼn Geslote vorm met 5 reguit sye en 5 hoekpunte is ʼn vyfhoek.',
        },
        {
          label: 'b) Reëlmatige of onreëlmatige veelhoek?',
          correctAnswer: 'Reëlmatig',
          correctAnswers: ['Reëlmatig', 'reëlmatig', 'reëlmatige veelhoek'],
          explanation:
            'Omdat al 5 sye gelyk in lengte is en al 5 hoeke gelyk in grootte is, is dit ʼn reëlmatige veelhoek.',
        },
        {
          label: 'c) Aantal simmetrielyne',
          correctAnswer: '5',
          correctAnswers: ['5', 'vyf'],
          explanation:
            'ʼn Reëlmatige vyfhoek het 5 simmetrielyne — een deur elke hoekpunt en die middelpunt van die oorstaande sy.',
        },
      ],
    },

    // ── AFDELING 2 — 2D-vorms Sorteer en Klassifiseer ────────────────────────

    {
      difficulty: 'Easy',
      question: 'Is ʼn sirkel ʼn veelhoek? Skryf ja of nee en gee een rede.',
      checkMode: 'self',
      answer:
        'Nee. ʼn Sirkel is nie ʼn veelhoek nie omdat dit ʼn geboë rand het, nie reguit sye nie. ʼn Veelhoek moet ʼn geslote vorm met slegs reguit sye wees.',
    },

    {
      difficulty: 'Medium',
      question:
        'Sorteer hierdie vorms in twee groepe — vorms met regte hoeke en vorms sonder regte hoeke:\nvierkant, sirkel, driehoek, reghoek, gelyksydige driehoek, reghoekige driehoek',
      checkMode: 'auto',
      answer: 'a) vierkant, reghoek, reghoekige driehoek   b) sirkel, gelyksydige driehoek',
      parts: [
        {
          label: 'a) Vorms met regte hoeke',
          correctAnswer: 'vierkant, reghoek, reghoekige driehoek',
          correctAnswers: [
            'vierkant, reghoek, reghoekige driehoek',
            'vierkant, reghoekige driehoek, reghoek',
            'reghoek, vierkant, reghoekige driehoek',
            'reghoek, reghoekige driehoek, vierkant',
            'reghoekige driehoek, vierkant, reghoek',
            'reghoekige driehoek, reghoek, vierkant',
          ],
          explanation:
            'ʼn Vierkant het 4 regte hoeke, ʼn reghoek het 4 regte hoeke, en ʼn reghoekige driehoek het presies 1 regte hoek.',
        },
        {
          label: 'b) Vorms sonder regte hoeke',
          correctAnswer: 'sirkel, gelyksydige driehoek',
          correctAnswers: [
            'sirkel, gelyksydige driehoek',
            'gelyksydige driehoek, sirkel',
          ],
          explanation:
            'ʼn Sirkel het glad geen hoeke nie. ʼn Gelyksydige driehoek het drie hoeke van 60° — geeneen is ʼn regte hoek nie.',
        },
      ],
    },

    // Vraag 6 a/b/c — outomaties nagesien
    {
      difficulty: 'Hard',
      question:
        'ʼn Vorm het 4 sye. Twee sye is 5 cm lank en twee sye is 3 cm lank. Al die hoeke is regte hoeke.',
      checkMode: 'auto',
      answer: 'a) Reghoek   b) Onreëlmatig   c) 2',
      parts: [
        {
          label: 'a) Naam van hierdie vorm',
          correctAnswer: 'Reghoek',
          correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'],
          explanation:
            'ʼn Vorm met 4 sye, 2 pare gelyke sye en 4 regte hoeke is ʼn reghoek.',
        },
        {
          label: 'b) Reëlmatig of onreëlmatig?',
          correctAnswer: 'Onreëlmatig',
          correctAnswers: ['Onreëlmatig', 'onreëlmatig', 'onreëlmatige veelhoek'],
          explanation:
            'Dit is onreëlmatig omdat nie al die sye gelyk is nie — twee sye is 5 cm en twee sye is 3 cm.',
        },
        {
          label: 'c) Aantal simmetrielyne',
          correctAnswer: '2',
          correctAnswers: ['2', 'twee'],
          explanation:
            'ʼn Reghoek het 2 simmetrielyne — een horisontaal en een vertikaal, elkeen wat deur die middelpunte van oorstaande sye loop.',
        },
      ],
    },

    // Vraag 6 d — self nagesien
    {
      difficulty: 'Hard',
      question:
        'ʼn Vorm het 4 sye. Twee sye is 5 cm lank en twee sye is 3 cm lank. Al die hoeke is regte hoeke.\nd) Wat maak hierdie vorm anders as ʼn vierkant?',
      checkMode: 'self',
      answer:
        'ʼn Vierkant het al 4 sye gelyk in lengte. Hierdie vorm (ʼn reghoek) het 2 pare gelyke sye — die twee lang sye is gelyk en die twee kort sye is gelyk, maar die lang sye is langer as die kort sye.',
    },

    // ── AFDELING 3 — 2D-vorms Vergelyk en Kontrasteer ──────────────────────

    {
      difficulty: 'Easy',
      question: 'Skryf een ooreenkoms en een verskil tussen ʼn vierkant en ʼn reghoek.',
      checkMode: 'self',
      answer:
        'Ooreenkoms: albei het 4 sye, 4 hoekpunte en 4 regte hoeke.\nVerskil: ʼn vierkant het 4 gelyke sye, maar ʼn reghoek het 2 pare gelyke sye (oorstaande sye is gelyk maar aangrensende sye verskil).',
    },

    {
      difficulty: 'Medium',
      question:
        'Vergelyk ʼn driehoek en ʼn vyfhoek.\na) Skryf twee ooreenkomste.\nb) Skryf twee verskille.',
      checkMode: 'self',
      answer:
        'a) Ooreenkomste: albei is veelhoeke (geslote vorms met slegs reguit sye); albei het hoekpunte waar hul sye ontmoet.\nb) Verskille: ʼn driehoek het 3 sye terwyl ʼn vyfhoek 5 sye het; ʼn driehoek het 3 hoekpunte terwyl ʼn vyfhoek 5 hoekpunte het.',
    },

    {
      difficulty: 'Hard',
      question:
        'Lerato sê ʼn vierkant is net ʼn spesiale reghoek. Is sy reg? Verduidelik volledig aan die hand van die eienskappe van albei vorms.',
      checkMode: 'self',
      answer:
        'Ja, sy is reg. ʼn Reghoek het 4 sye, 4 regte hoeke en 2 pare gelyke sye. ʼn Vierkant het al hierdie selfde eienskappe, maar dit het ook al 4 sye gelyk in lengte. Dit beteken ʼn vierkant voldoen aan elke voorwaarde van ʼn reghoek, wat dit ʼn spesiale tipe reghoek maak.',
    },

    // ── AFDELING 4 — 2D-vorms in die Omgewing ─────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Noem die 2D-vorm wat elke voorwerp die beste beskryf.',
      checkMode: 'auto',
      answer: 'a) Sirkel   b) Reghoek   c) Driehoek',
      parts: [
        {
          label: 'a) ʼn Munt',
          correctAnswer: 'Sirkel',
          correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'],
          explanation:
            'ʼn Munt is rond sonder reguit sye of hoeke — dit is ʼn sirkel.',
        },
        {
          label: 'b) ʼn Klaskamerdeur',
          correctAnswer: 'Reghoek',
          correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'],
          explanation:
            'ʼn Deur het 4 sye met 2 pare gelyke sye en 4 regte hoeke — dit is ʼn reghoek.',
        },
        {
          label: 'c) ʼn Toegee-padteken',
          correctAnswer: 'Driehoek',
          correctAnswers: ['Driehoek', 'driehoek', 'ʼn driehoek'],
          explanation:
            'ʼn Toegeeteken het 3 sye en 3 hoeke — dit is ʼn driehoek.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Kyk rond in jou klaskamer of by die huis. Vind een regte-lewe-voorbeeld van elke vorm.\na) Vierkant\nb) Reghoek\nc) Sirkel',
      checkMode: 'self',
      answer:
        'Aanvaar enige geldige regte-lewe-voorbeelde.\na) Vierkant — bv. ʼn teël, ʼn plaknota, ʼn skaakbordblokkie.\nb) Reghoek — bv. ʼn boek, ʼn deur, ʼn liniaal, ʼn skerm.\nc) Sirkel — bv. ʼn klok, ʼn munt, ʼn wiel, ʼn bord.',
    },

    // Vraag 12 a/b — outomaties nagesien
    {
      difficulty: 'Hard',
      question:
        'ʼn Sokkerbal het lappies wat vyfhoeke en seshoeke is.',
      checkMode: 'auto',
      answer: 'a) 5   b) 6',
      parts: [
        {
          label: 'a) Hoeveel sye het ʼn vyfhoek?',
          correctAnswer: '5',
          correctAnswers: ['5', 'vyf'],
          explanation: 'ʼn Vyfhoek het 5 sye.',
        },
        {
          label: 'b) Hoeveel sye het ʼn seshoek?',
          correctAnswer: '6',
          correctAnswers: ['6', 'ses'],
          explanation: 'ʼn Seshoek het 6 sye.',
        },
      ],
    },

    // Vraag 12 c/d — self nagesien
    {
      difficulty: 'Hard',
      question:
        'ʼn Sokkerbal het lappies wat vyfhoeke en seshoeke is.\nc) Waarom dink jy word hierdie twee vorms saam op ʼn sokkerbal gebruik?\nd) Watter eienskap moet die vorms hê om sonder gapings by mekaar te pas?',
      checkMode: 'self',
      answer:
        'c) Vyfhoeke en seshoeke pas perfek by mekaar om die geboë oppervlak van ʼn sokkerbal te bedek sonder gapings en sonder oorvleueling.\nd) Die vorms moet teëlvorm (tesseleer) — wat beteken hulle kan rand-aan-rand by mekaar inpas sonder om enige gapings te laat.',
    },

  ],

  scoreMessages: [
    { minScore: 23, message: 'Volpunte! Jy het 2D-vorms bemeester.' },
    { minScore: 18, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
    { minScore: 12, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0, message: 'Hou aan probeer! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
