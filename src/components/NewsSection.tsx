import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="py-24 bg-surface-alt" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Latest
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">
            News & Insights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-emerald uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-primary group-hover:text-investment-blue transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">{item.date}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 font-display font-semibold text-sm text-investment-blue hover:text-primary transition-colors"
          >
            View All News & Resources
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
