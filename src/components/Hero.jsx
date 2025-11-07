import { ArrowRight, Star, Users, Shield } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0S1QyMHcVb74Q-3b/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm text-blue-700">
              <Star size={16} className="text-yellow-500" /> Affordability • Flexibility • Community
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Deliver, move, or store anything on demand
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Portuo connects senders, travelers, and local spaces. A super app that blends courier, freight, rides, gig delivery, and micro-storage — powered by AI matching.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700">
                Get started
                <ArrowRight size={18} />
              </a>
              <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-800 font-semibold border hover:bg-slate-50">
                How it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Users className="text-blue-600" size={18} /> Community logistics</div>
              <div className="flex items-center gap-2"><Shield className="text-blue-600" size={18} /> Verified partners</div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/30 to-transparent pointer-events-none rounded-3xl" />
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-2xl">
              <Spline scene="https://prod.spline.design/0S1QyMHcVb74Q-3b/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
