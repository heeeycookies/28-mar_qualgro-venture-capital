import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 bg-background overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.3em] mb-5"
            >
              The Qualgro Advantage
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-investment-blue"
            >
              Architecting
              <br />
              <span className="text-investment-blue/40">Global Winners.</span>
            </motion.h1>
          </div>

          {/* Right column — description with left border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:pt-16"
          >
            <div className="border-l-2 border-border pl-6">
              <p className="text-muted-foreground text-base leading-relaxed">
                We don't just invest capital; we engineer growth. By combining deep regional expertise with a global scaling framework, Qualgro transforms ambitious Southeast Asian startups into international category leaders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
