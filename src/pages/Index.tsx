import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import EarningsSection from "@/components/EarningsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <EarningsSection />
      <CTASection />
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        <p>© 2026 FreeCash. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
