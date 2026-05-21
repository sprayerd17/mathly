import Link from 'next/link'
import Navbar from '@/app/components/Navbar'

const TABLE_FEATURES = [
  { label: 'Study guides',           free: true,  pro: true,  guided: true  },
  { label: 'Practice questions',     free: true,  pro: true,  guided: true  },
  { label: 'Answers',                free: false, pro: true,  guided: true  },
  { label: 'All topics & grades',    free: false, pro: true,  guided: true  },
  { label: 'Weekly topic queries',   free: false, pro: false, guided: true  },
  { label: 'Expert group responses', free: false, pro: false, guided: true  },
]

function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-[#1e40af] mx-auto"
      aria-label="Included"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Dash() {
  return (
    <span className="block text-gray-300 text-lg leading-none mx-auto w-fit" aria-label="Not included">
      —
    </span>
  )
}

function FoundingBadge() {
  return (
    <span
      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
      style={{ background: '#fef3c7', color: '#92400e', border: '1px solid #fcd34d' }}
    >
      ★ Founding Member
    </span>
  )
}

function SpotCounter({ remaining, total }: { remaining: number; total: number }) {
  const taken = total - remaining
  const pct = Math.round((taken / total) * 100)
  return (
    <div className="mt-4 mb-5">
      <p className="text-xs font-semibold text-gray-500 mb-1.5">
        <span style={{ color: '#b45309', fontWeight: 700 }}>{remaining}</span> of {total} spots remaining
      </p>
      <div className="w-full h-2 rounded-full" style={{ background: '#fef3c7' }}>
        <div
          className="h-2 rounded-full"
          style={{ width: `${pct}%`, background: '#f59e0b' }}
        />
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1">

        {/* Launch banner */}
        <div
          className="w-full py-3 px-6 text-center text-sm font-semibold"
          style={{ background: '#0f1f3d', color: '#f59e0b' }}
        >
          ★ Founding Member Launch — Limited spots available. Lock in your rate for life before they are gone.
        </div>

        {/* Hero */}
        <section className="pt-16 pb-12 px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ color: '#0f1f3d' }}
          >
            Simple, affordable packages
          </h1>
          <p className="text-lg text-gray-500 max-w-md mx-auto">
            No hidden fees. Cancel anytime. Pick the option that works for you.
          </p>
        </section>

        {/* Cards */}
        <section className="px-6 pb-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Free */}
            <div
              className="relative flex flex-col rounded-2xl bg-white shadow-sm"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <div className="p-7 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>
                  Free
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold" style={{ color: '#0f1f3d' }}>R0</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
                <ul className="space-y-3 flex-1 mb-4 mt-4">
                  {['2 topics per grade to get you started', 'Study guides and practice questions'].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }} aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mb-6">No credit card required. Upgrade anytime.</p>
                <button
                  className="w-full font-semibold py-3 rounded-xl text-sm transition-colors"
                  style={{ backgroundColor: '#0f1f3d', color: '#fff' }}
                >
                  Start for Free
                </button>
              </div>
            </div>

            {/* Pro — Founding Member */}
            <div
              className="relative flex flex-col rounded-2xl bg-white shadow-sm"
              style={{ border: '2px solid #1e40af' }}
            >
              <div className="p-7 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1e40af' }}>
                  Pro
                </p>
                <FoundingBadge />
                <div className="mb-1">
                  <span className="text-sm line-through" style={{ color: '#9ca3af' }}>R49/month</span>
                </div>
                <div className="mb-1 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold" style={{ color: '#0f1f3d' }}>R29</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-xs font-semibold mb-1" style={{ color: '#b45309' }}>
                  Your rate for life — never increases
                </p>
                <SpotCounter remaining={67} total={100} />
                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    'Full access to all topics, all grades',
                    'Study guides, practice questions and answers',
                    'Cancel anytime',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }} aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full font-semibold py-3 rounded-xl text-sm transition-colors"
                  style={{ backgroundColor: '#1e40af', color: '#fff' }}
                >
                  Claim Your Spot
                </button>
              </div>
            </div>

            {/* Guided — Founding Member + Most Popular */}
            <div
              className="relative flex flex-col rounded-2xl bg-white shadow-sm"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#1e40af] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>
                  Guided
                </p>
                <FoundingBadge />
                <div className="mb-1">
                  <span className="text-sm line-through" style={{ color: '#9ca3af' }}>R99/month</span>
                </div>
                <div className="mb-1 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold" style={{ color: '#0f1f3d' }}>R59</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-xs font-semibold mb-1" style={{ color: '#b45309' }}>
                  Your rate for life — never increases
                </p>
                <SpotCounter remaining={43} total={100} />
                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    'Everything in Pro',
                    'Submit weekly topic queries',
                    'Grouped expert responses sent to you',
                    'Structured support without the tutor price tag',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }} aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full font-semibold py-3 rounded-xl text-sm transition-colors"
                  style={{ backgroundColor: '#0f1f3d', color: '#fff' }}
                >
                  Claim Your Spot
                </button>
              </div>
            </div>

          </div>

          {/* Reassurance */}
          <p className="text-center text-sm text-gray-400 mt-8">
            All paid packages include a 7-day free trial. No contracts, no commitments.
          </p>
        </section>

        {/* Comparison table */}
        <section className="px-6 pt-16 pb-12 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8" style={{ color: '#0f1f3d' }}>
            What&apos;s included
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-4 pr-6 font-semibold text-gray-400 uppercase tracking-wide text-xs w-2/5">
                    Feature
                  </th>
                  {[
                    { name: 'Free', price: 'R0', highlighted: false },
                    { name: 'Pro', price: 'R29*', highlighted: true },
                    { name: 'Guided', price: 'R59*', highlighted: false },
                  ].map((col) => (
                    <th
                      key={col.name}
                      className="pb-4 px-3 font-bold text-center text-xs uppercase tracking-wide"
                      style={{ color: col.highlighted ? '#1e40af' : '#0f1f3d' }}
                    >
                      <span className="block">{col.name}</span>
                      <span className="block font-normal text-gray-400 normal-case tracking-normal mt-0.5">{col.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_FEATURES.map((row, i) => (
                  <tr
                    key={row.label}
                    style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8fafc' }}
                  >
                    <td className="py-3.5 pr-6 text-gray-700 font-medium rounded-l-lg pl-4">
                      {row.label}
                    </td>
                    <td className="py-3.5 px-3 text-center">{row.free   ? <Check /> : <Dash />}</td>
                    <td className="py-3.5 px-3 text-center">{row.pro    ? <Check /> : <Dash />}</td>
                    <td className="py-3.5 px-3 text-center rounded-r-lg">{row.guided ? <Check /> : <Dash />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-right">* Founding Member rate</p>

          {/* Live Classes horizontal card */}
          <div
            className="mt-10 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            style={{ background: '#0f1f3d' }}
          >
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#93c5fd' }}>
                Live Classes
              </p>
              <p className="text-sm" style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
                Drop-in live sessions for Grades 8 to 12. One topic per week per grade.
                Pay only for what you attend — no subscription needed.
              </p>
            </div>
            <div className="text-center shrink-0">
              <span className="text-4xl font-bold text-white">R100</span>
              <span className="text-sm ml-1" style={{ color: '#94a3b8' }}>per session</span>
            </div>
            <div className="shrink-0">
              <Link
                href="/live-classes"
                className="inline-block font-semibold py-3 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
                style={{ background: '#ffffff', color: '#0f1f3d' }}
              >
                View Upcoming Classes
              </Link>
            </div>
          </div>
        </section>

        {/* Why Founding Member */}
        <section className="px-6 pb-24 max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{ background: '#0f1f3d' }}
          >
            <h2 className="text-xl font-bold mb-6 text-center" style={{ color: '#f59e0b' }}>
              Why become a Founding Member?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: '🔒',
                  text: 'Lock in your rate for life — price never increases for you',
                },
                {
                  icon: '🌱',
                  text: 'Support Mathly from the start and help shape its future',
                },
                {
                  icon: '⏳',
                  text: 'Limited to 100 members per tier — once spots are gone, they are gone',
                },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center text-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
