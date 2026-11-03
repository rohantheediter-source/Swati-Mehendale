import React from 'react';
import { ArrowUp, ShieldCheck, Mail, FileText } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface FooterProps {
  onOpenCVModal: () => void;
  currentTheme?: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCVModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030406] text-zinc-400 border-t border-white/10 py-16 relative overflow-hidden">
      {/* Subtle top sheen */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl btn-shiny-glass text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-md">
                SM
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight block">
                  Swati Mehendale
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  Business Analyst | Product Owner | FinTech Transformation
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Transforming complex financial operations into scalable digital products through strategic product ownership, business analysis, automation, and technology innovation.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-zinc-200" />
              <span>20+ Years in Institutional BFSI • US, EMEA, APAC Coverage</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Professional Experience</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Transformation Case Studies</a>
              </li>
              <li>
                <a href="#competencies" className="hover:text-white transition-colors">Core Competencies</a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">Delivery Framework</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Documents */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              Executive Resources
            </div>
            <p className="text-xs text-zinc-400">
              Access the complete printable curriculum vitae or connect via professional business channels.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={onOpenCVModal}
                className="btn-shiny-glass inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer w-fit"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-300" />
                <span>Executive CV</span>
              </button>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shiny-glass inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold w-fit"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-zinc-300" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Swati Mehendale. All rights reserved. Built with precision for institutional FinTech.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg btn-shiny-glass text-zinc-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
