import React from 'react';
import { DownloadButtons } from './DownloadButtons';
import { PhoneMockup } from './PhoneMockup';
import { Star, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[110vh] pt-32 pb-20 lg:pt-48 flex items-center overflow-hidden perspective-container">
        
        {/* Animated Background Grid */}
        <div className="grid-floor pointer-events-none opacity-40"></div>

        {/* Dynamic Background Lighting */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-[-20%] w-[1000px] h-[1000px] bg-blue-800/10 rounded-full blur-[150px] mix-blend-screen"></div>
            {/* Center glow behind phone area */}
            <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-4">
                
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left max-w-3xl">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md text-brand-200 text-sm font-semibold mb-10 shadow-lg shadow-brand-900/20 hover:border-brand-500/30 transition-colors group cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500 group-hover:bg-brand-400 transition-colors"></span>
                        </span>
                        <span className="tracking-wide uppercase text-xs font-bold">Now Live in Sinai</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] font-extrabold tracking-tight text-white mb-8 leading-[0.95] drop-shadow-2xl">
                        Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-brand-300 animate-shimmer bg-[length:200%_auto]">
                            in Motion.
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                        <span className="text-white font-medium">Caxi</span> is the next-generation ride hailing platform. 
                        Instant matching. Verified drivers. Premium service.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 mb-16">
                        <DownloadButtons className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-300" />
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-slate-800/50 pt-10">
                         <div className="flex flex-col items-start gap-1">
                             <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span>&lt; 3 min</span>
                             </div>
                             <span className="text-slate-500 text-sm">Average Pickup</span>
                        </div>
                        <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
                        <div className="flex flex-col items-start gap-1">
                             <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                <span>Verified</span>
                             </div>
                             <span className="text-slate-500 text-sm">Pro Drivers Only</span>
                        </div>
                         <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
                        <div className="flex flex-col items-start gap-1">
                             <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <Star className="w-5 h-5 text-brand-400 fill-brand-400" />
                                <span>4.9/5</span>
                             </div>
                             <span className="text-slate-500 text-sm">Rider Rating</span>
                        </div>
                    </div>
                </div>

                {/* Right Content (Phone) */}
                <div className="flex-1 relative w-full flex justify-center lg:justify-end lg:pr-8">
                     {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-800/30 rounded-full animate-spin-slow" style={{animationDuration: '30s'}}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-slate-700/30 rounded-full animate-spin-reverse" style={{animationDuration: '25s'}}></div>
                    
                    <PhoneMockup />
                    
                    {/* Floating Context Cards - Refined */}
                    <div className="absolute -left-12 top-[30%] p-4 pr-6 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl animate-float hidden xl:block z-20 hover:scale-105 transition-transform cursor-default">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/30">
                                3
                            </div>
                            <div>
                                <p className="text-[10px] text-brand-200 uppercase font-bold tracking-wider">Minutes Away</p>
                                <p className="text-lg font-bold text-white">Driver Arriving</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-4 bottom-[20%] p-4 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl animate-float hidden xl:block z-20 hover:scale-105 transition-transform cursor-default" style={{ animationDelay: '2.5s' }}>
                         <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-500 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Driver" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-white text-slate-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-slate-200">
                                    4.9★
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Your Driver</p>
                                <p className="text-base font-bold text-white">Mohamed A.</p>
                                <p className="text-xs text-slate-500">Toyota Corolla • White</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};