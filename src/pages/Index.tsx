import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import AISection from "@/components/AISection";
import ImpactSection from "@/components/ImpactSection";
import FounderTestimonials from "@/components/FounderTestimonials";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <StatsSection />
      <AISection />
      <ImpactSection />
      <FounderTestimonials />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
