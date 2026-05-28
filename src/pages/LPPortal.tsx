import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Lock, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltedQuoteCard from "@/components/TiltedQuoteCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const UNLOCK_KEY = "qualgro_lp_unlocked";

/* ─────────────── Gate ─────────────── */
const Gate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [firm, setFirm] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("lp_access_requests").insert({
      email: email.trim().toLowerCase(),
      name: name.trim() || null,
      firm: firm.trim() || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Couldn't submit", description: error.message, variant: "destructive" });
      return;
    }
    sessionStorage.setItem(UNLOCK_KEY, "1");
    onUnlock();
  };

  return (
    <section
      className="relative min-h-[100vh] flex items-center overflow-hidden pt-28"
      style={{ backgroundColor: "hsl(217 91% 11%)" }}
    >
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 70% 25%, hsl(163 70% 45% / 0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 85%, hsl(212 80% 50% / 0.20) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-[1200px] mx-auto">
          {/* Left: pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p
              className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-5 inline-flex items-center gap-2"
              style={{ color: "hsl(163 70% 60%)" }}
            >
              <Lock size={13} /> Limited Partners
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95]">
              The numbers behind <span style={{ color: "hsl(163 70% 60%)" }}>a decade</span> of conviction.
            </h1>
            <p className="mt-7 text-white/70 text-lg leading-relaxed max-w-[520px]">
              Performance, exits, portfolio construction, and reporting — shared
              with prospective and current LPs. Request access to view the
              full deck of figures.
            </p>

            <ul className="mt-10 space-y-3 max-w-[460px]">
              {[
                "Realized & unrealized fund-level returns",
                "Notable exits and current mark-to-market",
                "Portfolio construction across vintages",
                "Quarterly LP reporting cadence & framework",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-white/80 text-[15px]"
                >
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "hsl(163 70% 60%)" }}
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: gate form */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 w-full max-w-[460px] mx-auto rounded-[22px] p-9 sm:p-10"
            style={{
              backgroundColor: "#FBF9F8",
              boxShadow:
                "0 30px 80px -20px rgba(0,0,0,0.55), 0 10px 30px -10px rgba(0,0,0,0.3)",
            }}
          >
            <p className="font-display font-bold text-xs uppercase tracking-[0.25em] text-emerald mb-3">
              Request Access
            </p>
            <h2 className="font-display text-2xl font-black text-primary leading-tight">
              Verify yourself as an LP.
            </h2>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              Share your details and we'll unlock the LP figures for this
              session.
            </p>

            <form onSubmit={submit} className="mt-7 space-y-4">
              <div>
                <label className="block text-[11px] font-display font-extrabold uppercase tracking-[0.18em] text-primary/70 mb-1.5">
                  Work email <span className="text-emerald">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@firm.com"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary placeholder:text-muted-foreground/60 focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-display font-extrabold uppercase tracking-[0.18em] text-primary/70 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-display font-extrabold uppercase tracking-[0.18em] text-primary/70 mb-1.5">
                    Firm
                  </label>
                  <input
                    type="text"
                    value={firm}
                    onChange={(e) => setFirm(e.target.value)}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald px-6 py-3.5 font-display text-sm font-semibold text-emerald-foreground transition-all hover:translate-y-[-1px] hover:bg-emerald/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting…" : "Unlock LP figures"}
                {!loading && <ArrowRight size={16} />}
              </button>
              <p className="flex items-start gap-2 text-[11px] text-muted-foreground leading-relaxed pt-1">
                <Shield size={12} className="flex-shrink-0 mt-0.5" />
                Your details are confidential and used only to verify LP-relevant access.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── Sections ─────────────── */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-emerald font-display font-bold text-xs uppercase tracking-[0.3em] mb-4">
    {children}
  </p>
);

const Performance = () => (
  <section className="py-24 sm:py-28 bg-background">
    <div className="container mx-auto px-6 max-w-[1320px]">
      <div className="max-w-[640px] mb-16">
        <Eyebrow>01 · Fund Performance</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl font-black text-primary leading-[1.02]">
          Returns built on conviction — not market timing.
        </h2>
        <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-[520px]">
          Realized and unrealized performance across our funds. Figures shown
          are net of fees and carry, as of the most recent quarter-end.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Gross IRR", value: "27%", note: "Across realized + unrealized" },
          { label: "Net MOIC", value: "2.6x", note: "Total value to paid-in" },
          { label: "DPI", value: "1.1x", note: "Distributions to paid-in" },
          { label: "TVPI", value: "2.8x", note: "Including unrealized value" },
        ].map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="stat-card bg-card rounded-2xl p-7 sm:p-8 border border-border/60"
          >
            <p className="font-display text-5xl sm:text-6xl font-black text-investment-blue leading-none">
              {s.value}
            </p>
            <p className="font-display font-extrabold text-primary text-sm mt-5 uppercase tracking-[0.14em]">
              {s.label}
            </p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {s.note}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-[11px] italic text-muted-foreground mt-8 max-w-2xl">
        Past performance is not indicative of future results. Figures are illustrative and subject to revision.
      </p>
    </div>
  </section>
);

const Exits = () => {
  const exits = [
    { company: "Wavecell", outcome: "Acquired by 8x8", multiple: "5.4x", year: "2019" },
    { company: "PatSnap", outcome: "Series E · Unicorn", multiple: "8.2x*", year: "2021" },
    { company: "ShopBack", outcome: "Series F", multiple: "6.1x*", year: "2022" },
    { company: "Funding Societies", outcome: "Series C+", multiple: "4.7x*", year: "2022" },
    { company: "Appier", outcome: "TSE IPO (4180)", multiple: "9.3x", year: "2021" },
  ];
  return (
    <section className="py-24 sm:py-28 bg-surface-alt border-y border-border/60">
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>02 · Notable Exits</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-black text-primary leading-[1.02]">
              Realized outcomes across geographies.
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-[460px]">
              From IPOs in Tokyo to strategic acquisitions by global tech leaders —
              a track record of meaningful liquidity events for our LPs.
            </p>
            <div className="mt-10">
              <TiltedQuoteCard
                text="Qualgro made warm introductions across their network at the moments that mattered."
                attribution="Olivier Gerhardt · Wavecell"
                color="rose"
                cornerLabel="02"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-alt/60 border-b border-border text-[11px] font-display font-extrabold uppercase tracking-[0.18em] text-primary/60">
                <div className="col-span-4">Company</div>
                <div className="col-span-5">Outcome</div>
                <div className="col-span-2">Multiple</div>
                <div className="col-span-1 text-right">Year</div>
              </div>
              {exits.map((e, i) => (
                <motion.div
                  key={e.company}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-border/60 last:border-b-0 items-center hover:bg-surface-alt/40 transition-colors"
                >
                  <div className="col-span-4 font-display font-extrabold text-primary">
                    {e.company}
                  </div>
                  <div className="col-span-5 text-sm text-muted-foreground">
                    {e.outcome}
                  </div>
                  <div className="col-span-2 font-display font-black text-investment-blue">
                    {e.multiple}
                  </div>
                  <div className="col-span-1 text-right text-xs text-muted-foreground tabular-nums">
                    {e.year}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-[11px] italic text-muted-foreground mt-3 px-1">
              * Mark-to-market based on most recent priced round.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Construction = () => {
  const sectors = [
    { name: "Data & AI", pct: 38 },
    { name: "Fintech", pct: 22 },
    { name: "Consumer / E-commerce", pct: 18 },
    { name: "Enterprise SaaS", pct: 14 },
    { name: "Healthtech / Other", pct: 8 },
  ];
  const geos = [
    { name: "Southeast Asia", pct: 62 },
    { name: "India", pct: 18 },
    { name: "Greater China & APAC", pct: 12 },
    { name: "Global (US / EU / AU)", pct: 8 },
  ];
  return (
    <section className="py-24 sm:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="max-w-[640px] mb-16">
          <Eyebrow>03 · Portfolio Construction</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary leading-[1.02]">
            Disciplined allocation, by design.
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-[520px]">
            A concentrated approach across sectors and geographies where we
            have a demonstrable edge. Pacing is deliberate — typically 8-12
            new investments per fund over a 3-4 year deployment window.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {[
            { title: "By Sector", data: sectors },
            { title: "By Geography", data: geos },
          ].map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-lg font-extrabold text-primary mb-6 pb-3 border-b border-border">
                {g.title}
              </h3>
              <div className="space-y-5">
                {g.data.map((row, i) => (
                  <motion.div
                    key={row.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-display font-bold text-primary text-sm">
                        {row.name}
                      </span>
                      <span className="font-display font-black text-investment-blue tabular-nums">
                        {row.pct}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-emerald rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Alignment = () => (
  <section
    className="py-28 lg:py-32 overflow-hidden relative"
    style={{ backgroundColor: "hsl(217 91% 11%)" }}
  >
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 55% 40% at 70% 20%, hsl(163 70% 45% / 0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, hsl(212 80% 50% / 0.18) 0%, transparent 70%)",
      }}
    />
    <div className="container mx-auto px-6 relative z-10 max-w-[1320px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <p
            className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: "hsl(163 70% 60%)" }}
          >
            04 · Team & Alignment
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]">
            Skin in the game.
          </h2>
          <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed max-w-[520px]">
            We believe alignment compounds outcomes. The partners are the
            largest individual contributors to each fund, and carry is
            distributed across the team that does the work.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "GP Commitment", value: "3-5%", sub: "Of every fund, from partners' own capital" },
            { label: "Carry Structure", value: "20%", sub: "European waterfall · 8% hurdle" },
            { label: "Investment Team", value: "11", sub: "Across Singapore, Jakarta, Bangalore" },
            { label: "Avg. Tenure", value: "7yrs", sub: "Senior team has invested together across cycles" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-7 border border-white/10"
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <p className="font-display text-5xl font-black text-white leading-none">
                {s.value}
              </p>
              <p
                className="font-display font-extrabold text-[11px] mt-5 uppercase tracking-[0.18em]"
                style={{ color: "hsl(163 70% 60%)" }}
              >
                {s.label}
              </p>
              <p className="text-white/60 text-xs mt-2 leading-relaxed">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const LPValueAdd = () => (
  <section
    className="py-28 lg:py-32 relative overflow-hidden"
    style={{ backgroundColor: "hsl(217 91% 11%)" }}
  >
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 55% 40% at 70% 20%, hsl(163 70% 45% / 0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, hsl(212 80% 50% / 0.18) 0%, transparent 70%)",
      }}
    />
    <div className="container mx-auto px-6 relative z-10 max-w-[1320px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1120px]"
      >
        <p
          className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-4"
          style={{ color: "hsl(163 70% 55%)" }}
        >
          What You Get
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95]">
          Qualgro&apos;s value to LPs.
        </h2>
        <p className="mt-6 text-white/65 text-base sm:text-lg leading-relaxed max-w-[560px]">
          Five things our LPs consistently point to when describing what makes the Qualgro partnership different.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {[
            {
              heading: "Returns & Business",
              items: [
                "Returns and DPI — ahead of most comparable VCs",
                "Socio-economic and ESG impact",
                "Co-investment opportunities for LPs, where relevant",
                "Advisory on Southeast Asia landscape, trends and dynamics",
                "Relationships and connections across the region",
              ],
            },
            {
              heading: "Processes & Operations",
              items: [
                "Close LP relationships — regular interactions beyond Annual Meetings",
                "Open-book policy — full transparency, any information, any time",
                "ILPA-aligned reporting, IFRS/SFRS, yearly external audit by a Big 4",
                "MAS-compliant operations with yearly internal audit by a reputable provider",
              ],
            },
          ].map((group) => (
            <div key={group.heading}>
              <h3
                className="font-display text-[11px] font-bold uppercase tracking-[0.25em] mb-5"
                style={{ color: "hsl(163 70% 55%)" }}
              >
                {group.heading}
              </h3>
              <ul className="space-y-3.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-white/80 text-[15px] leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "hsl(163 70% 55%)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Reporting = () => {
  const cadence = [
    { tag: "Monthly", title: "Portfolio pulse", desc: "Brief written update on material developments, new investments, and follow-ons." },
    { tag: "Quarterly", title: "Full LP report", desc: "Audited NAV, capital account statements, portfolio company highlights, fund-level KPIs." },
    { tag: "Annually", title: "LP meeting", desc: "In-person convening with portfolio founder fireside chats, market outlook, and Q&A." },
    { tag: "On Demand", title: "Partner access", desc: "Direct line to the GPs for ad-hoc questions, co-investment review, and intros." },
  ];
  return (
    <section className="py-24 sm:py-28 bg-surface-alt">
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="max-w-[640px] mb-16">
          <Eyebrow>05 · LP Reporting & Process</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary leading-[1.02]">
            Institutional reporting, partner-led access.
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-[520px]">
            Our LP communications follow a clear cadence — built for diligence
            teams and senior decision-makers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cadence.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="stat-card bg-card rounded-2xl p-8 border border-border/60 flex gap-5"
            >
              <div
                className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full font-display text-xs font-black"
                style={{ backgroundColor: "hsl(163 59% 30%)", color: "#fff" }}
              >
                <TrendingUp size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-display font-extrabold text-emerald text-[11px] uppercase tracking-[0.2em] mb-1.5">
                  {c.tag}
                </p>
                <h3 className="font-display text-xl font-extrabold text-primary leading-tight mb-1.5">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[420px]">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── Page ─────────────── */
const LPPortal = () => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(UNLOCK_KEY) === "1") setUnlocked(true);
    document.title = "For LPs · Qualgro";
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  if (!unlocked) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Gate onUnlock={() => setUnlocked(true)} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Unlocked Hero */}
      <section
        ref={heroRef}
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ backgroundColor: "hsl(217 91% 11%)" }}
      >
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 40% at 70% 25%, hsl(163 70% 45% / 0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 85%, hsl(212 80% 50% / 0.18) 0%, transparent 70%)",
          }}
        />
        <motion.div style={{ y: heroY }} className="container mx-auto px-6 relative z-10">
          <p
            className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-5"
            style={{ color: "hsl(163 70% 60%)" }}
          >
            For Limited Partners
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] max-w-3xl">
            A decade of compounding,<br />
            quantified.
          </h1>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-[560px]">
            Performance, exits, portfolio construction, alignment, and
            reporting — everything an LP needs to assess Qualgro.
          </p>
        </motion.div>
      </section>

      <Performance />
      <Exits />
      <Construction />
      <Alignment />
      <Reporting />
      <LPValueAdd />

      <Footer />
    </div>
  );
};

export default LPPortal;
