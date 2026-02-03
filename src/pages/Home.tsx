import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#0070f3]/10 to-[#ff4081]/10 blur-3xl -z-10" />

        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            New: Instant Analytics
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Boost your list with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070f3] to-[#ff4081]">
              value-driven resources.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create focused landing pages designed to convert visitors into subscribers. 
            Offer valuable resources in exchange for emails with zero friction.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#0070f3] rounded-full hover:bg-blue-600 transition-all hover:shadow-[0_8px_30px_rgb(0,112,243,0.3)] hover:-translate-y-1"
            >
              Start Building for Free
            </Link>
            <Link 
              to="/demo" 
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:border-slate-300"
            >
              View Demo Page
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-sm shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] p-2">
            <div className="rounded-xl overflow-hidden bg-slate-50 aspect-[16/9] flex items-center justify-center border border-slate-100">
               <div className="text-slate-300 text-sm font-medium">
                  {/* Mock UI Representation */}
                  <div className="w-[80%] h-[80%] bg-white rounded-lg shadow-sm border border-slate-200 p-8 flex gap-8 mx-auto">
                    <div className="flex-1 space-y-4">
                      <div className="h-8 w-3/4 bg-slate-100 rounded" />
                      <div className="h-4 w-full bg-slate-50 rounded" />
                      <div className="h-4 w-5/6 bg-slate-50 rounded" />
                      <div className="mt-8 space-y-2">
                        <div className="h-10 w-full bg-blue-500/10 rounded border border-blue-100" />
                        <div className="h-10 w-full bg-slate-900 rounded" />
                      </div>
                    </div>
                    <div className="hidden md:block w-1/3 bg-gradient-to-br from-blue-100 to-pink-100 rounded-lg" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-slate-500">
              ListBoost cuts through the noise. No complex builders, just high-converting pages that work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Instant Setup</h3>
              <p className="text-slate-500 leading-relaxed">
                Launch your resource page in under 2 minutes. Just upload your file, add a title, and go live.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">High Conversion</h3>
              <p className="text-slate-500 leading-relaxed">
                Distraction-free layouts optimized for one goal: getting that email address in exchange for value.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Instant Delivery</h3>
              <p className="text-slate-500 leading-relaxed">
                We handle the file hosting and secure delivery. Your subscribers get their resource immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-24 text-center">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 blur-[100px] rounded-full pointer-events-none" />
             
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 Ready to grow your audience?
               </h2>
               <p className="text-lg text-slate-300 mb-10">
                 Join thousands of creators using ListBoost to share their knowledge and build their lists.
               </p>
               <Link 
                 to="/signup" 
                 className="inline-block px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-full hover:bg-blue-50 transition-all hover:scale-105"
               >
                 Create Your First Boost
               </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
