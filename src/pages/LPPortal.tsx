import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioContactModal from "@/components/PortfolioContactModal";

/* ─── LP Value Add (dark band) ─── */
const LPValueAdd = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section
    className="py-28 lg:py-32 relative overflow-hidden"
    style={{ backgroundColor: "hsl(217 91% 11%)" }}
  >
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 55% 40% at 70% 20%, hsl(163 70% 45% / 0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, hsl(212 80% 50% / 0.18) 0%, transparent 70%)",
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
          Our commitment to our LPs:
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]">
          Qualgro&apos;s value to LPs.
        </h2>
        <p className="mt-6 text-white/65 text-base sm:text-lg leading-relaxed max-w-[680px]">
          Among the top Southeast Asian VC funds that have generated real liquidity and exit performance on par with top quartile global VCs, achieved through our unique assessment lens and dedicated value creation support to scale companies regional and global.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
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
          ].map((group) => (
            <div key={group.heading}>
              <h3
                className="font-display text-[11px] font-bold uppercase tracking-[0.25em] mb-5"
                style={{ color: "hsl(163 70% 55%)" }}
              >
                {group.heading}
              </h3>
              <ul className="space-y-3.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-white/80 text-[15px] leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "hsl(163 70% 55%)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-display font-semibold text-sm transition-all hover:-translate-y-[1px] hover:shadow-lg cursor-pointer"
            style={{ backgroundColor: "hsl(163 70% 45%)", color: "#fff" }}
          >
            Learn how Qualgro supported our portfolio companies&apos; exits
            <ArrowRight size={16} />
          </button>
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

      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center pt-28 pb-20 overflow-hidden"
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

        <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[680px]"
          >
            <p
              className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-5"
              style={{ color: "hsl(163 70% 60%)" }}
            >
              For Limited Partners
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95]">
              A decade of compounding,<br />
              <span style={{ color: "hsl(163 70% 60%)" }}>for our LPs.</span>
            </h1>
            <p className="mt-7 text-white/70 text-lg leading-relaxed max-w-[520px]">
              Exit-driven investing, with proven and delivered track record.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-10 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-display font-semibold text-sm transition-all hover:-translate-y-[1px] hover:shadow-lg cursor-pointer"
              style={{ backgroundColor: "hsl(163 70% 45%)", color: "#fff" }}
            >
              Learn how Qualgro supported our portfolio companies&apos; exits
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      <LPValueAdd onOpenModal={() => setModalOpen(true)} />

      <div style={{ backgroundColor: "hsl(217 91% 11%)" }}>
        <Footer />
      </div>

      <PortfolioContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default LPPortal;
