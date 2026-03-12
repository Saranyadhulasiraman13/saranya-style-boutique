import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CollectionsSection />
      <NewArrivalsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
