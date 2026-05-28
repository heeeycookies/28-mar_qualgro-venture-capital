import { useRef } from "react";
import AnimatedBackdrop from "./motion/AnimatedBackdrop";
import Reveal from "./motion/Reveal";

const sectors = [
  {
    num: "01",
    label: "Software",
    title: "Software",
    desc: "Backing innovation across the full software stack. We favour software deeply embedded in customer workflows with a naturally compounding advantage built over time.",
  },
  {
    num: "02",
    label: "Data",
    title: "Proprietary Data",
    desc: "We invest in companies built on valuable data that is structurally difficult to assemble — proprietary, accumulated through networks and workflows that cannot be easily replicated.",
  },
  {
    num: "03",
    label: "AI",
    title: "Artificial Intelligence",
    desc: "Investing across the AI value chain — compute infrastructure, data pipelines, orchestration and observability — and AI applications embedded in data-rich workflows that solve real-world problems.",
  },
];

const qualities = [
  {
    num: "01",
    label: "Founders",
    title: "Visionary Builders",
    desc: "We look for bold founders who dream and build towards regional and global scale from day one. They pair technological advantage with fast execution to test and iterate. They relentlessly innovate on ways to navigate obstacles, intelligently challenge conventional methods, and solve problems that others can't.",
  },
  {
    num: "02",
    label: "Traction",
    title: "Early-form Product-Market Fit",
    desc: "Our partnership tends to be best suited for companies showing early signs of strong product-market fit, particularly where customer adoption is translating into retention and progressively deeper usage.",
  },
  {
    num: "03",
    label: "Outcomes",
    title: "Measurable Impact",
    desc: "We look to create lasting value in our investments for founders, communities, and the broader ecosystem beyond financial returns.",
  },
];

type Card = { num: string; label: string; title: string; desc: string };

const ThesisCard = ({ card, i }: { card: Card; i: number }) => (
  <Reveal delay={i * 0.05} y={28}>
    <div className="group relative h-full bg-background border border-border rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-12px_rgba(14,58,93,0.18)] hover:border-emerald/40">
      <div className="flex items-center justify-between mb-6">
        <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.22em] text-emerald">
          {card.label}
        </span>
        <span className="font-display text-xs font-black text-muted-foreground/60 tabular-nums">
          {card.num}
        </span>
      </div>
      <h3 className="font-display text-2xl sm:text-[26px] font-extrabold text-primary leading-tight mb-3">
        {card.title}
      </h3>
      <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
        {card.desc}
      </p>
    </div>
  </Reveal>
);

const ThesisSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative bg-surface-alt py-24 sm:py-32 overflow-hidden">
      <AnimatedBackdrop variant="warm" intensity="subtle" />

      <div className="relative mx-auto px-6 sm:px-10 xl:px-14" style={{ maxWidth: "1200px" }}>
        {/* Section header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald mb-5">
              Investment Thesis
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-investment-blue leading-[0.95] mb-6">
              What we look for.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[560px]">
              We invest at the intersection of AI, Software, Data, and Impact across Southeast Asia. We back companies built from first principles — where proprietary data forms compounding advantage, innovation delivers true value, and scalability meets measurable impact.
            </p>
          </Reveal>
        </div>

        {/* Bucket 1: Sectors */}
        <div className="mb-16 sm:mb-20">
          <Reveal>
            <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8 pb-5 border-b border-border">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-investment-blue">
                The types of businesses we back
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Sectors & categories
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {sectors.map((c, i) => (
              <ThesisCard key={c.title} card={c} i={i} />
            ))}
          </div>
        </div>

        {/* Bucket 2: Qualities */}
        <div>
          <Reveal>
            <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8 pb-5 border-b border-border">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-investment-blue">
                The qualities of companies we like to back
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Signals of conviction
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {qualities.map((c, i) => (
              <ThesisCard key={c.title} card={c} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
