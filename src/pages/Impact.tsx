import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, ShieldCheck, TrendingUp, Compass, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { impactHero, qualgroSupport, prioritySDGs } from "@/data/impact";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  compass: Compass,
};

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(160 30% 95%) 0%, hsl(140 25% 90%) 25%, hsl(160 35% 85%) 50%, hsl(180 20% 92%) 75%, hsl(200 25% 95%) 100%)",
        }}
      >
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, hsl(140 40% 80%) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, hsl(160 45% 75%) 0%, transparent 70%)" }} />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-display font-semibold text-xs uppercase tracking-[0.3em] mb-5"
              style={{ color: "hsl(140 45% 35%)" }}
            >
              {impactHero.eyebrow}
            </motion.p>
            <h1
              className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1]"
              style={{ color: "hsl(217 91% 11%)" }}
            >
              {impactHero.titleLine1}
              <br />
              <span className="text-gradient-emerald">{impactHero.titleLine2}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: "hsl(217 30% 35%)" }}>
              {impactHero.description}
            </p>
          </motion.div>

          {/* Hero metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20">
            {impactHero.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group"
              >
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "hsl(217 20% 50%)" }}>
                  {stat.label}
                </span>
                <p className="font-display text-3xl md:text-4xl font-extrabold mt-1" style={{ color: "hsl(217 91% 11%)" }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm" style={{ color: "hsl(217 20% 55%)" }}>{stat.sublabel}</p>
                <div className="mt-3 h-px w-10 bg-emerald/40 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority SDGs */}
      <section className="py-28 bg-background">
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
              Aligned with the{" "}
              <span className="text-gradient-emerald">UN Sustainable Development Goals</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prioritySDGs.map((sdg, i) => (
              <motion.div
                key={sdg.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group border-border hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  <div
                    className="h-1 w-full transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: sdg.color }}
                  />
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 text-white font-display font-extrabold text-lg"
                        style={{ backgroundColor: sdg.color }}
                      >
                        {sdg.number}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-primary leading-snug">
                          {sdg.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          {sdg.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {sdg.stats.map((stat) => (
                        <Badge
                          key={stat.label}
                          variant="secondary"
                          className="px-3 py-1.5 text-xs font-display gap-1.5 rounded-lg"
                        >
                          <span className="font-extrabold text-primary">{stat.value}</span>
                          <span className="text-muted-foreground font-normal">{stat.label}</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support Our Founders */}
      <section className="py-28 bg-surface-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
              {qualgroSupport.sectionTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {qualgroSupport.sectionSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualgroSupport.pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon] || Users;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative rounded-2xl border border-border p-10 bg-card hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald to-investment-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <Icon className="text-emerald mb-5" size={28} />
                  <h3 className="font-display text-xl font-bold text-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-background overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Building the future is a collaborative effort.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Download our full ESG & Impact Report 2024 to learn more about our methodology and performance metrics.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald text-emerald-foreground font-display font-semibold text-sm hover:bg-emerald/90 transition-all duration-300"
            >
              Download Report
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
