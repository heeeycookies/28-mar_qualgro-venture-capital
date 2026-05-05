import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgressLine = () => {
  const { scrollYProgress } = useScroll();

  // pathLength animates from 0 → 1 as the user scrolls the page
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Wide sweeping squiggle that weaves left↔right across the full viewport.
  // viewBox is 1000 wide × 6000 tall; preserveAspectRatio="none" stretches it
  // to cover the entire page height and width as a background decoration.
  const path =
    "M 500 0 \
     C 100 300, 900 600, 500 900 \
     S 100 1500, 500 1800 \
     S 900 2400, 500 2700 \
     S 100 3300, 500 3600 \
     S 900 4200, 500 4500 \
     S 100 5100, 500 5400 \
     S 900 6000, 500 6000";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
    >
      <svg
        viewBox="0 0 1000 6000"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        {/* Faint always-visible guide so the curve reads as a background element */}
        <path
          d={path}
          stroke="#006D4E"
          strokeOpacity="0.12"
          strokeWidth="18"
          strokeLinecap="round"
        />
        {/* Animated squiggle that draws itself as the user scrolls */}
        <motion.path
          d={path}
          stroke="#006D4E"
          strokeOpacity="0.35"
          strokeWidth="18"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgressLine;
