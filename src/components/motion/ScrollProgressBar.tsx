import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin top-of-page scroll progress bar — non-intrusive, always-on
 * navigator showing reading position site-wide.
 */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-emerald z-[60] pointer-events-none"
      aria-hidden
    />
  );
};

export default ScrollProgressBar;
