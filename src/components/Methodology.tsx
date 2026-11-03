import React from 'react';
import { METHODOLOGY_STEPS } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface MethodologyProps {
  currentTheme?: string;
}

export const Methodology: React.FC<MethodologyProps> = () => {
  return (
    <section id="methodology" className="py-28 bg-[#050608] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glossy-pill text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-zinc-200" />
            <span>Execution Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The 5-Stage FinTech Delivery Framework
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            A battle-tested methodology transforming ambiguous financial requirements into resilient, compliant, high-performing digital platforms.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="glossy-card relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl group"
            >
              <div>
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-white font-mono tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  {idx < 4 && (
                    <div className="hidden md:flex w-7 h-7 rounded-full btn-shiny-glass items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  {step.phase}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Key Deliverables:
                </div>
                {step.deliverables.map((del) => (
                  <div key={del} className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-300">
                    <CheckCircle2 className="w-3 h-3 text-zinc-400 shrink-0" />
                    <span className="truncate">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
