import { Route, Package, Clock, Handshake } from 'lucide-react';

const features = [
  {
    icon: Route,
    title: 'Dynamic routing',
    desc: 'AI matches routes across senders, travelers, and local hubs for faster, cheaper moves.'
  },
  {
    icon: Package,
    title: 'Any item, any size',
    desc: 'From documents to furniture to pallets. Choose bikes, cars, vans, or trucks.'
  },
  {
    icon: Clock,
    title: 'On your schedule',
    desc: 'Immediate, same day, or scheduled. Pay per task or share rides to cut costs.'
  },
  {
    icon: Handshake,
    title: 'Community logistics',
    desc: 'Neighbors, shops, and co-ops become micro-hubs for storage and handoffs.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for affordability and flexibility</h2>
          <p className="mt-3 text-slate-600">Smart batching, pooled capacity, and transparent pricing keep costs low for everyone.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-blue-50 text-blue-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
