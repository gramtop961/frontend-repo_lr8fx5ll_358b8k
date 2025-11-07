import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTAForm from './components/CTAForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <CTAForm />
      <footer className="py-10 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Portuo. Community-powered logistics.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-700">Privacy</a>
            <a href="#" className="hover:text-blue-700">Terms</a>
            <a href="#" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
