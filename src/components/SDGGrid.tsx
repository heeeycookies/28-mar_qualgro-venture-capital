import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { sdgData } from "@/data/sdg-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SDGGrid = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section className="py-28 sm:py-[120px] bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: "hsl(140 45% 35%)" }}
          >
            Impact Framework
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            Our Impact — Aligned with the
            <br />
            <span className="text-gradient-emerald">
              UN Sustainable Development Goals
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sdgData.map((sdg, i) => {
            const isOpen = expandedId === sdg.id;

            return (
              <motion.div
                key={sdg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div
                    className={`h-1 w-full transition-transform duration-500 origin-left ${isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    style={{ backgroundColor: sdg.color }}
                  />
                  <CardContent className="p-6 sm:p-8">
                    {/* Header — clickable */}
                    <button
                      onClick={() => toggle(sdg.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 text-white font-display font-extrabold text-lg"
                          style={{ backgroundColor: sdg.color }}
                        >
                          {sdg.id}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-display text-lg font-bold text-primary leading-snug">
                              {sdg.title}
                            </h3>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="shrink-0"
                            >
                              <ChevronDown size={18} className="text-muted-foreground" />
                            </motion.div>
                          </div>
                          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                            {sdg.description}
                          </p>
                        </div>
                      </div>

                      {/* Stat badges */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {sdg.stats.map((stat) => (
                          <Badge
                            key={stat.label}
                            variant="secondary"
                            className="px-3 py-1.5 text-xs font-display gap-1.5 rounded-lg pointer-events-none"
                          >
                            <span className="font-extrabold text-primary">
                              {stat.value}
                            </span>
                            <span className="text-muted-foreground font-normal">
                              {stat.label}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </button>

                    {/* Expandable portfolio examples */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-border space-y-5">
                            {sdg.portfolioExamples.map((example) => (
                              <div key={example.company}>
                                <h4 className="font-display text-sm font-bold text-primary">
                                  {example.company}
                                </h4>
                                <p
                                  className="text-xs font-medium mt-0.5 mb-2"
                                  style={{ color: sdg.color }}
                                >
                                  {example.tagline}
                                </p>
                                <ul className="space-y-1.5">
                                  {example.highlights.map((h, idx) => (
                                    <li
                                      key={idx}
                                      className="text-muted-foreground text-xs leading-relaxed flex gap-2"
                                    >
                                      <span
                                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                        style={{ backgroundColor: sdg.color }}
                                      />
                                      {h}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SDGGrid;
