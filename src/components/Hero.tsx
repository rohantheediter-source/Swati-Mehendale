import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  ChevronDown, 
  Award,
  Globe,
  Upload,
  UserCheck,
  Sparkles
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
  currentTheme?: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomAvatar(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Shiny Ambient Radial Spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Experience Badge with Shimmer Sweep */}
            <div className="shimmer-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 text-zinc-100 text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(255,255,255,0.06)]">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>{HERO_DATA.badge}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-sm">
                {HERO_DATA.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
                {HERO_DATA.title}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl border-l-2 border-white/40 pl-4 py-0.5">
              "{HERO_DATA.supportingText}"
            </p>

            {/* Elegant Professional Introduction */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              {HERO_DATA.introduction} Specialized in capital markets architecture, SEC Form N-MFP/N-CEN/N-PORT automated reporting, AI-driven NAV oversight, and enterprise reconciliation workflows.
            </p>

            {/* Institutional Credentials Pill Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs text-zinc-300 font-medium">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                BNY Asset Servicing
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                J.P. Morgan Investment Banking
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                Aithon AI NAV Oversight
              </span>
            </div>

            {/* Shiny CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#experience"
                className="btn-shiny-white inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm rounded-xl shadow-lg group cursor-pointer"
              >
                <span>Explore My Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="btn-shiny-glass inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl cursor-pointer"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Glossy Executive Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Luminous Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-white/15 via-white/5 to-white/10 rounded-3xl blur-xl opacity-75"></div>

              {/* Main Glossy Card */}
              <div className="relative glossy-card rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                
                {/* Profile Header with Shiny Avatar Frame */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-white/[0.1]">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-black/60 border-2 border-white/25 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] relative">
                      {customAvatar ? (
                        <img 
                          src={customAvatar} 
                          alt="Swati Mehendale" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center p-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-white/20 to-white/5 text-white flex items-center justify-center font-bold text-2xl tracking-wider mb-1 border border-white/20 shadow-md">
                            SM
                          </div>
                          <span className="text-[11px] font-semibold text-zinc-300">
                            Executive Profile
                          </span>
                        </div>
                      )}

                      {/* Photo Upload Overlay */}
                      <label 
                        className="absolute inset-0 bg-black/85 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-2"
                        title="Click to preview custom photo"
                      >
                        <Upload className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-medium text-center">Replace Photo</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleImageUpload} 
                          className="hidden" 
                        />
                      </label>
                    </div>

                    {/* Verified Status Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-b from-emerald-500 to-emerald-700 text-white rounded-full p-1.5 shadow-[0_0_15px_rgba(16,185,129,0.5)] border-2 border-black" title="BFSI Subject Matter Expert">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white tracking-tight">
                    Swati Mehendale
                  </h3>
                  <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-0.5">
                    Vice President / Associate Director Caliber
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                    Cross-functional Leader in Investment Banking & Asset Management
                  </p>
                </div>

                {/* Key Executive Highlights Inside Card (Glossy Pills) */}
                <div className="pt-5 space-y-3">
                  
                  <div className="glossy-pill flex items-center justify-between p-3 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 text-white border border-white/20 shadow-inner">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 font-medium">Process Automation</div>
                        <div className="text-sm font-bold text-white">Up to 60% Effort Cut</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-zinc-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                      Verified
                    </span>
                  </div>

                  <div className="glossy-pill flex items-center justify-between p-3 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 text-white border border-white/20 shadow-inner">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 font-medium">Regulatory Reporting</div>
                        <div className="text-sm font-bold text-white">SEC Form N-MFP / N-CEN</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-zinc-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                      BNY
                    </span>
                  </div>

                  <div className="glossy-pill flex items-center justify-between p-3 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 text-white border border-white/20 shadow-inner">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 font-medium">Global Execution</div>
                        <div className="text-sm font-bold text-white">US, EMEA & APAC Teams</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-zinc-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                      20+ Yrs
                    </span>
                  </div>

                </div>

                {/* Availability Notice */}
                <div className="mt-4 pt-4 border-t border-white/[0.1] flex items-center justify-center gap-2 text-xs text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                  <span>Available for Senior Leadership & Advisory Roles</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center justify-center">
          <a
            href="#about"
            aria-label="Scroll to About Me section"
            className="flex flex-col items-center text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group"
          >
            <span className="mb-1 text-[11px]">Explore Profile</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center p-1.5 shadow-sm">
              <div className="w-1.5 h-2 bg-white rounded-full animate-bounce shadow-[0_0_6px_rgba(255,255,255,0.8)]"></div>
            </div>
            <ChevronDown className="w-4 h-4 mt-1 text-zinc-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
