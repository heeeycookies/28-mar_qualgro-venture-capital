import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressLine = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-6 top-0 z-40 hidden h-screen w-[2px] md:block"
    >
      {/* Track */}
      <div className="absolute inset-0 bg-foreground/10" />
      {/* Progress fill */}
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute inset-0 bg-[#004971]"
      />
      {/* Dot follower */}
      <motion.div
        style={{ top: useSpring(useScrollY(), { stiffness: 100, damping: 30 }) }}
        className="absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#004971] shadow-[0_0_0_4px_hsl(var(--background))]"
      />
    </div>
  );
};

// helper hook to convert progress to top %
import { useTransform } from "framer-motion";
function useScrollY() {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
}

export default ScrollProgressLine;
