import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressLine = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // A long, flowing curve that spans the full viewport height continuously.
  // Using a tall viewBox so the curve has natural undulations down the page.
  const path =
    "M 90 0 \
     C 30 120, 150 240, 90 360 \
     S 30 600, 90 720 \
     S 150 960, 90 1080 \
     S 30 1320, 90 1440 \
     S 150 1680, 90 1800 \
     S 30 2040, 90 2160 \
     S 150 2400, 90 2520 \
     S 30 2760, 90 2880 \
     S 150 3120, 90 3240 \
     S 30 3480, 90 3600";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-0 hidden h-screen w-[180px] md:block"
      style={{ mixBlendMode: "multiply" }}
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
          strokeOpacity="0.18"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Animated progress overlay */}
        <motion.path
          d={path}
          stroke="#004971"
          strokeOpacity="0.45"
          strokeWidth="10"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgressLine;
