import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Linkedin } from "lucide-react";

type Nationality =
  | "indonesia"
  | "philippines"
  | "china"
  | "malaysia"
  | "cambodia"
  | "australia"
  | "vietnam"
  | "singapore"
  | "france";

type TeamMember = {
  name: string;
  role: string;
  category: "leadership" | "advisory" | "investment" | "operations";
  nationalities: Nationality[];
  bio: string;
  photo: string;
  linkedin?: string;
  quote?: string;
  quoteTheme?: string;
  tags?: string[];
};

const teamMembers: TeamMember[] = [
  {
    name: "Heang Chhor",
    role: "Founder & Managing Partner",
    category: "leadership",
    nationalities: ["cambodia", "france"],
    bio: "Heang is the Founder and Managing Partner of Qualgro. He has over 25 years of experience in strategy consulting and venture capital across Asia-Pacific. Prior to founding Qualgro, Heang was a Senior Partner at McKinsey & Company, where he led the firm's Southeast Asia practice.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07239-scaled-e1653907667242-pq1xuoqadbbnqxi98cuyd8v17hzlnd0l5auew14gy6.jpg",
  },
  {
    name: "Weisheng Neo",
    role: "General Partner",
    category: "leadership",
    nationalities: ["singapore"],
    bio: "Weisheng is a Partner at Qualgro, leading the firm's investment strategy in Data/AI and enterprise software. He brings deep expertise in technology investing and has been instrumental in sourcing and supporting portfolio companies across Southeast Asia.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07151-scaled-e1653907405542-pq1xv4pjlhxj8av1n1rm1mtvb1sua7s0vhxo1qgs0e.jpg",
    linkedin: "https://www.linkedin.com/in/weisheng-neo/",
  },
  {
    name: "Olivier Sibony",
    role: "Investment Committee Member",
    category: "advisory",
    nationalities: ["france"],
    bio: "Olivier is an Investment Committee Member and distinguished professor, author, and strategy expert. He brings decades of experience in strategic decision-making and corporate governance to Qualgro's investment process.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/olivier-sibony-hi-res-p8mvfj66pytsjzbkpbkv8001ni3kr93tgy5b8gluxa.jpg",
    linkedin: "https://www.linkedin.com/in/oliviersibony/",
  },
  {
    name: "Peter Huynh",
    role: "Venture Partner",
    category: "advisory",
    nationalities: ["australia", "vietnam"],
    bio: "Peter is a Venture Partner at Qualgro, bringing extensive experience in building and scaling technology companies across Southeast Asia and Australia. He advises portfolio companies on go-to-market strategy and operational excellence.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07188-scaled-pq1xvkostojepo7u1qo9q0spelm2x2jglp0x7ft32m.jpg",
    linkedin: "https://www.linkedin.com/in/peterjhuynh/",
  },
  {
    name: "Olivier Carnohan",
    role: "Senior Technology & Business Advisor",
    category: "advisory",
    nationalities: ["france"],
    bio: "Olivier serves as Senior Technology and Business Advisor, providing strategic guidance on technology trends, product development, and business model innovation to Qualgro and its portfolio companies.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Olivier-edited-2-scaled-pm8f1a6xhcpfg1nrrpt1stcrro18q2my7nmtx3mymm.jpg",
    linkedin: "https://www.linkedin.com/in/carnohan/",
  },
  {
    name: "Chi Tran",
    role: "Senior Technology Advisor",
    category: "advisory",
    nationalities: ["vietnam"],
    bio: "Chi is a Senior Technology Advisor at Qualgro, bringing deep technical expertise in software architecture, AI/ML systems, and cloud infrastructure to support the firm's due diligence and portfolio company growth.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/chi-pee0wemq30h5qdax1gwcptc1pt6wuhxbui1c6n4qtq.jpg",
  },
  {
    name: "Natasha Eu",
    role: "Head of Finance, Ops & IR",
    category: "operations",
    nationalities: ["singapore"],
    bio: "Natasha leads Finance, Operations, and Investor Relations at Qualgro, overseeing fund administration, financial reporting, and LP engagement across the firm's funds.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07234-scaled-pq1xst1wp8r0j08k7jltdpxufr9695jwvzvgc3wte6.jpg",
    linkedin: "https://www.linkedin.com/in/natasha-eu-28748384/",
  },
  {
    name: "Carlos Camacho",
    role: "Venture Partner",
    category: "advisory",
    nationalities: ["philippines"],
    bio: "Carlos is a Venture Partner at Qualgro, bringing deep expertise in building and scaling technology companies. He supports portfolio companies with strategic guidance on growth, partnerships, and international expansion.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC08877-scaled-e1644210058917-plbaqbdimueeohnxr10i59yjptvjfffliozm0ty5zi.jpg",
    linkedin: "https://www.linkedin.com/in/carlos-camacho-51777197/",
  },
  {
    name: "Badai Tanmizi",
    role: "Investment Principal",
    category: "investment",
    nationalities: ["indonesia"],
    bio: "Badai is a Principal with deep expertise in the Indonesian and broader Southeast Asian tech ecosystem. He focuses on identifying and supporting high-growth B2B and fintech companies.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07147-scaled-e1653908537196-pq1xtqw3ja1c4yvepy8dvheftmmdy9a90ncxm2in66.jpg",
    linkedin: "https://www.linkedin.com/in/badai-tanmizi/",
  },
  {
    name: "Anqi Chen",
    role: "Investment Manager",
    category: "investment",
    nationalities: ["china"],
    bio: "Anqi is a Manager at Qualgro, supporting the investment team across deal sourcing, market research, and due diligence in enterprise software and AI-driven solutions.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/anqi-pee0vr4rc5kzo491uoqohh9iv6eqi2c1f9q76q3l5a.jpeg",
    linkedin: "https://www.linkedin.com/in/anqi-chen-36324314a/",
  },
  {
    name: "Mellissa Ng",
    role: "Investment Manager",
    category: "investment",
    nationalities: ["malaysia"],
    bio: "Mellissa is an Investment Manager at Qualgro, contributing to deal sourcing, due diligence, and portfolio management across the firm's focus sectors in Southeast Asia.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Tem-Members-Mellisa-Ng-rl0lxfz306843jtvak7cji8echyycgoeg1153qywni.jpg",
    linkedin: "https://www.linkedin.com/in/mellissangyh/",
  },
  {
    name: "Goh Ze Tian",
    role: "Investment Analyst",
    category: "investment",
    nationalities: ["singapore"],
    bio: "Ze Tian covers a broad range of software and technology businesses across Southeast Asia and Korea. He believes in taking partnership with founders beyond just capital — tapping on proprietary networks to bridge relevant industry connections, brainstorm strategic ideas, and supporting them through fundraises. He sees his role as being a thoughtful and dependable partner throughout a company's growth journey.\n\nPrior to joining Qualgro, Ze Tian worked in M&A, supporting both buy-and-sell side transactions involving technology businesses, and has completed a Bachelor in Business Management from Singapore Management University (SMU).",
    quote: "Competing in sports taught me that excellence compounds through many little consistent efforts, much like great startups are built through a series of thoughtful decisions, built upon one another. Having worked with a wide range of startups, I aim to partner with founders in making those choices with clarity and conviction.",
    quoteTheme: "Harmonizing personal life with tech, startups & investing",
    tags: ["Software", "AI", "Southeast Asia", "Korea"],
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro_team_img_ze_tian_goh-min-qe308zq9swpt5izv1dclcxetfx4px6qhpb23bjz4cu.jpg",
    linkedin: "https://www.linkedin.com/in/ze-tian-goh-757494152/",
  },
  {
    name: "Ryan Lim",
    role: "Investment Analyst",
    category: "investment",
    nationalities: ["singapore"],
    bio: "Ryan supports Qualgro's investment activities as an Analyst, conducting in-depth research and financial analysis on potential investment opportunities and existing portfolio companies.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro_team_img_ryan_lim-min-qe3090o3zqr3h4yhvvr7xf6a1b034vu81fpkstxq6m.jpg",
    linkedin: "https://www.linkedin.com/in/ryanlimfengsheng/",
  },
  {
    name: "Ray Chin",
    role: "Finance & Ops Associate",
    category: "operations",
    nationalities: ["singapore"],
    bio: "Ray supports the Finance and Operations functions at Qualgro, contributing to fund administration, reporting, and operational workflows.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Team-Members-Ray-Chin-rl0m1ilwmbsuepwvibl5ch8b0lw7p8uj06svywxhou.jpg",
    linkedin: "https://www.linkedin.com/in/ray-chin-b0b6b4188/",
  },
  {
    name: "Sean Leong",
    role: "Finance & Ops Analyst",
    category: "operations",
    nationalities: ["singapore"],
    bio: "Sean supports the Finance and Operations functions at Qualgro, contributing to fund administration, reporting, and operational workflows.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro_team_img_sean_leong-min-qe3091ly6ksdsqx4qe5uhwxqmovgckxydkd2a3wc0e.jpg",
    linkedin: "https://www.linkedin.com/in/sean-leong-644906120/",
  },
  {
    name: "Wen En Lim",
    role: "Operations Analyst",
    category: "operations",
    nationalities: ["singapore"],
    bio: "Wen En is an Operations Analyst at Qualgro, focused on market intelligence and supporting the team's investment decision-making process across the firm's core sectors.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro_team_img_wen_en_lim-min-qe308zq9swpt5izv1dclcxetfx4px6qhpb23bjz4cu.jpg",
    linkedin: "https://www.linkedin.com/in/wenenlim/",
  },
  {
    name: "Laetitia Chia",
    role: "Finance & Ops Analyst",
    category: "operations",
    nationalities: ["singapore"],
    bio: "Laetitia is a Finance and Operations Analyst at Qualgro, helping ensure smooth day-to-day operations and investor reporting across the firm's funds.",
    photo: "/images/team/laetitia-chia.png",
    linkedin: "https://www.linkedin.com/in/laetitiachia/",
  },
  {
    name: "Shimin Cai",
    role: "Investment Analyst",
    category: "investment",
    nationalities: ["singapore"],
    bio: "Shimin is an Investment Analyst at Qualgro, supporting the team with research, financial modeling, and due diligence across the firm's focus sectors.",
    photo: "/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/shimin-cai-8a4693232/",
  },
];
const categories = [
  { key: "all", label: "All" },
  { key: "leadership", label: "Leadership" },
  { key: "advisory", label: "Advisory" },
  { key: "investment", label: "Investment" },
  { key: "operations", label: "Operations" },
];

