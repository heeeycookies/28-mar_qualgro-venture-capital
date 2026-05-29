import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FounderTestimonials from "@/components/FounderTestimonials";
import PortfolioContactModal from "@/components/PortfolioContactModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

import { capabilities, type Capability, type FounderQuote } from "@/data/value-add";

/* ── Founder photos ── */
import lukeLimFounder from "@/assets/portfolio/Luke Lim_Supermom_Founder.jpeg";
import chihFounder from "@/assets/portfolio/Chih_Appier_Founder.jpeg";
import manishFounder from "@/assets/portfolio/Manish_Hevo_Founder.jpeg";
import amitFounder from "@/assets/portfolio/Amit_Nobroker_Founder.jpeg";
import henryFounder from "@/assets/portfolio/Henry_chan_Founder.jpeg";
import kelvinFounder from "@/assets/portfolio/Kelvin Teo_Funding Societies_Founder.jpeg";
import jeffreyFounder from "@/assets/portfolio/Jeffrey T_Patsnap_Founder.jpeg";
import ajayFounder from "@/assets/portfolio/Ajay_Sirion_Founder.jpeg";
import olivierFounder from "@/assets/portfolio/Olivier_Wavecell_Founder.jpeg";

/* ── Company logos (correct _logo files) ── */
import supermomLogo from "@/assets/portfolio/supermom_logo.png";
import shopbackLogo from "@/assets/portfolio/shopback_logo.png";
import fundingSocietiesLogo from "@/assets/portfolio/funding-societies_logo.png";
import patsnapLogo from "@/assets/portfolio/patsnap_logo.png";

/* ── Lookup maps ── */
const founderImageMap: Record<string, string> = {
  "Luke": lukeLimFounder,
  "Chih-Han": chihFounder,
  "Manish": manishFounder,
  "Amit": amitFounder,
  "Henry": henryFounder,
  "Kelvin": kelvinFounder,
  "Jeffrey": jeffreyFounder,
  "Ajay": ajayFounder,
  "Olivier Gerhardt": olivierFounder,
};

const companyLogoMap: Record<string, string> = {
  "Supermom": supermomLogo,
  "ShopBack": shopbackLogo,
  "Funding Societies": fundingSocietiesLogo,
  "Patsnap": patsnapLogo,
};

/* ─────────────── Quote Card (alt: clean dark-glass) ─────────────── */
const QuoteCard = ({
  quote,
  index,
}: {
  quote: FounderQuote;
  index: number;
}) => {
  const founderImg = founderImageMap[quote.founder];
  const companyLogo = companyLogoMap[quote.company];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl border border-white/10 p-8 bg-white/[0.04] backdrop-blur-sm w-full"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
    >
      {/* decorative quote mark */}
      <span
        aria-hidden
        className="absolute top-5 right-6 font-display font-black leading-none select-none"
        style={{ fontSize: "72px", color: "hsl(163 70% 55%)", opacity: 0.15 }}
      >
        "
      </span>

      <blockquote className="text-white/80 text-[15px] sm:text-[16px] leading-[1.65] font-medium pr-10">
        &ldquo;{quote.text}&rdquo;
      </blockquote>

      <figcaption className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
        {/* Founder photo */}
        {founderImg ? (
          <img
            src={founderImg}
            alt={quote.founder}
            className="h-11 w-11 rounded-full object-cover object-top shrink-0 ring-1 ring-white/20"
          />
        ) : (
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full shrink-0 bg-white/10 text-white text-[13px] font-black">
            {quote.founder.charAt(0)}
          </span>
        )}

        <div className="flex-1 min-w-0 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-white text-[13px] font-semibold leading-tight truncate">
              {quote.founder}
            </p>
            <p className="text-white/45 text-[11px] uppercase tracking-[0.14em] mt-0.5">
              Founder
            </p>
          </div>

          {/* Company logo */}
          {companyLogo ? (
            <div className="shrink-0 inline-flex items-center justify-center rounded-md px-3 py-1.5 bg-white/90">
              <img
                src={companyLogo}
                alt={quote.company}
                className="h-[20px] w-auto object-contain"
                style={{ maxWidth: "88px" }}
              />
            </div>
          ) : (
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
              {quote.company}
            </span>
          )}
        </div>
      </figcaption>
    </motion.figure>
  );
};

