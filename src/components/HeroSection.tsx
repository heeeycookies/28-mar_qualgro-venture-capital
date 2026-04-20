import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.3, 0]);

  return (
    <section ref={ref} className="relative pt-20 sm:pt-28 pb-4 sm:pb-8 bg-background overflow-hidden">
      {/* Parallax background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: orbY1, opacity: orbOpacity, scale: bgScale }}
          className="absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full blur-[140px]"
          aria-hidden
        >
          <div className="w-full h-full rounded-full" style={{ background: "hsl(163 59% 30% / 0.3)" }} />
        </motion.div>
        <motion.div
          style={{ y: orbY2, opacity: orbOpacity, scale: bgScale }}
          className="absolute top-40 left-[5%] w-[400px] h-[400px] rounded-full blur-[120px]"
          aria-hidden
        >
          <div className="w-full h-full rounded-full" style={{ background: "hsl(204 63% 50% / 0.2)" }} />
        </motion.div>
      </div>

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
              ​
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ y: textY }}
              className="text-8xl font-extrabold"
            >
              BUILDING
              <br />
              <span className="text-muted-foreground/40 font-extrabold text-6xl">REGIONAL AND GLOBAL WINNERS EARLY​</span>
            </motion.h1>
          </div>

          {/* Right column — description with left border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ y: descY, opacity: bgOpacity }}
            className="lg:pt-20"
          >
            <div className="border-l-[3px] border-emerald pl-5 sm:pl-7 mx-0 sm:mx-[25px] sm:px-[90px]">
              <p className="text-foreground/60 text-[13px] sm:text-lg leading-relaxed font-medium max-w-[520px]">
                We support exceptional founders with{"\n"}conviction capital and deep expertise in{"\n"}scaling across Southeast Asia and global{"\n"}markets, building category leaders together.​
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
