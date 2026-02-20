"use client";

import FadeIn from "@/components/ui/FadeIn";

const capabilities = [
  {
    category: "Research Methodologies",
    items: [
      "Quantitative research design",
      "Qualitative research methods",
      "Mixed-methods approaches",
      "Longitudinal studies",
      "Cross-sectional analysis",
      "Experimental design",
    ],
  },
  {
    category: "Data Collection Platforms",
    items: [
      "ODK (Open Data Kit)",
      "KoBo Toolbox",
      "Survey CTO",
      "CSPro",
      "Google Forms",
      "Survey Monkey",
    ],
  },
  {
    category: "Statistical Analysis",
    items: [
      "Descriptive statistics",
      "Inferential statistics",
      "Regression analysis",
      "ANOVA and MANOVA",
      "Factor analysis",
      "Time series analysis",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Supervised learning algorithms",
      "Unsupervised learning methods",
      "Classification models",
      "Clustering techniques",
      "Neural networks",
      "Ensemble methods",
    ],
  },
  {
    category: "Data Visualization",
    items: [
      "Interactive dashboards",
      "Business intelligence reporting",
      "Geospatial visualization",
      "Statistical graphics",
      "Real-time data displays",
      "Custom visualization solutions",
    ],
  },
  {
    category: "Programming & Tools",
    items: [
      "R and RStudio",
      "Python (Pandas, NumPy, Scikit-learn)",
      "SQL and database management",
      "Power BI and Tableau",
      "Excel advanced analytics",
      "SPSS and Stata",
    ],
  },
];

export default function CapabilitySection() {
  return (
    <div className="space-y-12">
      {capabilities.map((capability, index) => (
        <FadeIn key={capability.category} delay={index * 0.08}>
          <div className="border-b border-neutral-200 pb-12 last:border-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8">
              {capability.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capability.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}

      {/* Industry Experience */}
      <FadeIn delay={0.6}>
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
            Industry Experience
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            Our team has successfully delivered projects across multiple sectors including:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Healthcare",
              "Education",
              "Finance",
              "Agriculture",
              "Technology",
              "Government",
              "Non-Profit",
              "Retail",
              "Manufacturing",
              "Real Estate",
            ].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
