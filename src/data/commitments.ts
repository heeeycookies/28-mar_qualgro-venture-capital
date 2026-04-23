export interface CommitmentStat {
  value: string;
  label: string;
}

export interface CommitmentBullet {
  text: string;
}

export interface CommitmentCompany {
  name: string;
  description: string;
  stats: CommitmentStat[];
}

export interface Commitment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stats: CommitmentStat[];
  bullets: CommitmentBullet[];
  companies: CommitmentCompany[];
  color: string;
}

export const commitments: Commitment[] = [
  {
    id: "diversity",
    title: "Embracing Diversity",
    subtitle: "",
    description: "",
    color: "hsl(199 89% 38%)",
    stats: [
      { value: ">30%", label: "Of our portfolio companies are founded / co-founded by women" },
      { value: "~20", label: "Countries our portfolio founders have educational experience from" },
      { value: ">70%", label: "Of our portfolio companies have expanded internationally beyond their home country" },
    ],
    bullets: [
      { text: "Qualgro partners with visionary business builders, irrespective of background, nationality, gender, and more." },
      { text: "Qualgro invests into a variety of business models across industries." },
      { text: "Qualgro team diversity - 8 different nationalities, 50-50 female-male ratio, global experience and diverse cultures." },
    ],
    companies: [
      {
        name: "Funding Societies",
        description: "",
        stats: [],
      },
      {
        name: "Ralali",
        description: "",
        stats: [],
      },
      {
        name: "Supermom",
        description: "",
        stats: [],
      },
    ],
  },
  {
    id: "communities",
    title: "Empowering Communities",
    subtitle: "One Of Our Highest Aspirations",
    description:
      "We strive to understand the societies and the stakeholders around us, and to develop innovative, high-impact methods to address their critical needs. Supporting communities (offline and online) to drive economic growth (e.g. income for community members) and social impact (e.g. upskilling).",
    color: "hsl(160 70% 28%)",
    stats: [],
    bullets: [],
    companies: [],
  },
  {
    id: "planet",
    title: "Preserving The Planet",
    subtitle: "",
    description:
      "Qualgro is committed to supporting entrepreneurs to build businesses that positively impact climate change.",
    color: "hsl(140 50% 35%)",
    stats: [],
    bullets: [],
    companies: [
      {
        name: "Bizzi",
        description: "Invoice digitalisation and processing automation",
        stats: [
          { value: ">USD100M", label: "monthly processed $ invoice" },
          { value: "50M", label: "invoices processed to date" },
          { value: "120K", label: "time efficiencies in Accounts Payable" },
        ],
      },
      {
        name: "Brighte",
        description: "Renewable energy financing solution for households",
        stats: [
          { value: ">1M", label: "metric tons of CO2e offset" },
          { value: "AUD1.6B", label: "solar equipment financed" },
          { value: "120K", label: "households accessing clean energy" },
        ],
      },
      {
        name: "Patsnap",
        description: "Online access at scale to innovation data and tools",
        stats: [
          { value: ">10K", label: "enterprise customers" },
          { value: ">40", label: "countries" },
          { value: "160M", label: "patents digitised" },
        ],
      },
    ],
  },
];
