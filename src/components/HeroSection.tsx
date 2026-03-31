import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pb-32">
      {/* Background SVG - using public path for fast loading */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.svg"
          alt="Southeast Asian tech network map"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#21638F]/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-[#0a1628]/30 to-transparent" />
      </div>

      {/* Content - left aligned */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/20 border border-emerald/30 mb-8"
         >
           <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
           <span className="text-xs font-semibold uppercase tracking-widest text-emerald">
             SEA VENTURE CAPITAL
           </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-4xl text-primary-foreground text-left lg:text-7xl"
        >
          Scaling the future of{" "}
          <span className="text-gradient-sea">Southeast Asia's</span>{" "}
          tech ecosystem
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl max-w-2xl font-body text-primary-foreground/70"
        >
          Qualgro partners with visionary founders to build the next generation of
          global champions. Rooted in Singapore, scaling across the horizon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-row gap-6 items-center"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-display font-semibold text-sm transition-opacity hover:opacity-90 bg-emerald text-emerald-foreground"
          >
            Our Portfolio
          </a>
          <a
            href="#impact"
            className="inline-flex items-center gap-3 font-display font-semibold text-sm transition-colors hover:opacity-80 text-investment-blue"
          >
            Explore our thesis
            <span className="inline-block w-12 h-px bg-current" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
