import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import type { ExperienceItem } from '../types/portfolio';

interface ExperienceTimelineProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
  currentTheme?: string;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onSelectCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'product' | 'ba' | 'regulatory'>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'product') return exp.category === 'product' || exp.type === 'Product Owner' || exp.type === 'Both';
    if (filter === 'ba') return exp.category === 'ba' || exp.type === 'Business Analyst' || exp.type === 'Both';
    if (filter === 'regulatory') return exp.category === 'regulatory' || (exp.regulations && exp.regulations.length > 0);
    return true;
  });

  return (
    <section id="experience" className="py-24 bg-[#08090D] border-t border-white/[0.08] text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/20 text-zinc-200 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-2 text-base text-zinc-400">
              A chronological history of digital product leadership, complex regulatory implementations, and institutional scale.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg self-start md:self-auto overflow-x-auto max-w-full">
            <div className="px-2.5 py-1 text-xs text-zinc-400 flex items-center gap-1 font-semibold">
              <Filter className="w-3.5 h-3.5 text-zinc-300" />
              <span>Filter:</span>
            </div>
            {[
              { id: 'all', label: 'All Roles' },
              { id: 'product', label: 'Product Owner' },
              { id: 'ba', label: 'Business Analyst' },
              { id: 'regulatory', label: 'Regulatory & SEC' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filter === btn.id
                    ? 'btn-shiny-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative">
          {/* Vertical Track Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-white/30 via-white/15 to-white/5" />

          <div className="space-y-12">
            {filteredExperiences.map((exp: ExperienceItem) => (
              <div 
                key={exp.id} 
                className="relative md:pl-20 transition-all duration-300 group"
              >
                {/* Node Indicator on Track */}
                <div className="hidden md:flex absolute left-8 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0E0F14] border-2 border-white/40 items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.35)] z-10 group-hover:scale-110 group-hover:border-white transition-all">
                  <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
                </div>

                {/* Main Glossy Card */}
                <div className="glossy-card rounded-2xl p-6 sm:p-8">
                  
                  {/* Card Top Row: Title, Company, Date, Location */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.1]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                          {exp.type}
                        </span>
                        <span className="text-xs font-medium text-zinc-300">
                          {exp.domain}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 text-zinc-200 font-semibold text-base">
                        <Building2 className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col lg:items-end gap-2 text-xs text-zinc-400">
                      <div className="flex items-center gap-1.5 font-medium bg-white/[0.06] px-3 py-1.5 rounded-lg border border-white/10 text-zinc-200">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Prominent Key Achievement Banner in Shiny Glass */}
                  <div className="my-5 p-4 rounded-xl bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-white/[0.06] border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-white/15 text-white border border-white/30 shrink-0 mt-0.5 shadow-sm">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-0.5">
                        Key Career Impact & Achievement
                      </span>
                      <p className="text-sm font-bold text-white leading-snug">
                        {exp.keyAchievement}
                      </p>
                    </div>
                  </div>

                  {/* Responsibilities List */}
                  <div className="space-y-3 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Scope & Core Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-zinc-300 shrink-0 mt-1" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Meta & Case Study Trigger */}
                  <div className="mt-6 pt-5 border-t border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.regulations?.map((reg) => (
                        <span 
                          key={reg} 
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/10 border border-white/25 text-white"
                        >
                          {reg}
                        </span>
                      ))}
                    </div>

                    {/* Case Study Button */}
                    {exp.caseStudyId && (
                      <button
                        onClick={() => onSelectCaseStudy(exp.caseStudyId!)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-zinc-300 hover:underline cursor-pointer shrink-0"
                      >
                        <span>Deep Dive Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
