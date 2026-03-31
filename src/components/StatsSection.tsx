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
    <section id="about" className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Top row: two large cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          {/* Left large card — spans 3 */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="md:col-span-3 bg-surface-alt rounded-2xl p-10 flex flex-col justify-end"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald mb-4">
              Asset Momentum
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary leading-tight mb-1">
              Institutional backing from world-class LPs and family offices.
            </h3>
            <div className="flex items-end gap-3 mt-4">
              <p className="font-display text-5xl md:text-7xl font-extrabold text-primary">
                $800M+
              </p>
              <p className="text-sm text-muted-foreground pb-2">
                Assets Under Management
              </p>
            </div>
          </motion.div>

          {/* Right dark card — spans 2 */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="md:col-span-2 bg-navy rounded-2xl p-10 flex flex-col items-start justify-between min-h-[280px]"
          >
            <TrendingUp className="text-emerald" size={28} />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-surface-alt rounded-2xl p-8"
          >
            <p className="font-display text-3xl md:text-4xl font-extrabold text-investment-blue mb-3">
              85%
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Of our portfolio companies have successfully raised follow-on rounds from global Tier-1 VCs.
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
              Series B
            </p>
            <p className="text-sm text-emerald-foreground/80 leading-relaxed">
              Our sweet spot for high-conviction deployment where we provide maximum scaling value.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="bg-surface-alt rounded-2xl p-8"
          >
            <p className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-3">
              12+
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic exit events, delivering consistent alpha for our institutional investors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
