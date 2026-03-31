import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SDGGrid from "@/components/SDGGrid";
import { motion } from "framer-motion";
import { Leaf, Recycle, Users, BookOpen, Heart, ArrowRight, TrendingUp, Zap, GraduationCap } from "lucide-react";

const heroMetrics = [
  { icon: Users, value: "10K+", label: "Jobs Created", sub: "across Southeast Asia" },
  { icon: TrendingUp, value: "50K+", label: "SMEs Enabled", sub: "with digital financing" },
  { icon: Zap, value: "50K+", label: "Households", sub: "accessing sustainable energy" },
  { icon: GraduationCap, value: "10K+", label: "Students", sub: "accessing further education" },
];

const keyMetrics = [
  { value: "100%", label: "Portfolio companies screened through our proprietary ESG framework." },
  { value: "42%", label: "Diversity in leadership across our Series A+ investments." },
  { value: "Zero", label: "Net carbon footprint across operations." },
];

const pillars = [
  {
    icon: Leaf,
    title: "Climate Resilience",
    desc: "Supporting technologies that decarbonize the supply chain and optimize resource efficiency in Southeast Asia's rapidly growing markets.",
    iconColor: "text-emerald",
  },
  {
    icon: Recycle,
    title: "Circular Economy Tech",
    desc: "Empowering the next generation of founders building sustainable infrastructure and reducing waste across the value chain.",
    iconColor: "text-investment-blue",
  },
  {
    icon: Users,
    title: "Equitable Growth",
    desc: "Founder Diversity Program and talent upskilling initiatives to foster innovation from underrepresented backgrounds.",
    iconColor: "text-emerald",
  },
  {
    icon: BookOpen,
    title: "Ethical Foundations",
    desc: "Setting the gold standard for transparency, data privacy, and anti-corruption compliance across our entire ecosystem.",
    iconColor: "text-investment-blue",
  },
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — light gradient inspired by Integra Partners */}
      <section className="relative pt-32 pb-28 overflow-hidden" style={{
        background: "linear-gradient(135deg, hsl(160 30% 95%) 0%, hsl(140 25% 90%) 25%, hsl(160 35% 85%) 50%, hsl(180 20% 92%) 75%, hsl(200 25% 95%) 100%)"
      }}>
        {/* Soft organic shapes */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, hsl(140 40% 80%) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, hsl(160 45% 75%) 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] left-[50%] w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(180 30% 85%) 0%, transparent 60%)" }} />

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
              Environmental · Social · Governance
            </motion.p>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1]" style={{ color: "hsl(217 91% 11%)" }}>
              Investing for
              <br />
              <span className="text-gradient-emerald">
                Generational Impact.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: "hsl(217 30% 35%)" }}>
              Qualgro believes that sustainable value creation is inseparable from ethical stewardship. Our commitment to ESG is the foundation of our institutional approach to venture capital in Southeast Asia.
            </p>
          </motion.div>

          {/* Hero metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20">
            {heroMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <metric.icon size={16} style={{ color: "hsl(140 45% 35%)" }} />
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "hsl(217 20% 50%)" }}>
                    {metric.label}
                  </span>
                </div>
                <p className="font-display text-3xl md:text-4xl font-extrabold" style={{ color: "hsl(217 91% 11%)" }}>
                  {metric.value}
                </p>
                <p className="mt-1 text-sm" style={{ color: "hsl(217 20% 55%)" }}>{metric.sub}</p>
                <div className="mt-3 h-px w-10 bg-emerald/40 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group bg-card rounded-2xl border border-border p-10 text-center hover:border-emerald/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="relative font-display text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-primary to-investment-blue bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="relative mt-4 text-muted-foreground text-sm leading-relaxed">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Grid */}
      <SDGGrid />

      {/* Impact Pillars */}
      <section className="py-28 bg-surface-alt">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-primary text-center mb-20"
          >
            Our Impact Pillars
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border p-10 bg-card hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald to-investment-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <pillar.icon className={`${pillar.iconColor} mb-5`} size={28} />
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Qualgro in the Community
            </h2>
            <p className="text-muted-foreground mb-8">
              Going beyond the board seat to nurture the regional startup ecosystem.
            </p>
            <div className="group bg-card rounded-2xl border border-border p-10 hover:border-emerald/30 hover:shadow-lg transition-all">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-emerald/10">
                  <Heart className="text-emerald" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">
                    Qualgro Fellowship
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Nurturing underrepresented talent from within SEA to present their fit research ideas in a safe and supportive format to venture investors and founders.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-surface-alt overflow-hidden">
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
