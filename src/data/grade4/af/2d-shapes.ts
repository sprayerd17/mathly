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
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Onreëlmatig — sye nie almal gelyk nie (bv. reghoek, ongelyksydige driehoek)</span>
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
            'Sorteer hierdie in reëlmatige en onreëlmatige veelhoeke: gelyksydige driehoek, ongelyksydige driehoek, vierkant, reghoek.',
          steps: [
            'ʼn <strong style="color:#1e40af;">Reëlmatige veelhoek</strong> het <strong>al die sye gelyk</strong> EN <strong>al die hoeke gelyk</strong>.',
            '<strong>Gelyksydige driehoek:</strong> al 3 sye gelyk, al die hoeke 60° ✔ reëlmatig.',
            '<strong>Vierkant:</strong> al 4 sye gelyk, al die hoeke 90° ✔ reëlmatig.',
            '<strong>Ongelyksydige driehoek:</strong> al 3 sye verskillende lengtes ✘ onreëlmatig.',
            '<strong>Reghoek:</strong> oorstaande sye gelyk maar aangrensende sye verskillende lengtes ✘ onreëlmatig.',
          ],
          answer:
            'Reëlmatig: gelyksydige driehoek, vierkant.\nOnreëlmatig: ongelyksydige driehoek, reghoek.',
        },
      ],
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
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn driehoek?', checkMode: 'auto', options: ['4', '3', '2', '5'], correctIndex: 1, explanation: 'ʼn Driehoek het 3 reguit sye. (4 verwar dit met ʼn vierhoek, 2 is te min om ʼn vorm te sluit, en 5 is ʼn vyfhoek.)' },
        { difficulty: 'Easy', question: 'Hoeveel sye en hoeveel hoekpunte het ʼn vyfhoek?', checkMode: 'auto', options: ['5 sye, 4 hoekpunte', '4 sye, 5 hoekpunte', '5 sye, 5 hoekpunte', '6 sye, 6 hoekpunte'], correctIndex: 2, explanation: 'ʼn Vyfhoek het 5 reguit sye en 5 hoekpunte — een hoekpunt waar elke paar sye ontmoet. (5 sye/4 hoekpunte en 4 sye/5 hoekpunte breek albei die reël dat sye en hoekpunte altyd gelyk is in ʼn veelhoek; 6 en 6 is ʼn seshoek.)' },
        { difficulty: 'Easy', question: 'Hoeveel reguit sye en hoeveel hoekpunte het ʼn sirkel?', checkMode: 'auto', options: ['1 sy, 1 hoekpunt', '0 sye, 1 hoekpunt', '1 sy, 0 hoekpunte', '0 sye, 0 hoekpunte'], correctIndex: 3, explanation: 'ʼn Sirkel het een geboë rand en geen reguit sye nie, dus het dit ook geen hoekpunte nie (ʼn hoekpunt vorm slegs waar twee reguit sye ontmoet). Om die geboë rand as "1 sy" te tel, is ʼn algemene fout.' },
        {
          difficulty: 'Medium',
          question: 'ʼn Vorm het 6 hoekpunte. Watter stelling oor sy sye en hoeke is korrek?',
          checkMode: 'auto',
          options: [
            'Dit het 6 sye en 6 hoeke, want elke hoekpunt is waar twee sye ontmoet en een hoek gevorm word.',
            'Dit het 5 sye en 6 hoeke, want die laaste hoekpunt het nie ʼn sy nodig nie.',
            'Dit het 6 sye maar slegs 3 hoeke, want oorstaande hoeke word tussen hoekpunte gedeel.',
            'Dit het 12 sye, want elke hoekpunt verbind met twee aparte sye.',
          ],
          correctIndex: 0,
          explanation: 'In enige veelhoek loop ʼn sy tussen twee hoekpunte en word ʼn hoek by elke hoekpunt gevorm waar twee sye ontmoet, dus is die aantal sye, hoekpunte en hoeke altyd dieselfde — 6 sye en 6 hoeke.',
        },

        // Blok 2 — Identifiseer die Vorm vanaf Leidrade (pos 4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Ek het 4 gelyke sye en 4 regte hoeke. Watter vorm is ek?', checkMode: 'auto', options: ['Ruit', 'Reghoek', 'Vierkant', 'Parallelogram'], correctIndex: 2, explanation: 'ʼn Vorm met 4 gelyke sye ÉN 4 regte hoeke is ʼn vierkant. (ʼn Ruit het 4 gelyke sye maar nie noodwendig regte hoeke nie; ʼn reghoek het regte hoeke maar nie noodwendig al die sye gelyk nie; ʼn parallelogram het nie een van die twee nodig nie.)' },
        { difficulty: 'Easy', question: 'Ek het 6 reguit sye en 6 hoekpunte. Watter vorm is ek?', checkMode: 'auto', options: ['Vyfhoek', 'Seshoek', 'Sewehoek', 'Agthoek'], correctIndex: 1, explanation: 'ʼn Geslote vorm met 6 reguit sye is ʼn seshoek. (ʼn Vyfhoek het 5 sye, ʼn sewehoek 7, en ʼn agthoek 8.)' },
        { difficulty: 'Medium', question: 'Ek het 4 sye, 2 pare gelyke sye, en 4 regte hoeke, maar ek is langer as wat ek breed is. Watter vorm is ek?', checkMode: 'auto', options: ['Vierkant', 'Ruit', 'Reghoek', 'Parallelogram'], correctIndex: 2, explanation: 'ʼn Vorm met 2 pare gelyke sye, 4 regte hoeke, en ongelyke lengte en breedte is ʼn reghoek. (ʼn Vierkant sou gelyke lengte en breedte hê; ʼn ruit en parallelogram het nie regte hoeke nodig nie.)' },
        { difficulty: 'Medium', question: 'Ek het een geboë rand, geen reguit sye nie, en glad geen hoekpunte nie. Watter vorm is ek?', checkMode: 'auto', options: ['Ovaal', 'Halfsirkel', 'Sirkel', 'Sfeer'], correctIndex: 2, explanation: 'ʼn Vorm met een geboë rand en geen reguit sye of hoekpunte is ʼn sirkel. (ʼn Ovaal is ook geboë maar nie perfek rond nie; ʼn halfsirkel het 1 reguit rand en 2 hoekpunte; ʼn sfeer is ʼn 3D-vorm, nie ʼn 2D-vorm nie.)' },

        // Blok 3 — Vierhoek- en Driehoek-eienskappe (pos 8-12, Medium) — rykste blok
        { difficulty: 'Medium', question: 'ʼn Vierhoek het al die sye gelyk, maar sy hoeke is nie regte hoeke nie. Wat is sy naam?', checkMode: 'auto', options: ['Vierkant', 'Vlieër', 'Parallelogram', 'Ruit'], correctIndex: 3, explanation: 'ʼn Vierhoek met 4 gelyke sye maar hoeke wat nie noodwendig 90° is nie, is ʼn ruit. (ʼn Vierkant sou ook regte hoeke nodig hê; ʼn vlieër het slegs 2 pare gelyke aangrensende sye, nie al 4 gelyk nie; ʼn parallelogram hoef nie al die sye gelyk te hê nie.)' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het 2 pare parallelle, gelyke sye, maar geen regte hoeke nie. Wat is sy naam?', checkMode: 'auto', options: ['Ruit', 'Reghoek', 'Parallelogram', 'Trapesium'], correctIndex: 2, explanation: 'ʼn Vierhoek met 2 pare parallelle, gelyke sye (en geen regte hoeke nie) is ʼn parallelogram. (ʼn Ruit het boonop al 4 sye gelyk nodig; ʼn reghoek het regte hoeke nodig; ʼn trapesium het slegs 1 paar parallelle sye.)' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het 2 gelyke sye en 2 gelyke hoeke. Watter tipe driehoek is dit?', checkMode: 'auto', options: ['Gelyksydige driehoek', 'Ongelyksydige driehoek', 'Gelykbenige driehoek', 'Reghoekige driehoek'], correctIndex: 2, explanation: 'ʼn Driehoek met presies 2 gelyke sye (en 2 gelyke hoeke) word ʼn gelykbenige driehoek genoem. (ʼn Gelyksydige driehoek het al 3 sye gelyk nodig; ʼn ongelyksydige driehoek het geen gelyke sye nie; ʼn reghoekige driehoek word gedefinieer deur ʼn hoek van 90°, nie deur gelyke sye nie.)' },
        {
          difficulty: 'Medium',
          question: 'Kyk na hierdie reghoek. Twee van sy sye is 6 cm en twee is 4 cm lank. Is dit ʼn reëlmatige of onreëlmatige veelhoek?',
          checkMode: 'auto',
          options: ['Reëlmatig', 'Onreëlmatig', 'Kan nie van die diagram bepaal word nie', 'Dit is ʼn vierkant'],
          correctIndex: 1,
          explanation: 'ʼn Reëlmatige veelhoek moet al die sye gelyk hê. Omdat twee sye 6 cm en twee sye 4 cm is, is hierdie reghoek onreëlmatig. (Om 2 pare gelyke sye te hê, maak nie ʼn vorm reëlmatig nie — al 4 sye moet dieselfde wees.)',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="45" width="140" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="38" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="30" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><text x="190" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><rect x="40" y="45" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde reghoek (6 cm en 4 cm sye), hoeveel simmetrielyne het dit?',
          checkMode: 'auto',
          options: ['4', '2', '1', '0'],
          correctIndex: 1,
          explanation: 'ʼn Reghoek het 2 simmetrielyne — een horisontaal en een vertikaal, elkeen deur die middelpunte van oorstaande sye. (4 simmetrielyne geld slegs vir ʼn vierkant, aangesien ʼn reghoek se diagonale nie simmetrielyne is nie, tensy dit ook ʼn vierkant is.)',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="45" width="140" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="38" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">6 cm</text><text x="30" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><text x="190" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">4 cm</text><rect x="40" y="45" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 4 — Sorteer en Klassifiseer (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: vierkant, sirkel, driehoek, seshoek, ovaal. Watter vorms is NIE veelhoeke nie?', checkMode: 'auto', options: ['Sirkel, driehoek', 'Sirkel, seshoek, ovaal', 'Geeneen van hulle nie — almal is veelhoeke', 'Sirkel, ovaal'], correctIndex: 3, explanation: 'ʼn Sirkel en ʼn ovaal het albei geboë rande in plaas van reguit sye, dus is geeneen ʼn veelhoek nie. Die vierkant, driehoek en seshoek is almal reguitsy-veelhoeke.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: reghoek, gelyksydige driehoek, ruit, reghoekige driehoek. Watter vorms het ten minste een regte hoek?', checkMode: 'auto', options: ['Reghoek, ruit', 'Gelyksydige driehoek, reghoekige driehoek', 'Net die reghoek', 'Reghoek, reghoekige driehoek'], correctIndex: 3, explanation: 'ʼn Reghoek het 4 regte hoeke, en ʼn reghoekige driehoek het presies 1 regte hoek. ʼn Gelyksydige driehoek en ʼn ruit het geen regte hoeke nie.' },
        {
          difficulty: 'Medium',
          question: 'Kyk na die vorms wat rondom die twee sirkels hieronder versprei is. Watter vorms behoort in die "Geboë sye" sirkel eerder as die "Slegs reguit sye" sirkel?',
          checkMode: 'auto',
          options: ['Net die sirkel', 'Die sirkel en die vierkant', 'Die twee vyfsy-vorms', 'Die sirkel en die ovaal-agtige vorm'],
          correctIndex: 3,
          explanation: 'Die sirkel en die ovaalvorm het albei geboë buitelyne, dus behoort hulle in die "Geboë sye" groep. Die twee vyfhoekige vorms en die vierkant het almal slegs reguit sye, dus bly hulle in die "Slegs reguit sye" groep.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Slegs reguit sye</text><text x="155" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#374151">Geboë sye</text><polygon points="45,60 65,45 85,60 78,80 52,80" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="40" y="105" width="30" height="30" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="95,88 112,98 108,118 86,120 80,100" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="150" cy="120" r="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><ellipse cx="175" cy="150" rx="16" ry="10" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 5 — 2D-vorms in die Regte Lewe (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'ʼn Stopteken het 8 gelyke sye. Watter 2D-vorm is dit?', checkMode: 'auto', options: ['Sewehoek', 'Seshoek', 'Agthoek', 'Vyfhoek'], correctIndex: 2, explanation: 'ʼn Stopteken het 8 sye, wat dit ʼn agthoek maak. (ʼn Sewehoek het 7 sye, ʼn seshoek 6, en ʼn vyfhoek 5.)' },
        { difficulty: 'Medium', question: 'ʼn Heuningkoeksel het 6 gelyke sye. Watter 2D-vorm is dit?', checkMode: 'auto', options: ['Vyfhoek', 'Agthoek', 'Seshoek', 'Sewehoek'], correctIndex: 2, explanation: 'Heuningkoekselle is 6-syige vorms — seshoeke. (ʼn Vyfhoek het 5 sye, ʼn agthoek 8, en ʼn sewehoek 7.)' },

        // Blok 6 — Redenering, Vergelyking en Foutopsporing (pos 18-19, Moeilik)
        {
          difficulty: 'Hard',
          question: 'Sipho sê alle vierkante is reghoeke. Is hy korrek?',
          checkMode: 'auto',
          options: [
            'Ja — ʼn vierkant voldoen aan elke eienskap van ʼn reghoek (4 regte hoeke, 2 pare gelyke sye), en het ook al 4 sye gelyk.',
            'Nee — vierkante en reghoeke is twee heeltemal verskillende, onverwante vorms.',
            'Nee — omdat ʼn vierkant al 4 sye gelyk het, kan dit nie ook as ʼn reghoek tel nie.',
            'Ja, maar slegs vir vierkante met sye langer as 5 cm.',
          ],
          correctIndex: 0,
          explanation: 'ʼn Vierkant het 4 regte hoeke en 2 pare gelyke sye — alles wat ʼn reghoek nodig het — plus die ekstra eienskap dat al 4 sye gelyk is. Dus is elke vierkant ʼn reghoek, maar nie elke reghoek is ʼn vierkant nie.',
        },
        {
          difficulty: 'Hard',
          question: 'Watter stelling verduidelik korrek waarom ʼn sirkel nie ʼn veelhoek is nie?',
          checkMode: 'auto',
          options: [
            'ʼn Veelhoek moet ʼn geslote vorm wees wat heeltemal uit reguit sye bestaan wat by hoekpunte ontmoet; ʼn sirkel het een geboë rand en geen hoekpunte nie.',
            'ʼn Sirkel is nie ʼn geslote vorm nie, dus voldoen dit nie aan die definisie van ʼn veelhoek nie.',
            'ʼn Sirkel het te veel sye om te tel, dus kan dit nie as ʼn veelhoek geklassifiseer word nie.',
            'ʼn Sirkel is ʼn 3D-vorm, dus kan dit nie met 2D-veelhoeke vergelyk word nie.',
          ],
          correctIndex: 0,
          explanation: 'ʼn Veelhoek moet ʼn geslote vorm wees wat heeltemal uit reguit sye bestaan wat by hoekpunte ontmoet. ʼn Sirkel het een deurlopende geboë rand met geen reguit sye en geen hoekpunte nie, dus voldoen dit nie aan die definisie van ʼn veelhoek nie.',
        },
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
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn seshoek?', checkMode: 'auto', options: ['5', '6', '7', '8'], correctIndex: 1, explanation: 'ʼn Seshoek het 6 reguit sye. (5 is ʼn vyfhoek, 7 ʼn sewehoek, 8 ʼn agthoek.)' },
        { difficulty: 'Easy', question: 'Hoeveel sye en hoeveel hoekpunte het ʼn agthoek?', checkMode: 'auto', options: ['8 sye, 7 hoekpunte', '7 sye, 8 hoekpunte', '6 sye, 6 hoekpunte', '8 sye, 8 hoekpunte'], correctIndex: 3, explanation: 'ʼn Agthoek het 8 reguit sye en 8 hoekpunte — een waar elke paar sye ontmoet. (Nie-passende tellings van 8/7 of 7/8 breek die reël dat sye en hoekpunte altyd gelyk is; 6 en 6 is ʼn seshoek.)' },
        { difficulty: 'Easy', question: 'Hoeveel regte hoeke het ʼn vierkant?', checkMode: 'auto', options: ['2', '3', '4', '8'], correctIndex: 2, explanation: 'ʼn Vierkant het 4 regte hoeke, een by elke hoek. (2 of 3 tel te min hoeke, en 8 verdubbel dit.)' },
        { difficulty: 'Medium', question: 'ʼn Driehoek en ʼn vierkant is twee aparte vorms. Hoeveel sye het hulle altesaam, en hoeveel hoekpunte het hulle altesaam?', checkMode: 'auto', options: ['6 sye, 6 hoekpunte', '7 sye, 7 hoekpunte', '8 sye, 7 hoekpunte', '12 sye, 12 hoekpunte'], correctIndex: 1, explanation: 'ʼn Driehoek het 3 sye en 3 hoekpunte, en ʼn vierkant het 4 sye en 4 hoekpunte. 3 + 4 = 7 vir albei totale. (6 en 6 vergeet een vorm se telling; 8/7 laat sye en hoekpunte nie ooreenstem nie; 12 en 12 kom van vermenigvuldig in plaas van optel.)' },

        // Blok 2 — Identifiseer die Vorm vanaf Leidrade (pos 4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Ek het 3 sye wat almal verskillende lengtes is. Watter tipe driehoek is ek?', checkMode: 'auto', options: ['Gelykbenige driehoek', 'Gelyksydige driehoek', 'Reghoekige driehoek', 'Ongelyksydige driehoek'], correctIndex: 3, explanation: 'ʼn Driehoek met al 3 sye verskillende lengtes word ʼn ongelyksydige driehoek genoem. (Gelykbenig het 2 gelyke sye nodig, gelyksydig het al 3 gelyk nodig, en reghoekig word gedefinieer deur ʼn hoek van 90°, nie deur sylengtes nie.)' },
        { difficulty: 'Easy', question: 'Ek het 5 reguit sye en 5 hoekpunte. Watter vorm is ek?', checkMode: 'auto', options: ['Seshoek', 'Vyfhoek', 'Sewehoek', 'Vierkant'], correctIndex: 1, explanation: 'ʼn Geslote vorm met 5 reguit sye is ʼn vyfhoek. (ʼn Seshoek het 6 sye, ʼn sewehoek 7, en ʼn vierkant slegs 4.)' },
        { difficulty: 'Medium', question: 'Ek het 4 sye wat almal gelyk in lengte is, maar my hoeke is 60° en 120°, nie 90° nie. Watter vorm is ek?', checkMode: 'auto', options: ['Vierkant', 'Reghoek', 'Ruit', 'Parallelogram'], correctIndex: 2, explanation: 'ʼn Vorm met 4 gelyke sye maar hoeke wat nie 90° is nie, is ʼn ruit, nie ʼn vierkant nie. (ʼn Vierkant en reghoek benodig albei regte hoeke; ʼn algemene parallelogram hoef nie al die sye gelyk te hê nie.)' },
        { difficulty: 'Medium', question: 'Ek het presies een regte hoek, en my ander twee hoeke is nie gelyk aan mekaar nie. Watter tipe driehoek is ek?', checkMode: 'auto', options: ['Gelykbenige driehoek', 'Reghoekige driehoek', 'Gelyksydige driehoek', 'Ongelyksydige driehoek'], correctIndex: 1, explanation: 'ʼn Driehoek met presies een hoek van 90° word ʼn reghoekige driehoek genoem. (Gelykbenig en gelyksydig benodig albei gelyke sye/hoeke, wat "nie gelyk aan mekaar nie" weerspreek; ongelyksydig beskryf sylengtes, nie die teenwoordigheid van ʼn regte hoek nie.)' },

        // Blok 3 — Vierhoek- en Driehoek-eienskappe (pos 8-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Vierhoek het presies een paar parallelle sye. Wat is sy naam?', checkMode: 'auto', options: ['Parallelogram', 'Vlieër', 'Ruit', 'Trapesium'], correctIndex: 3, explanation: 'ʼn Vierhoek met slegs een paar parallelle sye word ʼn trapesium genoem. (ʼn Parallelogram en ruit benodig albei 2 pare parallelle sye; ʼn vlieër het glad geen parallelle sye nie.)' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het 2 pare aangrensende gelyke sye, maar sy oorstaande sye is nie gelyk of parallel nie. Wat is sy naam?', checkMode: 'auto', options: ['Ruit', 'Trapesium', 'Vlieër', 'Parallelogram'], correctIndex: 2, explanation: 'ʼn Vlieër is ʼn vierhoek met 2 pare gelyke aangrensende sye, anders as ʼn reghoek of ruit waar oorstaande sye gelyk is. (ʼn Ruit en parallelogram het albei gelyke of parallelle oorstaande sye; ʼn trapesium word gedefinieer deur een paar parallelle sye, nie aangrensende gelyke sye nie.)' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het 3 gelyke sye en 3 gelyke hoeke. Watter tipe driehoek is dit, en is dit ʼn reëlmatige of onreëlmatige veelhoek?', checkMode: 'auto', options: ['Gelyksydige driehoek, onreëlmatig', 'Gelykbenige driehoek, reëlmatig', 'Gelyksydige driehoek, reëlmatig', 'Ongelyksydige driehoek, onreëlmatig'], correctIndex: 2, explanation: 'ʼn Driehoek met al 3 sye en hoeke gelyk is ʼn gelyksydige driehoek. Omdat al sy sye en hoeke gelyk is, is dit ook ʼn reëlmatige veelhoek. (Om dit "onreëlmatig" te noem, ignoreer die definisie van reëlmatig; gelykbenig het slegs 2 gelyke sye, nie 3 nie; ongelyksydig het geeneen gelyk nie.)' },
        {
          difficulty: 'Medium',
          question: 'Kyk na die twee vierhoek-buitelyne hieronder. Die kepies wys gelyke sye en die pyltjies wys parallelle sye. Watter buitelyn (A of B) is die parallelogram?',
          checkMode: 'auto',
          options: ['B', 'A', 'Beide A en B', 'Geeneen van A of B nie'],
          correctIndex: 1,
          explanation: 'Buitelyn A het 2 pare parallelle sye met pyltjies gemerk en 2 pare gelyke sye met kepies gemerk, dus is dit die parallelogram. Buitelyn B het slegs een paar parallelle sye, dus is dit ʼn trapesium.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="55" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">A</text><polygon points="20,50 90,45 100,95 30,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M50,47.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M60,97.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M22,75 l0,6" stroke="#2563eb" stroke-width="2"/><path d="M95,70 l0,6" stroke="#2563eb" stroke-width="2"/><text x="165" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">B</text><polygon points="140,55 200,50 190,100 130,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M165,52.5 l6,-1" stroke="#ea580c" stroke-width="2"/><path d="M155,100 l6,0" stroke="#ea580c" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde twee buitelyne (A en B), watter buitelyn is die trapesium, en hoeveel pare parallelle sye het dit?',
          checkMode: 'auto',
          options: ['A, een paar', 'B, twee pare', 'B, een paar', 'A, twee pare'],
          correctIndex: 2,
          explanation: 'Buitelyn B het slegs een paar parallelle sye (gewys deur die passende pyltjies bo en onder), wat dit ʼn trapesium maak. Buitelyn A het twee pare parallelle sye, wat dit eerder die parallelogram maak.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="55" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">A</text><polygon points="20,50 90,45 100,95 30,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M50,47.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M60,97.5 l6,0" stroke="#ea580c" stroke-width="2"/><path d="M22,75 l0,6" stroke="#2563eb" stroke-width="2"/><path d="M95,70 l0,6" stroke="#2563eb" stroke-width="2"/><text x="165" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">B</text><polygon points="140,55 200,50 190,100 130,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M165,52.5 l6,-1" stroke="#ea580c" stroke-width="2"/><path d="M155,100 l6,0" stroke="#ea580c" stroke-width="2"/></svg>',
        },

        // Blok 4 — Sorteer en Klassifiseer (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: vierkant, reghoek, ruit, ongelyksydige driehoek. Watter vorms is reëlmatige veelhoeke?', checkMode: 'auto', options: ['Vierkant, reghoek', 'Reghoek, ruit', 'Vierkant', 'Vierkant, ruit'], correctIndex: 2, explanation: 'Slegs die vierkant het al die sye en al die hoeke gelyk. ʼn Reghoek en ruit het gelyke oorstaande sye maar nie al 4 gelyk nie, en ʼn ongelyksydige driehoek het geen gelyke sye nie.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: seshoek, sirkel, vlieër, ovaal. Watter vorms is veelhoeke?', checkMode: 'auto', options: ['Seshoek, sirkel', 'Seshoek, vlieër', 'Sirkel, ovaal', 'Vlieër, ovaal'], correctIndex: 1, explanation: 'ʼn Seshoek en ʼn vlieër bestaan albei slegs uit reguit sye, dus is hulle veelhoeke. ʼn Sirkel en ʼn ovaal het geboë rande.' },
        {
          difficulty: 'Medium',
          question: 'Kyk na die vorms wat rondom die twee sirkels hieronder versprei is. Watter vorms behoort in die "Het ʼn regte hoek" sirkel?',
          checkMode: 'auto',
          options: ['Net die vyfhoek', 'Die vyfhoek en die gelyksydig-lykende driehoek', 'Die vierkant en die reghoekige driehoek', 'Net die vierkant'],
          correctIndex: 2,
          explanation: 'Die vierkant het 4 regte hoeke en die reghoekige driehoek het presies 1 regte hoek, dus behoort albei in daardie sirkel. Die vyfhoek en die gelyksydig-lykende driehoek het geen regte hoeke nie.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Geen regte hoek</text><text x="155" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Het ʼn regte hoek</text><polygon points="50,50 80,45 90,70 65,85 40,70" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="65,95 85,130 45,130" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="55" width="35" height="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="150,120 190,120 150,155" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 5 — 2D-vorms in die Regte Lewe (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'ʼn Sokkerbal is bedek met lappies. Watter twee veelhoeke word gebruik om sy geboë oppervlak te bedek?', checkMode: 'auto', options: ['Vierkante en driehoeke', 'Seshoeke en agthoeke', 'Vyfhoeke en seshoeke', 'Vyfhoeke en sewehoeke'], correctIndex: 2, explanation: 'Sokkerballe word tradisioneel bedek met vyfhoek- en seshoeklappies wat sonder gapings inpas.' },
        {
          difficulty: 'Medium',
          question: 'Watter stelling verduidelik korrek waarom vloertëels gewoonlik in vierkante of seshoeke voorkom eerder as sirkels?',
          checkMode: 'auto',
          options: [
            'Vierkante en seshoeke het reguit sye wat perfek sonder gapings inpas, terwyl sirkels altyd gapings laat wanneer hulle bymekaar gepak word.',
            'Sirkels is duurder om te vervaardig as enige reguitsy-vorm.',
            'Vierkante en seshoeke is die enigste 2D-vorms met hoekpunte, wat sirkels nie het nie.',
            'Sirkels kan nie plat gemaak word nie, dus is hulle ongeskik vir vloertëels.',
          ],
          correctIndex: 0,
          explanation: 'Vierkante en seshoeke het reguit sye wat perfek sonder gapings tussen hulle inpas (hulle tesseleer). Sirkels is geboë, dus laat hulle altyd klein gapings as hulle bymekaar gepak word, wat materiaal sou mors en ʼn ongelyke vloer sou laat.',
        },

        // Blok 6 — Redenering, Vergelyking en Foutopsporing (pos 18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Parallelogram en ʼn ruit het albei 2 pare parallelle sye. Watter ekstra eienskap moet ʼn ruit hê wat ʼn algemene parallelogram nie hoef te hê nie?', checkMode: 'auto', options: ['4 regte hoeke', 'Al 4 sye gelyk', 'Diagonale van gelyke lengte', 'Slegs 1 paar parallelle sye'], correctIndex: 1, explanation: 'ʼn Ruit is ʼn spesiale parallelogram waar al 4 sye gelyk in lengte is. (Regte hoeke sou dit eerder ʼn reghoek/vierkant maak; gelyke diagonale is ʼn reghoek-eienskap; ʼn ruit behou albei pare parallelle sye, nie net een nie.)' },
        {
          difficulty: 'Hard',
          question: 'Watter eienskap deel ʼn ruit met ʼn vierkant, maar NIE met ʼn reghoek nie?',
          checkMode: 'auto',
          options: ['Al 4 hoeke is regte hoeke.', 'Al 4 sye is gelyk in lengte.', 'Dit het 2 pare parallelle sye.', 'Dit het 4 hoekpunte.'],
          correctIndex: 1,
          explanation: 'ʼn Ruit en ʼn vierkant het altyd albei 4 gelyke sye. ʼn Reghoek het net 2 pare gelyke oorstaande sye nodig, nie al 4 sye gelyk nie, dus deel die reghoek nie hierdie eienskap nie. (Regte hoeke is eintlik ʼn eienskap van die vierkant en reghoek, nie van die ruit nie; parallelle sye en 4 hoekpunte word deur al drie vorms gedeel.)',
        },
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
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn sewehoek?', checkMode: 'auto', options: ['6', '7', '8', '9'], correctIndex: 1, explanation: 'ʼn Sewehoek het 7 reguit sye. (6 is ʼn seshoek, 8 ʼn agthoek, 9 ʼn negehoek.)' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn reghoek, en hoeveel pare van daardie sye is gelyk?', checkMode: 'auto', options: ['4 sye, 1 paar', '4 sye, 2 pare', '4 sye, 4 pare', '2 sye, 1 paar'], correctIndex: 1, explanation: 'ʼn Reghoek het altesaam 4 sye, bestaande uit 2 pare gelyke oorstaande sye. (1 paar tel te min, aangesien albei pare oorstaande sye gelyk is; 4 pare is onmoontlik met slegs 4 sye; ʼn reghoek het 4 sye, nie 2 nie.)' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn sirkel, en waarom?', checkMode: 'auto', options: ['1, want dit het een geboë rand', '0, want dit het geen reguit sye nie', '0, want dit is te klein om hoeke te hê', '2, een bo en een onder'], correctIndex: 1, explanation: 'ʼn Hoekpunt is waar twee reguit sye ontmoet. ʼn Sirkel het een geboë rand en geen reguit sye nie, dus het dit 0 hoekpunte. (Die geboë rand self is nie ʼn hoekpunt nie, en ʼn sirkel se grootte het niks te doen met of dit hoeke het nie.)' },
        { difficulty: 'Medium', question: 'ʼn Vorm het meer sye as ʼn seshoek maar minder sye as ʼn agthoek. Noem die vorm.', checkMode: 'auto', options: ['Vyfhoek', 'Seshoek', 'Sewehoek', 'Agthoek'], correctIndex: 2, explanation: 'ʼn Seshoek het 6 sye en ʼn agthoek het 8 sye. Die vorm met 7 sye, tussen hulle, is ʼn sewehoek.' },

        // Blok 2 — Identifiseer die Vorm vanaf Leidrade (pos 4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Ek het 3 gelyke sye en 3 gelyke hoeke. Watter tipe driehoek is ek?', checkMode: 'auto', options: ['Ongelyksydige driehoek', 'Gelykbenige driehoek', 'Reghoekige driehoek', 'Gelyksydige driehoek'], correctIndex: 3, explanation: 'ʼn Driehoek met al 3 sye en al 3 hoeke gelyk is ʼn gelyksydige driehoek. (Ongelyksydig het geeneen gelyk nie, gelykbenig het slegs 2 gelyk, en reghoekig word gedefinieer deur ʼn hoek van 90°, nie deur gelyke sye nie.)' },
        { difficulty: 'Easy', question: 'Ek het 4 sye, 2 pare gelyke sye en 4 regte hoeke, maar ek is nie ʼn vierkant nie. Watter vorm is ek?', checkMode: 'auto', options: ['Reghoek', 'Ruit', 'Parallelogram', 'Vlieër'], correctIndex: 0, explanation: 'ʼn Vorm met 2 pare gelyke sye en 4 regte hoeke, maar nie al 4 sye gelyk nie, is ʼn reghoek. (ʼn Ruit, parallelogram en vlieër het nie regte hoeke nodig nie.)' },
        { difficulty: 'Medium', question: 'Ek het presies een geboë rand, geen hoeke nie, en ek rol glad in elke rigting. Watter vorm is ek?', checkMode: 'auto', options: ['Ovaal', 'Halfsirkel', 'Sirkel', 'Seshoek'], correctIndex: 2, explanation: 'ʼn Vorm met slegs ʼn geboë rand en geen hoeke nie is ʼn sirkel. (ʼn Ovaal is geboë maar nie perfek rond nie, dus rol dit nie glad in elke rigting nie; ʼn halfsirkel het hoeke; ʼn seshoek het reguit sye.)' },
        { difficulty: 'Medium', question: 'Ek het 6 reguit sye, 6 hoekpunte, en al my sye en hoeke is gelyk. Watter vorm is ek?', checkMode: 'auto', options: ['Onreëlmatige seshoek', 'Reëlmatige vyfhoek', 'Reëlmatige seshoek', 'Reëlmatige agthoek'], correctIndex: 2, explanation: 'ʼn Geslote vorm met 6 gelyke sye en 6 gelyke hoeke is ʼn reëlmatige seshoek. (ʼn Onreëlmatige seshoek sou nie al die sye en hoeke gelyk hê nie; ʼn vyfhoek het 5 sye en ʼn agthoek het 8.)' },

        // Blok 3 — Vierhoek- en Driehoek-eienskappe (pos 8-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Vierhoek het 2 pare parallelle sye en 2 pare gelyke sye, maar geen regte hoeke nie. Wat is sy naam?', checkMode: 'auto', options: ['Ruit', 'Trapesium', 'Parallelogram', 'Reghoek'], correctIndex: 2, explanation: 'ʼn Vierhoek met 2 pare parallelle, gelyke sye (en geen regte hoeke nie) is ʼn parallelogram. (ʼn Ruit het boonop al 4 sye gelyk nodig; ʼn trapesium het slegs 1 paar parallelle sye; ʼn reghoek het regte hoeke nodig.)' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het 3 sye wat almal verskillende lengtes is, en 3 verskillende hoeke. Watter tipe driehoek is dit?', checkMode: 'auto', options: ['Gelyksydige driehoek', 'Gelykbenige driehoek', 'Ongelyksydige driehoek', 'Reghoekige driehoek'], correctIndex: 2, explanation: 'ʼn Driehoek sonder gelyke sye (en dus sonder gelyke hoeke) is ʼn ongelyksydige driehoek. (Gelyksydig benodig al die sye gelyk, gelykbenig benodig 2 gelyk, en reghoekig word gedefinieer deur ʼn hoek van 90°, wat hier nie genoem word nie.)' },
        { difficulty: 'Medium', question: 'Watter vorm het al die sye gelyk EN al die hoeke gelyk aan 90°?', checkMode: 'auto', options: ['Ruit', 'Reghoek', 'Vierkant', 'Parallelogram'], correctIndex: 2, explanation: 'ʼn Vierkant het albei eienskappe: 4 gelyke sye en 4 regte hoeke (90° elk). (ʼn Ruit het gelyke sye maar nie noodwendig regte hoeke nie; ʼn reghoek het regte hoeke maar nie noodwendig gelyke sye nie; ʼn parallelogram het nie een van die twee nodig nie.)' },
        {
          difficulty: 'Medium',
          question: 'Kyk na hierdie reghoek. Twee van sy sye is 9 cm en twee is 5 cm lank. Is dit ʼn reëlmatige of onreëlmatige veelhoek?',
          checkMode: 'auto',
          options: ['Reëlmatig', 'Kan nie van die diagram bepaal word nie', 'Dit is ʼn vierkant', 'Onreëlmatig'],
          correctIndex: 3,
          explanation: 'ʼn Reëlmatige veelhoek moet al die sye gelyk hê. Omdat twee sye 9 cm en twee sye 5 cm is, is hierdie reghoek onreëlmatig. (Om 2 pare gelyke sye te hê, maak nie ʼn vorm reëlmatig nie — al 4 sye moet dieselfde wees.)',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="43" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="25" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><text x="195" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><rect x="35" y="50" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde reghoek (9 cm en 5 cm sye), hoeveel simmetrielyne het dit?',
          checkMode: 'auto',
          options: ['0', '1', '2', '4'],
          correctIndex: 2,
          explanation: 'ʼn Reghoek het 2 simmetrielyne — een horisontaal en een vertikaal, elkeen deur die middelpunte van oorstaande sye. (4 simmetrielyne geld slegs vir ʼn vierkant.)',
          diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="43" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="25" y="89" text-anchor="end" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><text x="195" y="89" text-anchor="start" font-size="14" font-weight="700" fill="#2563eb">5 cm</text><rect x="35" y="50" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 4 — Sorteer en Klassifiseer (pos 13-15, Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: vyfhoek, sirkel, ruit, ovaal, sewehoek. Watter vorms is veelhoeke?', checkMode: 'auto', options: ['Vyfhoek, sirkel, sewehoek', 'Sirkel, ovaal', 'Vyfhoek, ruit, sewehoek', 'Vyfhoek, ruit, ovaal'], correctIndex: 2, explanation: 'ʼn Vyfhoek, ruit, en sewehoek bestaan almal slegs uit reguit sye. ʼn Sirkel en ʼn ovaal het geboë rande, dus is hulle nie veelhoeke nie.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: gelyksydige driehoek, gelykbenige driehoek, vierkant, vlieër. Watter vorms is reëlmatige veelhoeke?', checkMode: 'auto', options: ['Gelykbenige driehoek, vlieër', 'Gelyksydige driehoek, gelykbenige driehoek', 'Gelyksydige driehoek, vierkant', 'Vierkant, vlieër'], correctIndex: 2, explanation: 'ʼn Gelyksydige driehoek en ʼn vierkant het albei al die sye en al die hoeke gelyk, wat hulle reëlmatige veelhoeke maak. ʼn Gelykbenige driehoek en ʼn vlieër het nie al die sye gelyk nie.' },
        {
          difficulty: 'Medium',
          question: 'Kyk na die vorms wat rondom die twee sirkels hieronder versprei is. Watter vorms behoort in die "Reëlmatig" sirkel?',
          checkMode: 'auto',
          options: ['Die reghoek en die vlieër-vormige buitelyn', 'Net die vierkant', 'Die vierkant en die gelyksydig-lykende driehoek', 'Die reghoek en die gelyksydig-lykende driehoek'],
          correctIndex: 2,
          explanation: 'Die vierkant en die driehoek met gelyke sye het al die sye en hoeke gelyk, dus is hulle reëlmatig. Die reghoek en die vlieër-vormige buitelyn het nie al die sye gelyk nie, dus is hulle onreëlmatig.',
          diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><ellipse cx="65" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><ellipse cx="155" cy="90" rx="55" ry="70" fill="none" stroke="#9ca3af" stroke-width="2"/><text x="65" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Onreëlmatig</text><text x="155" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Reëlmatig</text><rect x="35" y="55" width="45" height="25" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="65,100 85,118 65,140 45,118" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="140" y="60" width="35" height="35" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="160,115 180,145 140,145" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>',
        },

        // Blok 5 — 2D-vorms in die Regte Lewe (pos 16-17, Medium)
        { difficulty: 'Medium', question: 'ʼn Boek se voorblad het 2 pare gelyke sye en 4 regte hoeke, en dit is langer as wat dit breed is. Watter 2D-vorm is dit?', checkMode: 'auto', options: ['Vierkant', 'Reghoek', 'Ruit', 'Parallelogram'], correctIndex: 1, explanation: 'ʼn Boekomslag met hierdie eienskappe pas by ʼn reghoek. (ʼn Vierkant sou gelyke lengte en breedte nodig hê; ʼn ruit en parallelogram het nie regte hoeke nodig nie.)' },
        { difficulty: 'Medium', question: 'ʼn Sny waatlemoen (die geboë skil) laat ons dink aan deel van watter 2D-vorm?', checkMode: 'auto', options: ['Driehoek', 'Ovaal', 'Sirkel', 'Seshoek'], correctIndex: 2, explanation: 'ʼn Hele waatlemoen is rond soos ʼn sirkel (ʼn sfeer in 3D), dus wys ʼn sny deel van ʼn sirkel. (ʼn Waatlemoen lyk nie soos ʼn driehoek of seshoek nie, en al kan dit effens ovaal lyk, is dit die naaste aan ʼn sirkel.)' },

        // Blok 6 — Redenering, Vergelyking en Foutopsporing (pos 18-19, Moeilik)
        {
          difficulty: 'Hard',
          question: 'Amahle sê alle reghoeke is vierkante. Is sy korrek?',
          checkMode: 'auto',
          options: [
            'Ja — ʼn reghoek het 4 regte hoeke, wat die enigste eienskap is wat ʼn vierkant nodig het.',
            'Nee — ʼn reghoek het net 2 pare gelyke sye nodig, nie al 4 sye gelyk nie, dus is nie elke reghoek ʼn vierkant nie.',
            'Nee — reghoeke en vierkante is twee heeltemal verskillende, onverwante vorms.',
            'Ja, maar slegs vir reghoeke met sye langer as 5 cm.',
          ],
          correctIndex: 1,
          explanation: 'ʼn Reghoek het net 2 pare gelyke oorstaande sye en 4 regte hoeke nodig — dit hoef nie al 4 sye gelyk te hê nie. ʼn Vierkant is ʼn spesiale reghoek met die ekstra eienskap dat al 4 sye gelyk is, dus is nie elke reghoek ʼn vierkant nie.',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo beskryf ʼn vorm: "Dit het 4 sye, al 4 hoeke is regte hoeke, en al 4 sye is 5 cm." Toe noem hy dit ʼn ruit. Watter stelling identifiseer sy fout korrek?',
          checkMode: 'auto',
          options: [
            'Hy is korrek — enige 4-syige vorm met gelyke sye is ʼn ruit.',
            'Hy is verkeerd — ʼn vorm met 4 gelyke sye en 4 regte hoeke is ʼn vierkant, nie ʼn ruit nie, aangesien ʼn ruit nie regte hoeke nodig het nie.',
            'Hy is verkeerd — die vorm wat hy beskryf is eintlik ʼn reghoek, aangesien dit regte hoeke het.',
            'Hy is korrek, want ʼn vierkant is net nog ʼn naam vir ʼn ruit.',
          ],
          correctIndex: 1,
          explanation: 'ʼn Vorm met 4 gelyke sye en 4 regte hoeke is ʼn vierkant, nie ʼn ruit nie. ʼn Ruit het ook 4 gelyke sye, maar sy hoeke hoef nie 90° te wees nie.',
        },
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
