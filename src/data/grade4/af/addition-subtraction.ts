import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Optelling en Aftrekking',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS OPTELLING?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-addition',
      title: 'Wat is Optelling?',
      icon: '➕',
      explanation:
        `<p style="margin-bottom:14px"><strong>Optelling</strong> beteken om twee of meer getalle bymekaar te tel om die <strong>totaal</strong> te vind. Die antwoord wat jy kry wanneer jy optel, word die <strong>som</strong> genoem. Optelling maak die getal altyd groter.</p>` +

        `<p style="margin-bottom:8px"><strong>Drie alledaagse voorbeelde:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>Jy het <strong>1 245</strong> plakkers en jou vriend gee jou nog <strong>312</strong> meer. Hoeveel het jy <strong>altesaam</strong>? → 1 245 + 312 = 1 557</li>` +
        `<li>ʼn Skoolbiblioteek het <strong>2 430</strong> boeke en koop <strong>1 250</strong> nuwe boeke. Hoeveel boeke is daar <strong>in totaal</strong>? → 2 430 + 1 250 = 3 680</li>` +
        `<li>ʼn Boer pluk <strong>3 120</strong> lemoene op Maandag en <strong>1 405</strong> op Dinsdag. Wat is die <strong>totale</strong> aantal lemoene? → 3 120 + 1 405 = 4 525</li>` +
        `</ul>` +

        `<p style="margin-bottom:8px"><strong>Sleutelwoorde wat jou vertel om by te tel in ʼn woordprobleem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">altesaam</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">totaal</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">som</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">meer as</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">vermeerder</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">in totaal</span>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>Kolomoptelling — lyn altyd die syfers op:</strong></p>` +
        `<p style="margin-bottom:12px">Voordat jy optel, skryf die getalle een onder die ander. Maak seker <strong>ene</strong> is onder <strong>ene</strong>, <strong>tiene</strong> onder <strong>tiene</strong>, <strong>honderde</strong> onder <strong>honderde</strong>, en <strong>duisende</strong> onder <strong>duisende</strong>. Tel dan een kolom op ʼn slag, beginnende by die ene.</p>` +
        `<div style="display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
        `<table style="border-collapse:collapse;font-size:0.95em;text-align:center">` +
        `<tbody><tr>` +
        `<td style="padding:8px 20px;font-weight:700;color:#dc2626;border-right:1px solid #e5e7eb">Duisende (D)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#d97706;border-right:1px solid #e5e7eb">Honderde (H)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#16a34a;border-right:1px solid #e5e7eb">Tiene (T)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#2563eb">Ene (E)</td>` +
        `</tr></tbody></table></div>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 1 (sonder oordra) ─────────────────────────
        {
          question: 'Bereken 2 345 + 1 423',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">7</span>' +
            '<span style="color:#16a34a;font-weight:700">6</span>' +
            '<span style="color:#2563eb;font-weight:700">8</span>',
          steps: [
            'Skryf die getalle in kolomme — ene onder ene, tiene onder tiene, honderde onder honderde, duisende onder duisende:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">E</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">5</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">+ 1</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">3</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Tel die <span style="color:#2563eb;font-weight:700">ene</span> op: <span style="color:#2563eb;font-weight:700">5</span> + <span style="color:#2563eb;font-weight:700">3</span> = <span style="color:#2563eb;font-weight:700">8</span>. Skryf <span style="color:#2563eb;font-weight:700">8</span> in die ene-kolom.',

            'Tel die <span style="color:#16a34a;font-weight:700">tiene</span> op: <span style="color:#16a34a;font-weight:700">4</span> + <span style="color:#16a34a;font-weight:700">2</span> = <span style="color:#16a34a;font-weight:700">6</span>. Skryf <span style="color:#16a34a;font-weight:700">6</span> in die tiene-kolom.',

            'Tel die <span style="color:#d97706;font-weight:700">honderde</span> op: <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#d97706;font-weight:700">4</span> = <span style="color:#d97706;font-weight:700">7</span>. Skryf <span style="color:#d97706;font-weight:700">7</span> in die honderde-kolom.',

            'Tel die <span style="color:#dc2626;font-weight:700">duisende</span> op: <span style="color:#dc2626;font-weight:700">2</span> + <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Skryf <span style="color:#dc2626;font-weight:700">3</span> in die duisende-kolom.',
          ],
        },

        // ── UITGEWERKTE VOORBEELD 2 (met oordra) ────────────────────────────
        {
          question: 'Bereken 1 867 + 1 345 (met oordra)',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">2</span>' +
            '<span style="color:#16a34a;font-weight:700">1</span>' +
            '<span style="color:#2563eb;font-weight:700">2</span>',
          steps: [
            'Tel die <span style="color:#2563eb;font-weight:700">ene</span> op: <span style="color:#2563eb;font-weight:700">7</span> + <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">12</span>. Dit is groter as 9, dus kan ons nie twee syfers in een kolom pas nie. Skryf <span style="color:#2563eb;font-weight:700">2</span> in die ene-kolom en dra <span style="color:#ea580c;font-weight:700">1</span> oor na bo-op die tiene-kolom.',

            'Tel die <span style="color:#16a34a;font-weight:700">tiene</span> op: <span style="color:#16a34a;font-weight:700">6</span> + <span style="color:#16a34a;font-weight:700">4</span> + <span style="color:#ea580c;font-weight:700">1</span> (oorgedra) = <span style="color:#16a34a;font-weight:700">11</span>. Skryf <span style="color:#16a34a;font-weight:700">1</span> in die tiene-kolom en dra <span style="color:#ea580c;font-weight:700">1</span> oor na bo-op die honderde-kolom.',

            'Tel die <span style="color:#d97706;font-weight:700">honderde</span> op: <span style="color:#d97706;font-weight:700">8</span> + <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#ea580c;font-weight:700">1</span> (oorgedra) = <span style="color:#d97706;font-weight:700">12</span>. Skryf <span style="color:#d97706;font-weight:700">2</span> in die honderde-kolom en dra <span style="color:#ea580c;font-weight:700">1</span> oor na bo-op die duisende-kolom.',

            'Tel die <span style="color:#dc2626;font-weight:700">duisende</span> op: <span style="color:#dc2626;font-weight:700">1</span> + <span style="color:#dc2626;font-weight:700">1</span> + <span style="color:#ea580c;font-weight:700">1</span> (oorgedra) = <span style="color:#dc2626;font-weight:700">3</span>. Skryf <span style="color:#dc2626;font-weight:700">3</span> in die duisende-kolom.',

            '<div style="padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Kolomoptelling-uitleg wat 1 867 + 1 345 toon met oorgedraagde syfers bo elke kolom in oranje getoon</div>',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — WAT IS AFTREKKING?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-subtraction',
      title: 'Wat is Aftrekking?',
      icon: '➖',
      explanation:
        `<p style="margin-bottom:14px"><strong>Aftrekking</strong> beteken om een getal van ʼn ander weg te neem om die <strong>verskil</strong> te vind. Die antwoord wat jy kry wanneer jy aftrek, word die <strong>verskil</strong> genoem. Aftrekking maak die getal altyd kleiner.</p>` +

        `<p style="margin-bottom:8px"><strong>Drie alledaagse voorbeelde:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>Jy het <strong>R3 450</strong> en jy spandeer <strong>R1 230</strong>. Hoeveel geld het jy <strong>oor</strong>? → 3 450 − 1 230 = 2 220</li>` +
        `<li>ʼn Skool het <strong>1 865</strong> leerders. <strong>342</strong> leerders gaan op ʼn uitstappie. Hoeveel leerders is <strong>nog by die skool</strong>? → 1 865 − 342 = 1 523</li>` +
        `<li>ʼn Fabriek maak <strong>4 500</strong> bottels. <strong>1 250</strong> word verkoop. Wat is die <strong>verskil</strong> tussen die aantal gemaak en die aantal verkoop? → 4 500 − 1 250 = 3 250</li>` +
        `</ul>` +

        `<p style="margin-bottom:8px"><strong>Sleutelwoorde wat jou vertel om af te trek in ʼn woordprobleem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">verskil</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">minder as</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">wegneem</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">min</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">verminder</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">hoeveel meer</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">hoeveel oor</span>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>Kolomaftrekking — lyn altyd die syfers op:</strong></p>` +
        `<p style="margin-bottom:12px">Skryf die groter getal bo-aan en die kleiner getal daaronder, en lyn die kolomme versigtig op. Trek een kolom op ʼn slag af, beginnende by die <strong>ene</strong>. As die boonste syfer kleiner is as die onderste syfer, moet jy <strong>leen</strong> van die kolom aan die linkerkant.</p>` +
        `<div style="display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
        `<table style="border-collapse:collapse;font-size:0.95em;text-align:center">` +
        `<tbody><tr>` +
        `<td style="padding:8px 20px;font-weight:700;color:#dc2626;border-right:1px solid #e5e7eb">Duisende (D)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#d97706;border-right:1px solid #e5e7eb">Honderde (H)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#16a34a;border-right:1px solid #e5e7eb">Tiene (T)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#2563eb">Ene (E)</td>` +
        `</tr></tbody></table></div>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 3 (sonder leen) ────────────────────────────
        {
          question: 'Bereken 4 768 − 2 345',
          answer:
            '<span style="color:#dc2626;font-weight:700">2</span> ' +
            '<span style="color:#d97706;font-weight:700">4</span>' +
            '<span style="color:#16a34a;font-weight:700">2</span>' +
            '<span style="color:#2563eb;font-weight:700">3</span>',
          steps: [
            'Skryf die getalle in kolomme — ene onder ene, tiene onder tiene, honderde onder honderde, duisende onder duisende:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">E</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">7</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">6</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">8</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">− 2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">5</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Trek die <span style="color:#2563eb;font-weight:700">ene</span> af: <span style="color:#2563eb;font-weight:700">8</span> − <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">3</span>. Skryf <span style="color:#2563eb;font-weight:700">3</span> in die ene-kolom.',

            'Trek die <span style="color:#16a34a;font-weight:700">tiene</span> af: <span style="color:#16a34a;font-weight:700">6</span> − <span style="color:#16a34a;font-weight:700">4</span> = <span style="color:#16a34a;font-weight:700">2</span>. Skryf <span style="color:#16a34a;font-weight:700">2</span> in die tiene-kolom.',

            'Trek die <span style="color:#d97706;font-weight:700">honderde</span> af: <span style="color:#d97706;font-weight:700">7</span> − <span style="color:#d97706;font-weight:700">3</span> = <span style="color:#d97706;font-weight:700">4</span>. Skryf <span style="color:#d97706;font-weight:700">4</span> in die honderde-kolom.',

            'Trek die <span style="color:#dc2626;font-weight:700">duisende</span> af: <span style="color:#dc2626;font-weight:700">4</span> − <span style="color:#dc2626;font-weight:700">2</span> = <span style="color:#dc2626;font-weight:700">2</span>. Skryf <span style="color:#dc2626;font-weight:700">2</span> in die duisende-kolom.',
          ],
        },

        // ── UITGEWERKTE VOORBEELD 4 (met leen) ───────────────────────────────
        {
          question: 'Bereken 5 304 − 1 867 (met leen)',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">4</span>' +
            '<span style="color:#16a34a;font-weight:700">3</span>' +
            '<span style="color:#2563eb;font-weight:700">7</span>',
          steps: [
            'Kyk na die <span style="color:#2563eb;font-weight:700">ene</span>: <span style="color:#2563eb;font-weight:700">4</span> − <span style="color:#2563eb;font-weight:700">7</span>. Ons kan nie 7 van 4 wegneem nie, want 4 is kleiner. Ons moet <strong>leen</strong>.',

            'Kyk na die <span style="color:#16a34a;font-weight:700">tiene</span>-syfer: dit is <span style="color:#16a34a;font-weight:700">0</span>. Ons kan nie van 0 leen nie. Ons moet een kolom verder na links skuif na die <span style="color:#d97706;font-weight:700">honderde</span>.',

            'Leen <span style="color:#ea580c;font-weight:700">1</span> van die <span style="color:#d97706;font-weight:700">honderde</span>: die honderde-syfer <span style="color:#d97706;font-weight:700">3</span> word <span style="color:#ea580c;font-weight:700">2</span>. Die <span style="color:#16a34a;font-weight:700">tiene</span>-kolom ontvang die geleende honderd en word <span style="color:#ea580c;font-weight:700">10</span>.',

            'Leen nou <span style="color:#ea580c;font-weight:700">1</span> van die <span style="color:#16a34a;font-weight:700">tiene</span>: die tiene-waarde <span style="color:#ea580c;font-weight:700">10</span> word <span style="color:#ea580c;font-weight:700">9</span>. Die <span style="color:#2563eb;font-weight:700">ene</span>-kolom ontvang die geleende tiental: <span style="color:#2563eb;font-weight:700">4</span> word <span style="color:#ea580c;font-weight:700">14</span>.',

            'Trek die <span style="color:#2563eb;font-weight:700">ene</span> af: <span style="color:#ea580c;font-weight:700">14</span> − <span style="color:#2563eb;font-weight:700">7</span> = <span style="color:#2563eb;font-weight:700">7</span>. Skryf <span style="color:#2563eb;font-weight:700">7</span> in die ene-kolom.',

            'Trek die <span style="color:#16a34a;font-weight:700">tiene</span> af: <span style="color:#ea580c;font-weight:700">9</span> − <span style="color:#16a34a;font-weight:700">6</span> = <span style="color:#16a34a;font-weight:700">3</span>. Skryf <span style="color:#16a34a;font-weight:700">3</span> in die tiene-kolom.',

            'Kyk na die <span style="color:#d97706;font-weight:700">honderde</span>: <span style="color:#ea580c;font-weight:700">2</span> − <span style="color:#d97706;font-weight:700">8</span>. Ons kan nie 8 van 2 wegneem nie, want 2 is kleiner. Ons moet <strong>leen</strong> van die <span style="color:#dc2626;font-weight:700">duisende</span>-kolom.',

            'Leen <span style="color:#ea580c;font-weight:700">1</span> van die <span style="color:#dc2626;font-weight:700">duisende</span>: die duisende-syfer <span style="color:#dc2626;font-weight:700">5</span> word <span style="color:#ea580c;font-weight:700">4</span>. Die <span style="color:#d97706;font-weight:700">honderde</span>-kolom ontvang die geleende duisend: <span style="color:#ea580c;font-weight:700">2</span> word <span style="color:#ea580c;font-weight:700">12</span>.',

            'Trek die <span style="color:#d97706;font-weight:700">honderde</span> af: <span style="color:#ea580c;font-weight:700">12</span> − <span style="color:#d97706;font-weight:700">8</span> = <span style="color:#d97706;font-weight:700">4</span>. Skryf <span style="color:#d97706;font-weight:700">4</span> in die honderde-kolom.',

            'Trek die <span style="color:#dc2626;font-weight:700">duisende</span> af: <span style="color:#ea580c;font-weight:700">4</span> − <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Skryf <span style="color:#dc2626;font-weight:700">3</span> in die duisende-kolom.',

            '<div style="padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Kolomaftrekking-uitleg wat 5 304 − 1 867 toon met leen duidelik bo elke kolom in oranje getoon</div>',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — SKAT VOORDAT JY BEREKEN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating',
      title: 'Skat Voordat Jy Bereken',
      icon: '🎯',
      explanation:
        `<p style="margin-bottom:14px"><strong>Skatting</strong> beteken om ʼn <strong>benaderde antwoord</strong> te vind — ʼn antwoord wat naby, maar nie presies is nie — <em>voordat</em> jy die werklike berekening doen. ʼn Goeie skatting help jou om te kyk of jou finale antwoord redelik is. As jou werklike antwoord baie anders is as jou skatting, het jy waarskynlik iewers ʼn fout gemaak en moet jy jou werk nagaan.</p>` +

        `<p style="margin-bottom:8px"><strong>Drie stappe om te skat:</strong></p>` +
        `<ol style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li><strong>Stap 1:</strong> Rond elke getal af na die naaste <span style="color:#d97706;font-weight:700">100</span>.</li>` +
        `<li><strong>Stap 2:</strong> Tel die afgeronde getalle by of trek hulle af om jou <strong>skatting</strong> te kry.</li>` +
        `<li><strong>Stap 3:</strong> Vergelyk jou skatting met jou werklike antwoord — hulle behoort naby aan mekaar te wees.</li>` +
        `</ol>` +

        `<p style="margin-bottom:0">Onthou: ʼn skatting hoef nie presies te wees nie — dit moet net <strong>naby</strong> wees. ʼn Verskil van ʼn paar tiene tussen jou skatting en jou werklike antwoord is heeltemal aanvaarbaar.</p>`,

      workedExamples: [
        {
          question: 'Skat 3 456 + 2 234, vergelyk dan jou skatting met die werklike antwoord',
          answer: 'Skatting: 5 700 · Werklik: 5 690 · Hierdie is naby aan mekaar, dus maak die antwoord sin ✓',
          steps: [
            'Rond <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> af na die naaste <span style="color:#d97706;font-weight:700">100</span>: kyk na die <span style="color:#16a34a;font-weight:700">tiene-syfer</span> — dit is <span style="color:#16a34a;font-weight:700">5</span>. Omdat 5 ≥ 5, rond ons <strong>op</strong>. Die <span style="color:#d97706;font-weight:700">honderde-syfer</span> <span style="color:#d97706;font-weight:700">4</span> word <span style="color:#d97706;font-weight:700">5</span>, en die tiene en ene word 0. Afgeronde waarde: <strong>3 500</strong>.',

            'Rond <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">2</span><span style="color:#16a34a;font-weight:700">3</span><span style="color:#2563eb;font-weight:700">4</span> af na die naaste <span style="color:#d97706;font-weight:700">100</span>: kyk na die <span style="color:#16a34a;font-weight:700">tiene-syfer</span> — dit is <span style="color:#16a34a;font-weight:700">3</span>. Omdat 3 &lt; 5, rond ons <strong>af</strong>. Die <span style="color:#d97706;font-weight:700">honderde-syfer</span> <span style="color:#d97706;font-weight:700">2</span> bly dieselfde, en die tiene en ene word 0. Afgeronde waarde: <strong>2 200</strong>.',

            'Bereken die skatting met die afgeronde getalle: <strong>3 500 + 2 200 = 5 700</strong>.',

            'Bereken die werklike antwoord: 3 456 + 2 234 = <strong>5 690</strong>.',

            'Vergelyk: 5 690 is baie naby aan 5 700 — die verskil is slegs 10. Die antwoord maak sin. ✓',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — ANTWOORDE NAGAAN MET INVERSE BEWERKINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inverse-operations',
      title: 'Antwoorde Nagaan met Inverse Bewerkings',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:14px">Optelling en aftrekking is <strong>teenoorgestelde bewerkings</strong> — hulle <em>maak</em> mekaar <em>ongedaan</em>. Dit word die <strong>inverse bewerking</strong> genoem. Jy kan dit gebruik om te kyk of jou antwoord korrek is nadat jy ʼn berekening voltooi het.</p>` +

        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">` +
        `<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:12px 16px">` +
        `<p style="margin:0;font-weight:600;color:#14532d">As jy <strong>opgetel</strong> het → gebruik aftrekking om na te gaan</p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#14532d">Voorbeeld: 300 + 200 = 500 → gaan na: 500 − 200 = 300 ✓</p>` +
        `</div>` +
        `<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px">` +
        `<p style="margin:0;font-weight:600;color:#1e40af">As jy <strong>afgetrek</strong> het → gebruik optelling om na te gaan</p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#1e40af">Voorbeeld: 800 − 300 = 500 → gaan na: 500 + 300 = 800 ✓</p>` +
        `</div>` +
        `</div>` +

        `<p style="margin-bottom:0">As die inverse toets jou <strong>oorspronklike beginggetal</strong> teruggee, is jou antwoord korrek. As dit nie so is nie, is daar iewers ʼn fout — gaan terug en vind dit.</p>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 6 ─────────────────────────────────────────
        {
          question: 'Bereken 2 456 + 1 323 = 3 779. Gaan na met die inverse bewerking.',
          answer: 'Nagaan: 3 779 − 1 323 = 2 456 ✓ Die antwoord is korrek.',
          steps: [
            'Ons het bereken: <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> + <span style="color:#dc2626;font-weight:700">1</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">2</span><span style="color:#2563eb;font-weight:700">3</span> = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">7</span><span style="color:#2563eb;font-weight:700">9</span>.',

            'Ons het <strong>optelling</strong> gebruik, dus gebruik ons <strong>aftrekking</strong> om na te gaan. Neem die antwoord en trek een van die getalle wat ons opgetel het af: <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">7</span><span style="color:#2563eb;font-weight:700">9</span> − <span style="color:#dc2626;font-weight:700">1</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">2</span><span style="color:#2563eb;font-weight:700">3</span> = ?',

            'Trek af: 3 779 − 1 323 = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span>.',

            'Ons kry <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> terug — ons oorspronklike beginggetal. Die antwoord <strong>3 779 is korrek</strong>. ✓',
          ],
        },

        // ── UITGEWERKTE VOORBEELD 7 ─────────────────────────────────────────
        {
          question: 'Bereken 4 850 − 2 340 = 2 510. Gaan na met die inverse bewerking.',
          answer: 'Nagaan: 2 510 + 2 340 = 4 850 ✓ Die antwoord is korrek.',
          steps: [
            'Ons het bereken: <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> − <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">5</span><span style="color:#16a34a;font-weight:700">1</span><span style="color:#2563eb;font-weight:700">0</span>.',

            'Ons het <strong>aftrekking</strong> gebruik, dus gebruik ons <strong>optelling</strong> om na te gaan. Neem die antwoord en tel die getal wat ons afgetrek het weer by: <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">5</span><span style="color:#16a34a;font-weight:700">1</span><span style="color:#2563eb;font-weight:700">0</span> + <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> = ?',

            'Tel op: 2 510 + 2 340 = <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>.',

            'Ons kry <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> terug — ons oorspronklike beginggetal. Die antwoord <strong>2 510 is korrek</strong>. ✓',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — HOOFREKENE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mental-maths',
      title: 'Hoofrekene — Optel en Aftrek van Veelvoude van 10 en 100',
      icon: '🧠',
      explanation:
        `<p style="margin-bottom:14px"><strong>Hoofrekene</strong> beteken om ʼn antwoord in jou kop uit te werk sonder om iets neer te skryf. Jy kan dit vinnig doen wanneer jy <strong>veelvoude van 10</strong> (soos 20, 40, 70) of <strong>veelvoude van 100</strong> (soos 200, 300, 600) optel of aftrek.</p>` +

        `<p style="margin-bottom:8px"><strong>Die sleutelstrategie — net een syfer verander op ʼn slag:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>Om ʼn <strong>veelvoud van 100</strong> op te tel of af te trek → net die <span style="color:#d97706;font-weight:700">honderde-syfer</span> verander. Die duisende-, tiene- en ene-syfers bly dieselfde.</li>` +
        `<li>Om ʼn <strong>veelvoud van 10</strong> op te tel of af te trek → net die <span style="color:#16a34a;font-weight:700">tiene-syfer</span> verander. Die duisende-, honderde- en ene-syfers bly dieselfde.</li>` +
        `</ul>` +

        `<p style="margin-bottom:0">Dit werk vlot wanneer daar geen oordra of leen nodig is nie. Kyk na die voorbeelde hieronder en let op watter enkele syfer in elke berekening verander.</p>`,

      workedExamples: [
        {
          question: 'Werk hierdie ses berekeninge in jou kop uit — let op watter syfer elke keer verander',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">6</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>',
          steps: [
            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> + 200 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">6</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 200 by te tel verander net die <span style="color:#d97706;font-weight:700">honderde-syfer</span>: <span style="color:#d97706;font-weight:700">4</span> + 2 = <span style="color:#d97706;font-weight:700">6</span>. Die duisende, tiene en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> − 300 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 300 af te trek verander net die <span style="color:#d97706;font-weight:700">honderde-syfer</span>: <span style="color:#d97706;font-weight:700">4</span> − 3 = <span style="color:#d97706;font-weight:700">1</span>. Die duisende, tiene en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> + 40 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 40 by te tel verander net die <span style="color:#16a34a;font-weight:700">tiene-syfer</span>: <span style="color:#16a34a;font-weight:700">5</span> + 4 = <span style="color:#16a34a;font-weight:700">9</span>. Die duisende, honderde en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span> + 400 = <span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 400 by te tel verander net die <span style="color:#d97706;font-weight:700">honderde-syfer</span>: <span style="color:#d97706;font-weight:700">3</span> + 4 = <span style="color:#d97706;font-weight:700">7</span>. Die duisende, tiene en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span> − 300 = <span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 300 af te trek verander net die <span style="color:#d97706;font-weight:700">honderde-syfer</span>: <span style="color:#d97706;font-weight:700">7</span> − 3 = <span style="color:#d97706;font-weight:700">4</span>. Die duisende, tiene en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> + 50 = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 50 by te tel verander net die <span style="color:#16a34a;font-weight:700">tiene-syfer</span>: <span style="color:#16a34a;font-weight:700">4</span> + 5 = <span style="color:#16a34a;font-weight:700">9</span>. Die duisende, honderde en ene bly dieselfde.',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — GELDWOORDPROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'money-word-problems',
      title: 'Geldwoordprobleme',
      icon: '💰',
      explanation:
        `<p style="margin-bottom:14px">Geldprobleme gebruik presies dieselfde <strong>optellings- en aftrekkingsvaardighede</strong> wat jy reeds geleer het — die enigste verskil is dat die getalle <strong>rand (R)</strong> en <strong>sent (s)</strong> voorstel.</p>` +

        `<div style="background:#fefce8;border:1px solid #fde047;border-radius:10px;padding:12px 16px;margin-bottom:16px">` +
        `<p style="margin:0;font-weight:600;color:#713f12">Belangrik om te onthou: <strong>100 sent = 1 rand</strong></p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#713f12">R3,50 beteken 3 rand en 50 sent. In Graad 4 gebruik die meeste geldprobleme heel-randbedrae, sodat jy hulle soos gewone 4-syfergetalle kan behandel.</p>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>Hoe om ʼn geldwoordprobleem op te los:</strong></p>` +
        `<ol style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li><strong>Stap 1:</strong> Lees die probleem noukeurig en vind die sleutelwoord — dit vertel jou of jy moet optel of aftrek.</li>` +
        `<li><strong>Stap 2:</strong> Skryf die berekening met die bedrae in kolomme opgelyn.</li>` +
        `<li><strong>Stap 3:</strong> Los op deur kolomoptelling of -aftrekking, skryf dan jou antwoord met die <strong>R</strong>-simbool.</li>` +
        `</ol>` +

        `<p style="margin-bottom:8px"><strong>Sleutelwoorde — optelling:</strong> &nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">altesaam</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">totaal</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">in totaal</span>` +
        `</p>` +
        `<p style="margin-bottom:0"><strong>Sleutelwoorde — aftrekking:</strong> &nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">hoeveel meer</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">hoeveel oor</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">verskil</span>` +
        `</p>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 9 ──────────────────────────────────────────
        {
          question: 'Thabo het R2 450 in sy spaargeld. Hy verdien R1 375 deur takies te doen. Hoeveel het hy altesaam?',
          answer: '<strong>R3 825</strong>',
          steps: [
            'Die sleutelwoord is <strong>"altesaam"</strong> — dit vertel ons om <strong>op te tel</strong>. Ons moet R2 450 + R1 375 bereken.',

            'Skryf die getalle in kolomme — ene onder ene, tiene onder tiene, honderde onder honderde, duisende onder duisende:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">E</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">5</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">0</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">+ 1</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">7</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">5</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Tel die <span style="color:#2563eb;font-weight:700">ene</span> op: <span style="color:#2563eb;font-weight:700">0</span> + <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">5</span>. Skryf <span style="color:#2563eb;font-weight:700">5</span> in die ene-kolom.',

            'Tel die <span style="color:#16a34a;font-weight:700">tiene</span> op: <span style="color:#16a34a;font-weight:700">5</span> + <span style="color:#16a34a;font-weight:700">7</span> = <span style="color:#16a34a;font-weight:700">12</span>. Skryf <span style="color:#16a34a;font-weight:700">2</span> in die tiene-kolom en dra <span style="color:#ea580c;font-weight:700">1</span> oor na die honderde-kolom.',

            'Tel die <span style="color:#d97706;font-weight:700">honderde</span> op: <span style="color:#d97706;font-weight:700">4</span> + <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#ea580c;font-weight:700">1</span> (oorgedra) = <span style="color:#d97706;font-weight:700">8</span>. Skryf <span style="color:#d97706;font-weight:700">8</span> in die honderde-kolom.',

            'Tel die <span style="color:#dc2626;font-weight:700">duisende</span> op: <span style="color:#dc2626;font-weight:700">2</span> + <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Skryf <span style="color:#dc2626;font-weight:700">3</span> in die duisende-kolom.',

            'Skryf die antwoord met die rand-simbool: Thabo het <strong>R3 825</strong> altesaam.',
          ],
        },

        // ── UITGEWERKTE VOORBEELD 10 ─────────────────────────────────────────
        {
          question: 'ʼn Fiets kos R3 999. Lerato het R2 650. Hoeveel meer geld het sy nodig?',
          answer: '<strong>R1 349</strong>',
          steps: [
            'Die sleutelwoorde is <strong>"hoeveel meer"</strong> — dit vertel ons om <strong>af te trek</strong>. Ons moet die verskil vind: R3 999 − R2 650.',

            'Skryf die getalle in kolomme — ene onder ene, tiene onder tiene, honderde onder honderde, duisende onder duisende:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">E</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">9</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">9</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">9</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">− 2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">6</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">5</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">0</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Trek die <span style="color:#2563eb;font-weight:700">ene</span> af: <span style="color:#2563eb;font-weight:700">9</span> − <span style="color:#2563eb;font-weight:700">0</span> = <span style="color:#2563eb;font-weight:700">9</span>. Skryf <span style="color:#2563eb;font-weight:700">9</span> in die ene-kolom.',

            'Trek die <span style="color:#16a34a;font-weight:700">tiene</span> af: <span style="color:#16a34a;font-weight:700">9</span> − <span style="color:#16a34a;font-weight:700">5</span> = <span style="color:#16a34a;font-weight:700">4</span>. Skryf <span style="color:#16a34a;font-weight:700">4</span> in die tiene-kolom.',

            'Trek die <span style="color:#d97706;font-weight:700">honderde</span> af: <span style="color:#d97706;font-weight:700">9</span> − <span style="color:#d97706;font-weight:700">6</span> = <span style="color:#d97706;font-weight:700">3</span>. Skryf <span style="color:#d97706;font-weight:700">3</span> in die honderde-kolom.',

            'Trek die <span style="color:#dc2626;font-weight:700">duisende</span> af: <span style="color:#dc2626;font-weight:700">3</span> − <span style="color:#dc2626;font-weight:700">2</span> = <span style="color:#dc2626;font-weight:700">1</span>. Skryf <span style="color:#dc2626;font-weight:700">1</span> in die duisende-kolom.',

            'Skryf die antwoord met die rand-simbool: Lerato het nog <strong>R1 349</strong> nodig om die fiets te koop.',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — GRONDSLAE: KOLOMOPTELLING & -AFTREKKING (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondslae',
      questions: [
        { difficulty: 'Easy', question: 'Bereken: 3 245 + 2 431', answer: '5 676', checkMode: 'auto', correctAnswer: '5676', correctAnswers: ['5676', '5 676'], explanation: 'Ene: 5+1=6\nTiene: 4+3=7\nHonderde: 2+4=6\nDuisende: 3+2=5\nAntwoord: 5 676 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 5 678 + 1 231', answer: '6 909', checkMode: 'auto', correctAnswer: '6909', correctAnswers: ['6909', '6 909'], explanation: 'Ene: 8+1=9\nTiene: 7+3=10, skryf 0 dra 1 oor\nHonderde: 6+2+1=9\nDuisende: 5+1=6\nAntwoord: 6 909 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 4 123 + 3 456', answer: '7 579', checkMode: 'auto', correctAnswer: '7579', correctAnswers: ['7579', '7 579'], explanation: 'Ene: 3+6=9\nTiene: 2+5=7\nHonderde: 1+4=5\nDuisende: 4+3=7\nAntwoord: 7 579 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 2 568 + 1 345', answer: '3 913', checkMode: 'auto', correctAnswer: '3913', correctAnswers: ['3913', '3 913'], explanation: 'Ene: 8+5=13, skryf 3 dra 1 oor\nTiene: 6+4+1=11, skryf 1 dra 1 oor\nHonderde: 5+3+1=9\nDuisende: 2+1=3\nAntwoord: 3 913 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 1 867 + 1 345', answer: '3 212', checkMode: 'auto', correctAnswer: '3212', correctAnswers: ['3212', '3 212'], explanation: 'Ene: 7+5=12, skryf 2 dra 1 oor\nTiene: 6+4+1=11, skryf 1 dra 1 oor\nHonderde: 8+3+1=12, skryf 2 dra 1 oor\nDuisende: 1+1+1=3\nAntwoord: 3 212 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 3 456 + 2 678', answer: '6 134', checkMode: 'auto', correctAnswer: '6134', correctAnswers: ['6134', '6 134'], explanation: 'Ene: 6+8=14, skryf 4 dra 1 oor\nTiene: 5+7+1=13, skryf 3 dra 1 oor\nHonderde: 4+6+1=11, skryf 1 dra 1 oor\nDuisende: 3+2+1=6\nAntwoord: 6 134 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 4 785 + 1 246', answer: '6 031', checkMode: 'auto', correctAnswer: '6031', correctAnswers: ['6031', '6 031'], explanation: 'Ene: 5+6=11, skryf 1 dra 1 oor\nTiene: 8+4+1=13, skryf 3 dra 1 oor\nHonderde: 7+2+1=10, skryf 0 dra 1 oor\nDuisende: 4+1+1=6\nAntwoord: 6 031 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 5 678 + 2 456', answer: '8 134', checkMode: 'auto', correctAnswer: '8134', correctAnswers: ['8134', '8 134'], explanation: 'Ene: 8+6=14, skryf 4 dra 1 oor\nTiene: 7+5+1=13, skryf 3 dra 1 oor\nHonderde: 6+4+1=11, skryf 1 dra 1 oor\nDuisende: 5+2+1=8\nAntwoord: 8 134 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 6 789 − 2 345', answer: '4 444', checkMode: 'auto', correctAnswer: '4444', correctAnswers: ['4444', '4 444'], explanation: 'Ene: 9−5=4\nTiene: 8−4=4\nHonderde: 7−3=4\nDuisende: 6−2=4\nAntwoord: 4 444 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 5 678 − 3 245', answer: '2 433', checkMode: 'auto', correctAnswer: '2433', correctAnswers: ['2433', '2 433'], explanation: 'Ene: 8−5=3\nTiene: 7−4=3\nHonderde: 6−2=4\nDuisende: 5−3=2\nAntwoord: 2 433 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 8 765 − 4 321', answer: '4 444', checkMode: 'auto', correctAnswer: '4444', correctAnswers: ['4444', '4 444'], explanation: 'Ene: 5−1=4\nTiene: 6−2=4\nHonderde: 7−3=4\nDuisende: 8−4=4\nAntwoord: 4 444 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 4 768 − 2 345', answer: '2 423', checkMode: 'auto', correctAnswer: '2423', correctAnswers: ['2423', '2 423'], explanation: 'Ene: 8−5=3\nTiene: 6−4=2\nHonderde: 7−3=4\nDuisende: 4−2=2\nAntwoord: 2 423 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 5 304 − 1 867 (leen nodig)', answer: '3 437', checkMode: 'auto', correctAnswer: '3437', correctAnswers: ['3437', '3 437'], explanation: 'Ene: 4−7, leen → 14−7=7\nTiene: 9−6=3 (na leen)\nHonderde: 2−8, leen → 12−8=4\nDuisende: 4−1=3\nAntwoord: 3 437 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 7 302 − 4 568 (leen nodig)', answer: '2 734', checkMode: 'auto', correctAnswer: '2734', correctAnswers: ['2734', '2 734'], explanation: 'Ene: 2−8, leen deur tiene (0) → 12−8=4\nTiene: 9−6=3\nHonderde: 2−5, leen → 12−5=7\nDuisende: 6−4=2\nAntwoord: 2 734 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 6 050 − 2 387 (leen nodig)', answer: '3 663', checkMode: 'auto', correctAnswer: '3663', correctAnswers: ['3663', '3 663'], explanation: 'Ene: 0−7, leen → 10−7=3\nTiene: 4−8, leen deur honderde (0) → 14−8=6\nHonderde: 9−3=6\nDuisende: 5−2=3\nAntwoord: 3 663 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 9 302 − 5 678 (leen nodig)', answer: '3 624', checkMode: 'auto', correctAnswer: '3624', correctAnswers: ['3624', '3 624'], explanation: 'Ene: 2−8, leen → 12−8=4\nTiene: 9−7=2 (na leen)\nHonderde: 2−6, leen → 12−6=6\nDuisende: 8−5=3\nAntwoord: 3 624 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 8 000 − 3 456 (leen nodig)', answer: '4 544', checkMode: 'auto', correctAnswer: '4544', correctAnswers: ['4544', '4 544'], explanation: 'Ene: 0−6, kaskade-leen deur tiene en honderde → 10−6=4\nTiene: 9−5=4\nHonderde: 9−4=5\nDuisende: 7−3=4\nAntwoord: 4 544 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 7 005 − 2 348 (leen nodig)', answer: '4 657', checkMode: 'auto', correctAnswer: '4657', correctAnswers: ['4657', '4 657'], explanation: 'Ene: 5−8, kaskade-leen deur tiene en honderde → 15−8=7\nTiene: 9−4=5\nHonderde: 9−3=6\nDuisende: 6−2=4\nAntwoord: 4 657 ✓' },
        { difficulty: 'Easy', question: 'Skat 3 456 + 2 234 deur elke getal na die naaste honderd af te rond. Skryf slegs die skatting.', answer: '5 700', checkMode: 'auto', correctAnswer: '5700', correctAnswers: ['5700', '5 700'], explanation: '3 456 → 3 500\n2 234 → 2 200\nSkatting: 3 500 + 2 200 = 5 700 ✓' },
        { difficulty: 'Medium', question: 'Skat 5 678 + 2 345 deur elke getal na die naaste honderd af te rond. Skryf slegs die skatting.', answer: '8 000', checkMode: 'auto', correctAnswer: '8000', correctAnswers: ['8000', '8 000'], explanation: '5 678 → 5 700\n2 345 → 2 300\nSkatting: 5 700 + 2 300 = 8 000 ✓' },
        { difficulty: 'Medium', question: 'Skat 4 321 + 3 789 deur elke getal na die naaste honderd af te rond. Skryf slegs die skatting.', answer: '8 100', checkMode: 'auto', correctAnswer: '8100', correctAnswers: ['8100', '8 100'], explanation: '4 321 → 4 300\n3 789 → 3 800\nSkatting: 4 300 + 3 800 = 8 100 ✓' },
        { difficulty: 'Medium', question: 'Skat 6 754 + 2 198 deur elke getal na die naaste honderd af te rond. Skryf slegs die skatting.', answer: '9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000'], explanation: '6 754 → 6 800\n2 198 → 2 200\nSkatting: 6 800 + 2 200 = 9 000 ✓' },
        { difficulty: 'Easy', question: 'Bereken 2 345 + 1 323 = 3 668. Gebruik aftrekking om hierdie antwoord na te gaan. Watter getal behoort jy terug te kry?', answer: '2 345', checkMode: 'auto', correctAnswer: '2345', correctAnswers: ['2345', '2 345'], explanation: 'Nagaan: 3 668 − 1 323 = 2 345 — dit stem ooreen met die oorspronklike getal, dus is die optelling korrek ✓' },
        { difficulty: 'Medium', question: 'Bereken 4 850 − 2 340 = 2 510. Gebruik optelling om hierdie antwoord na te gaan. Watter getal behoort jy terug te kry?', answer: '4 850', checkMode: 'auto', correctAnswer: '4850', correctAnswers: ['4850', '4 850'], explanation: 'Nagaan: 2 510 + 2 340 = 4 850 — dit stem ooreen met die oorspronklike getal, dus is die aftrekking korrek ✓' },
        { difficulty: 'Medium', question: 'Bereken: 9 856 − 3 421', answer: '6 435', checkMode: 'auto', correctAnswer: '6435', correctAnswers: ['6435', '6 435'], explanation: 'Ene: 6−1=5\nTiene: 5−2=3\nHonderde: 8−4=4\nDuisende: 9−3=6\nAntwoord: 6 435 ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het kolomoptelling, -aftrekking en skatting bemeester.' },
        { minScore: 19, message: 'Goeie werk! Jy is selfversekerd met die basiese vaardighede — kyk na enige gemiste vrae.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor oordra en leen weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — LASTIGER VARIANTE: HOOFREKENE & INVERSE BEWERKINGS (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Hoofrekene en Inverse Bewerkings',
      questions: [
        { difficulty: 'Easy', question: 'Bereken in jou kop: 3 450 + 300', answer: '3 750', checkMode: 'auto', correctAnswer: '3750', correctAnswers: ['3750', '3 750'], explanation: 'Om 300 by te tel verander net die honderde-syfer: 4+3=7\nAntwoord: 3 750 ✓' },
        { difficulty: 'Easy', question: 'Bereken in jou kop: 3 450 − 300', answer: '3 150', checkMode: 'auto', correctAnswer: '3150', correctAnswers: ['3150', '3 150'], explanation: 'Om 300 af te trek verander net die honderde-syfer: 4−3=1\nAntwoord: 3 150 ✓' },
        { difficulty: 'Easy', question: 'Bereken in jou kop: 3 450 + 40', answer: '3 490', checkMode: 'auto', correctAnswer: '3490', correctAnswers: ['3490', '3 490'], explanation: 'Om 40 by te tel verander net die tiene-syfer: 5+4=9\nAntwoord: 3 490 ✓' },
        { difficulty: 'Easy', question: 'Bereken in jou kop: 3 450 − 40', answer: '3 410', checkMode: 'auto', correctAnswer: '3410', correctAnswers: ['3410', '3 410'], explanation: 'Om 40 af te trek verander net die tiene-syfer: 5−4=1\nAntwoord: 3 410 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 5 300 + 400', answer: '5 700', checkMode: 'auto', correctAnswer: '5700', correctAnswers: ['5700', '5 700'], explanation: 'Net die honderde-syfer verander: 3+4=7\nAntwoord: 5 700 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 8 760 − 300', answer: '8 460', checkMode: 'auto', correctAnswer: '8460', correctAnswers: ['8460', '8 460'], explanation: 'Net die honderde-syfer verander: 7−3=4\nAntwoord: 8 460 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 2 140 + 50', answer: '2 190', checkMode: 'auto', correctAnswer: '2190', correctAnswers: ['2190', '2 190'], explanation: 'Net die tiene-syfer verander: 4+5=9\nAntwoord: 2 190 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 6 120 − 60', answer: '6 060', checkMode: 'auto', correctAnswer: '6060', correctAnswers: ['6060', '6 060'], explanation: '2 tiene − 6 tiene het leen van honderde nodig: 12 tiene − 6 tiene = 6 tiene.\nAntwoord: 6 060 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 4 230 + 700', answer: '4 930', checkMode: 'auto', correctAnswer: '4930', correctAnswers: ['4930', '4 930'], explanation: 'Net die honderde-syfer verander: 2+7=9\nAntwoord: 4 930 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 3 600 − 800', answer: '2 800', checkMode: 'auto', correctAnswer: '2800', correctAnswers: ['2800', '2 800'], explanation: '6 honderde − 8 honderde het leen van duisende nodig: 3 000 − 800 = 2 800.\nAntwoord: 2 800 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 7 450 + 300', answer: '7 750', checkMode: 'auto', correctAnswer: '7750', correctAnswers: ['7750', '7 750'], explanation: 'Net die honderde-syfer verander: 4+3=7\nAntwoord: 7 750 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 4 890 − 70', answer: '4 820', checkMode: 'auto', correctAnswer: '4820', correctAnswers: ['4820', '4 820'], explanation: 'Net die tiene-syfer verander: 9−7=2\nAntwoord: 4 820 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 5 240 + 800', answer: '6 040', checkMode: 'auto', correctAnswer: '6040', correctAnswers: ['6040', '6 040'], explanation: '2 honderde + 8 honderde = 10 honderde, dus verander die duisende-syfer ook: 5 240 + 800 = 6 040 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 6 900 − 500', answer: '6 400', checkMode: 'auto', correctAnswer: '6400', correctAnswers: ['6400', '6 400'], explanation: 'Net die honderde-syfer verander: 9−5=4\nAntwoord: 6 400 ✓' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 3 480 + 90', answer: '3 570', checkMode: 'auto', correctAnswer: '3570', correctAnswers: ['3570', '3 570'], explanation: '8 tiene + 9 tiene = 17 tiene, dus verander die honderde-syfer ook: 3 480 + 90 = 3 570 ✓' },
        { difficulty: 'Easy', question: 'Bereken 2 345 + 1 432. Skryf slegs die getal.', answer: '3 777', checkMode: 'auto', correctAnswer: '3777', correctAnswers: ['3777', '3 777'], explanation: 'Ene: 5+2=7\nTiene: 4+3=7\nHonderde: 3+4=7\nDuisende: 2+1=3\nAntwoord: 3 777 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die inverse bewerking om 2 345 + 1 432 = 3 777 na te gaan. Wat kry jy as jy 1 432 van 3 777 aftrek?', answer: '2 345', checkMode: 'auto', correctAnswer: '2345', correctAnswers: ['2345', '2 345'], explanation: '3 777 − 1 432 = 2 345 — dit stem ooreen met die oorspronklike getal en bevestig die optelling ✓' },
        { difficulty: 'Medium', question: 'Bereken: 5 678 − 2 345', answer: '3 333', checkMode: 'auto', correctAnswer: '3333', correctAnswers: ['3333', '3 333'], explanation: 'Ene: 8−5=3\nTiene: 7−4=3\nHonderde: 6−3=3\nDuisende: 5−2=3\nAntwoord: 3 333 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die inverse bewerking om 5 678 − 2 345 = 3 333 na te gaan. Wat kry jy as jy 2 345 by 3 333 optel?', answer: '5 678', checkMode: 'auto', correctAnswer: '5678', correctAnswers: ['5678', '5 678'], explanation: '3 333 + 2 345 = 5 678 — dit stem ooreen met die oorspronklike getal en bevestig die aftrekking ✓' },
        { difficulty: 'Hard', question: 'ʼn Getal is van 4 231 afgetrek om 2 456 te gee. Gebruik die inverse bewerking (optelling) om die ontbrekende getal te vind.', answer: '1 775', checkMode: 'auto', correctAnswer: '1775', correctAnswers: ['1775', '1 775'], explanation: 'ontbrekend = 4 231 − 2 456 = 1 775\nNagaan: 2 456 + 1 775 = 4 231 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 6 412 + 1 543', answer: '7 955', checkMode: 'auto', correctAnswer: '7955', correctAnswers: ['7955', '7 955'], explanation: 'Ene: 2+3=5\nTiene: 1+4=5\nHonderde: 4+5=9\nDuisende: 6+1=7\nAntwoord: 7 955 ✓' },
        { difficulty: 'Hard', question: 'Gebruik die inverse bewerking om 6 412 + 1 543 = 7 955 na te gaan. Watter getal behoort jy te kry as jy 1 543 van 7 955 aftrek?', answer: '6 412', checkMode: 'auto', correctAnswer: '6412', correctAnswers: ['6412', '6 412'], explanation: '7 955 − 1 543 = 6 412 — stem ooreen met die oorspronklike getal ✓' },
        { difficulty: 'Hard', question: 'Bereken 8 500 − 3 271, gaan dan jou antwoord na met optelling. Skryf slegs die finale, nagegane antwoord.', answer: '5 229', checkMode: 'auto', correctAnswer: '5229', correctAnswers: ['5229', '5 229'], explanation: '8 500 − 3 271 = 5 229\nNagaan: 5 229 + 3 271 = 8 500 ✓' },
        { difficulty: 'Hard', question: 'Skat 6 754 + 2 198 deur af te rond na die naaste honderd, verduidelik dan in een sin waarom afrond dit vinniger maak om groot somme na te gaan.', answer: 'Skatting: 6 800 + 2 200 = 9 000. Afrond maak die getalle eenvoudiger om in jou kop op te tel, sodat jy vinnig kan kyk of jou presiese antwoord redelik is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho het 5 304 − 1 867 = 3 537 bereken. Gebruik die inverse bewerking om te kyk of Sipho korrek is, en verduidelik jou redenasie.', answer: 'Nagaan: 3 537 + 1 867 = 5 404, nie 5 304 nie, dus is Sipho verkeerd. Die korrekte antwoord is 3 437 (aangesien 3 437 + 1 867 = 5 304).', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het hoofrekene-strategieë en inverse bewerkings bemeester.' },
        { minScore: 19, message: 'Goeie werk! Kyk na enige gemiste vrae en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor hoofrekene en inverse bewerkings weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — WERKLIKE-WÊRELD GELDWOORDPROBLEME (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Geldwoordprobleme',
      questions: [
        { difficulty: 'Easy', question: 'Thabo het R2 450 spaargeld. Hy verdien R1 375 deur takies te doen. Hoeveel het hy altesaam?', answer: 'R3 825', checkMode: 'auto', correctAnswer: 'R3825', correctAnswers: ['R3825', 'R3 825', '3825', '3 825'], explanation: '"Altesaam" beteken optel: R2 450 + R1 375 = R3 825 ✓' },
        { difficulty: 'Easy', question: 'ʼn Fiets kos R3 999. Lerato het R2 650. Hoeveel meer geld het sy nodig?', answer: 'R1 349', checkMode: 'auto', correctAnswer: 'R1349', correctAnswers: ['R1349', 'R1 349', '1349', '1 349'], explanation: '"Hoeveel meer" beteken aftrek: R3 999 − R2 650 = R1 349 ✓' },
        { difficulty: 'Easy', question: 'Sipho het R2 350 en verdien R1 400 deur takies te doen. Hoeveel het hy altesaam?', answer: 'R3 750', checkMode: 'auto', correctAnswer: 'R3750', correctAnswers: ['R3750', 'R3 750', '3750', '3 750'], explanation: 'R2 350 + R1 400 = R3 750 ✓' },
        { difficulty: 'Medium', question: 'ʼn Televisie kos R4 999. Amahle het R2 875. Hoeveel meer geld het sy nodig?', answer: 'R2 124', checkMode: 'auto', correctAnswer: 'R2124', correctAnswers: ['R2124', 'R2 124', '2124', '2 124'], explanation: 'R4 999 − R2 875 = R2 124 ✓' },
        { difficulty: 'Medium', question: 'Lerato koop skoolskoene vir R1 349 en ʼn skoolsak vir R875. Wat is die totale koste?', answer: 'R2 224', checkMode: 'auto', correctAnswer: 'R2224', correctAnswers: ['R2224', 'R2 224', '2224', '2 224'], explanation: 'R1 349 + R875 = R2 224 ✓' },
        { difficulty: 'Medium', question: 'Lerato het R5 000. Sy spandeer R2 224 aan skoene en ʼn sak. Hoeveel geld het sy oor?', answer: 'R2 776', checkMode: 'auto', correctAnswer: 'R2776', correctAnswers: ['R2776', 'R2 776', '2776', '2 776'], explanation: 'R5 000 − R2 224 = R2 776 ✓' },
        { difficulty: 'Easy', question: 'ʼn Boer pluk 3 120 lemoene op Maandag en 1 405 op Dinsdag. Wat is die totale aantal lemoene?', answer: '4 525', checkMode: 'auto', correctAnswer: '4525', correctAnswers: ['4525', '4 525'], explanation: '3 120 + 1 405 = 4 525 ✓' },
        { difficulty: 'Easy', question: 'ʼn Skoolbiblioteek het 2 430 boeke en koop 1 250 nuwe boeke. Hoeveel boeke is daar in totaal?', answer: '3 680', checkMode: 'auto', correctAnswer: '3680', correctAnswers: ['3680', '3 680'], explanation: '2 430 + 1 250 = 3 680 ✓' },
        { difficulty: 'Easy', question: 'Jy het 1 245 plakkers en jou vriend gee jou nog 312 meer. Hoeveel het jy altesaam?', answer: '1 557', checkMode: 'auto', correctAnswer: '1557', correctAnswers: ['1557', '1 557'], explanation: '1 245 + 312 = 1 557 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skool het 1 865 leerders. 342 leerders gaan op ʼn uitstappie. Hoeveel leerders is nog by die skool?', answer: '1 523', checkMode: 'auto', correctAnswer: '1523', correctAnswers: ['1523', '1 523'], explanation: '1 865 − 342 = 1 523 ✓' },
        { difficulty: 'Medium', question: 'ʼn Fabriek maak 4 500 bottels. 1 250 word verkoop. Wat is die verskil tussen die aantal gemaak en die aantal verkoop?', answer: '3 250', checkMode: 'auto', correctAnswer: '3250', correctAnswers: ['3250', '3 250'], explanation: '4 500 − 1 250 = 3 250 ✓' },
        { difficulty: 'Medium', question: 'Jy het R3 450 en jy spandeer R1 230. Hoeveel geld het jy oor?', answer: 'R2 220', checkMode: 'auto', correctAnswer: 'R2220', correctAnswers: ['R2220', 'R2 220', '2220', '2 220'], explanation: 'R3 450 − R1 230 = R2 220 ✓' },
        { difficulty: 'Medium', question: 'Amahle het R2 650 en kry ʼn geskenk van R1 875. Hoeveel het sy altesaam?', answer: 'R4 525', checkMode: 'auto', correctAnswer: 'R4525', correctAnswers: ['R4525', 'R4 525', '4525', '4 525'], explanation: 'R2 650 + R1 875 = R4 525 ✓' },
        { difficulty: 'Medium', question: 'Amahle het R4 525 en spandeer R1 899 aan ʼn geskenk vir haar ma. Hoeveel het sy oor?', answer: 'R2 626', checkMode: 'auto', correctAnswer: 'R2626', correctAnswers: ['R2626', 'R2 626', '2626', '2 626'], explanation: 'R4 525 − R1 899 = R2 626 ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop R3 800 se goedere op Saterdag en R2 150 op Sondag. Wat is die totale verkope vir die naweek?', answer: 'R5 950', checkMode: 'auto', correctAnswer: 'R5950', correctAnswers: ['R5950', 'R5 950', '5950', '5 950'], explanation: 'R3 800 + R2 150 = R5 950 ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel het R5 950 in naweekverkope. Dit betaal R2 680 in uitgawes. Hoeveel wins is oor?', answer: 'R3 270', checkMode: 'auto', correctAnswer: 'R3270', correctAnswers: ['R3270', 'R3 270', '3270', '3 270'], explanation: 'R5 950 − R2 680 = R3 270 ✓' },
        { difficulty: 'Medium', question: 'Thabo het R4 200. Hy wil ʼn baadjie koop wat R1 875 kos. Hoeveel geld sal hy oor hê?', answer: 'R2 325', checkMode: 'auto', correctAnswer: 'R2325', correctAnswers: ['R2325', 'R2 325', '2325', '2 325'], explanation: 'R4 200 − R1 875 = R2 325 ✓' },
        { difficulty: 'Medium', question: 'Sipho het R2 999 verlede jaar en R1 876 hierdie jaar gespaar. Wat is sy totale spaargeld?', answer: 'R4 875', checkMode: 'auto', correctAnswer: 'R4875', correctAnswers: ['R4875', 'R4 875', '4875', '4 875'], explanation: 'R2 999 + R1 876 = R4 875 ✓' },
        { difficulty: 'Medium', question: 'ʼn Motor kos R6 250. Lerato het reeds R3 475 gespaar. Hoeveel meer het sy nodig?', answer: 'R2 775', checkMode: 'auto', correctAnswer: 'R2775', correctAnswers: ['R2775', 'R2 775', '2775', '2 775'], explanation: 'R6 250 − R3 475 = R2 775 ✓' },
        { difficulty: 'Medium', question: 'Amahle verdien R1 899 van ʼn markstalletjie en R2 760 deur op te pas. Wat is haar totale inkomste?', answer: 'R4 659', checkMode: 'auto', correctAnswer: 'R4659', correctAnswers: ['R4659', 'R4 659', '4659', '4 659'], explanation: 'R1 899 + R2 760 = R4 659 ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel het R7 000 se voorraadwaarde gehad. Dit het R3 899 se goedere verkoop. Watter voorraadwaarde is oor?', answer: 'R3 101', checkMode: 'auto', correctAnswer: 'R3101', correctAnswers: ['R3101', 'R3 101', '3101', '3 101'], explanation: 'R7 000 − R3 899 = R3 101 ✓' },
        { difficulty: 'Hard', question: 'Thabo het R5 000. Hy koop ʼn baadjie vir R1 875 en skoene vir R1 349. Hoeveel geld het hy oor?', answer: 'R1 776', checkMode: 'auto', correctAnswer: 'R1776', correctAnswers: ['R1776', 'R1 776', '1776', '1 776'], explanation: 'Totaal spandeer: R1 875 + R1 349 = R3 224\nOor: R5 000 − R3 224 = R1 776 ✓' },
        { difficulty: 'Hard', question: 'ʼn Winkel verdien R3 250 op Maandag en R1 875 op Dinsdag, betaal dan R2 999 huur. Hoeveel geld is oor na die huur betaal is?', answer: 'R2 126', checkMode: 'auto', correctAnswer: 'R2126', correctAnswers: ['R2126', 'R2 126', '2126', '2 126'], explanation: 'Totaal verdien: R3 250 + R1 875 = R5 125\nNa huur: R5 125 − R2 999 = R2 126 ✓' },
        { difficulty: 'Hard', question: 'Amahle het R4 890. Sy spandeer R2 999 aan ʼn foon. Toe gee haar tannie haar R1 500. Hoeveel geld het sy nou?', answer: 'R3 391', checkMode: 'auto', correctAnswer: 'R3391', correctAnswers: ['R3391', 'R3 391', '3391', '3 391'], explanation: 'Na spandeer: R4 890 − R2 999 = R1 891\nNa geskenk: R1 891 + R1 500 = R3 391 ✓' },
        { difficulty: 'Hard', question: 'Verduidelik, deur die woorde "altesaam" en "hoeveel oor" te gebruik, hoe jy besluit of ʼn geldwoordprobleem optelling of aftrekking benodig.', answer: 'As die probleem woorde soos "altesaam", "totaal" of "in totaal" gebruik, tel jy die bedrae bymekaar. As dit woorde soos "hoeveel oor" of "hoeveel meer" gebruik, trek jy een bedrag van ʼn ander af.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue geldwoordprobleme met optelling en aftrekking oplos.' },
        { minScore: 19, message: 'Goeie werk! Kyk na enige gemiste vrae en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor geldwoordprobleme weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — VEELVOUDIGE STAPPE EN GEKOMBINEERDE PROBLEME (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Veelvoudige Stappe en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Hard', question: 'ʼn Skool het 1 876 blikkies in week een versamel en 2 547 blikkies in week twee. Hoeveel blikkies het hulle altesaam versamel?', answer: '4 423', checkMode: 'auto', correctAnswer: '4423', correctAnswers: ['4423', '4 423'], explanation: '1 876 + 2 547 = 4 423 ✓' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 6 050 brode. Dit verkoop 2 387, en skenk dan nog 1 200 aan ʼn liefdadigheidsorganisasie. Hoeveel brode is oor?', answer: '2 463', checkMode: 'auto', correctAnswer: '2463', correctAnswers: ['2463', '2 463'], explanation: '6 050 − 2 387 = 3 663\n3 663 − 1 200 = 2 463 ✓' },
        { difficulty: 'Hard', question: 'ʼn Stadion het 2 345 ondersteuners. 1 876 meer kom aan, dan verlaat 987 vroeg. Hoeveel ondersteuners bly oor?', answer: '3 234', checkMode: 'auto', correctAnswer: '3234', correctAnswers: ['3234', '3 234'], explanation: '2 345 + 1 876 = 4 221\n4 221 − 987 = 3 234 ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer het 5 000 appels. Hy verkoop 1 234, dan nog 2 345 meer. Hoeveel appels het hy oor?', answer: '1 421', checkMode: 'auto', correctAnswer: '1421', correctAnswers: ['1421', '1 421'], explanation: '5 000 − 1 234 = 3 766\n3 766 − 2 345 = 1 421 ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool het 3 456 leerders. 2 544 meer leerders sluit aan, dan gradueer 1 000 en vertrek. Hoeveel leerders is nou by die skool?', answer: '5 000', checkMode: 'auto', correctAnswer: '5000', correctAnswers: ['5000', '5 000'], explanation: '3 456 + 2 544 = 6 000\n6 000 − 1 000 = 5 000 ✓' },
        { difficulty: 'Hard', question: 'ʼn Getal is van 4 231 afgetrek om 2 456 te gee. As 1 775 dan by 2 456 getel word, wat is die resultaat?', answer: '4 231', checkMode: 'auto', correctAnswer: '4231', correctAnswers: ['4231', '4 231'], explanation: 'Ontbrekende getal = 4 231 − 2 456 = 1 775\n2 456 + 1 775 = 4 231 ✓ (dit bring ons terug na die begin, wat die inverse verhouding bevestig)' },
        { difficulty: 'Hard', question: 'ʼn Maatskappy het 9 999 items in voorraad gehad. Dit het 4 567 items verkoop, en toe ʼn aflewering van nog 1 233 ontvang. Hoeveel items is nou in voorraad?', answer: '6 665', checkMode: 'auto', correctAnswer: '6665', correctAnswers: ['6665', '6 665'], explanation: '9 999 − 4 567 = 5 432\n5 432 + 1 233 = 6 665 ✓' },
        { difficulty: 'Medium', question: 'Skat eers 3 500 + 2 200, bereken dan die presiese antwoord op 3 456 + 2 234. Skryf slegs die presiese antwoord.', answer: '5 690', checkMode: 'auto', correctAnswer: '5690', correctAnswers: ['5690', '5 690'], explanation: 'Skatting: 3 500 + 2 200 = 5 700\nPresies: 3 456 + 2 234 = 5 690 (naby aan die skatting, dus redelik) ✓' },
        { difficulty: 'Medium', question: 'Skat eers 4 900 − 1 400, bereken dan die presiese antwoord op 4 872 − 1 439. Skryf slegs die presiese antwoord.', answer: '3 433', checkMode: 'auto', correctAnswer: '3433', correctAnswers: ['3433', '3 433'], explanation: 'Skatting: 4 900 − 1 400 = 3 500\nPresies: 4 872 − 1 439 = 3 433 (naby aan die skatting, dus redelik) ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkelier ontvang R1 250, R2 875 en R1 000 van drie kliënte op een dag. Wat is haar totale inkomste vir die dag?', answer: 'R5 125', checkMode: 'auto', correctAnswer: 'R5125', correctAnswers: ['R5125', 'R5 125', '5125', '5 125'], explanation: 'R1 250 + R2 875 + R1 000 = R5 125 ✓' },
        { difficulty: 'Hard', question: 'ʼn Winkelier het R8 500 se voorraadwaarde. Sy verkoop goedere ter waarde van R2 250, dan nog goedere ter waarde van R1 875. Watter voorraadwaarde is oor?', answer: 'R4 375', checkMode: 'auto', correctAnswer: 'R4375', correctAnswers: ['R4375', 'R4 375', '4375', '4 375'], explanation: 'R8 500 − R2 250 = R6 250\nR6 250 − R1 875 = R4 375 ✓' },
        { difficulty: 'Hard', question: 'Thabo het R2 450. Hy verdien nog R1 375 deur takies te doen, en spandeer dan R1 500 aan ʼn geskenk. Hoeveel geld het hy oor?', answer: 'R2 325', checkMode: 'auto', correctAnswer: 'R2325', correctAnswers: ['R2325', 'R2 325', '2325', '2 325'], explanation: 'R2 450 + R1 375 = R3 825\nR3 825 − R1 500 = R2 325 ✓' },
        { difficulty: 'Hard', question: 'ʼn Fabriek het 4 235 items in Januarie geproduseer en nog 1 876 in Februarie. In Maart is 2 345 items verkoop. Hoeveel items bly oor van die Januarie- en Februarie-produksie?', answer: '3 766', checkMode: 'auto', correctAnswer: '3766', correctAnswers: ['3766', '3 766'], explanation: '4 235 + 1 876 = 6 111\n6 111 − 2 345 = 3 766 ✓' },
        { difficulty: 'Hard', question: 'ʼn Liefdadigheidsorganisasie het R4 321 by een geleentheid en R2 109 by ʼn tweede geleentheid ingesamel, en toe R3 215 aan voorrade spandeer. Hoeveel geld is oor?', answer: 'R3 215', checkMode: 'auto', correctAnswer: 'R3215', correctAnswers: ['R3215', 'R3 215', '3215', '3 215'], explanation: 'R4 321 + R2 109 = R6 430\nR6 430 − R3 215 = R3 215 ✓' },
        { difficulty: 'Hard', question: 'Sipho begin met 2 999 albasters. Hy gee 1 500 weg, wen dan nog 3 400, en verloor dan 1 600 in ʼn speletjie. Hoeveel albasters het hy nou?', answer: '3 299', checkMode: 'auto', correctAnswer: '3299', correctAnswers: ['3299', '3 299'], explanation: '2 999 − 1 500 = 1 499\n1 499 + 3 400 = 4 899\n4 899 − 1 600 = 3 299 ✓' },
        { difficulty: 'Hard', question: 'ʼn Busmaatskappy het 5 670 passasiers op Saterdag vervoer en 2 340 minder op Sondag. Hoeveel passasiers het dit op Sondag vervoer, en wat was die totaal vir die naweek?', answer: 'Sondag: 3 330; Naweektotaal: 9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000', '3330 en 9000', 'sondag=3330, totaal=9000'], explanation: 'Sondag: 5 670 − 2 340 = 3 330\nNaweektotaal: 5 670 + 3 330 = 9 000 ✓' },
        { difficulty: 'Hard', question: 'ʼn Stadion het 1 290 leë sitplekke voor ʼn wedstryd gehad, en 3 480 meer mense as verwag het opgedaag. As die stadion presies genoeg mense verwag het om al die leë sitplekke te vul, hoeveel mense is die stadion nou oor kapasiteit?', answer: '3 480', checkMode: 'auto', correctAnswer: '3480', correctAnswers: ['3480', '3 480'], explanation: 'Die ekstra aankomste (3 480) is almal bo die verwagte aantal wat nodig was om die sitplekke te vul, dus is die stadion 3 480 mense oor kapasiteit ✓' },
        { difficulty: 'Hard', question: 'ʼn Randbedrag word by R2 450 getel om R5 825 te gee. Wat was die randbedrag wat bygetel is?', answer: 'R3 375', checkMode: 'auto', correctAnswer: 'R3375', correctAnswers: ['R3375', 'R3 375', '3375', '3 375'], explanation: 'Ontbrekende bedrag = R5 825 − R2 450 = R3 375\nNagaan: R2 450 + R3 375 = R5 825 ✓' },
        { difficulty: 'Hard', question: 'ʼn Getal word twee keer van 9 000 afgetrek: eers 2 345, dan 3 210. Wat is die finale resultaat?', answer: '3 445', checkMode: 'auto', correctAnswer: '3445', correctAnswers: ['3445', '3 445'], explanation: '9 000 − 2 345 = 6 655\n6 655 − 3 210 = 3 445 ✓' },
        { difficulty: 'Hard', question: 'ʼn Bakkery verkoop R7 999 se brood oor ʼn week. Dit spandeer eers R2 450 aan meel, dan R1 375 aan lone. Hoeveel wins bly oor?', answer: 'R4 174', checkMode: 'auto', correctAnswer: 'R4174', correctAnswers: ['R4174', 'R4 174', '4174', '4 174'], explanation: 'R7 999 − R2 450 = R5 549\nR5 549 − R1 375 = R4 174 ✓' },
        { difficulty: 'Hard', question: 'Thabo beweer dat as jy twee getalle bymekaar tel en dan een van die oorspronklike getalle weer aftrek, jy altyd die ander oorspronklike getal moet kry. Is hy korrek? Verduidelik met ʼn voorbeeld.', answer: 'Ja, Thabo is korrek. Dit is die inverse verhouding tussen optelling en aftrekking. Byvoorbeeld, 2 345 + 1 323 = 3 668, en 3 668 − 1 323 = 2 345, wat die ander oorspronklike getal is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik waarom dit ʼn nuttige strategie is om te skat voordat jy ʼn presiese antwoord bereken wanneer jy veelvoudige-stap woordprobleme oplos.', answer: 'Skatting gee ʼn growwe idee van hoe die finale antwoord behoort te lyk. As die presiese berekende antwoord baie anders is as die skatting, dui dit waarskynlik op ʼn fout in die werk, so skatting help om foute op te spoor voordat ʼn antwoord finaal gemaak word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê leen is net nodig wanneer geldbedrae afgetrek word, nie gewone getalle nie. Is sy korrek? Verduidelik jou redenasie.', answer: 'Nee, Lerato is verkeerd. Leen is nodig wanneer ʼn syfer in die boonste getal kleiner is as die syfer daaronder in dieselfde kolom, ongeag of die getalle geld of gewone heelgetalle voorstel — die kolomaftrekkingsmetode werk dieselfde in beide gevalle.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê 4 000 − 3 999 = 1 omdat "die getalle so naby aan mekaar is". Verduidelik of hierdie redenasie korrek is, en wys die berekening om jou antwoord te ondersteun.', answer: 'Die leerder se finale antwoord van 1 is korrek, maar die gegewe redenasie ("omdat die getalle naby aan mekaar is") is nie ʼn betroubare metode nie — dit werk toevallig hier. Die korrekte manier is om direk te bereken: 4 000 − 3 999 = 1, bevestig deur kolomaftrekking met leen deur elke kolom.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder tel 3 245 + 2 431 per ongeluk op as 3 245 + 2 341 en kry ʼn ander antwoord. Verduidelik watter fout die leerder gemaak het en vind die verskil tussen die korrekte antwoord en die leerder se verkeerde antwoord.', answer: 'Die leerder het die tiene- en ene-syfers van 2 431 verwissel, wat dit in 2 341 verander het (ʼn transponeringsfout). Korrek: 3 245 + 2 431 = 5 676. Verkeerd: 3 245 + 2 341 = 5 586. Die verskil is 5 676 − 5 586 = 90.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het veelvoudige-stap en gekombineerde optellings- en aftrekkingsprobleme bemeester.' },
        { minScore: 19, message: 'Goeie werk! Kyk na enige gemiste vrae en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor veelvoudige stappe weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  topicPractice: [

    // ── Afdeling 1: Wat is Optelling? ────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken en wys jou werk in kolomme:\n\n3 124 + 2 453',
      // "5 577" → strip spaces → "5577"
      correctAnswer: '5577',
      explanation:
        'Werk in kolomme — geen oordra nodig nie:\n\n' +
        '• Ene:      4 + 3 = 7\n' +
        '• Tiene:    2 + 5 = 7\n' +
        '• Honderde: 1 + 4 = 5\n' +
        '• Duisende: 3 + 2 = 5\n\n' +
        'Antwoord: 5 577',
      answer: '5 577',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken en wys jou oordra:\n\n2 867 + 1 445',
      // "4 312" → strip spaces → "4312"
      correctAnswer: '4312',
      explanation:
        'Werk in kolomme met oordra:\n\n' +
        '• Ene:      7 + 5 = 12 → skryf 2, dra 1 oor\n' +
        '• Tiene:    6 + 4 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n' +
        '• Honderde: 8 + 4 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n' +
        '• Duisende: 2 + 1 + 1 (oorgedra) = 4\n\n' +
        'Antwoord: 4 312',
      answer: '4 312',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Skool het 1 876 blikkies in week een versamel en 2 547 blikkies in week twee.\n\n' +
        'Hoeveel blikkies het hulle altesaam versamel? Wys al jou werk.',
      // "4 423" → strip spaces → "4423"
      correctAnswer: '4423',
      explanation:
        'Die woord "altesaam" vertel ons om op te tel: 1 876 + 2 547\n\n' +
        'Werk in kolomme met oordra:\n\n' +
        '• Ene:      6 + 7 = 13 → skryf 3, dra 1 oor\n' +
        '• Tiene:    7 + 4 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n' +
        '• Honderde: 8 + 5 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n' +
        '• Duisende: 1 + 2 + 1 (oorgedra) = 4\n\n' +
        'Die skool het 4 423 blikkies altesaam versamel.',
      answer: '4 423',
    },

    // ── Afdeling 2: Wat is Aftrekking? ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken en wys jou werk in kolomme:\n\n5 678 − 3 245',
      // "2 433" → strip spaces → "2433"
      correctAnswer: '2433',
      explanation:
        'Werk in kolomme — geen leen nodig nie:\n\n' +
        '• Ene:      8 − 5 = 3\n' +
        '• Tiene:    7 − 4 = 3\n' +
        '• Honderde: 6 − 2 = 4\n' +
        '• Duisende: 5 − 3 = 2\n\n' +
        'Antwoord: 2 433',
      answer: '2 433',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken en wys jou leen:\n\n7 302 − 4 568',
      // "2 734" → strip spaces → "2734"
      correctAnswer: '2734',
      explanation:
        'Die tiene-syfer is 0, dus moet die leen daardeur beweeg:\n\n' +
        '• Ene: 2 − 8. Tiene is 0 — leen van honderde (3 → 2). ' +
        'Tiene word 10, leen dan van tiene (10 → 9). Ene word 12.\n' +
        '  12 − 8 = 4\n' +
        '• Tiene:    9 − 6 = 3\n' +
        '• Honderde: 2 − 5. Leen van duisende (7 → 6). Honderde word 12.\n' +
        '  12 − 5 = 7\n' +
        '• Duisende: 6 − 4 = 2\n\n' +
        'Antwoord: 2 734',
      answer: '2 734',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Fabriek het 6 050 skoene op Maandag gemaak. Teen Woensdag is 2 387 skoene verkoop.\n\n' +
        'Hoeveel skoene is oor? Wys al jou werk, insluitend leen waar nodig.',
      // "3 663" → strip spaces → "3663"
      correctAnswer: '3663',
      explanation:
        'Die woord "oor" vertel ons om af te trek: 6 050 − 2 387\n\n' +
        '• Ene: 0 − 7. Leen van tiene (5 → 4). Ene word 10.\n' +
        '  10 − 7 = 3\n' +
        '• Tiene: 4 − 8. Honderde-syfer is 0 — leen van duisende (6 → 5). ' +
        'Honderde word 10, leen dan van honderde (10 → 9). Tiene word 14.\n' +
        '  14 − 8 = 6\n' +
        '• Honderde: 9 − 3 = 6\n' +
        '• Duisende: 5 − 2 = 3\n\n' +
        '3 663 skoene is oor.',
      answer: '3 663',
    },

    // ── AFDELING 3 — Skat Voordat Jy Bereken ─────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skat die antwoord op 3 456 + 2 234 deur eers elke getal na die naaste honderd af te rond.\n\n' +
        'Skryf slegs die geskatte antwoord (geen spasies of kommas nie).',
      // 3 456 → 3 500, 2 234 → 2 200; 3 500 + 2 200 = 5 700
      correctAnswer: '5700',
      explanation:
        'Rond elke getal af na die naaste honderd:\n' +
        '• 3 456 → 3 500 (56 is nader aan 100 as aan 0)\n' +
        '• 2 234 → 2 200 (34 is nader aan 0 as aan 100)\n\n' +
        'Skatting: 3 500 + 2 200 = 5 700',
      answer: '5 700',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Kyk na hierdie aftrekking: 4 872 − 1 439\n\n' +
        'Deel A: Skat die antwoord deur elke getal na die naaste honderd af te rond. Skryf slegs die getal.\n' +
        'Deel B: Werk nou die presiese antwoord uit. Skryf slegs die getal.',
      answer: 'Deel A: 3 500 | Deel B: 3 433',
      parts: [
        {
          label: 'Deel A — Skatting',
          // 4 872 → 4 900, 1 439 → 1 400; 4 900 − 1 400 = 3 500
          correctAnswer: '3500',
          explanation:
            'Rond af na die naaste honderd:\n' +
            '• 4 872 → 4 900\n' +
            '• 1 439 → 1 400\n' +
            'Skatting: 4 900 − 1 400 = 3 500',
        },
        {
          label: 'Deel B — Presiese antwoord',
          // 4 872 − 1 439 = 3 433
          correctAnswer: '3433',
          explanation:
            'Kolomaftrekking:\n' +
            '• Ene: 2 − 9. Leen van tiene (7 → 6). Ene word 12.\n' +
            '  12 − 9 = 3\n' +
            '• Tiene: 6 − 3 = 3\n' +
            '• Honderde: 8 − 4 = 4\n' +
            '• Duisende: 4 − 1 = 3\n\n' +
            'Presiese antwoord: 3 433',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lebo het 2 345 + 3 812 geskat deur af te rond na die naaste honderd en het 6 500 gekry.\n\n' +
        'Is Lebo korrek? Wys hoe jy hierdie berekening korrek sou skat en verduidelik waar Lebo fout gegaan het.',
      explanation:
        'Korrekte skatting:\n' +
        '• 2 345 → 2 300 (afgerond na naaste honderd)\n' +
        '• 3 812 → 3 800 (afgerond na naaste honderd)\n' +
        '• Skatting: 2 300 + 3 800 = 6 100\n\n' +
        'Lebo is NIE korrek nie. Die korrekte skatting is 6 100, nie 6 500 nie.\n\n' +
        'Lebo het waarskynlik 2 345 opgerond na 2 400 (afgerond na naaste 500 of ʼn ander reël gebruik) ' +
        'of 3 812 opgerond na 3 900 in plaas van afgerond na 3 800.',
      answer: '6 100 (nie 6 500 nie) — Lebo het ʼn fout gemaak deur een of albei getalle af te rond.',
    },

    // ── AFDELING 4 — Inverse Bewerkings ──────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Inverse bewerkings laat ons toe om ons antwoorde na te gaan.\n\n' +
        'Deel A: Bereken 2 345 + 1 432. Skryf slegs die getal.\n' +
        'Deel B: Gebruik aftrekking om jou antwoord na te gaan. Skryf die getal wat jy terugkry nadat jy 1 432 afgetrek het.',
      answer: 'Deel A: 3 777 | Deel B: 2 345',
      parts: [
        {
          label: 'Deel A — Optelling',
          // 2 345 + 1 432 = 3 777
          correctAnswer: '3777',
          explanation:
            'Kolomoptelling:\n' +
            '• Ene: 5 + 2 = 7\n' +
            '• Tiene: 4 + 3 = 7\n' +
            '• Honderde: 3 + 4 = 7\n' +
            '• Duisende: 2 + 1 = 3\n\n' +
            'Antwoord: 3 777',
        },
        {
          label: 'Deel B — Inverse nagaan',
          // 3 777 − 1 432 = 2 345 (terug na oorspronklike)
          correctAnswer: '2345',
          explanation:
            'Die inverse van optelling is aftrekking:\n' +
            '3 777 − 1 432 = 2 345\n\n' +
            'Ons kom terug by 2 345, wat bevestig dat ons optelling korrek was.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Deel A: Bereken 5 678 − 2 345. Skryf slegs die getal.\n' +
        'Deel B: Gebruik optelling as die inverse bewerking om jou antwoord na te gaan. Skryf die resultaat van 2 345 by jou Deel A-antwoord op te tel.',
      answer: 'Deel A: 3 333 | Deel B: 5 678',
      parts: [
        {
          label: 'Deel A — Aftrekking',
          // 5 678 − 2 345 = 3 333
          correctAnswer: '3333',
          explanation:
            'Kolomaftrekking:\n' +
            '• Ene: 8 − 5 = 3\n' +
            '• Tiene: 7 − 4 = 3\n' +
            '• Honderde: 6 − 3 = 3\n' +
            '• Duisende: 5 − 2 = 3\n\n' +
            'Antwoord: 3 333',
        },
        {
          label: 'Deel B — Inverse nagaan',
          // 3 333 + 2 345 = 5 678 (terug na oorspronklike)
          correctAnswer: '5678',
          explanation:
            'Die inverse van aftrekking is optelling:\n' +
            '3 333 + 2 345 = 5 678\n\n' +
            'Ons kom terug by 5 678, wat bevestig dat ons aftrekking korrek was.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Getal is van 4 231 afgetrek en die antwoord was 2 456.\n\n' +
        'Gebruik die inverse bewerking (optelling) om die ontbrekende getal te vind. Skryf slegs die ontbrekende getal.',
      // 4 231 − ? = 2 456 → ? = 4 231 − 2 456 = 1 775
      // Nagaan: 2 456 + 1 775 = 4 231 ✓
      correctAnswer: '1775',
      explanation:
        'Ons weet: 4 231 − ontbrekend = 2 456\n\n' +
        'Die inverse bewerking is optelling:\n' +
        'ontbrekend = 4 231 − 2 456\n\n' +
        'Kolomaftrekking:\n' +
        '• Ene: 1 − 6. Leen van tiene (3 → 2). Ene word 11.\n' +
        '  11 − 6 = 5\n' +
        '• Tiene: 2 − 5. Leen van honderde (2 → 1). Tiene word 12.\n' +
        '  12 − 5 = 7\n' +
        '• Honderde: 1 − 4. Leen van duisende (4 → 3). Honderde word 11.\n' +
        '  11 − 4 = 7\n' +
        '• Duisende: 3 − 2 = 1\n\n' +
        'Ontbrekende getal = 1 775\n' +
        'Nagaan: 2 456 + 1 775 = 4 231 ✓',
      answer: '1 775',
    },

    // ── AFDELING 5 — Hoofrekene ───────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Bereken in jou kop: 4 500 + 300\n\n' +
        'Skryf slegs die antwoord (geen spasies of kommas nie).',
      // 4 500 + 300 = 4 800
      correctAnswer: '4800',
      explanation:
        '4 500 + 300:\n' +
        '• Dink in honderde: 5 honderde + 3 honderde = 8 honderde\n' +
        '• Die duisende bly dieselfde: 4 000\n' +
        '• 4 000 + 800 = 4 800',
      answer: '4 800',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken elkeen in jou kop. Skryf slegs die getal vir elke deel (geen spasies of kommas nie).\n\n' +
        'a) 3 700 + 600\n' +
        'b) 8 400 − 500\n' +
        'c) 2 300 + 1 400',
      answer: 'a) 4 300  b) 7 900  c) 3 700',
      parts: [
        {
          label: 'a) 3 700 + 600',
          // 3 700 + 600 = 4 300
          correctAnswer: '4300',
          explanation:
            '3 700 + 600:\n' +
            '• Dink in honderde: 7 honderde + 6 honderde = 13 honderde\n' +
            '• 13 honderde = 1 300\n' +
            '• 3 000 + 1 300 = 4 300',
        },
        {
          label: 'b) 8 400 − 500',
          // 8 400 − 500 = 7 900
          correctAnswer: '7900',
          explanation:
            '8 400 − 500:\n' +
            '• Dink in honderde: 84 honderde − 5 honderde = 79 honderde\n' +
            '• 79 honderde = 7 900',
        },
        {
          label: 'c) 2 300 + 1 400',
          // 2 300 + 1 400 = 3 700
          correctAnswer: '3700',
          explanation:
            '2 300 + 1 400:\n' +
            '• Duisende: 2 + 1 = 3\n' +
            '• Honderde: 3 + 4 = 7\n' +
            '• Antwoord: 3 700',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Sonder om alles neer te skryf, bereken in jou kop: 5 600 + 800\n\n' +
        'a) Wat is die antwoord?\n' +
        'b) Verduidelik hoe jy dit in jou kop uitgewerk het.',
      explanation:
        'a) Antwoord: 6 400\n\n' +
        'b) Strategie:\n' +
        '• 5 600 = 5 000 + 600\n' +
        '• Tel die honderde by: 600 + 800 = 1 400\n' +
        '  (6 honderde + 8 honderde = 14 honderde)\n' +
        '• Tel die duisende-deel weer by: 5 000 + 1 400 = 6 400',
      answer:
        'a) 6 400\n' +
        'b) 6 honderde + 8 honderde = 14 honderde = 1 400, dan 5 000 + 1 400 = 6 400',
    },

    // ── AFDELING 6 — Geldwoordprobleme ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Sipho het R2 350 en verdien R1 400 deur takies te doen.\n\n' +
        'Hoeveel het hy altesaam?\n' +
        'Skryf slegs die getal, sonder die R-simbool (geen spasies of kommas nie).',
      // 2 350 + 1 400 = 3 750
      correctAnswer: '3750',
      explanation:
        'R2 350 + R1 400:\n' +
        '• Ene: 0 + 0 = 0\n' +
        '• Tiene: 5 + 0 = 5\n' +
        '• Honderde: 3 + 4 = 7\n' +
        '• Duisende: 2 + 1 = 3\n\n' +
        'Sipho het R3 750 altesaam.',
      answer: 'R3 750',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'ʼn Televisie kos R4 999. Mama het R2 875.\n\n' +
        'Hoeveel meer geld het sy nodig om die televisie te koop? Wys al jou werk.',
      explanation:
        'R4 999 − R2 875:\n' +
        '• Ene: 9 − 5 = 4\n' +
        '• Tiene: 9 − 7 = 2\n' +
        '• Honderde: 9 − 8 = 1\n' +
        '• Duisende: 4 − 2 = 2\n\n' +
        'Mama het nog R2 124 nodig.',
      answer: 'R2 124',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lerato het R5 000. Sy koop skoolskoene vir R1 349 en ʼn skoolsak vir R875.\n\n' +
        'Hoeveel geld het sy oor? Wys al jou werk stap vir stap.',
      explanation:
        'Stap 1 — Tel die koste van skoene en sak bymekaar:\n' +
        '1 349 + 875\n' +
        '• Ene: 9 + 5 = 14, skryf 4 dra 1 oor\n' +
        '• Tiene: 4 + 7 + 1 = 12, skryf 2 dra 1 oor\n' +
        '• Honderde: 3 + 8 + 1 = 12, skryf 2 dra 1 oor\n' +
        '• Duisende: 1 + 0 + 1 = 2\n' +
        'Totale koste = R2 224\n\n' +
        'Stap 2 — Trek af van Lerato se geld:\n' +
        '5 000 − 2 224\n' +
        '• Ene: 0 − 4: leen kaskadeer van duisende → 10 − 4 = 6\n' +
        '• Tiene: 9 − 2 = 7 (na leen)\n' +
        '• Honderde: 9 − 2 = 7 (na leen)\n' +
        '• Duisende: 4 − 2 = 2 (na leen)\n\n' +
        'Lerato het R2 776 oor.',
      answer: 'R2 776',
    },

  ],
}
