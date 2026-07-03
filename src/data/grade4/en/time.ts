import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Time',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — READING AND TELLING TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-telling-time',
      title: 'Reading and Telling Time',
      icon: '🕐',
      explanation: `
<p style="margin-bottom:14px;">We use clocks to measure and tell the time. There are two main types of clock — <strong>analogue</strong> and <strong>digital</strong>. Both show the same time in different ways. The time is made up of <strong style="color:#1e40af;">hours</strong>, <strong style="color:#dc2626;">minutes</strong>, and <strong style="color:#16a34a;">seconds</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Analogue clocks</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">An analogue clock has a round face with numbers 1 to 12 and two hands that move around the face.</p>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Short hand<br/><span style="font-weight:400;font-size:12px;">(hour hand)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">The <strong>short hand</strong> points to the <strong style="color:#1e40af;">hour</strong>. It moves slowly — it takes 12 hours to go all the way around the clock face.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Long hand<br/><span style="font-weight:400;font-size:12px;">(minute hand)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">The <strong>long hand</strong> points to the <strong style="color:#dc2626;">minutes</strong>. Each number on the clock face represents <strong>5 minutes</strong>. It takes 60 minutes (1 hour) to go all the way around.</span>
    </div>

  </div>
  <div style="margin-top:12px;background:#dbeafe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:6px;">Minute counting on an analogue clock</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">12 → 0 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">1 → 5 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">2 → 10 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">3 → 15 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">4 → 20 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">5 → 25 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">6 → 30 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">7 → 35 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">8 → 40 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">9 → 45 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">10 → 50 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">11 → 55 min</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Digital clocks</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:10px;">A digital clock shows the time as numbers using a <strong>colon (:)</strong> to separate hours and minutes.</p>
  <div style="display:flex;align-items:center;gap:16px;margin-bottom:10px;">
    <span style="background:#0f1f3d;color:#fff;border-radius:8px;padding:8px 20px;font-size:22px;font-weight:700;letter-spacing:2px;"><span style="color:#60a5fa;">3</span><span style="color:#fff;">:</span><span style="color:#f87171;">45</span></span>
    <span style="font-size:15px;color:#1e3a8a;"><strong style="color:#1e40af;">3 hours</strong> and <strong style="color:#dc2626;">45 minutes</strong></span>
  </div>
  <div style="font-size:14px;color:#1e3a8a;">The number before the colon is the <strong style="color:#1e40af;">hour</strong>. The number after the colon is the <strong style="color:#dc2626;">minutes</strong>. Minutes always show two digits — so 5 minutes is written as <strong style="color:#dc2626;">:05</strong>.</div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">a.m. and p.m.</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">The day has 24 hours but a clock only shows 12. We use <strong>a.m.</strong> and <strong>p.m.</strong> to show which half of the day we mean.</p>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:60px;text-align:center;">a.m.</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Midnight to midday</strong> — the morning hours (12:00 midnight up to 11:59 in the morning).</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:60px;text-align:center;">p.m.</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Midday to midnight</strong> — the afternoon and evening hours (12:00 midday up to 11:59 at night).</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Time vocabulary 📖</span>
  <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px;font-size:14px;color:#78350f;">
    <div><strong>O'clock</strong> — the minute hand is on 12 (e.g. 3:00 = three o'clock)</div>
    <div><strong>Quarter past</strong> — 15 minutes past the hour (e.g. 3:15)</div>
    <div><strong>Half past</strong> — 30 minutes past the hour (e.g. 3:30)</div>
    <div><strong>Quarter to</strong> — 15 minutes before the next hour (e.g. 3:45 = quarter to four)</div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'The short hand points to 4 and the long hand points to 6. What time is it?',
          steps: [
            'The <strong style="color:#1e40af;">short hand</strong> at <strong>4</strong> means it is <strong style="color:#1e40af;">4 hours</strong>.',
            'The <strong style="color:#dc2626;">long hand</strong> at <strong>6</strong> means <strong>6 × 5</strong> = <strong style="color:#dc2626;">30 minutes</strong>.',
          ],
          answer: '4:30, or half past four.',
        },
        {
          question: 'Write 7:15 a.m. in words.',
          steps: [
            'The <strong style="color:#1e40af;">hour</strong> is <strong>7</strong> and the <strong style="color:#dc2626;">minutes</strong> are <strong>15</strong>.',
            '15 minutes past the hour is called <strong>quarter past</strong>.',
            'a.m. means it is in the <strong>morning</strong>.',
          ],
          answer: 'Quarter past seven in the morning.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Two clocks side by side — an analogue clock showing 4:30 with the hour and minute hands labelled, and a digital clock showing 4:30',
      videoPlaceholder:
        'Short video showing how to read analogue and digital clocks and explain the difference between am and pm',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — UNITS OF TIME AND CONVERSION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-time-conversion',
      title: 'Units of Time and Conversion',
      icon: '⏱️',
      explanation: `
