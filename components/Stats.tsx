import React from 'react';

interface StatsProps {
  theme: 'dark' | 'light';
}

export const Stats: React.FC<StatsProps> = ({ theme }) => {
  const stats = [
    { label: 'Active Riders', value: '50k+', sub: 'Across Sinai' },
    { label: 'Avg. Pickup', value: '< 4 min', sub: 'In urban zones' },
    { label: 'Safety Score', value: '99.9%', sub: 'Incident-free' },
    { label: 'Global Fleet', value: '1.2k+', sub: 'Premium Vehicles' },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 p-12 rounded-[3rem] border transition-all duration-500 ${
          theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-black/[0.02] border-black/5'
        }`}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-brand-blue">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">
                {stat.label}
              </div>
              <div className="text-[10px] uppercase tracking-widest opacity-40">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};