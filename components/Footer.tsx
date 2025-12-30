import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`py-20 border-t transition-colors duration-500 ${
      theme === 'dark' ? 'border-white/5 bg-black' : 'border-black/5 bg-white'
    }`}>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
          <div className="max-w-sm">
            <div className="text-3xl font-display font-extrabold tracking-tighter mb-8">CAXI</div>
            <p className="text-lg font-medium opacity-50 leading-relaxed">
              Pioneering the next generation of regional mobility. Secure, efficient, and exceptionally designed.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest opacity-40">Network</div>
              <ul className="space-y-4 font-bold">
                <li><a href="#" className="hover:text-brand-blue transition-colors">Drivers</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Sinai Hub</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest opacity-40">Social</div>
              <div className="flex gap-6">
                <a href="#" className="opacity-50 hover:opacity-100 hover:text-brand-blue transition-all"><Twitter size={20} /></a>
                <a href="https://github.com/caxiapp0-sinai/" className="opacity-50 hover:opacity-100 hover:text-brand-blue transition-all"><Github size={20} /></a>
                <a href="#" className="opacity-50 hover:opacity-100 hover:text-brand-blue transition-all"><Instagram size={20} /></a>
              </div>
            </div>
            <div className="hidden sm:block">
              <button 
                onClick={scrollToTop}
                className={`w-14 h-14 rounded-full border flex items-center justify-center hover:scale-110 active:scale-95 transition-all ${
                  theme === 'dark' ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                }`}
              >
                <ArrowUp size={24} className="opacity-60" />
              </button>
            </div>
          </div>
        </div>

        <div className={`pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.3em] opacity-30 ${
          theme === 'dark' ? 'border-white/5' : 'border-black/5'
        }`}>
          <div>&copy; {new Date().getFullYear()} CAXI TECHNOLOGIES — ALL RIGHTS RESERVED</div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};