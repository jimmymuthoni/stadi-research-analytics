import CaseStudyBlock from "@/components/sections/CaseStudyBlock";
import FadeIn from "@/components/ui/FadeIn";
import CTAEnterprise from "@/components/sections/CTAEnterprise";

export const metadata = {
  title: "Case Studies | Stadi Research & Analytics",
  description: "Real-world success stories showcasing the impact of our research and analytics solutions.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-[#F3F0FF] to-secondary/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 text-center">
              Case Studies
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto text-center leading-relaxed">
              Discover how we've helped organizations across East Africa transform their data into actionable insights and measurable results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#F3F0FF] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CaseStudyBlock />
        </div>
      </section>

      {/* CTA */}
      <CTAEnterprise />
    </>
  );
}
