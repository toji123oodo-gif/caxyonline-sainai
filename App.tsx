import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { DownloadButtons } from './components/DownloadButtons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-500 selection:text-white font-sans overflow-x-hidden">
      <div className="bg-noise"></div>
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        
        {/* Bottom CTA Section */}
        <section className="py-32 relative overflow-hidden bg-slate-900 border-t border-slate-800">
             {/* Abstract background shapes */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
             
             <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    Your city, unlocked.
                 </h2>
                 <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                     Join the thousands of people in Sinai who rely on Caxi for their daily commute, weekend outings, and airport transfers.
                 </p>
                 <div className="flex justify-center">
                     <DownloadButtons variant="primary" />
                 </div>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;