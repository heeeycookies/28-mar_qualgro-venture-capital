import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

type Props = { open: boolean; onClose: () => void };

const field =
  "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition";

const label =
  "block text-[11px] font-display font-extrabold uppercase tracking-[0.18em] text-primary/70 mb-1.5";

const PortfolioContactModal = ({ open, onClose }: Props) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const handleSend = () => {
    const subject = encodeURIComponent("Portfolio Exit Inquiry — Partnership Interest");
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nRole / Position: ${role}\nEmail: ${email}`
    );
    window.location.href = `mailto:ops@qualgro.com?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="bg-card rounded-2xl shadow-2xl max-w-md w-full border border-border p-8 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-2">
                <p className="text-emerald font-display text-xs font-semibold uppercase tracking-[0.2em]">
                  Portfolio Stories
                </p>
                <button
                  onClick={onClose}
                  className="ml-4 shrink-0 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-black text-primary leading-tight mb-3 max-w-[340px]">
                Learn how Qualgro supported our portfolio companies' exits
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-7">
                Drop your details and we'll share how we've worked alongside founders through their most important milestones.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={label}>Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className={label}>Company</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company name"
                      className={field}
                    />
                  </div>
                </div>
                <div>
                  <label className={label}>Role / Position</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Founder, CFO, Investor"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label}>
                    Email <span className="text-emerald">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
              </div>

              <button
                onClick={handleSend}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald px-6 py-3.5 font-display text-sm font-semibold text-emerald-foreground hover:bg-emerald/90 hover:-translate-y-[1px] transition-all cursor-pointer"
              >
                Send <Send size={15} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioContactModal;
