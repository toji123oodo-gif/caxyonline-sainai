import React from 'react';
import { MapPin, Car, CreditCard } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Set Location",
      desc: "Enter your destination and choose your pickup point on the map."
    },
    {
      icon: Car,
      title: "Choose Ride",
      desc: "Select the vehicle type that fits your needs and budget."
    },
    {
      icon: CreditCard,
      title: "Enjoy & Pay",
      desc: "Relax during your ride and pay seamlessly with cash or card."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-brand-900/10 rounded-full blur-[100px] -z-10"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
             <h2 className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-3">Simple Process</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-white">How Caxi Works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:border-brand-500/50 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-brand-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <step.icon className="w-10 h-10 text-white group-hover:text-brand-400 transition-colors" />
                  <div className="absolute -bottom-3 bg-slate-800 text-slate-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
                    Step 0{idx + 1}
                  </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-slate-400 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};