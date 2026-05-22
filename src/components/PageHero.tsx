import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import AnimatedBackdrop from "./motion/AnimatedBackdrop";

interface PageHeroProps {
  tagline: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  variant?: "emerald" | "navy" | "warm" | "cool";
}

const PageHero = ({ tagline, title, description, children, variant = "warm" }: PageHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

  return (
    <section ref={ref} className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-background overflow-hidden">
      <AnimatedBackdrop variant={variant} intensity="subtle" />
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--investment-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--investment-blue)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <p className="text-emerald font-display font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 sm:mb-5 inline-block">
            {tagline}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] max-w-3xl">
            {title}
          </h1>
          <p className="mt-5 sm:mt-7 text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
            {description}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;

