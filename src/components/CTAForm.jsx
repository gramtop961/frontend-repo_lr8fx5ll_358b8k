import { useState } from 'react';
import { Send } from 'lucide-react';

export default function CTAForm() {
  const [role, setRole] = useState('sender');

  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Join the Portuo network</h2>
          <p className="mt-2 text-white/90">Tell us what you want to do and we’ll get you early access when we launch in your city.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-3" onSubmit={(e) => e.preventDefault()}>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="col-span-1 rounded-xl px-4 py-3 text-slate-900">
              <option value="sender">I want to send</option>
              <option value="traveler">I can carry</option>
              <option value="space">I have space</option>
            </select>
            <input type="email" required placeholder="Email address" className="col-span-2 rounded-xl px-4 py-3 text-slate-900" />
            <button className="col-span-3 inline-flex items-center justify-center gap-2 rounded-xl bg-black/20 hover:bg-black/30 px-5 py-3 font-semibold">
              Request invite <Send size={18} />
            </button>
          </form>
          <p className="mt-3 text-sm text-white/80">No spam. We’ll only contact you about availability and pilot programs.</p>
        </div>
      </div>
    </section>
  );
}
