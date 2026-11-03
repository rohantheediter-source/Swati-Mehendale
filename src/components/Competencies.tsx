import React, { useState } from 'react';
import { 
  Target, 
  FileSpreadsheet, 
  ShieldAlert, 
  Landmark, 
  Wrench, 
  Globe2,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { COMPETENCY_GROUPS } from '../data/portfolioData';

interface CompetenciesProps {
  currentTheme?: string;
}

export const Competencies: React.FC<CompetenciesProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const iconMap: Record<string, React.ElementType> = {
    Target,
    FileSpreadsheet,
    ShieldAlert,
    Landmark,
    Wrench,
    Globe2,
  };

  return (
    <section id="competencies" className="py-28 bg-[#07080B] border-t border-white/10 text-white relative overflow-hidden">
      {/* Background radial shine */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-radial from-white/[0.03] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glossy-pill text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-zinc-200" />
              <span>Domain Authority</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Core Competencies & Capabilities
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400">
              A comprehensive matrix of techno-functional skills honed over 20+ years of enterprise BFSI delivery.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-zinc-300 glossy-pill px-4 py-2 rounded-full border border-white/15">
            <Sparkles className="w-4 h-4 text-white" />
            <span>Institutional-Grade Experience</span>
          </div>
        </div>

        {/* Competency Group Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {COMPETENCY_GROUPS.map((group, idx) => {
            const Icon = iconMap[group.iconName] || Target;
            const isActive = activeTab === idx;
            return (
              <button
                key={group.category}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'btn-shiny-white'
                    : 'btn-shiny-glass text-zinc-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{group.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Competency Card Grid */}
        <div className="glossy-card rounded-2xl p-6 sm:p-9 shadow-2xl">
          
          <div className="pb-6 mb-8 border-b border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {COMPETENCY_GROUPS[activeTab].category}
            </h3>
            <p className="text-sm text-zinc-400 mt-1.5">
              {COMPETENCY_GROUPS[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPETENCY_GROUPS[activeTab].skills.map((skill) => (
              <div 
                key={skill.name}
                className="p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-white text-base">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md glossy-pill text-zinc-200 border border-white/15">
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Global Tech & Domain Ecosystem Badge Strip */}
        <div className="mt-12 glossy-card rounded-2xl p-7 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-5 text-center sm:text-left flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
            <span>Institutional Toolchain & Regulatory Environment</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {[
              "Geneva (Advent)",
              "Hedge Tek",
              "Milestone PControl",
              "Invest One",
              "Eagle",
              "Kondor",
              "Unity Confluence",
              "DataMart",
              "Qlik Sense",
              "SEC EDGAR",
              "Form N-MFP",
              "Form N-CEN & N-PORT",
              "Central Bank of Ireland MMIF",
              "AIFMD",
              "US GAAP & IFRS",
              "FAS 157 Fair Value",
              "Passive Currency Overlay (PCO)",
              "Trade Settlement",
              "JIRA & Confluence",
              "SQL Data Profiling"
            ].map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.04] text-xs font-semibold text-zinc-200 border border-white/10 hover:border-white/25 transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5 text-zinc-300" />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
