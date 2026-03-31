import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp } from "lucide-react";

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
    <section id="about" className="py-24 bg-surface-alt" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-3 text-emerald">
            Asset Momentum
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl text-primary">
            Quality & Growth
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We look for entrepreneurs with the mindset and capabilities to build
            regional or global companies, with technology advantages, fast
            execution and agility.
          </p>
        </motion.div>

        {/* Top row: large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left large card */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-card rounded-2xl border border-border p-10 flex flex-col justify-end"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald mb-4">
              Institutional Backing
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary leading-tight mb-2">
              Backed by world-class LPs and family offices.
            </h3>
            <div className="flex items-end gap-3 mt-4">
              <p className="font-display text-5xl md:text-6xl font-extrabold text-primary">
                $800M+
              </p>
              <p className="text-sm text-muted-foreground pb-2">
                Assets Under Management
              </p>
            </div>
          </motion.div>

          {/* Right large card - dark */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-navy rounded-2xl p-10 flex flex-col items-start justify-between"
          >
            <TrendingUp className="text-emerald mb-6" size={32} />
            <div>
              <p className="font-display text-5xl md:text-6xl font-extrabold text-primary-foreground">
                35+
              </p>
              <p className="text-primary-foreground/60 mt-2 text-sm max-w-xs">
                Technology leaders scaled across regional borders since 2015.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-card rounded-2xl border border-border p-8"
          >
            <p className="font-display text-3xl md:text-4xl font-extrabold text-investment-blue mb-3">
              10%
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unicorn hit rate — among the highest conviction rates for a
              Series&nbsp;A focused fund in Southeast Asia.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-emerald rounded-2xl p-8"
          >
            <p className="font-display text-3xl md:text-4xl font-extrabold text-emerald-foreground mb-3">
              9 Exits
            </p>
            <p className="text-sm text-emerald-foreground/80 leading-relaxed">
              Highest number of full exits by a Series&nbsp;A VC in Southeast
              Asia, delivering consistent alpha for institutional investors.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-card rounded-2xl border border-border p-8"
          >
            <p className="font-display text-3xl md:text-4xl font-extrabold text-investment-blue mb-3">
              Series A
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading expert in B2B enterprise technology, scaling founders
              cross-border across Southeast Asia &amp; Australia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
