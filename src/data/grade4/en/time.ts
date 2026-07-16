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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
        { difficulty: 'Easy', question: 'The short hand points to 6 and the long hand points to 12. What time is it?', answer: '6:00', checkMode: 'auto', correctAnswer: '6:00', correctAnswers: ['6:00', '600', '6oclock', '6 oclock'], explanation: "Short hand at 6 = 6 hours. Long hand at 12 = 0 minutes. Time: 6:00, or six o'clock.", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"117\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'The short hand points between 8 and 9, and the long hand points between 10 and 11 (5 minutes past the 10). What time is it?', answer: '8:55', checkMode: 'auto', correctAnswer: '8:55', correctAnswers: ['8:55', '855'], explanation: "Short hand between 8 and 9 = 8 hours. Long hand one small mark past the 10 = (10 × 5) + 5 = 55 minutes. Time: 8:55, or five to nine.", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"53\" y2=\"86.4\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"60\" y2=\"41.7\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Write "quarter to six" in digital format.', answer: '5:45', checkMode: 'auto', correctAnswer: '5:45', correctAnswers: ['5:45', '545'], explanation: 'Quarter to means 15 minutes before the hour. Quarter to six = 60 − 15 = 45 minutes past five = 5:45.' },
        { difficulty: 'Easy', question: 'Write "twenty five to nine" in digital format.', answer: '8:35', checkMode: 'auto', correctAnswer: '8:35', correctAnswers: ['8:35', '835'], explanation: 'Twenty five to nine means 60 − 25 = 35 minutes past eight = 8:35.' },
        // Block B — a.m./p.m. and the 24-hour day (4-6, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'A digital clock shows 12:05, just a few minutes after the stroke of noon. Is this time a.m. or p.m.? Explain your reasoning.', answer: '12:05 just after noon is p.m. Midday itself is the moment a.m. changes to p.m., so any time from 12:00 midday onward — including 12:05 — falls in the p.m. half of the day.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Which is the more reasonable time for a school day to end: 2:00 pm or 9:00 pm? Explain your answer.', answer: '2:00 pm is more reasonable. School usually finishes in the afternoon, not late at night, so 9:00 pm would not make sense for the end of a normal school day.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A lesson starts at 9:00 am and ends at 11:00 am. How long is the lesson?', answer: '2 hours', checkMode: 'auto', correctAnswer: '2hours', correctAnswers: ['2hours', '2 hours', '2hr', '120minutes', '120'], explanation: 'From 9:00 to 11:00 is exactly 2 hours.' },
        // Block C — Unit conversion (7-10, Medium)
        { difficulty: 'Medium', question: 'Convert 5 hours to minutes.', answer: '300 minutes', checkMode: 'auto', correctAnswer: '300minutes', correctAnswers: ['300minutes', '300', '300 minutes', '300mins'], explanation: 'Hours → minutes: multiply by 60. 5 × 60 = 300 minutes.' },
        { difficulty: 'Medium', question: 'Convert 300 seconds to minutes.', answer: '5 minutes', checkMode: 'auto', correctAnswer: '5minutes', correctAnswers: ['5minutes', '5', '5 minutes', '5mins'], explanation: 'Seconds → minutes: divide by 60. 300 ÷ 60 = 5 minutes.' },
        { difficulty: 'Medium', question: 'Convert 200 minutes to hours and minutes.', answer: '3 hours 20 minutes', checkMode: 'auto', correctAnswer: '3hours20minutes', correctAnswers: ['3hours20minutes', '3 hours 20 minutes', '3hr20min', '200minutes', '200mins', '200'], explanation: '200 ÷ 60 = 3 remainder 20. So 200 minutes = 3 hours 20 minutes.' },
        { difficulty: 'Medium', question: 'Amahle says 6 weeks is the same as 42 days. Is she correct? Show your working.', answer: 'Yes, Amahle is correct. 6 weeks = 6 × 7 = 42 days.', checkMode: 'self' },
        // Block D — Calculating duration (11-14, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A phone call starts at 9:50 am and ends at 10:20 am. How long is the call?', answer: '30 minutes', checkMode: 'auto', correctAnswer: '30minutes', correctAnswers: ['30minutes', '30 minutes', '30mins', '30'], explanation: 'From 9:50 to 10:00 is 10 minutes, then 10:00 to 10:20 is 20 minutes. Total: 30 minutes.' },
        { difficulty: 'Medium-Hard', question: 'A workshop starts at 8:00 am and ends at 3:30 pm. How long does it last?', answer: '7 hours 30 minutes', checkMode: 'auto', correctAnswer: '7hours30minutes', correctAnswers: ['7hours30minutes', '7 hours 30 minutes', '7hr30min', '450minutes', '450'], explanation: 'From 8:00 am to 12:00 pm = 4 hours. From 12:00 pm to 3:30 pm = 3 hours 30 minutes. Total: 7 hours 30 minutes.' },
        { difficulty: 'Medium-Hard', question: 'An overnight train leaves at 11:00 pm and arrives at 6:00 am the next day. How long is the journey?', answer: '7 hours', checkMode: 'auto', correctAnswer: '7hours', correctAnswers: ['7hours', '7 hours', '7hr', '420minutes', '420'], explanation: 'From 11:00 pm to midnight = 1 hour. From midnight to 6:00 am = 6 hours. Total: 7 hours.' },
        { difficulty: 'Medium-Hard', question: 'Movie A runs from 6:15 pm to 8:00 pm. Movie B runs from 7:00 pm to 9:10 pm. Which movie is longer?', answer: 'Movie B', checkMode: 'auto', correctAnswer: 'MovieB', correctAnswers: ['MovieB', 'Movie B', 'movieb', 'B', 'b'], explanation: 'Movie A: 6:15 pm to 8:00 pm = 1 hour 45 minutes (105 minutes). Movie B: 7:00 pm to 9:10 pm = 2 hours 10 minutes (130 minutes). Since 130 > 105, Movie B is longer.' },
        // Block E — Start/end times & word problems (15-17, Hard)
        { difficulty: 'Hard', question: 'A swim starts at 7:20 am. It lasts 2 hours 35 minutes. What time does it end?', answer: '9:55 am', checkMode: 'auto', correctAnswer: '9:55am', correctAnswers: ['9:55am', '9:55 am', '955am'], explanation: 'Count on from the start time: 7:20 am + 2 hours 35 minutes = 9:55 am.' },
        { difficulty: 'Hard', question: 'A bus journey ends at 9:55 am. It took 1 hour 20 minutes. What time did it start?', answer: '8:35 am', checkMode: 'auto', correctAnswer: '8:35am', correctAnswers: ['8:35am', '8:35 am', '835am'], explanation: 'Count back from the end time: 9:55 am − 1 hour 20 minutes = 8:35 am.' },
        { difficulty: 'Hard', question: 'A recipe needs the oven to preheat for 12 minutes, then bake the food for 35 minutes. If Lerato starts preheating at 4:40 pm, what time is the food ready?', answer: '5:27 pm', checkMode: 'auto', correctAnswer: '5:27pm', correctAnswers: ['5:27pm', '5:27 pm', '527pm'], explanation: 'Total time = 12 + 35 = 47 minutes. 4:40 pm + 47 minutes = 5:27 pm.' },
        // Block F — Multi-step reasoning & justification (18-19, Hard)
        { difficulty: 'Hard', question: "Sipho wakes up at 6:15 am. It takes him 40 minutes to get ready, then a further 15 minutes to walk to the bus stop. What time does he arrive at the bus stop?", answer: '7:10 am', checkMode: 'auto', correctAnswer: '7:10am', correctAnswers: ['7:10am', '7:10 am', '710am'], explanation: 'Getting ready: 6:15 am + 40 minutes = 6:55 am. Walking: 6:55 am + 15 minutes = 7:10 am.' },
        { difficulty: 'Hard', question: 'Explain how you would work out the finishing time of an activity if you are given the start time and the duration, using a step-by-step method.', answer: 'First add the whole hours from the duration to the start time. Then add the remaining minutes to that result. If the minutes go past 60, carry 1 hour over and keep the leftover minutes. Remember to check whether the answer crosses over from a.m. to p.m. (or past midnight) and adjust accordingly.', checkMode: 'self' },

        // Block G — History of Time (20-21, Easy-Medium)
        { difficulty: 'Easy', question: 'Before mechanical clocks existed, which ancient time-measuring tool used the shadow cast by a stick or pillar to show the time of day?', answer: 'A sundial', checkMode: 'auto', correctAnswer: 'sundial', correctAnswers: ['sundial', 'a sundial', 'suntial'], explanation: 'A sundial uses a pointer (gnomon) that casts a moving shadow as the sun crosses the sky, showing roughly what time it is.' },
        { difficulty: 'Medium', question: 'Why was an hourglass useful to sailors on a moving ship, when a sundial was not?', answer: "An hourglass works using gravity pulling sand downward at a steady rate, no matter how the ship rocks — it does not depend on seeing the sun clearly like a sundial does.", checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'The short hand points between 9 and 10, and the long hand points to 6. What time is it?', answer: '9:30', checkMode: 'auto', correctAnswer: '9:30', correctAnswers: ['9:30', '930'], explanation: 'Short hand between 9 and 10 = 9 hours. Long hand at 6 = 6 × 5 = 30 minutes. Time: 9:30, or half past nine.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"54.1\" y2=\"76.7\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'The short hand points between 6 and 7, and the long hand points between 9 and 10 (5 minutes past the 9). What time is it?', answer: '6:50', checkMode: 'auto', correctAnswer: '6:50', correctAnswers: ['6:50', '650'], explanation: 'Short hand between 6 and 7 = 6 hours. Long hand one small mark past the 9 = (9 × 5) + 5 = 50 minutes. Time: 6:50, or ten to seven.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"71.5\" y2=\"114\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"41.7\" y2=\"60\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Write "quarter past eleven" in digital format.', answer: '11:15', checkMode: 'auto', correctAnswer: '11:15', correctAnswers: ['11:15', '1115'], explanation: 'Quarter past means 15 minutes past the hour. Quarter past eleven = 11:15.' },
        { difficulty: 'Easy', question: 'Write "ten to twelve" in digital format.', answer: '11:50', checkMode: 'auto', correctAnswer: '11:50', correctAnswers: ['11:50', '1150'], explanation: 'Ten to twelve means 60 − 10 = 50 minutes past eleven = 11:50.' },
        // Block B — a.m./p.m. and the 24-hour day (4-6, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Nomvula falls asleep at 11:58 at night and wakes up a few minutes later. Is the moment she wakes up still a.m., or has it become p.m.? Explain how you know.', answer: 'It depends on whether midnight has passed. 11:58 at night is p.m. (before midnight). If she wakes only a couple of minutes later but it is still before 12:00 midnight, it is still p.m.; once the clock passes 12:00 midnight, the time becomes a.m. because a new day has started.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Which is the more reasonable time to eat breakfast: 7:00 am or 7:00 pm? Explain your answer.', answer: '7:00 am is more reasonable. Breakfast is eaten in the morning, and 7:00 pm is in the evening, which would be dinner time instead.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A test starts at 11:30 am and ends at 12:30 pm. How long is the test?', answer: '1 hour', checkMode: 'auto', correctAnswer: '1hour', correctAnswers: ['1hour', '1 hour', '1hr', '60minutes', '60'], explanation: 'From 11:30 am to 12:30 pm is exactly 1 hour.' },
        // Block C — Unit conversion (7-10, Medium)
        { difficulty: 'Medium', question: 'Convert 4 minutes to seconds.', answer: '240 seconds', checkMode: 'auto', correctAnswer: '240seconds', correctAnswers: ['240seconds', '240', '240 seconds', '240secs'], explanation: 'Minutes → seconds: multiply by 60. 4 × 60 = 240 seconds.' },
        { difficulty: 'Medium', question: 'Convert 72 hours to days.', answer: '3 days', checkMode: 'auto', correctAnswer: '3days', correctAnswers: ['3days', '3', '3 days'], explanation: 'Hours → days: divide by 24. 72 ÷ 24 = 3 days.' },
        { difficulty: 'Medium', question: 'Convert 90 minutes to hours and minutes.', answer: '1 hour 30 minutes', checkMode: 'auto', correctAnswer: '1hour30minutes', correctAnswers: ['1hour30minutes', '1 hour 30 minutes', '1hr30min', '90minutes', '90mins', '90'], explanation: '90 ÷ 60 = 1 remainder 30. So 90 minutes = 1 hour 30 minutes.' },
        { difficulty: 'Medium', question: 'Sipho says that to convert 3 hours into minutes, you should divide 3 by 60. Is Sipho correct? Explain what he should do instead.', answer: 'No, Sipho is incorrect. Hours are a bigger unit than minutes, so you must multiply, not divide. 3 × 60 = 180 minutes.', checkMode: 'self' },
        // Block D — Calculating duration (11-14, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A dance class starts at 4:45 pm and ends at 6:00 pm. How long is the class?', answer: '1 hour 15 minutes', checkMode: 'auto', correctAnswer: '1hour15minutes', correctAnswers: ['1hour15minutes', '1 hour 15 minutes', '1hr15min', '75minutes', '75'], explanation: 'From 4:45 pm to 5:45 pm = 1 hour. From 5:45 pm to 6:00 pm = 15 minutes. Total: 1 hour 15 minutes.' },
        { difficulty: 'Medium-Hard', question: 'A cricket match starts at 10:15 am and ends at 1:45 pm. How long does it last?', answer: '3 hours 30 minutes', checkMode: 'auto', correctAnswer: '3hours30minutes', correctAnswers: ['3hours30minutes', '3 hours 30 minutes', '3hr30min', '210minutes', '210'], explanation: 'From 10:15 am to 1:15 pm = 3 hours. From 1:15 pm to 1:45 pm = 30 minutes. Total: 3 hours 30 minutes.' },
        { difficulty: 'Medium-Hard', question: 'A late movie starts at 10:30 pm and ends at 12:15 am the next day. How long is the movie?', answer: '1 hour 45 minutes', checkMode: 'auto', correctAnswer: '1hour45minutes', correctAnswers: ['1hour45minutes', '1 hour 45 minutes', '1hr45min', '105minutes', '105'], explanation: 'From 10:30 pm to 12:00 midnight = 1 hour 30 minutes. From midnight to 12:15 am = 15 minutes. Total: 1 hour 45 minutes.' },
        { difficulty: 'Medium-Hard', question: 'Class A runs from 8:30 am to 9:50 am. Class B runs from 1:05 pm to 2:20 pm. Which class is longer?', answer: 'Class A', checkMode: 'auto', correctAnswer: 'ClassA', correctAnswers: ['ClassA', 'Class A', 'classa', 'A', 'a'], explanation: 'Class A: 8:30 am to 9:50 am = 1 hour 20 minutes (80 minutes). Class B: 1:05 pm to 2:20 pm = 1 hour 15 minutes (75 minutes). Since 80 > 75, Class A is longer.' },
        // Block E — Start/end times & word problems (15-17, Hard)
        { difficulty: 'Hard', question: 'A road trip starts at 3:40 pm. It lasts 3 hours 50 minutes. What time does it end?', answer: '7:30 pm', checkMode: 'auto', correctAnswer: '7:30pm', correctAnswers: ['7:30pm', '7:30 pm', '730pm'], explanation: 'Count on from the start time: 3:40 pm + 3 hours 50 minutes = 7:30 pm.' },
        { difficulty: 'Hard', question: 'A film ends at 2:30 pm. It was 1 hour 45 minutes long. What time did it start?', answer: '12:45 pm', checkMode: 'auto', correctAnswer: '12:45pm', correctAnswers: ['12:45pm', '12:45 pm', '1245pm'], explanation: 'Count back from the end time: 2:30 pm − 1 hour 45 minutes = 12:45 pm.' },
        { difficulty: 'Hard', question: 'A netball tournament runs from 9:00 am to 12:30 pm, with a 20-minute break in the middle. How much time is spent actually playing?', answer: '3 hours 10 minutes', checkMode: 'auto', correctAnswer: '3hours10minutes', correctAnswers: ['3hours10minutes', '3 hours 10 minutes', '3hr10min', '190minutes', '190'], explanation: 'Total time from 9:00 am to 12:30 pm = 3 hours 30 minutes = 210 minutes. Subtract the 20-minute break: 210 − 20 = 190 minutes = 3 hours 10 minutes.' },
        // Block F — Multi-step reasoning & justification (18-19, Hard)
        { difficulty: 'Hard', question: 'A sports day schedule starts with a 400 m race at 9:20 am lasting 15 minutes, followed by a 25-minute break, then long jump trials lasting 50 minutes. What time do the long jump trials finish?', answer: '10:50 am', checkMode: 'auto', correctAnswer: '10:50am', correctAnswers: ['10:50am', '10:50 am', '1050am'], explanation: 'Total time from the start of the race to the end of long jump = 15 + 25 + 50 = 90 minutes = 1 hour 30 minutes. 9:20 am + 1 hour 30 minutes = 10:50 am.' },
        { difficulty: 'Hard', question: 'Explain why converting all times to minutes (or hours) before adding or subtracting can help avoid mistakes when solving multi-step time problems.', answer: 'Converting everything into the same unit (like minutes) means you can add or subtract the numbers directly, just like normal numbers, without worrying about hours and minutes separately. Once you have the total in one unit, you convert back into hours and minutes at the end, which reduces the chance of making an error partway through the calculation.', checkMode: 'self' },

        // Block G — History of Time (20-21, Easy-Medium)
        { difficulty: 'Easy', question: 'Which ancient time-measuring tool used water dripping steadily from one container into another to show the passing of time?', answer: 'A water clock', checkMode: 'auto', correctAnswer: 'waterclock', correctAnswers: ['waterclock', 'water clock', 'a water clock', 'clepsydra'], explanation: 'A water clock (also called a clepsydra) measures time using water dripping at a steady rate, with marked lines showing how much time has passed.' },
        { difficulty: 'Medium', question: 'Name one advantage a water clock has over a sundial.', answer: 'A water clock can be used indoors, at night, or on a cloudy day, because it does not need sunlight to work — a sundial only works in direct sunlight.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'The short hand points between 2 and 3, and the long hand points to 12. What time is it?', answer: '2:00', checkMode: 'auto', correctAnswer: '2:00', correctAnswers: ['2:00', '200', '2oclock', '2 oclock'], explanation: "Short hand between 2 and 3 means it has just passed 2 — the hour is 2. Long hand at 12 = 0 minutes. Time: 2:00, or two o'clock.", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"112.7\" y2=\"69\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'The short hand points between 11 and 12, and the long hand points to 4. What time is it?', answer: '11:20', checkMode: 'auto', correctAnswer: '11:20', correctAnswers: ['11:20', '1120'], explanation: 'Short hand between 11 and 12 = 11 hours. Long hand at 4 = 4 × 5 = 20 minutes. Time: 11:20, or twenty past eleven.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"74.1\" y2=\"54.9\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"128.3\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Write "half past nine" in digital format.', answer: '9:30', checkMode: 'auto', correctAnswer: '9:30', correctAnswers: ['9:30', '930'], explanation: 'Half past means 30 minutes past the hour. Half past nine = 9:30.' },
        { difficulty: 'Easy', question: 'Write "twenty past two" in digital format.', answer: '2:20', checkMode: 'auto', correctAnswer: '2:20', correctAnswers: ['2:20', '220'], explanation: 'Twenty past two means 20 minutes past the hour = 2:20.' },
        // Block B — a.m./p.m. and the 24-hour day (4-6, Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'What number does the long hand point to at "twenty past" any hour?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'Twenty past = 20 minutes. 20 ÷ 5 = 4, so the long hand points to the number 4.' },
        { difficulty: 'Easy-Medium', question: 'Which is the more reasonable time to go to bed on a school night: 8:30 pm or 8:30 am? Explain your answer.', answer: '8:30 pm is more reasonable. Bedtime is in the evening, and 8:30 am is in the morning, which would already be time to be up and getting ready for school.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A soccer match kicks off at 3:00 pm and ends at 4:30 pm. How long does the match last?', answer: '1 hour 30 minutes', checkMode: 'auto', correctAnswer: '1hour30minutes', correctAnswers: ['1hour30minutes', '1 hour 30 minutes', '1hr30min', '90minutes', '90'], explanation: 'From 3:00 pm to 4:30 pm is 1 hour 30 minutes.' },
        // Block C — Unit conversion (7-10, Medium)
        { difficulty: 'Medium', question: 'Convert 2 days to hours.', answer: '48 hours', checkMode: 'auto', correctAnswer: '48hours', correctAnswers: ['48hours', '48', '48 hours', '48hrs'], explanation: 'Days → hours: multiply by 24. 2 × 24 = 48 hours.' },
        { difficulty: 'Medium', question: 'Convert 21 days to weeks.', answer: '3 weeks', checkMode: 'auto', correctAnswer: '3weeks', correctAnswers: ['3weeks', '3', '3 weeks'], explanation: 'Days → weeks: divide by 7. 21 ÷ 7 = 3 weeks.' },
        { difficulty: 'Medium', question: 'Convert 100 hours to days and hours.', answer: '4 days 4 hours', checkMode: 'auto', correctAnswer: '4days4hours', correctAnswers: ['4days4hours', '4 days 4 hours', '100hours', '100'], explanation: '100 ÷ 24 = 4 remainder 4. So 100 hours = 4 days and 4 hours.' },
        { difficulty: 'Medium', question: "A student says: '2 hours 30 minutes plus 45 minutes is 2 hours 75 minutes.' Explain what is wrong with this answer and give the correct one.", answer: 'The answer is wrong because 75 minutes is more than 60 minutes, so it must be regrouped into an extra hour. 75 minutes = 1 hour 15 minutes, so 2 hours + 1 hour 15 minutes = 3 hours 15 minutes.', checkMode: 'self' },
        // Block D — Calculating duration (11-14, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'A quiz starts at 9:05 am and ends at 9:55 am. How long is the quiz?', answer: '50 minutes', checkMode: 'auto', correctAnswer: '50minutes', correctAnswers: ['50minutes', '50 minutes', '50mins', '50'], explanation: 'From 9:05 to 9:55 is 50 minutes.' },
        { difficulty: 'Medium-Hard', question: 'A flight departs at 10:40 am and arrives at 1:25 pm. How long is the flight?', answer: '2 hours 45 minutes', checkMode: 'auto', correctAnswer: '2hours45minutes', correctAnswers: ['2hours45minutes', '2 hours 45 minutes', '2hr45min', '165minutes', '165'], explanation: 'From 10:40 am to 1:40 pm = 3 hours. But the flight arrives 15 minutes earlier at 1:25 pm, so 3 hours − 15 minutes = 2 hours 45 minutes.' },
        { difficulty: 'Medium-Hard', question: 'A market opens at 11:30 pm and closes at 5:00 am the next day. How long is the market open?', answer: '5 hours 30 minutes', checkMode: 'auto', correctAnswer: '5hours30minutes', correctAnswers: ['5hours30minutes', '5 hours 30 minutes', '5hr30min', '330minutes', '330'], explanation: 'From 11:30 pm to midnight = 30 minutes. From midnight to 5:00 am = 5 hours. Total: 5 hours 30 minutes.' },
        { difficulty: 'Medium-Hard', question: 'Train A travels from 8:10 am to 11:40 am. Train B travels from 9:00 am to 12:15 pm. Which train journey is longer?', answer: 'Train A', checkMode: 'auto', correctAnswer: 'TrainA', correctAnswers: ['TrainA', 'Train A', 'traina', 'A', 'a'], explanation: 'Train A: 8:10 am to 11:40 am = 3 hours 30 minutes (210 minutes). Train B: 9:00 am to 12:15 pm = 3 hours 15 minutes (195 minutes). Since 210 > 195, Train A is longer.' },
        // Block E — Start/end times & word problems (15-17, Hard)
        { difficulty: 'Hard', question: 'A camping trip starts at 11:10 am. It lasts 4 hours 20 minutes. What time does it end?', answer: '3:30 pm', checkMode: 'auto', correctAnswer: '3:30pm', correctAnswers: ['3:30pm', '3:30 pm', '330pm'], explanation: 'Count on from the start time: 11:10 am + 4 hours 20 minutes = 3:30 pm.' },
        { difficulty: 'Hard', question: 'A birthday party ends at 5:00 pm. It lasted 3 hours. What time did it start?', answer: '2:00 pm', checkMode: 'auto', correctAnswer: '2:00pm', correctAnswers: ['2:00pm', '2:00 pm', '200pm'], explanation: 'Count back from the end time: 5:00 pm − 3 hours = 2:00 pm.' },
        { difficulty: 'Hard', question: "Thabo's family drives to the coast. They leave at 5:45 am and the trip normally takes 6 hours, but roadworks add 35 minutes. What time do they arrive?", answer: '12:20 pm', checkMode: 'auto', correctAnswer: '12:20pm', correctAnswers: ['12:20pm', '12:20 pm', '1220pm'], explanation: 'Total travel time = 6 hours + 35 minutes = 6 hours 35 minutes. 5:45 am + 6 hours 35 minutes = 12:20 pm.' },
        // Block F — Multi-step reasoning & justification (18-19, Hard)
        { difficulty: 'Hard', question: 'A farmer starts milking cows at 5:15 am. It takes 1 hour 50 minutes. Then, after a 40-minute breakfast break, he starts feeding the animals, which takes another 1 hour 10 minutes. What time does he finish feeding the animals?', answer: '8:55 am', checkMode: 'auto', correctAnswer: '8:55am', correctAnswers: ['8:55am', '8:55 am', '855am'], explanation: 'Milking: 5:15 am + 1 hour 50 minutes = 7:05 am. Breakfast: 7:05 am + 40 minutes = 7:45 am. Feeding: 7:45 am + 1 hour 10 minutes = 8:55 am.' },
        { difficulty: 'Hard', question: 'Explain why it is important to know whether a time is a.m. or p.m. when solving word problems about duration.', answer: 'a.m. and p.m. tell you whether a time is in the first half or second half of the day. Without knowing this, you could calculate the wrong duration — for example, mixing up 7:00 am and 7:00 pm would give a completely different (and incorrect) answer for how long an activity lasted.', checkMode: 'self' },

        // Block G — History of Time (20-21, Easy-Medium)
        { difficulty: 'Easy', question: 'Which ancient time-measuring tool uses sand trickling through a narrow neck from a top chamber to a bottom chamber to measure a fixed length of time?', answer: 'An hourglass', checkMode: 'auto', correctAnswer: 'hourglass', correctAnswers: ['hourglass', 'an hourglass', 'sand timer', 'sand clock'], explanation: 'An hourglass has two glass chambers joined by a narrow neck. Sand trickles from the top to the bottom at a steady rate, measuring a fixed amount of time, often exactly one hour.' },
        { difficulty: 'Medium', question: 'Explain one reason why modern clocks are more useful in everyday life than a sundial or an hourglass.', answer: 'Modern clocks work at any time of day or night, in any weather, and can measure time continuously and precisely without needing to be watched, refilled, or turned over — unlike a sundial (needs sunlight) or an hourglass (needs to be flipped and only measures a fixed amount of time).', checkMode: 'self' },
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
