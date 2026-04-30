import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  Check,
  Users,
  Award,
  Briefcase,
  Link as LinkIcon,
  Heart,
  PieChart,
} from "lucide-react";

import {
  impactHero,
  prioritySDGs,
  featuredSpotlight,
} from "@/data/impact";
import { twoXOverview, twoXCriteria, twoXPrerequisites, twoXStats } from "@/data/two-x-data";
import twoXLogo from "@/assets/impact/2x-challenge-logo.png";

const twoXIcons: Record<string, React.ElementType> = {
  Users, Award, Briefcase, Link: LinkIcon, Heart, PieChart,
};

import logoSupermom from "@/assets/impact/logos/supermom.png";
import logoPatsnap from "@/assets/impact/logos/patsnap.png";
import logoFundingSocieties from "@/assets/impact/logos/funding-societies.png";

const spotlightLogos: Record<string, string> = {
  "Supermom": logoSupermom,
  "Patsnap": logoPatsnap,
  "Funding Societies": logoFundingSocieties,
};

import sdg4 from "@/assets/impact/sdg-icons/sdg-4.png";
import sdg5 from "@/assets/impact/sdg-icons/sdg-5.png";
import sdg8 from "@/assets/impact/sdg-icons/sdg-8.png";
import sdg9 from "@/assets/impact/sdg-icons/sdg-9.png";
import sdg10 from "@/assets/impact/sdg-icons/sdg-10.png";

import photoSdg4 from "@/assets/impact/sdg-photos/quality_educ.avif";
import photoSdg5 from "@/assets/impact/sdg-photos/2_girls.avif";
import photoSdg8 from "@/assets/impact/sdg-photos/city_sg.avif";
import photoSdg9 from "@/assets/impact/sdg-photos/mrt.avif";
import photoSdg10 from "@/assets/impact/sdg-photos/classroom.avif";

const sdgImages: Record<number, string> = {
  4: sdg4, 5: sdg5, 8: sdg8, 9: sdg9, 10: sdg10,
};

const sdgPhotos: Record<number, string> = {
  4: photoSdg4, 5: photoSdg5, 8: photoSdg8, 9: photoSdg9, 10: photoSdg10,
};


const Impact = () => {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const currentCompany = featuredSpotlight.companies[spotlightIndex];

  const scrollToNext = () => {
    document.getElementById("spotlight")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSpotlight = () =>
    setSpotlightIndex((i) => (i + 1) % featuredSpotlight.companies.length);
  const prevSpotlight = () =>
    setSpotlightIndex((i) => (i - 1 + featuredSpotlight.companies.length) % featuredSpotlight.companies.length);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ───────── 1. HERO ───────── */}
      <section className="relative min-h-[75vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, hsl(160 20% 95%) 0%, hsl(150 15% 92%) 40%, hsl(200 15% 94%) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-6 pt-28 pb-14">
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
              <span className="text-gradient-emerald">{impactHero.titleLine2}</span>
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
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} className="text-muted-foreground" />
          </motion.div>
        </motion.button>
      </section>

      {/* ───────── 2. IMPACT FRAMEWORK (SDGs) ───────── */}
      <section id="sdg-framework" className="py-24 lg:py-32 bg-card">
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

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {prioritySDGs.map((sdg, i) => {
              const colSpan = i < 3 ? "md:col-span-2" : "md:col-span-3";
              return (
                <motion.div
                  key={sdg.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group relative rounded-2xl overflow-hidden cursor-default h-[340px] ${colSpan}`}
                >
                  <img
                    src={sdgPhotos[sdg.number]}
                    alt={sdg.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)`,
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-7">
                    <div className="absolute top-5 right-5">
                      <img
                        src={sdgImages[sdg.number]}
                        alt={`SDG ${sdg.number}`}
                        className="w-11 h-11 rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-extrabold text-white leading-snug mb-1.5 drop-shadow-sm">
                        {sdg.title}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 max-w-md line-clamp-2">
                        {sdg.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {sdg.companies.map((c) => (
                          <Link
                            key={c}
                            to={`/portfolio?search=${encodeURIComponent(c)}`}
                            className="text-[10px] font-display font-semibold tracking-wide px-2.5 py-1 rounded-full backdrop-blur-md transition-all hover:bg-white/30 hover:-translate-y-0.5"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.2)",
                              color: "rgba(255,255,255,0.95)",
                              border: "1px solid rgba(255,255,255,0.25)",
                            }}
                          >
                            {c}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── 2.5 2X CHALLENGE ALIGNED (compact) ───────── */}
      <section className="py-16 lg:py-20 bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
              <div className="max-w-xl">
                <p
                  className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-3"
                  style={{ color: "hsl(140 45% 35%)" }}
                >
                  Gender-Lens Investing
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary leading-tight">
                  {twoXOverview.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed">
                  {twoXOverview.description}
                </p>
                <a
                  href={twoXOverview.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 font-display font-semibold text-sm text-emerald hover:underline"
                >
                  Learn more about the 2X Challenge
                  <ArrowRight size={14} />
                </a>
              </div>
              <img
                src={twoXLogo}
                alt="2X Challenge"
                className="h-10 md:h-12 w-auto object-contain shrink-0"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-border">
              {twoXStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <p className="font-display text-3xl md:text-4xl font-extrabold text-primary leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-snug">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── 3. PORTFOLIO SPOTLIGHT ───────── */}
      <section id="spotlight" className="py-24 lg:py-32 bg-background">
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

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={spotlightIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-xl border border-border bg-card overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald" />
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-3 p-8 md:p-10 lg:p-12">
                    <div className="flex items-center gap-4">
                      {spotlightLogos[currentCompany.name] && (
                        <img src={spotlightLogos[currentCompany.name]} alt={currentCompany.name} className="h-10 object-contain" />
                      )}
                      <h3 className="font-display text-2xl md:text-3xl font-extrabold text-primary">
                        {currentCompany.name}
                      </h3>
                    </div>
                    <p className="font-display text-sm font-semibold mt-2" style={{ color: "hsl(140 45% 35%)" }}>
                      {currentCompany.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm mt-5 leading-relaxed">
                      {currentCompany.description}
                    </p>
                    <div className="mt-6 pt-5 border-t border-border">
                      <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Qualgro's Support
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {currentCompany.qualgroSupport}
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-muted/30 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="grid grid-cols-1 gap-6">
                      {currentCompany.highlights.map((h) => (
                        <div key={h.label}>
                          <p className="font-display text-3xl md:text-4xl font-extrabold text-primary">{h.value}</p>
                          <p className="text-muted-foreground text-xs mt-1">{h.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-5 border-t border-border">
                      <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">SDG Alignment</p>
                      <div className="flex gap-2">
                        {currentCompany.sdgs.map((n) => (
                          <img key={n} src={sdgImages[n]} alt={`SDG ${n}`} className="w-10 h-10 rounded object-cover" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2 flex-wrap">
                {featuredSpotlight.companies.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSpotlightIndex(i)}
                    className={`px-4 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                      i === spotlightIndex
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prevSpotlight} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronLeft size={16} className="text-muted-foreground" />
                </button>
                <button onClick={nextSpotlight} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronRight size={16} className="text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ───────── 5. CTA ───────── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(217 91% 11%) 0%, hsl(217 80% 18%) 100%)",
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
            <p className="max-w-xl mx-auto mb-8" style={{ color: "hsl(215 20% 65%)" }}>
              Download our full ESG & Impact Report 2024 to learn more about our methodology and performance metrics.
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
                style={{ borderColor: "hsl(215 20% 30%)", color: "hsl(210 40% 98%)" }}
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
