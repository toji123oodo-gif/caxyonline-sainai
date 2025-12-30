import React from 'react';
import { ShieldCheck, Zap, Wallet, Clock, MapPin, Smile, Smartphone, Globe, ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" id="features">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-500 font-bold tracking-wider uppercase text-xs mb-4 px-4 py-1 rounded-full bg-brand-900/20 border border-brand-900/50 inline-block">Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything you need. <br/> 
            <span className="text-slate-500">Nothing you don't.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            We've redesigned the ride-hailing experience from the ground up to be faster, safer, and more affordable for everyone in Sinai.
          </p>
        </div>

        {/* Bento Grid Layout - Enhanced Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            
            {/* Feature 1 - Large */}
            <div className="md:col-span-2 rounded-[2rem] p-8 md:p-10 bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-brand-500/20"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-500 group-hover:border-brand-400">
                            <Zap className="w-7 h-7 text-brand-400 group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Lightning Fast Matching</h4>
                        <p className="text-slate-400 max-w-lg text-lg">Our AI-powered dispatch system connects you with the nearest driver in seconds, reducing wait times by up to 40%.</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-brand-400 mt-8 font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                        <span>Learn about our tech</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Feature 2 - Tall */}
            <div className="md:row-span-2 rounded-[2rem] p-8 md:p-10 bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between backdrop-blur-sm">
                 <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div>
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-500 group-hover:border-brand-400">
                        <ShieldCheck className="w-7 h-7 text-brand-400 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Safety First</h4>
                    <p className="text-slate-400 leading-relaxed">Every trip is tracked, and every driver is vetted. Share your live location with loved ones instantly. 24/7 support is always one tap away.</p>
                 </div>
                 
                 <div className="mt-10 relative">
                    <div className="absolute inset-0 bg-brand-500/20 blur-xl"></div>
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700/80 w-full relative z-10 shadow-xl">
                        <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                            <span className="text-xs font-mono text-slate-300 tracking-widest">LIVE TRACKING</span>
                        </div>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-xs text-slate-500">Driver</span>
                            <span className="text-xs text-white font-bold">Arriving in 2m</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-500 w-[85%] rounded-full"></div>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Feature 3 - Standard */}
            <div className="rounded-[2rem] p-8 bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-all duration-500 group backdrop-blur-sm">
                 <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-500 group-hover:border-brand-400">
                    <Wallet className="w-6 h-6 text-brand-400 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Transparent Pricing</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Know exactly what you pay before you book. No hidden fees, ever. Pay with Cash or Card.</p>
            </div>

            {/* Feature 4 - Standard */}
            <div className="rounded-[2rem] p-8 bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-all duration-500 group backdrop-blur-sm">
                 <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-500 group-hover:border-brand-400">
                    <Globe className="w-6 h-6 text-brand-400 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Sinai Wide Coverage</h4>
                <p className="text-slate-400 text-sm leading-relaxed">From the busy city center to the quiet coast, we have verified drivers positioned everywhere.</p>
            </div>

             {/* Feature 5 - Wide */}
             <div className="md:col-span-2 rounded-[2rem] p-8 md:p-10 bg-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-500 group-hover:border-brand-400">
                            <Smartphone className="w-7 h-7 text-brand-400 group-hover:text-white" />
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Super Intuitive App</h4>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">Designed for humans. Book a ride in just 3 taps. Save your favorite locations for even faster booking next time.</p>
                        <button className="text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition-colors border border-slate-700">
                            View Screens
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center perspective-container">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-3xl border border-slate-700 shadow-2xl -rotate-6 group-hover:rotate-0 transition-all duration-500 transform hover:scale-105">
                             <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl mb-3 w-72 border border-slate-800 shadow-inner">
                                <div className="p-2 bg-brand-500/10 rounded-lg">
                                    <MapPin className="text-brand-500 w-5 h-5" />
                                </div>
                                <div>
                                    <div className="h-2 w-24 bg-slate-700 rounded mb-1.5"></div>
                                    <div className="h-2 w-36 bg-slate-800 rounded"></div>
                                </div>
                             </div>
                             <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl w-72 border border-slate-800 shadow-inner opacity-80">
                                <div className="p-2 bg-brand-500/10 rounded-lg">
                                    <Clock className="text-brand-500 w-5 h-5" />
                                </div>
                                <div>
                                    <div className="h-2 w-20 bg-slate-700 rounded mb-1.5"></div>
                                    <div className="h-2 w-28 bg-slate-800 rounded"></div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};