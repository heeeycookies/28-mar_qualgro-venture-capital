import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X, Search } from "lucide-react";

type BusinessModel = "B2B" | "B2B2C" | "B2C";
type Status = "Active" | "Exited";
type Fund = "Fund I" | "Fund II";
type Sector =
  | "Consumer & Retail"
  | "FinTech"
  | "Education"
  | "SME / Enterprise Tools"
  | "Marketing Tools"
  | "Service Platform"
  | "Robotics / Hardware";

interface Company {
  name: string;
  fund: Fund;
  sector: Sector;
  model: BusinessModel;
  status: Status;
  description: string;
  logoUrl?: string;
  website?: string;
}

const companies: Company[] = [
  { name: "90 Seconds", fund: "Fund I", sector: "Marketing Tools", model: "B2B", status: "Active", description: "The world's leading cloud video production platform, enabling brands to create professional content globally.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/90-Seconds-p8mvjzwkhmzs92jgwkblgafks3d3mlrpiikugcldp0.png", website: "https://90seconds.com" },
  { name: "Accredify", fund: "Fund II", sector: "Education", model: "B2B", status: "Active", description: "Digital credentials platform enabling institutions to issue verifiable, tamper-proof certificates.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Full-Logo-Colour-on-white-e1627527599702-1-e1637145660235-pghfjam3tt9v078zx9mo7ow2672hmwu555oerr3ul0.png", website: "https://accredify.io" },
  { name: "Appier", fund: "Fund I", sector: "Marketing Tools", model: "B2B", status: "Exited", description: "AI-powered marketing platform providing predictive analytics and cross-screen solutions. IPO on Tokyo Stock Exchange.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Appier-p8mumgzsqd3m5r8ko2mmiqzq1clt38ocwkxe92avmc.png", website: "https://www.appier.com" },
  { name: "Bizzi", fund: "Fund II", sector: "SME / Enterprise Tools", model: "B2B", status: "Active", description: "Vietnam's leading automated invoice processing and e-invoice platform for enterprises.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Bizzi-Logo-2-p8mv3hukicekfiid9fjdogc9ckp4hw9cku9z5h26xg.png", website: "https://bizzi.vn" },
  { name: "Brighte", fund: "Fund II", sector: "FinTech", model: "B2B2C", status: "Active", description: "Australia's leading buy-now-pay-later platform for sustainable home improvements and solar energy.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Brighte-p8muqdzl7igmj9jrsrknwrev55av5u83fys88khtp0.png", website: "https://www.brighte.com.au" },
  { name: "Convosight", fund: "Fund II", sector: "Consumer & Retail", model: "B2B", status: "Active", description: "Community commerce platform enabling brands to leverage online communities for authentic engagement.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/convosight-png-papysn7s4i5btwoi17y5trti6pztnk44n77ekc8as4.png", website: "https://www.convosight.com" },
  { name: "Curious Thing", fund: "Fund I", sector: "Service Platform", model: "B2B", status: "Exited", description: "Voice AI assistant platform automating phone-based customer interactions for businesses.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Curious-Thing-p8mvjnoo0sj22517vx1g1vil231bujf74u3j7r3hxw.png", website: "https://www.curiousthing.io" },
  { name: "DataRepublic", fund: "Fund I", sector: "Service Platform", model: "B2B", status: "Exited", description: "Secure data exchange platform enabling organizations to share and monetize data assets safely.", website: "https://www.datarepublic.com" },
  { name: "Edmicro", fund: "Fund II", sector: "Education", model: "B2B", status: "Active", description: "Vietnam's leading edtech platform providing digital learning solutions to schools and students.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Edmicro-Logo-transparent2-p8mvuock4vm25l11joi0a3f3qoq82t5xbdefqird04.png", website: "https://edmicro.vn" },
  { name: "EngageRocket", fund: "Fund II", sector: "SME / Enterprise Tools", model: "B2B", status: "Active", description: "People analytics platform providing HR teams with real-time employee engagement and performance insights.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Engage-Rocket-p8mulh9xinqpwkoggn6sw007gphuyqqk3o4y0jru6s.png", website: "https://engagerocket.co" },
  { name: "ErudiFi", fund: "Fund II", sector: "FinTech", model: "B2B2C", status: "Active", description: "Education financing platform making quality education accessible through affordable student loans in Southeast Asia.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/erudifi-logo-p8mucwyv900o4h4agxx665t0mbpgu0qlla5olsgyvo.png", website: "https://www.erudifi.com" },
  { name: "Eyeota", fund: "Fund I", sector: "Marketing Tools", model: "B2B", status: "Exited", description: "Global audience data marketplace enabling marketers to reach audiences across digital channels.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Eyeota-p8muplsfihe0uyoqdfdutyj1bl5uqx45c37nu9nmvo.png", website: "https://www.eyeota.com" },
  { name: "Fluent", fund: "Fund I", sector: "Marketing Tools", model: "B2B", status: "Active", description: "Performance marketing and data-driven customer acquisition platform serving global brands.", website: "https://www.fluentco.com" },
  { name: "Funding Societies", fund: "Fund I", sector: "FinTech", model: "B2B", status: "Active", description: "Southeast Asia's largest SME digital financing platform, providing business loans to small and medium enterprises.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Funding-Societies-p8mul8tdt5f5030qu1j5rk5248nk1gsz2i9kp24dqs.png", website: "https://fundingsocieties.com" },
  { name: "Furhat", fund: "Fund II", sector: "Robotics / Hardware", model: "B2B", status: "Active", description: "Social robotics company building the world's most advanced conversational robot platform.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Furhat-Robotics-Logo-transparent-p8mvqiw7y7xgvl24sdwbrn4taf6v2xolqto8fiwyhg.png", website: "https://furhatrobotics.com" },
  { name: "Hevo", fund: "Fund II", sector: "SME / Enterprise Tools", model: "B2B", status: "Active", description: "Market-leading automated, no-code data pipeline platform for modern data teams.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/hevo-logo-p8muqmg4x0s7fr7hfd8b17a0hm56345oh4nlk25a50.png", website: "https://hevodata.com" },
  { name: "Medo", fund: "Fund II", sector: "Service Platform", model: "B2B", status: "Exited", description: "AI-powered clinical decision support platform for medical imaging and diagnostics.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/medo-ai-e1628745560872-pbql8bvrw6crvr12g5r60z6dcdj5sonkmmoow3cnf8.png", website: "https://medo.ai" },
  { name: "Mobikon", fund: "Fund I", sector: "Consumer & Retail", model: "B2B", status: "Exited", description: "AI-powered customer engagement and analytics platform for the F&B and retail industries.", website: "https://www.mobikon.com" },
  { name: "NoBroker", fund: "Fund I", sector: "Consumer & Retail", model: "B2C", status: "Active", description: "India's largest proptech platform eliminating brokerage, connecting property owners and tenants directly.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/NO-Broker-p8mvf7w3qygb8fhbszyv9zu82kwxhzstuv6zmpofbo.png", website: "https://www.nobroker.in" },
  { name: "Nura", fund: "Fund I", sector: "Robotics / Hardware", model: "B2C", status: "Exited", description: "Audio technology company creating personalized sound experiences through self-learning headphones.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Nura-p8mvcz1zf7dnhyqqx10ybk8kzfzd40vwvr38cx0a6s.png", website: "https://www.nuraphone.com" },
  { name: "OpenAgent", fund: "Fund I", sector: "Consumer & Retail", model: "B2B2C", status: "Active", description: "Australia's leading platform matching home sellers with top-performing real estate agents using data-driven insights.", website: "https://www.openagent.com.au" },
  { name: "Oway", fund: "Fund I", sector: "Consumer & Retail", model: "B2C", status: "Active", description: "Myanmar's leading travel and lifestyle platform offering flights, hotels, and experiences across Southeast Asia.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qway-p8muvz51u23zjtfl66itqcni9lrex2enjme4xs7kpg.png", website: "https://www.oway.com.mm" },
  { name: "PatSnap", fund: "Fund I", sector: "SME / Enterprise Tools", model: "B2B", status: "Active", description: "Global AI-powered innovation intelligence platform used by R&D teams and IP professionals worldwide.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Patsnap-p8muxc0npfywbjgl8rnfc0bh5n2i1bsp2cbdw673pw.png", website: "https://www.patsnap.com" },
  { name: "Pazzi", fund: "Fund II", sector: "Robotics / Hardware", model: "B2B", status: "Exited", description: "Robotics company automating food preparation with fully autonomous pizza-making robots.", website: "https://www.pazzirobotics.com" },
  { name: "Ralali", fund: "Fund I", sector: "Consumer & Retail", model: "B2C", status: "Active", description: "Indonesia's leading B2B e-commerce marketplace connecting manufacturers and distributors with SME buyers.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Ralali-nO-HI-RES-p8mvmqlmf8qw44k3w8zf83iz5jun2tniw32tuej1jo.png", website: "https://www.ralali.com" },
  { name: "ShopBack", fund: "Fund I", sector: "Consumer & Retail", model: "B2C", status: "Active", description: "Asia-Pacific's leading shopping and rewards platform, helping millions save through cashback across 3,000+ merchants.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/shopback_logo_v2-min-q974uas55cu3a8qzgvygcczu23rxgxmf8l8biboxw4.png", website: "https://www.shopback.com" },
  { name: "Sirion", fund: "Fund I", sector: "SME / Enterprise Tools", model: "B2B", status: "Active", description: "AI-powered contract lifecycle management platform trusted by Fortune 500 enterprises worldwide.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Sirion-Labs-p8muslvvcfhzy4bpu83yap91mwd2c41a2y8i137d04.png", website: "https://www.sirion.ai" },
  { name: "Supermom", fund: "Fund II", sector: "Consumer & Retail", model: "B2B", status: "Active", description: "Data-driven parenting community and marketing platform engaging millions of parents across Southeast Asia.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/supermom3-q0qiw3z9msqd4ka9gkm3z937k7i5r1ggtrqi5bbfys.png", website: "https://www.supermom.sg" },
  { name: "Vend", fund: "Fund II", sector: "Consumer & Retail", model: "B2C", status: "Exited", description: "Cloud-based point-of-sale and retail management platform acquired by Lightspeed Commerce.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Vend-p8mub1ahkxg0wjulg4o16mvtukz1ft9xbz6q1v9bbo.png", website: "https://www.vendhq.com" },
  { name: "Wavecell", fund: "Fund I", sector: "Service Platform", model: "B2B", status: "Exited", description: "Cloud communications platform adding real-time messaging, voice, and video capabilities to any application.", logoUrl: "https://qualgro.com/wp-content/uploads/elementor/thumbs/wavecell-logo-1-p8mv1crsxxh1zhmbri7yzzsgmz90yprcy8s5ss8h3o.png", website: "https://www.8x8.com/products/apis" },
];

