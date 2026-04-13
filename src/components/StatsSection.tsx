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
        <motion.p
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-[13px] font-semibold uppercase tracking-[1.8px] text-emerald mb-5 sm:mb-6 text-center"
        >
          Our Track Record
        </motion.p>

        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-[2.2fr_1fr] gap-6 sm:gap-9 mb-6 sm:mb-9">
          {/* Unicorn Hit Rate */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-navy rounded-2xl p-8 sm:p-11 flex flex-col justify-between min-h-[280px] sm:min-h-[340px]"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[1.8px] text-emerald">
              Conviction
            </p>
            <div>
              <p className="font-display text-7xl sm:text-8xl md:text-[96px] font-extrabold text-primary-foreground leading-none mt-6 mb-3">
                10%
              </p>
              <p className="font-display text-2xl sm:text-4xl font-bold text-primary-foreground/90 leading-tight">
                Unicorn Hit Rate
              </p>
              <p className="text-primary-foreground/60 mt-2 text-base leading-relaxed">
                Among the highest for any SEA-focused fund.
              </p>
            </div>
          </motion.div>

          {/* 9 Full Exits */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-2xl p-8 sm:p-11 flex flex-col justify-between min-h-[280px] sm:min-h-[340px] shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            style={{ background: "#EEF2F4" }}
          >
            <p className="text-[13px] font-semibold uppercase tracking-[1.8px] text-investment-blue">
              Returns
            </p>
            <div>
              <p className="font-display text-7xl sm:text-8xl md:text-[96px] font-extrabold text-investment-blue leading-none mt-6 mb-3">
                9
              </p>
              <p className="font-display text-2xl sm:text-4xl font-bold text-primary leading-tight">
                Full Exits
              </p>
              <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                Highest number of full exits in Southeast Asia.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7">
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-2xl p-8 sm:p-11 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            style={{ background: "#EEF2F4" }}
          >
            <p className="font-display text-4xl sm:text-[64px] font-extrabold text-investment-blue leading-tight mb-3">
              Cross Border
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Scaling founders from home markets into Southeast Asia and global markets.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-emerald rounded-2xl p-8 sm:p-11"
          >
            <p className="font-display text-4xl sm:text-[64px] font-extrabold text-emerald-foreground leading-tight mb-3">
              Series A
            </p>
            <p className="text-base text-emerald-foreground/80 leading-relaxed">
              Sweet spot for high-conviction deployment and maximum scaling value.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="rounded-2xl p-8 sm:p-11 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            style={{ background: "#EEF2F4" }}
          >
            <p className="font-display text-4xl sm:text-[64px] font-extrabold text-investment-blue leading-tight mb-3">
              B2B Expert
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Leading expertise in enterprise technology across Southeast Asia and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
