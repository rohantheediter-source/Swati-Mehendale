import React from 'react';
import { Compass, ShieldCheck, Cpu, Globe, CheckCircle } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

interface AboutProps {
  currentTheme?: string;
}

export const About: React.FC<AboutProps> = () => {
  const pillarIcons: Record<string, React.ElementType> = {
    Compass,
    ShieldCheck,
    Cpu,
  };

  return (
    <section id="about" className="py-24 bg-[#050608] text-white relative transition-colors">
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/20 text-zinc-200 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,255,255,0.06)]">
            <span>Executive Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Capital Markets & Enterprise Technology
          </h2>
          <p className="mt-2 text-base sm:text-lg text-zinc-400">
            A seasoned leadership profile defined by two decades of excellence in high-stakes financial operations.
          </p>
        </div>

        {/* Editorial Layout: Professional Summary Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Editorial Quote */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/40 py-2">
              <div className="space-y-4 text-zinc-300 text-base sm:text-lg sm:leading-relaxed font-normal">
                <p className="font-semibold text-white text-lg sm:text-xl leading-snug">
                  Techno-functional Business Analyst & Product Owner with 20+ years of experience in BFSI, delivering digital products and enterprise platforms across Investment Banking, Asset Management, Fund Administration, and Alternative Investments.
                </p>
                <p>
                  Proven expertise in product strategy, requirements management, stakeholder collaboration, regulatory reporting, AI-enabled automation, and Agile delivery.
                </p>
                <p>
                  Experienced in partnering with global business and technology teams across US, EMEA, and APAC in distributed environments to build scalable financial products that improve operational efficiency, compliance, and customer experience.
                </p>
              </div>
            </div>

            {/* Quick Strategic Focus Badges (Glossy Micro Pills) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "SEC N-MFP & N-CEN",
                "AI NAV Oversight",
                "US GAAP Standards",
                "Touchless STP Payments",
                "Trade Settlement",
                "Geneva & HedgeTek",
                "Agile / Scrum Delivery",
                "Cross-Border Delivery"
              ].map((badge) => (
                <div 
                  key={badge} 
                  className="glossy-pill flex items-center gap-1.5 p-2.5 rounded-xl text-xs font-medium text-zinc-200"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                  <span className="truncate">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Global Footprint Card */}
          <div className="lg:col-span-4 glossy-card rounded-2xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-center gap-2 mb-4 text-white font-bold text-sm uppercase tracking-wider">
              <Globe className="w-4 h-4 text-zinc-300" />
              <span>Global Reach & Delivery</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Proven track record managing distributed multi-regional stakeholders, time zones, and compliance regimes.
            </p>

            <div className="space-y-4">
              {ABOUT_DATA.globalPresence.map((loc) => (
                <div 
                  key={loc.region} 
                  className="glossy-pill p-3.5 rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{loc.flag}</span>
                    <span className="font-semibold text-sm text-white">
                      {loc.region}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 pl-7">
                    {loc.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.1] flex items-center justify-between text-xs text-zinc-400">
              <span>Experience Span:</span>
              <span className="font-bold text-white">20+ Years Continuous BFSI</span>
            </div>
          </div>

        </div>

        {/* 3 Strategic Pillars of Expertise */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Core Pillars of Leadership
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              How Swati drives institutional transformation and sustainable product value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_DATA.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon] || Compass;
              return (
                <div
                  key={pillar.title}
                  className="glossy-card flex flex-col justify-between p-7 sm:p-8 rounded-2xl group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-white/15 to-white/5 border border-white/20 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wide mt-0.5 mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/[0.1] flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
