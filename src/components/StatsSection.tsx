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
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-emerald mb-6 text-center"
          >
            Our Track Record
          </motion.p>

          {/* Top row: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Unicorn Hit Rate — FIRST */}
            <motion.div
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="bg-navy rounded-2xl p-10 flex flex-col justify-between min-h-[260px]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                Conviction
              </p>
              <div>
                <p className="font-display text-7xl md:text-8xl font-black text-primary-foreground">
                  10%
                </p>
                <p className="text-lg font-bold text-primary-foreground/80 mt-1">
                  Unicorn Hit Rate
                </p>
                <p className="text-primary-foreground/50 mt-1 text-sm">
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
              className="bg-surface-alt rounded-2xl p-10 flex flex-col justify-between min-h-[260px]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-investment-blue">
                Returns
              </p>
              <div>
                <p className="font-display text-7xl md:text-8xl font-black text-investment-blue">
                  9
                </p>
                <p className="text-lg font-bold text-primary mt-1">
                  Full Exits
                </p>
                <p className="text-sm text-muted-foreground">
                  Highest number of full exits in Southeast Asia.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Scaling Cross Border */}
            <motion.div
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="bg-surface-alt rounded-2xl p-8"
            >
              <p className="font-display text-3xl font-black text-investment-blue mb-2">
                Cross Border
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scaling founders from home markets into Southeast Asia and global markets.
              </p>
            </motion.div>

            {/* Series A */}
            <motion.div
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="bg-emerald rounded-2xl p-8"
            >
              <p className="font-display text-3xl font-black text-emerald-foreground mb-2">
                Series A
              </p>
              <p className="text-sm text-emerald-foreground/80 leading-relaxed">
                Sweet spot for high-conviction deployment and maximum scaling value.
              </p>
            </motion.div>

            {/* B2B Expert */}
            <motion.div
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="bg-surface-alt rounded-2xl p-8"
            >
              <p className="font-display text-3xl font-black text-investment-blue mb-2">
                B2B Expert
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading expertise in enterprise technology across Southeast Asia and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