<p style="margin-bottom:14px;">Time is measured in different units — from tiny <strong style="color:#16a34a;">seconds</strong> to long stretches like years. Knowing how to convert between units helps you solve problems involving time.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Conversion facts</div>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">60 seconds</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#1e40af;">1 minute</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">60 minutes</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#dc2626;">1 hour</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">24 hours</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#ea580c;">1 day</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">7 days</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 week</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">28–31 days</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 month</strong> (depends on the month)</span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">12 months</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 year</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">365 days</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 year</strong> (366 days in a leap year)</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Conversion rules</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Bigger → Smaller</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Converting from a <strong>bigger unit</strong> to a <strong>smaller unit</strong> — <strong style="color:#16a34a;">multiply</strong>. The number gets bigger. (e.g. hours → minutes: × 60)</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Smaller → Bigger</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Converting from a <strong>smaller unit</strong> to a <strong>bigger unit</strong> — <strong style="color:#dc2626;">divide</strong>. The number gets smaller. (e.g. minutes → hours: ÷ 60)</span>
    </div>

  </div>
</div>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick 💡</div>
  <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>smaller unit</strong> → <strong style="color:#16a34a;">multiply</strong> → the number gets <strong>bigger</strong>.<br/>Going to a <strong>bigger unit</strong> → <strong style="color:#dc2626;">divide</strong> → the number gets <strong>smaller</strong>.</div>
</div>
`,
      workedExamples: [
        {
          question: 'Convert 3 hours to minutes.',
          steps: [
            'Hours → minutes: going from a <strong>bigger unit</strong> to a <strong>smaller unit</strong> — <strong style="color:#16a34a;">multiply by 60</strong>.',
            '<strong style="color:#dc2626;">3</strong> × <strong style="color:#16a34a;">60</strong> = <strong style="color:#1e40af;">180</strong>.',
          ],
          answer: '3 hours = 180 minutes.',
        },
        {
          question: 'Convert 150 minutes to hours and minutes.',
          steps: [
            'Minutes → hours: going from a <strong>smaller unit</strong> to a <strong>bigger unit</strong> — <strong style="color:#dc2626;">divide by 60</strong>.',
            '<strong style="color:#1e40af;">150</strong> ÷ <strong style="color:#dc2626;">60</strong> = <strong>2</strong> remainder <strong>30</strong>.',
            '<strong>2</strong> full hours with <strong>30</strong> minutes remaining.',
          ],
          answer: '150 minutes = 2 hours 30 minutes.',
        },
        {
          question: 'How many days are in 4 weeks?',
          steps: [
            'Weeks → days: going from a <strong>bigger unit</strong> to a <strong>smaller unit</strong> — <strong style="color:#16a34a;">multiply by 7</strong>.',
            '<strong style="color:#ea580c;">4</strong> × <strong style="color:#16a34a;">7</strong> = <strong style="color:#ea580c;">28</strong>.',
          ],
          answer: '4 weeks = 28 days.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A time conversion ladder showing seconds minutes hours days weeks months and years with multiplication and division arrows between each unit',
      videoPlaceholder:
        'Short video showing how to convert between units of time using multiplication and division',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING DURATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-duration',
      title: 'Calculating Duration',
      icon: '⏳',
      explanation: `
