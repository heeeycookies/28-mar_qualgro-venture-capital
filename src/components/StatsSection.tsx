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
    <section id="about" className="py-12 sm:py-20 md:py-24" ref={ref}>
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "1320px" }}>
        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-[2.2fr_1fr] gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
          {/* Left — Track Record headline card */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-[14px] sm:rounded-2xl p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[280px] sm:min-h-[340px] md:min-h-[380px]"
            style={{ background: "#FBF9F8" }}
          >
            <p className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-[1.8px]" style={{ color: "#006D4E" }}>
              Track Record
            </p>
            <div>
              <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-primary leading-snug mt-4 sm:mt-6">
                Partnering with<br />
                exceptional founders<br />
                across Southeast Asia.
              </p>
              <div className="mt-6 sm:mt-8 mb-2 sm:mb-3">
                <p className="font-display font-extrabold text-primary leading-none">
                  <span className="text-[72px] sm:text-[80px] md:text-[90px] lg:text-[100px]">10%</span>
                </p>
                <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-primary leading-tight mt-1">
                  Unicorn Hit Rate
                </p>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mt-3">
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
            className="rounded-[14px] sm:rounded-2xl p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[280px] sm:min-h-[340px] md:min-h-[380px]"
            style={{ background: "#004971" }}
          >
            <p className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-[1.8px]" style={{ color: "#4ECBA0" }}>
              Portfolio
            </p>
            <div>
              <p className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-extrabold text-white leading-none mt-4 sm:mt-6 mb-2 sm:mb-3">
                35+
              </p>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white/90 leading-tight">
                Companies Backed
              </p>
              <p className="text-white/60 mt-3 text-sm sm:text-base leading-relaxed">
                High-conviction investments across Southeast Asia's most promising ventures.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* 85% */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-[14px] sm:rounded-2xl p-8 sm:p-10 md:p-12"
            style={{ background: "#F8F3F2" }}
          >
            <p className="font-display text-4xl sm:text-5xl md:text-[64px] font-extrabold leading-none mb-2 sm:mb-3" style={{ color: "#004971" }}>
              85%
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Follow-on rate from top-tier co-investors across portfolio rounds.
            </p>
          </motion.div>

          {/* Series B Focus */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-[14px] sm:rounded-2xl p-8 sm:p-10 md:p-12"
            style={{ background: "#006D4E" }}
          >
            <p className="font-display text-3xl sm:text-4xl md:text-[52px] font-extrabold text-white leading-tight mb-2 sm:mb-3">
              Series B Focus
            </p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Sweet spot for high-conviction deployment and maximum scaling value.
            </p>
          </motion.div>

          {/* 12+ */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-[14px] sm:rounded-2xl p-8 sm:p-10 md:p-12"
            style={{ background: "#EAE8E7" }}
          >
            <p className="font-display text-4xl sm:text-5xl md:text-[64px] font-extrabold leading-none mb-2 sm:mb-3" style={{ color: "#004971" }}>
              12+
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Full exits delivered — among the highest for any SEA-focused fund.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
