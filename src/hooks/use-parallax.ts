import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface UseParallaxOptions {
  offset?: [string, string];
  speed?: number;
  direction?: "up" | "down";
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { offset = ["start end", "end start"], speed = 0.15, direction = "up" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const range = direction === "up" ? [speed * 100, -speed * 100] : [-speed * 100, speed * 100];
  const y = useTransform(scrollYProgress, [0, 1], range);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return { ref, y, opacity, scrollYProgress };
}

export function useParallaxSimple(speed: number = 50) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return { ref, y };
}
