import { BadgePercent, Check } from 'lucide-react';

const tiers = [
  {
    name: 'Sender',
    price: 'From $5',
    highlight: 'Best for one-off and small business shipments',
    features: [
      'Instant, same day, or scheduled',
      'Real-time tracking',
      'Pooled or private runs',
      'Insurance options',
    ],
    cta: 'Request pickup',
  },
  {
    name: 'Traveler',
    price: 'Earn up to $35/hr',
    highlight: 'Bring items along your route and get paid',
    features: [
      'Flexible gigs by neighborhood',
      'Keep 85% of fares',
      'In-app navigation',
      'Tips and bonuses',
    ],
    cta: 'Start earning',
    featured: true,
  },
  {
    name: 'Space',
    price: 'From $2/day',
    highlight: 'Monetize extra space as a micro-hub',
    features: [
      'List shelves, lockers, or rooms',
      'Verified handoffs',
      'Payouts weekly',
      'Inventory logs',
    ],
    cta: 'List your space',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Only pay for what you use. No monthly fees to get started.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-6 ring-1 ring-slate-200 bg-white shadow-sm flex flex-col ${
                tier.featured ? 'lg:scale-105 lg:ring-blue-300 lg:shadow-xl' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                  <p className="text-sm text-slate-600">{tier.highlight}</p>
                </div>
                {tier.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    <BadgePercent size={14} /> Popular
                  </span>
                )}
              </div>

              <div className="mt-6 text-3xl font-bold text-slate-900">{tier.price}</div>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600" /> {f}
                  </li>
                ))}
              </ul>

              <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700">
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
