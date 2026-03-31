import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, X } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-card rounded-2xl shadow-2xl border border-border w-full max-w-lg relative overflow-hidden">
              {/* Decorative top bar */}
              <div className="h-1 bg-gradient-to-r from-emerald to-investment-blue" />

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground z-10"
              >
                <X size={18} />
              </button>

              <div className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="text-emerald" size={22} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary">Message Sent</h3>
                    <p className="text-muted-foreground mt-2 text-sm">We'll get back to you shortly.</p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-2.5 rounded-lg bg-navy text-primary-foreground font-display font-semibold text-sm hover:bg-navy-light transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6">
                      <p className="text-emerald font-display font-semibold text-xs uppercase tracking-[0.2em] mb-2">
                        Get in Touch
                      </p>
                      <h2 className="font-display text-2xl font-bold text-primary">
                        Contact Us
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1.5">Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-investment-blue/40 focus:border-investment-blue transition-colors text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1.5">Company / Firm</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-investment-blue/40 focus:border-investment-blue transition-colors text-sm"
                          placeholder="Your company or firm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1.5">Subject</label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-investment-blue/40 focus:border-investment-blue transition-colors text-sm"
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
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-investment-blue/40 focus:border-investment-blue transition-colors text-sm resize-none"
                          placeholder="How can we help?"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-navy text-primary-foreground font-display font-semibold text-sm hover:bg-navy-light transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
