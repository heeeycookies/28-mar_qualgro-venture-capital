import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Sparkles, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const pillars = [
  {
    icon: Brain,
    title: "AI-Native Companies",
    desc: "We actively seek founders building AI-first products that solve real enterprise pain points across Southeast Asia and globally.",
  },
  {
    icon: Cpu,
    title: "Infrastructure & Tooling",
    desc: "From MLOps to data pipelines, we back the picks-and-shovels companies enabling the broader AI ecosystem.",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Portfolios",
    desc: "We help existing portfolio companies integrate AI into their workflows to drive efficiency, reduce costs, and unlock new revenue.",
  },
  {
    icon: Zap,
    title: "Go-to-Market Acceleration",
    desc: "Our network connects AI startups with enterprise buyers across the region, compressing sales cycles and accelerating adoption.",
  },
];

const AISection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-surface-alt" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — headline */}
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald mb-5"
            >
              AI-Forward Investing
            </motion.p>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-6"
            >
              Backing the AI
              <br />
              <span className="text-muted-foreground/50">Revolution.</span>
            </motion.h2>
            <motion.p
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-muted-foreground text-base leading-relaxed max-w-md"
            >
              Artificial intelligence is reshaping every industry. At Qualgro, we're positioned at the intersection of AI innovation and Southeast Asian enterprise demand — backing founders who are building the future of work, commerce, and infrastructure.
            </motion.p>
          </div>

          {/* Right — pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i + 2}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <pillar.icon className="text-emerald mb-3" size={24} />
                <h4 className="font-display text-base font-bold text-primary mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
