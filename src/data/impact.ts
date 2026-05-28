import supermomLogo from "@/assets/portfolio/supermom_logo.png";
import erudifiLogo from "@/assets/portfolio/erudifi_logo.png";
import ralaliLogo from "@/assets/portfolio/ralali_logo.png";
import edmicroLogo from "@/assets/portfolio/edmicro_logo.png";
import fundingSocietiesLogo from "@/assets/portfolio/funding-societies_logo.png";
import shopbackLogo from "@/assets/portfolio/shopback_logo.png";
import patsnapLogo from "@/assets/portfolio/patsnap_logo.png";
import convosightLogo from "@/assets/portfolio/convosight_logo.png";
import accredifyLogo from "@/assets/portfolio/accredify_logo.png";
import synaxgLogo from "@/assets/portfolio/synaxg_logo.svg";

export const impactHero = {
  eyebrow: "ENVIRONMENTAL · SOCIAL · GOVERNANCE",
  titleLine1: "Investing for",
  titleLine2: "A Better Tomorrow",
  description:
    "At Qualgro, we are committed to making a positive impact on the world through our capabilities and our investments, partnering with visionary entrepreneurs, to build innovative companies that create lasting and positive change on the societies and economies in which they operate.",
  scrollCue: "Discover More",
};

export const portfolioCompanies = [
  {
    id: "supermom",
    logo: supermomLogo,
    name: "Supermom",
    tagline: "Empowering mothers across Southeast Asia to earn income and raise children with confidence.",
    aiAngle: "AI-powered companion bot with 1.6M+ personalised conversations to date.",
    sdgs: [5, 8, 10],
    highlights: [
      { value: "10M+", label: "Mothers on platform" },
      { value: "7K+", label: "Online communities" },
      { value: "3", label: "Markets served" },
    ],
  },
  {
    id: "erudifi",
    logo: erudifiLogo,
    name: "ErudiFi",
    tagline: "Enabling students in Southeast Asia to access quality education through affordable financing.",
    aiAngle: "Data-driven credit scoring model improving repayment rates and extending to new loan products.",
    sdgs: [4, 5, 8],
    highlights: [
      { value: "$60M", label: "Tuition disbursed" },
      { value: "55K+", label: "Students financed" },
      { value: "170", label: "Partner schools" },
    ],
  },
  {
    id: "ralali",
    logo: ralaliLogo,
    name: "Ralali",
    tagline: "Empowering Indonesia's MSMEs to grow through a B2B marketplace.",
    aiAngle: "AI-powered procurement with automated supplier matching and logistics optimisation.",
    sdgs: [8, 9],
    highlights: [
      { value: "2M+", label: "MSMEs served" },
      { value: "$1B+", label: "Sales generated" },
      { value: "~700K", label: "Tasks created" },
    ],
  },
  {
    id: "edmicro",
    logo: edmicroLogo,
    name: "Edmicro",
    tagline: "Making quality education accessible to every student in Vietnam.",
    aiAngle: "Machine learning-driven personalised practice and real-time mastery tracking for K-12.",
    sdgs: [4, 8, 9],
    highlights: [
      { value: "500K+", label: "Learners reached" },
      { value: "800+", label: "Schools integrated" },
      { value: "89%", label: "Improved learning" },
    ],
  },
  {
    id: "funding-societies",
    logo: fundingSocietiesLogo,
    name: "Funding Societies",
    tagline: "Unlocking financing for underserved MSMEs across Southeast Asia.",
    aiAngle: "AI-driven risk assessment maintaining ~2% cumulative default rates.",
    sdgs: [5, 8, 9],
    highlights: [
      { value: "350K+", label: "Jobs created" },
      { value: "100K+", label: "MSMEs financed" },
      { value: "30K", label: "Women-led MSMEs" },
    ],
  },
  {
    id: "shopback",
    logo: shopbackLogo,
    name: "ShopBack",
    tagline: "Helping consumers maximise savings and shop smarter online.",
    aiAngle: "AI-powered product discovery connecting consumers with personalised deals across 20K+ merchants.",
    sdgs: [8, 10],
    highlights: [
      { value: "$120M", label: "Cashback disbursed" },
      { value: "20M+", label: "Consumers reached" },
      { value: "20K+", label: "Merchant partners" },
    ],
  },
  {
    id: "patsnap",
    logo: patsnapLogo,
    name: "Patsnap",
    tagline: "Accelerating innovation through IP intelligence.",
    aiAngle: "AI-powered analytics engine extracting actionable insights from 115+ patent databases globally.",
    sdgs: [4, 9],
    highlights: [
      { value: "115+", label: "Patent databases" },
      { value: "~70%", label: "Users in critical innovation" },
      { value: "1,000", label: "Team globally" },
    ],
  },
  {
    id: "convosight",
    logo: convosightLogo,
    name: "Convosight",
    tagline: "Enabling community creators to generate sustainable income.",
    aiAngle: "Proprietary AI-powered conversation ranking and fast search algorithms for community insights.",
    sdgs: [5, 8, 10],
    highlights: [
      { value: "100K+", label: "Creators joined" },
      { value: "$3M+", label: "Paid to creators" },
      { value: "150+", label: "Brand partners" },
    ],
  },
  {
    id: "accredify",
    logo: accredifyLogo,
    name: "Accredify",
    tagline: "Reducing credential fraud and verification costs globally.",
    aiAngle: "Automated verification processing 99%+ of document checks instantly across 80+ countries.",
    sdgs: [4, 8],
    highlights: [
      { value: "900+", label: "Clients in 9 markets" },
      { value: "13M+", label: "Verifications done" },
      { value: "2M+", label: "Documents issued" },
    ],
  },
  {
    id: "synaxg",
    logo: synaxgLogo,
    name: "SynaXG",
    tagline: "Democratizing communications technology in developing countries.",
    aiAngle: "AI-RAN software optimising network performance with 20% energy reduction.",
    sdgs: [8, 9],
    highlights: [
      { value: "7", label: "Countries" },
      { value: "20%", label: "Energy reduction" },
      { value: "AI-RAN", label: "Alliance member" },
    ],
  },
];

export const prioritySDGs = [
  {
    number: 4,
    color: "#C5192D",
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning.",
    companyIds: ["erudifi", "edmicro", "patsnap", "accredify"],
  },
  {
    number: 5,
    color: "#FF3A21",
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls.",
    companyIds: ["supermom", "erudifi", "funding-societies", "convosight"],
  },
  {
    number: 8,
    color: "#A21942",
    title: "Decent Work & Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth.",
    companyIds: ["funding-societies", "ralali", "supermom", "shopback", "convosight", "accredify", "synaxg", "edmicro"],
  },
  {
    number: 9,
    color: "#FD6925",
    title: "Industry, Innovation & Infrastructure",
    description: "Build resilient infrastructure and foster innovation.",
    companyIds: ["patsnap", "funding-societies", "ralali", "edmicro", "synaxg"],
  },
  {
    number: 10,
    color: "#DD1367",
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries.",
    companyIds: ["funding-societies", "shopback", "erudifi", "supermom", "convosight"],
  },
];

export const methodology = {
  steps: [
    { step: "01", title: "Screen", description: "ESG risk assessment during diligence." },
    { step: "02", title: "Map", description: "Align each company to relevant UN SDGs." },
    { step: "03", title: "Track", description: "Annual company-reported impact KPIs." },
    { step: "04", title: "Report", description: "Transparent reporting to LPs." },
  ],
  disclaimer:
    "Portfolio metrics are company-reported and reflect cumulative progress since inception.",
};
