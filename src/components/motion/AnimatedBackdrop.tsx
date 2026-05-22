import { motion } from "framer-motion";

interface Props {
  variant?: "emerald" | "navy" | "warm" | "cool";
  className?: string;
  intensity?: "subtle" | "medium";
}

/**
 * Slow drifting gradient orbs that sit behind sections.
 * Pointer-events disabled — purely decorative motion.
 */
const AnimatedBackdrop = ({ variant = "emerald", className = "", intensity = "subtle" }: Props) => {
  const palettes: Record<string, [string, string]> = {
    emerald: ["hsl(163 70% 45%)", "hsl(42 78% 68%)"],
    navy: ["hsl(202 73% 21%)", "hsl(42 78% 68%)"],
    warm: ["hsl(42 85% 72%)", "hsl(28 70% 75%)"],
    cool: ["hsl(42 78% 68%)", "hsl(163 50% 60%)"],
  };
  const [c1, c2] = palettes[variant];
  const op = intensity === "subtle" ? 0.10 : 0.18;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 720,
          height: 720,
          top: "-10%",
          left: "-10%",
          background: c1,
          opacity: op,
          filter: "blur(110px)",
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 560,
          height: 560,
          bottom: "-10%",
          right: "-5%",
          background: c2,
          opacity: op * 0.85,
          filter: "blur(120px)",
        }}
        animate={{ x: [0, -60, 30, 0], y: [0, -50, 40, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackdrop;
