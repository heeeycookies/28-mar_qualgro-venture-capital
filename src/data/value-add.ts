export type QuoteCardColor =
  | "emerald"
  | "sky"
  | "lavender"
  | "peach"
  | "mint"
  | "butter"
  | "coral"
  | "periwinkle"
  | "sage"
  | "rose";

export interface FounderQuote {
  company: string;
  founder: string;
  text: string;
  color: QuoteCardColor;
}

export interface Capability {
  number: string;
  title: string;
  description: string;
  quotes: FounderQuote[];
}

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Dedicated partnerships and advisory",
    description:
      "When you partner with Qualgro, you get partners genuinely in it with you — working together on things that move the needle, from early go-to-market strategies, to thoughtful product feedback, to simply being a sounding board when navigating difficult decisions. We show up for the messy moments in between.",
    quotes: [
      {
        company: "Supermom",
        founder: "Luke",
        text: "Qualgro has been willing to roll up their sleeves and take on a partnership role in growing our business with their strategic advice and extensive network. As a growth-stage company, Supermom couldn't have picked a better partner to help supercharge our growth.",
        color: "emerald",
      },
      {
        company: "Appier",
        founder: "Chih-Han",
        text: "Qualgro has been very supportive as an investor, especially with country expansion.",
        color: "sky",
      },
    ],
  },
  {
    number: "02",
    title: "Strong domain expertise in Data, AI & Software",
    description:
      "Qualgro brings concentrated expertise in scaling data, AI, and software businesses — offering practical advice from key learnings through close partnerships with our portfolio companies.",
    quotes: [
      {
        company: "Hevo",
        founder: "Manish",
        text: "Qualgro has been a helpful partner to Hevo, understanding our product deeply and assisting us on topics such as product-led growth, and sales distribution.",
        color: "lavender",
      },
      {
        company: "NoBroker",
        founder: "Amit",
        text: "Qualgro took the time to understand our business deeply and our long-term vision.",
        color: "peach",
      },
    ],
  },
  {
    number: "03",
    title: "A decade building alongside extraordinary founders",
    description:
      "We have spent more than 10 years working closely with founders across Southeast Asia and globally — from early-stage bets all the way through to exits and IPOs. That journey has given us a genuine understanding of what distinguishes the best companies and the quality of decisions made at every stage of growth. We bring that pattern recognition to every conversation.",
    quotes: [
      {
        company: "ShopBack",
        founder: "Henry",
        text: "Qualgro has supported us with their business insights and network, to strengthen our regional leadership, helping us expand into new countries such as Thailand and Australia.",
        color: "mint",
      },
      {
        company: "Funding Societies",
        founder: "Kelvin",
        text: "Qualgro has been a great sounding board, helping with country expansion and numerous partnership connections.",
        color: "butter",
      },
    ],
  },
  {
    number: "04",
    title: "Committed capital to see through the next stages",
    description:
      "Beyond the initial investment, we mostly follow on into our portfolio companies as they grow. Founders should not have to rebuild trust with a new investor every stage. With Qualgro, the relationship deepens as your company scales.",
    quotes: [
      {
        company: "Patsnap",
        founder: "Jeffrey",
        text: "Qualgro has been a committed partner in supporting our global expansion with business connections and advice.",
        color: "coral",
      },
      {
        company: "Brighte",
        founder: "Katherine",
        text: "Qualgro has been a fantastic supporter on Brighte's journey, providing guidance on strategy, capital raises and technology.",
        color: "periwinkle",
      },
    ],
  },
  {
    number: "05",
    title: "Access to proprietary networks and relationships",
    description:
      "Over the years, we have amassed a broad and deep network across industries, geographies and capital markets — and we extend these to our founders. Whether it's a warm introduction to a strategic partner in a new market, a connection to a key enterprise customer, or a curated pathway to your next institutional investor, we make the right introductions at the right time. Our LP base includes regional conglomerates, leading financial institutions and government bodies across Asia.",
    quotes: [
      {
        company: "Sirion",
        founder: "Ajay",
        text: "Qualgro delved deep into their personal networks and tapped their goodwill to create market and customer access for Sirion — their efforts resulted in us closing a major account in a new geography.",
        color: "sage",
      },
      {
        company: "Wavecell",
        founder: "Olivier Gerhardt",
        text: "Qualgro made warm introductions across their network at the moments that mattered — opening doors we couldn't have opened alone.",
        color: "rose",
      },
    ],
  },
];

// Tailwind-safe color map for quote cards. Background + text colors tuned for AA contrast.
export const quoteCardPalette: Record<
  QuoteCardColor,
  { bg: string; text: string; meta: string }
> = {
  emerald:    { bg: "#00C389", text: "#062a1f", meta: "#062a1f" },
  sky:        { bg: "#9EC9FF", text: "#0E3A5D", meta: "#0E3A5D" },
  lavender:   { bg: "#D9C9FF", text: "#2A1A55", meta: "#2A1A55" },
  peach:      { bg: "#FFB99A", text: "#4A1F0F", meta: "#4A1F0F" },
  mint:       { bg: "#B6F0D6", text: "#0E3A2C", meta: "#0E3A2C" },
  butter:     { bg: "#FFE38A", text: "#3D2A00", meta: "#3D2A00" },
  coral:      { bg: "#FF7A6C", text: "#3A0E0A", meta: "#3A0E0A" },
  periwinkle: { bg: "#A8B4FF", text: "#15205C", meta: "#15205C" },
  sage:       { bg: "#B8CCA6", text: "#1F3414", meta: "#1F3414" },
  rose:       { bg: "#F2B6C6", text: "#46101F", meta: "#46101F" },
};
