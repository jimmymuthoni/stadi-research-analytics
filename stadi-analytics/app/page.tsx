import HeroEnterprise from "@/components/sections/HeroEnterprise";
import ServicesOverview from "@/components/sections/ServicesOverview";
import CTAEnterprise from "@/components/sections/CTAEnterprise";
import StatsSection from "@/components/sections/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroEnterprise />
      <StatsSection />
      <ServicesOverview />
      <CTAEnterprise />
    </>
  );
}