<p style="margin-bottom:14px;"><strong>Duration</strong> means <strong>how long something takes</strong> from start to finish. To find the duration, you count on from the <strong style="color:#1e40af;">start time</strong> to the <strong style="color:#dc2626;">end time</strong> and add up the total time passed.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Method for calculating duration</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Write down the <strong style="color:#1e40af;">start time</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Write down the <strong style="color:#dc2626;">end time</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Count on</strong> from the <strong style="color:#1e40af;">start time</strong> to the <strong style="color:#dc2626;">end time</strong> — first count full hours, then the remaining minutes.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Add up</strong> the hours and minutes counted to find the <strong style="color:#16a34a;">duration</strong>.</span>
    </div>

  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Tip: cross midday carefully 🕛</div>
  <div style="color:#14532d;font-size:15px;">When the <strong style="color:#1e40af;">start time</strong> is a.m. and the <strong style="color:#dc2626;">end time</strong> is p.m., break the calculation at <strong>12:00 midday</strong> — count to midday first, then count from midday to the end time.</div>
</div>
`,
      workedExamples: [
        {
          question: 'A movie starts at 2:15 p.m. and ends at 4:45 p.m. How long is the movie?',
          steps: [
            '<strong style="color:#1e40af;">Start time:</strong> 2:15 p.m. &nbsp; <strong style="color:#dc2626;">End time:</strong> 4:45 p.m.',
            'From <strong style="color:#1e40af;">2:15</strong> to <strong>4:15</strong> = <strong>2 hours</strong>.',
            'From <strong>4:15</strong> to <strong style="color:#dc2626;">4:45</strong> = <strong>30 minutes</strong>.',
            'Total: <strong>2 hours</strong> + <strong>30 minutes</strong> = <strong style="color:#16a34a;">2 hours 30 minutes</strong>.',
          ],
          answer: 'The movie is 2 hours 30 minutes long.',
        },
        {
          question: 'School starts at 7:30 a.m. and ends at 2:00 p.m. How long is the school day?',
          steps: [
            '<strong style="color:#1e40af;">Start time:</strong> 7:30 a.m. &nbsp; <strong style="color:#dc2626;">End time:</strong> 2:00 p.m.',
            'Cross midday: from <strong style="color:#1e40af;">7:30</strong> to <strong>12:00</strong> = <strong>4 hours 30 minutes</strong>.',
            'From <strong>12:00</strong> to <strong style="color:#dc2626;">2:00</strong> p.m. = <strong>2 hours</strong>.',
            'Total: <strong>4 hours 30 minutes</strong> + <strong>2 hours</strong> = <strong style="color:#16a34a;">6 hours 30 minutes</strong>.',
          ],
          answer: 'The school day is 6 hours 30 minutes long.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Short video showing how to calculate duration between two times and use a calendar to count days between dates',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALENDARS AND TIME WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calendars-time-word-problems',
      title: 'Calendars and Time Word Problems',
      icon: '📅',
      explanation: `
