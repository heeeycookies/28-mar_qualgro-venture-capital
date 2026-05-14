import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackdrop from "./motion/AnimatedBackdrop";
import Reveal from "./motion/Reveal";
import ArticleModal, { ArticleData } from "./ArticleModal";

const news = [
  {
    title: "Qualgro at Founders & Funders: ASEAN Tech All-Stars",
    category: "Qualgro in the news",
    date: "February 4, 2026",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-at-Founders-Funders-rin18aq479xg70zn714jcp1advg0gnueupum9jz2rc.jpg",
    url: "https://qualgro.com/qualgro-founders-funders-asean-weisheng-neo-vc-fundraising-advice/",
  },
  {
    title: "Qualgro Co-Leads Investment in SynaXG to Advance AI-Driven Telecom Networks",
    category: "Portfolio company",
    date: "February 4, 2026",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualro-Investment-in-SynaXG-rin12tc0c2f8gwyd7nsvt2uhmygxk82s3kunhg3r20.jpg",
    url: "https://qualgro.com/qualgro-co-leads-investment-synaxg-ai-ran-oran-telecom-networks/",
  },
  {
    title: "Qualgro at World AI Show Malaysia: Weisheng Neo on Investing in AI",
    category: "Qualgro in the news",
    date: "February 4, 2026",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-at-World-AI-Show-MY-rin0pg2n4w4fckdf9vrwcgahhod03707leu1rrxbjs.jpg",
    url: "https://qualgro.com/qualgro-world-ai-show-malaysia-weisheng-neo-ai-investment-tech-growth/",
  },
];

const NewsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const featImgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const [feature, ...rest] = news;
  const [active, setActive] = useState<ArticleData | null>(null);

  return (
    <section ref={ref} id="news" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <AnimatedBackdrop variant="cool" intensity="subtle" />

      <div className="relative mx-auto px-6 sm:px-10 xl:px-14" style={{ maxWidth: "1120px" }}>
        {/* Editorial heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 mb-14 sm:mb-16">
          <Reveal className="lg:col-span-8">
            <p className="text-emerald font-display font-bold text-xs uppercase tracking-[0.25em] mb-4">
              Latest from Qualgro
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-primary leading-[0.95]">
              News &amp; Insights
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:text-right">
            <Link
              to="/news"
              className="group inline-flex items-center gap-2 font-display font-semibold text-sm text-investment-blue hover:text-emerald transition-colors"
            >
              View all
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Editorial layout: feature + stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <button
              type="button"
              onClick={() => setActive(feature)}
              className="group block text-left w-full"
            >
              <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[16/10] mb-6">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  style={{ y: featImgY }}
                  className="absolute inset-0 w-full h-[120%] object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-emerald">
                {feature.category}
              </span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-extrabold text-primary leading-tight group-hover:text-investment-blue transition-colors max-w-xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-xs text-muted-foreground tracking-wide">{feature.date}</p>
            </button>
          </Reveal>

          <div className="lg:col-span-5 flex flex-col divide-y divide-border">
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.08}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5 py-6 first:pt-0"
                >
                  <div className="shrink-0 w-28 h-28 rounded-xl overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-emerald">
                      {item.category}
                    </span>
                    <h4 className="mt-1.5 font-display text-base font-bold text-primary group-hover:text-investment-blue transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[11px] text-muted-foreground">{item.date}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
