import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  tagline: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

const PageHero = ({ tagline, title, description, children }: PageHeroProps) => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 bg-surface-alt overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-[15%] w-96 h-96 rounded-full blur-[120px]" style={{ background: "hsl(204 63% 85%)" }} />
        <div className="absolute bottom-10 left-[10%] w-72 h-72 rounded-full blur-[100px]" style={{ background: "hsl(111 37% 85%)" }} />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
