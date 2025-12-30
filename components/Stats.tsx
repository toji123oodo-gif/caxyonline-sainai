import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="border-y border-slate-800 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
          
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">50k+</span>
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">App Downloads</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">1.2k+</span>
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Active Drivers</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">98%</span>
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Satisfaction</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">24/7</span>
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Support</span>
          </div>

        </div>
      </div>
    </section>
  );
};