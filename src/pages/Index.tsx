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
      <div className="h-auto relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="relative z-30 w-full">
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
