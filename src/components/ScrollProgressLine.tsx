import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgressLine = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-6 top-0 z-40 hidden h-screen w-[2px] md:block"
    >
      <div className="absolute inset-0 bg-foreground/10" />
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute inset-0 bg-[#004971]"
      />
      <motion.div
        style={{ top: dotTop }}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#004971] shadow-[0_0_0_4px_hsl(var(--background))]"
      />
    </div>
  );
};

export default ScrollProgressLine;
