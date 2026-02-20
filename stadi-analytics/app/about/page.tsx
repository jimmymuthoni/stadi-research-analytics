import SectionWrapper from "@/components/layout/SectionWrapper";
import StaffGrid from "@/components/sections/StaffGrid";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "About Us | Stadi Research & Analytics",
  description: "Learn about our team and mission to unleash the power of data across East Africa.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-[#F3F0FF] to-secondary/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 text-center">
              About Stadi Research & Analytics
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto text-center leading-relaxed">
              We are a leading research and analytics consultancy dedicated to transforming data into actionable insights that drive business growth across East Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To empower organizations with data-driven insights through cutting-edge research methodologies, advanced analytics, and comprehensive training programs that enable informed decision-making and sustainable growth.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We believe in theorizing only after understanding patterns in the data. Our team employs statistical and machine learning techniques to analyze, visualize, and report data insights, developing robust models for pattern identification and predictive analytics.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper background="gradient">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-12 text-center">
            Our Core Values
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Excellence",
              description: "We maintain the highest standards in research methodology and data analysis, delivering exceptional quality in every project.",
            },
            {
              title: "Integrity",
              description: "We uphold ethical practices in data collection and analysis, ensuring transparency and reliability in all our work.",
            },
            {
              title: "Innovation",
              description: "We continuously adopt cutting-edge technologies and methodologies to provide the most advanced analytics solutions.",
            },
          ].map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper background="white">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our experienced team of researchers, data scientists, and analysts brings together diverse expertise to deliver exceptional results.
            </p>
          </div>
        </FadeIn>
        <StaffGrid />
      </SectionWrapper>
    </>
  );
}
