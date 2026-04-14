import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-20 sm:pt-28 pb-10 sm:pb-16 bg-background overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left column */}
          <div className="max-w-[560px]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-emerald font-display font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-5"
            >
              The Qualgro Advantage
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.02] text-navy"
            >
              Architecting
              <br />
              <span className="text-muted-foreground/40">Global Winners.</span>
            </motion.h1>
          </div>

          {/* Right column — description with left border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:pt-20"
          >
            <div className="border-l-[3px] border-emerald pl-5 sm:pl-7 mx-0 sm:mx-[25px] px-0 sm:px-[90px]">
              <p className="text-foreground/60 text-sm sm:text-lg leading-relaxed font-medium max-w-[520px]">
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
