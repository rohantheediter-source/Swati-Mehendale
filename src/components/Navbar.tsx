import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Briefcase, 
  Layers, 
  User, 
  Mail, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Case Studies', href: '#case-studies', icon: Layers },
    { name: 'Competencies', href: '#competencies', icon: ShieldCheck },
    { name: 'Methodology', href: '#methodology', icon: ChevronRight },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#060709]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-white/[0.1] py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-white/15 to-white/5 text-white flex items-center justify-center font-bold tracking-wider text-base shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 group-hover:border-white/40 transition-all">
              SM
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight leading-tight group-hover:text-zinc-200 transition-colors">
                Swati Mehendale
              </span>
              <span className="text-xs text-zinc-400 font-medium tracking-wide">
                Business Analyst & Product Owner
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Executive CV Button */}
            <button
              onClick={onOpenCVModal}
              className="btn-shiny-glass inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-300" />
              <span>Executive CV</span>
            </button>

            {/* Direct CTA */}
            <a
              href="#contact"
              className="btn-shiny-white inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-200 hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0B0F]/98 border-b border-white/[0.1] px-4 pt-3 pb-6 shadow-2xl backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-zinc-400" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full btn-shiny-glass flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl"
              >
                <FileText className="w-4 h-4 text-zinc-300" />
                <span>View Executive CV</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-shiny-white flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
