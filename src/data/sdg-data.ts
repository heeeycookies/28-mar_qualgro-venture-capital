// sdg-data.ts — drop this into your src/data/ folder
// Source: Qualgro ESG Policy, December 2025

export const sdgData = [
  {
    id: 3,
    title: "Good Health & Well-Being",
    description: "Ensure healthy lives and promote well-being for all at all ages",
    color: "#4C9F38",
    stats: [
      { value: "10M+", label: "Mothers supported on platform" },
      { value: "7K+", label: "Online support communities" },
    ],
    portfolioExamples: [
      {
        company: "Supermom",
        tagline: "Empowering Mothers in Southeast Asia",
        highlights: [
          "10M mothers on the platform across Indonesia, Singapore & Malaysia",
          ">7K online communities helping mothers share experiences and combat postpartum depression",
          "AI-powered companion bot providing personalised recommendations",
          ">1K income-earning tasks per day for mothers",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning",
    color: "#C5192D",
    stats: [
      { value: "$60M", label: "Tuition fees disbursed" },
      { value: "500K+", label: "Learners reached" },
      { value: "800+", label: "Schools integrated" },
    ],
    portfolioExamples: [
      {
        company: "ErudiFi",
        tagline: "Enabling Students to Access Quality Education",
        highlights: [
          ">55K underserved students supported with affordable instalment plans",
          "60% of borrowers are women",
          "80% from lower-income families",
          "Borrowers earn ~2x the average income of peers who only finished high school",
        ],
      },
      {
        company: "Edmicro",
        tagline: "Making Quality Education Accessible in Vietnam",
        highlights: [
          "89% of student users experienced improved learning quality",
          ">500K learners on the platform",
          ">800 schools integrated with Onluyen.vn nationwide",
          "Self-study library with >120K auto-scored questions and ~5K video lessons",
        ],
      },
      {
        company: "Accredify",
        tagline: "Reducing Credential Fraud and Verification Costs",
        highlights: [
          ">13M verifications completed on >2M issued documents",
          ">99% processed automatically",
          ">900 clients in 9 markets globally",
          "Recognised internationally by >80 countries and 70 airlines",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Decent Work & Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment",
    color: "#A21942",
    stats: [
      { value: "350K+", label: "Jobs created" },
      { value: "2M+", label: "MSMEs empowered" },
      { value: "100K+", label: "Creators earning income" },
    ],
    portfolioExamples: [
      {
        company: "Funding Societies",
        tagline: "Unlocking Financing for Underserved MSMEs",
        highlights: [
          ">350K jobs created by Funding Societies-funded MSMEs across Southeast Asia",
          ">100K MSMEs now access reliable and consistent financing",
          "71% of MSME borrowers accessed formal financing for the first time",
          "~30K women-led MSMEs given access to credit",
        ],
      },
      {
        company: "Ralali",
        tagline: "Empowering MSMEs in Indonesia",
        highlights: [
          ">2M MSMEs served with more reliable supply chains",
          ">USD 1B in sales generated for MSMEs since inception",
          "~700K income-earning tasks created for locals to date",
          "Monthly GMV grew from USD 0.1M to 70M over 10 years",
        ],
      },
      {
        company: "Convosight",
        tagline: "Enabling Community Creators to Earn",
        highlights: [
          ">USD 3M paid out to creators to date",
          "25x increase in payouts with creators earning avg USD 500/month",
          ">100K creators across 75 countries",
          ">150 brands running campaigns through the platform",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Industry, Innovation & Infrastructure",
    description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    color: "#FD6925",
    stats: [
      { value: "115+", label: "Patent databases connected" },
      { value: "7", label: "Countries with network presence" },
      { value: "20%", label: "Energy reduction achieved" },
    ],
    portfolioExamples: [
      {
        company: "Patsnap",
        tagline: "Accelerating Innovation in Developing Countries",
        highlights: [
          "Global patent and innovation data repository drawing from >115 databases",
          "~70% of users driving innovation in healthcare, biosciences & materials",
          "Partnered with WIPO to provide free/low-cost access for developing countries",
          "Team scaled from 200 to 1,000 employees",
        ],
      },
      {
        company: "SynaXG",
        tagline: "Democratizing Access to Communications Technology",
        highlights: [
          "AI-RAN network software deployed across 7 countries",
          "20% reduction in energy consumption and costs with O-RAN solutions",
          "Expanded network coverage in underserved markets including China and Vietnam",
          "Advanced AI algorithms for smarter mobility management and traffic optimization",
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Sustainable Cities & Communities",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
    color: "#FD9D24",
    stats: [
      { value: "6+", label: "SEA markets served" },
      { value: "20M+", label: "Urban consumers reached" },
    ],
    portfolioExamples: [
      {
        company: "Cross-Portfolio Impact",
        tagline: "Building Digital Infrastructure for Inclusive Urban Economies",
        highlights: [
          "Portfolio companies collectively building digital rails for inclusive urban economies across Southeast Asia",
          "Funding Societies and Ralali enabling MSME participation in city supply chains",
          "ShopBack helping >20M urban consumers access affordable daily essentials",
          "SynaXG improving telecom infrastructure reliability in developing cities",
        ],
      },
    ],
  },
  {
    id: 12,
    title: "Responsible Consumption & Production",
    description: "Ensure sustainable consumption and production patterns",
    color: "#BF8B2E",
    stats: [
      { value: "$120M", label: "Consumer savings enabled" },
      { value: "20M+", label: "Consumers making smarter purchases" },
      { value: "20K+", label: "Merchant partners" },
    ],
    portfolioExamples: [
      {
        company: "ShopBack",
        tagline: "Supporting Smarter, More Sustainable Consumption",
        highlights: [
          ">20M consumers across Southeast Asia saving ~5% on daily essentials",
          "~USD 120M cashback disbursed, reducing financial pressure on households",
          ">20K merchant partners across groceries, food and daily categories",
          "Centralised discount hub promoting price transparency and informed purchasing",
        ],
      },
      {
        company: "Ralali",
        tagline: "Sustainable Supply Chains for MSMEs",
        highlights: [
          "More reliable supply chains with faster delivery and transparent pricing",
          "Verified suppliers reducing waste from unreliable procurement",
          "In-app catalogues enabling informed, efficient purchasing decisions for >2M MSMEs",
        ],
      },
    ],
  },
] as const;

export type SDG = (typeof sdgData)[number];
