import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap, GraduationCap } from "lucide-react";

const impactMetrics = [
  { icon: Users, value: "10K+", label: "Jobs Created", sub: "across Southeast Asia" },
  { icon: TrendingUp, value: "50K+", label: "SMEs Enabled", sub: "with digital financing" },
  { icon: Zap, value: "50K+", label: "Households", sub: "accessing sustainable energy" },
  { icon: GraduationCap, value: "10K+", label: "Students", sub: "accessing further education" },
];

const pillars = [
  {
    title: "Embracing Diversity",
    stat: "30%+",
    description: "Portfolio companies founded or co-founded by women. 8 nationalities on our team with a 50-50 female-male ratio.",
  },
  {
    title: "Empowering Communities",
    stat: "50K+",
    description: "SMEs and individuals supported through innovative financing, upskilling, and digital enablement across the region.",
  },
  {
    title: "Preserving the Planet",
    stat: "50K+",
    description: "Households accessing sustainable energy through portfolio companies driving environmental impact.",
  },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="relative overflow-hidden bg-navy" ref={ref}>
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full bg-emerald/8 blur-[180px]" />
      <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-investment-blue/10 blur-[140px]" />

      <div className="relative z-10 py-28">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-20"
          >
            <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.25em] mb-4">
              Impact & Sustainability
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Building companies that
              <br />
              <span className="text-gradient-emerald">create lasting change.</span>
            </h2>
          </motion.div>

          {/* Metrics row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-24">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="relative group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <metric.icon className="text-emerald" size={18} />
                  <span className="text-primary-foreground/40 text-xs font-medium uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
                <p className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-primary-foreground/30 text-sm">
                  {metric.sub}
                </p>
                {/* Bottom accent line */}
                <div className="mt-4 h-px w-12 bg-emerald/30 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/5 rounded-2xl overflow-hidden">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                className="bg-navy p-10 hover:bg-primary-foreground/[0.03] transition-colors duration-300"
              >
                <p className="font-display text-3xl font-extrabold text-emerald mb-1">
                  {pillar.stat}
                </p>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-primary-foreground/40 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
