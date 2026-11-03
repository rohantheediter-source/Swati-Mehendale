import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ShieldCheck, TrendingDown, Globe, Award } from 'lucide-react';

interface ImpactStatsProps {
  currentTheme?: string;
}

export const ImpactStats: React.FC<ImpactStatsProps> = () => {
  const icons = [Award, TrendingDown, Globe, ShieldCheck];

  return (
    <section className="relative z-10 py-12 bg-gradient-to-b from-[#0B0C10] to-[#060709] text-white border-y border-white/[0.1] shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {HERO_DATA.stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center md:items-start text-center md:text-left ${
                  index > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-white/[0.08] text-white border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                    {stat.value}
                  </span>
                </div>
                <div className="text-sm font-bold text-zinc-200">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
