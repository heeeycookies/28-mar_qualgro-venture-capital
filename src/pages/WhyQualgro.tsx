import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FounderTestimonials from "@/components/FounderTestimonials";
import ContactModal from "@/components/ContactModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, Globe, TrendingUp, ArrowRight, CheckCircle, Brain, Database, BarChart3, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { methodology } from "@/data/impact";

const thesisThemes = [
  {
    icon: Brain,
    label: "AI",
    title: "Artificial Intelligence",
    desc: "We back AI-native companies building intelligent products — from enterprise automation to generative AI — that solve real problems at scale.",
  },
  {
    icon: Database,
    label: "Data",
    title: "Data Infrastructure",
    desc: "Analytics platforms, MLOps, and data pipelines that power intelligent enterprises and enable data-driven decision making.",
  },
  {
    icon: BarChart3,
    label: "Impact",
    title: "Measurable Impact",
    desc: "Every investment must create lasting value for founders, communities, and the broader ecosystem beyond financial returns.",
  },
  {
    icon: Sparkles,
    label: "Innovation",
    title: "Deep Tech",
    desc: "Breakthrough technologies in fintech, cybersecurity, and vertical SaaS reshaping business operations across Asia-Pacific.",
  },
];

const criteria = [
  {
    icon: Target,
    title: "Stage & Conviction",
    desc: "Series A is our sweet spot — companies with product-market fit ready to scale. We lead or co-lead rounds with high-conviction capital.",
  },
  {
    icon: Users,
    title: "Founder-First Partnership",
    desc: "We're operators at heart. Our team brings decades of experience building and scaling businesses across Asia-Pacific.",
  },
  {
    icon: Globe,
    title: "Cross-Border DNA",
    desc: "Headquartered in Singapore with deep ASEAN networks, we connect founders to global markets, enterprise customers, and world-class talent.",
  },
  {
    icon: TrendingUp,
    title: "B2B Enterprise Focus",
    desc: "Leading expertise in B2B enterprise technology — where our sector knowledge creates differentiated value and accelerates growth.",
  },
];

const supportAreas = [
  "Go-to-market strategy & regional expansion",
  "Enterprise customer introductions",
  "Talent acquisition & team building",
  "Follow-on fundraising & investor network",
  "AI integration & data strategy",
  "Board governance & operational best practices",
];

const WhyQualgro = () => {
  const [contactOpen, setContactOpen] = useState(false);

  // Parallax refs
  const heroRef = useRef<HTMLDivElement>(null);
  const thesisRef = useRef<HTMLDivElement>(null);
  const criteriaRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(heroProgress, [0, 1], [0, 60]);
  const heroBgY = useTransform(heroProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0.3]);

  const { scrollYProgress: thesisProgress } = useScroll({
    target: thesisRef,
    offset: ["start end", "end start"],
  });
  const thesisHeadY = useTransform(thesisProgress, [0, 1], [30, -15]);

  const { scrollYProgress: criteriaProgress } = useScroll({
    target: criteriaRef,
    offset: ["start end", "end start"],
  });
  const criteriaHeadY = useTransform(criteriaProgress, [0, 1], [25, -12]);

  const { scrollYProgress: supportProgress } = useScroll({
    target: supportRef,
    offset: ["start end", "end start"],
  });
  const supportLeftY = useTransform(supportProgress, [0, 1], [40, -15]);
  const supportRightY = useTransform(supportProgress, [0, 1], [60, -10]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — shared PageHero for cross-page consistency */}
      <PageHero
        tagline="Investment Thesis"
        title={
          <>
            AI & Data · <span className="text-emerald">Impact</span>
          </>
        }
        description="Qualgro invests at the intersection of artificial intelligence, data infrastructure, and measurable impact. We back Series A founders in Southeast Asia building technology that scales globally."
      >
        <button
          onClick={() => setContactOpen(true)}
          className="mt-8 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-display font-semibold text-sm transition-all hover:translate-y-[-1px] hover:shadow-lg bg-emerald text-emerald-foreground hover:bg-emerald/90"
        >
          Get in Touch <ArrowRight size={16} />
        </button>
      </PageHero>

      {/* Thesis Themes */}
      <section ref={thesisRef} className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ y: thesisHeadY }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.3em] mb-3">
              Where We Invest
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-primary">
              Our Thesis Pillars
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {thesisThemes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-card rounded-2xl border border-border p-7 sm:p-8 hover:shadow-xl hover:border-investment-blue/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-investment-blue/8 flex items-center justify-center group-hover:bg-investment-blue/15 transition-colors">
                    <theme.icon className="text-investment-blue" size={20} />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-investment-blue">
                    {theme.label}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">
                  {theme.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {theme.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section ref={criteriaRef} className="py-24 sm:py-32 bg-surface-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ y: criteriaHeadY }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.3em] mb-3">
              Investment Criteria
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-primary">
              What We Look For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {criteria.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <item.icon className="text-investment-blue mb-5" size={26} />
                <h3 className="font-display text-lg font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support */}
      <section ref={supportRef} className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ y: supportLeftY }}
            >
              <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.3em] mb-3">
                Post-Investment
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-black text-primary mb-6">
                How We Support Our Founders
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Beyond capital, we roll up our sleeves and work alongside you. Our team and network are designed to help you navigate the unique challenges of scaling in Southeast Asia and beyond.
              </p>
              <ul className="space-y-4">
                {supportAreas.map((area, i) => (
                  <motion.li
                    key={area}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-emerald mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm text-foreground">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ y: supportRightY }}
              className="bg-card rounded-2xl border border-border p-10 sm:p-12"
            >
              <div className="text-center mb-8">
                <p className="font-display text-7xl sm:text-8xl font-black text-investment-blue leading-none">33+</p>
                <p className="text-muted-foreground mt-2 text-sm">Companies backed across 2 funds</p>
              </div>
              <div className="h-px w-full bg-border mb-8" />
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="font-display text-3xl sm:text-4xl font-black text-investment-blue">4</p>
                  <p className="text-xs text-muted-foreground mt-1">Unicorns</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-5xl sm:text-6xl font-black text-investment-blue leading-none">9</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Full Exits</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl sm:text-4xl font-black text-investment-blue">10%</p>
                  <p className="text-xs text-muted-foreground mt-1">Hit Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── METHODOLOGY ───────── */}
      <section
        className="py-28 lg:py-32 relative overflow-hidden"
        style={{ backgroundColor: "hsl(217 91% 11%)" }}
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(163 70% 45% / 0.25) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4 text-emerald">
              How We Measure
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Built on Rigour
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line — desktop */}
            <div
              className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px"
              style={{ background: "linear-gradient(to right, transparent, hsl(163 70% 45% / 0.6), transparent)" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
              {methodology.steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="text-center md:text-left flex md:flex-col items-center md:items-start gap-4 md:gap-5"
                >
                  <div
                    className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full font-display font-extrabold text-base relative z-10"
                    style={{
                      backgroundColor: "hsl(163 70% 45%)",
                      color: "hsl(217 91% 11%)",
                      boxShadow: "0 0 0 6px hsl(217 91% 11%), 0 0 30px hsl(163 70% 45% / 0.4)",
                    }}
                  >
                    {s.step}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-extrabold text-white">{s.title}</h3>
                    <p className="text-sm text-white/65 mt-1.5 leading-relaxed max-w-[220px]">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs italic text-white/50 mt-16 max-w-2xl mx-auto leading-relaxed"
          >
            {methodology.disclaimer}
          </motion.p>
        </div>
      </section>

      {/* Founder Testimonials */}
      <FounderTestimonials />

      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default WhyQualgro;
