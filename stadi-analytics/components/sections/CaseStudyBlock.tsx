"use client";

import FadeIn from "@/components/ui/FadeIn";

const caseStudies = [
  {
    client: "Regional Healthcare Provider",
    industry: "Healthcare",
    challenge: "A major healthcare network needed to understand patient satisfaction levels across 25 facilities and identify areas for service improvement to reduce patient churn.",
    approach: "Deployed mobile data collection across all facilities using ODK, conducting 5,000+ patient surveys. Applied sentiment analysis and statistical modeling to identify key drivers of satisfaction. Developed interactive Power BI dashboards for real-time monitoring.",
    impact: [
      "15% improvement in overall patient satisfaction scores",
      "Identified 8 critical service gaps requiring immediate attention",
      "Reduced patient complaints by 32% within 6 months",
      "Created predictive model to forecast satisfaction trends",
    ],
  },
  {
    client: "Agricultural Finance Institution",
    industry: "Agriculture & Finance",
    challenge: "A microfinance institution serving smallholder farmers needed to assess loan repayment patterns and develop a credit scoring model to reduce default rates while expanding access.",
    approach: "Collected comprehensive data on 10,000+ farmers including farm characteristics, weather patterns, market access, and historical repayment behavior. Built machine learning models using random forests and gradient boosting to predict default probability.",
    impact: [
      "Developed credit scoring model with 85% accuracy",
      "Reduced loan default rates by 18%",
      "Enabled safe expansion to 3,000 additional farmers",
      "Optimized loan terms based on risk profiles",
    ],
  },
  {
    client: "National Education Assessment",
    industry: "Education",
    challenge: "The Ministry of Education required a comprehensive assessment of learning outcomes across 500 schools to inform policy decisions and resource allocation for improving education quality.",
    approach: "Designed multi-stage sampling framework and deployed tablet-based assessments using Survey CTO. Trained 150 enumerators and conducted assessments of 50,000+ students. Applied advanced statistical analysis including hierarchical linear modeling to account for school-level effects.",
    impact: [
      "Generated nationally representative learning outcomes data",
      "Identified regional disparities in educational achievement",
      "Informed $50M education sector investment strategy",
      "Established baseline for longitudinal tracking",
    ],
  },
  {
    client: "Consumer Goods Manufacturer",
    industry: "Retail & FMCG",
    challenge: "A fast-moving consumer goods company needed to understand brand perception and purchase drivers across urban and rural markets to optimize their marketing strategy and product positioning.",
    approach: "Conducted mixed-methods research including 3,000 quantitative surveys and 50 in-depth interviews across 10 cities and rural areas. Applied cluster analysis to segment consumers and conjoint analysis to determine product preferences.",
    impact: [
      "Identified 4 distinct consumer segments with unique needs",
      "Redesigned product portfolio based on preference insights",
      "Achieved 22% increase in market share within target segments",
      "Optimized marketing spend with 35% better ROI",
    ],
  },
];

export default function CaseStudyBlock() {
  return (
    <div className="space-y-20">
      {caseStudies.map((study, index) => (
        <FadeIn key={study.client} delay={index * 0.08}>
          <div className="border border-neutral-200 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-8 pb-8 border-b border-neutral-200">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2">
                  {study.client}
                </h2>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {study.industry}
                </span>
              </div>
            </div>

            {/* Problem - Approach - Impact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Challenge */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Challenge
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Approach
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {study.approach}
                </p>
              </div>

              {/* Impact */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  Impact
                </h3>
                <ul className="space-y-3">
                  {study.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
