// two-x-data.ts — drop into src/data/
// Source: Qualgro 2X Criteria deck (Oct 2025) + ESG Policy (Dec 2025)

export const twoXOverview = {
  title: "Aligned with the 2X Challenge",
  subtitle:
    "Qualgro is aligned with the 2X Criteria, the global standard for gender-lens investing established by Development Finance Institutions at the G7.",
  description:
    "The 2X Challenge was launched at the G7 Summit in 2018 as a commitment by DFIs to mobilise capital for investments that advance women's economic participation. Since inception, the initiative has mobilised over US$33 billion globally. At the 2024 G7 Leaders' Summit, DFIs and multilateral institutions committed a further US$20 billion from 2024–2027 to advance women's empowerment.",
  learnMoreUrl: "https://www.2xchallenge.org",
};

// Compact stat highlights for the supporting section on the Impact page
export const twoXStats = [
  { value: "US$33B+", label: "Mobilised globally since 2018" },
  { value: "US$20B", label: "New DFI commitment 2024–2027" },
  { value: "6", label: "2X Criteria dimensions" },
  { value: "30–50%", label: "Qualgro portfolio target" },
];

export const twoXCriteria = [
  {
    id: 1,
    title: "Entrepreneurship & Ownership",
    color: "#2D6A8F",
    icon: "Users", // lucide icon name
    description:
      "Investees where women have a majority ownership stake (51%+) or the business was founded by a woman (50%+ of founders).",
    qualgroAlignment:
      "Several Qualgro portfolio companies are founded or co-founded by women, and we actively seek out women-led businesses across Southeast Asia.",
  },
  {
    id: 2,
    title: "Leadership",
    color: "#3B8A5A",
    icon: "Award",
    description:
      "Women are well-represented in senior management (C-suite and senior officers) or on the Board / Investment Committee, meeting country-sector benchmarks.",
    qualgroAlignment:
      "Qualgro monitors and supports gender diversity at the leadership level across portfolio companies. We track women's representation in senior management as part of our annual ESG reporting.",
  },
  {
    id: 3,
    title: "Employment",
    color: "#D4A843",
    icon: "Briefcase",
    description:
      "The investee meets thresholds for share of women in the workforce, alongside quality employment indicators such as pay equity, anti-discrimination policies, and parental leave.",
    qualgroAlignment:
      "Our portfolio companies like Supermom and Convosight directly create income-earning opportunities for women, while Funding Societies has extended credit to ~30K women-led MSMEs.",
  },
  {
    id: 4,
    title: "Supply Chain",
    color: "#E07A3A",
    icon: "Link",
    description:
      "Commitment to supporting women in the supply chain, with quality indicators going beyond basic compliance.",
    qualgroAlignment:
      "Ralali's B2B marketplace empowers women-run MSMEs to access reliable procurement channels and expand into new product categories and regions.",
  },
  {
    id: 5,
    title: "Products & Services",
    color: "#A23B72",
    icon: "Heart",
    description:
      "Products or services that drive gender-specific positive effects — enhancing the well-being of women and girls, and/or driving gender equity.",
    qualgroAlignment:
      "Supermom's platform directly serves 10M+ mothers with income opportunities and parenting support. ErudiFi provides education financing where 60% of borrowers are women. Edmicro expands learning access to underserved students.",
  },
  {
    id: 6,
    title: "Portfolio",
    color: "#7B3FA0",
    icon: "PieChart",
    description:
      "For funds: at least 30% of investees at origination (or 50% by end of fund life) must meet the 2X Criteria across the other five dimensions.",
    qualgroAlignment:
      "Qualgro targets 30–50% of portfolio companies to be 2X aligned, integrating gender considerations into our investment screening, due diligence, and ongoing monitoring processes.",
  },
] as const;

// Prerequisites that Qualgro meets
export const twoXPrerequisites = [
  {
    title: "Basic 2X ESG",
    description:
      "Qualgro ensures investees are not involved in excluded activities, demonstrate commitment to respecting human rights, and have adequate safeguarding systems in place.",
  },
  {
    title: "Governance & Accountability",
    description:
      "Qualgro meets minimum governance requirements through strategic action on gender equity, management systems including core gender policies, and regular collection of gender-disaggregated data across portfolio companies.",
  },
];

export type TwoXCriterion = (typeof twoXCriteria)[number];
