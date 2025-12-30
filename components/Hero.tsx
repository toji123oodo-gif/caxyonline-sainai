import React from 'react';
import { Smartphone, Apple, CheckCircle, Car, ArrowRight } from 'lucide-react';
import { APP_LINKS } from '../constants';

interface HeroProps {
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-24 overflow-hidden px-6">
      
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] blur-[160px] opacity-30 ${
          theme === 'dark' ? 'bg-brand-blue/20' : 'bg-brand-blue/10'
        }`}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-emerald/10 blur-[100px]"></div>
        
        {/* Dynamic Road Animation */}
        <div className={`road-container transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          <div className="road-surface"></div>
          <div className="road-marking animate-road-line"></div>
          <div className="road-marking animate-road-line" style={{ animationDelay: '1s' }}></div>
          
          {/* Subtle Car Silhouette */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 opacity-10 animate-car-vibrate">
            <Car size={120} strokeWidth={0.5} className="rotate-0" />
            <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full blur-xl ${theme === 'dark' ? 'bg-brand-blue/40' : 'bg-brand-blue/20'}`}></div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10 text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-10 animate-fade-in ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'
        }`}>
          <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-[0.25em] opacity-80">Direct from Sinai HQ</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-display font-extrabold tracking-tight leading-[0.9] mb-8 animate-slide-up">
          <span className="gradient-text">Arrive with</span> <br/>
          <span className="text-brand-blue italic">Distinction.</span>
        </h1>

        <p className={`max-w-2xl mx-auto text-lg md:text-2xl font-medium leading-relaxed mb-16 animate-slide-up delay-150 opacity-60`}>
          The fusion of advanced logistics and refined travel. Experience the safest, most efficient ride-hailing network in the region.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up delay-300">
          <a 
            href={APP_LINKS.android}
            className="group flex items-center gap-4 px-10 py-5 bg-brand-blue text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-blue/30"
          >
            <Smartphone size={24} />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest opacity-70">Download Official</div>
              <div className="text-base leading-tight">Android APK</div>
            </div>
            <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
          
          <a 
            href={APP_LINKS.ios}
            className={`group flex items-center gap-4 px-10 py-5 border font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 ${
              theme === 'dark' ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
            }`}
          >
            <Apple size={24} />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest opacity-70">Public Beta</div>
              <div className="text-base leading-tight">iOS TestFlight</div>
            </div>
            <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="mt-32 relative animate-slide-up delay-500">
          <div className={`relative mx-auto w-full max-w-5xl p-3 rounded-[3rem] border transition-all duration-500 overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5 shadow-2xl shadow-black/5'
          }`}>
            <div className={`aspect-[21/9] w-full rounded-[2.2rem] overflow-hidden relative group`}>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=2070" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Caxi Fleet" 
              />
              
              <div className="absolute bottom-10 left-10 z-20 flex gap-16 text-left">
                <div className="space-y-1">
                  <div className="text-brand-blue font-bold text-4xl md:text-5xl tracking-tighter">12k+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Daily Trips</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-bold text-4xl md:text-5xl tracking-tighter">4.9/5</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">User Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating UI Widget */}
          <div className={`absolute -bottom-10 -right-6 hidden lg:block p-6 rounded-3xl w-72 shadow-2xl animate-float transition-all duration-500 z-30 ${
            theme === 'dark' ? 'bg-black border border-white/10' : 'bg-white border border-black/5'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center">
                <CheckCircle className="text-brand-emerald" size={24} />
              </div>
              <div>
                <div className="text-sm font-bold">Secure Node Active</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">Identity Verified</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-current opacity-10 rounded-full"></div>
              <div className="h-2 w-2/3 bg-brand-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};