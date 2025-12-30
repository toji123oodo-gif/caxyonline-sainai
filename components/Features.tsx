import React, { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Target, Cpu, Map, Users } from 'lucide-react';

interface FeaturesProps {
  theme: 'dark' | 'light';
}

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Booking",
    desc: "One tap to summon the most reliable transport network in the region.",
    large: true
  },
  {
    icon: Shield,
    title: "Vetted Drivers",
    desc: "Rigorous background checks and biometric verification for your safety.",
    large: false
  },
  {
    icon: Map,
    title: "Local Expertise",
    desc: "Drivers who know Sinai's terrain like the back of their hand.",
    large: false
  },
  {
    icon: Target,
    title: "Precise Timing",
    desc: "Advanced predictive algorithms ensure you're never waiting.",
    large: true
  },
  {
    icon: Users,
    title: "Elite Community",
    desc: "Join a growing network of premium travelers and professionals.",
    large: false
  },
  {
    icon: Cpu,
    title: "AI Logistics",
    desc: "Real-time demand forecasting keeps the fleet optimized 24/7.",
    large: false
  }
];

export const Features: React.FC<FeaturesProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-40 px-6 bg-transparent relative overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8 leading-tight">
            Designed to <span className="text-brand-blue">outperform</span> standard solutions.
          </h2>
          <p className="text-xl font-medium opacity-60 leading-relaxed">
            Every feature is engineered to provide a seamless transition between your origin and destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div 
              key={i} 
              style={{ 
                animationDelay: `${i * 100}ms`,
                opacity: isVisible ? 1 : 0 
              }}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 group hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : ''
              } ${
                f.large ? 'md:col-span-2' : 'md:col-span-1'
              } ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-black/5 border-black/5 hover:bg-black/10'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${
                theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
              }`}>
                <f.icon className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-lg font-medium opacity-50 leading-relaxed max-w-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};