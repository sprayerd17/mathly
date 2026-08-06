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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to calculate duration between two times and use a calendar to count days between dates',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THE HISTORY OF TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'history-of-time',
      title: 'The History of Time',
      icon: '📜',
      explanation: `
<p style="margin-bottom:14px;">Clocks and watches have not always existed! Long ago, people still needed to know roughly what time it was — to know when to plant crops, meet others, or start a journey. They found clever ways to measure time using the <strong style="color:#ea580c;">sun</strong>, <strong style="color:#1e40af;">water</strong>, and <strong style="color:#16a34a;">sand</strong>.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">☀️ Sundials</div>
  <p style="font-size:15px;color:#7c2d12;margin-bottom:8px;">A <strong>sundial</strong> is a flat surface with a stick or pointer (called a <strong>gnomon</strong>) standing up in the middle. As the sun moves across the sky during the day, the <strong>shadow</strong> of the pointer moves too, and its position shows roughly what time it is.</p>
  <p style="font-size:14px;color:#9a3412;">Sundials were used by the ancient Egyptians thousands of years ago. The big problem with a sundial? It only works when the <strong>sun is shining</strong> — no use at night or on a cloudy day!</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">💧 Water Clocks</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:8px;">A <strong>water clock</strong> (also called a <em>clepsydra</em>) measures time by letting <strong>water drip</strong> at a steady rate from one container into another. Lines marked on the container showed how much time had passed as the water level rose or fell.</p>
  <p style="font-size:14px;color:#1e40af;">Unlike a sundial, a water clock could be used <strong>indoors, at night, or on a cloudy day</strong>, because it did not depend on sunlight at all.</p>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">⏳ Hourglasses</div>
  <p style="font-size:15px;color:#14532d;margin-bottom:8px;">An <strong>hourglass</strong> has two glass chambers joined by a narrow neck. <strong>Sand</strong> trickles slowly from the top chamber to the bottom one, and when it has all fallen through, a fixed amount of time has passed (often exactly one hour).</p>
  <p style="font-size:14px;color:#15803d;">Sailors on ships found hourglasses especially useful — unlike a sundial, an hourglass keeps working steadily no matter how much the ship rocks on the waves!</p>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">🕯️ Candle clocks</span>
  <div style="color:#78350f;font-size:15px;margin-top:8px;">Some cultures marked candles with evenly spaced lines. As the candle burned down at a steady rate, it passed each line after roughly the same amount of time — giving a simple way to measure the hours passing, even after dark.</div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">📅 Early Calendars</div>
  <p style="font-size:15px;color:#1e3a8a;">Long before printed calendars existed, people tracked longer stretches of time by watching the <strong>moon</strong> and the <strong>sun</strong>. Many early calendars followed the changing shape of the moon from night to night. The ancient Egyptians developed one of the first calendars based on the sun and the yearly flooding of the Nile River, to help them know when to plant and harvest their crops.</p>
</div>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 18px;">
  <div style="font-size:13px;font-weight:700;color:#0f1f3d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Why modern clocks are so useful</div>
  <div style="color:#374151;font-size:15px;">Unlike a sundial, water clock, hourglass or candle, a modern clock works <strong>day and night</strong>, in <strong>any weather</strong>, and keeps time <strong>precisely</strong> without anyone needing to watch it, refill it, or turn it over!</div>
</div>
`,
      workedExamples: [
        {
          question:
            'Before clocks were invented, how did the ancient Egyptians use the sun to measure time during the day?',
          steps: [
            "They noticed that a stick or pillar's shadow moves in a predictable pattern from sunrise to sunset.",
            'They placed markers around the stick, forming a sundial, to show different times of day.',
            'By reading where the shadow fell among the markers, people could tell roughly what time it was.',
          ],
          answer:
            'They used a sundial — a pointer that cast a moving shadow as the sun crossed the sky, showing roughly what time it was.',
        },
        {
          question:
            'Sailors on old ships needed to measure time, but a sundial was not very useful to them at sea. Why not, and what did they use instead?',
          steps: [
            "A sundial needs to stay still and face the sun clearly to work — hard to do on a ship rocking on the waves.",
            'An hourglass works the same way no matter how the ship moves, because gravity pulls the sand down at a steady rate.',
            'Sailors would turn the hourglass over each time the sand ran out, to keep counting the hours.',
          ],
          answer:
            'A sundial does not work well on a moving, rocking ship. Sailors used an hourglass instead, which measures a fixed amount of time using falling sand, regardless of the ship\'s movement.',
        },
        {
          question: 'Why is a water clock considered an improvement over a sundial?',
          steps: [
            'A sundial only works when the sun is shining and visible in the sky.',
            'A water clock uses water dripping steadily from one container into another, marked with lines to show the passing time.',
            'This meant people could measure time indoors, at night, or on a cloudy day — situations where a sundial would be useless.',
          ],
          answer:
            'A water clock does not depend on sunlight, so it can be used indoors, at night, and on cloudy days, unlike a sundial.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        'A simple timeline showing a sundial, a water clock, an hourglass, a candle clock and a modern digital clock in order',
      videoPlaceholder:
        'Short video showing how ancient people measured time using sundials, water clocks and hourglasses before modern clocks existed',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Reading clocks & time vocabulary (0-3, Easy)
        { difficulty: 'Easy', question: 'The short hand points to 6 and the long hand points to 12. What time is it?', checkMode: 'auto', options: ["6:00, or six o'clock", '12:30', '6:12', '5:00'], correctIndex: 0, explanation: "Short hand at 6 = 6 hours. Long hand at 12 = 0 minutes. Time: 6:00, or six o'clock. (12:30 swaps which hand shows the hour and which shows the minutes; 6:12 misreads the long hand at 12 as '12 minutes' instead of 0; 5:00 misreads the short hand one number too low.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"117\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'The short hand points between 8 and 9, and the long hand points to 11. What time is it?', checkMode: 'auto', options: ['9:55', '8:55', '8:11', '8:45'], correctIndex: 1, explanation: "Short hand between 8 and 9 = 8 hours. Long hand at 11 = 11 × 5 = 55 minutes. Time: 8:55, or five to nine. (9:55 wrongly rounds the hour up because the minute hand is near the end; 8:11 misreads the long hand's position number as literal minutes; 8:45 miscounts the long hand's position by one number.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"53\" y2=\"86.4\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"60\" y2=\"41.7\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Write "quarter to six" in digital format.', checkMode: 'auto', options: ['6:45', '6:15', '5:45', '5:15'], correctIndex: 2, explanation: 'Quarter to means 15 minutes before the hour. Quarter to six = 60 − 15 = 45 minutes past five = 5:45. (6:45 keeps the hour as six instead of subtracting one; 6:15 confuses quarter to with quarter past; 5:15 gets the hour right but still confuses to/past.)' },
        { difficulty: 'Easy', question: 'Write "twenty five to nine" in digital format.', checkMode: 'auto', options: ['9:25', '9:35', '8:25', '8:35'], correctIndex: 3, explanation: 'Twenty five to nine means 60 − 25 = 35 minutes past eight = 8:35. (9:25 keeps the hour as nine and misplaces the 25; 9:35 has the right minutes but the wrong hour; 8:25 has the right hour but uses 25 directly instead of 60 − 25.)' },
        // Block B — a.m./p.m. and the 24-hour day (4-6, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A digital clock shows 12:05, just a few minutes after the stroke of noon. Is this time a.m. or p.m.?', checkMode: 'auto', options: ['p.m. — 12:00 midday is the exact moment the day switches from a.m. to p.m., so 12:05 (just after that switch) is p.m.', 'a.m. — the digital clock shows the hour as 12, and any time showing 12 is always a.m., no matter the minutes.', 'a.m. — because 12:05 is so close to midday, it still counts as part of the morning before the switch happens.', 'It is impossible to tell from a digital clock whether a time is a.m. or p.m.'], correctIndex: 0, explanation: 'Midday itself is the moment a.m. changes to p.m., so any time from 12:00 midday onward — including 12:05 — falls in the p.m. half of the day. Not every time showing "12" is a.m. (12:00 midnight is), and being close to midday does not make a time before it.' },
        { difficulty: 'Easy-Medium', question: 'Which is the more reasonable time for a school day to end: 2:00 pm or 9:00 pm?', checkMode: 'auto', options: ['9:00 pm — school often runs long with after-school activities, so a late finish like 9:00 pm is reasonable.', '2:00 pm — school usually finishes in the afternoon, not late at night, so 9:00 pm would not make sense for the end of a normal school day.', 'Both are equally reasonable, since school hours vary a lot from school to school.', "9:00 pm — since 9:00 comes after 2:00 on the clock face numbers, it must represent a later, more complete school day."], correctIndex: 1, explanation: 'School usually finishes in the afternoon, not late at night, so 9:00 pm would not make sense for the end of a normal school day. Clock-face numbers alone do not decide what is realistic.' },
        { difficulty: 'Medium', question: 'A lesson starts at 9:00 am and ends at 11:00 am. How long is the lesson?', checkMode: 'auto', options: ['3 hours', '20 hours', '2 hours', '1 hour'], correctIndex: 2, explanation: 'From 9:00 to 11:00 is exactly 2 hours. (3 hours counts both end points inclusively; 20 hours wrongly adds the hour numbers instead of subtracting; 1 hour undercounts the gap by one hour.)' },
        // Block C — Unit conversion (7-10, Medium)
        { difficulty: 'Medium', question: 'Convert 5 hours to minutes.', checkMode: 'auto', options: ['65 minutes', '12 minutes', '50 minutes', '300 minutes'], correctIndex: 3, explanation: 'Hours → minutes: multiply by 60. 5 × 60 = 300 minutes. (65 adds instead of multiplying; 12 divides instead of multiplying; 50 multiplies by 10 instead of 60.)' },
        { difficulty: 'Medium', question: 'Convert 300 seconds to minutes.', checkMode: 'auto', options: ['5 minutes', '18 000 minutes', '50 minutes', '300 minutes'], correctIndex: 0, explanation: 'Seconds → minutes: divide by 60. 300 ÷ 60 = 5 minutes. (18 000 multiplies instead of dividing; 50 divides by 6 instead of 60; 300 forgets to convert at all.)' },
        { difficulty: 'Medium', question: 'Convert 200 minutes to hours and minutes.', checkMode: 'auto', options: ['2 hours 40 minutes', '3 hours 20 minutes', '20 hours 3 minutes', '3 hours 200 minutes'], correctIndex: 1, explanation: '200 ÷ 60 = 3 remainder 20. So 200 minutes = 3 hours 20 minutes. (2 h 40 min miscounts the remainder; 20 h 3 min swaps the quotient and remainder; 3 h 200 min finds the hours but forgets to convert the remaining minutes.)' },
        { difficulty: 'Medium', question: 'Amahle says 6 weeks is the same as 42 days. Is she correct?', checkMode: 'auto', options: ['No — 6 weeks is 36 days, since a week is sometimes counted as 6 days.', 'No — 6 weeks is 48 days, because you should multiply by 8, not 7.', 'Yes — Amahle is correct, since 6 weeks = 6 × 7 = 42 days.', 'No — 6 weeks is 60 days, because you should treat each week as 10 days like a metric unit.'], correctIndex: 2, explanation: 'A week always has 7 days, so 6 weeks = 6 × 7 = 42 days. Amahle is correct.' },
        // Block D — Calculating duration (11-14, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A phone call starts at 9:50 am and ends at 10:20 am. How long is the call?', checkMode: 'auto', options: ['70 minutes', '20 minutes', '40 minutes', '30 minutes'], correctIndex: 3, explanation: 'From 9:50 to 10:00 is 10 minutes, then 10:00 to 10:20 is 20 minutes. Total: 30 minutes. (70 minutes wrongly adds 50 + 20; 20 minutes just copies the end time\'s minutes; 40 minutes miscounts the first leg as 20 minutes instead of 10.)' },
        { difficulty: 'Medium-Hard', question: 'A workshop starts at 8:00 am and ends at 3:30 pm. How long does it last?', checkMode: 'auto', options: ['7 hours 30 minutes', '4 hours 30 minutes', '8 hours 30 minutes', '6 hours 30 minutes'], correctIndex: 0, explanation: 'From 8:00 am to 12:00 pm = 4 hours. From 12:00 pm to 3:30 pm = 3 hours 30 minutes. Total: 7 hours 30 minutes. (4 h 30 min subtracts the clock-face numbers directly without properly crossing midday; 8 h 30 min overcounts the midday crossing; 6 h 30 min stops the count at 3:00 pm instead of 3:30 pm.)' },
        { difficulty: 'Medium-Hard', question: 'An overnight train leaves at 11:00 pm and arrives at 6:00 am the next day. How long is the journey?', checkMode: 'auto', options: ['5 hours', '7 hours', '17 hours', '6 hours'], correctIndex: 1, explanation: 'From 11:00 pm to midnight = 1 hour. From midnight to 6:00 am = 6 hours. Total: 7 hours. (5 hours subtracts 11 − 6 as if no day passed; 17 hours wrongly adds 11 + 6; 6 hours forgets the 1 hour from 11 pm to midnight.)' },
        { difficulty: 'Medium-Hard', question: 'Movie A runs from 6:15 pm to 8:00 pm. Movie B runs from 7:00 pm to 9:10 pm. Which movie is longer?', checkMode: 'auto', options: ['Movie A — because it starts earlier in the day, so it must be the longer movie.', 'Neither — both movies are exactly the same length.', 'Movie B', 'Movie A — 8:00 minus 6:15 gives 2 hours 15 minutes, which is longer than Movie B\'s running time.'], correctIndex: 2, explanation: 'Movie A: 6:15 pm to 8:00 pm = 1 hour 45 minutes (105 minutes). Movie B: 7:00 pm to 9:10 pm = 2 hours 10 minutes (130 minutes). Since 130 > 105, Movie B is longer. Starting earlier does not make a movie longer, and Movie A\'s actual duration is 1 h 45 min, not 2 h 15 min.' },
        // Block E — Start/end times & word problems (15-17, Hard)
        { difficulty: 'Hard', question: 'A swim starts at 7:20 am. It lasts 2 hours 35 minutes. What time does it end?', checkMode: 'auto', options: ['9:35 am', '10:15 am', '9:45 am', '9:55 am'], correctIndex: 3, explanation: 'Count on from the start time: 7:20 am + 2 hours 35 minutes = 9:55 am. (9:35 am drops the 20 minutes from the start time; 10:15 am over-carries the hour; 9:45 am miscounts 20 + 35 as 45 instead of 55.)' },
        { difficulty: 'Hard', question: 'A bus journey ends at 9:55 am. It took 1 hour 20 minutes. What time did it start?', checkMode: 'auto', options: ['8:35 am', '11:15 am', '8:55 am', '8:15 am'], correctIndex: 0, explanation: 'Count back from the end time: 9:55 am − 1 hour 20 minutes = 8:35 am. (11:15 am adds the duration instead of subtracting it; 8:55 am forgets to subtract the 20 minutes; 8:15 am miscounts 55 − 20 as 15 instead of 35.)' },
        { difficulty: 'Hard', question: 'A recipe needs the oven to preheat for 12 minutes, then bake the food for 35 minutes. If Lerato starts preheating at 4:40 pm, what time is the food ready?', checkMode: 'auto', options: ['5:17 pm', '5:27 pm', '4:87 pm', '5:52 pm'], correctIndex: 1, explanation: 'Total time = 12 + 35 = 47 minutes. 4:40 pm + 47 minutes = 5:27 pm. (5:17 pm loses 10 minutes when carrying the hour; 4:87 pm never regroups the minutes into an extra hour, leaving an invalid time; 5:52 pm adds the two durations in the wrong way.)' },
        // Block F — Multi-step reasoning & justification (18-19, Hard)
        { difficulty: 'Hard', question: "Sipho wakes up at 6:15 am. It takes him 40 minutes to get ready, then a further 15 minutes to walk to the bus stop. What time does he arrive at the bus stop?", checkMode: 'auto', options: ['6:70 am', '7:00 am', '7:10 am', '6:55 am'], correctIndex: 2, explanation: 'Getting ready: 6:15 am + 40 minutes = 6:55 am. Walking: 6:55 am + 15 minutes = 7:10 am. (6:70 am adds the two durations but never regroups the minutes into an extra hour; 7:00 am forgets the 15-minute walk; 6:55 am forgets to add the walk to the getting-ready time.)' },
        { difficulty: 'Hard', question: 'Which step-by-step method correctly works out the finishing time of an activity, given the start time and duration?', checkMode: 'auto', options: ['Add the minutes first, then the hours, and if the total hours goes over 24, subtract 12 to correct it.', "Only add the hours from the duration to the start time; the minutes always stay the same as the start time's minutes.", 'Convert the start time to seconds, add the duration in seconds, then divide by 1000 to get the finishing time.', 'First add the whole hours from the duration to the start time. Then add the remaining minutes to that result. If the minutes go past 60, carry 1 hour over and keep the leftover minutes. Check whether the answer crosses from a.m. to p.m. (or past midnight) and adjust accordingly.'], correctIndex: 3, explanation: 'Add the whole hours first, then the remaining minutes, carrying an hour over whenever the minutes pass 60, and check for any a.m./p.m. or midnight crossing at the end.' },

        // Block G — History of Time (20-21, Easy-Medium)
        { difficulty: 'Easy', question: 'Before mechanical clocks existed, which ancient time-measuring tool used the shadow cast by a stick or pillar to show the time of day?', checkMode: 'auto', options: ['A sundial — it uses a pointer that casts a moving shadow as the sun crosses the sky.', "A water clock — it uses a stick or pillar with lines marked to show the shadow's position.", 'An hourglass — sand trickling through a stick-shaped chamber shows the time of day.', 'A candle clock — the shadow of the burning candle moves across marked lines to show the time.'], correctIndex: 0, explanation: 'A sundial uses a pointer (gnomon) that casts a moving shadow as the sun crosses the sky, showing roughly what time it is. Water clocks, hourglasses and candle clocks all measure time without using a shadow.' },
        { difficulty: 'Medium', question: 'Why was an hourglass useful to sailors on a moving ship, when a sundial was not?', checkMode: 'auto', options: ['Because an hourglass can be read even in the dark, while a sundial glows too brightly to see clearly on deck.', 'An hourglass works using gravity pulling sand downward at a steady rate, no matter how the ship rocks — it does not depend on seeing the sun clearly like a sundial does.', 'Because sailors could carry a sundial in their pocket, but an hourglass was too big to take on a ship.', 'Because an hourglass never needs to be turned over, so it keeps measuring time forever without sailors doing anything.'], correctIndex: 1, explanation: 'An hourglass works using gravity pulling sand downward at a steady rate, no matter how the ship rocks, while a sundial depends on clearly seeing the sun — hard to do on a moving, cloud-covered sea.' },
      ],
      scoreMessages: [
        { minScore: 22, message: 'Outstanding! You can confidently tell the time and solve time problems.' },
        { minScore: 17, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 11, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Reading clocks & time vocabulary (0-3, Easy)
        { difficulty: 'Easy', question: 'The short hand points between 9 and 10, and the long hand points to 6. What time is it?', checkMode: 'auto', options: ["9:30, or half past nine", '10:30', '9:06', '6:45'], correctIndex: 0, explanation: "Short hand between 9 and 10 = 9 hours. Long hand at 6 = 6 × 5 = 30 minutes. Time: 9:30, or half past nine. (10:30 rounds the short hand up to the next number; 9:06 misreads the long hand's position as literal minutes; 6:45 swaps which hand shows the hour and which shows the minutes.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"54.1\" y2=\"76.7\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'The short hand points between 6 and 7, and the long hand points to 10. What time is it?', checkMode: 'auto', options: ['7:50', '6:50', '6:10', '6:02'], correctIndex: 1, explanation: "Short hand between 6 and 7 = 6 hours. Long hand at 10 = 10 × 5 = 50 minutes. Time: 6:50, or ten to seven. (7:50 rounds the short hand up; 6:10 misreads the long hand's position as literal minutes; 6:02 misreads the long hand's position number entirely.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"71.5\" y2=\"114\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"41.7\" y2=\"60\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Write "quarter past eleven" in digital format.', checkMode: 'auto', options: ['11:45', '1:15', '11:15', '10:15'], correctIndex: 2, explanation: 'Quarter past means 15 minutes past the hour. Quarter past eleven = 11:15. (11:45 confuses past with to; 1:15 reverses the double-digit hour; 10:15 wrongly subtracts an hour.)' },
        { difficulty: 'Easy', question: 'Write "ten to twelve" in digital format.', checkMode: 'auto', options: ['12:50', '11:10', '12:10', '11:50'], correctIndex: 3, explanation: 'Ten to twelve means 60 − 10 = 50 minutes past eleven = 11:50. (12:50 keeps the hour as twelve instead of subtracting one; 11:10 uses the 10 directly instead of 60 − 10; 12:10 combines both errors.)' },
        // Block B — a.m./p.m. and the 24-hour day (4-6, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Nomvula falls asleep at 11:58 at night and wakes up a few minutes later. Is the moment she wakes up still a.m., or has it become p.m.?', checkMode: 'auto', options: ['It depends on whether midnight has passed. 11:58 at night is p.m. (before midnight). If she wakes only a couple of minutes later but it is still before 12:00 midnight, it is still p.m.; once the clock passes 12:00 midnight, the time becomes a.m. because a new day has started.', 'It is always a.m., because any time close to midnight already counts as the start of the next morning.', 'It is always p.m., because 11:58 pm is already in the p.m. half of the day, and this never changes no matter how much time passes afterward.', 'It depends on how many minutes pass — if fewer than 5 minutes pass it stays p.m., but if more than 5 minutes pass it becomes a.m.'], correctIndex: 0, explanation: 'Midnight (12:00) is the exact moment p.m. switches to a.m. Whether Nomvula is still p.m. or now a.m. depends only on whether the clock has passed midnight, not on being "close" to it or on any minute limit.' },
        { difficulty: 'Easy-Medium', question: 'Which is the more reasonable time to eat breakfast: 7:00 am or 7:00 pm?', checkMode: 'auto', options: ['7:00 pm — most people prefer eating a bigger meal at the start of the evening, so this fits breakfast best.', '7:00 am is more reasonable. Breakfast is eaten in the morning, and 7:00 pm is in the evening, which would be dinner time instead.', 'Both are equally reasonable, since breakfast can be eaten at any time of day.', '7:00 pm — since p.m. comes after a.m. in the day, it must represent the first meal of a new cycle.'], correctIndex: 1, explanation: 'Breakfast is eaten in the morning, and 7:00 pm is in the evening, which would be dinner time instead.' },
        { difficulty: 'Medium', question: 'A test starts at 11:30 am and ends at 12:30 pm. How long is the test?', checkMode: 'auto', options: ['13 hours', '30 minutes', '1 hour', '11 hours'], correctIndex: 2, explanation: 'From 11:30 am to 12:30 pm is exactly 1 hour. (13 hours wrongly adds 12 hours just because the time crosses from a.m. to p.m.; 30 minutes only counts the leftover minutes; 11 hours confuses the clock-face hour numbers.)' },
        // Block C — Unit conversion (7-10, Medium)
        { difficulty: 'Medium', question: 'Convert 4 minutes to seconds.', checkMode: 'auto', options: ['4 seconds', '24 seconds', '44 seconds', '240 seconds'], correctIndex: 3, explanation: 'Minutes → seconds: multiply by 60. 4 × 60 = 240 seconds. (4 seconds forgets to convert at all; 24 seconds drops a zero, multiplying by 6 instead of 60; 44 seconds adds 40 instead of multiplying.)' },
        { difficulty: 'Medium', question: 'Convert 72 hours to days.', checkMode: 'auto', options: ['3 days', '1 728 days', '6 days', '48 days'], correctIndex: 0, explanation: 'Hours → days: divide by 24. 72 ÷ 24 = 3 days. (1 728 multiplies instead of dividing; 6 divides by 12 instead of 24; 48 subtracts 24 instead of dividing.)' },
        { difficulty: 'Medium', question: 'Convert 90 minutes to hours and minutes.', checkMode: 'auto', options: ['1 hour 90 minutes', '1 hour 30 minutes', '9 hours 0 minutes', '0 hours 90 minutes'], correctIndex: 1, explanation: '90 ÷ 60 = 1 remainder 30. So 90 minutes = 1 hour 30 minutes. (1 h 90 min finds the hour but forgets to convert the remainder; 9 h 0 min misplaces the place value; 0 h 90 min misses that 90 minutes contains a full hour at all.)' },
        { difficulty: 'Medium', question: 'Sipho says that to convert 3 hours into minutes, you should divide 3 by 60. Is Sipho correct?', checkMode: 'auto', options: ['Yes, Sipho is correct — dividing always undoes multiplying, and since hours come from dividing minutes, dividing 3 by 60 gives the right number of minutes.', 'No, Sipho is incorrect — he should divide 60 by 3 instead, since minutes are the bigger unit.', 'No, Sipho is incorrect. Hours are a bigger unit than minutes, so you must multiply, not divide. 3 × 60 = 180 minutes.', 'Yes, Sipho is correct — 3 ÷ 60 gives 0.05, and you then multiply by 1 000 to get 50 minutes.'], correctIndex: 2, explanation: 'Hours are a bigger unit than minutes, so converting to the smaller unit means multiplying, not dividing. 3 × 60 = 180 minutes.' },
        // Block D — Calculating duration (11-14, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A dance class starts at 4:45 pm and ends at 6:00 pm. How long is the class?', checkMode: 'auto', options: ['45 minutes', '1 hour 45 minutes', '2 hours 15 minutes', '1 hour 15 minutes'], correctIndex: 3, explanation: 'From 4:45 pm to 5:45 pm = 1 hour. From 5:45 pm to 6:00 pm = 15 minutes. Total: 1 hour 15 minutes. (45 minutes only reads the minute digits shown; 1 h 45 min overcounts the first leg; 2 h 15 min adds extra time by mistake.)' },
        { difficulty: 'Medium-Hard', question: 'A cricket match starts at 10:15 am and ends at 1:45 pm. How long does it last?', checkMode: 'auto', options: ['3 hours 30 minutes', '3 hours', '4 hours 30 minutes', '2 hours 30 minutes'], correctIndex: 0, explanation: 'From 10:15 am to 1:15 pm = 3 hours. From 1:15 pm to 1:45 pm = 30 minutes. Total: 3 hours 30 minutes. (3 hours forgets the extra 30 minutes; 4 h 30 min overcounts crossing midday; 2 h 30 min subtracts the clock-face hours directly without adding 12 for pm.)' },
        { difficulty: 'Medium-Hard', question: 'A late movie starts at 10:30 pm and ends at 12:15 am the next day. How long is the movie?', checkMode: 'auto', options: ['13 hours 45 minutes', '1 hour 45 minutes', '2 hours 15 minutes', '1 hour 15 minutes'], correctIndex: 1, explanation: 'From 10:30 pm to 12:00 midnight = 1 hour 30 minutes. From midnight to 12:15 am = 15 minutes. Total: 1 hour 45 minutes. (13 h 45 min wrongly treats 12:15 am as 12 hours later the same day; 2 h 15 min miscounts the portion after midnight; 1 h 15 min forgets the 30 minutes before midnight.)' },
        { difficulty: 'Medium-Hard', question: 'Class A runs from 8:30 am to 9:50 am. Class B runs from 1:05 pm to 2:20 pm. Which class is longer?', checkMode: 'auto', options: ['Class B — because its start time (1:05 pm) is later in the day, so it must run longer.', 'Both classes are the same length.', 'Class A', "Class B — 2:20 minus 1:05 gives 1 hour 25 minutes, which is longer than Class A's time."], correctIndex: 2, explanation: 'Class A: 8:30 am to 9:50 am = 1 hour 20 minutes (80 minutes). Class B: 1:05 pm to 2:20 pm = 1 hour 15 minutes (75 minutes). Since 80 > 75, Class A is longer — a later start time does not make a class longer, and Class B\'s actual duration is 1 h 15 min, not 1 h 25 min.' },
        // Block E — Start/end times & word problems (15-17, Hard)
        { difficulty: 'Hard', question: 'A road trip starts at 3:40 pm. It lasts 3 hours 50 minutes. What time does it end?', checkMode: 'auto', options: ['7:20 pm', '6:30 pm', '7:90 pm', '7:30 pm'], correctIndex: 3, explanation: 'Count on from the start time: 3:40 pm + 3 hours 50 minutes = 7:30 pm. (7:20 pm loses 10 minutes when carrying the hour; 6:30 pm forgets one of the hours; 7:90 pm never regroups the minutes into an extra hour.)' },
        { difficulty: 'Hard', question: 'A film ends at 2:30 pm. It was 1 hour 45 minutes long. What time did it start?', checkMode: 'auto', options: ['12:45 pm', '1:15 pm', '4:15 pm', '12:15 pm'], correctIndex: 0, explanation: 'Count back from the end time: 2:30 pm − 1 hour 45 minutes = 12:45 pm. (1:15 pm borrows the minutes incorrectly; 4:15 pm adds the duration instead of subtracting it; 12:15 pm borrows incorrectly, landing 30 minutes off.)' },
        { difficulty: 'Hard', question: 'A netball tournament runs from 9:00 am to 12:30 pm, with a 20-minute break in the middle. How much time is spent actually playing?', checkMode: 'auto', options: ['3 hours 30 minutes', '3 hours 10 minutes', '2 hours 50 minutes', '3 hours 50 minutes'], correctIndex: 1, explanation: 'Total time from 9:00 am to 12:30 pm = 3 hours 30 minutes = 210 minutes. Subtract the 20-minute break: 210 − 20 = 190 minutes = 3 hours 10 minutes. (3 h 30 min forgets to subtract the break at all; 2 h 50 min subtracts the break twice; 3 h 50 min adds the break instead of subtracting it.)' },
        // Block F — Multi-step reasoning & justification (18-19, Hard)
        { difficulty: 'Hard', question: 'A sports day schedule starts with a 400 m race at 9:20 am lasting 15 minutes, followed by a 25-minute break, then long jump trials lasting 50 minutes. What time do the long jump trials finish?', checkMode: 'auto', options: ['10:20 am', '9:50 am', '10:50 am', '11:20 am'], correctIndex: 2, explanation: 'Total time from the start of the race to the end of long jump = 15 + 25 + 50 = 90 minutes = 1 hour 30 minutes. 9:20 am + 1 hour 30 minutes = 10:50 am. (10:20 am forgets the 25-minute break; 9:50 am only counts the race time; 11:20 am over-carries the hour when adding 90 minutes.)' },
        { difficulty: 'Hard', question: 'Why does converting all times to minutes (or hours) before adding or subtracting help avoid mistakes when solving multi-step time problems?', checkMode: 'auto', options: ['It helps because minutes are always a smaller number than hours, so mistakes are less likely with smaller numbers.', 'It helps because you can skip regrouping altogether once everything is written in minutes.', 'It helps because a.m. and p.m. no longer matter once a time is written in minutes.', 'Converting everything into the same unit (like minutes) means you can add or subtract the numbers directly, just like normal numbers, without worrying about hours and minutes separately. Once you have the total in one unit, you convert back into hours and minutes at the end, which reduces the chance of making an error partway through the calculation.'], correctIndex: 3, explanation: 'Working in one unit lets you add or subtract like ordinary numbers, then you convert back to hours and minutes only once at the end — reducing the chance of an error partway through.' },

        // Block G — History of Time (20-21, Easy-Medium)
        { difficulty: 'Easy', question: 'Which ancient time-measuring tool used water dripping steadily from one container into another to show the passing of time?', checkMode: 'auto', options: ['A water clock — it measures time using water dripping at a steady rate, with marked lines showing how much time has passed.', 'A sundial — it measures time using water dripping steadily between two containers.', 'An hourglass — it uses dripping water instead of sand to measure a fixed period of time.', 'A candle clock — it uses evenly spaced water marks burned into the wax to show the passing hours.'], correctIndex: 0, explanation: 'A water clock (also called a clepsydra) measures time using water dripping at a steady rate, with marked lines showing how much time has passed. A sundial, hourglass and candle clock all measure time without dripping water.' },
        { difficulty: 'Medium', question: 'Name one advantage a water clock has over a sundial.', checkMode: 'auto', options: ['A water clock is more accurate than a sundial because water always drips at exactly the same speed no matter the temperature.', 'A water clock can be used indoors, at night, or on a cloudy day, because it does not need sunlight to work — a sundial only works in direct sunlight.', 'A water clock is smaller and easier to carry around than a sundial, so people could take it with them anywhere.', 'A water clock never needs to be refilled, so it can measure time forever without anyone watching it.'], correctIndex: 1, explanation: 'A water clock can be used indoors, at night, or on a cloudy day, because it does not need sunlight to work — a sundial only works in direct sunlight.' },
      ],
      scoreMessages: [
        { minScore: 22, message: 'Excellent! You can confidently calculate elapsed time and duration.' },
        { minScore: 17, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 11, message: 'Good effort! Revisit the duration-calculation worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Reading clocks & time vocabulary (0-3, Easy)
        { difficulty: 'Easy', question: 'The short hand points to 2, and the long hand points to 12. What time is it?', checkMode: 'auto', options: ["2:00, or two o'clock", '12:10', '2:12', '3:00'], correctIndex: 0, explanation: "Short hand exactly at 2 and long hand at 12 means it's exactly 2:00, or two o'clock. (12:10 swaps which hand shows the hour and which shows the minutes; 2:12 misreads the long hand at 12 as '12 minutes' instead of 0; 3:00 rounds the short hand up to the next number.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"112.7\" y2=\"69\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'The short hand points between 11 and 12, and the long hand points to 4. What time is it?', checkMode: 'auto', options: ['12:20', '11:20, or twenty past eleven', '11:04', '10:20'], correctIndex: 1, explanation: "Short hand between 11 and 12 = 11 hours. Long hand at 4 = 4 × 5 = 20 minutes. Time: 11:20, or twenty past eleven. (12:20 rounds the short hand up to the next number; 11:04 misreads the long hand's position as literal minutes; 10:20 misreads the short hand one number too low.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"74.1\" y2=\"54.9\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"128.3\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Write "half past nine" in digital format.', checkMode: 'auto', options: ['9:03', '10:30', '9:30', '9:15'], correctIndex: 2, explanation: 'Half past means 30 minutes past the hour. Half past nine = 9:30. (9:03 confuses half past with the o\'clock notation; 10:30 adds an extra hour by mistake; 9:15 confuses half past with quarter past.)' },
        { difficulty: 'Easy', question: 'Write "twenty past two" in digital format.', checkMode: 'auto', options: ['2:02', '3:20', '2:40', '2:20'], correctIndex: 3, explanation: 'Twenty past two means 20 minutes past the hour = 2:20. (2:02 reverses the digits into the minutes place; 3:20 adds an extra hour; 2:40 doubles the twenty by mistake.)' },
        // Block B — a.m./p.m. and the 24-hour day (4-6, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'What number does the long hand point to at "twenty past" any hour?', checkMode: 'auto', options: ['4', '20', '5', '2'], correctIndex: 0, explanation: 'Twenty past = 20 minutes. 20 ÷ 5 = 4, so the long hand points to the number 4. (20 states the minutes themselves rather than the clock-face number; 5 is one number ahead, for 25 minutes; 2 wrongly divides by 10 instead of 5.)' },
        { difficulty: 'Easy-Medium', question: 'Which is the more reasonable time to go to bed on a school night: 8:30 pm or 8:30 am?', checkMode: 'auto', options: ['8:30 am — mornings are quieter, so it is a more restful time to sleep.', '8:30 pm is more reasonable. Bedtime is in the evening, and 8:30 am is in the morning, which would already be time to be up and getting ready for school.', "Both are equally reasonable, since everyone's bedtime is different.", '8:30 am — because a.m. times always come before p.m. times, so bedtime, which comes before waking up, must be a.m.'], correctIndex: 1, explanation: 'Bedtime is in the evening, and 8:30 am is in the morning, which would already be time to be up and getting ready for school.' },
        { difficulty: 'Medium', question: 'A soccer match kicks off at 3:00 pm and ends at 4:30 pm. How long does the match last?', checkMode: 'auto', options: ['30 minutes', '2 hours 30 minutes', '1 hour 30 minutes', '1 hour'], correctIndex: 2, explanation: 'From 3:00 pm to 4:30 pm is 1 hour 30 minutes. (30 minutes only reads the minutes shown and ignores the hour that passed; 2 h 30 min adds an extra hour by mistake; 1 hour forgets the extra 30 minutes past 4:00 pm.)' },
        // Block C — Unit conversion (7-10, Medium)
        { difficulty: 'Medium', question: 'Convert 2 days to hours.', checkMode: 'auto', options: ['26 hours', '12 hours', '2 hours', '48 hours'], correctIndex: 3, explanation: 'Days → hours: multiply by 24. 2 × 24 = 48 hours. (26 hours wrongly adds 24 + 2; 12 hours divides instead of multiplying; 2 hours forgets to convert at all.)' },
        { difficulty: 'Medium', question: 'Convert 21 days to weeks.', checkMode: 'auto', options: ['3 weeks', '147 weeks', '2 weeks', '21 weeks'], correctIndex: 0, explanation: 'Days → weeks: divide by 7. 21 ÷ 7 = 3 weeks. (147 weeks multiplies instead of dividing; 2 weeks divides by the wrong factor; 21 weeks forgets to convert at all.)' },
        { difficulty: 'Medium', question: 'Convert 100 hours to days and hours.', checkMode: 'auto', options: ['4 days 24 hours', '4 days 4 hours', '10 days 0 hours', '0 days 100 hours'], correctIndex: 1, explanation: '100 ÷ 24 = 4 remainder 4. So 100 hours = 4 days and 4 hours. (4 days 24 h leaves an invalid remainder that is itself a full day; 10 days 0 h misplaces the place value; 0 days 100 h misses that 100 hours contains full days at all.)' },
        { difficulty: 'Medium', question: "A student says: '2 hours 30 minutes plus 45 minutes is 2 hours 75 minutes.' Which statement correctly explains what is wrong with this answer?", checkMode: 'auto', options: ['The student is correct — 2 hours 75 minutes is a perfectly valid way to write the answer, since minutes can go above 60.', 'The answer is wrong because you should have subtracted 45 minutes instead of adding it, giving 1 hour 45 minutes.', 'The answer is wrong because 75 minutes is more than 60 minutes, so it must be regrouped into an extra hour. 75 minutes = 1 hour 15 minutes, so 2 hours + 1 hour 15 minutes = 3 hours 15 minutes.', 'The answer is wrong because 30 + 45 should equal 70 minutes, not 75 minutes, so the correct answer is 2 hours 70 minutes.'], correctIndex: 2, explanation: '75 minutes is more than 60 minutes, so it must be regrouped: 75 minutes = 1 hour 15 minutes, giving 2 hours + 1 hour 15 minutes = 3 hours 15 minutes. A time can never correctly be left showing 60 or more minutes.' },
        // Block D — Calculating duration (11-14, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A quiz starts at 9:05 am and ends at 9:55 am. How long is the quiz?', checkMode: 'auto', options: ['45 minutes', '1 hour 5 minutes', '55 minutes', '50 minutes'], correctIndex: 3, explanation: 'From 9:05 to 9:55 is 50 minutes. (45 minutes subtracts the digits the wrong way round; 1 h 5 min wrongly adds an hour that never passed; 55 minutes just copies the end time\'s minutes.)' },
        { difficulty: 'Medium-Hard', question: 'A flight departs at 10:40 am and arrives at 1:25 pm. How long is the flight?', checkMode: 'auto', options: ['2 hours 45 minutes', '3 hours 15 minutes', '2 hours 15 minutes', '3 hours 45 minutes'], correctIndex: 0, explanation: 'From 10:40 am to 1:40 pm = 3 hours. But the flight arrives 15 minutes earlier at 1:25 pm, so 3 hours − 15 minutes = 2 hours 45 minutes. (3 h 15 min forgets to subtract the 15 minutes; 2 h 15 min subtracts 30 minutes instead of 15; 3 h 45 min adds an extra hour by mistake.)' },
        { difficulty: 'Medium-Hard', question: 'A market opens at 11:30 pm and closes at 5:00 am the next day. How long is the market open?', checkMode: 'auto', options: ['6 hours 30 minutes', '5 hours 30 minutes', '17 hours 30 minutes', '4 hours 30 minutes'], correctIndex: 1, explanation: 'From 11:30 pm to midnight = 30 minutes. From midnight to 5:00 am = 5 hours. Total: 5 hours 30 minutes. (6 h 30 min miscounts the portion after midnight; 17 h 30 min treats 5 am as if it were 5 pm the same day; 4 h 30 min forgets the 30 minutes before midnight.)' },
        { difficulty: 'Medium-Hard', question: 'Train A travels from 8:10 am to 11:40 am. Train B travels from 9:00 am to 12:15 pm. Which train journey is longer?', checkMode: 'auto', options: ['Train B — because it departs later in the morning, its journey must run longer into the day.', 'Both train journeys take exactly the same time.', 'Train A', 'Train B — 12:15 minus 9:00 gives 3 hours 30 minutes, the same as Train A, so Train B must actually be the longer one due to arriving in the afternoon.'], correctIndex: 2, explanation: 'Train A: 8:10 am to 11:40 am = 3 hours 30 minutes (210 minutes). Train B: 9:00 am to 12:15 pm = 3 hours 15 minutes (195 minutes). Since 210 > 195, Train A is longer — departing later does not make a journey longer.' },
        // Block E — Start/end times & word problems (15-17, Hard)
        { difficulty: 'Hard', question: 'A camping trip starts at 11:10 am. It lasts 4 hours 20 minutes. What time does it end?', checkMode: 'auto', options: ['3:10 pm', '4:30 pm', '3:50 pm', '3:30 pm'], correctIndex: 3, explanation: 'Count on from the start time: 11:10 am + 4 hours 20 minutes = 3:30 pm. (3:10 pm forgets to add the 20 minutes; 4:30 pm over-carries the hour; 3:50 pm miscounts 10 + 20 as 40 instead of 30.)' },
        { difficulty: 'Hard', question: 'A birthday party ends at 5:00 pm. It lasted 3 hours. What time did it start?', checkMode: 'auto', options: ['2:00 pm', '8:00 pm', '2:30 pm', '5:00 am'], correctIndex: 0, explanation: 'Count back from the end time: 5:00 pm − 3 hours = 2:00 pm. (8:00 pm adds the duration instead of subtracting it; 2:30 pm adds an extra 30 minutes by mistake; 5:00 am wrongly subtracts 12 hours instead of 3.)' },
        { difficulty: 'Hard', question: "Thabo's family drives to the coast. They leave at 5:45 am and the trip normally takes 6 hours, but roadworks add 35 minutes. What time do they arrive?", checkMode: 'auto', options: ['11:20 am', '12:20 pm', '12:20 am', '11:80 am'], correctIndex: 1, explanation: 'Total travel time = 6 hours + 35 minutes = 6 hours 35 minutes. 5:45 am + 6 hours 35 minutes = 12:20 pm. (11:20 am forgets the 35-minute roadworks delay; 12:20 am keeps the time in a.m. instead of crossing to p.m.; 11:80 am never regroups the minutes into an extra hour.)' },
        // Block F — Multi-step reasoning & justification (18-19, Hard)
        { difficulty: 'Hard', question: 'A farmer starts milking cows at 5:15 am. It takes 1 hour 50 minutes. Then, after a 40-minute breakfast break, he starts feeding the animals, which takes another 1 hour 10 minutes. What time does he finish feeding the animals?', checkMode: 'auto', options: ['7:45 am', '8:15 am', '8:55 am', '9:15 am'], correctIndex: 2, explanation: 'Milking: 5:15 am + 1 hour 50 minutes = 7:05 am. Breakfast: 7:05 am + 40 minutes = 7:45 am. Feeding: 7:45 am + 1 hour 10 minutes = 8:55 am. (7:45 am forgets the final feeding step; 8:15 am miscounts the feeding time; 9:15 am miscounts the total carry.)' },
        { difficulty: 'Hard', question: 'Why is it important to know whether a time is a.m. or p.m. when solving word problems about duration?', checkMode: 'auto', options: ['It is only important for very long activities, like a trip lasting several days, but not for short activities like a single class.', 'It matters only for writing the final answer neatly, not for actually calculating the duration correctly.', "a.m. and p.m. tell you the exact minute an activity started, so you don't need to look at the rest of the time at all.", 'a.m. and p.m. tell you whether a time is in the first half or second half of the day. Without knowing this, you could calculate the wrong duration — for example, mixing up 7:00 am and 7:00 pm would give a completely different (and incorrect) answer for how long an activity lasted.'], correctIndex: 3, explanation: 'a.m. and p.m. tell you whether a time is in the first or second half of the day — mixing them up (e.g. 7:00 am with 7:00 pm) gives a completely wrong duration, for activities of any length.' },

        // Block G — History of Time (20-21, Easy-Medium)
        { difficulty: 'Easy', question: 'Which ancient time-measuring tool uses sand trickling through a narrow neck from a top chamber to a bottom chamber to measure a fixed length of time?', checkMode: 'auto', options: ['An hourglass — sand trickles through a narrow neck from a top chamber to a bottom chamber, measuring a fixed length of time.', 'A sundial — sand inside its base trickles through a narrow neck to measure a fixed period of time.', 'A water clock — it uses a narrow neck between two glass chambers filled with dripping water instead of sand.', 'A candle clock — wax trickles down through a narrow opening at the base of the candle to mark the hours.'], correctIndex: 0, explanation: 'An hourglass has two glass chambers joined by a narrow neck. Sand trickles from the top to the bottom at a steady rate, measuring a fixed amount of time, often exactly one hour. A sundial, water clock and candle clock do not use trickling sand.' },
        { difficulty: 'Medium', question: 'Which of these is a correct reason why modern clocks are more useful in everyday life than a sundial or an hourglass?', checkMode: 'auto', options: ['Modern clocks are the only time-measuring tools that have ever existed indoors, unlike a sundial or hourglass which only work outside.', 'Modern clocks work at any time of day or night, in any weather, and can measure time continuously and precisely without needing to be watched, refilled, or turned over — unlike a sundial (needs sunlight) or an hourglass (needs to be flipped and only measures a fixed amount of time).', 'Modern clocks are useful mainly because they are smaller and lighter than a sundial, making them easier to carry.', 'Modern clocks are better only because they show minutes and seconds, while a sundial and hourglass can only show whole hours.'], correctIndex: 1, explanation: 'Modern clocks work at any time of day or night, in any weather, and measure time continuously and precisely without needing to be watched, refilled, or turned over — unlike a sundial or an hourglass.' },
      ],
      scoreMessages: [
        { minScore: 22, message: 'Fantastic! You can apply time calculations to real-world problems.' },
        { minScore: 17, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 11, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
