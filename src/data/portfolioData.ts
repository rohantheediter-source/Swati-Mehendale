import type { ExperienceItem, CaseStudy, CompetencyGroup } from '../types/portfolio';

export const HERO_DATA = {
  name: "Swati Mehendale",
  badge: "20+ Years of BFSI & FinTech Leadership (2003 – 2025)",
  title: "Business Analyst | Product Owner | FinTech Transformation",
  supportingText: "Transforming complex financial operations into scalable digital products through strategic product ownership, business analysis, automation, and technology innovation.",
  introduction: "A proven Techno-Functional leader with 20+ years of uninterrupted excellence in BFSI, delivering enterprise platforms and digital products across Investment Banking, Asset Management, Fund Administration, and Alternative Investments across US, EMEA, and APAC markets.",
  stats: [
    { value: "20+", label: "Years in BFSI", detail: "2003 – 2025 Continuous Progression" },
    { value: "60%", label: "Max Effort Reduction", detail: "Through Process Automation" },
    { value: "3", label: "Global Geographies", detail: "US, EMEA, and APAC Distributed Delivery" },
    { value: "100%", label: "Regulatory Adherence", detail: "SEC, Central Bank of Ireland MMIF, AIFMD, GAAP" },
  ],
};

export const ABOUT_DATA = {
  quote: "Techno-functional Business Analyst & Product Owner with 20+ years of experience in BFSI, delivering digital products and enterprise platforms across Investment Banking, Asset Management, Fund Administration, and Alternative Investments.\n\nProven expertise in product strategy, requirements management, stakeholder collaboration, regulatory reporting, AI-enabled automation, and Agile delivery.\n\nExperienced in partnering with global business and technology teams across US, EMEA, and APAC in distributed environments to build scalable financial products that improve operational efficiency, compliance, and customer experience.",
  pillars: [
    {
      title: "Strategic Product Ownership",
      subtitle: "From Vision to Scalable Delivery",
      description: "Directing the end-to-end product lifecycle for mission-critical financial platforms, defining high-impact MVPs, prioritizing backlogs, and translating strategic business objectives into clear user stories and functional specifications.",
      icon: "Compass",
      tags: ["Product Strategy", "Backlog Prioritization", "Agile (Scrum) & Waterfall", "Release Planning"],
    },
    {
      title: "Regulatory Reporting & Compliance",
      subtitle: "Zero-Defect Global Mandates",
      description: "Pioneering automated reporting pipelines for SEC filings (Form N-MFP, N-CEN, N-PORT), MMIF filings with Central Bank of Ireland, AIFMD Transfer Agency reports, FAS 157 fair-value reporting, and US GAAP / IFRS accounting standards.",
      icon: "ShieldCheck",
      tags: ["SEC Form N-MFP/N-CEN/N-PORT", "MMIF Ireland", "AIFMD", "FAS 157", "US GAAP & IFRS"],
    },
    {
      title: "AI & Intelligent Automation",
      subtitle: "Eliminating Inefficiencies at Scale",
      description: "Designing intelligent orchestration layers, automated reconciliation engines, Passive Currency Overlay (PCO) FX hedging pipelines, and AI-enabled NAV oversight systems (Milestone PControl) that drastically compress cycle times.",
      icon: "Cpu",
      tags: ["AI NAV Oversight", "Milestone PControl", "PCO FX Hedging", "Touchless STP", "Geneva to HedgeTek"],
    },
  ],
  globalPresence: [
    { region: "US Markets", focus: "SEC Filings (N-MFP, N-PORT), Money Market Funds, Wall Street Investment Banking", flag: "🇺🇸" },
    { region: "EMEA & Ireland", focus: "Central Bank of Ireland MMIF, AIFMD, UK Corporate Credit Control & Expense Automation", flag: "🇪🇺" },
    { region: "APAC & LATAM", focus: "Cross-Border Trade Settlements, Legal Entity Onboarding, Société Générale JV", flag: "🌏" },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "aithon",
    company: "Aithon Solutions",
    role: "Associate Director – Product Owner",
    period: "April 2025 – November 2025",
    location: "Global / Alternative Investments",
    type: "Product Owner",
    category: "product",
    domain: "Alternative Investment Funds & AI NAV Oversight",
    responsibilities: [
      "Collaborated in defining product features, business requirements, and solution workflows for an AI-powered NAV Oversight platform serving Alternative Investment Funds.",
      "Conducted requirement elicitation workshops with fund managers, operations directors, and data engineering squads.",
      "Prepared comprehensive Business Requirement Documents (BRDs) and Functional Requirement Specifications capturing complex multi-asset valuation rules.",
      "Defined user stories and acceptance criteria for an automated reconciliation platform managing high-frequency valuation feeds.",
      "Engineered exception management workflows, establishing automated anomaly detection rules for portfolio variances and pricing discrepancy resolution."
    ],
    keyAchievement: "Spearheaded the design of the NAV oversight product, improving exception detection efficiency.",
    technologies: ["AI NAV Engine", "JIRA", "Confluence", "Data Pipelines", "Agile / Scrum", "BRD / FRD"],
    regulations: ["Alternative Investment Valuation Standards", "NAV Oversight Frameworks"],
    caseStudyId: "cs-aithon",
  },
  {
    id: "bny",
    company: "Bank of New York (BNY)",
    role: "Vice President – Techno Functional Business Analyst",
    period: "July 2023 – April 2025",
    location: "Global Asset Servicing / US Money Market Funds",
    type: "Business Analyst",
    category: "regulatory",
    domain: "SEC Regulatory Reporting & Money Market Funds",
    responsibilities: [
      "Automated Form N-MFP generation from DataMart for monthly SEC regulatory reporting of US money market funds, replacing fragmented legacy workflows.",
      "Identified and implemented automation opportunities to enhance financial and regulatory reporting efficiency using the Unity Confluence application.",
      "Delivered regulatory reporting enhancements supporting SEC N-CEN and N-PORT filings while improving reporting accuracy and reducing production issues.",
      "Formulated detailed data mapping contracts between upstream DataMart repositories and downstream regulatory publishing channels.",
      "Conducted thorough User Acceptance Testing (UAT) and regression suites to ensure 100% compliance with SEC mandates and rigorous audit criteria."
    ],
    keyAchievement: "Reduced manual reporting effort by 30% through process automation.",
    technologies: ["Unity Confluence", "DataMart", "SQL", "Regulatory Filing Engines", "JIRA", "UAT Frameworks"],
    regulations: ["SEC Form N-MFP", "SEC Form N-CEN", "SEC Form N-PORT", "Money Market Reform Rules"],
    caseStudyId: "cs-bny",
  },
  {
    id: "wns",
    company: "WNS Global Services",
    role: "Senior Consultant – Product Owner",
    period: "May 2021 – June 2023",
    location: "Corporate Enterprise / UK Leading Insurance",
    type: "Product Owner",
    category: "product",
    domain: "Intelligent Process Automation & Corporate Finance",
    responsibilities: [
      "Developed automated workflow management tools serving as orchestration layers between disparate enterprise core systems.",
      "Improved processing speed and exception handling for high-volume transactions across business divisions.",
      "Eliminated manual inefficiencies for Accounts Receivable credit control teams of a UK leading insurance company.",
      "Built a digital solution for Accounts Payable teams to automate invoice processing for direct and indirect expenses.",
      "Enabled touchless payments through straight-through processing (STP) validation logic and automated vendor routing.",
      "Automated financial and regulatory reporting Excel reports through interactive, executive-grade Qlik dashboards."
    ],
    keyAchievement: "Improved processing accuracy and efficiency, reducing manual reporting effort by 60%.",
    technologies: ["Qlik Sense", "Workflow Orchestration", "Touchless Payment Engines", "Excel Automation", "ERP Integration"],
    regulations: ["UK Corporate Insurance Guidelines", "Credit Control Compliance", "Audit Trails"],
    caseStudyId: "cs-wns",
  },
  {
    id: "jpmorgan",
    company: "JPMorgan Chase – Investment Banking Technology",
    role: "AVP – Techno Functional Business Analyst",
    period: "March 2017 – May 2021",
    location: "Investment Banking Technology / Global Markets",
    type: "Business Analyst",
    category: "ba",
    domain: "Investment Banking, Trade Settlement & Sub-Ledger Accounting",
    responsibilities: [
      "Directed legal entity onboarding, trade settlement, and Mark-to-Market (MTM) accounting for LATAM, EMEA, and Asia legal entities.",
      "Migrated legacy settlement and accounting systems to strategic modern target platforms without operational downtime.",
      "Conducted extensive upstream and downstream feed analysis, data dictionary alignment, and message schema normalization across global trade execution hubs.",
      "Established GAAP-based accounting rules, automated General Ledger balance reconciliations, and straight-through trade lifecycle validation.",
      "Partnered closely with front-office traders, middle-office operations, controllers, and development squads across New York, London, and APAC."
    ],
    keyAchievement: "Successfully directed multi-region legacy-to-strategic migration and established GAAP accounting framework across LATAM, EMEA, and Asia.",
    technologies: ["Trade Settlement Engines", "MTM Accounting Platforms", "Feed Analysis", "General Ledger", "SQL", "Agile / Scrum"],
    regulations: ["US GAAP", "Trade Lifecycle Reporting", "Cross-Border Settlement Rules"],
    caseStudyId: "cs-jpmorgan",
  },
  {
    id: "capital-markets-asset-servicing",
    company: "Capital Markets & Alternative Investment Servicing",
    role: "Senior Techno-Functional Business Analyst & Product Specialist",
    period: "June 2011 – March 2017",
    location: "Global Asset Servicing & Fund Administration",
    type: "Both",
    category: "regulatory",
    domain: "Passive Currency Overlay (PCO), Hedge Fund Operations & Global Regulatory Filings",
    responsibilities: [
      "Drove regulatory & compliance reporting automation, including MMIF filings with the Central Bank of Ireland, AIFMD Transfer Agency reports with Trust & Fiduciary, & compliance data feeds for hedge funds.",
      "Designed & implemented foreign-currency exposure feeds for Passive Currency Overlay (PCO) Operations, enabling automated FX hedging for hedge fund clients.",
      "Enhanced PCO platform by moving data from T+1 to same-day for T-NAV funds, adding weekly/monthly NAV support, & integrating FX-rate schedules for cross-currency hedging.",
      "Automated HedgeTek application workflows—enabled bulk FX-rate uploads, automated P&L feeds from Geneva to HedgeTek, & migrated manual excel income allocation templates to HedgeTek.",
      "Upgraded FAS 157 application by automating month-end holdings refresh.",
      "Implemented automated NAV extracts feeds from TA/FA systems into Milestone PControl, enabling independent NAV oversight.",
      "Automated risk-exposure feed transmissions to third-party risk-solution providers."
    ],
    keyAchievement: "Drove multiple regulatory reporting automation initiatives enhancing accuracy & reducing turnaround time, and contributed to the global rollout of PCO platform enhancements improving hedging efficiency.",
    technologies: ["Milestone PControl", "Geneva", "HedgeTek", "FAS 157 Engine", "Passive Currency Overlay (PCO)", "SQL", "Excel Automation"],
    regulations: ["Central Bank of Ireland MMIF", "AIFMD", "FAS 157 Fair Value", "Cross-Currency FX Hedging"],
    caseStudyId: "cs-pco",
  },
  {
    id: "ssnc-ba",
    company: "SS&C GlobeOp",
    role: "Associate Manager (Techno Functional BA)",
    period: "April 2009 – June 2011",
    location: "Hedge Fund Administration & Technology",
    type: "Business Analyst",
    category: "ba",
    domain: "Fund Administration Systems, Stored Procedures & Reporting Infrastructure",
    responsibilities: [
      "Collaborated with business stakeholders to capture detailed reporting requirements, drafted templates, & designed/tested new Excel-based reports using inhouse developed application.",
      "Translated business logic into actionable specifications for SQL developers, supporting creation and modification of stored procedures.",
      "Analyzed & consolidated legacy reports for field mapping, gap analysis, and process optimization.",
      "Coordinated with fund operations and IT teams to ensure timely delivery of custom client reporting packages and operational audit trails."
    ],
    keyAchievement: "Optimized reporting stored procedures and eliminated legacy redundant reports through comprehensive field mapping and gap analysis.",
    technologies: ["Inhouse Financial Applications", "SQL Stored Procedures", "Data Mapping", "Excel Automation", "Gap Analysis"],
    regulations: ["Hedge Fund Valuation Standards", "Client Audit Requirements"],
  },
  {
    id: "ssnc-fa",
    company: "SS&C GlobeOp",
    role: "Associate Manager (Fund Accountant)",
    period: "July 2005 – April 2009",
    location: "Alternative Investments & Hedge Fund Operations",
    type: "Business Analyst",
    category: "product",
    domain: "Hedge Fund Accounting, Daily/Monthly NAV Production & Valuation",
    responsibilities: [
      "Supervised daily & monthly P&L and NAV production for hedge funds, performing trade, position, cash, & interest reconciliations with prime brokers to ensure reporting accuracy.",
      "Handled portfolio pricing and accruals using Bloomberg, Reuters, and client data; managed management fees, financing costs, & corporate action validations in line with fund policies.",
      "Investigated P&L variances, resolved pricing discrepancies, provided client support, and prepared financial statements for hedge funds under IFRS and US GAAP frameworks.",
      "Interfaced daily with global prime brokers, fund managers, and external auditors during annual fund audits."
    ],
    keyAchievement: "Supervised zero-defect daily and monthly NAV strikes and broker reconciliations for complex multi-strategy hedge funds.",
    technologies: ["Geneva", "Bloomberg", "Reuters", "Prime Broker Feeds", "P&L Engines"],
    regulations: ["US GAAP", "IFRS", "Hedge Fund Accounting Guidelines"],
  },
  {
    id: "sbi-mf",
    company: "S.B.I. Mutual Fund",
    role: "Assistant Manager",
    period: "October 2003 – June 2005",
    location: "Mutual Funds / AMC Operations (JV with Société Générale Asset Management, France)",
    type: "Business Analyst",
    category: "ba",
    domain: "Mutual Fund Administration, General Ledger & Statutory Audits",
    responsibilities: [
      "Prepared MIS & financial reports for SBI and Société Générale Asset Management, France (JV partner of SBI Mutual Fund), supporting management & regulatory reporting requirements.",
      "Performed general ledger scrutiny, prepared financial statements, P&L, & balance sheet for the AMC (Asset Management Company).",
      "Coordinated tax, statutory, & internal audits ensuring compliance and accuracy in financial reporting.",
      "Maintained audit-ready statutory accounting books in accordance with domestic regulatory guidelines and international joint-venture standards."
    ],
    keyAchievement: "Executed general ledger scrutiny, AMC financial statement preparation, and regulatory MIS for SBI and Société Générale Asset Management.",
    technologies: ["General Ledger Systems", "Financial MIS", "Excel Modeling", "Accounting Software"],
    regulations: ["Mutual Fund Regulations", "Statutory Audit Mandates", "Tax Compliance"],
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-aithon",
    title: "AI-Powered NAV Oversight & Automated Reconciliation Platform",
    company: "Aithon Solutions",
    role: "Associate Director – Product Owner",
    duration: "April 2025 – November 2025",
    domain: "Alternative Investments & Private Capital",
    overview: "Alternative Investment Funds manage multi-asset classes with complex valuation models. Daily and monthly NAV oversight traditionally relied on tedious manual reconciliation, creating operational bottlenecks and audit risks. As Product Owner, Swati drove the product definition for an AI-native oversight platform that automatically ingests fund data, flags valuation anomalies, and provides instant audit trails.",
    challenge: "Fund administrators faced high operational friction due to disparate data feeds, varied valuation methodologies across private equity/hedge funds, and human latency in detecting pricing discrepancies before official NAV strikes.",
    approach: [
      "Conducted intensive elicitation workshops with senior portfolio managers, fund accountants, and quant teams to codify heuristic valuation tolerances.",
      "Authored modular BRDs and user stories with clear acceptance criteria for AI exception detection algorithms.",
      "Designed intuitive exception triage dashboards allowing analysts to resolve multi-asset variance in a single click.",
      "Partnered with data scientists and engineers to tune automated reconciliation thresholds, minimizing false positives."
    ],
    keyArtifacts: [
      "Product Roadmap & Scope Hierarchy",
      "Comprehensive Business Requirements Document (BRD)",
      "User Story Epics & Detailed Acceptance Criteria",
      "Process Flow & Exception Handling Swimlane Diagrams"
    ],
    technologies: ["AI Anomaly Detection", "Automated Reconciliation Engine", "JIRA", "Confluence", "Data Feeds"],
    measurableOutcomes: [
      "Spearheaded product architecture that substantially boosted exception detection efficiency.",
      "Drastically reduced time-to-strike for fund net asset values.",
      "Eliminated manual spreadsheet reconciliation across alternative portfolios."
    ]
  },
  {
    id: "cs-bny",
    title: "Automated SEC Regulatory Reporting Pipeline (Form N-MFP, N-CEN, N-PORT)",
    company: "Bank of New York (BNY)",
    role: "Vice President – Techno Functional Business Analyst",
    duration: "July 2023 – April 2025",
    domain: "Asset Servicing & SEC Regulatory Compliance",
    overview: "BNY services trillions in US money market funds subject to stringent, time-sensitive SEC reporting under Form N-MFP, Form N-CEN, and Form N-PORT. Manual extraction and validation of fund data introduced compliance risk and heavy team overtime. Swati led the business analysis and technical automation between DataMart and the Unity Confluence application to deliver a straight-through reporting machine.",
    challenge: "Strict monthly SEC filing deadlines required 100% data integrity across complex fund asset holdings, shadow pricing, and liquidity ratios with zero margin for schema errors or filing rejection.",
    approach: [
      "Deconstructed complex SEC rule updates into actionable data transformation specifications.",
      "Engineered automated Form N-MFP feed pipelines drawing authoritative holdings directly from DataMart repositories.",
      "Utilized the Unity Confluence application to configure validation checks, cross-field integrity rules, and automated XML package preparation.",
      "Established comprehensive UAT suites and dry-run cycles with compliance officers prior to live SEC EDGAR submission."
    ],
    keyArtifacts: [
      "SEC Data Dictionary & Transformation Specifications",
      "Upstream / Downstream Feed Interface Contracts",
      "Unity Confluence Configuration & Rulebooks",
      "UAT Test Strategy, Scenarios & Sign-Off Documentation"
    ],
    technologies: ["Unity Confluence", "DataMart", "SQL Data Extraction", "XML / SEC EDGAR Schemas", "JIRA"],
    measurableOutcomes: [
      "Achieved a 30% reduction in manual reporting effort across monthly filing cycles.",
      "100% on-time, zero-defect SEC submissions for all supported money market funds.",
      "Substantially reduced production incidents and audit reconciliation queries."
    ]
  },
  {
    id: "cs-wns",
    title: "Enterprise Workflow Orchestration & Touchless Financial Processing",
    company: "WNS Global Services",
    role: "Senior Consultant – Product Owner",
    duration: "May 2021 – June 2023",
    domain: "Insurance Operations & Shared Financial Services",
    overview: "A tier-1 UK insurance company processed tens of thousands of Accounts Payable invoices and Accounts Receivable credit control queries manually across legacy ERPs. Swati served as Product Owner to architect an intelligent workflow orchestration layer, straight-through payment engine, and dynamic analytics platform.",
    challenge: "Fragmented systems, slow invoice cycle times, manual credit chase processes, and reliance on cumbersome monthly static Excel workbooks crippled operational efficiency.",
    approach: [
      "Analyzed As-Is AP/AR workflows across direct operational costs and indirect enterprise expenditures.",
      "Defined the target state architecture for an orchestration middleware layer connecting core legacy databases with modern processing queues.",
      "Implemented automated OCR ingestion and rule-based three-way matching for touchless invoice approval and straight-through payment authorization.",
      "Replaced static spreadsheet reports with real-time, interactive Qlik dashboards for executive credit control visibility."
    ],
    keyArtifacts: [
      "Target Operating Model (TOM) & Process Architecture",
      "Orchestration Middleware Technical BRD",
      "Qlik Dashboard Functional Specifications",
      "Sprint Backlogs, Velocity Metrics & Release Plans"
    ],
    technologies: ["Qlik Sense / Dashboards", "Workflow Orchestration Middleware", "Touchless STP Payments", "ERP Adapters"],
    measurableOutcomes: [
      "Reduced manual operational reporting and invoice processing effort by 60%.",
      "Enabled touchless straight-through payments for high-volume vendor invoices.",
      "Accelerated cash collection cycles and real-time ledger transparency."
    ]
  },
  {
    id: "cs-pco",
    title: "Passive Currency Overlay (PCO) & Multi-Jurisdiction Regulatory Automation",
    company: "Asset Servicing & Alternative Fund Services",
    role: "Senior Techno-Functional Business Analyst",
    duration: "June 2011 – March 2017",
    domain: "FX Hedging, Currency Overlay & European Fund Reporting",
    overview: "Institutions managing cross-border hedge funds and alternative investment structures require sophisticated Passive Currency Overlay (PCO) to hedge foreign exchange exposures. Swati spearheaded the technical design and data integration of foreign-currency exposure feeds, cutting cycle latency from T+1 to same-day, while automating statutory MMIF filings with the Central Bank of Ireland and AIFMD reporting.",
    challenge: "High FX volatility demanded intraday hedging execution for T-NAV funds rather than legacy T+1 lag. Concurrently, European regulators introduced stringent AIFMD and Central Bank of Ireland MMIF filing requirements.",
    approach: [
      "Designed and implemented automated foreign-currency exposure feeds directly from accounting books (Geneva) to the PCO engine.",
      "Upgraded platform data throughput from T+1 to same-day for T-NAV funds, incorporating weekly/monthly NAV options and cross-currency FX schedules.",
      "Automated HedgeTek application workflows with bulk FX-rate uploads and direct Geneva P&L feeds, migrating legacy Excel allocation sheets.",
      "Integrated Milestone PControl for automated NAV extract feeds, delivering independent NAV oversight and third-party risk feed transmission.",
      "Built automated data feeds for Central Bank of Ireland MMIF reporting and AIFMD Transfer Agency filings with Trust & Fiduciary."
    ],
    keyArtifacts: [
      "PCO System Architecture & FX Exposure Specifications",
      "Milestone PControl NAV Ingestion Interface Contract",
      "Central Bank of Ireland MMIF & AIFMD Filing Specs",
      "Geneva-to-HedgeTek Automated Feed Data Dictionary"
    ],
    technologies: ["Milestone PControl", "Geneva", "HedgeTek", "FAS 157 Engine", "FX Exposure Feeds", "Central Bank of Ireland MMIF"],
    measurableOutcomes: [
      "Transitioned PCO currency hedging from T+1 to same-day execution.",
      "100% automated MMIF and AIFMD regulatory compliance.",
      "Replaced error-prone manual Excel allocation templates with fully automated HedgeTek workflows."
    ]
  },
  {
    id: "cs-jpmorgan",
    title: "Global Multi-Entity Investment Banking Migration & GAAP Accounting",
    company: "JPMorgan Chase – Investment Banking Technology",
    role: "AVP – Techno Functional Business Analyst",
    duration: "March 2017 – May 2021",
    domain: "Investment Banking Technology & Global Markets",
    overview: "To optimize post-trade processing and eliminate legacy system fragility, JPMorgan undertook a multi-year migration of trade settlement and Mark-to-Market (MTM) accounting systems across multiple international legal entities spanning Latin America, EMEA, and the Asia-Pacific region.",
    challenge: "Maintaining continuous 24/7 trade settlement integrity while migrating legacy accounting ledgers governed by disparate local statutory requirements and strict US GAAP standards.",
    approach: [
      "Conducted deep-dive interface feed analysis across front-office execution platforms and back-office clearing networks.",
      "Standardized data exchange protocols and feed mapping across LATAM, EMEA, and APAC entities.",
      "Defined automated GL balancing rules and Mark-to-Market valuation checks to guarantee day-one ledger reconciliation.",
      "Coordinated cross-time-zone deployment weekends, failover simulations, and operational dry-runs."
    ],
    keyArtifacts: [
      "Multi-Entity Feed Architecture & Data Dictionaries",
      "GAAP Accounting Rules Engine Specifications",
      "Legacy-to-Strategic Cutover Strategy & Fallback Protocol",
      "End-to-End Trade Lifecycle Traceability Matrix"
    ],
    technologies: ["Trade Settlement Engines", "MTM Valuation Systems", "General Ledger Feeds", "SQL", "Feed Analyzers"],
    measurableOutcomes: [
      "Zero trade failure incidents during the cross-continental migration.",
      "Flawless GAAP-compliant accounting across all transitioned international entities.",
      "Decommissioned legacy platforms, reducing infrastructural maintenance overhead."
    ]
  }
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    category: "Business Analysis Skills",
    iconName: "FileSpreadsheet",
    description: "End-to-end requirements engineering, stakeholder alignment, and data contracts that bridge business and engineering.",
    skills: [
      { name: "Requirements Elicitation (BRD, FRD)", level: "Expert", detail: "Facilitating multi-stakeholder workshops to formulate comprehensive Business & Functional Requirement Documents." },
      { name: "Epics, User Stories & Acceptance Criteria", level: "Expert", detail: "Drafting INVEST-compliant user stories backed by Given-When-Then criteria for high-velocity sprint delivery." },
      { name: "Stakeholder & Vendor Management", level: "Expert", detail: "Partnering with C-suite, operations leads, technology squads, and external software vendors across global hubs." },
      { name: "UAT Coordination & Testing", level: "Expert", detail: "Designing rigorous test strategies, scenario matrices, regression suites, and managing sign-offs." },
      { name: "Data Mapping & Feed Analysis", level: "Expert", detail: "Authoring source-to-target mapping contracts, interface schemas, and data dictionary normalization." },
      { name: "Software Development Life Cycle (SDLC)", level: "Expert", detail: "Guiding initiatives across full SDLC phases from concept to post-production warranty." }
    ]
  },
  {
    category: "Product Management Skills",
    iconName: "Target",
    description: "Driving product roadmaps from conceptual vision to enterprise adoption in mission-critical capital markets.",
    skills: [
      { name: "Product Roadmap Planning", level: "Expert", detail: "Defining multi-quarter release themes, feature sequencing, and aligning technology delivery with business ROI." },
      { name: "Product Backlog Prioritization", level: "Expert", detail: "Applying value-driven frameworks (MoSCoW, WSJF) to optimize sprint backlogs and team throughput." },
      { name: "Agile (Scrum) & Waterfall Delivery", level: "Expert", detail: "Leading sprint cadences, standups, backlog grooming, and hybrid delivery governance." },
      { name: "Release Planning & Governance", level: "Expert", detail: "Coordinating multi-tier deployment cutovers, fallback contingencies, and release communications." }
    ]
  },
  {
    category: "Domain Expertise & BFSI",
    iconName: "Landmark",
    description: "Deep, hands-on capital markets, asset servicing, and hedge fund administration proficiency accumulated over 22 years.",
    skills: [
      { name: "Alternative Investment Fund (AIF) Admin", level: "Specialist", detail: "AIFMD compliance, transfer agency oversight, and multi-asset alternative fund structures." },
      { name: "Hedge Funds & Mutual Funds", level: "Expert", detail: "Multi-strategy hedge fund operations, master-feeder structures, and mutual fund accounting." },
      { name: "NAV Calculation & Independent Oversight", level: "Expert", detail: "Daily/monthly NAV production, strike validation, pricing accruals, and Milestone PControl oversight." },
      { name: "Capital Markets & Trade Lifecycle", level: "Expert", detail: "Front-to-back trade capture, clearing, settlement, prime broker reconciliations, and entity onboarding." },
      { name: "OTC Derivatives & FX Hedging", level: "Advanced", detail: "Passive Currency Overlay (PCO) cross-currency hedging, FX exposure feeds, and swap valuations." },
      { name: "Financial Accounting & Reporting", level: "Expert", detail: "US GAAP, IFRS, General Ledger scrutiny, Balance Sheet, P&L generation, and statutory AMC accounting." }
    ]
  },
  {
    category: "Regulatory Reporting & Compliance",
    iconName: "ShieldAlert",
    description: "Proven expertise delivering 100% compliant filings across US and European regulatory authorities.",
    skills: [
      { name: "SEC Form N-MFP", level: "Specialist", detail: "Automated monthly money market fund reporting directly from DataMart repositories." },
      { name: "SEC Form N-CEN & N-PORT", level: "Specialist", detail: "Fund census reporting, monthly portfolio holding schedules, and liquidity bucket rules." },
      { name: "Central Bank of Ireland MMIF Filings", level: "Specialist", detail: "Monthly Money Market and Investment Funds (MMIF) regulatory compliance reporting." },
      { name: "AIFMD Reporting with Trust & Fiduciary", level: "Specialist", detail: "Alternative Investment Fund Managers Directive transfer agency and risk reporting." },
      { name: "FAS 157 Fair Value Measurement", level: "Specialist", detail: "Level 1, 2, and 3 asset classification, fair-value hierarchies, and month-end holdings refresh." },
      { name: "US GAAP & IFRS Compliance", level: "Expert", detail: "Mark-to-Market (MTM) accounting, GL reconciliations, and statutory audit readiness." }
    ]
  },
  {
    category: "Core Financial Applications",
    iconName: "Wrench",
    description: "Deep hands-on literacy in the financial industry's leading portfolio accounting and asset servicing platforms.",
    skills: [
      { name: "Geneva (Advent)", level: "Advanced", detail: "Hedge fund portfolio accounting, P&L production, automated feed extraction to HedgeTek." },
      { name: "Hedge Tek", level: "Advanced", detail: "Bulk FX-rate uploads, income allocation, automated P&L feeds, and investor accounting." },
      { name: "Milestone PControl", level: "Advanced", detail: "Automated NAV extract feeds from TA/FA systems for independent fund NAV oversight." },
      { name: "Invest One", level: "Advanced", detail: "Fund accounting, asset servicing, multi-currency valuation, and ledger balancing." },
      { name: "Eagle (PACE / STAR)", level: "Advanced", detail: "Enterprise data management, investment accounting, and portfolio performance analysis." },
      { name: "Kondor (Finastra)", level: "Advanced", detail: "Treasury, OTC derivatives trade capture, risk management, and market data feeds." },
      { name: "Unity Confluence & DataMart", level: "Advanced", detail: "Automated regulatory reporting pipelines, data extraction, and SEC filing packages." },
      { name: "Qlik Sense, Bloomberg & Reuters", level: "Expert", detail: "Executive business intelligence dashboards, real-time pricing, and corporate action validation." }
    ]
  },
  {
    category: "Global Cross-Border Leadership",
    iconName: "Globe2",
    description: "Bridging global capital markets with multi-disciplinary squads across US, EMEA, and APAC.",
    skills: [
      { name: "Global Distributed Teams (US, EMEA, APAC)", level: "Expert", detail: "Leading cross-functional engineering, operations, and compliance squads across time zones." },
      { name: "Executive Stakeholder Engagement", level: "Expert", detail: "Collaborating with Managing Directors, chief controllers, fund directors, and audit committees." },
      { name: "Change Management & Adoption", level: "Expert", detail: "Training operational teams and ensuring seamless transition to automated digital platforms." },
      { name: "Third-Party & Vendor Integrations", level: "Expert", detail: "Managing vendor selection, SLAs, interface contracts, and prime broker integrations." }
    ]
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Elicitation & Domain Discovery",
    title: "Deconstruct Complexity",
    description: "Conduct structured stakeholder workshops, unearth unstated business needs, and analyze existing operational friction across front, middle, and back-office silos.",
    deliverables: ["Stakeholder Matrix", "As-Is Process Map", "Operational Gap Analysis"]
  },
  {
    step: "02",
    phase: "Specification & Product Architecture",
    title: "Define the Target State",
    description: "Translate high-level strategic objectives into crystal-clear BRDs, technical interface contracts, and INVEST-compliant user stories backed by definitive acceptance criteria.",
    deliverables: ["Comprehensive BRD / FRD", "Sprint Ready Epics", "Data Mapping Specifications"]
  },
  {
    step: "03",
    phase: "Agile Orchestration & Engineering Bridge",
    title: "Build with Momentum",
    description: "Serve as the intellectual bridge between business users and engineering squads. Prioritize backlogs, resolve ambiguity in daily standups, and steer sprint deliverables.",
    deliverables: ["Groomed Backlog", "Sprint Cadence", "Continuous Alignment Reviews"]
  },
  {
    step: "04",
    phase: "Regulatory Validation & Governance",
    title: "Ensure Zero-Defect Compliance",
    description: "Institute rigorous validation rules, reconciliation checkpoints, and exhaustive UAT cycles to guarantee strict compliance with SEC, Central Bank of Ireland, and GAAP standards.",
    deliverables: ["UAT Sign-off", "Regulatory Verification", "Exception Handling Protocols"]
  },
  {
    step: "05",
    phase: "Value Realization & Continuous Evolution",
    title: "Measure & Maximize ROI",
    description: "Deploy solutions with structured change management, monitor throughput and operational efficiency gains, and iterate based on real user feedback.",
    deliverables: ["Efficiency KPI Audits", "Executive Dashboards", "Platform Evolution Roadmap"]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Swati has an uncanny ability to translate high-stakes regulatory complexity into clear, actionable technical specifications. Her leadership on our SEC reporting automation delivered massive efficiency gains and total audit confidence.",
    author: "Senior Managing Director",
    organization: "Global Asset Servicing & Fund Administration",
    context: "On Regulatory Reporting Automation"
  },
  {
    quote: "Working with Swati as a Product Owner transformed our team's velocity. She bridges the gap between deep financial domain rules and software engineering better than anyone in the industry.",
    author: "VP of Engineering",
    organization: "Investment Banking Technology",
    context: "On Multi-Entity Platform Migration"
  },
  {
    quote: "Her relentless focus on exception handling and automated reconciliation eradicated 60% of our manual operational overhead. An invaluable partner for any high-scale digital transformation.",
    author: "Head of Operational Excellence",
    organization: "Enterprise Financial Services",
    context: "On Touchless Workflow Orchestration"
  }
];
