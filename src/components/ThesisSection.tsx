import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedBackdrop from "./motion/AnimatedBackdrop";
import Reveal from "./motion/Reveal";

const themes = [
  {
    num: "01",
    label: "AI",
    title: "Artificial Intelligence",
    desc: "Investing across the AI value chain — compute infrastructure, data pipelines, orchestration and observability — and AI applications embedded in data-rich workflows that solve real-world problems.",
  },
  {
    num: "02",
    label: "Software",
    title: "Software",
    desc: "Backing innovation across the full software stack. We favour software deeply embedded in customer workflows with a naturally compounding advantage built over time.",
  },
  {
    num: "03",
    label: "Data",
    title: "Proprietary Data",
    desc: "We invest in companies built on valuable data that is structurally difficult to assemble — proprietary, accumulated through networks and workflows that cannot be easily replicated.",
  },
  {
    num: "04",
    label: "Impact",
    title: "Measurable Impact",
    desc: "Supporting platforms that create value beyond financial returns — technologies that measurably improve livelihoods, expand access to opportunity, and deliver outcomes to deserving communities.",
  },
];

const ThesisSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative bg-surface-alt py-24 sm:py-32 overflow-hidden">
      <AnimatedBackdrop variant="warm" intensity="subtle" />

      <div className="relative mx-auto px-6 sm:px-10 xl:px-14" style={{ maxWidth: "1120px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky left rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald mb-5">
                  Investment Thesis
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-investment-blue leading-[0.95] mb-6">
                  What we<br />look for.
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed max-w-[440px]">
                  We invest at the intersection of AI, Software, Data, and Impact across Southeast Asia. We back companies built from first principles — where proprietary data forms compounding advantage, innovation delivers true value, and scalability meets measurable impact.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right scroll column */}
          <div className="lg:col-span-7 relative">
            {/* Vertical timeline */}
            <div className="absolute left-[14px] top-3 bottom-3 w-px bg-border" aria-hidden />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[14px] top-3 w-px bg-emerald origin-top"
              aria-hidden
            />

            <div className="space-y-14">
              {themes.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.05} y={32}>
                  <div className="flex gap-6 group">
                    <div className="relative shrink-0 mt-1">
                      <div className="w-[30px] h-[30px] rounded-full bg-background border-2 border-emerald flex items-center justify-center font-display text-[10px] font-black text-emerald group-hover:bg-emerald group-hover:text-emerald-foreground transition-colors">
                        {t.num}
                      </div>
                    </div>
                    <div className="flex-1 pb-2">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-investment-blue mb-2">
                        {t.label}
                      </p>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-primary leading-tight mb-3">
                        {t.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-[520px]">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
