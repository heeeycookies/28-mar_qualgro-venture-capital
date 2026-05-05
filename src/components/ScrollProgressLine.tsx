import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgressLine = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // Subtle horizontal sway tied to scroll for an extra "alive" feel
  const sway = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 6, -4]);

  // A tighter, more frequent squiggle that snakes down the page.
  // Tall viewBox lets the wave repeat naturally over a long page.
  const path =
    "M 90 0 \
     C 40 80, 140 160, 90 240 \
     S 40 400, 90 480 \
     S 140 640, 90 720 \
     S 40 880, 90 960 \
     S 140 1120, 90 1200 \
     S 40 1360, 90 1440 \
     S 140 1600, 90 1680 \
     S 40 1840, 90 1920 \
     S 140 2080, 90 2160 \
     S 40 2320, 90 2400 \
     S 140 2560, 90 2640 \
     S 40 2800, 90 2880 \
     S 140 3040, 90 3120 \
     S 40 3280, 90 3360 \
     S 140 3520, 90 3600";

  return (
    <motion.div
      aria-hidden
      style={{ x: sway }}
      className="pointer-events-none fixed inset-y-0 left-0 z-[5] hidden h-screen w-[180px] md:block"
    >
      <svg
        viewBox="0 0 180 3600"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        {/* Always-visible faint guide so it's present from the very top */}
        <path
          d={path}
          stroke="#004971"
          strokeOpacity="0.22"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Animated progress overlay — draws itself as the user scrolls */}
        <motion.path
          d={path}
          stroke="#004971"
          strokeOpacity="0.6"
          strokeWidth="12"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </motion.div>
  );
};

export default ScrollProgressLine;