<p style="margin-bottom:14px;">A <strong>calendar</strong> shows the days, weeks and months of the year. We use it to find dates, count days between events and solve time problems. Always look for <strong style="color:#ea580c;">key words</strong> in a problem — they tell you what to calculate.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Days in each month</div>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">31 days</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">January</strong>, <strong style="color:#ea580c;">March</strong>, <strong style="color:#ea580c;">May</strong>, <strong style="color:#ea580c;">July</strong>, <strong style="color:#ea580c;">August</strong>, <strong style="color:#ea580c;">October</strong>, <strong style="color:#ea580c;">December</strong></span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">30 days</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">April</strong>, <strong style="color:#ea580c;">June</strong>, <strong style="color:#ea580c;">September</strong>, <strong style="color:#ea580c;">November</strong></span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">28/29 days</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">February</strong> — 28 days in a normal year, 29 days in a leap year.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick — knuckle method 🤜</div>
  <div style="color:#78350f;font-size:15px;">Make a fist and count your knuckles and the dips between them from left to right. <strong>Knuckles = 31 days. Dips = 30 days (or 28/29 for February).</strong> When you reach the last knuckle (July), start again from the first knuckle (August).</div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key words in time word problems</div>
  <div style="display:flex;flex-direction:column;gap:6px;font-size:15px;color:#1e3a8a;">
    <div><strong style="color:#ea580c;">How long</strong>, <strong style="color:#ea580c;">duration</strong>, <strong style="color:#ea580c;">how many hours/minutes</strong> — calculate duration between two times.</div>
    <div><strong style="color:#ea580c;">How many days until</strong>, <strong style="color:#ea580c;">days between</strong> — count days on a calendar.</div>
    <div><strong style="color:#ea580c;">What time does it finish</strong> — add the duration to the start time.</div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'How many days are there from 5 March to 20 March?',
          steps: [
            'Both dates are in <strong style="color:#ea580c;">March</strong> — count days within the same month.',
            'Subtract: <strong>20 − 5</strong> = <strong style="color:#16a34a;">15 days</strong>.',
          ],
          answer: '15 days.',
        },
        {
          question: "Thabo's birthday is on 15 June. Today is 28 May. How many days until his birthday?",
          steps: [
            'Days remaining in <strong style="color:#ea580c;">May</strong>: <strong>31 − 28</strong> = <strong>3 days</strong>.',
            'Days in <strong style="color:#ea580c;">June</strong> up to the 15th: <strong>15 days</strong>.',
            'Total: <strong>3</strong> + <strong>15</strong> = <strong style="color:#16a34a;">18 days</strong>.',
          ],
          answer: "18 days until Thabo's birthday.",
        },
        {
          question: 'A bus leaves at 9:45 a.m. and arrives at 1:15 p.m. How long is the journey?',
          steps: [
            '<strong style="color:#1e40af;">Start:</strong> 9:45 a.m. &nbsp; <strong style="color:#dc2626;">End:</strong> 1:15 p.m.',
            'From <strong style="color:#1e40af;">9:45</strong> to <strong>1:45</strong> p.m. would be exactly <strong>4 hours</strong>.',
            'But the end time is <strong style="color:#dc2626;">1:15</strong>, which is <strong>30 minutes earlier</strong> than 1:45.',
            '4 hours − 30 minutes = <strong style="color:#16a34a;">3 hours 30 minutes</strong>.',
          ],
          answer: 'The journey takes 3 hours 30 minutes.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Short video showing how to calculate duration between two times and use a calendar to count days between dates',
    },
  ],
  topicPractice: [

    // ── SECTION 1 — Reading and Telling Time ──────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Write the following times in digital format.',
      checkMode: 'auto',
      answer: 'a) 3:30 pm   b) 7:15 am   c) 4:40 pm',
      parts: [
        {
          label: 'a) Half past three in the afternoon',
          correctAnswer: '3:30pm',
          correctAnswers: ['3:30pm', '3:30 pm', '330pm'],
          explanation: 'Half past three = 30 minutes past 3. Afternoon = p.m. Digital: 3:30 pm.',
        },
        {
          label: 'b) Quarter past seven in the morning',
          correctAnswer: '7:15am',
          correctAnswers: ['7:15am', '7:15 am', '715am'],
          explanation: 'Quarter past seven = 15 minutes past 7. Morning = a.m. Digital: 7:15 am.',
        },
        {
          label: 'c) Twenty minutes to five in the evening',
          correctAnswer: '4:40pm',
          correctAnswers: ['4:40pm', '4:40 pm', '440pm'],
          explanation: '20 minutes to five means 60 − 20 = 40 minutes past four. Evening = p.m. Digital: 4:40 pm.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Answer the following questions about analogue clocks.',
      checkMode: 'auto',
      answer: 'a) 8:15   b) 11:00   c) 3',
      parts: [
        {
          label: 'a) The short hand points between 8 and 9 and the long hand points to 3. What time is it?',
          correctAnswer: '8:15',
          correctAnswers: ['8:15', '815', '8:15am', '8:15 am'],
          explanation: 'Short hand between 8 and 9 = 8 hours. Long hand at 3 = 3 × 5 = 15 minutes. Time: 8:15.',
        },
        {
          label: 'b) The short hand points to 11 and the long hand points to 12. What time is it?',
          correctAnswer: '11:00',
          correctAnswers: ['11:00', '1100', '11oclock', '11 oclock', '11:00am'],
          explanation: 'Short hand at 11 = 11 hours. Long hand at 12 = 0 minutes (o\'clock). Time: 11:00.',
        },
        {
          label: 'c) What number does the long hand point to at quarter past any hour?',
          correctAnswer: '3',
          correctAnswers: ['3', 'three'],
          explanation: 'Quarter past = 15 minutes. 15 ÷ 5 = 3, so the long hand points to the number 3.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Lerato leaves home at 7:45 am and arrives at school at 8:10 am.',
      checkMode: 'auto',
      answer: 'a) Before midday   b) Before midday',
      parts: [
        {
          label: 'a) Is 7:45 am before or after midday?',
          correctAnswer: 'before midday',
          correctAnswers: ['before midday', 'beforemidday', 'before', 'am', 'a.m.'],
          explanation: 'a.m. means the time is between midnight and midday — so 7:45 am is before midday.',
        },
        {
          label: 'b) Is 8:10 am before or after midday?',
          correctAnswer: 'before midday',
          correctAnswers: ['before midday', 'beforemidday', 'before', 'am', 'a.m.'],
          explanation: 'a.m. means the time is between midnight and midday — so 8:10 am is also before midday.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Lerato leaves home at 7:45 am and arrives at school at 8:10 am.',
      checkMode: 'self',
      answer: 'Quarter to eight in the morning (7:45 am) and ten past eight in the morning (8:10 am).',
      parts: [
        {
          label: 'c) Write both times in words.',
          correctAnswer: '',
          explanation: '7:45 am = quarter to eight in the morning. 8:10 am = ten past eight in the morning.',
        },
      ],
    },

    // ── SECTION 2 — Units of Time and Conversion ──────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Convert the following.',
      checkMode: 'auto',
      answer: 'a) 120 minutes   b) 180 seconds',
      parts: [
        {
          label: 'a) 2 hours to minutes',
          correctAnswer: '120minutes',
          correctAnswers: ['120minutes', '120', '120 minutes', '120mins'],
          explanation: 'Hours → minutes: multiply by 60. 2 × 60 = 120 minutes.',
        },
        {
          label: 'b) 3 minutes to seconds',
          correctAnswer: '180seconds',
          correctAnswers: ['180seconds', '180', '180 seconds', '180secs'],
          explanation: 'Minutes → seconds: multiply by 60. 3 × 60 = 180 seconds.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Convert the following.',
      checkMode: 'auto',
      answer: 'a) 3 hours   b) 14 days   c) 36 months   d) 2 minutes',
      parts: [
        {
          label: 'a) 180 minutes to hours',
          correctAnswer: '3hours',
          correctAnswers: ['3hours', '3', '3 hours', '3hrs'],
          explanation: 'Minutes → hours: divide by 60. 180 ÷ 60 = 3 hours.',
        },
        {
          label: 'b) 2 weeks to days',
          correctAnswer: '14days',
          correctAnswers: ['14days', '14', '14 days'],
          explanation: 'Weeks → days: multiply by 7. 2 × 7 = 14 days.',
        },
        {
          label: 'c) 3 years to months',
          correctAnswer: '36months',
          correctAnswers: ['36months', '36', '36 months'],
          explanation: 'Years → months: multiply by 12. 3 × 12 = 36 months.',
        },
        {
          label: 'd) 120 seconds to minutes',
          correctAnswer: '2minutes',
          correctAnswers: ['2minutes', '2', '2 minutes', '2mins'],
          explanation: 'Seconds → minutes: divide by 60. 120 ÷ 60 = 2 minutes.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Sipho says 2 hours 45 minutes is the same as 145 minutes. Is he correct? Show your working.',
      checkMode: 'self',
      answer: 'No, Sipho is incorrect. 2 hours = 2 × 60 = 120 minutes. 120 + 45 = 165 minutes. 2 hours 45 minutes = 165 minutes, not 145 minutes.',
    },

    // ── SECTION 3 — Calculating Duration ─────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A TV show starts at 6:00 pm and ends at 7:30 pm. How long is the show?',
      checkMode: 'auto',
      answer: '1 hour 30 minutes',
      correctAnswer: '1hour30minutes',
      correctAnswers: ['1hour30minutes', '1 hour 30 minutes', '1hr30min', '90minutes', '90mins', '90'],
      explanation: 'From 6:00 to 7:00 = 1 hour. From 7:00 to 7:30 = 30 minutes. Total: 1 hour 30 minutes.',
    },

    {
      difficulty: 'Medium',
      question: 'Calculate the duration for each of the following.',
      checkMode: 'auto',
      answer: 'a) 2 hours 30 minutes   b) 6 hours 30 minutes   c) 2 hours 30 minutes',
      parts: [
        {
          label: 'a) Start: 9:15 am   End: 11:45 am',
          correctAnswer: '2hours30minutes',
          correctAnswers: ['2hours30minutes', '2 hours 30 minutes', '2hr30min', '150minutes', '150'],
          explanation: 'From 9:15 to 11:15 = 2 hours. From 11:15 to 11:45 = 30 minutes. Total: 2 hours 30 minutes.',
        },
        {
          label: 'b) Start: 7:30 am   End: 2:00 pm',
          correctAnswer: '6hours30minutes',
          correctAnswers: ['6hours30minutes', '6 hours 30 minutes', '6hr30min', '390minutes', '390'],
          explanation: 'From 7:30 to 12:00 = 4 hours 30 minutes. From 12:00 to 2:00 = 2 hours. Total: 6 hours 30 minutes.',
        },
        {
          label: 'c) Start: 3:20 pm   End: 5:50 pm',
          correctAnswer: '2hours30minutes',
          correctAnswers: ['2hours30minutes', '2 hours 30 minutes', '2hr30min', '150minutes', '150'],
          explanation: 'From 3:20 to 5:20 = 2 hours. From 5:20 to 5:50 = 30 minutes. Total: 2 hours 30 minutes.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A train leaves at 8:45 am and arrives at 1:20 pm.',
      checkMode: 'auto',
      answer: 'a) 4 hours 35 minutes   b) 4 hours 20 minutes   c) 6:35 pm',
      parts: [
        {
          label: 'a) How long is the train journey?',
          correctAnswer: '4hours35minutes',
          correctAnswers: ['4hours35minutes', '4 hours 35 minutes', '4hr35min', '275minutes', '275'],
          explanation: 'From 8:45 to 12:45 = 4 hours. From 12:45 to 1:20 = 35 minutes. Total: 4 hours 35 minutes.',
        },
        {
          label: 'b) The train makes a 15-minute stop along the way. How long is the actual travelling time?',
          correctAnswer: '4hours20minutes',
          correctAnswers: ['4hours20minutes', '4 hours 20 minutes', '4hr20min', '260minutes', '260'],
          explanation: 'Subtract the stop from the total journey: 4 hours 35 minutes − 15 minutes = 4 hours 20 minutes.',
        },
        {
          label: 'c) The return journey takes 30 minutes longer. What time does it arrive if it leaves at 2:00 pm?',
          correctAnswer: '6:35pm',
          correctAnswers: ['6:35pm', '6:35 pm', '635pm', '18:35', '1835'],
          explanation: 'Return journey = 4 hours 35 minutes. From 2:00 pm: 2:00 + 4 hours = 6:00 pm. 6:00 + 35 minutes = 6:35 pm.',
        },
      ],
    },

    // ── SECTION 4 — Calendars and Time Word Problems ───────────────────────────

    {
      difficulty: 'Easy',
      question: 'How many days are there from 10 April to 25 April?',
      checkMode: 'auto',
      answer: '15 days',
      correctAnswer: '15days',
      correctAnswers: ['15days', '15', '15 days'],
      explanation: 'Both dates are in April. Subtract: 25 − 10 = 15 days.',
    },

    {
      difficulty: 'Medium',
      question: 'Answer the following calendar questions.',
      checkMode: 'auto',
      answer: 'a) 30   b) 28   c) 16 days',
      parts: [
        {
          label: 'a) How many days are in September?',
          correctAnswer: '30days',
          correctAnswers: ['30days', '30', '30 days'],
          explanation: 'September is one of the months with 30 days: April, June, September, November.',
        },
        {
          label: 'b) How many days are in February in a normal year?',
          correctAnswer: '28days',
          correctAnswers: ['28days', '28', '28 days'],
          explanation: 'February has 28 days in a normal year and 29 days in a leap year.',
        },
        {
          label: 'c) How many days are there from 20 March to 5 April?',
          correctAnswer: '16days',
          correctAnswers: ['16days', '16', '16 days'],
          explanation: 'Days left in March after the 20th: 31 − 20 = 11 days. Days in April up to the 5th: 5 days. Total: 11 + 5 = 16 days.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: "Thabo's school holiday starts on 28 June and ends on 21 July.",
      checkMode: 'auto',
      answer: 'a) 3 days   b) 21 days   c) 24 days   d) 3 weeks and 3 days',
      parts: [
        {
          label: 'a) How many days are left in June after the 28th?',
          correctAnswer: '3days',
          correctAnswers: ['3days', '3', '3 days'],
          explanation: 'June has 30 days. Counting from the 28th: 28, 29, 30 = 3 days.',
        },
        {
          label: 'b) How many days of holiday are in July?',
          correctAnswer: '21days',
          correctAnswers: ['21days', '21', '21 days'],
          explanation: 'The holiday in July runs from 1 July to 21 July = 21 days.',
        },
        {
          label: 'c) What is the total length of the holiday in days?',
          correctAnswer: '24days',
          correctAnswers: ['24days', '24', '24 days'],
          explanation: 'Add the June days and July days: 3 + 21 = 24 days.',
        },
        {
          label: 'd) How many weeks and days is that?',
          correctAnswer: '3weeks3days',
          correctAnswers: ['3weeks3days', '3 weeks 3 days', '3weeks and 3days', '3 weeks and 3 days'],
          explanation: '24 ÷ 7 = 3 remainder 3. So 24 days = 3 weeks and 3 days.',
        },
      ],
    },

  ],
  scoreMessages: [
    { minScore: 31, message: 'Perfect score! You have mastered Time.' },
    { minScore: 24, message: 'Excellent work! Review the questions you got wrong and you will have this mastered.' },
    { minScore: 16, message: 'Good effort! Go back and read through the sections you struggled with.' },
    { minScore: 0,  message: 'Keep going! Read through the study guide again carefully and then retry.' },
  ],
}
