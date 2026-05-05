import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgressLine = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // Reverse for the dasharray trick (used in dashOffset alt). We use pathLength directly.

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-0 hidden h-screen w-[180px] md:block"
    >
      <svg
        viewBox="0 0 180 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        {/* Faint guide */}
        <path
          d="M 90 0 C 20 200, 160 350, 90 500 S 20 800, 90 1000"
          stroke="#004971"
          strokeOpacity="0.08"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Animated curvy progress */}
        <motion.path
          d="M 90 0 C 20 200, 160 350, 90 500 S 20 800, 90 1000"
          stroke="#004971"
          strokeOpacity="0.55"
          strokeWidth="6"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgressLine;
