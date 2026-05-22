import { motion } from "framer-motion";
import { quoteCardPalette, type QuoteCardColor } from "@/data/value-add";

interface Props {
  text: string;
  attribution: string; // e.g. "Henry · ShopBack"
  color: QuoteCardColor;
  index?: number;
  cornerLabel?: string; // small watermark like "01" or "›"
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Shared tilted quote card — the visual language established on
 * /why-qualgro. Reuse anywhere founders or LPs are quoted to keep the
 * site visually cohesive.
 */
const TiltedQuoteCard = ({
  text,
  attribution,
  color,
  index = 0,
  cornerLabel,
  size = "md",
  className = "",
}: Props) => {
  const palette = quoteCardPalette[color];
  const rotate = index % 2 === 0 ? -2.2 : 2;

  const pad =
    size === "sm" ? "p-6 sm:p-7" : size === "lg" ? "p-10 sm:p-12" : "p-8 sm:p-9";
  const maxW =
    size === "sm" ? "max-w-[340px]" : size === "lg" ? "max-w-[460px]" : "max-w-[420px]";
  const fontSize =
    size === "sm"
      ? "text-[15px] leading-[1.45]"
      : size === "lg"
      ? "text-[18px] sm:text-[19px] leading-[1.45]"
      : "text-[16px] sm:text-[17px] leading-[1.45]";

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: rotate * 0.4 }}
      className={`relative w-full ${maxW} rounded-[22px] ${pad} ${className}`}
      style={{
        backgroundColor: palette.bg,
        color: palette.text,
        boxShadow:
          "0 24px 60px -24px rgba(0,0,0,0.45), 0 8px 20px -10px rgba(0,0,0,0.25)",
      }}
    >
      <blockquote
        className={`font-display font-medium ${fontSize}`}
        style={{ color: palette.text }}
      >
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption
        className="mt-6 font-display text-[11px] font-extrabold tracking-[0.18em] uppercase"
        style={{ color: palette.meta }}
      >
        {attribution}
      </figcaption>
      {cornerLabel && (
        <span
          aria-hidden
          className="absolute bottom-3 right-5 font-display font-black leading-none opacity-50"
          style={{ fontSize: "26px", color: palette.text }}
        >
          {cornerLabel}
        </span>
      )}
    </motion.figure>
  );
};

export default TiltedQuoteCard;
