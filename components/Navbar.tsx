import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight } from 'lucide-react';
import { LOGO_URL, APP_LINKS } from '../constants';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6 px-6`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-3xl premium-blur border transition-all duration-500 ${
        scrolled 
          ? (theme === 'dark' ? 'bg-black/40 border-white/10 shadow-2xl' : 'bg-white/40 border-black/5 shadow-xl')
          : 'bg-transparent border-transparent'
      }`}>
        <div className="flex items-center gap-4">
          <img src={LOGO_URL} alt="Caxi" className="w-10 h-10 object-contain rounded-xl" />
          <span className="font-display font-extrabold text-2xl tracking-tighter hidden sm:block">CAXI</span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {['Experience', 'Security', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-semibold tracking-tight transition-all hover:text-brand-blue ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-current/10">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all hover:scale-110 active:scale-90 ${
                theme === 'dark' ? 'bg-white/5 text-white' : 'bg-black/5 text-black'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href={APP_LINKS.android}
              className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 ${
                theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
              }`}
            >
              Join Nexus <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};