/* ─────────────── Capability Row (text left, cards right, per-row parallax) ─────────────── */
const CapabilityRow = ({ cap }: { cap: Capability }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Left text moves slower, right cards move faster → parallax depth
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-20 lg:pt-28 border-t border-white/10 first:border-t-0 first:pt-0">
      {/* LEFT: number + title + description — always on left */}
      <motion.div style={{ y: textY }} className="lg:col-span-5 lg:sticky lg:top-32">
        <p
          className="font-display font-black leading-none mb-5 select-none"
          style={{
            fontSize: "clamp(80px, 10vw, 140px)",
            color: "hsl(163 70% 55%)",
            opacity: 0.9,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {cap.number}
        </p>
        <h3 className="font-display text-2xl md:text-3xl lg:text-[32px] font-extrabold text-white leading-[1.1] mb-5 max-w-[420px]">
          {cap.title}
        </h3>
        <p className="text-white/60 text-[15px] sm:text-base leading-relaxed max-w-[440px]">
          {cap.description}
        </p>
      </motion.div>

      {/* RIGHT: quote cards stacked, moving faster on scroll */}
      <motion.div style={{ y: cardsY }} className="lg:col-span-7 flex flex-col gap-4">
        {cap.quotes.map((q, qi) => (
          <QuoteCard key={q.company} quote={q} index={qi} />
        ))}
      </motion.div>
    </div>
  );
};

/* ─────────────── Page ─────────────── */
const WhyQualgro = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: valueProgress } = useScroll({
    target: valueRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(valueProgress, [0, 1], [-40, 40]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── HERO ─── */}
      <div ref={heroRef}>
        <PageHero
          tagline="Qualgro's Value Add"
          title={
            <>
              More than a decade partnering with founders and building across{" "}
              <span className="text-emerald">Southeast Asia</span> and globally.
            </>
          }
          description="Partnering alongside 50+ founders on their building journey with an exit-driven mindset, shaped by a rich history of understanding B2B Software, Data, and AI companies. Our conviction is grounded in selecting strong businesses and collaboratively building towards durable, strategic outcomes and eventual exit pathways."
          descriptionClassName="mt-5 sm:mt-7 text-muted-foreground max-w-3xl text-lg sm:text-xl leading-relaxed"
        />
      </div>

      {/* ─── POST-INVESTMENT STATS STRIP ─── */}
      <section className="py-16 sm:py-20 bg-surface-alt border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="max-w-[1120px] mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-emerald font-display font-bold text-xs uppercase tracking-[0.3em] mb-3">
                  Post-Investment Track Record
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-black text-primary leading-tight max-w-md">
                  Proof in the partnership.
                </h3>
              </div>
              <div className="grid grid-cols-4 gap-8 sm:gap-12">
                {[
                  { value: "33+", label: "Companies backed" },
                  { value: "4", label: "Unicorns" },
                  { value: "9", label: "Full exits" },
                  { value: "10%", label: "Hit rate" },
                ].map((s) => (
                  <div key={s.label} className="text-center md:text-left">
                    <p className="font-display text-4xl sm:text-5xl font-black text-investment-blue leading-none">
                      {s.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-border/60">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-display font-semibold text-sm transition-all hover:translate-y-[-1px] hover:shadow-lg bg-emerald text-emerald-foreground hover:bg-emerald/90 cursor-pointer"
              >
                Learn how Qualgro supported our portfolio companies&apos; exits
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET — DARK CAPABILITY BAND ─── */}
      <section
        ref={valueRef}
        className="relative py-28 lg:py-32 overflow-hidden"
        style={{ backgroundColor: "hsl(217 91% 11%)" }}
      >
        {/* ambient glow */}
        <motion.div
          aria-hidden
          style={{ y: glowY }}
          className="absolute inset-0 opacity-40 pointer-events-none"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 40% at 70% 20%, hsl(163 70% 45% / 0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, hsl(212 80% 50% / 0.18) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Capability rows — text always left, cards right, per-row parallax */}
          <div className="max-w-[1280px] mx-auto">
            {capabilities.map((cap) => (
              <CapabilityRow key={cap.number} cap={cap} />
            ))}
          </div>

          {/* ─── INTERESTED IN QUALGRO — centred footer of dark band ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-32 lg:mt-40 pt-16 border-t border-white/10 text-center"
          >
            <p
              className="font-display text-[11px] font-extrabold uppercase tracking-[0.28em] mb-5"
              style={{ color: "hsl(163 70% 55%)" }}
            >
              Interested in Qualgro?
            </p>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto">
              If you&apos;re building something exciting, drop a copy of your pitch deck to{" "}
              <a
                href="mailto:ops@qualgro.com"
                className="underline underline-offset-2 hover:text-white transition-colors font-semibold"
                style={{ color: "hsl(163 70% 65%)" }}
              >
                ops@qualgro.com
              </a>
              , or use the{" "}
              <button
                onClick={() => {
                  const btn = document.querySelector<HTMLButtonElement>("[data-contact-trigger]");
                  btn?.click();
                }}
                className="underline underline-offset-2 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 font-semibold"
                style={{ color: "hsl(163 70% 65%)" }}
              >
                Contact button
              </button>
              {" "}if you&apos;d like to include a personalised message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Founder Testimonials Marquee ─── */}
      <FounderTestimonials />

      <Footer />
      <PortfolioContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default WhyQualgro;
