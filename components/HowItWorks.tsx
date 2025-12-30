import React from 'react';
import { MapPin, ShieldCheck, Zap } from 'lucide-react';

interface HowItWorksProps {
  theme: 'dark' | 'light';
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ theme }) => {
  const steps = [
    {
      icon: MapPin,
      title: "Select Destination",
      desc: "Intuitive interface that understands regional landmarks effortlessly.",
      color: "text-brand-blue"
    },
    {
      icon: ShieldCheck,
      title: "Verified Dispatch",
      desc: "Our AI matches you with the highest-rated driver in your immediate vicinity.",
      color: "text-brand-emerald"
    },
    {
      icon: Zap,
      title: "Elite Transit",
      desc: "Enjoy a silent, secure, and premium journey to your destination.",
      color: "text-brand-blue"
    }
  ];

  return (
    <section className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-tight">
              Sophistication <br/>
              <span className="opacity-40">in every click.</span>
            </h2>
            <p className="text-xl opacity-60 max-w-lg leading-relaxed">
              We've stripped away the noise to leave you with a pure, high-performance mobility tool. 
              Designed for those who value time and tranquility.
            </p>
            <div className="pt-8 space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all group-hover:scale-110 ${
                    theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-black/5 bg-black/5'
                  }`}>
                    <step.icon size={20} className={step.color} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="opacity-50 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className={`relative aspect-[4/5] rounded-[4rem] overflow-hidden border transition-all duration-700 ${
              theme === 'dark' ? 'border-white/10' : 'border-black/10'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-1000"
                alt="Premium Interior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-3xl border-white/10 backdrop-blur-2xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2">Live Fleet Status</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-bold text-white">Sharm El Sheikh</div>
                    <div className="text-xs text-white/40">14 Available Drivers Nearby</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center animate-pulse">
                    <Zap size={20} className="text-white" />
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