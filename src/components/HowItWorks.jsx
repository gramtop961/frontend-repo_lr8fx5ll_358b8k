import { MapPin, Package, Truck, Warehouse, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: 'Post what you need',
    desc: 'Choose pickup, drop-off, timing, and item size. One-off or recurring.'
  },
  {
    icon: MapPin,
    title: 'We match the best route',
    desc: 'AI blends couriers, travelers, and nearby hubs to optimize speed and cost.'
  },
  {
    icon: Truck,
    title: 'Track in real time',
    desc: 'Live updates from pickup to handoff. Message your partner as needed.'
  },
  {
    icon: Warehouse,
    title: 'Handoff or store locally',
    desc: 'Use verified micro-hubs for short-term storage and flexible pickups.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">A simple flow that adapts to deliveries, rides, freight, and micro-storage.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center text-sm font-bold shadow">
                {i + 1}
              </div>
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-blue-50 text-blue-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-600">
          <ShieldCheck className="text-blue-600" size={18} /> All partners verified with ID, reviews, and insurance options.
        </div>
      </div>
    </section>
  );
}
