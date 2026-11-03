import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  Send, 
  Globe, 
  Clock, 
  ShieldCheck,
  FileText,
  Sparkles
} from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface ContactProps {
  onOpenCVModal: () => void;
  currentTheme?: string;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCVModal }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    roleType: 'Leadership Engagement',
    message: '',
  });

  const emailAddress = "swati.mehendale@executive-bfsi.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organization: '',
        roleType: 'Leadership Engagement',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 bg-[#050608] text-white relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-white/[0.04] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glossy-pill text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-zinc-200" />
            <span>Engagement & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiate an Executive Dialogue
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            Open to senior leadership, advisory engagements, and transformational product ownership opportunities across global BFSI institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Credentials & Inquiry Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glossy-card p-7 sm:p-8 rounded-2xl space-y-6">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Swati Mehendale
                </h3>
                <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-1">
                  Business Analyst | Product Owner | FinTech Transformation
                </p>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                  20+ years driving high-consequence platform modernizations, SEC regulatory reporting automations, and intelligent reconciliation engines.
                </p>
              </div>

              {/* Direct Email with Quick Copy */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Direct Inquiries:
                </span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/15 shadow-inner">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-zinc-300 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-zinc-200 truncate">
                      {emailAddress}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg btn-shiny-glass text-zinc-300 hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location & Timezones */}
              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Coverage: US, EMEA, and APAC Distributed Delivery</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Response Time: Typically within 24 business hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Strict Confidentiality on Institutional Inquiries</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenCVModal}
                  className="flex-1 btn-shiny-glass inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Download CV</span>
                </button>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-shiny-glass inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-zinc-300" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 glossy-card rounded-2xl p-7 sm:p-9 shadow-2xl">
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
              Send an In-Depth Proposal or Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Share details regarding your institution's digital product initiatives, regulatory timelines, or leadership needs.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-white/[0.03] border border-white/15 text-center space-y-3 animate-fade-in">
                <div className="w-14 h-14 rounded-full btn-shiny-glass text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Message Transmitted Successfully
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto">
                  Thank you for your message. Swati Mehendale will review your inquiry and follow up promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs font-semibold text-white underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-black/50 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Professional Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@capitalfirm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-black/50 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Global Asset Management LLC"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-black/50 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Inquiry Focus
                    </label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-black/50 border border-white/15 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
                    >
                      <option value="Leadership Engagement" className="bg-[#111216]">Senior Leadership / Product Owner Role</option>
                      <option value="Techno Functional BA" className="bg-[#111216]">Techno-Functional BA Engagement</option>
                      <option value="Regulatory Reporting" className="bg-[#111216]">SEC Regulatory Reporting Advisory (N-MFP/N-PORT)</option>
                      <option value="AI NAV Oversight" className="bg-[#111216]">AI NAV Oversight & Reconciliation</option>
                      <option value="General Consultation" className="bg-[#111216]">Executive Consultation / Discussion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Engagement Scope / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly outline your team's objectives, platform requirements, or role scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-black/50 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/30 transition-all shadow-inner resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-shiny-white inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Executive Message</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
