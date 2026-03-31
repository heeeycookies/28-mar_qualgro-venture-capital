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
    <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-[15%] w-96 h-96 rounded-full bg-investment-blue/30 blur-[120px]" />
        <div className="absolute bottom-10 left-[10%] w-72 h-72 rounded-full bg-emerald/20 blur-[100px]" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gradient-page font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4 inline-block">
            {tagline}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-2xl text-lg">
            {description}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
