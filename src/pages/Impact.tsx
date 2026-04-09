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
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(160 30% 95%) 0%, hsl(140 25% 90%) 25%, hsl(160 35% 85%) 50%, hsl(180 20% 92%) 75%, hsl(200 25% 95%) 100%)",
          }}
        />

        {/* SVG noise grain */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* Decorative orbs */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, hsl(140 40% 80%) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, hsl(160 45% 75%) 0%, transparent 70%)" }} />

        {/* Floating emerald orb */}
        <motion.div
          className="absolute top-1/3 right-[15%] w-24 h-24 rounded-full opacity-20 blur-xl hidden md:block"
          style={{ backgroundColor: "hsl(var(--emerald))" }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-5"
              style={{ color: "hsl(140 45% 35%)" }}
            >
              {impactHero.eyebrow}
            </motion.p>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05]" style={{ color: "hsl(217 91% 11%)" }}>
              {impactHero.titleLine1}
              <br />
              <span className="text-gradient-emerald">
                {impactHero.titleLine2}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: "hsl(217 30% 35%)" }}>
              {impactHero.description}
            </p>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-10"
        >
          <span className="text-xs tracking-wider uppercase text-muted-foreground group-hover:text-primary transition-colors">
            {impactHero.scrollCue}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.button>
      </section>

      {/* ───────── 2. INVESTMENT PRINCIPLES ───────── */}
      <section id="principles" className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(140 45% 35%)" }}>
              {investmentPrinciples.sectionEyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              {investmentPrinciples.sectionTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
              {investmentPrinciples.sectionSubtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {investmentPrinciples.principles.map((p) => (
              <motion.div key={p.number} variants={fadeUp}>
                <Card className="group relative border-border hover:shadow-lg transition-all duration-300 overflow-hidden h-full hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  <CardContent className="p-8 md:p-10">
                    <span className="font-display text-5xl font-extrabold text-muted-foreground/20">
                      {p.number}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-extrabold text-primary mt-3 mb-3">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── 3. METHODOLOGY ───────── */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: "hsl(217 91% 11%)" }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(var(--emerald))" }}>
              {methodology.sectionEyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ color: "hsl(210 40% 98%)" }}>
              {methodology.sectionTitle}
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg" style={{ color: "hsl(215 20% 65%)" }}>
              {methodology.sectionSubtitle}
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ backgroundColor: "hsl(var(--emerald) / 0.3)" }} />

            {methodology.steps.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="flex flex-col items-center text-center relative"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-display text-lg font-extrabold mb-5 relative z-10"
                  style={{
                    backgroundColor: "hsl(var(--emerald))",
                    color: "hsl(var(--emerald-foreground))",
                  }}
                >
                  {s.step}
                </div>
                <h3 className="font-display text-xl font-extrabold mb-2" style={{ color: "hsl(210 40% 98%)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: "hsl(215 20% 65%)" }}>
                  {s.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center text-xs italic max-w-3xl mx-auto"
            style={{ color: "hsl(215 20% 50%)" }}
          >
            {methodology.disclaimer}
          </motion.p>
        </div>
      </section>

      {/* ───────── 4. PRIORITY SDGS ───────── */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(140 45% 35%)" }}>
              Impact Framework
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              Aligned with the{" "}
              <span className="text-gradient-emerald">
                UN Sustainable Development Goals
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {prioritySDGs.map((sdg) => (
              <motion.div
                key={sdg.number}
                variants={fadeUp}
                whileHover={{ rotateY: 2, rotateX: -1, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group border-border hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div
                    className="h-1.5 w-full transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: sdg.color }}
                  />
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <img
                        src={sdgImages[sdg.number]}
                        alt={`SDG ${sdg.number} – ${sdg.title}`}
                        className="w-16 h-16 rounded-lg shrink-0 object-cover"
                      />
                      <div>
                        <h3 className="font-display text-lg font-extrabold text-primary leading-snug">
                          {sdg.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          {sdg.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {sdg.stats.map((stat) => (
                        <Badge
                          key={stat.label}
                          variant="secondary"
                          className="px-3 py-1.5 text-xs font-display gap-1.5 rounded-lg"
                        >
                          <span className="font-extrabold text-primary">
                            {stat.value}
                          </span>
                          <span className="text-muted-foreground font-normal">
                            {stat.label}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── 5. FEATURED PORTFOLIO SPOTLIGHT ───────── */}
      <section className="py-28 lg:py-36 bg-surface-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(140 45% 35%)" }}>
              {featuredSpotlight.sectionEyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              {featuredSpotlight.sectionTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
              {featuredSpotlight.sectionSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-border bg-card overflow-hidden"
          >
            {/* Emerald accent corner */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left: content */}
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-14">
                <h3 className="font-display text-3xl md:text-4xl font-extrabold text-primary">
                  {featuredSpotlight.company.name}
                </h3>
                <p className="font-display text-lg font-semibold mt-2" style={{ color: "hsl(140 45% 35%)" }}>
                  {featuredSpotlight.company.tagline}
                </p>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  {featuredSpotlight.company.description}
                </p>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Qualgro's Support
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {featuredSpotlight.company.qualgroSupport}
                  </p>
                </div>
              </div>

              {/* Right: stats + SDG badges */}
              <div className="lg:col-span-2 bg-muted/30 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-8">
                  {featuredSpotlight.company.highlights.map((h) => (
                    <div key={h.label}>
                      <p className="font-display text-4xl md:text-5xl font-extrabold text-primary">
                        {h.value}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    SDG Alignment
                  </p>
                  <div className="flex gap-3">
                    {featuredSpotlight.company.sdgs.map((n) => (
                      <img
                        key={n}
                        src={sdgImages[n]}
                        alt={`SDG ${n}`}
                        className="w-12 h-12 rounded-lg object-cover"
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
      <section className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4">
              {qualgroSupport.sectionTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {qualgroSupport.sectionSubtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {qualgroSupport.pillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] || Users;
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-border p-8 md:p-10 bg-card hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald to-investment-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center mb-5">
                    <Icon className="text-emerald" size={22} />
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-primary mb-3">
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
      <section className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(217 91% 11%) 0%, hsl(217 80% 18%) 100%)" }}>
        {/* Decorative orb */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: "hsl(var(--emerald))" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" style={{ color: "hsl(210 40% 98%)" }}>
              Building the future is a collaborative effort.
            </h2>
            <p className="max-w-xl mx-auto mb-10 text-lg" style={{ color: "hsl(215 20% 65%)" }}>
              Download our full ESG & Impact Report 2024 to learn more about our
              methodology and performance metrics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald text-emerald-foreground font-display font-semibold text-sm hover:bg-emerald/90 transition-all duration-300"
              >
                Download Report
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border font-display font-semibold text-sm transition-all duration-300"
                style={{
                  borderColor: "hsl(215 20% 30%)",
                  color: "hsl(210 40% 98%)",
                }}
              >
                <Mail size={16} />
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
