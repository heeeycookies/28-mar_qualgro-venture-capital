import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Heart, Globe } from "lucide-react";
import { commitments } from "@/data/commitments";

import sdgLogo from "@/assets/impact/sdg-icons/sdg-logo.png";
import sdg1 from "@/assets/impact/sdg-icons/sdg-1.png";
import sdg4 from "@/assets/impact/sdg-icons/sdg-4.png";
import sdg5 from "@/assets/impact/sdg-icons/sdg-5.png";
import sdg7 from "@/assets/impact/sdg-icons/sdg-7.png";
import sdg8 from "@/assets/impact/sdg-icons/sdg-8.png";
import sdg9 from "@/assets/impact/sdg-icons/sdg-9.png";
import sdg10 from "@/assets/impact/sdg-icons/sdg-10.png";
import sdg11 from "@/assets/impact/sdg-icons/sdg-11.png";
import sdg12 from "@/assets/impact/sdg-icons/sdg-12.png";
import sdg13 from "@/assets/impact/sdg-icons/sdg-13.png";

const sdgImages: Record<number, string> = {
  1: sdg1, 4: sdg4, 5: sdg5, 7: sdg7, 8: sdg8, 9: sdg9, 10: sdg10,
  11: sdg11, 12: sdg12, 13: sdg13,
};

const tabIcons = [
  <Users size={20} />,
  <Heart size={20} />,
  <Globe size={20} />,
];

const CommitmentsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = commitments[activeTab];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6" style={{ maxWidth: "1120px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p
            className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: "hsl(140 45% 35%)" }}
          >
            Our Commitments
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
            What We Stand For
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-12">
          {commitments.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(i)}
              className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl text-left transition-all duration-300 border ${
                i === activeTab
                  ? "border-transparent shadow-lg"
                  : "border-border bg-card hover:shadow-md"
              }`}
              style={
                i === activeTab
                  ? { background: c.color, color: "white" }
                  : {}
              }
            >
              <span
                className={`flex-shrink-0 ${
                  i === activeTab ? "text-white" : "text-muted-foreground"
                }`}
              >
                {tabIcons[i]}
              </span>
              <span
                className={`font-display text-sm font-bold ${
                  i === activeTab ? "text-white" : "text-primary"
                }`}
              >
                {c.title}
              </span>
              {/* Active indicator dot */}
              {i === activeTab && (
                <motion.div
                  layoutId="commitment-dot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ background: c.color }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {/* Title banner */}
            <div
              className="rounded-xl px-8 py-6 mb-8"
              style={{ background: active.color }}
            >
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center">
                {active.title}
              </h3>
              {active.subtitle && (
                <p className="text-white/80 text-center mt-2 font-display font-semibold text-sm">
                  {active.subtitle}
                </p>
              )}
            </div>

            {/* Description */}
            {active.description && (
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-3xl mx-auto text-center">
                {active.description}
              </p>
            )}

            {/* Diversity tab */}
            {active.id === "diversity" && (
              <DiversityContent active={active} />
            )}

            {/* Communities tab */}
            {active.id === "communities" && (
              <CommunitiesContent active={active} />
            )}

            {/* Planet tab */}
            {active.id === "planet" && (
              <PlanetContent active={active} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ── Sub-components ── */

function DiversityContent({ active }: { active: typeof commitments[0] }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {active.stats.map((stat, i) => (
          <div key={i} className="text-center p-6 rounded-xl border border-border bg-card">
            <p className="font-display text-4xl md:text-5xl font-extrabold mb-2" style={{ color: active.color }}>
              {stat.value}
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-display font-semibold leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {active.bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: active.color }}
            >
              <span className="text-white text-xs font-bold">Q</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-border">
        <p className="text-center text-muted-foreground text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4">
          Illustrated by some of our portfolio companies
        </p>
        <div className="flex justify-center gap-8">
          {active.companies.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <span className="font-display text-xs font-bold text-primary">{c.name.charAt(0)}</span>
              </div>
              <span className="text-xs font-display font-semibold text-primary">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CommunitiesContent({ active }: { active: typeof commitments[0] }) {
  const sdgs = [
    { num: 8, label: "Decent Work & Economic Growth" },
    { num: 9, label: "Industry, Innovation & Infrastructure" },
    { num: 11, label: "Sustainable Cities & Communities" },
    { num: 12, label: "Responsible Consumption & Production" },
    { num: 1, label: "No Poverty" },
    { num: 4, label: "Quality Education" },
    { num: 5, label: "Gender Equality" },
    { num: 7, label: "Affordable & Clean Energy" },
    { num: 10, label: "Reduced Inequalities" },
  ];

  return (
    <div className="space-y-8">
      <div
        className="rounded-xl p-8 flex flex-col md:flex-row items-center justify-center gap-8"
        style={{ background: "hsl(200 30% 95%)" }}
      >
        <p className="font-display text-3xl md:text-4xl font-extrabold" style={{ color: active.color }}>
          SMEs +
        </p>
        <img
          src={sdgLogo}
          alt="UN Sustainable Development Goals"
          className="h-20 md:h-24 object-contain"
        />
        <p className="font-display text-3xl md:text-4xl font-extrabold" style={{ color: active.color }}>
          People +
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4">
        {sdgs.map((sdg) => (
          <div key={sdg.num} className="flex flex-col items-center gap-2">
            <img
              src={sdgImages[sdg.num]}
              alt={`SDG ${sdg.num}: ${sdg.label}`}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <p className="text-[9px] text-muted-foreground text-center leading-tight font-display font-semibold">
              {sdg.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanetContent({ active }: { active: typeof commitments[0] }) {
  const sdgs = [
    { num: 7, label: "Affordable & Clean Energy" },
    { num: 9, label: "Industry, Innovation & Infrastructure" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-6">
        {sdgs.map((sdg) => (
          <div key={sdg.num} className="flex flex-col items-center gap-2">
            <img
              src={sdgImages[sdg.num]}
              alt={`SDG ${sdg.num}: ${sdg.label}`}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <p className="text-[10px] text-muted-foreground text-center leading-tight font-display font-semibold max-w-[80px]">
              {sdg.label}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl px-6 py-3 text-center" style={{ background: active.color }}>
        <p className="text-white font-display text-xs uppercase tracking-[0.25em] font-bold">
          Examples of portfolio companies impacting climate change
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {active.companies.map((company) => (
          <div key={company.name} className="border border-border rounded-xl p-6 bg-card">
            <h4 className="font-display text-xl font-extrabold text-primary mb-1">{company.name}</h4>
            <p className="text-muted-foreground text-xs mb-5 leading-relaxed">{company.description}</p>
            <div className="space-y-3">
              {company.stats.map((stat, si) => (
                <div key={si} className="flex items-baseline gap-2">
                  <span className="font-display text-lg font-extrabold" style={{ color: active.color }}>
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommitmentsSection;
