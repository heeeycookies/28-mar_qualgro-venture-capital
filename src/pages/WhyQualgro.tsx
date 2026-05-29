import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FounderTestimonials from "@/components/FounderTestimonials";
import PortfolioContactModal from "@/components/PortfolioContactModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

import { capabilities, quoteCardPalette, type FounderQuote } from "@/data/value-add";

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
import appierLogo from "@/assets/portfolio/Appier_Logo.jpg";
import nobrokerLogo from "@/assets/portfolio/Nobroker_logo.png";
import brighteLogo from "@/assets/portfolio/brighte_logo.png";
import sirionLogo from "@/assets/portfolio/Sirion_Logo.png";
import hevoLogo from "@/assets/portfolio/Hevo_logo.jpg";
import wavecellLogo from "@/assets/portfolio/wavecell_logo.png";

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
  "Appier": appierLogo,
  "NoBroker": nobrokerLogo,
  "Brighte": brighteLogo,
  "Sirion": sirionLogo,
  "Hevo": hevoLogo,
  "Wavecell": wavecellLogo,
};

/* ─────────────── Quote Card ─────────────── */
const QuoteCard = ({
  quote,
  index,
  capNumber,
}: {
  quote: FounderQuote;
  index: number;
  capNumber: string;
}) => {
  const palette = quoteCardPalette[quote.color];
  const rotate = index % 2 === 0 ? -2.5 : 2;
  const offsetClass = index === 0 ? "" : "lg:-mt-10 lg:ml-12";
  const founderImg = founderImageMap[quote.founder];
  const companyLogo = companyLogoMap[quote.company];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: rotate * 0.4 }}
      className={`relative w-full max-w-[440px] rounded-[22px] p-9 sm:p-10 ${offsetClass}`}
      style={{
        backgroundColor: palette.bg,
        color: palette.text,
        boxShadow: "0 24px 60px -24px rgba(0,0,0,0.5), 0 8px 20px -10px rgba(0,0,0,0.3)",
      }}
    >
      <blockquote
        className="font-display text-[17px] sm:text-[18px] leading-[1.45] font-medium"
        style={{ color: palette.text }}
      >
        &ldquo;{quote.text}&rdquo;
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-4">
        {/* Founder photo */}
        {founderImg ? (
          <img
            src={founderImg}
            alt={quote.founder}
            className="h-12 w-12 rounded-full object-cover object-top shrink-0"
            style={{ boxShadow: `0 0 0 2.5px ${palette.text}50, 0 4px 12px rgba(0,0,0,0.2)` }}
          />
        ) : (
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-[14px] font-black shrink-0"
            style={{ backgroundColor: palette.text, color: palette.bg }}
          >
            {quote.founder.charAt(0)}
          </span>
        )}

        <div className="flex-1 min-w-0">
          <p
            className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase leading-tight"
            style={{ color: palette.meta }}
          >
            {quote.founder}
          </p>
          {/* Company logo */}
          {companyLogo ? (
            <div
              className="mt-2 inline-flex items-center justify-center rounded-lg px-3 py-1.5"
              style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
            >
              <img
                src={companyLogo}
                alt={quote.company}
                className="h-[22px] w-auto object-contain"
                style={{ maxWidth: "96px" }}
              />
            </div>
          ) : (
            <p
              className="font-display text-[10px] font-semibold tracking-[0.14em] uppercase mt-1"
              style={{ color: palette.meta, opacity: 0.65 }}
            >
              {quote.company}
            </p>
          )}
        </div>
      </figcaption>

      <span
        aria-hidden
        className="absolute bottom-4 right-5 font-display font-black leading-none opacity-50"
        style={{ fontSize: "28px", color: palette.text }}
      >
        {capNumber}
      </span>
    </motion.figure>
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
          {/* Capability rows */}
          <div className="max-w-[1320px] mx-auto space-y-28 lg:space-y-36">
            {capabilities.map((cap, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <div
                  key={cap.number}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Left: numeral on top + title + desc */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5"
                  >
                    <p
                      className="font-display font-black leading-none mb-6"
                      style={{
                        fontSize: "clamp(72px, 9vw, 132px)",
                        color: "hsl(163 70% 55%)",
                        opacity: 0.95,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {cap.number}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-[34px] font-extrabold text-white leading-[1.1] mb-5 max-w-[460px]">
                      {cap.title}
                    </h3>
                    <p className="text-white/70 text-[15px] sm:text-base leading-relaxed max-w-[520px]">
                      {cap.description}
                    </p>
                  </motion.div>

                  {/* Right: tilted quote cards */}
                  <div className="lg:col-span-7 flex flex-col items-start lg:items-end gap-8 lg:gap-4">
                    {cap.quotes.map((q, qi) => (
                      <QuoteCard
                        key={q.company}
                        quote={q}
                        index={qi}
                        capNumber={cap.number}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
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
