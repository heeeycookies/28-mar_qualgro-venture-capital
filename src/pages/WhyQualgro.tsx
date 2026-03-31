import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FounderTestimonials from "@/components/FounderTestimonials";
import ContactModal from "@/components/ContactModal";
import { motion } from "framer-motion";
import { Target, Users, Globe, TrendingUp, Lightbulb, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const values = [
  {
    icon: Target,
    title: "Data-Driven Conviction",
    desc: "We combine deep sector expertise with rigorous quantitative analysis to identify the most promising Series A & B opportunities in Southeast Asia and Australia.",
  },
  {
    icon: Users,
    title: "Founder-First Partnership",
    desc: "We're operators at heart. Our team brings decades of combined experience building and scaling businesses across Asia-Pacific — we understand your journey.",
  },
  {
    icon: Globe,
    title: "Regional DNA, Global Reach",
    desc: "Headquartered in Singapore with deep networks across ASEAN, we connect you to global markets, enterprise customers, and world-class talent.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "33 companies, 4 unicorns, 9 full exits. Our disciplined approach has consistently delivered strong returns and meaningful outcomes for founders.",
  },
  {
    icon: Lightbulb,
    title: "Sector Specialisation",
    desc: "We focus on enterprise software, fintech, and deep tech — areas where our expertise creates differentiated value and accelerates your growth.",
  },
  {
    icon: Shield,
    title: "Institutional Integrity",
    desc: "Backed by sovereign wealth funds, endowments, and global institutional investors who share our commitment to long-term value creation.",
  },
];

const supportAreas = [
  "Go-to-market strategy & regional expansion",
  "Enterprise customer introductions",
  "Talent acquisition & team building",
  "Follow-on fundraising & investor network",
  "Board governance & operational best practices",
  "Data analytics & growth metrics",
];

const WhyQualgro = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHero
        tagline="For Founders"
        title={<>Your <span className="text-gradient-page">Growth Partner</span> in Southeast Asia & Australia</>}
        description="Qualgro invests in Series A and B technology companies with a data-driven, founder-first approach. If you're building category-defining software, fintech, or deep tech — let's talk."
      >
        <button
          onClick={() => setContactOpen(true)}
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-emerald text-emerald-foreground font-display font-semibold text-sm hover:bg-emerald/90 transition-colors"
        >
          Get in Touch <ArrowRight size={16} />
        </button>
      </PageHero>

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
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">
              What We Look For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Stage", value: "Series A & B", detail: "Companies with product-market fit ready to scale" },
              { label: "Sectors", value: "Software · Fintech · Deep Tech", detail: "B2B and B2B2C technology companies" },
              { label: "Geography", value: "SEA & Australia", detail: "Founders building for regional and global markets" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-xl border border-border bg-card"
              >
                <p className="text-xs font-semibold text-investment-blue uppercase tracking-wider mb-2">{item.label}</p>
                <p className="font-display text-lg font-bold text-primary mb-2">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-surface-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">
              What Sets Us Apart
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-xl border border-border p-8 hover:shadow-lg hover:border-emerald/30 transition-all"
              >
                <v.icon className="text-emerald mb-4" size={28} />
                <h3 className="font-display text-lg font-bold text-primary mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support */}
      <section className="py-24 bg-background">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
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
              <p className="font-display text-6xl font-extrabold text-primary mb-2">33+</p>
              <p className="text-muted-foreground mb-6">Companies backed across 2 funds</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-display text-2xl font-bold text-emerald">4</p>
                  <p className="text-xs text-muted-foreground">Unicorns</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-emerald">9</p>
                  <p className="text-xs text-muted-foreground">Exits</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-emerald">7</p>
                  <p className="text-xs text-muted-foreground">Sectors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Testimonials */}
      <FounderTestimonials />

      {/* CTA */}
      <section className="py-24 bg-surface-alt">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Ready to build something extraordinary?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              If you're a founder building category-defining technology in Southeast Asia or Australia, we'd love to hear from you.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald text-emerald-foreground font-display font-semibold text-sm hover:bg-emerald/90 transition-colors"
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
