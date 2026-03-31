import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const companies = [
{
  name: "Shopback",
  sector: "Series B",
  color: "from-[#1a5276] to-[#2980b9]",
  description:
  "Asia-Pacific's leading shopping and rewards platform, helping millions of users save money through cashback and deals across 3,000+ merchants."
},
{
  name: "Funding Societies",
  sector: "Series A",
  color: "from-[#0e4d6e] to-[#1a8a9e]",
  description:
  "Southeast Asia's largest SME digital financing platform, providing business financing to small and medium enterprises across the region."
},
{
  name: "PatSnap",
  sector: "Series B",
  color: "from-[#1b3a5c] to-[#3a7bd5]",
  description:
  "A global AI-powered connected innovation intelligence platform used by R&D teams and IP professionals to discover, evaluate, and protect innovation."
},
{
  name: "Edmicro",
  sector: "Series A",
  color: "from-[#2c5f2d] to-[#4a883f]",
  description:
  "A parenting community and data-driven marketing platform enabling brands to engage millions of parents across Southeast Asia."
},
{
  name: "NoBroker",
  sector: "Series B",
  color: "from-[#1e3a5f] to-[#4a90d9]",
  description:
  "Southeast Asia's largest automotive marketplace, integrating the full car lifecycle from buying and selling to financing and insurance."
},
{
  name: "Brighte",
  sector: "Series A",
  color: "from-[#193d5a] to-[#2e86ab]",
  description:
  "Indonesia's leading vision AI company providing intelligent video analytics for smart city, security, and enterprise applications."
},
{
  name: "Accredify",
  sector: "Series A",
  color: "from-[#0d3b66] to-[#247ba0]",
  description:
  "Indonesia's B2B e-commerce marketplace connecting manufacturers and distributors with SME buyers across the archipelago."
},
{
  name: "Supermom",
  sector: "Series A",
  color: "from-[#1a3a5c] to-[#21638F]",
  description:
  "Next-generation wireless technology company developing advanced solutions for 5G and beyond, enabling smarter connectivity infrastructure."
}];


const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative z-30 -mt-32 pb-8 bg-[#081220]">

      <motion.div style={{ y }} className="relative">
        {/* Scrollable cards row */}
        <div className="relative">
          {/* Left translucent fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-20 bg-gradient-to-r from-[#0a1628] to-transparent pointer-events-none" />
          {/* Right translucent fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-20 bg-gradient-to-l from-[#0a1628] to-transparent pointer-events-none" />

          {/* Left arrow - centered vertically, translucent */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 transition-all duration-300"
            aria-label="Scroll left">
            
            <ChevronLeft size={18} />
          </button>

          {/* Right arrow - centered vertically, translucent */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 transition-all duration-300"
            aria-label="Scroll right">
            
            <ChevronRight size={18} />
          </button>

          <div
            ref={scrollContainerRef}
            className="overflow-x-hidden overflow-y-visible scrollbar-hide py-[10px] bg-[#09131f]"
            style={{ paddingLeft: "50vw", paddingRight: "50vw" }}>
            
            <div className="flex gap-[6px] pb-4" style={{ width: "max-content" }}>
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
                      layout: { duration: 0.4, ease: "easeInOut" }
                    }}
                    whileHover={!isExpanded ? { y: -10, transition: { duration: 0.3 } } : undefined}
                    onClick={() => handleCardClick(i)}
                    className={`
                      group relative flex-shrink-0 overflow-hidden cursor-pointer
                      bg-gradient-to-b ${company.color}
                      border border-white/10
                      transition-shadow duration-500 ease-out
                      hover:border-white/25 hover:shadow-[0_0_30px_rgba(33,99,143,0.3)]
                    `}
                    style={{
                      width: isExpanded ? "min(28rem, 85vw)" : "clamp(110px, 18vw, 160px)",
                      height: "clamp(260px, 42vh, 520px)"
                    }}>

                    {/* Glow overlay on hover */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/8 transition-all duration-500" />

                    {/* Light sweep effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/8 to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-4">
                      <div>
                        <div className="flex items-start justify-between">
                          <h3 className="font-display text-xs sm:text-lg font-bold text-white tracking-tight">
                            {company.name}
                          </h3>
                          {isExpanded &&
                          <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-7 h-7 bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedIndex(null);
                            }}>
                            
                              <X size={14} />
                            </motion.button>
                          }
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                          <span className="text-[10px] sm:text-xs font-semibold text-white/70 uppercase tracking-wider">
                            {company.sector}
                          </span>
                        </div>
                      </div>

                      {/* Expanded description */}
                      <AnimatePresence>
                        {isExpanded &&
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                          className="mt-4 flex-1 flex flex-col justify-center">
                          
                            <div className="w-10 h-[1px] bg-white/40 mb-4" />
                            <p className="text-sm leading-relaxed text-white/85">
                              {company.description}
                            </p>
                          </motion.div>
                        }
                      </AnimatePresence>

                      {/* Vertical line decoration */}
                      {!isExpanded &&
                      <div className="absolute left-4 top-[70px] bottom-[50px] w-[1px] bg-white/15 group-hover:bg-white/30 transition-colors duration-500" />
                      }

                      {/* Bottom area */}
                      <div className="mt-auto">
                        <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-white/60 transition-all duration-500" />
                        {!isExpanded &&
                        <p className="mt-2 text-[10px] sm:text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300 hidden sm:block">
                            Click to expand →
                          </p>
                        }
                      </div>
                    </div>
                  </motion.div>);

              })}
            </div>
          </div>
        </div>

      </motion.div>
    </section>);

};

export default PortfolioSection;