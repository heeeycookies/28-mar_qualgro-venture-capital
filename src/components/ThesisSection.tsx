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

const themes = [
  {
    label: "AI",
    title: "Artificial Intelligence",
    desc: "Backing founders building AI-native products — from enterprise automation and intelligent workflows to generative AI applications solving real business problems.",
  },
  {
    label: "Data",
    title: "Data Infrastructure",
    desc: "Investing in the data backbone — analytics platforms, MLOps tooling, and data pipelines that power the next generation of intelligent enterprises.",
  },
  {
    label: "Impact",
    title: "Measurable Impact",
    desc: "Every investment must create lasting value — for founders, for communities, and for the broader ecosystem. We measure what matters beyond financial returns.",
  },
  {
    label: "Innovation",
    title: "Deep Tech Innovation",
    desc: "Supporting breakthrough technologies in fintech, cybersecurity, and vertical SaaS that are reshaping how businesses operate across Asia-Pacific.",
  },
];

const ThesisSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.96]);

  return (
    <section className="py-16 sm:py-[100px] bg-surface-alt" ref={ref}>
      <div className="mx-auto px-6 sm:px-10 xl:px-14" style={{ maxWidth: "1120px" }}>
        <motion.div style={{ y: headlineY }} className="max-w-2xl mb-8 sm:mb-14">
          <motion.p
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-emerald mb-4"
          >
            Investment Thesis
          </motion.p>
          <motion.h2
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-investment-blue leading-tight mb-3 sm:mb-5"
          >
            What We Look For
          </motion.h2>
          <motion.p
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-muted-foreground text-sm sm:text-base leading-relaxed"
          >
            We invest at the intersection of <strong className="text-investment-blue font-bold">AI</strong>, <strong className="text-investment-blue font-bold">Data</strong>, and <strong className="text-investment-blue font-bold">Impact</strong> — backing Series A founders in Southeast Asia who are building technology that scales globally.
          </motion.p>
        </motion.div>

        <motion.div style={{ scale: cardScale }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              custom={i + 3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="bg-card rounded-2xl p-5 sm:p-7 border border-border hover:shadow-lg hover:border-investment-blue/20 transition-all group"
            >
              <span className="inline-block text-xs font-black uppercase tracking-wider text-investment-blue bg-investment-blue/10 px-3 py-1 rounded-full mb-4">
                {theme.label}
              </span>
              <h4 className="font-display text-sm sm:text-base font-bold text-primary mb-2">
                {theme.title}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {theme.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThesisSection;
