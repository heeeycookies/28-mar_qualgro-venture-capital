import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { quoteCardPalette, type QuoteCardColor } from "@/data/value-add";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  region: string;
  color: QuoteCardColor;
}

const testimonials: Testimonial[] = [
  {
    quote: "Qualgro has been an invaluable partner to ShopBack since our early days. Their deep understanding of the Asia-Pacific market and data-driven approach helped us scale from a small team in Singapore to the largest rewards and discovery platform across 12 countries, powering over US$4 billion in annual sales for 20,000+ merchant partners.",
    name: "Henry Chan",
    title: "Co-Founder & CEO",
    company: "ShopBack",
    region: "Asia Pacific · E-Commerce",
    color: "emerald",
  },
  {
    quote: "What sets Qualgro apart is their genuine commitment to helping founders navigate the complexities of building in Southeast Asia. They supported Funding Societies in becoming the region's leading SME digital financing platform, providing not just capital but strategic guidance on market expansion and regulatory navigation.",
    name: "Kelvin Teo",
    title: "Co-Founder & CEO",
    company: "Funding Societies",
    region: "Southeast Asia · Fintech",
    color: "butter",
  },
  {
    quote: "Qualgro's expertise in Data and AI was instrumental in PatSnap's growth from a regional player to a global leader in R&D Innovation analytics. Their network and operational know-how helped us expand our platform to serve teams across 50+ countries with access to over 140 million patents.",
    name: "Jeffrey Tiong",
    title: "Founder & CEO",
    company: "PatSnap",
    region: "Global · Data / AI",
    color: "coral",
  },
  {
    quote: "As an AI-driven data powerhouse connecting brands with parents across Southeast Asia, Supermom needed a VC partner who understood both technology and the regional consumer landscape. Qualgro brought exactly that — helping us win minds and market shares with extraordinary speed.",
    name: "Benjamin Kiang",
    title: "Founder & CEO",
    company: "Supermom",
    region: "Southeast Asia · Data/AI",
    color: "sky",
  },
  {
    quote: "Qualgro made warm introductions across their network at the moments that mattered — opening doors we couldn't have opened alone.",
    name: "Olivier Gerhardt",
    title: "Co-Founder",
    company: "Wavecell",
    region: "Asia · Communications",
    color: "lavender",
  },
  {
    quote: "Qualgro delved deep into their personal networks and tapped their goodwill to create market access for Sirion — their efforts resulted in us closing a major account in a new geography.",
    name: "Ajay Agrawal",
    title: "Founder & CEO",
    company: "Sirion",
    region: "Global · Enterprise SaaS",
    color: "mint",
  },
];

const FounderTestimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...testimonials, ...testimonials];
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [30, -15]);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-[120px] bg-surface-alt overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--investment-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--investment-blue)) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />
      <div className="container mx-auto px-6 mb-14 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ y: headingY }}
          className="max-w-2xl"
        >
          <p className="text-emerald font-display font-bold text-xs uppercase tracking-[0.25em] mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-primary leading-[0.95]">
            Why founders<br />partner with us.
          </h2>
        </motion.div>
      </div>

      <div
        className="relative py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-alt to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-8 sm:gap-10 w-max testimonial-scroll items-center"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {doubled.map((t, i) => {
            const palette = quoteCardPalette[t.color];
            const rotate = i % 2 === 0 ? -2.2 : 2;
            return (
              <figure
                key={i}
                className="w-[300px] sm:w-[360px] md:w-[400px] flex-shrink-0 rounded-[22px] p-7 sm:p-8 transition-transform duration-300 hover:-translate-y-1.5"
                style={{
                  backgroundColor: palette.bg,
                  color: palette.text,
                  transform: `rotate(${rotate}deg)`,
                  boxShadow:
                    "0 24px 60px -24px rgba(0,0,0,0.45), 0 8px 20px -10px rgba(0,0,0,0.25)",
                }}
              >
                <blockquote
                  className="font-display text-[15px] leading-[1.5] font-medium line-clamp-6"
                  style={{ color: palette.text }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption
                  className="mt-6 pt-5 flex items-center gap-3"
                  style={{ borderTop: `1px solid ${palette.text}22` }}
                >
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-black"
                    style={{ backgroundColor: palette.text, color: palette.bg }}
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p
                      className="font-display font-extrabold text-[13px] leading-tight"
                      style={{ color: palette.text }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[11px] mt-0.5 font-semibold uppercase tracking-[0.12em]"
                      style={{ color: palette.meta, opacity: 0.85 }}
                    >
                      {t.company} · {t.region.split(" · ")[1] ?? t.region}
                    </p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FounderTestimonials;
