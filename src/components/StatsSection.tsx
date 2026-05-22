import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -10]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.93, 1, 1, 0.97]);

  return (
    <motion.section id="about" className="py-20 sm:py-[120px]" ref={ref} style={{ scale: sectionScale }}>
      <div className="mx-auto px-6 sm:px-10 xl:px-14" style={{ maxWidth: "1120px" }}>
        {/* Section eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[1.5px] mb-8 sm:mb-10 md:mb-12"
          style={{ color: "#006D4E" }}
        >
          Our Performance
        </motion.p>

        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-[2.2fr_1fr] gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            style={{ background: "#F8F3F2", y: y1 }}
            className="stat-card rounded-[14px] sm:rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[340px] md:min-h-[380px]"
          >
            <div>
              <p className="font-display text-base sm:text-xl md:text-2xl lg:text-[28px] font-bold text-primary leading-snug mt-4 sm:mt-6">
                Proven track record of<br />
                backing unicorns early​
              </p>
              <div className="mt-4 sm:mt-8 mb-2 sm:mb-3">
                <p className="font-display font-extrabold text-primary leading-none">
                  <span className="text-[56px] sm:text-[80px] md:text-[90px] lg:text-[100px]">10%</span>
                </p>
                <p className="font-display text-xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-primary leading-tight mt-1">
                  Unicorn Hit Rate
                </p>
              </div>
              <p className="text-muted-foreground text-xs sm:text-base leading-relaxed max-w-md mt-3">
                Top decile performance across early-stage venture portfolios.
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            style={{ background: "#004971", y: y2 }}
            className="stat-card-dark rounded-[14px] sm:rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[340px] md:min-h-[380px]"
          >
            <div>
              <p className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-extrabold text-white leading-none mt-4 sm:mt-6 mb-2 sm:mb-3">
                US<br />$7B+
              </p>
              <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-white/90 leading-tight">
                Valuation
              </p>
              <p className="text-white/60 mt-3 text-xs sm:text-base leading-relaxed">
                Combined Valuation of our portfolio companies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="stat-card rounded-[14px] sm:rounded-2xl p-6 sm:p-10 md:p-12"
            style={{ background: "#EAE8E7" }}
          >
            <p className="font-display text-3xl sm:text-5xl md:text-[64px] font-extrabold leading-none mb-2 sm:mb-3" style={{ color: "#004971" }}>
              9 Full Exits
            </p>
            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
              Among the highest for any SEA-focused fund.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="stat-card-dark rounded-[14px] sm:rounded-2xl p-6 sm:p-10 md:p-12"
            style={{ background: "#006D4E" }}
          >
            <p className="font-display font-extrabold text-white leading-[1.05] mb-2 sm:mb-3">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">12</span>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-2">Global</span>
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">13</span>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-2">Regional</span>
            </p>
            <p className="text-xs sm:text-base text-white/80 leading-relaxed">
              High-conviction investments across Southeast Asia's most promising ventures.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="stat-card rounded-[14px] sm:rounded-2xl p-6 sm:p-10 md:p-12"
            style={{ background: "#F8F3F2" }}
          >
            <p className="font-display text-3xl sm:text-5xl md:text-[64px] font-extrabold leading-none mb-2 sm:mb-3" style={{ color: "#004971" }}>
              85%
            </p>
            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
              Follow-on rate from top-tier co-investors across portfolio rounds.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
