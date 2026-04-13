import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  category: "leadership" | "advisory" | "investment" | "operations";
  bio: string;
  photo: string;
  linkedin?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Heang Chhor",
    role: "Founder & Managing Partner",
    category: "leadership",
    bio: "Heang is the Founder and Managing Partner of Qualgro. He has over 25 years of experience in strategy consulting and venture capital across Asia-Pacific. Prior to founding Qualgro, Heang was a Senior Partner at McKinsey & Company, where he led the firm's Southeast Asia practice.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07239-scaled-e1653907667242-pq1xuoqadbbnqxi98cuyd8v17hzlnd0l5auew14gy6.jpg",
    linkedin: "https://www.linkedin.com/in/heangchhor/",
  },
  {
    name: "Weisheng Neo",
    role: "Partner",
    category: "leadership",
    bio: "Weisheng is a Partner at Qualgro, leading the firm's investment strategy in Data/AI and enterprise software. He brings deep expertise in technology investing and has been instrumental in sourcing and supporting portfolio companies across Southeast Asia.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07151-scaled-e1653907405542-pq1xv4pjlhxj8av1n1rm1mtvb1sua7s0vhxo1qgs0e.jpg",
    linkedin: "https://www.linkedin.com/in/weisheng/",
  },
  {
    name: "Olivier Sibony",
    role: "Investment Committee Member",
    category: "advisory",
    bio: "Olivier is an Investment Committee Member and distinguished professor, author, and strategy expert. He brings decades of experience in strategic decision-making and corporate governance to Qualgro's investment process.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/olivier-sibony-hi-res-p8mvfj66pytsjzbkpbkv8001ni3kr93tgy5b8gluxa.jpg",
  },
  {
    name: "Peter Huynh",
    role: "Venture Partner",
    category: "advisory",
    bio: "Peter is a Venture Partner at Qualgro, bringing extensive experience in building and scaling technology companies across Southeast Asia and Australia. He advises portfolio companies on go-to-market strategy and operational excellence.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07188-scaled-pq1xvkostojepo7u1qo9q0spelm2x2jglp0x7ft32m.jpg",
  },
  {
    name: "Olivier Carnohan",
    role: "Senior Technology & Business Advisor",
    category: "advisory",
    bio: "Olivier serves as Senior Technology and Business Advisor, providing strategic guidance on technology trends, product development, and business model innovation to Qualgro and its portfolio companies.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Olivier-edited-2-scaled-pm8f1a6xhcpfg1nrrpt1stcrro18q2my7nmtx3mymm.jpg",
  },
  {
    name: "Chi Tran",
    role: "Senior Technology Advisor",
    category: "advisory",
    bio: "Chi is a Senior Technology Advisor at Qualgro, bringing deep technical expertise in software architecture, AI/ML systems, and cloud infrastructure to support the firm's due diligence and portfolio company growth.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/chi-pee0wemq30h5qdax1gwcptc1pt6wuhxbui1c6n4qtq.jpg",
  },
  {
    name: "Natasha Eu",
    role: "Head of Finance, Ops & IR",
    category: "operations",
    bio: "Natasha leads Finance, Operations, and Investor Relations at Qualgro, overseeing fund administration, financial reporting, and LP engagement across the firm's funds.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07234-scaled-pq1xst1wp8r0j08k7jltdpxufr9695jwvzvgc3wte6.jpg",
    linkedin: "https://www.linkedin.com/in/natasha-eu/",
  },
  {
    name: "Carlos Camacho",
    role: "Venture Partner",
    category: "advisory",
    bio: "Carlos is a Venture Partner at Qualgro, bringing deep expertise in building and scaling technology companies. He supports portfolio companies with strategic guidance on growth, partnerships, and international expansion.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC08877-scaled-e1644210058917-plbaqbdimueeohnxr10i59yjptvjfffliozm0ty5zi.jpg",
  },
  {
    name: "Badai Tanmizi",
    role: "Principal",
    category: "investment",
    bio: "Badai is a Principal with deep expertise in the Indonesian and broader Southeast Asian tech ecosystem. He focuses on identifying and supporting high-growth B2B and fintech companies.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC07147-scaled-e1653908537196-pq1xtqw3ja1c4yvepy8dvheftmmdy9a90ncxm2in66.jpg",
  },
  {
    name: "Anqi Chen",
    role: "Manager",
    category: "investment",
    bio: "Anqi is a Manager at Qualgro, supporting the investment team across deal sourcing, market research, and due diligence in enterprise software and AI-driven solutions.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/anqi-pee0vr4rc5kzo491uoqohh9iv6eqi2c1f9q76q3l5a.jpeg",
  },
  {
    name: "Mellissa Ng",
    role: "Investment Manager",
    category: "investment",
    bio: "Mellissa is an Investment Manager at Qualgro, contributing to deal sourcing, due diligence, and portfolio management across the firm's focus sectors in Southeast Asia.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Tem-Members-Mellisa-Ng-rl0lxfz306843jtvak7cji8echyycgoeg1153qywni.jpg",
  },
  {
    name: "Goh Ze Tian",
    role: "Investment Analyst",
    category: "investment",
    bio: "Ze Tian is an Investment Analyst contributing to Qualgro's research and analysis efforts, with a focus on market mapping and competitive landscape assessment across Southeast Asia's tech sector.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro_team_img_ze_tian_goh-min-qe308zq9swpt5izv1dclcxetfx4px6qhpb23bjz4cu.jpg",
  },
  {
    name: "Ryan Lim",
    role: "Investment Analyst",
    category: "investment",
    bio: "Ryan supports Qualgro's investment activities as an Analyst, conducting in-depth research and financial analysis on potential investment opportunities and existing portfolio companies.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro_team_img_ryan_lim-min-qe3090o3zqr3h4yhvvr7xf6a1b034vu81fpkstxq6m.jpg",
  },
  {
    name: "Ray Chin",
    role: "Finance & Ops Associate",
    category: "operations",
    bio: "Ray supports the Finance and Operations functions at Qualgro, contributing to fund administration, reporting, and operational workflows.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Team-Members-Ray-Chin-rl0m1ilwmbsuepwvibl5ch8b0lw7p8uj06svywxhou.jpg",
  },
  {
    name: "Sean Leong",
    role: "Finance & Ops Analyst",
    category: "operations",
    bio: "Sean supports the Finance and Operations functions at Qualgro, contributing to fund administration, reporting, and operational workflows.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro_team_img_sean_leong-min-qe3091ly6ksdsqx4qe5uhwxqmovgckxydkd2a3wc0e.jpg",
  },
  {
    name: "Wen En Lim",
    role: "Operations Analyst",
    category: "operations",
    bio: "Wen En is an Operations Analyst at Qualgro, focused on market intelligence and supporting the team's investment decision-making process across the firm's core sectors.",
    photo: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro_team_img_wen_en_lim-min-qe308zq9swpt5izv1dclcxetfx4px6qhpb23bjz4cu.jpg",
  },
  {
    name: "Laetitia Chia",
    role: "Finance & Ops Analyst",
    category: "operations",
    bio: "Laetitia is a Finance and Operations Analyst at Qualgro, helping ensure smooth day-to-day operations and investor reporting across the firm's funds.",
    photo: "/images/team/laetitia-chia.png",
  },
  {
    name: "Shimin Cai",
    role: "Investment Analyst",
    category: "investment",
    bio: "Shimin is an Investment Analyst at Qualgro, supporting the team with research, financial modeling, and due diligence across the firm's focus sectors.",
    photo: "/placeholder.svg",
  },
];
const categories = [
  { key: "all", label: "All" },
  { key: "leadership", label: "Leadership" },
  { key: "advisory", label: "Advisory" },
  { key: "investment", label: "Investment" },
  { key: "operations", label: "Operations" },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHero
        tagline="Our People"
        title={<>Diverse Experience &<br /><span className="text-gradient-page">Global Network</span></>}
        description="Qualgro's team combines startup, business, technology, investment and strategy experience to help startups accelerate growth and build international companies across Southeast Asia and Australia."
      />

      {/* Filters + Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-display font-semibold transition-all duration-300 ${
                  activeFilter === cat.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((member, i) => (
                <motion.div
                  key={member.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setSelectedMember(member)}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-3">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-display font-semibold text-emerald uppercase tracking-wider">
                        View Profile
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-sm font-bold text-primary group-hover:text-investment-blue transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-alt">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Want to join the mission?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We are always looking for exceptional talent to join our investment and platform teams. Reach out to us at <a href="mailto:info@qualgro.com" className="text-emerald hover:underline">info@qualgro.com</a>.
            </p>
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
                {/* Photo side */}
                <div className="relative w-full sm:w-2/5 min-h-[240px] sm:min-h-0 shrink-0">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
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
                    <h2 className="font-display text-2xl font-bold text-primary mb-4">
                      {selectedMember.name}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedMember.bio}
                    </p>
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
                        className="inline-flex items-center gap-2 text-sm font-display font-semibold text-investment-blue hover:text-primary transition-colors"
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
