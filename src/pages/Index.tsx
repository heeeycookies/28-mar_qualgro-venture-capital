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
        {/* Animated grid background spanning Hero + Stats */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Boxes className="pointer-events-auto opacity-60" />
          {/* Soft wash so content stays readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.85) 60%, hsl(var(--background)) 100%)",
            }}
          />
          {/* Seamless fade into the next section */}
          <div
            className="absolute inset-x-0 bottom-0 h-48"
            style={{
              background:
                "linear-gradient(to bottom, hsl(var(--background) / 0), hsl(var(--background)) 100%)",
            }}
          />
        </div>
        <div className="relative z-10">
          <HeroSection />
          <PortfolioSection />
          <StatsSection />
        </div>
      </div>
      <ThesisSection />
      <ImpactSection />
      <FounderTestimonials />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
