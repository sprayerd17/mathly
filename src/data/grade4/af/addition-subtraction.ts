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

        `<p style="margin-bottom:0">As die inverse toets jou <strong>oorspronklike begingetal</strong> teruggee, is jou antwoord korrek. As dit nie so is nie, is daar iewers ʼn fout — gaan terug en vind dit.</p>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 6 ─────────────────────────────────────────
        {
          question: 'Bereken 2 456 + 1 323 = 3 779. Gaan na met die inverse bewerking.',
          answer: 'Nagaan: 3 779 − 1 323 = 2 456 ✓ Die antwoord is korrek.',
          steps: [
            'Ons het bereken: <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> + <span style="color:#dc2626;font-weight:700">1</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">2</span><span style="color:#2563eb;font-weight:700">3</span> = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">7</span><span style="color:#2563eb;font-weight:700">9</span>.',

            'Ons het <strong>optelling</strong> gebruik, dus gebruik ons <strong>aftrekking</strong> om na te gaan. Neem die antwoord en trek een van die getalle wat ons opgetel het af: <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">7</span><span style="color:#2563eb;font-weight:700">9</span> − <span style="color:#dc2626;font-weight:700">1</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">2</span><span style="color:#2563eb;font-weight:700">3</span> = ?',

            'Trek af: 3 779 − 1 323 = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span>.',

            'Ons kry <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> terug — ons oorspronklike begingetal. Die antwoord <strong>3 779 is korrek</strong>. ✓',
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

            'Ons kry <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> terug — ons oorspronklike begingetal. Die antwoord <strong>2 510 is korrek</strong>. ✓',
          ],
        },
      ],
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
      openQuestions: [],
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — SAAMGESTELDE 20-VRAAG-STEL (Blokke A–F)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — Kolomoptelling en -aftrekking vlotheid (0-3)
        { difficulty: 'Easy', question: 'Bereken: 3 245 + 2 431', checkMode: 'auto', options: ['5 676', '5 667', '5 686', '5 677'], correctIndex: 0, explanation: 'Ene: 5+1=6\nTiene: 4+3=7\nHonderde: 2+4=6\nDuisende: 3+2=5\nAntwoord: 5 676 ✓ (5 667 verwissel die laaste twee syfers, 5 686 en 5 677 kom van ʼn glips in een kolom.)' },
        { difficulty: 'Easy', question: 'Bereken: 1 867 + 1 345 (met oordra)', checkMode: 'auto', options: ['2 102', '3 212', '3 221', '3 222'], correctIndex: 1, explanation: 'Ene: 7+5=12, skryf 2 dra 1 oor\nTiene: 6+4+1=11, skryf 1 dra 1 oor\nHonderde: 8+3+1=12, skryf 2 dra 1 oor\nDuisende: 1+1+1=3\nAntwoord: 3 212 ✓ (2 102 vergeet om in elke kolom oor te dra; 3 221 en 3 222 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken: 5 304 − 1 867 (leen nodig)', checkMode: 'auto', options: ['4 563', '3 473', '3 437', '3 447'], correctIndex: 2, explanation: 'Ene: 4−7, leen → 14−7=7\nTiene: 9−6=3 (na leen)\nHonderde: 2−8, leen → 12−8=4\nDuisende: 4−1=3\nAntwoord: 3 437 ✓ (4 563 trek die kleiner syfer van die groter een af in elke kolom in plaas van te leen; 3 473 en 3 447 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken: 8 000 − 3 456 (kaskade-leen deur twee nulle)', checkMode: 'auto', options: ['5 456', '4 454', '4 554', '4 544'], correctIndex: 3, explanation: 'Ene: 0−6, kaskade-leen deur tiene en honderde → 10−6=4\nTiene: 9−5=4\nHonderde: 9−4=5\nDuisende: 7−3=4\nAntwoord: 4 544 ✓ (5 456 ignoreer die leen en trek die kleiner syfer van die groter een af; 4 454 en 4 554 kom van ʼn syfer-glips.)' },

        // Blok B — Skatting en nagaan (4-7)
        { difficulty: 'Easy', question: 'Skat 3 456 + 2 234 deur elke getal na die naaste honderd af te rond.', checkMode: 'auto', options: ['5 700', '5 690', '5 600', '5 800'], correctIndex: 0, explanation: '3 456 → 3 500\n2 234 → 2 200\nSkatting: 3 500 + 2 200 = 5 700 ✓ (5 690 is die presiese antwoord, nie die skatting nie; 5 600 rond 3 456 verkeerdelik af na 3 400; 5 800 rond 2 234 verkeerdelik op na 2 300.)' },
        { difficulty: 'Medium', question: 'Skat 4 872 − 1 439 deur elke getal na die naaste honderd af te rond.', checkMode: 'auto', options: ['3 433', '3 500', '3 400', '3 430'], correctIndex: 1, explanation: '4 872 → 4 900\n1 439 → 1 400\nSkatting: 4 900 − 1 400 = 3 500 ✓ (3 433 is die presiese antwoord, nie die skatting nie; 3 400 rond 4 872 verkeerdelik af na 4 800; 3 430 rond albei getalle na die naaste tien in plaas van die naaste honderd.)' },
        { difficulty: 'Medium', question: 'Bereken 4 850 − 2 340 = 2 510. Gebruik optelling om hierdie antwoord na te gaan. Watter getal behoort jy terug te kry?', checkMode: 'auto', options: ['4 805', '2 340', '4 850', '4 860'], correctIndex: 2, explanation: 'Nagaan: 2 510 + 2 340 = 4 850 — dit stem ooreen met die oorspronklike getal, dus is die aftrekking korrek ✓ (4 805 en 4 860 kom van ʼn glips terwyl weer bygetel word; 2 340 is net een van die getalle wat in die nagaan gebruik is, nie die som nie.)' },
        { difficulty: 'Hard', question: 'Sipho het 5 304 − 1 867 = 3 537 bereken. Watter stelling evalueer sy antwoord korrek deur die inverse bewerking te gebruik?', checkMode: 'auto', options: ['Sipho is korrek — die nagaan bevestig 3 537 + 1 867 = 5 304.', 'Sipho is verkeerd — die korrekte antwoord is 3 473.', 'Sipho is verkeerd — die korrekte antwoord is 3 447.', 'Sipho is verkeerd — nagaan gee 3 537 + 1 867 = 5 404, nie 5 304 nie, dus is die korrekte antwoord 3 437.'], correctIndex: 3, explanation: 'Nagaan: 3 537 + 1 867 = 5 404, nie 5 304 nie, dus is Sipho verkeerd. Die korrekte antwoord is 3 437 (aangesien 3 437 + 1 867 = 5 304). (3 473 en 3 447 is aanneemlike glipse, nie wat die nagaan werklik wys nie.)' },

        // Blok C — Hoofrekene-strategieë (8-10)
        { difficulty: 'Medium', question: 'Bereken in jou kop: 3 450 + 300', checkMode: 'auto', options: ['3 750', '3 705', '3 760', '3 453'], correctIndex: 0, explanation: 'Om 300 by te tel verander net die honderde-syfer: 4+3=7\nAntwoord: 3 750 ✓ (3 705 verwissel die laaste twee syfers, 3 760 skuif ʼn syfer, 3 453 kom van 300 wat as 3 gelees en by die ene getel is.)' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 6 120 − 60 (dit het ʼn hergroepering nodig — die tiene-syfer is te klein)', checkMode: 'auto', options: ['6 140', '6 060', '6 006', '6 070'], correctIndex: 1, explanation: '2 tiene − 6 tiene het leen van honderde nodig: 12 tiene − 6 tiene = 6 tiene.\nAntwoord: 6 060 ✓ (6 140 trek die kleiner syfer van die groter een af in plaas van te hergroepeer; 6 006 en 6 070 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 5 240 + 800. Watter antwoord is korrek, en waarom verander meer as een syfer hierdie keer?', checkMode: 'auto', options: ['5 340 — net die honderde-syfer verander, van 2 na 0, want 2+8=10.', '6 140 — 800 is per ongeluk by die tiene-syfer getel.', '6 040 — want 2 honderde + 8 honderde = 10 honderde, wat te veel is vir die honderde-kolom, dus rol die ekstra honderd oor na die duisende-syfer ook.', '5 248 — die 8 van 800 is by die ene-syfer getel in plaas van die honderde.'], correctIndex: 2, explanation: '2 honderde + 8 honderde = 10 honderde = 1 000, dus word die honderde-syfer 0 en die duisende-syfer neem met 1 toe: 5 240 + 800 = 6 040 ✓' },

        // Blok D — Geldwoordprobleme (11-14)
        { difficulty: 'Easy', question: 'Thabo het R2 450 spaargeld. Hy verdien R1 375 deur takies te doen. Hoeveel het hy altesaam?', checkMode: 'auto', options: ['R3 725', 'R3 852', 'R3 835', 'R3 825'], correctIndex: 3, explanation: '"Altesaam" beteken optel: R2 450 + R1 375 = R3 825 ✓ (R3 725 vergeet om in ʼn kolom oor te dra; R3 852 en R3 835 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop R3 800 se goedere op Saterdag en R2 150 op Sondag. Dit betaal R2 680 in uitgawes vir die naweek. Hoeveel wins is oor?', checkMode: 'auto', options: ['R3 270', 'R5 950', 'R8 630', 'R1 120'], correctIndex: 0, explanation: 'Totale verkope: R3 800 + R2 150 = R5 950\nWins: R5 950 − R2 680 = R3 270 ✓ (R5 950 vergeet om die uitgawes af te trek; R8 630 tel die uitgawes by in plaas daarvan; R1 120 gebruik net Saterdag se verkope.)' },
        { difficulty: 'Medium', question: 'Sipho het R2 999 verlede jaar en R1 876 hierdie jaar gespaar. Amahle het R3 250 verlede jaar en R1 500 hierdie jaar gespaar. Wie het meer totale spaargeld, en met hoeveel?', checkMode: 'auto', options: ['Amahle het meer, met R125', 'Sipho het meer, met R125', 'Sipho het meer, met R152', 'Sipho het meer, met R135'], correctIndex: 1, explanation: 'Sipho: R2 999 + R1 876 = R4 875\nAmahle: R3 250 + R1 500 = R4 750\nVerskil: R4 875 − R4 750 = R125. Sipho het R125 meer as Amahle ✓ (die eerste opsie het die rigting omgekeer; R152 en R135 kom van ʼn syfer-glips in die finale aftrekking.)' },
        { difficulty: 'Medium', question: 'Lerato koop skoolskoene vir R1 349 en ʼn skoolsak vir R875 uit ʼn R5 000-geskenk van haar ouma. Hoeveel geld het sy oor?', checkMode: 'auto', options: ['R3 651', 'R2 786', 'R2 776', 'R2 767'], correctIndex: 2, explanation: 'Totale koste: R1 349 + R875 = R2 224\nOor: R5 000 − R2 224 = R2 776 ✓ (R3 651 trek net die skoene af en vergeet die sak; R2 786 en R2 767 kom van ʼn syfer-glips in die finale aftrekking.)' },

        // Blok E — Veelvoudige-stap en gekombineerde woordprobleme (15-17)
        { difficulty: 'Hard', question: 'ʼn Winkel het 6 050 brode. Dit verkoop 2 387, en skenk dan nog 1 200 aan ʼn liefdadigheidsorganisasie. Hoeveel brode is oor?', checkMode: 'auto', options: ['3 663', '4 863', '2 473', '2 463'], correctIndex: 3, explanation: '6 050 − 2 387 = 3 663\n3 663 − 1 200 = 2 463 ✓ (3 663 hou op ná die eerste stap; 4 863 tel die skenking by in plaas van dit af te trek; 2 473 kom van ʼn syfer-glips in die finale aftrekking.)' },
        { difficulty: 'Hard', question: 'ʼn Stadion het 2 345 ondersteuners. 1 876 meer kom aan, dan verlaat 987 vroeg. Hoeveel ondersteuners bly oor?', checkMode: 'auto', options: ['3 234', '4 221', '5 208', '3 244'], correctIndex: 0, explanation: '2 345 + 1 876 = 4 221\n4 221 − 987 = 3 234 ✓ (4 221 hou op ná die eerste stap; 5 208 tel 987 by in plaas van dit af te trek; 3 244 kom van ʼn syfer-glips.)' },
        { difficulty: 'Hard', question: 'ʼn Maatskappy het 9 999 items in voorraad gehad. Dit het 4 567 items verkoop, en toe ʼn aflewering van nog 1 233 ontvang. Hoeveel items is nou in voorraad?', checkMode: 'auto', options: ['5 432', '6 665', '4 199', '6 675'], correctIndex: 1, explanation: '9 999 − 4 567 = 5 432\n5 432 + 1 233 = 6 665 ✓ (5 432 hou op ná die eerste stap; 4 199 trek die aflewering af in plaas daarvan om dit by te tel; 6 675 kom van ʼn syfer-glips.)' },

        // Blok F — Redenasie, regverdiging en foutopsporing (18-19)
        { difficulty: 'Hard', question: 'ʼn Leerder tel 4 104 + 3 290 per ongeluk op as 4 104 + 3 209 en kry ʼn ander antwoord. Watter stelling verduidelik die fout korrek en vind die verskil tussen die korrekte en verkeerde antwoorde?', checkMode: 'auto', options: ['Die leerder het vergeet om ʼn syfer oor te dra; korrek = 7 394, verkeerd = 7 313, verskil = 71.', 'Die leerder het die syfers van 4 104 verwissel in plaas van 3 290; korrek = 7 394, verkeerd = 7 313, verskil = 91.', 'Die leerder het die tiene- en ene-syfers van 3 290 verwissel, wat dit in 3 209 verander het (ʼn transponeringsfout). Korrek: 4 104 + 3 290 = 7 394. Verkeerd: 4 104 + 3 209 = 7 313. Die verskil is 7 394 − 7 313 = 81.', 'Die leerder se verkeerde antwoord 7 313 is eintlik die korrekte een, en 7 394 is verkeerd.'], correctIndex: 2, explanation: 'Die leerder het die tiene- en ene-syfers van 3 290 verwissel na 3 209. 4 104 + 3 290 = 7 394 en 4 104 + 3 209 = 7 313, dus is die verskil 81.' },
        { difficulty: 'Hard', question: 'Lerato sê leen is net nodig wanneer geldbedrae afgetrek word, nie gewone getalle nie. Watter stelling is korrek?', checkMode: 'auto', options: ['Lerato is korrek — geldberekenings het altyd leen nodig.', 'Lerato is korrek, maar net vir getalle met vier syfers of meer.', 'Lerato is verkeerd — gewone getalle het nooit leen nodig nie, net geld.', 'Lerato is verkeerd — leen is nodig wanneer ʼn syfer in die boonste getal kleiner is as die syfer daaronder in dieselfde kolom, ongeag of die getalle geld of gewone heelgetalle voorstel.'], correctIndex: 3, explanation: 'Leen hang net af van die vergelyking van syfers in elke kolom — dit werk presies dieselfde ongeag of die getalle geld of gewone heelgetalle voorstel, dus is Lerato verkeerd.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend — jy het die volle omvang van kolommetodes tot veelvoudige-stap-redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk — selfversekerd oor die meeste vaardighede, kyk na gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging — gaan die uitgewerkte voorbeelde oor oordra/leen en woordprobleme weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — SAAMGESTELDE 20-VRAAG-STEL (Blokke A–F)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A — Kolomoptelling en -aftrekking vlotheid (0-3)
        { difficulty: 'Easy', question: 'Bereken: 4 123 + 3 456', checkMode: 'auto', options: ['7 579', '7 597', '7 589', '7 578'], correctIndex: 0, explanation: 'Ene: 3+6=9\nTiene: 2+5=7\nHonderde: 1+4=5\nDuisende: 4+3=7\nAntwoord: 7 579 ✓ (7 597 verwissel die laaste twee syfers, 7 589 en 7 578 kom van ʼn glips in een kolom.)' },
        { difficulty: 'Easy', question: 'Bereken: 3 456 + 2 678 (met oordra)', checkMode: 'auto', options: ['5 024', '6 134', '6 143', '6 144'], correctIndex: 1, explanation: 'Ene: 6+8=14, skryf 4 dra 1 oor\nTiene: 5+7+1=13, skryf 3 dra 1 oor\nHonderde: 4+6+1=11, skryf 1 dra 1 oor\nDuisende: 3+2+1=6\nAntwoord: 6 134 ✓ (5 024 vergeet om in elke kolom oor te dra; 6 143 en 6 144 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken: 7 302 − 4 568 (leen nodig)', checkMode: 'auto', options: ['3 266', '2 743', '2 734', '2 744'], correctIndex: 2, explanation: 'Ene: 2−8, leen deur tiene (0) → 12−8=4\nTiene: 9−6=3\nHonderde: 2−5, leen → 12−5=7\nDuisende: 6−4=2\nAntwoord: 2 734 ✓ (3 266 trek die kleiner syfer van die groter een af in elke kolom in plaas van te leen; 2 743 en 2 744 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken: 7 005 − 2 348 (kaskade-leen deur twee nulle)', checkMode: 'auto', options: ['5 343', '4 675', '4 667', '4 657'], correctIndex: 3, explanation: 'Ene: 5−8, kaskade-leen deur tiene en honderde → 15−8=7\nTiene: 9−4=5\nHonderde: 9−3=6\nDuisende: 6−2=4\nAntwoord: 4 657 ✓ (5 343 ignoreer die leen en trek die kleiner syfer van die groter een af; 4 675 en 4 667 kom van ʼn syfer-glips.)' },

        // Blok B — Skatting en nagaan (4-7)
        { difficulty: 'Easy', question: 'Skat 5 678 + 2 345 deur elke getal na die naaste honderd af te rond.', checkMode: 'auto', options: ['8 000', '8 023', '7 900', '8 100'], correctIndex: 0, explanation: '5 678 → 5 700\n2 345 → 2 300\nSkatting: 5 700 + 2 300 = 8 000 ✓ (8 023 is die presiese antwoord, nie die skatting nie; 7 900 rond 5 678 verkeerdelik af na 5 600; 8 100 rond 2 345 verkeerdelik op na 2 400.)' },
        { difficulty: 'Medium', question: 'Skat 9 856 − 3 421 deur elke getal na die naaste honderd af te rond.', checkMode: 'auto', options: ['6 435', '6 500', '6 400', '6 440'], correctIndex: 1, explanation: '9 856 → 9 900\n3 421 → 3 400\nSkatting: 9 900 − 3 400 = 6 500 ✓ (6 435 is die presiese antwoord, nie die skatting nie; 6 400 rond 9 856 verkeerdelik af na 9 800; 6 440 rond albei getalle na die naaste tien in plaas van die naaste honderd.)' },
        { difficulty: 'Medium', question: 'Bereken 2 345 + 1 323 = 3 668. Gebruik aftrekking om hierdie antwoord na te gaan. Watter getal behoort jy terug te kry?', checkMode: 'auto', options: ['2 354', '1 323', '2 345', '2 355'], correctIndex: 2, explanation: 'Nagaan: 3 668 − 1 323 = 2 345 — dit stem ooreen met die oorspronklike getal, dus is die optelling korrek ✓ (2 354 en 2 355 kom van ʼn glips terwyl weer afgetrek word; 1 323 is net een van die getalle wat in die nagaan gebruik is, nie die resultaat nie.)' },
        { difficulty: 'Hard', question: 'ʼn Leerder het 6 412 + 1 543 = 7 945 bereken. Watter stelling evalueer die antwoord korrek deur die inverse bewerking te gebruik?', checkMode: 'auto', options: ['Die leerder is korrek — die nagaan bevestig 7 945 − 1 543 = 6 412.', 'Die leerder is verkeerd — die korrekte antwoord is 7 595.', 'Die leerder is verkeerd — die korrekte antwoord is 7 965.', 'Die leerder is verkeerd — nagaan gee 7 945 − 1 543 = 6 402, nie 6 412 nie, dus is die korrekte antwoord 7 955.'], correctIndex: 3, explanation: 'Nagaan: 7 945 − 1 543 = 6 402, nie 6 412 nie, dus is die leerder verkeerd. Die korrekte antwoord is 7 955 (aangesien 7 955 − 1 543 = 6 412). (7 595 en 7 965 is aanneemlike glipse, nie wat die nagaan werklik wys nie.)' },

        // Blok C — Hoofrekene-strategieë (8-10)
        { difficulty: 'Medium', question: 'Bereken in jou kop: 8 760 − 300', checkMode: 'auto', options: ['8 460', '8 406', '8 470', '8 730'], correctIndex: 0, explanation: 'Net die honderde-syfer verander: 7−3=4\nAntwoord: 8 460 ✓ (8 406 verwissel die laaste twee syfers, 8 470 skuif ʼn syfer, 8 730 kom van 300 wat as 30 gelees is.)' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 3 600 − 800 (dit het ʼn hergroepering nodig — die honderde-syfer is te klein)', checkMode: 'auto', options: ['3 200', '2 800', '2 080', '2 810'], correctIndex: 1, explanation: '6 honderde − 8 honderde het leen van duisende nodig: 3 000 − 800 = 2 800.\nAntwoord: 2 800 ✓ (3 200 trek die kleiner syfer van die groter een af in plaas van te hergroepeer; 2 080 en 2 810 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 3 480 + 90. Watter antwoord is korrek, en waarom verander meer as een syfer hierdie keer?', checkMode: 'auto', options: ['3 470 — net die tiene-syfer verander, van 8 na 7, en die oordra na honderde word ignoreer.', '4 470 — die oorgedraagde 1 is by die duisende-syfer getel in plaas van die honderde.', '3 570 — want 8 tiene + 9 tiene = 17 tiene, wat te veel is vir die tiene-kolom, dus rol die ekstra tien oor na die honderde-syfer ook.', '3 580 — ʼn glips in die tiene-kolom.'], correctIndex: 2, explanation: '8 tiene + 9 tiene = 17 tiene = 170, dus word die tiene-syfer 7 en die honderde-syfer neem met 1 toe: 3 480 + 90 = 3 570 ✓' },

        // Blok D — Geldwoordprobleme (11-14)
        { difficulty: 'Easy', question: 'ʼn Winkel neem R1 899 van ʼn markstalletjie en R2 760 van gewone kliënte in een dag in. Wat is die totale inname vir die dag?', checkMode: 'auto', options: ['R3 559', 'R4 695', 'R4 669', 'R4 659'], correctIndex: 3, explanation: '"Totaal" beteken optel: R1 899 + R2 760 = R4 659 ✓ (R3 559 vergeet om in ʼn kolom oor te dra; R4 695 en R4 669 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'ʼn Winkel het R7 000 se voorraadwaarde gehad. Dit het R3 899 se goedere verkoop, en toe nuwe voorraad ter waarde van R1 250 ontvang. Watter voorraadwaarde het dit nou?', checkMode: 'auto', options: ['R4 351', 'R3 101', 'R1 851', 'R6 149'], correctIndex: 0, explanation: 'Na verkoop: R7 000 − R3 899 = R3 101\nNa nuwe voorraad: R3 101 + R1 250 = R4 351 ✓ (R3 101 hou op ná die eerste stap; R1 851 trek die nuwe voorraad af in plaas daarvan om dit by te tel; R6 149 begin met ʼn verkeerde eerste stap.)' },
        { difficulty: 'Medium', question: 'Thabo het R4 200 gespaar. Sy suster Amahle het R3 475 gespaar. Wie het meer gespaar, en met hoeveel?', checkMode: 'auto', options: ['Amahle het meer, met R725', 'Thabo het meer, met R725', 'Thabo het meer, met R1 275', 'Thabo het meer, met R752'], correctIndex: 1, explanation: 'R4 200 − R3 475 = R725. Thabo het R725 meer as Amahle gespaar ✓ (die eerste opsie het die rigting omgekeer; R1 275 ignoreer die leen wanneer afgetrek word; R752 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'By ʼn markstalletjie koop Lerato ʼn serp vir R349 en ʼn hoed vir R275, en betaal met ʼn R1 000-noot. Hoeveel kleingeld kry sy?', checkMode: 'auto', options: ['R624', 'R486', 'R376', 'R386'], correctIndex: 2, explanation: 'Totale koste: R349 + R275 = R624\nKleingeld: R1 000 − R624 = R376 ✓ (R624 is die totale koste, nie die kleingeld nie; R486 vergeet om oor te dra wanneer die koste bygetel word; R386 kom van ʼn syfer-glips in die finale aftrekking.)' },

        // Blok E — Veelvoudige-stap en gekombineerde woordprobleme (15-17)
        { difficulty: 'Hard', question: 'ʼn Boer het 5 000 appels. Hy verkoop 1 234, dan nog 2 345 meer. Hoeveel appels het hy oor?', checkMode: 'auto', options: ['3 766', '6 111', '1 431', '1 421'], correctIndex: 3, explanation: '5 000 − 1 234 = 3 766\n3 766 − 2 345 = 1 421 ✓ (3 766 hou op ná die eerste stap; 6 111 tel die tweede hoeveelheid by in plaas van dit af te trek; 1 431 kom van ʼn syfer-glips.)' },
        { difficulty: 'Hard', question: 'ʼn Skool het 3 456 leerders. 2 544 meer leerders sluit aan, dan gradueer 1 000 en vertrek. Hoeveel leerders is nou by die skool?', checkMode: 'auto', options: ['5 000', '6 000', '7 000', '5 010'], correctIndex: 0, explanation: '3 456 + 2 544 = 6 000\n6 000 − 1 000 = 5 000 ✓ (6 000 hou op ná die eerste stap; 7 000 tel die graduerende leerders by in plaas daarvan om hulle af te trek; 5 010 kom van ʼn syfer-glips.)' },
        { difficulty: 'Hard', question: 'ʼn Busmaatskappy het 5 670 passasiers op Saterdag vervoer en 2 340 minder op Sondag. Hoeveel passasiers het dit op Sondag vervoer, en wat was die totaal vir die naweek?', checkMode: 'auto', options: ['Sondag: 3 303; Naweektotaal: 9 000', 'Sondag: 3 330; Naweektotaal: 9 000', 'Sondag: 3 330; Naweektotaal: 8 900', 'Sondag: 3 340; Naweektotaal: 9 010'], correctIndex: 1, explanation: 'Sondag: 5 670 − 2 340 = 3 330\nNaweektotaal: 5 670 + 3 330 = 9 000 ✓ (die ander opsies kom van ʼn syfer-glips in een van die twee stappe.)' },

        // Blok F — Redenasie, regverdiging en foutopsporing (18-19)
        { difficulty: 'Hard', question: 'ʼn Leerder sê 4 000 − 3 999 = 1 omdat "die getalle so naby aan mekaar is". Watter stelling evalueer hierdie redenasie korrek?', checkMode: 'auto', options: ['Die leerder is verkeerd — die korrekte antwoord is eintlik 11, nie 1 nie.', 'Die leerder is verkeerd — die antwoord behoort 1 001 te wees, want elke leen deur ʼn nul tel 1 000 by.', 'Die finale antwoord van 1 is korrek, maar die redenasie is nie betroubaar nie — dit werk hier net toevallig. Direkte kolomaftrekking met leen deur elke kolom bevestig 4 000 − 3 999 = 1.', 'Die leerder is reg, en "naby aan mekaar" beteken altyd dat die antwoord presies 1 is, ongeag watter getalle gebruik word.'], correctIndex: 2, explanation: 'Kolomaftrekking met leen deur elke kolom bevestig 4 000 − 3 999 = 1, dus is die leerder se antwoord reg — maar "die getalle is naby aan mekaar" is nie ʼn betroubare metode in die algemeen nie, dit het net hier toevallig gewerk.' },
        { difficulty: 'Hard', question: 'Wanneer jy in kolomaftrekking leen, waarom is die "1" wat jy van die kolom links af neem, eintlik 10 werd in die kolom waarheen jy dit leen?', checkMode: 'auto', options: ['Leen is altyd presies 10 werd, ongeag watter kolomme betrokke is, want 10 is ʼn vaste reël.', 'Om 1 van ʼn kolom te leen gee 2 eenhede in die volgende kolom, want dit word in twee gedeel.', 'Om 1 honderd te leen gee 10 eenhede (ene), en spring die tiene-kolom heeltemal oor.', 'Elke plekwaarde-kolom is 10 keer groter as die een regs daarvan, so om 1 van ʼn kolom te leen gee 10 eenhede in die kolom onmiddellik regs daarvan — byvoorbeeld, om 1 honderd te leen gee 10 tiene, want 1 honderd = 10 tiene.'], correctIndex: 3, explanation: 'Plekwaarde is gebaseer op magte van 10, dus is elke kolom 10 keer die waarde van die kolom regs daarvan. Om 1 van ʼn kolom te leen gee dus altyd presies 10 van die volgende kolom — bv. 1 honderd = 10 tiene, 1 tien = 10 ene.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend — jy het die volle omvang van kolommetodes tot veelvoudige-stap-redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk — selfversekerd oor die meeste vaardighede, kyk na gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging — gaan die uitgewerkte voorbeelde oor oordra/leen en woordprobleme weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — SAAMGESTELDE 20-VRAAG-STEL (Blokke A–F)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — Kolomoptelling en -aftrekking vlotheid (0-3)
        { difficulty: 'Easy', question: 'Bereken: 5 678 + 1 231', checkMode: 'auto', options: ['6 909', '6 809', '6 990', '6 919'], correctIndex: 0, explanation: 'Ene: 8+1=9\nTiene: 7+3=10, skryf 0 dra 1 oor\nHonderde: 6+2+1=9\nDuisende: 5+1=6\nAntwoord: 6 909 ✓ (6 809 vergeet die oordra na die honderde; 6 990 en 6 919 kom van ʼn syfer-glips.)' },
        { difficulty: 'Easy', question: 'Bereken: 4 785 + 1 246 (met oordra)', checkMode: 'auto', options: ['5 921', '6 031', '6 013', '6 041'], correctIndex: 1, explanation: 'Ene: 5+6=11, skryf 1 dra 1 oor\nTiene: 8+4+1=13, skryf 3 dra 1 oor\nHonderde: 7+2+1=10, skryf 0 dra 1 oor\nDuisende: 4+1+1=6\nAntwoord: 6 031 ✓ (5 921 vergeet om in elke kolom oor te dra; 6 013 en 6 041 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken: 9 302 − 5 678 (leen nodig)', checkMode: 'auto', options: ['4 376', '3 642', '3 624', '3 634'], correctIndex: 2, explanation: 'Ene: 2−8, leen → 12−8=4\nTiene: 9−7=2 (na leen)\nHonderde: 2−6, leen → 12−6=6\nDuisende: 8−5=3\nAntwoord: 3 624 ✓ (4 376 trek die kleiner syfer van die groter een af in elke kolom in plaas van te leen; 3 642 en 3 634 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken: 6 003 − 2 456 (kaskade-leen deur twee nulle)', checkMode: 'auto', options: ['4 453', '3 574', '3 557', '3 547'], correctIndex: 3, explanation: 'Ene: 3−6, kaskade-leen deur tiene en honderde → 13−6=7\nTiene: 9−5=4\nHonderde: 9−4=5\nDuisende: 5−2=3\nAntwoord: 3 547 ✓ (4 453 ignoreer die leen en trek die kleiner syfer van die groter een af; 3 574 en 3 557 kom van ʼn syfer-glips.)' },

        // Blok B — Skatting en nagaan (4-7)
        { difficulty: 'Easy', question: 'Skat 4 321 + 3 789 deur elke getal na die naaste honderd af te rond.', checkMode: 'auto', options: ['8 100', '8 110', '8 200', '8 000'], correctIndex: 0, explanation: '4 321 → 4 300\n3 789 → 3 800\nSkatting: 4 300 + 3 800 = 8 100 ✓ (8 110 is die presiese antwoord, nie die skatting nie; 8 200 rond 4 321 verkeerdelik op na 4 400; 8 000 rond 3 789 verkeerdelik af na 3 700.)' },
        { difficulty: 'Medium', question: 'Skat 8 500 − 3 271 deur elke getal na die naaste honderd af te rond.', checkMode: 'auto', options: ['5 229', '5 200', '5 300', '5 230'], correctIndex: 1, explanation: '8 500 → 8 500\n3 271 → 3 300\nSkatting: 8 500 − 3 300 = 5 200 ✓ (5 229 is die presiese antwoord, nie die skatting nie; 5 300 rond 3 271 verkeerdelik af na 3 200; 5 230 rond na die naaste tien in plaas van die naaste honderd.)' },
        { difficulty: 'Medium', question: 'Bereken 6 412 + 1 543 = 7 955. Gebruik aftrekking om hierdie antwoord na te gaan. Watter getal behoort jy terug te kry?', checkMode: 'auto', options: ['6 421', '1 543', '6 412', '6 422'], correctIndex: 2, explanation: 'Nagaan: 7 955 − 1 543 = 6 412 — dit stem ooreen met die oorspronklike getal, dus is die optelling korrek ✓ (6 421 en 6 422 kom van ʼn glips terwyl weer afgetrek word; 1 543 is net een van die getalle wat in die nagaan gebruik is, nie die resultaat nie.)' },
        { difficulty: 'Hard', question: 'ʼn Leerder het 9 856 − 3 421 = 6 345 bereken. Watter stelling evalueer die antwoord korrek deur die inverse bewerking te gebruik?', checkMode: 'auto', options: ['Die leerder is korrek — die nagaan bevestig 6 345 + 3 421 = 9 856.', 'Die leerder is verkeerd — die korrekte antwoord is 6 453.', 'Die leerder is verkeerd — die korrekte antwoord is 6 445.', 'Die leerder is verkeerd — nagaan gee 6 345 + 3 421 = 9 766, nie 9 856 nie, dus is die korrekte antwoord 6 435.'], correctIndex: 3, explanation: 'Nagaan: 6 345 + 3 421 = 9 766, nie 9 856 nie, dus is die leerder verkeerd. Die korrekte antwoord is 6 435 (aangesien 6 435 + 3 421 = 9 856). (6 453 en 6 445 is aanneemlike glipse, nie wat die nagaan werklik wys nie.)' },

        // Blok C — Hoofrekene-strategieë (8-10)
        { difficulty: 'Medium', question: 'Bereken in jou kop: 4 230 + 700', checkMode: 'auto', options: ['4 930', '4 903', '4 940', '4 300'], correctIndex: 0, explanation: 'Net die honderde-syfer verander: 2+7=9\nAntwoord: 4 930 ✓ (4 903 verwissel die laaste twee syfers, 4 940 skuif ʼn syfer, 4 300 kom van 700 wat as 70 gelees is.)' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 2 140 + 90 (dit het ʼn hergroepering nodig — die tiene-syfer word te groot)', checkMode: 'auto', options: ['2 130', '2 230', '2 203', '2 240'], correctIndex: 1, explanation: '4 tiene + 9 tiene = 13 tiene, wat te veel is vir die tiene-kolom, dus word 1 honderd hergroepeer: 2 140 + 90 = 2 230 ✓ (2 130 vergeet die hergroepering na honderde; 2 203 en 2 240 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'Bereken in jou kop: 6 900 − 500. Watter antwoord is korrek, en waarom verander net een syfer hierdie keer, anders as party ander hoofrekene-aftrekkingsprobleme?', checkMode: 'auto', options: ['6 040 — die tiene- en honderde-syfers verander albei, want om 500 af te trek raak altyd twee kolomme.', '6 410 — ʼn glips in die honderde-kolom.', '6 400 — want die honderde-syfer (9) is groter as 5, dus is geen hergroepering nodig nie; net die honderde-syfer verander van 9 na 4, en die duisende, tiene en ene bly almal dieselfde.', '6 900 − 500 kan nie in jou kop gedoen word nie en het kolomaftrekking nodig.'], correctIndex: 2, explanation: 'Aangesien 9 (die honderde-syfer) groter is as 5, is geen hergroepering nodig nie: net die honderde-syfer verander van 9 na 4, wat 6 400 gee.' },

        // Blok D — Geldwoordprobleme (11-14)
        { difficulty: 'Easy', question: 'Amahle het R2 650 en kry ʼn verjaardaggeskenk van R1 875. Hoeveel het sy altesaam?', checkMode: 'auto', options: ['R3 425', 'R4 552', 'R4 535', 'R4 525'], correctIndex: 3, explanation: '"Altesaam" beteken optel: R2 650 + R1 875 = R4 525 ✓ (R3 425 vergeet om in ʼn kolom oor te dra; R4 552 en R4 535 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsorganisasie het R4 321 by een fondsinsameling en R2 109 by ʼn tweede fondsinsameling ingesamel, en toe R3 215 aan voorrade spandeer. Hoeveel geld is oor?', checkMode: 'auto', options: ['R3 215', 'R6 430', 'R9 645', 'R3 205'], correctIndex: 0, explanation: 'Totaal ingesamel: R4 321 + R2 109 = R6 430\nOor: R6 430 − R3 215 = R3 215 ✓ (R6 430 hou op ná die eerste stap; R9 645 tel die spandeerde geld by in plaas van dit af te trek; R3 205 begin met ʼn verkeerde eerste stap.)' },
        { difficulty: 'Medium', question: 'Sipho het R2 350 spaargeld. Sy vriend Thabo het R2 999 spaargeld. Wie het minder geld gespaar, en met hoeveel?', checkMode: 'auto', options: ['Thabo het minder, met R649', 'Sipho het minder, met R649', 'Sipho het minder, met R694', 'Sipho het minder, met R659'], correctIndex: 1, explanation: 'R2 999 − R2 350 = R649. Sipho het R649 minder as Thabo ✓ (die eerste opsie het die rigting omgekeer; R694 en R659 kom van ʼn syfer-glips.)' },
        { difficulty: 'Medium', question: 'By die skool se snoepiewinkel koop ʼn leerder ʼn pastei vir R475 en ʼn sap vir R225, en betaal met ʼn R1 000-noot. Hoeveel kleingeld word gegee?', checkMode: 'auto', options: ['R700', 'R310', 'R300', 'R290'], correctIndex: 2, explanation: 'Totale koste: R475 + R225 = R700\nKleingeld: R1 000 − R700 = R300 ✓ (R700 is die totale koste, nie die kleingeld nie; R310 en R290 kom van ʼn glips terwyl die koste bygetel of die kleingeld afgetrek word.)' },

        // Blok E — Veelvoudige-stap en gekombineerde woordprobleme (15-17)
        { difficulty: 'Hard', question: 'ʼn Fabriek het 4 235 items in Januarie geproduseer en nog 1 876 in Februarie. In Maart is 2 345 items verkoop. Hoeveel items bly oor van die Januarie- en Februarie-produksie?', checkMode: 'auto', options: ['6 111', '8 456', '3 776', '3 766'], correctIndex: 3, explanation: '4 235 + 1 876 = 6 111\n6 111 − 2 345 = 3 766 ✓ (6 111 hou op ná die eerste stap; 8 456 tel die verkoopte items by in plaas daarvan om hulle af te trek; 3 776 kom van ʼn syfer-glips.)' },
        { difficulty: 'Hard', question: 'Sipho begin met 2 999 albasters. Hy gee 1 500 weg, wen dan nog 3 400, en verloor dan 1 600 in ʼn speletjie. Hoeveel albasters het hy nou?', checkMode: 'auto', options: ['3 299', '1 499', '4 899', '3 309'], correctIndex: 0, explanation: '2 999 − 1 500 = 1 499\n1 499 + 3 400 = 4 899\n4 899 − 1 600 = 3 299 ✓ (1 499 hou op ná stap 1; 4 899 hou op ná stap 2; 3 309 kom van ʼn syfer-glips in die finale stap.)' },
        { difficulty: 'Hard', question: 'ʼn Stadion het 6 500 kaartjies verkoop voor ʼn wedstryd. Nog 1 850 mense het kaartjies by die hek gekoop, en toe het 640 kaartjiehouers nie opgedaag nie. Hoeveel mense het werklik die wedstryd bygewoon?', checkMode: 'auto', options: ['8 350', '7 710', '8 990', '7 720'], correctIndex: 1, explanation: '6 500 + 1 850 = 8 350 kaartjies in totaal\n8 350 − 640 (wat nie opgedaag het nie) = 7 710 mense het bygewoon ✓ (8 350 hou op ná die eerste stap; 8 990 tel dié wat nie opgedaag het nie by in plaas daarvan om hulle af te trek; 7 720 kom van ʼn syfer-glips.)' },

        // Blok F — Redenasie, regverdiging en foutopsporing (18-19)
        { difficulty: 'Hard', question: 'ʼn Leerder trek 5 304 − 1 867 per ongeluk af as 5 304 − 1 687 en kry ʼn ander antwoord. Watter stelling verduidelik die fout korrek en vind die verskil tussen die korrekte en verkeerde antwoorde?', checkMode: 'auto', options: ['Die leerder het vergeet om te leen; korrek = 3 437, verkeerd = 3 617, verskil = 170.', 'Die leerder het die syfers van 5 304 verwissel in plaas van 1 867; korrek = 3 437, verkeerd = 3 617, verskil = 190.', 'Die leerder het die tiene- en ene-syfers van 1 867 verwissel, wat dit in 1 687 verander het (ʼn transponeringsfout). Korrek: 5 304 − 1 867 = 3 437. Verkeerd: 5 304 − 1 687 = 3 617. Die verskil is 3 617 − 3 437 = 180.', 'Die leerder se verkeerde antwoord 3 617 is eintlik die korrekte een, en 3 437 is verkeerd.'], correctIndex: 2, explanation: 'Die leerder het die tiene- en ene-syfers van 1 867 verwissel na 1 687. 5 304 − 1 867 = 3 437 en 5 304 − 1 687 = 3 617, dus is die verskil 180.' },
        { difficulty: 'Hard', question: 'Thabo beweer dat as jy twee getalle bymekaar tel en dan een van die oorspronklike getalle weer aftrek, jy altyd die ander oorspronklike getal moet kry. Watter stelling is korrek?', checkMode: 'auto', options: ['Nee, dit werk net wanneer albei getalle ewe is.', 'Nee, dit werk net vir getalle kleiner as 1 000.', 'Ja, maar net as jy die groter van die twee oorspronklike getalle aftrek, nie die kleiner een nie.', 'Ja, Thabo is korrek. Dit is die inverse verhouding tussen optelling en aftrekking. Byvoorbeeld, 2 345 + 1 323 = 3 668, en 3 668 − 1 323 = 2 345, wat die ander oorspronklike getal is.'], correctIndex: 3, explanation: 'Optelling en aftrekking is altyd inverse bewerkings, vir enige getalle — om een term van die som af te trek gee altyd die ander term terug.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend — jy het die volle omvang van kolommetodes tot veelvoudige-stap-redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk — selfversekerd oor die meeste vaardighede, kyk na gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging — gaan die uitgewerkte voorbeelde oor oordra/leen en woordprobleme weer deur.' },
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
      options: ['5 577', '5 757', '5 587', '5 576'],
      correctIndex: 0,
      explanation:
        'Werk in kolomme — geen oordra nodig nie:\n\n' +
        '• Ene:      4 + 3 = 7\n' +
        '• Tiene:    2 + 5 = 7\n' +
        '• Honderde: 1 + 4 = 5\n' +
        '• Duisende: 3 + 2 = 5\n\n' +
        'Antwoord: 5 577 ✓ (5 757 verwissel die laaste twee syfers, 5 587 en 5 576 kom van ʼn glips in een kolom.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken en wys jou oordra:\n\n2 867 + 1 445',
      options: ['3 202', '4 312', '4 321', '4 322'],
      correctIndex: 1,
      explanation:
        'Werk in kolomme met oordra:\n\n' +
        '• Ene:      7 + 5 = 12 → skryf 2, dra 1 oor\n' +
        '• Tiene:    6 + 4 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n' +
        '• Honderde: 8 + 4 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n' +
        '• Duisende: 2 + 1 + 1 (oorgedra) = 4\n\n' +
        'Antwoord: 4 312 ✓ (3 202 vergeet om in elke kolom oor te dra; 4 321 en 4 322 kom van ʼn syfer-glips.)',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Skool het 1 876 blikkies in week een versamel en 2 547 blikkies in week twee.\n\n' +
        'Hoeveel blikkies het hulle altesaam versamel?',
      options: ['3 313', '4 432', '4 423', '4 433'],
      correctIndex: 2,
      explanation:
        'Die woord "altesaam" vertel ons om op te tel: 1 876 + 2 547\n\n' +
        'Werk in kolomme met oordra:\n\n' +
        '• Ene:      6 + 7 = 13 → skryf 3, dra 1 oor\n' +
        '• Tiene:    7 + 4 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n' +
        '• Honderde: 8 + 5 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n' +
        '• Duisende: 1 + 2 + 1 (oorgedra) = 4\n\n' +
        'Die skool het 4 423 blikkies altesaam versamel ✓ (3 313 vergeet om in elke kolom oor te dra; 4 432 en 4 433 kom van ʼn syfer-glips.)',
    },

    // ── Afdeling 2: Wat is Aftrekking? ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken en wys jou werk in kolomme:\n\n5 678 − 3 245',
      options: ['2 343', '2 443', '2 432', '2 433'],
      correctIndex: 3,
      explanation:
        'Werk in kolomme — geen leen nodig nie:\n\n' +
        '• Ene:      8 − 5 = 3\n' +
        '• Tiene:    7 − 4 = 3\n' +
        '• Honderde: 6 − 2 = 4\n' +
        '• Duisende: 5 − 3 = 2\n\n' +
        'Antwoord: 2 433 ✓ (2 343 verwissel die laaste twee syfers, 2 443 en 2 432 kom van ʼn glips in een kolom.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken en wys jou leen:\n\n7 302 − 4 568',
      options: ['3 266', '2 743', '2 734', '2 744'],
      correctIndex: 2,
      explanation:
        'Die tiene-syfer is 0, dus moet die leen daardeur beweeg:\n\n' +
        '• Ene: 2 − 8. Tiene is 0 — leen van honderde (3 → 2). ' +
        'Tiene word 10, leen dan van tiene (10 → 9). Ene word 12.\n' +
        '  12 − 8 = 4\n' +
        '• Tiene:    9 − 6 = 3\n' +
        '• Honderde: 2 − 5. Leen van duisende (7 → 6). Honderde word 12.\n' +
        '  12 − 5 = 7\n' +
        '• Duisende: 6 − 4 = 2\n\n' +
        'Antwoord: 2 734 ✓ (3 266 trek die kleiner syfer van die groter een af in plaas van te leen; 2 743 en 2 744 kom van ʼn syfer-glips.)',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Fabriek het 6 050 skoene op Maandag gemaak. Teen Woensdag is 2 387 skoene verkoop.\n\n' +
        'Hoeveel skoene is oor?',
      options: ['4 337', '3 663', '3 636', '3 673'],
      correctIndex: 1,
      explanation:
        'Die woord "oor" vertel ons om af te trek: 6 050 − 2 387\n\n' +
        '• Ene: 0 − 7. Leen van tiene (5 → 4). Ene word 10.\n' +
        '  10 − 7 = 3\n' +
        '• Tiene: 4 − 8. Honderde-syfer is 0 — leen van duisende (6 → 5). ' +
        'Honderde word 10, leen dan van honderde (10 → 9). Tiene word 14.\n' +
        '  14 − 8 = 6\n' +
        '• Honderde: 9 − 3 = 6\n' +
        '• Duisende: 5 − 2 = 3\n\n' +
        '3 663 skoene is oor ✓ (4 337 trek die kleiner syfer van die groter een af in plaas van te leen; 3 636 en 3 673 kom van ʼn syfer-glips.)',
    },

    // ── AFDELING 3 — Skat Voordat Jy Bereken ─────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skat die antwoord op 3 456 + 2 234 deur eers elke getal na die naaste honderd af te rond.',
      options: ['5 690', '5 600', '5 700', '5 800'],
      correctIndex: 2,
      explanation:
        'Rond elke getal af na die naaste honderd:\n' +
        '• 3 456 → 3 500 (56 is nader aan 100 as aan 0)\n' +
        '• 2 234 → 2 200 (34 is nader aan 0 as aan 100)\n\n' +
        'Skatting: 3 500 + 2 200 = 5 700 ✓ (5 690 is die presiese antwoord, nie die skatting nie; 5 600 rond 3 456 verkeerdelik af na 3 400; 5 800 rond 2 234 verkeerdelik op na 2 300.)',
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
      checkMode: 'auto',
      question:
        'Lebo het 2 345 + 3 812 geskat deur af te rond na die naaste honderd en het 6 500 gekry.\n\n' +
        'Watter stelling evalueer Lebo se skatting korrek?',
      options: [
        'Lebo is korrek — 2 345 + 3 812 rond af na 6 500.',
        'Lebo is verkeerd — die korrekte skatting is 6 200, want 2 345 rond af na 2 400.',
        'Lebo is verkeerd — die korrekte skatting is 6 000, want 3 812 rond af na 3 700.',
        'Lebo is verkeerd — die korrekte skatting is 6 100 (2 345 → 2 300 en 3 812 → 3 800). Lebo het waarskynlik een van die getalle in die verkeerde rigting afgerond.',
      ],
      correctIndex: 3,
      explanation:
        'Korrekte skatting:\n' +
        '• 2 345 → 2 300 (afgerond na naaste honderd)\n' +
        '• 3 812 → 3 800 (afgerond na naaste honderd)\n' +
        '• Skatting: 2 300 + 3 800 = 6 100\n\n' +
        'Lebo is NIE korrek nie. Die korrekte skatting is 6 100, nie 6 500 nie — Lebo het waarskynlik een van die getalle in die verkeerde rigting afgerond.',
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
        'Gebruik die inverse bewerking (optelling) om die ontbrekende getal te vind.',
      options: ['1 775', '2 225', '1 757', '1 785'],
      correctIndex: 0,
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
        'Ontbrekende getal = 1 775. Nagaan: 2 456 + 1 775 = 4 231 ✓ (2 225 trek die kleiner syfer van die groter een af in plaas van te leen; 1 757 en 1 785 kom van ʼn syfer-glips.)',
    },

    // ── AFDELING 5 — Hoofrekene ───────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Bereken in jou kop: 4 500 + 300',
      options: ['4 080', '4 800', '4 810', '4 530'],
      correctIndex: 1,
      explanation:
        '4 500 + 300:\n' +
        '• Dink in honderde: 5 honderde + 3 honderde = 8 honderde\n' +
        '• Die duisende bly dieselfde: 4 000\n' +
        '• 4 000 + 800 = 4 800 ✓ (4 080 verwissel die laaste twee syfers, 4 810 skuif ʼn syfer, 4 530 kom van 300 wat as 30 gelees is.)',
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
      checkMode: 'auto',
      question:
        'Sonder om alles neer te skryf, bereken in jou kop: 5 600 + 800\n\n' +
        'Watter antwoord en strategie is korrek?',
      options: [
        '6 300 — net die honderde-syfer verander, en die oordra na die duisende word vergeet.',
        '7 400 — 800 is by die duisende-syfer getel in plaas van die honderde.',
        '6 400 — want 6 honderde + 8 honderde = 14 honderde = 1 400, dan 5 000 + 1 400 = 6 400.',
        '6 480 — die 8 van 800 is by die tiene-syfer getel in plaas van die honderde.',
      ],
      correctIndex: 2,
      explanation:
        '5 600 = 5 000 + 600. Tel die honderde by: 600 + 800 = 1 400 (6 honderde + 8 honderde = 14 honderde). Tel die duisende-deel weer by: 5 000 + 1 400 = 6 400.',
    },

    // ── AFDELING 6 — Geldwoordprobleme ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Sipho het R2 350 en verdien R1 400 deur takies te doen.\n\n' +
        'Hoeveel het hy altesaam?',
      options: ['R3 705', 'R3 760', 'R3 850', 'R3 750'],
      correctIndex: 3,
      explanation:
        'R2 350 + R1 400:\n' +
        '• Ene: 0 + 0 = 0\n' +
        '• Tiene: 5 + 0 = 5\n' +
        '• Honderde: 3 + 4 = 7\n' +
        '• Duisende: 2 + 1 = 3\n\n' +
        'Sipho het R3 750 altesaam ✓ (R3 705 verwissel die laaste twee syfers, R3 760 en R3 850 kom van ʼn syfer-glips.)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Televisie kos R4 999. Mama het R2 875.\n\n' +
        'Hoeveel meer geld het sy nodig om die televisie te koop?',
      options: ['R2 124', 'R2 142', 'R2 134', 'R2 114'],
      correctIndex: 0,
      explanation:
        'R4 999 − R2 875:\n' +
        '• Ene: 9 − 5 = 4\n' +
        '• Tiene: 9 − 7 = 2\n' +
        '• Honderde: 9 − 8 = 1\n' +
        '• Duisende: 4 − 2 = 2\n\n' +
        'Mama het nog R2 124 nodig ✓ (R2 142 en R2 134 kom van ʼn syfer-glips, R2 114 van ʼn glips in die honderde-kolom.)',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Lerato het R5 000. Sy koop skoolskoene vir R1 349 en ʼn skoolsak vir R875.\n\n' +
        'Hoeveel geld het sy oor?',
      options: ['R2 224', 'R2 776', 'R2 767', 'R2 786'],
      correctIndex: 1,
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
        'Lerato het R2 776 oor ✓ (R2 224 is die totale koste, nie wat oor is nie; R2 767 en R2 786 kom van ʼn syfer-glips in die finale aftrekking.)',
    },

  ],
}
