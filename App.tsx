import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('caxi-theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('caxi-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-brand-dark text-white' : 'bg-brand-light text-black'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero theme={theme} />
        <Stats theme={theme} />
        <Features theme={theme} />
        <HowItWorks theme={theme} />
        
        {/* Modern Call to Action */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center border transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-white/5 to-transparent border-white/10' 
                : 'bg-gradient-to-br from-black/5 to-transparent border-black/5 shadow-2xl shadow-black/5'
            }`}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[120px] -z-10"></div>
              
              <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mb-8 leading-tight">
                Ready to elevate your <br/>
                <span className="text-brand-blue">travel experience?</span>
              </h2>
              
              <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium opacity-60`}>
                Join the network of thousands already moving smarter across Sinai. Download Caxi today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://github.com/caxiapp0-sinai/CaxiApp/releases/latest/download/app-release.apk"
                  className="w-full sm:w-auto px-12 py-5 bg-brand-blue text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-blue/20"
                >
                  Download Android APK
                </a>
                <a 
                  href="https://testflight.apple.com/join/2XAXzV74"
                  className={`w-full sm:w-auto px-12 py-5 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all border ${
                    theme === 'dark' ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
                  }`}
                >
                  iOS TestFlight Join
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default App;