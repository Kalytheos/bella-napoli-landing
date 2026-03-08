import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedPizzas from "@/components/FeaturedPizzas";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import MenuPreview from "@/components/MenuPreview";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileOrderButton from "@/components/MobileOrderButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedPizzas />
      <WhyChooseUs />
      <AboutSection />
      <ReviewsSection />
      <MenuPreview />
      <LocationSection />
      <FinalCTA />
      <Footer />
      <MobileOrderButton />
    </div>
  );
};

export default Index;
