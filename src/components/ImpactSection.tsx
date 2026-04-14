import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { value: "350K+", label: "Jobs created across Southeast Asia" },
  { value: "10M+", label: "Mothers empowered on Supermom" },
  { value: "$60M", label: "Tuition fees disbursed via ErudiFi" },
  { value: "2M+", label: "MSMEs digitally enabled" },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="bg-background" ref={ref}>
      <div className="py-20 sm:py-[120px]">
        <div className="mx-auto px-6" style={{ maxWidth: "1320px" }}>
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left — headline + link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[13px] font-semibold uppercase tracking-[1.8px] text-emerald mb-5">
                Impact & ESG
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary leading-[1.1]">
                Building companies that{" "}
                <span className="text-gradient-emerald">
                  create lasting change.
                </span>
              </h2>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-lg">
                Our portfolio companies have collectively created hundreds of
                thousands of jobs, empowered millions of underserved communities,
                and driven measurable social impact across Southeast Asia.
              </p>
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 mt-8 font-display text-sm font-semibold text-emerald hover:text-primary transition-colors group"
              >
                Explore our impact framework
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Right — stat grid */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                >
                  <p className="font-display text-4xl md:text-5xl font-extrabold text-primary leading-none">
                    {h.value}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2 leading-snug">
                    {h.label}
                  </p>
                  <div className="mt-3 h-px w-10 bg-emerald/30" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
