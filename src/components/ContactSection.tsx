import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 sm:py-[120px] bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-emerald font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Contact Us
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
              <Send className="text-emerald" size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-primary">Message Sent</h3>
            <p className="text-muted-foreground mt-2">We'll get back to you shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-investment-blue/40 focus:border-investment-blue transition-colors text-sm"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Company / Firm</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-investment-blue/40 focus:border-investment-blue transition-colors text-sm"
                placeholder="Your company or firm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Subject</label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-investment-blue/40 focus:border-investment-blue transition-colors text-sm"
              >
                <option value="">Select a subject</option>
                <option value="lp">LP Inquiry</option>
                <option value="founder">Founder Pitch</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-investment-blue/40 focus:border-investment-blue transition-colors text-sm resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
