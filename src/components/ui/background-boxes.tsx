"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  return (
    <div
      aria-hidden
      style={{
        transform: "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) translateZ(0)",
        backgroundImage: [
          "linear-gradient(to right, hsl(var(--investment-blue) / 0.10) 1px, transparent 1px)",
          "linear-gradient(to bottom, hsl(var(--investment-blue) / 0.10) 1px, transparent 1px)",
          "radial-gradient(circle at 18% 22%, hsl(var(--emerald) / 0.12) 0, transparent 18%)",
          "radial-gradient(circle at 78% 38%, hsl(var(--warm-gold) / 0.18) 0, transparent 20%)",
        ].join(", "),
        backgroundSize: "96px 56px, 96px 56px, 620px 620px, 520px 520px",
        backgroundPosition: "0 0, 0 0, 0 0, 100% 0",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.35) 72%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.35) 72%, transparent)",
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}
    />
  );
};

export const Boxes = React.memo(BoxesCore);
