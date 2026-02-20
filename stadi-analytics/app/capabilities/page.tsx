import CapabilitySection from "@/components/sections/CapabilitySection";
import FadeIn from "@/components/ui/FadeIn";
import CTAEnterprise from "@/components/sections/CTAEnterprise";

export const metadata = {
  title: "Capabilities | Stadi Research & Analytics",
  description: "Technical capabilities in data science, research methodologies, and analytics platforms.",
};

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-[#F3F0FF] to-secondary/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 text-center">
              Our Capabilities
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto text-center leading-relaxed">
              Advanced technical capabilities and methodologies that power data-driven insights and transformative business outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#F3F0FF] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CapabilitySection />
        </div>
      </section>

      {/* CTA */}
      <CTAEnterprise />
    </>
  );
}
