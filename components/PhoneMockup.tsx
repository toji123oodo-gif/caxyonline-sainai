import React from 'react';
import { MapPin, Car, Menu, Bell, Navigation } from 'lucide-react';
import { LOGO_URL } from '../constants';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-slate-800 bg-slate-900 border-[10px] rounded-[3rem] h-[680px] w-[340px] shadow-[0_20px_70px_-20px_rgba(20,184,166,0.4)] animate-float z-10 ring-1 ring-slate-700/50">
      
      {/* Reflection Highlight */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent rounded-r-[2.5rem] pointer-events-none z-20"></div>

      {/* Side Buttons */}
      <div className="absolute -right-[13px] top-[140px] w-[3px] h-[60px] bg-slate-700 rounded-r-lg shadow-lg"></div>
      <div className="absolute -left-[13px] top-[120px] w-[3px] h-[40px] bg-slate-700 rounded-l-lg shadow-lg"></div>
      <div className="absolute -left-[13px] top-[180px] w-[3px] h-[60px] bg-slate-700 rounded-l-lg shadow-lg"></div>

      {/* Dynamic Island / Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50"></div>
          <div className="w-10 h-1.5 rounded-full bg-slate-800/50"></div>
      </div>
      
      {/* Screen Content */}
      <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-slate-900 relative flex flex-col">
        
        {/* Map Layer */}
        <div className="absolute inset-0 bg-slate-800">
           {/* Simulated Map */}
           <div className="w-full h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center grayscale contrast-125 mix-blend-luminosity"></div>
           
           {/* Dark Overlay gradient */}
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900/90"></div>
        </div>
        
        {/* App UI Overlay */}
        <div className="relative z-10 flex flex-col h-full pointer-events-none">
          
          {/* Status Bar Area */}
          <div className="h-14 w-full"></div>

          {/* Header */}
          <div className="px-6 flex justify-between items-center mb-6">
            <div className="p-3 bg-slate-950/40 backdrop-blur-xl rounded-full shadow-lg border border-white/10">
                <Menu className="w-5 h-5 text-white" />
            </div>
             {/* Logo in App Header */}
            <div className="h-10 w-10 bg-slate-950/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 shadow-lg">
                 <img src={LOGO_URL} alt="Logo" className="w-6 h-6 object-contain" />
            </div>
            <div className="p-3 bg-slate-950/40 backdrop-blur-xl rounded-full shadow-lg border border-white/10 relative">
                <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></div>
                <Bell className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Map Elements (Interactive look) */}
          <div className="flex-1 relative">
            
            {/* Radar Effect around User */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-brand-500/5 rounded-full animate-pulse blur-xl"></div>
            
            {/* User Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
                {/* 3D Pin Effect */}
                <div className="relative z-10">
                     <div className="absolute inset-0 bg-brand-400 blur-lg opacity-40"></div>
                     <div className="relative bg-slate-950 p-1.5 rounded-full shadow-2xl shadow-brand-500/50 border border-slate-700">
                        <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-3 rounded-full">
                             <Navigation className="w-6 h-6 fill-white text-white drop-shadow-md" />
                        </div>
                    </div>
                </div>
                
                <div className="mt-3 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/50 shadow-xl transform translate-y-2">
                    <span className="text-[10px] font-bold text-white tracking-wide uppercase">Your Location</span>
                </div>
            </div>

            {/* Nearby Cars */}
            <div className="absolute top-[20%] right-10 transform rotate-12 transition-all duration-1000 animate-float" style={{animationDuration: '4s'}}>
                <div className="bg-slate-900 p-2 rounded-xl shadow-xl border border-slate-700 flex items-center gap-1">
                     <Car className="w-3 h-3 text-brand-400" />
                     <span className="text-[8px] font-bold text-white">3m</span>
                </div>
            </div>
             <div className="absolute bottom-[35%] left-8 transform -rotate-12 transition-all duration-1000 animate-float" style={{animationDuration: '5s'}}>
                 <div className="bg-slate-900 p-2 rounded-xl shadow-xl border border-slate-700 flex items-center gap-1">
                     <Car className="w-3 h-3 text-brand-400" />
                     <span className="text-[8px] font-bold text-white">5m</span>
                </div>
            </div>

          </div>

          {/* Bottom Sheet */}
          <div className="bg-slate-950/80 backdrop-blur-2xl rounded-t-[2.5rem] p-6 shadow-[0_-10px_60px_-15px_rgba(0,0,0,1)] border-t border-white/5 pt-3 pb-8 relative overflow-hidden">
             
             {/* Glow behind sheet */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-brand-500/10 blur-[50px] pointer-events-none"></div>

             <div className="w-12 h-1 bg-slate-700/50 rounded-full mx-auto mb-6 mt-1"></div>
             
             <div className="space-y-3 mb-6">
                {/* Pickup */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center border border-brand-500/30">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-brand-300 uppercase font-bold tracking-wider mb-0.5">Pickup</p>
                        <p className="text-sm font-semibold text-white truncate">Sharm El Sheikh Intl. Airport</p>
                    </div>
                </div>

                {/* Vertical Line Connector */}
                <div className="absolute left-[39px] top-[100px] w-[2px] h-6 bg-slate-700/50 z-0"></div>

                {/* Dropoff */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors relative z-10">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600">
                        <MapPin className="w-4 h-4 text-slate-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-0.5">Where to?</p>
                        <p className="text-sm font-semibold text-slate-400">Select Destination</p>
                    </div>
                </div>
             </div>
             
             <button className="w-full py-4 bg-gradient-to-r from-brand-600 to-brand-400 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/20 active:scale-95 transition-all hover:shadow-brand-500/30 flex items-center justify-center gap-3 group">
                 <span className="text-sm tracking-wide">REQUEST RIDE</span>
                 <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <Navigation className="w-3 h-3 fill-current" />
                 </div>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};