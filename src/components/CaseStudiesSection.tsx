import React from 'react';
import { 
  ArrowUpRight, 
  Building2, 
  Layers, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
  currentTheme?: string;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  return (
    <section id="case-studies" className="py-28 bg-[#050608] text-white relative overflow-hidden">
      {/* Ambient Lighting Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.04] via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-radial from-white/[0.03] to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glossy-pill text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-zinc-200" />
              <span>Strategic Transformation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies & Architecture
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400">
              Examining real-world enterprise deployments, regulatory milestones, and quantifiable business outcomes.
            </p>
          </div>

          <div className="text-xs text-zinc-400 font-medium px-4 py-2 rounded-full glossy-pill border border-white/10 self-start md:self-auto">
            Click any study to view the full architectural dossier
          </div>
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              onClick={() => onSelectCaseStudy(cs.id)}
              className="glossy-card flex flex-col justify-between p-7 sm:p-9 rounded-2xl cursor-pointer group"
            >
              <div>
                {/* Meta Top */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glossy-pill text-zinc-200 text-xs font-semibold">
                    <Layers className="w-3.5 h-3.5 text-zinc-300" />
                    <span>{cs.domain}</span>
                  </span>

                  <div className="w-9 h-9 rounded-full btn-shiny-glass flex items-center justify-center text-zinc-300 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors leading-snug">
                  {cs.title}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-zinc-400">
                  <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-zinc-300">{cs.company}</span>
                  <span className="text-zinc-600">•</span>
                  <span>{cs.duration}</span>
                </div>

                {/* Challenge Snapshot */}
                <p className="mt-4 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                  {cs.overview}
                </p>

                {/* Key Outcome Highlights */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Primary Achievement:
                  </div>
                  <div className="flex items-start gap-2.5 text-xs font-semibold text-zinc-100 bg-white/[0.03] p-3 rounded-xl border border-white/10 shadow-inner">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cs.measurableOutcomes[0]}</span>
                  </div>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="mt-6 pt-4 flex flex-wrap items-center gap-1.5">
                {cs.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {cs.technologies.length > 4 && (
                  <span className="text-[11px] text-zinc-400 font-medium px-1.5">
                    +{cs.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
