import React from 'react';
import { Smartphone, Apple } from 'lucide-react';
import { APP_LINKS } from '../constants';

interface DownloadButtonsProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const DownloadButtons: React.FC<DownloadButtonsProps> = ({ variant = 'primary', className = '' }) => {
  const isPrimary = variant === 'primary';
  
  const baseClasses = "flex items-center justify-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold group w-full sm:w-auto min-w-[200px]";
  
  const androidClasses = isPrimary 
    ? "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25 border border-transparent"
    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700";
    
  const iosClasses = isPrimary
    ? "bg-slate-100 hover:bg-white text-slate-900 shadow-lg shadow-white/10 border border-transparent"
    : "bg-transparent hover:bg-slate-800 text-white border border-slate-600";

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a 
        href={APP_LINKS.android}
        className={`${baseClasses} ${androidClasses}`}
        aria-label="Download for Android"
      >
        <Smartphone className="w-6 h-6" />
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-wider opacity-80">Download on</span>
          <span className="text-lg">Android</span>
        </div>
      </a>

      <a 
        href={APP_LINKS.ios}
        className={`${baseClasses} ${iosClasses}`}
        aria-label="Download for iOS"
      >
        <Apple className="w-6 h-6 mb-[2px]" />
         <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-wider opacity-80">Join Beta on</span>
          <span className="text-lg">TestFlight</span>
        </div>
      </a>
    </div>
  );
};