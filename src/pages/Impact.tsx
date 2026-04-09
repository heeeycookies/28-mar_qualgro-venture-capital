import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  TrendingUp,
  Compass,
  ArrowRight,
  ChevronDown,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  impactHero,
  investmentPrinciples,
  methodology,
  prioritySDGs,
  featuredSpotlight,
  qualgroSupport,
} from "@/data/impact";

import sdg4 from "@/assets/sdg-4.png";
import sdg5 from "@/assets/sdg-5.png";
import sdg8 from "@/assets/sdg-8.png";
import sdg9 from "@/assets/sdg-9.png";
import sdg10 from "@/assets/sdg-10.png";

const sdgImages: Record<number, string> = {
  4: sdg4,
  5: sdg5,
  8: sdg8,
  9: sdg9,
  10: sdg10,
};

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  compass: Compass,
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Impact = () => {
  const scrollToNext = () => {
    document
      .getElementById("principles")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ───────── 1. HERO ───────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, hsl(160 20% 95%) 0%, hsl(150 15% 92%) 40%, hsl(200 15% 94%) 100%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p
              className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-5"
              style={{ color: "hsl(140 45% 35%)" }}
            >
              {impactHero.eyebrow}
            </p>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08]"
              style={{ color: "hsl(217 91% 11%)" }}
            >
              {impactHero.titleLine1}
              <br />
              <span className="text-gradient-emerald">
                {impactHero.titleLine2}
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "hsl(217 25% 40%)" }}
            >
              {impactHero.description}
            </p>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-10"
        >
          <span className="text-xs tracking-wider uppercase text-muted-foreground group-hover:text-primary transition-colors">
            {impactHero.scrollCue}
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={18} className="text-muted-foreground" />
          </motion.div>
        </motion.button>
      </section>

      {/* ───────── 2. INVESTMENT PRINCIPLES ───────── */}
      <section id="principles" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: "hsl(140 45% 35%)" }}
            >
              {investmentPrinciples.sectionEyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              {investmentPrinciples.sectionTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              {investmentPrinciples.sectionSubtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {investmentPrinciples.principles.map((p) => (
              <motion.div key={p.number} variants={fadeUp}>
                <Card className="group relative border-border hover:shadow-md transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top" />
                  <CardContent className="p-8">
                    <span className="font-display text-4xl font-extrabold text-muted-foreground/15 leading-none">
                      {p.number}
                    </span>
                    <h3 className="font-display text-lg md:text-xl font-extrabold text-primary mt-2 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── 3. PRIORITY SDGS ───────── */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: "hsl(140 45% 35%)" }}
            >
              Impact Framework
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Aligned with the{" "}
              <span className="text-gradient-emerald">
                UN Sustainable Development Goals
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {prioritySDGs.map((sdg) => (
              <motion.div key={sdg.number} variants={fadeUp}>
                <Card className="group border-border hover:shadow-md transition-all duration-300 overflow-hidden h-full relative">
                  {/* Bold color strip — always visible */}
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: sdg.color }}
                  />

                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={sdgImages[sdg.number]}
                        alt={`SDG ${sdg.number} – ${sdg.title}`}
                        className="w-14 h-14 rounded-md shrink-0 object-cover"
                      />
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-extrabold text-primary leading-snug">
                          {sdg.title}
                        </h3>
                        <p className="text-muted-foreground text-xs mt-1 leading-relaxed line-clamp-3">
                          {sdg.description}
                        </p>
                      </div>
                    </div>

                    {/* Thin separator in SDG color */}
                    <div
                      className="h-px w-full mb-4 opacity-25"
                      style={{ backgroundColor: sdg.color }}
                    />

                    <div className="space-y-2">
                      {sdg.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex items-baseline gap-2 text-xs"
                        >
                          <span
                            className="font-display font-extrabold shrink-0"
                            style={{ color: sdg.color }}
                          >
                            {stat.value}
                          </span>
                          <span className="text-muted-foreground">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Company tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {sdg.companies.map((c) => (
                        <span
                          key={c}
                          className="text-[10px] font-display font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: sdg.color + "12",
                            color: sdg.color,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── 4. METHODOLOGY ───────── */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "hsl(217 91% 11%)" }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: "hsl(var(--emerald))" }}
            >
              {methodology.sectionEyebrow}
            </p>
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
              style={{ color: "hsl(210 40% 98%)" }}
            >
              {methodology.sectionTitle}
            </h2>
            <p
              className="max-w-2xl mx-auto mt-4"
              style={{ color: "hsl(215 20% 65%)" }}
            >
              {methodology.sectionSubtitle}
            </p>
          </motion.div>

          <motion.div
            className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Connecting line (desktop) */}
            <div
              className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
              style={{ backgroundColor: "hsl(var(--emerald) / 0.25)" }}
            />

            {methodology.steps.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="flex flex-col items-center text-center relative"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display text-sm font-extrabold mb-4 relative z-10"
                  style={{
                    backgroundColor: "hsl(var(--emerald))",
                    color: "hsl(var(--emerald-foreground))",
                  }}
                >
                  {s.step}
                </div>
                <h3
                  className="font-display text-lg font-extrabold mb-2"
                  style={{ color: "hsl(210 40% 98%)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-[260px]"
                  style={{ color: "hsl(215 20% 65%)" }}
                >
                  {s.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center text-xs italic max-w-3xl mx-auto"
            style={{ color: "hsl(215 20% 45%)" }}
          >
            {methodology.disclaimer}
          </motion.p>
        </div>
      </section>

      {/* ───────── 5. FEATURED PORTFOLIO SPOTLIGHT ───────── */}
      <section className="py-24 lg:py-32 bg-surface-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p
              className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: "hsl(140 45% 35%)" }}
            >
              {featuredSpotlight.sectionEyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              {featuredSpotlight.sectionTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              {featuredSpotlight.sectionSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl border border-border bg-card overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald" />

            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-10 lg:p-12">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-primary">
                  {featuredSpotlight.company.name}
                </h3>
                <p
                  className="font-display text-sm font-semibold mt-2"
                  style={{ color: "hsl(140 45% 35%)" }}
                >
                  {featuredSpotlight.company.tagline}
                </p>
                <p className="text-muted-foreground text-sm mt-5 leading-relaxed">
                  {featuredSpotlight.company.description}
                </p>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Qualgro's Support
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {featuredSpotlight.company.qualgroSupport}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-muted/30 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-6">
                  {featuredSpotlight.company.highlights.map((h) => (
                    <div key={h.label}>
                      <p className="font-display text-3xl md:text-4xl font-extrabold text-primary">
                        {h.value}
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-border">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    SDG Alignment
                  </p>
                  <div className="flex gap-2">
                    {featuredSpotlight.company.sdgs.map((n) => (
                      <img
                        key={n}
                        src={sdgImages[n]}
                        alt={`SDG ${n}`}
                        className="w-10 h-10 rounded object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── 6. HOW WE SUPPORT OUR FOUNDERS ───────── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3">
              {qualgroSupport.sectionTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {qualgroSupport.sectionSubtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {qualgroSupport.pillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] || Users;
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="group relative rounded-xl border border-border p-8 bg-card hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-emerald scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center mb-4">
                    <Icon className="text-emerald" size={18} />
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ───────── 7. CTA ───────── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(217 91% 11%) 0%, hsl(217 80% 18%) 100%)",
        }}
      >
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5"
              style={{ color: "hsl(210 40% 98%)" }}
            >
              Building the future is a collaborative effort.
            </h2>
            <p
              className="max-w-xl mx-auto mb-8"
              style={{ color: "hsl(215 20% 65%)" }}
            >
              Download our full ESG & Impact Report 2024 to learn more about our
              methodology and performance metrics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-emerald text-emerald-foreground font-display font-semibold text-sm hover:bg-emerald/90 transition-colors"
              >
                Download Report
                <ArrowRight size={15} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border font-display font-semibold text-sm transition-colors"
                style={{
                  borderColor: "hsl(215 20% 30%)",
                  color: "hsl(210 40% 98%)",
                }}
              >
                <Mail size={15} />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