const sectors: Sector[] = [
  "Consumer & Retail",
  "FinTech",
  "Education",
  "SME / Enterprise Tools",
  "Marketing Tools",
  "Service Platform",
  "Robotics / Hardware",
];

const modelColors: Record<BusinessModel, string> = {
  B2B: "bg-investment-blue/15 text-investment-blue border-investment-blue/20",
  B2B2C: "bg-emerald/15 text-emerald border-emerald/20",
  B2C: "bg-purple-500/15 text-purple-500 border-purple-500/20",
};

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const [activeFund, setActiveFund] = useState<Fund | "All">("All");
  const [activeSector, setActiveSector] = useState<Sector | "All">("All");
  const [activeStatus, setActiveStatus] = useState<Status | "All">("All");
  const [showFilters, setShowFilters] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = searchParams.get("search");
    if (q) {
      setSearchQuery(q);
      setSearchOpen(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const filtered = companies.filter((c) => {
    if (activeFund !== "All" && c.fund !== activeFund) return false;
    if (activeSector !== "All" && c.sector !== activeSector) return false;
    if (activeStatus !== "All" && c.status !== activeStatus) return false;
    if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const activeCount = filtered.filter((c) => c.status === "Active").length;
  const exitedCount = filtered.filter((c) => c.status === "Exited").length;

  const hasActiveFilters = activeFund !== "All" || activeSector !== "All" || activeStatus !== "All" || searchQuery !== "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHero
        tagline="Portfolio"
        title={<>Qualgro Portfolio: Companies We <span className="text-gradient-page">Back</span></>}
        description="Qualgro invests in globally-minded entrepreneurs building true advantages in technology, strategy and superior execution across Southeast Asia and Australia."
      >
        <div className="flex gap-8 mt-10">
          <div>
            <p className="font-display text-3xl font-extrabold text-investment-blue">{companies.length}</p>
            <p className="text-muted-foreground text-sm mt-1">Total Investments</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="font-display text-3xl font-extrabold text-investment-blue">
              {companies.filter((c) => c.status === "Active").length}
            </p>
            <p className="text-muted-foreground text-sm mt-1">Active</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="font-display text-3xl font-extrabold text-emerald">
              {companies.filter((c) => c.status === "Exited").length}
            </p>
            <p className="text-muted-foreground text-sm mt-1">Exited</p>
          </div>
        </div>
      </PageHero>

      {/* Legend */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">Business Model:</span>
            {(["B2B", "B2B2C", "B2C"] as BusinessModel[]).map((m) => (
              <span key={m} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-semibold ${modelColors[m]}`}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Filter size={14} />
              Filters
              {hasActiveFilters && (
                <span className="ml-1 w-5 h-5 rounded-full bg-emerald text-emerald-foreground text-xs flex items-center justify-center font-bold">
                  !
                </span>
              )}
            </button>

            {(["All", "Fund I", "Fund II"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFund(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFund === f
                    ? "bg-investment-blue text-white"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {f}
              </button>
            ))}

            <div className="w-px h-6 bg-border mx-1" />
            {(["All", "Active", "Exited"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeStatus === s
                    ? "bg-investment-blue text-white"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {s === "All" ? "All Status" : s}
              </button>
            ))}

            {/* Search bar */}
            <div className="relative ml-auto flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    ref={searchInputRef}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search company..."
                    className="h-9 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-investment-blue/50"
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => {
                  if (searchOpen && searchQuery === "") {
                    setSearchOpen(false);
                  } else if (searchOpen) {
                    setSearchQuery("");
                  } else {
                    setSearchOpen(true);
                  }
                }}
                className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Search"
              >
                {searchOpen && searchQuery ? <X size={14} /> : <Search size={14} />}
              </button>
            </div>

            {hasActiveFilters && (
              <button
                onClick={() => {
                  setActiveFund("All");
                  setActiveSector("All");
                  setActiveStatus("All");
                  setSearchQuery("");
                  setSearchOpen(false);
                }}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={14} /> Clear All
              </button>
            )}
          </div>

          {/* Sector filter row (collapsible) */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-8"
              >
                <div className="flex flex-wrap gap-2 pb-4">
                  <button
                    onClick={() => setActiveSector("All")}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      activeSector === "All"
                        ? "bg-investment-blue text-white"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All Sectors
                  </button>
                  {sectors.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveSector(s)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                        activeSector === s
                          ? "bg-investment-blue text-white"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filtered.length} {filtered.length === 1 ? "company" : "companies"}
            {activeCount > 0 && exitedCount > 0 && (
              <span> · {activeCount} active, {exitedCount} exited</span>
            )}
          </p>

          {/* Company grid — fixed 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((company, i) => {
              const CardTag: any = company.website ? motion.a : motion.div;
              const linkProps = company.website
                ? { href: company.website, target: "_blank", rel: "noopener noreferrer", "aria-label": `Visit ${company.name} website` }
                : {};
              return (
              <CardTag
                key={company.name}
                {...linkProps}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`group relative block rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300 overflow-hidden border-border hover:border-investment-blue/30 ${company.website ? "cursor-pointer hover:-translate-y-1" : ""}`}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-investment-blue to-emerald" />

                {/* Logo area */}
                <div className="h-20 flex items-center mb-4">
                  {company.logoUrl ? (
                    <img
                      src={company.logoUrl}
                      alt={company.name}
                      className="max-h-16 max-w-[200px] w-auto object-contain"
                    />
                  ) : (
                    <h3 className="font-display text-lg font-bold text-primary">
                      {company.name}
                    </h3>
                  )}
                </div>

                {/* Name (if has logo) */}
                {company.logoUrl && (
                  <h3 className="font-display text-base font-bold mb-2 text-primary">
                    {company.name}
                  </h3>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                  {company.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-1.5">
                  <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-semibold border ${modelColors[company.model]}`}>
                    {company.model}
                  </span>
                  <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                    {company.sector}
                  </span>
                  <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                    {company.fund}
                  </span>
                  {company.status === "Exited" && (
                    <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald/10 text-emerald border border-emerald/20">
                      Exited
                    </span>
                  )}
                </div>
              </CardTag>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No companies match the selected filters.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
