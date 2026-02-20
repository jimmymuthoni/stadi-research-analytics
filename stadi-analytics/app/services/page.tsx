import ServiceGrid from "@/components/sections/ServiceGrid";
import FadeIn from "@/components/ui/FadeIn";
import CTAEnterprise from "@/components/sections/CTAEnterprise";

export const metadata = {
  title: "Our Services | Stadi Research & Analytics",
  description: "Comprehensive research and analytics services including market research, data collection, questionnaire design, training, and data science consultancy.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-[#F3F0FF] to-secondary/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 text-center">
              Our Services
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto text-center leading-relaxed">
              Comprehensive research and analytics solutions designed to transform your data into actionable business intelligence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F3F0FF] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ServiceGrid />
        </div>
      </section>

      {/* CTA */}
      <CTAEnterprise />
    </>
  );
}
