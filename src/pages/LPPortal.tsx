import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioContactModal from "@/components/PortfolioContactModal";

/* ─── Why LPs Partner (light section) ─── */
const reasons = [
  {
    number: "01",
    icon: Award,
    title: "Sharp and unique company assessment lens",
    body: "Qualgro understands what makes Southeast Asian software companies investable and exitable. Our focus is not just in chasing frontier technologies alone, but in identifying companies solving real market needs with the right product, timing, commercial model, and founder quality.",
  },
  {
    number: "02",
    icon: Users,
    title: "Practical know-hows to support founders journeys",
    body: "Qualgro helps founders move from early traction to institutional scale, lending our deep expertise on critical operating decisions — building the right teams, structuring go-to-markets, and avoiding common scaling mistakes.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Proven Southeast Asia Exit Model",
    body: "With 9 full exits through a mix of M&As and IPO, Qualgro has a clear view of what acquirers and public markets value, and how to reach these states, helping our LPs generate liquidity and strong returns from their commitment in us.",
  },
];

const LPWhyPartners = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
    {/* subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.035] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--investment-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--investment-blue)) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
      aria-hidden
    />
    <div className="container mx-auto px-6 max-w-[1120px] relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 lg:mb-16"
      >
        <p className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-4 text-emerald">
          Why LPs partner with us
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-[1.0] max-w-[560px]">
          Built for superior LP outcomes.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
        {reasons.map((r, i) => (
          <motion.div
            key={r.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-card rounded-2xl p-8 border border-border/70 hover:border-emerald/50 transition-all duration-200 group flex flex-col"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            {/* number */}
            <p
              className="font-display font-black text-5xl leading-none mb-6 select-none"
              style={{ color: "hsl(163 59% 30%)", opacity: 0.9 }}
            >
              {r.number}
            </p>

            <h3 className="font-display text-[17px] font-extrabold text-primary leading-[1.25] mb-3">
              {r.title}
            </h3>

            <p className="text-muted-foreground text-[14px] leading-relaxed flex-1">
              {r.body}
            </p>

            {/* hover accent */}
            <div
              className="absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ backgroundColor: "hsl(163 59% 30%)" }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mt-12 flex justify-center"
      >
        <button
          onClick={onOpenModal}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-display font-semibold text-sm text-white transition-all hover:-translate-y-[1px] hover:shadow-lg hover:shadow-emerald/20 cursor-pointer"
          style={{ backgroundColor: "hsl(163 59% 30%)" }}
        >
          Learn how Qualgro supported our portfolio companies&apos; exits
          <ArrowRight size={16} />
        </button>
      </motion.div>
    </div>
  </section>
);

/* ─── LP Commitment (dark charcoal band) ─── */
const LPValueAdd = () => (
  <section
    className="py-28 lg:py-32 relative overflow-hidden"
    style={{ backgroundColor: "hsl(220 28% 10%)" }}
  >
    {/* ambient glow — different hues from hero to feel distinct */}
    <div
      className="absolute inset-0 opacity-35 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 50% 45% at 80% 15%, hsl(163 70% 40% / 0.2) 0%, transparent 70%), radial-gradient(ellipse 45% 40% at 10% 85%, hsl(200 80% 45% / 0.15) 0%, transparent 70%)",
      }}
    />
    <div className="container mx-auto px-6 relative z-10 max-w-[1320px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1120px]"
      >
        <p
          className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-4"
          style={{ color: "hsl(163 70% 55%)" }}
        >
          What You Get
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]">
          Our commitment to our LPs.
        </h2>
        <p className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-[640px]">
          Five things our LPs consistently point to when describing what makes the Qualgro partnership different.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {[
            {
              heading: "Returns & Business",
              items: [
                "Returns and DPI — ahead of most comparable VCs",
                "Socio-economic and ESG impact",
                "Co-investment opportunities for LPs, where relevant",
                "Advisory on Southeast Asia landscape, trends and dynamics",
                "Relationships and connections across the region",
              ],
            },
            {
              heading: "Processes & Operations",
              items: [
                "Close LP relationships — regular interactions beyond Annual Meetings",
                "Open-book policy — full transparency, any information, any time",
                "ILPA-aligned reporting, IFRS/SFRS, yearly external audit by a Big 4",
                "MAS-compliant operations with yearly internal audit by a reputable provider",
              ],
            },
          ].map((group, gi) => (
            <motion.div
              key={group.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3
                className="font-display text-[11px] font-bold uppercase tracking-[0.25em] mb-6"
                style={{ color: "hsl(163 70% 55%)" }}
              >
                {group.heading}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-white/75 text-[15px] leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-[7px] h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "hsl(163 70% 55%)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  </section>
);

/* ─── Page ─── */
const LPPortal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(217 91% 11%)" }}>
      <Navbar variant="dark" />

      {/* ─── Hero — deep navy ─── */}
      <section
        className="relative min-h-[75vh] flex items-center pt-28 pb-24 overflow-hidden"
        style={{ backgroundColor: "hsl(217 91% 11%)" }}
      >
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 40% at 70% 25%, hsl(163 70% 45% / 0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 85%, hsl(212 80% 50% / 0.20) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden
        />

        <div className="container mx-auto px-6 relative z-10 max-w-[1120px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[900px]"
          >
            <p
              className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-5"
              style={{ color: "hsl(163 70% 60%)" }}
            >
              For Limited Partners
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] max-w-[700px]">
              Exit-driven investing, with{" "}
              <span style={{ color: "hsl(163 70% 60%)" }}>proven and delivered</span>{" "}
              track record.
            </h1>
            <p className="mt-7 text-white/65 text-lg leading-relaxed max-w-[820px]">
              Among the top Southeast Asian VC funds that have generated real liquidity and exit performance on par with top quartile global VCs, achieved through our unique assessment lens and dedicated value creation support.
            </p>

            {/* stat pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { value: "9", label: "Full exits" },
                { value: "4", label: "Unicorns" },
                { value: "33+", label: "Companies" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-display font-semibold"
                  style={{
                    borderColor: "hsl(163 70% 55% / 0.4)",
                    backgroundColor: "hsl(163 70% 55% / 0.08)",
                    color: "hsl(163 70% 70%)",
                  }}
                >
                  <span className="font-black text-white">{s.value}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Why LPs partner — light ─── */}
      <LPWhyPartners onOpenModal={() => setModalOpen(true)} />

      {/* ─── Our commitment — dark charcoal ─── */}
      <LPValueAdd />

      <div style={{ backgroundColor: "hsl(217 91% 11%)" }}>
        <Footer />
      </div>

      <PortfolioContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default LPPortal;
