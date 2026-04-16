import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import qualgroLogo from "@/assets/qualgro-logo.png";
import ContactModal from "@/components/ContactModal";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Why Qualgro", href: "/why-qualgro" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={qualgroLogo} alt="Qualgro" className="h-8" />
          </Link>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm transition-colors font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full text-foreground/80 hover:text-foreground after:bg-foreground ${
                  location.pathname === link.href ? "after:w-full" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setContactOpen(true)}
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded text-sm font-semibold transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Contact
          </button>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-border"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
                className="px-5 py-2 rounded text-sm font-semibold bg-primary text-primary-foreground"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Navbar;
