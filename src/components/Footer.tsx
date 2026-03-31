import { Linkedin, Mail } from "lucide-react";
import qualgroLogo from "@/assets/qualgro-logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-alt border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <img src={qualgroLogo} alt="Qualgro" className="h-8" />
            <p className="text-muted-foreground text-sm mt-2">
              160 Robinson Road, #18-06 SBF Center<br />
              Singapore 068914
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/company/qualgro-partners/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-emerald transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:info@qualgro.com" className="text-muted-foreground hover:text-emerald transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 Qualgro Partners Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
