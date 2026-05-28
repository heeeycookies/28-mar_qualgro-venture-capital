import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FounderTestimonials from "@/components/FounderTestimonials";
import PortfolioContactModal from "@/components/PortfolioContactModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { methodology } from "@/data/impact";
import { capabilities, quoteCardPalette, type FounderQuote } from "@/data/value-add";

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
  // Alternate tilt & vertical offset for stacked look
  const rotate = index % 2 === 0 ? -2.5 : 2;
  const offsetClass = index === 0 ? "" : "lg:-mt-10 lg:ml-12";

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
      <figcaption
        className="mt-7 flex items-center gap-3 font-display text-[11px] font-extrabold tracking-[0.18em] uppercase"
        style={{ color: palette.meta }}
      >
        <span
          className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black"
          style={{ backgroundColor: palette.text, color: palette.bg }}
        >
          {quote.founder.charAt(0)}
        </span>
        <span>
          {quote.founder} · {quote.company}
        </span>
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
              More than a decade investing in{" "}
              <span className="text-emerald">Southeast Asia</span> &amp; globally.
            </>
          }
          description="Alongside 50+ founders on their building journey — from early traction all the way through to full exit."
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
                    {/* Footnote for capability #05 */}
                    {cap.number === "05" && (
                      <motion.aside
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full max-w-[440px] rounded-2xl border border-white/10 px-6 py-5"
                        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                      >
                        <p className="text-[11px] font-display font-extrabold uppercase tracking-[0.2em] mb-2" style={{ color: "hsl(163 70% 55%)" }}>
                          Interested in Qualgro?
                        </p>
                        <p className="text-white/65 text-sm leading-relaxed">
                          If you&apos;re building something exciting, drop a copy of your pitch deck to{" "}
                          <a
                            href="mailto:ops@qualgro.com"
                            className="underline underline-offset-2 hover:text-white transition-colors"
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
                            className="underline underline-offset-2 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                            style={{ color: "hsl(163 70% 65%)" }}
                          >
                            Contact button
                          </button>
                          {" "}if you&apos;d like to include a personalised message.
                        </p>
                      </motion.aside>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY (kept) ─── */}
      <section className="py-28 lg:py-32 relative overflow-hidden bg-surface-alt">
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Built on Rigour
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div
              className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px"
              style={{ background: "linear-gradient(to right, transparent, hsl(163 59% 30% / 0.4), transparent)" }}
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
                      backgroundColor: "hsl(163 59% 30%)",
                      color: "#fff",
                      boxShadow: "0 0 0 6px hsl(var(--surface-alt)), 0 0 30px hsl(163 59% 30% / 0.25)",
                    }}
                  >
                    {s.step}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-extrabold text-primary">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-[220px]">
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
            className="text-center text-xs italic text-muted-foreground mt-16 max-w-2xl mx-auto leading-relaxed"
          >
            {methodology.disclaimer}
          </motion.p>
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
