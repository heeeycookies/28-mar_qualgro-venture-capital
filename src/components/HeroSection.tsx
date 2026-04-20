import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.3, 0]);

  return (
    <section
      ref={ref}
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 lg:pb-16 bg-background overflow-hidden"
    >
      {/* Parallax background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: orbY1, opacity: orbOpacity, scale: bgScale }}
          className="absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full blur-[140px]"
          aria-hidden
        >
          <div
            className="w-full h-full rounded-full"
            style={{ background: "hsl(var(--emerald) / 0.3)" }}
          />
        </motion.div>
        <motion.div
          style={{ y: orbY2, opacity: orbOpacity, scale: bgScale }}
          className="absolute top-40 left-[5%] w-[400px] h-[400px] rounded-full blur-[120px]"
          aria-hidden
        >
          <div
            className="w-full h-full rounded-full"
            style={{ background: "hsl(var(--investment-blue) / 0.2)" }}
          />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-14 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* Left column — headline */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ y: textY }}
              className="font-display font-black tracking-tight leading-[0.95] text-navy text-[44px] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              BUILDING
              <br />
              <span className="text-muted-foreground/40 font-black text-[32px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1]">
                REGIONAL AND GLOBAL
                <br />
                WINNERS EARLY
              </span>
            </motion.h1>
          </div>

          {/* Right column — description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ y: descY, opacity: bgOpacity }}
            className="lg:col-span-4 lg:pb-4"
          >
            <div className="border-l-[3px] border-emerald pl-5 sm:pl-6">
              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed font-medium max-w-[420px]">
                We support exceptional founders with conviction capital and deep
                expertise in scaling across Southeast Asia and global markets,
                building category leaders together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
