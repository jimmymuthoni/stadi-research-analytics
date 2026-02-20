"use client";

import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    number: "01",
    title: "Market Research",
    description: "Comprehensive market analysis services that provide deep insights into consumer behavior, market trends, and competitive landscapes.",
    features: [
      "Consumer behavior analysis",
      "Market segmentation studies",
      "Competitive intelligence",
      "Brand perception research",
      "Product testing and validation",
      "Market entry strategies",
    ],
  },
  {
    number: "02",
    title: "Questionnaire Design & Scripting",
    description: "Expert design and scripting of surveys and questionnaires using robust mobile and online data collection platforms.",
    features: [
      "ODK/KoBo Toolbox scripting",
      "Survey CTO implementation",
      "CSPro questionnaire design",
      "Google Forms integration",
      "Survey Monkey configuration",
      "Custom survey solutions",
    ],
  },
  {
    number: "03",
    title: "Data Collection & Management",
    description: "Reliable and valid data collection through integrated online and mobile toolkits with comprehensive data management systems.",
    features: [
      "Mobile data collection",
      "Online survey deployment",
      "Real-time data monitoring",
      "Data quality assurance",
      "Database management",
      "Data cleaning and validation",
    ],
  },
  {
    number: "04",
    title: "Training & Capacity Development",
    description: "Comprehensive training programs designed to build organizational capabilities in research, data collection, and analytics.",
    features: [
      "Research methodology training",
      "Data collection techniques",
      "M&E frameworks",
      "Predictive analytics workshops",
      "Statistical analysis training",
      "Custom capacity building programs",
    ],
  },
  {
    number: "05",
    title: "Data Science Consultancy",
    description: "Advanced statistical and machine learning solutions for data analysis, visualization, pattern identification, and predictive modeling.",
    features: [
      "Statistical data analysis",
      "Machine learning models",
      "Predictive analytics",
      "Data visualization dashboards",
      "Pattern recognition",
      "Business intelligence solutions",
    ],
  },
];

export default function ServiceGrid() {
  return (
    <div className="space-y-16">
      {services.map((service, index) => (
        <FadeIn key={service.title} delay={index * 0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Number */}
            <div className="lg:col-span-2">
              <span className="text-6xl md:text-7xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                {service.number}
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-10 space-y-6">
              <div>
                <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          {index < services.length - 1 && (
            <div className="h-px bg-neutral-200 mt-16" />
          )}
        </FadeIn>
      ))}
    </div>
  );
}
