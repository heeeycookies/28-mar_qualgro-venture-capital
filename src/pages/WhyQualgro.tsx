import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FounderTestimonials from "@/components/FounderTestimonials";
import ContactModal from "@/components/ContactModal";
import { motion } from "framer-motion";
import { Target, Users, Globe, TrendingUp, ArrowRight, CheckCircle, Brain, Database, BarChart3, Sparkles } from "lucide-react";
import { useState } from "react";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHero
        tagline="Investment Thesis"
        title={<>AI & Data · <span className="text-investment-blue">Impact</span></>}
        description="Qualgro invests at the intersection of artificial intelligence, data infrastructure, and measurable impact. We back Series A founders in Southeast Asia building technology that scales globally."
      >
        <button
          onClick={() => setContactOpen(true)}
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-investment-blue text-primary-foreground font-display font-semibold text-sm hover:bg-investment-blue/90 transition-colors"
        >
          Get in Touch <ArrowRight size={16} />
        </button>
      </PageHero>

      {/* Thesis Themes */}
      <section className="py-24 bg-surface-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.3em] mb-3">
              Where We Invest
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-investment-blue">
              Our Thesis Pillars
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {thesisThemes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-lg hover:border-investment-blue/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-investment-blue/10 flex items-center justify-center">
                    <theme.icon className="text-investment-blue" size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-investment-blue">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.3em] mb-3">
              Investment Criteria
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-primary">
              What We Look For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {criteria.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all"
              >
                <item.icon className="text-investment-blue mb-4" size={28} />
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
      <section className="py-24 bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.3em] mb-3">
                Post-Investment
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-black text-primary mb-6">
                How We Support Our Founders
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Beyond capital, we roll up our sleeves and work alongside you. Our team and network are designed to help you navigate the unique challenges of scaling in Southeast Asia and beyond.
              </p>
              <ul className="space-y-4">
                {supportAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm text-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-10 text-center"
            >
              <p className="font-display text-7xl font-black text-investment-blue mb-2">33+</p>
              <p className="text-muted-foreground mb-6">Companies backed across 2 funds</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-display text-3xl font-black text-investment-blue">4</p>
                  <p className="text-xs text-muted-foreground">Unicorns</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-black text-investment-blue">9</p>
                  <p className="text-xs text-muted-foreground">Full Exits</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-black text-investment-blue">10%</p>
                  <p className="text-xs text-muted-foreground">Hit Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Testimonials */}
      <FounderTestimonials />

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-investment-blue mb-6">
              Ready to build something extraordinary?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              If you're a founder building category-defining technology in Southeast Asia or Australia, we'd love to hear from you.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-investment-blue text-primary-foreground font-display font-semibold text-sm hover:bg-investment-blue/90 transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default WhyQualgro;
