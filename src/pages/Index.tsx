import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { OutageBanner } from "@/components/OutageBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { CallBeforeDigSection } from "@/components/CallBeforeDigSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OutageBanner />
        <ServicesSection />
        <CallBeforeDigSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
