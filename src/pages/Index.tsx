import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import FeaturesSection from "@/components/FeaturesSection";
import TechPartnersSection from "@/components/TechPartnersSection";
import AboutSection from "@/components/AboutSection";
import CartoriosSection from "@/components/CartoriosSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <FeaturesSection />
      <TechPartnersSection />
      <AboutSection />
      <CartoriosSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
