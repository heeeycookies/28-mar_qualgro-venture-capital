import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "33", label: "Companies Invested" },
  { value: "US$7B+", label: "Combined Valuation of Portfolio Cos" },
  { value: "4", label: "Unicorns" },
  { value: "17", label: "10 Global and 7 Regional Companies" },
  { value: "2019", label: "'Exit of the Year' awarded by Singapore VC Association" },
  { value: "9", label: "Full Exits", sublabel: "Fund 1 (2015): 7 Exits · Fund 2 (2019): 2 Exits" },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 text-primary-foreground bg-sidebar-accent" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <p className="font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3 text-sky-700">
            Track Record
          </p>
          <h2 className="font-display text-3xl font-bold md:text-6xl text-sky-700">
            Quality & Growth
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-sky-700">
            We look for entrepreneurs with the mindset and capabilities to build regional or global companies, with technology advantages, fast execution and agility.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center">
              <p className="font-display text-3xl md:text-4xl font-extrabold text-investment-blue">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-sky-700">
                {stat.label}
              </p>
              {'sublabel' in stat && stat.sublabel && (
                <p className="mt-1 text-xs text-sky-600/70">
                  {stat.sublabel}
                </p>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default StatsSection;