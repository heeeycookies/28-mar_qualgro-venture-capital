import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 bg-background" ref={ref}>
      <div className="mx-auto px-6" style={{ maxWidth: "1320px" }}>
        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-[2.2fr_1fr] gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left — Track Record headline card */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-2xl p-10 sm:p-12 flex flex-col justify-between min-h-[300px] sm:min-h-[360px] shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            style={{ background: "#EEF2F4" }}
          >
            <p className="text-[13px] font-semibold uppercase tracking-[1.8px] text-emerald">
              Track Record
            </p>
            <div>
              <p className="font-display text-xl sm:text-2xl md:text-[28px] font-bold text-primary leading-snug mt-6">
                Backing category<br />
                defining companies<br />
                across Southeast Asia.
              </p>
              <p className="font-display text-6xl sm:text-7xl md:text-[90px] font-extrabold text-primary leading-none mt-6 mb-3">
                10% Unicorn Hit Rate
              </p>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Top decile performance across early-stage venture portfolios.
              </p>
            </div>
          </motion.div>

          {/* Right — 35+ */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-navy rounded-2xl p-10 sm:p-12 flex flex-col justify-between min-h-[300px] sm:min-h-[360px]"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[1.8px] text-emerald">
              Portfolio
            </p>
            <div>
              <p className="font-display text-7xl sm:text-8xl md:text-[96px] font-extrabold text-primary-foreground leading-none mt-6 mb-3">
                35+
              </p>
              <p className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground/90 leading-tight">
                Companies Backed
              </p>
              <p className="text-primary-foreground/60 mt-2 text-base leading-relaxed">
                High-conviction investments across Southeast Asia's most promising ventures.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7">
          {/* 85% */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-2xl p-10 sm:p-12 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            style={{ background: "#EEF2F4" }}
          >
            <p className="font-display text-5xl sm:text-[64px] font-extrabold text-investment-blue leading-none mb-3">
              85%
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Follow-on rate from top-tier co-investors across portfolio rounds.
            </p>
          </motion.div>

          {/* Series B Focus */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-emerald rounded-2xl p-10 sm:p-12"
          >
            <p className="font-display text-4xl sm:text-[52px] font-extrabold text-emerald-foreground leading-tight mb-3">
              Series B Focus
            </p>
            <p className="text-base text-emerald-foreground/80 leading-relaxed">
              Sweet spot for high-conviction deployment and maximum scaling value.
            </p>
          </motion.div>

          {/* 12+ */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-2xl p-10 sm:p-12 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            style={{ background: "#EEF2F4" }}
          >
            <p className="font-display text-5xl sm:text-[64px] font-extrabold text-investment-blue leading-none mb-3">
              12+
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Full exits delivered — among the highest for any SEA-focused fund.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
