import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  Award,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  Wrench,
  Layers,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { HERO_DATA, ABOUT_DATA, EXPERIENCES } from '../data/portfolioData';

interface ExecutiveCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveCVModal: React.FC<ExecutiveCVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const cvText = `
SWATI MEHENDALE
Business Analyst | Product Owner | FinTech Transformation
20+ Years in BFSI • Investment Banking • Asset Management • Fund Administration

EXECUTIVE SUMMARY
${ABOUT_DATA.quote}

BUSINESS ANALYSIS SKILLS:
- Stakeholder & vendor Management
- Requirements Elicitation (BRD, FRD)
- Epics, User Stories & Acceptance Criteria
- UAT Coordination & Testing
- SDLC
- Data Mapping

PRODUCT MANAGEMENT SKILLS:
- Product Roadmap Planning
- Product Backlog Prioritization
- Agile (Scrum) & Waterfall Delivery
- Release Planning

DOMAIN EXPERTISE:
- Alternative Investment Fund (AIF) Administration
- Mutual Funds
- Hedge Funds
- NAV Calculation & Oversight
- Capital Markets
- Trade Lifecycle
- Regulatory Reporting (SEC Form N-MFP/N-CEN/N-PORT, Central Bank of Ireland MMIF, AIFMD)
- Financial Accounting (US GAAP, IFRS, FAS 157)
- Financial Reporting
- OTC Derivatives & Passive Currency Overlay (PCO) FX Hedging

APPLICATIONS / SYSTEMS:
- Geneva (Advent)
- Hedge Tek
- Invest One
- Eagle
- Kondor
- Milestone PControl
- Unity Confluence
- DataMart
- Qlik Sense
- Bloomberg
- Reuters

PROFESSIONAL EXPERIENCE:

1. Aithon Solutions
Associate Director – Product Owner (April 2025 – November 2025)
- Collaborated in defining product features, business requirements, and solution workflows for an AI-powered NAV Oversight platform serving Alternative Investment Funds.
- Conducted requirement elicitation workshops with fund managers and operations stakeholders.
- Prepared comprehensive BRDs and Functional Requirement Specifications.
- Defined user stories and acceptance criteria for an automated reconciliation platform.
Key Achievement: Spearheaded the design of the NAV oversight product, improving exception detection efficiency.

2. Bank of New York (BNY)
Vice President – Techno Functional Business Analyst (July 2023 – April 2025)
- Automated Form N-MFP generation from DataMart for monthly SEC regulatory reporting of US money market funds.
- Identified and implemented automation opportunities to enhance financial and regulatory reporting efficiency using Unity Confluence application.
- Delivered regulatory reporting enhancements supporting SEC N-CEN and N-PORT filings while improving reporting accuracy and reducing production issues.
Key Achievement: Reduced manual reporting effort by 30% through process automation.

3. WNS Global Services
Senior Consultant – Product Owner (May 2021 – June 2023)
- Developed automated workflow management tools serving as orchestration layers between enterprise core systems.
- Improved processing speed and exception handling.
- Eliminated manual inefficiencies for Accounts Receivable credit control teams of a UK leading insurance company.
- Built a digital solution for Accounts Payable teams to automate invoice processing for direct and indirect expenses.
- Enabled touchless payments.
- Automated financial and regulatory reporting Excel reports through dynamic Qlik dashboards.
Key Achievement: Improved processing accuracy and efficiency, reducing manual reporting effort by 60%.

4. JPMorgan Chase – Investment Banking Technology
AVP – Techno Functional Business Analyst (March 2017 – May 2021)
- Directed onboarding, trade settlement, and MTM accounting for LATAM, EMEA, and Asia legal entities.
- Migrated legacy systems to strategic target platforms.
- Conducted upstream and downstream feed analysis.
- Established GAAP-based accounting rules, GL balancing, and exception reconciliations.
Key Achievement: Successfully directed multi-region legacy-to-strategic migration and established GAAP accounting framework across LATAM, EMEA, and Asia.

5. Capital Markets & Alternative Investment Servicing
Senior Techno-Functional Business Analyst & Product Specialist (June 2011 – March 2017)
- Drove regulatory & compliance reporting automation, including MMIF filings with the Central Bank of Ireland, AIFMD Transfer Agency reports with Trust & Fiduciary, & compliance data feeds for hedge funds.
- Designed & implemented foreign-currency exposure feeds for Passive Currency Overlay (PCO) Operations, enabling FX hedging for hedge fund clients.
- Enhanced PCO platform by moving data from T+1 to same-day for T-NAV funds, adding weekly/monthly NAV support, & integrating FX-rate schedules for cross-currency hedging.
- Automated HedgeTek application workflows—enabled bulk FX-rate uploads, automated P&L feeds from Geneva to HedgeTek, & migrated manual excel income allocation templates to HedgeTek.
- Upgraded FAS 157 application by automating month-end holdings refresh.
- Implemented automated NAV extracts feeds from TA/FA systems into Milestone PControl, enabling independent NAV oversight.
- Automated risk-exposure feed transmissions to third-party risk-solution providers.
Key Achievements:
- Drove multiple regulatory reporting automation initiatives enhancing accuracy & reducing reporting turnaround time.
- Contributed to the global rollout of PCO platform enhancements improving hedging efficiency.

6. SS&C GlobeOp
Associate Manager (Techno Functional BA) (April 2009 – June 2011)
- Collaborated with business stakeholders to capture detailed reporting requirements, drafted templates, & designed/tested new Excel-based reports using inhouse developed application.
- Translated business logic into actionable specifications for SQL developers, supporting creation and modification of stored procedures, and analyzed/consolidated legacy reports for field mapping, gap analysis, and process optimization.

7. SS&C GlobeOp
Associate Manager (Fund Accountant) (July 2005 – April 2009)
- Supervised daily & monthly P&L and NAV production for hedge funds, performing trade, position, cash, & interest reconciliations with prime brokers to ensure reporting accuracy.
- Handled portfolio pricing and accruals using Bloomberg, Reuters, and client data; managed management fees, financing costs, & corporate action validations in line with fund policies.
- Investigated P&L variances, resolved pricing discrepancies, provided client support, and prepared financial statements for hedge funds under IFRS and US GAAP frameworks.

8. S.B.I. Mutual Fund (JV with Société Générale Asset Management, France)
Assistant Manager (October 2003 – June 2005)
- Prepared MIS & financial reports for SBI and Société Générale Asset Management, France (JV partner of SBI Mutual Fund), supporting management & regulatory reporting requirements.
- Performed general ledger scrutiny, prepared financial statements, P&L, & balance sheet for the AMC; coordinated tax, statutory, & internal audits ensuring compliance and accuracy in financial reporting.
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in print:p-0 print:bg-white print:static">
      <div 
        className="relative w-full max-w-4xl bg-[#0D0E13] text-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-white/20 overflow-hidden max-h-[94vh] flex flex-col my-auto print:max-h-none print:border-none print:shadow-none print:rounded-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="no-print sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0A0B0E]/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Executive Curriculum Vitae (2003 – 2025)
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyText}
              className="btn-shiny-glass inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl cursor-pointer"
              title="Copy plain text CV to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Full CV' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-shiny-white inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-xl cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl btn-shiny-glass text-zinc-400 hover:text-white transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="overflow-y-auto p-6 sm:p-10 text-zinc-200 font-sans leading-relaxed print:p-0 print:overflow-visible print:text-black">
          
          {/* Resume Header */}
          <div className="border-b-2 border-white/10 pb-6 mb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase print:text-black">
                  Swati Mehendale
                </h1>
                <p className="text-base sm:text-lg font-bold text-zinc-200 mt-1 print:text-zinc-800">
                  Business Analyst | Product Owner | FinTech Transformation
                </p>
                <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase mt-0.5 print:text-zinc-600">
                  20+ Years in BFSI • Investment Banking • Asset Management • Fund Administration
                </p>
              </div>

              <div className="text-xs text-zinc-400 space-y-1 sm:text-right print:text-zinc-600">
                <div className="font-semibold text-zinc-200 print:text-black">Global BFSI Professional</div>
                <div>Coverage: US • EMEA • APAC</div>
                <div className="text-zinc-300 font-medium print:text-black">Open to Executive Opportunities</div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 print:text-zinc-700">
              Executive Summary
            </h2>
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-zinc-300 leading-relaxed space-y-2 print:bg-gray-50 print:border-gray-300 print:text-black">
              <p className="font-semibold text-white print:text-black">
                Techno-functional Business Analyst & Product Owner with 20+ years of experience in BFSI, delivering digital products and enterprise platforms across Investment Banking, Asset Management, Fund Administration, and Alternative Investments.
              </p>
              <p>
                Proven expertise in product strategy, requirements management, stakeholder collaboration, regulatory reporting, AI-enabled automation, and Agile delivery.
              </p>
              <p>
                Experienced in partnering with global business and technology teams across US, EMEA, and APAC in distributed environments to build scalable financial products that improve operational efficiency, compliance, and customer experience.
              </p>
            </div>
          </div>

          {/* Core Competencies & Applications Sidebar Grid */}
          <div className="mb-8 p-5 rounded-xl bg-white/[0.03] border border-white/10 print:bg-gray-50 print:border-gray-300 print:text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              
              {/* Business Analysis Skills */}
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5 print:text-black">
                  <Layers className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Business Analysis Skills</span>
                </h3>
                <ul className="space-y-1 text-zinc-300 print:text-black">
                  <li>• Stakeholder & vendor Management</li>
                  <li>• Requirements Elicitation (BRD, FRD)</li>
                  <li>• Epics, User Stories & Acceptance Criteria</li>
                  <li>• UAT Coordination & Testing</li>
                  <li>• SDLC</li>
                  <li>• Data Mapping</li>
                </ul>
              </div>

              {/* Product Management Skills */}
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5 print:text-black">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Product Management</span>
                </h3>
                <ul className="space-y-1 text-zinc-300 print:text-black">
                  <li>• Product Roadmap Planning</li>
                  <li>• Product Backlog Prioritization</li>
                  <li>• Agile (Scrum) & Waterfall Delivery</li>
                  <li>• Release Planning</li>
                  <li>• MVP Scope & ROI Alignment</li>
                </ul>
              </div>

              {/* Applications & Tech */}
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5 print:text-black">
                  <Wrench className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Enterprise Applications</span>
                </h3>
                <div className="flex flex-wrap gap-1">
                  {["Geneva", "Hedge Tek", "Invest One", "Eagle", "Kondor", "Milestone PControl", "Unity Confluence", "DataMart", "Qlik Sense", "Bloomberg", "Reuters"].map((app) => (
                    <span key={app} className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 font-semibold text-zinc-200 text-[10px] print:bg-white print:border-black print:text-black">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Domain Expertise Strip */}
            <div className="mt-4 pt-3 border-t border-white/10 text-xs print:border-gray-300">
              <span className="font-bold text-white mr-2 print:text-black">Domain Expertise:</span>
              <span className="text-zinc-400 print:text-black">
                Alternative Investment Fund (AIF) Administration • Mutual Funds • Hedge Funds • NAV Calculation • Capital Markets • Trade Lifecycle • Regulatory Reporting (SEC, MMIF Ireland, AIFMD) • Financial Accounting (US GAAP, IFRS, FAS 157) • Financial Reporting • OTC Derivatives & Passive Currency Overlay (PCO) FX Hedging
              </span>
            </div>
          </div>

          {/* Professional Experience Section (All 8 Roles) */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 print:text-zinc-700">
              Chronological Professional Experience (2003 – 2025)
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="border-l-2 border-white/20 pl-4 py-1 space-y-2 print:border-black">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-300 print:text-zinc-800">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-zinc-400 print:text-zinc-600">
                    {exp.period}
                  </div>
                </div>

                <div className="text-xs font-semibold text-zinc-200 bg-white/[0.04] px-2.5 py-1 rounded border border-white/15 inline-block print:border-black print:text-black print:bg-gray-100">
                  Key Achievement: {exp.keyAchievement}
                </div>

                <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4 pt-1 print:text-black">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>

                {/* Tech & Regulations */}
                <div className="flex flex-wrap gap-1 pt-1 print:hidden">
                  {exp.technologies.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Modal Footer */}
        <div className="no-print sticky bottom-0 z-30 px-6 py-4 bg-[#0A0B0E]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-zinc-400">
            Swati Mehendale • Complete Executive Dossier (2003 – 2025)
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-shiny-white px-4 py-2 text-xs font-bold rounded-xl cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="btn-shiny-glass px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
