import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { LOGO_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <img src={LOGO_URL} alt="Caxi" className="h-10 w-auto object-contain" />
                <span className="text-2xl font-bold text-white tracking-tight">Caxi</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Revolutionizing transportation in Sinai. <br/>
                Safe, fast, and reliable rides at your fingertips.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>About Us</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Careers</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Blog</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Press</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Driver Agreement</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                    <span>South Sinai, Egypt</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                    <a href="mailto:support@caxi.app" className="hover:text-white transition-colors">support@caxi.app</a>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                    <span>+20 100 000 0000</span>
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Caxi App. All rights reserved.</p>
            <div className="flex gap-6 items-center">
                <span>Made with <span className="text-red-500 animate-pulse">❤️</span> in Sinai</span>
            </div>
        </div>
      </div>
    </footer>
  );
};