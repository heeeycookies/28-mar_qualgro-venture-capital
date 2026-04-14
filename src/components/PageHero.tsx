import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface PageHeroProps {
  tagline: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

const PageHero = ({ tagline, title, description, children }: PageHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section ref={ref} className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 bg-surface-alt overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-20 right-[15%] w-96 h-96 rounded-full blur-[120px]"
          aria-hidden
        >
          <div className="w-full h-full rounded-full" style={{ background: "hsl(204 63% 85%)" }} />
        </motion.div>
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-10 left-[10%] w-72 h-72 rounded-full blur-[100px]"
          aria-hidden
        >
          <div className="w-full h-full rounded-full" style={{ background: "hsl(111 37% 85%)" }} />
        </motion.div>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <p className="text-emerald font-display font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4 inline-block">
            {tagline}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="mt-4 sm:mt-6 text-muted-foreground max-w-2xl text-sm sm:text-lg">
            {description}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