const nationalities: { key: "all" | Nationality; label: string; flag: string }[] = [
  { key: "all", label: "All", flag: "🌏" },
  { key: "singapore", label: "Singapore", flag: "🇸🇬" },
  { key: "indonesia", label: "Indonesia", flag: "🇮🇩" },
  { key: "philippines", label: "Philippines", flag: "🇵🇭" },
  { key: "malaysia", label: "Malaysia", flag: "🇲🇾" },
  { key: "vietnam", label: "Vietnam", flag: "🇻🇳" },
  { key: "cambodia", label: "Cambodia", flag: "🇰🇭" },
  { key: "china", label: "China", flag: "🇨🇳" },
  { key: "australia", label: "Australia", flag: "🇦🇺" },
  { key: "france", label: "France", flag: "🇫🇷" },
];

const flagOf = (n: Nationality) => nationalities.find((x) => x.key === n)?.flag ?? "";
const labelOf = (n: Nationality) => nationalities.find((x) => x.key === n)?.label ?? "";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeNationality, setActiveNationality] = useState<"all" | Nationality>("all");

  const filtered = teamMembers.filter((m) => {
    const catOk = activeFilter === "all" || m.category === activeFilter;
    const natOk = activeNationality === "all" || m.nationalities.includes(activeNationality);
    return catOk && natOk;
  });


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHero
        variant="cool"
        tagline="Our People"
        title={<>Diverse experience.<br /><span className="text-emerald">Global network.</span></>}
        description="Qualgro's team combines startup, business, technology, investment and strategy experience to help startups accelerate growth and build international companies across Southeast Asia and Australia."
      />

      {/* Sticky filter rail + grouped grid */}
      <section className="py-20 sm:py-28 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sticky filter sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald mb-5">
                  Browse
                </p>
                <ul className="flex lg:flex-col gap-2 lg:gap-1 flex-wrap">
                  {categories.map((cat) => {
                    const count = cat.key === "all" ? teamMembers.length : teamMembers.filter(m => m.category === cat.key).length;
                    const active = activeFilter === cat.key;
                    return (
                      <li key={cat.key}>
                        <button
                          onClick={() => setActiveFilter(cat.key)}
                          className={`group flex items-center justify-between gap-4 w-full px-4 py-2.5 rounded-lg text-left text-sm font-display font-semibold transition-all ${
                            active
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-primary"
                          }`}
                        >
                          <span>{cat.label}</span>
                          <span className={`text-[11px] tabular-nums ${active ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                            {String(count).padStart(2, "0")}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald mb-3 mt-8">
                  Nationality
                </p>
                <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">
                  Explore the diverse nationality backgrounds of our team.
                </p>
                <ul className="flex lg:flex-col gap-2 lg:gap-1 flex-wrap">
                  {nationalities.map((nat) => {
                    const count =
                      nat.key === "all"
                        ? teamMembers.length
                        : teamMembers.filter((m) => m.nationalities.includes(nat.key as Nationality)).length;
                    const active = activeNationality === nat.key;
                    return (
                      <li key={nat.key}>
                        <button
                          onClick={() => setActiveNationality(nat.key)}
                          className={`group flex items-center justify-between gap-4 w-full px-4 py-2.5 rounded-lg text-left text-sm font-display font-semibold transition-all ${
                            active
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-primary"
                          }`}
                        >
                          <span className="flex items-center gap-2"><span className="text-base leading-none">{nat.flag}</span>{nat.label}</span>
                          <span className={`text-[11px] tabular-nums ${active ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                            {String(count).padStart(2, "0")}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="hidden lg:block mt-10 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Click any portrait to read their full biography and connect on LinkedIn.
                  </p>
                </div>

              </div>
            </aside>

            {/* Grid */}
            <div className="lg:col-span-9">
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((member, i) => (
                    <motion.div
                      key={member.name}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => setSelectedMember(member)}
                      className="group cursor-pointer"
                    >
                      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-4 bg-muted">
                        <img
                          src={member.photo}
                          alt={member.name}
                          style={member.name === "Laetitia Chia" ? { transform: "scale(1.3)", transformOrigin: "center 30%" } : undefined}
                          className="w-full h-full object-cover"
                        />
                        {/* Nationality flag chip */}
                        <div className="absolute top-3 left-3 flex gap-1">
                          {member.nationalities.map((n) => (
                            <span
                              key={n}
                              title={labelOf(n)}
                              className="text-base leading-none px-1.5 py-1 rounded-md bg-background/85 backdrop-blur-sm shadow-sm"
                            >
                              {flagOf(n)}
                            </span>
                          ))}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-x-4 bottom-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="text-[10px] font-display font-extrabold text-emerald uppercase tracking-[0.25em]">
                            View profile →
                          </span>
                        </div>
                      </div>
                      <h3 className="font-display text-base font-bold text-primary group-hover:text-investment-blue transition-colors leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-snug">
                        {member.role}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-surface-alt relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end max-w-5xl mx-auto"
          >
            <div className="lg:col-span-7">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald mb-4">
                Careers at Qualgro
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[0.95]">
                Want to join<br />the mission?
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-muted-foreground text-base leading-relaxed">
                We're always looking for exceptional talent to join our investment and platform teams.
              </p>
              <a
                href="mailto:info@qualgro.com"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald text-emerald-foreground font-display font-semibold text-sm hover:translate-y-[-1px] transition-transform"
              >
                info@qualgro.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Member Popup Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <div
                className="bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-border flex flex-col sm:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo side — fixed 3:4 frame so every portrait sits at native size */}
                <div className="relative w-full sm:w-2/5 shrink-0 bg-muted">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={selectedMember.photo}
                      alt={selectedMember.name}
                      style={selectedMember.name === "Laetitia Chia" ? { transform: "scale(1.3)", transformOrigin: "center 30%" } : undefined}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Flag chips on modal photo */}
                    <div className="absolute top-3 left-3 flex gap-1">
                      {selectedMember.nationalities.map((n) => (
                        <span
                          key={n}
                          title={labelOf(n)}
                          className="text-base leading-none px-1.5 py-1 rounded-md bg-background/85 backdrop-blur-sm shadow-sm"
                        >
                          {flagOf(n)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 sm:hidden p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content side */}
                <div className="relative flex-1 p-8 overflow-y-auto max-h-[60vh] sm:max-h-[90vh]">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="hidden sm:flex absolute top-4 right-4 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                  >
                    <X size={18} />
                  </button>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <p className="text-emerald font-display text-xs font-semibold uppercase tracking-[0.2em] mb-1">
                      {selectedMember.role}
                    </p>
                    <h2 className="font-display text-2xl font-bold text-primary mb-1">
                      {selectedMember.name}
                    </h2>
                    <p className="text-[11px] font-display uppercase tracking-[0.18em] text-muted-foreground/70 mb-5">
                      {selectedMember.nationalities
                        .map((n) => nationalities.find((x) => x.key === n)?.label)
                        .filter(Boolean)
                        .join(" · ")}
                    </p>

                    {selectedMember.quote && (
                      <motion.figure
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative mb-6 pl-5 border-l-2 border-emerald/60"
                      >
                        {selectedMember.quoteTheme && (
                          <figcaption className="text-[10px] font-display font-extrabold uppercase tracking-[0.25em] text-emerald mb-2">
                            {selectedMember.quoteTheme}
                          </figcaption>
                        )}
                        <blockquote className="font-display text-[15px] leading-relaxed text-primary italic">
                          "{selectedMember.quote}"
                        </blockquote>
                      </motion.figure>
                    )}

                    <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
                      {selectedMember.bio.split("\n\n").map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>

                    {selectedMember.tags && selectedMember.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {selectedMember.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full bg-emerald/10 text-emerald text-[11px] font-display font-semibold uppercase tracking-[0.12em]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {selectedMember.linkedin && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                      className="mt-6 pt-6 border-t border-border"
                    >
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(selectedMember.linkedin, "_blank", "noopener,noreferrer");
                        }}
                        className="inline-flex items-center gap-2 text-sm font-display font-semibold text-investment-blue hover:text-primary transition-colors cursor-pointer"
                      >
                        <Linkedin size={16} />
                        Connect on LinkedIn
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
