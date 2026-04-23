import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import shopbackImg from "@/assets/portfolio/shopback.jpg";
import patsnapImg from "@/assets/portfolio/patsnap.jpg";
import fundingSocietiesImg from "@/assets/portfolio/funding-societies.jpg";
import appierImg from "@/assets/portfolio/appier.avif";
import sirionImg from "@/assets/portfolio/sirion.jpg";
import wavecellImg from "@/assets/portfolio/wavecell.jpg";

const companies = [
  {
    name: "Shopback",
    description:
      "Largest commerce and rewards platform across Southeast Asia, serving more than 10 countries.",
    latestStage: "Series F",
    investedAt: "Series B",
    image: shopbackImg,
    brand: "#E63946", // red
    objectPosition: "30% 30%",
  },
  {
    name: "Patsnap",
    description:
      "AI-enabled IP intelligence platform trusted by 12,000+ enterprises globally.",
    latestStage: "Series E",
    investedAt: "Series C",
    image: patsnapImg,
    brand: "#3B5BDB", // blue
    objectPosition: "20% 25%",
  },
  {
    name: "Funding Societies",
    description:
      "Largest SME digital financing platform across Southeast Asia.",
    latestStage: "Series E",
    investedAt: "Series B",
    image: fundingSocietiesImg,
    brand: "#5B2A86", // purple
    objectPosition: "center 30%",
  },
  {
    name: "Appier",
    description:
      "AI-powered marketing intelligence platform listed on the Tokyo Stock Exchange.",
    latestStage: "IPO",
    investedAt: "Series B",
    image: appierImg,
    brand: "#5A4FCF", // indigo
    objectPosition: "44% 30%",
  },
  {
    name: "Sirion",
    description:
      "Contract intelligence platform trusted by 200+ global enterprises.",
    latestStage: "Exited at USD 1 Bil Valuation",
    investedAt: "Series B",
    image: sirionImg,
    brand: "#13A370", // emerald
    objectPosition: "center 35%",
  },
  {
    name: "Wavecell",
    description:
      "Singapore CPaaS platform serving enterprises across 175+ countries.",
    latestStage: "Exited at USD 125 Mil",
    investedAt: "Series A",
    image: wavecellImg,
    brand: "#0EA5E9", // cyan blue
    objectPosition: "center 40%",
  },
];

const PortfolioSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.7]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={sectionRef}
      id="portfolio"
      className="relative z-30 pt-2 pb-12 bg-background"
      style={{ scale: sectionScale, opacity: sectionOpacity }}
    >
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-card border border-border backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 rounded-full shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-card border border-border backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 rounded-full shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-visible scrollbar-hide py-4 bg-background"
          style={{ paddingLeft: "10vw", paddingRight: "10vw" }}
        >
          <div className="flex gap-3 sm:gap-4 pb-4" style={{ width: "max-content" }}>
            {companies.map((company, i) => {
              const isExpanded = expandedIndex === i;

              return (
                <motion.div
                  key={company.name}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    layout: { duration: 0.4, ease: "easeInOut" },
                  }}
                  whileHover={!isExpanded ? { y: -8, transition: { duration: 0.3 } } : undefined}
                  onClick={() => handleCardClick(i)}
                  className="group relative flex-shrink-0 overflow-hidden cursor-pointer rounded-2xl bg-neutral-900 border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-out"
                  style={{
                    width: isExpanded ? "min(32rem, 88vw)" : "clamp(180px, 22vw, 240px)",
                    height: "clamp(360px, 56vh, 580px)",
                  }}
                >
                  {/* Background image */}
                  <img
                    src={company.image}
                    alt={company.name}
                    loading="lazy"
                    style={{ objectPosition: company.objectPosition }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Brand color highlight (top) */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40"
                    style={{
                      background: `linear-gradient(180deg, ${company.brand} 0%, transparent 55%)`,
                    }}
                  />
                  {/* Readability gradient (bottom — stronger so text stays legible) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)`,
                    }}
                  />
                  {/* Brand accent bar at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 z-10"
                    style={{ backgroundColor: company.brand }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                  <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6">
                    {/* Top — name + close */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight leading-[1.05]">
                          {company.name}
                        </h3>
                        {isExpanded && (
                          <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-8 h-8 bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors rounded-full flex-shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedIndex(null);
                            }}
                            aria-label="Close"
                          >
                            <X size={14} />
                          </motion.button>
                        )}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-semibold text-white/75 uppercase tracking-[0.15em]">
                          {company.latestStage.includes("Exited") || company.latestStage === "IPO" ? "Exited" : "Portfolio"}
                        </span>
                      </div>
                    </div>

                    {/* Middle — description on expand */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                          className="my-4 flex-1 flex flex-col justify-center"
                        >
                          <div className="w-10 h-[2px] bg-white/40 mb-4" />
                          <p className="text-sm sm:text-base leading-relaxed text-white/90 font-medium max-w-[420px]">
                            {company.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom — stage badges */}
                    <div className="space-y-2">
                      <div className="w-8 h-[2px] bg-white/30 group-hover:w-14 group-hover:bg-white/70 transition-all duration-500" />
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[9px] sm:text-[10px] font-semibold text-white/55 uppercase tracking-[0.12em] min-w-[58px]">
                            Latest
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                            {company.latestStage}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[9px] sm:text-[10px] font-semibold text-white/55 uppercase tracking-[0.12em] min-w-[58px]">
                            Invested
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                            {company.investedAt}
                          </span>
                        </div>
                      </div>
                      {!isExpanded && (
                        <p className="pt-2 text-[10px] sm:text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300 hidden sm:block">
                          Click to expand →
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
