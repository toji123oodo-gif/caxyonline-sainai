import React, { useEffect, useState } from 'react';
import { LOGO_URL } from '../constants';
import { MapPin, Radio, Wifi, ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM");
  const [activeIcon, setActiveIcon] = useState(0);

  const statusMessages = [
    "INITIALIZING SYSTEM...",
    "ESTABLISHING SECURE CONNECTION...",
    "CALIBRATING GPS SATELLITES...",
    "LOCATING DRIVERS IN SINAI...",
    "OPTIMIZING ROUTES...",
    "READY TO LAUNCH"
  ];

  useEffect(() => {
    const duration = 3000; 
    const intervalTime = 20; 
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Cycle through status messages and icons
    const messageInterval = setInterval(() => {
      setProgress((currentProgress) => {
        const index = Math.min(
          Math.floor((currentProgress / 100) * statusMessages.length),
          statusMessages.length - 1
        );
        setStatusText(statusMessages[index]);
        setActiveIcon(index % 4);
        return currentProgress; // Just reading state, not modifying
      });
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(messageInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(onComplete, 800);
      }, 600);
    }
  }, [progress, onComplete]);

  // Icons for the HUD
  const icons = [Wifi, MapPin, Radio, ShieldCheck];
  const CurrentIcon = icons[activeIcon];

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center overflow-hidden transition-all duration-800 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-110 blur-xl pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Grid Ambience */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform-origin:center] animate-[spin_60s_linear_infinite]"></div>
      </div>
      
      {/* Deep Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[100px] animate-pulse"></div>

      {/* Main HUD Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg">
        
        {/* Central Animation Area */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-10">
          
          {/* Outer Ring - Reverse Spin */}
          <div className="absolute inset-0 border border-slate-700/50 rounded-full animate-spin-reverse opacity-40 border-dashed"></div>
          
          {/* Middle Ring - Slow Spin */}
          <div className="absolute inset-4 border-[2px] border-t-brand-500/50 border-r-transparent border-b-brand-500/50 border-l-transparent rounded-full animate-spin-slow"></div>
          
          {/* Inner Ring - Fast Spin */}
          <div className="absolute inset-8 border border-slate-600 rounded-full animate-[spin_3s_linear_infinite] opacity-30"></div>

          {/* Glowing Pulse Ring */}
          <div className="absolute inset-0 rounded-full border border-brand-500/20 animate-ping-slow"></div>

          {/* Logo Container */}
          <div className="relative z-20 bg-slate-950/50 backdrop-blur-sm rounded-full p-6 border border-slate-700/50 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
            <img 
              src={LOGO_URL} 
              alt="Loading" 
              className="w-20 h-20 object-contain animate-float"
              style={{ animationDuration: '3s' }}
            />
          </div>
          
          {/* Orbiting Dot */}
          <div className="absolute inset-0 animate-spin">
             <div className="h-2 w-2 bg-brand-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(45,212,191,1)]"></div>
          </div>
        </div>

        {/* Text & Data Area */}
        <div className="flex flex-col items-center space-y-4 w-full px-8">
          
          {/* Status Line */}
          <div className="flex items-center gap-3 text-brand-400">
             <CurrentIcon className="w-4 h-4 animate-bounce" />
             <span className="font-mono text-sm tracking-[0.2em] uppercase text-brand-300 animate-pulse">
               {statusText}
             </span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative max-w-xs">
            {/* The Bar */}
            <div 
              className="h-full bg-brand-500 shadow-[0_0_15px_rgba(20,184,166,0.8)] relative transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/80 box-content shadow-[0_0_10px_white]"></div>
            </div>
          </div>

          {/* Bottom Data Row */}
          <div className="flex justify-between w-full max-w-xs text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            <span>Ver: 2.0.4-Beta</span>
            <span>Secured: TLS 1.3</span>
            <span className="text-brand-500">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};