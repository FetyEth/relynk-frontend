import HeroSection from "@/components/views/homepage/hero";
import FeaturesSection from "@/components/views/homepage/features";
import HowItWorksSection from "@/components/views/homepage/how-it-works";
import HilightedSection from "@/components/views/homepage/hilighted";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <HilightedSection />
    </>
  );
}
