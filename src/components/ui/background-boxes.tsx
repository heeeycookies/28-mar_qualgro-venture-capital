"use client";
import React, { HTMLAttributes, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type BoxesProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export const BoxesCore = ({ className, ...rest }: BoxesProps) => {
  const rowCount = 24;
  const colCount = 18;

  const rows = useMemo(() => Array.from({ length: rowCount }), []);
  const cols = useMemo(() => Array.from({ length: colCount }), []);
  const colors = useMemo(
    () => [
      "hsl(var(--investment-blue) / 0.22)",
      "hsl(var(--navy-light) / 0.22)",
      "hsl(var(--emerald) / 0.2)",
      "hsl(var(--hero-highlight-green) / 0.24)",
      "hsl(var(--foreground) / 0.16)",
    ],
    []
  );

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      {...rest}
    >
      <div
        className="absolute left-1/2 top-1/2 flex min-h-[140%] min-w-[140%] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform:
            "translate(-50%, -50%) skewX(-22deg) skewY(8deg) scale(1.05) translateZ(0)",
        }}
      >
        {rows.map((_, i) => (
          <div
            key={`row-${i}`}
            className="relative flex border-l"
            style={{ borderColor: "hsl(var(--border) / 0.32)" }}
          >
            {cols.map((_, j) => {
              const color = colors[(i + j) % colors.length];

              return (
                <motion.div
                  key={`cell-${i}-${j}`}
                  whileHover={{
                    backgroundColor: color,
                    boxShadow: `0 0 24px ${color}`,
                    transition: { duration: 0.12, ease: "easeOut" },
                  }}
                  className="relative h-14 w-14 shrink-0 border-r border-t bg-transparent"
                  style={{ borderColor: "hsl(var(--border) / 0.32)" }}
                >
                  {j % 2 === 0 && i % 2 === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.25"
                      stroke="currentColor"
                      className="pointer-events-none absolute -left-[18px] -top-[12px] h-5 w-8 stroke-[1.25px]"
                      style={{ color: "hsl(var(--border) / 0.55)" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
