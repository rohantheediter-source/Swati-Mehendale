import React, { useState } from 'react';
import { FintechBackground } from './components/FintechBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { Competencies } from './components/Competencies';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ExecutiveCVModal } from './components/ExecutiveCVModal';
import { CASE_STUDIES } from './data/portfolioData';

export function App() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const selectedCaseStudy = CASE_STUDIES.find((cs) => cs.id === activeCaseStudyId) || null;

  return (
    <div className="min-h-screen relative bg-[#050608] text-white selection:bg-white/20 selection:text-white">
      {/* Background Interactive FinTech Canvas with luminous particles */}
      <FintechBackground theme="dark" />

      {/* Primary Sticky Header */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Page Layout */}
      <main className="relative z-10">
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        <ImpactStats />
        <About />
        <ExperienceTimeline onSelectCaseStudy={(id) => setActiveCaseStudyId(id)} />
        <CaseStudiesSection onSelectCaseStudy={(id) => setActiveCaseStudyId(id)} />
        <Competencies />
        <Methodology />
        <Testimonials />
        <Contact onOpenCVModal={() => setIsCVModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal 
        caseStudy={selectedCaseStudy} 
        onClose={() => setActiveCaseStudyId(null)} 
      />

      {/* Executive Printable CV Modal */}
      <ExecutiveCVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </div>
  );
}

export default App;
