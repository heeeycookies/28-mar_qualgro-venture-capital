import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  impactHero,
  prioritySDGs,
  portfolioCompanies,
  methodology,
} from "@/data/impact";
import { twoXOverview, twoXStats } from "@/data/two-x-data";
import twoXLogo from "@/assets/impact/2x-challenge-logo.png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

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

const companyById = Object.fromEntries(portfolioCompanies.map((c) => [c.id, c]));
const companyByName = Object.fromEntries(portfolioCompanies.map((c) => [c.name, c]));

const AiBlock = ({ text }: { text: string }) => (
  <div
    className="flex items-start gap-3 rounded-xl p-4"
    style={{
      backgroundColor: "hsl(163 60% 45% / 0.08)",
      border: "1px solid hsl(163 60% 45% / 0.18)",
    }}
  >
    <div
      className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
      style={{ backgroundColor: "hsl(163 60% 45% / 0.15)", color: "hsl(163 70% 32%)" }}
    >
      <Sparkles size={15} />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] mb-1" style={{ color: "hsl(163 70% 30%)" }}>
        AI / Tech
      </p>
      <p className="text-sm leading-relaxed text-foreground/85">{text}</p>
    </div>
  </div>
);

const Impact = () => {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [activeCompanyId, setActiveCompanyId] = useState<string | null>(null);

  const activeCompany = activeCompanyId ? companyById[activeCompanyId] : null;

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isDownRef = useRef(false);
  const movedRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);

  const scrollToNext = () => {
    document.getElementById("sdg-framework")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIndex = useCallback((i: number) => {
    const el = cardRefs.current[i];
    const scroller = scrollerRef.current;
    if (!el || !scroller) return;
    const left =
      el.offsetLeft - (scroller.clientWidth - el.clientWidth) / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  }, []);

  const goNext = () => {
    const i = (spotlightIndex + 1) % portfolioCompanies.length;
    setSpotlightIndex(i);
    scrollToIndex(i);
  };
  const goPrev = () => {
    const i = (spotlightIndex - 1 + portfolioCompanies.length) % portfolioCompanies.length;
    setSpotlightIndex(i);
    scrollToIndex(i);
  };
  const goTo = (i: number) => {
    setSpotlightIndex(i);
    scrollToIndex(i);
  };

  // Track the centered card on scroll to sync dots
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = scroller.scrollLeft + scroller.clientWidth / 2;
        let bestIdx = 0;
        let bestDist = Infinity;
        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          const c = el.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(c - center);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = i;
          }
        });
        setSpotlightIndex(bestIdx);
      });
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Mouse drag-to-scroll (touch is native)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    isDownRef.current = true;
    movedRef.current = false;
    startXRef.current = e.clientX;
    startScrollRef.current = scroller.scrollLeft;
    scroller.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 4) movedRef.current = true;
    scroller.scrollLeft = startScrollRef.current - dx;
  };
  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;
    isDownRef.current = false;
    const scroller = scrollerRef.current;
    if (scroller && scroller.hasPointerCapture(e.pointerId)) {
      scroller.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ───────── 1. HERO ───────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Layered radial gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 20%, hsl(163 55% 88% / 0.9) 0%, transparent 60%),
              radial-gradient(ellipse 70% 50% at 80% 30%, hsl(180 40% 90% / 0.8) 0%, transparent 55%),
              radial-gradient(ellipse 90% 60% at 50% 100%, hsl(160 45% 92% / 0.7) 0%, transparent 60%),
              linear-gradient(180deg, hsl(160 25% 96%) 0%, hsl(170 20% 94%) 100%)
            `,
          }}
        />
        {/* Drifting emerald orb */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 720,
            height: 720,
            background: "hsl(163 70% 45%)",
            opacity: 0.15,
            filter: "blur(80px)",
            top: "10%",
            left: "30%",
          }}
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 520,
            height: 520,
            background: "hsl(190 70% 50%)",
            opacity: 0.1,
            filter: "blur(100px)",
            bottom: "5%",
            right: "10%",
          }}
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 40, -50, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p
              className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: "hsl(163 70% 30%)" }}
            >
              {impactHero.eyebrow}
            </p>
            <h1
              className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] tracking-tight"
              style={{ color: "hsl(217 91% 11%)" }}
            >
              {impactHero.titleLine1}
              <br />
              <span className="text-gradient-emerald">{impactHero.titleLine2}</span>
            </h1>
            <p
              className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "hsl(217 25% 35%)" }}
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
            animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-emerald" />
          </motion.div>
        </motion.button>
      </section>

      {/* ───────── 2. SDG FRAMEWORK ───────── */}
      <section id="sdg-framework" className="py-28 lg:py-32 bg-card">
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
                  className={`group relative rounded-2xl overflow-hidden h-[360px] ${colSpan}`}
                >
                  <img
                    src={sdgPhotos[sdg.number]}
                    alt={sdg.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)`,
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-7">
                    <div className="absolute top-5 right-5">
                      <img
                        src={sdgImages[sdg.number]}
                        alt={`SDG ${sdg.number}`}
                        className="w-12 h-12 rounded-lg shadow-lg"
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
                        {sdg.companyIds.map((cid) => {
                          const c = companyById[cid];
                          if (!c) return null;
                          return (
                            <button
                              key={cid}
                              onClick={() => setActiveCompanyId(cid)}
                              className="text-[10px] font-display font-semibold tracking-wide px-2.5 py-1 rounded-full backdrop-blur-md transition-all hover:bg-white/35 hover:scale-105"
                              style={{
                                backgroundColor: "rgba(255,255,255,0.2)",
                                color: "rgba(255,255,255,0.95)",
                                border: "1px solid rgba(255,255,255,0.3)",
                              }}
                            >
                              {c.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Modal */}
      <Dialog open={!!activeCompany} onOpenChange={(open) => !open && setActiveCompanyId(null)}>
        <DialogContent className="max-w-lg">
          {activeCompany && (
            <div className="space-y-5">
              <div>
                <DialogTitle className="font-display text-2xl md:text-3xl font-extrabold text-primary">
                  {activeCompany.name}
                </DialogTitle>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {activeCompany.tagline}
                </p>
              </div>
              <AiBlock text={activeCompany.aiAngle} />
              <div className="flex gap-2 pt-2">
                {activeCompany.sdgs.map((n) =>
                  sdgImages[n] ? (
                    <img key={n} src={sdgImages[n]} alt={`SDG ${n}`} className="w-10 h-10 rounded object-cover" />
                  ) : null
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ───────── 3. 2X CHALLENGE (unchanged) ───────── */}
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

      {/* ───────── 4. METHODOLOGY ───────── */}
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

      {/* ───────── 5. PORTFOLIO SPOTLIGHT ───────── */}
      <section className="py-28 lg:py-36 bg-background">
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
              Portfolio Spotlight
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Impact in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              How our portfolio companies create change through AI and technology.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Arrows */}
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="hidden md:flex absolute -left-3 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-card border border-border items-center justify-center shadow-md hover:bg-muted hover:-translate-y-[55%] transition-all"
            >
              <ChevronLeft size={18} className="text-primary" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="hidden md:flex absolute -right-3 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-card border border-border items-center justify-center shadow-md hover:bg-muted hover:-translate-y-[55%] transition-all"
            >
              <ChevronRight size={18} className="text-primary" />
            </button>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-background to-transparent" />

            <div
              ref={scrollerRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onPointerLeave={endDrag}
              onClickCapture={(e) => {
                if (movedRef.current) {
                  e.preventDefault();
                  e.stopPropagation();
                  movedRef.current = false;
                }
              }}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-2 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              style={{ touchAction: "pan-y" }}
            >
              {portfolioCompanies.map((c, i) => (
                <motion.div
                  key={c.id}
                  ref={(el) => (cardRefs.current[i] = el)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: Math.min(i, 4) * 0.05 }}
                  className="snap-center shrink-0 w-[88%] sm:w-[78%] md:w-[68%] lg:w-[62%] relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald" />
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
                    {/* LEFT */}
                    <div className="lg:col-span-3 p-8 md:p-10">
                      <div className="h-12 md:h-14 mb-5 flex items-center">
                        <img
                          src={c.logo}
                          alt={`${c.name} logo`}
                          draggable={false}
                          className="max-h-full max-w-[180px] object-contain pointer-events-none"
                        />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
                        {c.name}
                      </h3>
                      <p className="font-display text-sm font-semibold mt-2 text-emerald">
                        {c.tagline}
                      </p>
                      <div className="mt-6">
                        <AiBlock text={c.aiAngle} />
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className="lg:col-span-2 bg-muted/30 p-8 md:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
                      <div className="grid grid-cols-1 gap-6">
                        {c.highlights.map((h) => (
                          <div key={h.label}>
                            <p className="font-display text-2xl md:text-3xl font-extrabold text-primary leading-none">
                              {h.value}
                            </p>
                            <p className="text-muted-foreground text-xs mt-1.5">{h.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-5 border-t border-border">
                        <p className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2.5">
                          SDG Alignment
                        </p>
                        <div className="flex gap-2">
                          {c.sdgs.map((n) =>
                            sdgImages[n] ? (
                              <img
                                key={n}
                                src={sdgImages[n]}
                                alt={`SDG ${n}`}
                                className="w-10 h-10 rounded object-cover pointer-events-none"
                                draggable={false}
                              />
                            ) : null
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hint + Dots */}
            <div className="flex flex-col items-center gap-3 mt-6">
              <p className="text-[11px] font-display uppercase tracking-[0.25em] text-muted-foreground">
                Drag or swipe to explore
              </p>
              <div className="flex items-center justify-center gap-2">
                {portfolioCompanies.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => goTo(i)}
                    aria-label={`Go to ${c.name}`}
                    className={`transition-all rounded-full ${
                      i === spotlightIndex
                        ? "w-8 h-2.5 bg-emerald"
                        : "w-2.5 h-2.5 border border-muted-foreground/40 hover:border-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 6. CTA ───────── */}
      <section
        className="relative py-28 lg:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(217 91% 11%) 0%, hsl(217 60% 18%) 50%, hsl(163 50% 22%) 100%)",
        }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "hsl(163 70% 45%)", opacity: 0.18, filter: "blur(100px)" }}
        />
        <div
          className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "hsl(190 70% 50%)", opacity: 0.12, filter: "blur(110px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 max-w-3xl mx-auto leading-tight"
              style={{ color: "hsl(210 40% 98%)" }}
            >
              Building the future is a collaborative effort.
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ color: "hsl(215 25% 75%)" }}>
              Download our full ESG & Impact Report 2024 to learn more about our methodology and performance metrics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-emerald text-emerald-foreground font-display font-semibold text-sm hover:bg-emerald/90 transition-colors shadow-lg"
              >
                Download Report
                <ArrowRight size={15} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 font-display font-semibold text-sm transition-colors hover:bg-white/5"
                style={{ borderColor: "hsl(210 40% 98% / 0.4)", color: "hsl(210 40% 98%)" }}
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
