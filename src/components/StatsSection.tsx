import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Target, TrendingUp, Award, Briefcase } from "lucide-react";

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
    <section id="about" className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald mb-6"
        >
          Our Track Record
        </motion.p>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          {/* Scaling Cross Border */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="md:col-span-3 bg-surface-alt rounded-2xl p-10 flex flex-col justify-end"
          >
            <Globe className="text-investment-blue mb-4" size={28} />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-investment-blue leading-tight mb-2">
              Scaling Cross Border
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              We help founders break out of their home markets and scale across Southeast Asia and into global markets with hands-on operational support.
            </p>
          </motion.div>

          {/* Unicorn Hit Rate */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="md:col-span-2 bg-navy rounded-2xl p-10 flex flex-col items-start justify-between min-h-[280px]"
          >
            <Target className="text-emerald" size={28} />
            <div>
              <p className="font-display text-5xl md:text-6xl font-extrabold text-primary-foreground">
                10%
              </p>
              <p className="text-sm font-semibold text-primary-foreground/80 mt-1">
                Unicorn Hit Rate
              </p>
              <p className="text-primary-foreground/60 mt-1 text-sm max-w-xs">
                Among the highest conviction rates for any SEA-focused fund.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 9 Full Exits */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-surface-alt rounded-2xl p-8"
          >
            <TrendingUp className="text-investment-blue mb-3" size={24} />
            <p className="font-display text-3xl md:text-4xl font-extrabold text-investment-blue mb-1">
              9 Full Exits
            </p>
            <p className="text-sm font-semibold text-primary mb-1">
              Highest in Southeast Asia
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The most full exits by any venture fund in the region — a testament to our disciplined approach.
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
            <Briefcase className="text-emerald-foreground/80 mb-3" size={24} />
            <p className="font-display text-3xl md:text-4xl font-extrabold text-emerald-foreground mb-1">
              Series A
            </p>
            <p className="text-sm font-semibold text-emerald-foreground/90 mb-1">
              Sweet Spot for Conviction
            </p>
            <p className="text-sm text-emerald-foreground/80 leading-relaxed">
              Where we deploy capital with highest conviction and provide maximum scaling value.
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
            <Award className="text-investment-blue mb-3" size={24} />
            <p className="font-display text-3xl md:text-4xl font-extrabold text-investment-blue mb-1">
              B2B Expert
            </p>
            <p className="text-sm font-semibold text-primary mb-1">
              Leading Expert in B2B
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Deep specialisation in enterprise technology across Southeast Asia and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
