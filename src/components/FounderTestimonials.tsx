import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Qualgro has been an invaluable partner to ShopBack since our early days. Their deep understanding of the Asia-Pacific market and data-driven approach helped us scale from a small team in Singapore to the largest rewards and discovery platform across 12 countries, powering over US$4 billion in annual sales for 20,000+ merchant partners.",
    name: "Henry Chan",
    title: "Co-Founder & CEO",
    company: "ShopBack",
    region: "Asia Pacific · E-Commerce",
  },
  {
    quote: "What sets Qualgro apart is their genuine commitment to helping founders navigate the complexities of building in Southeast Asia. They supported Funding Societies in becoming the region's leading SME digital financing platform, providing not just capital but strategic guidance on market expansion and regulatory navigation.",
    name: "Kelvin Teo",
    title: "Co-Founder & CEO",
    company: "Funding Societies",
    region: "Southeast Asia · Fintech",
  },
  {
    quote: "Qualgro's expertise in Data and AI was instrumental in PatSnap's growth from a regional player to a global leader in R&D Innovation analytics. Their network and operational know-how helped us expand our platform to serve teams across 50+ countries with access to over 140 million patents.",
    name: "Jeffrey Tiong",
    title: "Founder & CEO",
    company: "PatSnap",
    region: "Global · Data / AI",
  },
  {
    quote: "As an AI-driven data powerhouse connecting brands with parents across Southeast Asia, Supermom needed a VC partner who understood both technology and the regional consumer landscape. Qualgro brought exactly that — helping us win minds and market shares with extraordinary speed.",
    name: "Benjamin Kiang",
    title: "Founder & CEO",
    company: "Supermom",
    region: "Southeast Asia · Data/AI",
  },
];

const FounderTestimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-surface-alt overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.3em] mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">
            Why Founders Partner With Us
          </h2>
        </motion.div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-alt to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 sm:gap-6 w-max testimonial-scroll"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[280px] sm:w-[360px] md:w-[420px] flex-shrink-0 bg-card rounded-2xl border border-border p-5 sm:p-8 flex flex-col justify-between cursor-default hover:shadow-lg hover:border-emerald/20 transition-all duration-300"
            >
              <div>
                <Quote className="text-emerald/40 mb-4" size={28} />
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-bold text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.title}, {t.company}
                </p>
                <p className="text-xs text-emerald mt-1 font-semibold uppercase tracking-wider">
                  {t.region}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderTestimonials;
