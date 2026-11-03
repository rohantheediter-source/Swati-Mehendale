import React from 'react';
import { 
  X, 
  Building2, 
  Clock, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  FileText, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import type { CaseStudy } from '../types/portfolio';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0D0E13] text-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-white/20 overflow-hidden max-h-[90vh] flex flex-col my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0A0B0E]/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Architectural Case Study • {caseStudy.company}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg btn-shiny-glass text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Header Title Block */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full glossy-pill text-zinc-200">
              <Layers className="w-3.5 h-3.5 text-zinc-300" />
              <span>{caseStudy.domain}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {caseStudy.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-200">{caseStudy.company}</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span>{caseStudy.duration}</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="font-semibold text-zinc-200">
                {caseStudy.role}
              </div>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Executive Overview
            </h4>
            <p className="text-base text-zinc-200 leading-relaxed p-5 rounded-xl bg-white/[0.03] border border-white/10 shadow-inner">
              {caseStudy.overview}
            </p>
          </div>

          {/* Challenge vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Challenge */}
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-zinc-200 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-zinc-300" />
                <span>The Core Challenge</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Measurable Outcomes */}
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-zinc-200 font-bold text-sm">
                <TrendingUp className="w-4 h-4 text-zinc-300" />
                <span>Quantified Value & Outcomes</span>
              </div>
              <ul className="space-y-2.5">
                {caseStudy.measurableOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Approach & Execution */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Strategic Approach & Execution
            </h4>
            <div className="space-y-2.5">
              {caseStudy.approach.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10"
                >
                  <span className="w-6 h-6 rounded-full btn-shiny-glass text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Artifacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Key Authored Artifacts & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyArtifacts.map((art, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-semibold text-zinc-200"
                >
                  <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{art}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Regulations */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-zinc-400 mr-2">
              Technologies & Frameworks:
            </span>
            {caseStudy.technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-medium px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-[#0A0B0E]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-zinc-400">
            Swati Mehendale • FinTech Transformation Case Study
          </span>
          <button
            onClick={onClose}
            className="btn-shiny-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
          >
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  );
};
