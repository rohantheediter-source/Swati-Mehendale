import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star, Sparkles } from 'lucide-react';

interface TestimonialsProps {
  currentTheme?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="py-28 bg-[#07080B] border-t border-white/10 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-radial from-white/[0.03] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glossy-pill text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-zinc-200" />
            <span>Leadership Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Cross-Functional Stakeholders
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            Perspectives from engineering leads, managing directors, and operations executives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glossy-card flex flex-col justify-between p-7 sm:p-9 rounded-2xl relative"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl btn-shiny-glass text-white shadow-inner">
                    <Quote className="w-5 h-5 text-zinc-200" />
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-white/10">
                <div className="font-bold text-sm text-white">
                  {item.author}
                </div>
                <div className="text-xs text-zinc-300 font-medium mt-0.5">
                  {item.organization}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  {item.context}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
