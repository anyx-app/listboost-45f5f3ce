import { Outlet, Link } from 'react-router-dom';

export default function AppShell() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#0070f3] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0070f3] to-[#ff4081] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              L
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">ListBoost</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-sm font-medium text-slate-600 hover:text-[#0070f3] transition-colors">Features</Link>
            <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-[#0070f3] transition-colors">Pricing</Link>
            <Link to="/resources" className="text-sm font-medium text-slate-600 hover:text-[#0070f3] transition-colors">Resources</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Sign in
            </Link>
            <Link 
              to="/signup" 
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#0070f3] rounded-full hover:bg-blue-600 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-[#0070f3] to-[#ff4081]" />
                <span className="font-bold text-lg text-slate-900">ListBoost</span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Focused landing pages designed to convert visitors into subscribers effortlessly.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Features</Link></li>
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Templates</Link></li>
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Integrations</Link></li>
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Guide</Link></li>
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Help Center</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">About</Link></li>
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Careers</Link></li>
                <li><Link to="#" className="hover:text-[#0070f3] transition-colors">Legal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} ListBoost. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-slate-600">Privacy Policy</Link>
              <Link to="#" className="hover:text-slate-600">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
