import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ThesisSection from "@/components/ThesisSection";
import ImpactSection from "@/components/ImpactSection";
import FounderTestimonials from "@/components/FounderTestimonials";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import { Boxes } from "@/components/ui/background-boxes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Boxes className="opacity-100" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 28%, hsl(var(--background) / 0.04) 0%, hsl(var(--background) / 0.26) 54%, hsl(var(--background) / 0.62) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(to bottom, hsl(var(--background) / 0), hsl(var(--background)) 100%)",
            }}
          />
        </div>
        <div className="relative z-10">
          <HeroSection />
          <PortfolioSection />
        </div>
      </div>
      <StatsSection />
      <ThesisSection />
      <ImpactSection />
      <FounderTestimonials />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
