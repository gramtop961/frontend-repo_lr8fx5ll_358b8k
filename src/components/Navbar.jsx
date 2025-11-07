import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'How it works', href: '#how' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
              <Rocket size={20} />
            </div>
            <span className="text-xl font-semibold tracking-tight">Portuo</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-blue-700 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-100">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow">
              Get started
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Open Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="block px-2 py-2 rounded-lg hover:bg-slate-100">
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-100">
                Sign in
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700">
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
