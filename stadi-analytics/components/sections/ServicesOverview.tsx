"use client";

import Link from "next/link";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const services = [
  {
    title: "Market Research",
    description: "Comprehensive market analysis and consumer insights to drive strategic business decisions and identify growth opportunities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-primary to-primary/80",
  },
  {
    title: "Questionnaire Design & Scripting",
    description: "Expert design and scripting of surveys using ODK, KoBo Toolbox, Survey CTO, and other mobile data collection platforms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: "from-secondary to-secondary/80",
  },
  {
    title: "Data Collection & Management",
    description: "Reliable and valid data collection through integrated online and mobile toolkits with robust data management systems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    gradient: "from-primary to-secondary",
  },
  {
    title: "Training & Capacity Development",
    description: "Comprehensive training programs in research, data collection, M&E, and predictive analytics to build organizational capabilities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: "from-secondary to-primary",
  },
  {
    title: "Data Science Consultancy",
    description: "Advanced statistical and machine learning techniques for data analysis, visualization, and predictive modeling.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-primary/80 to-secondary/80",
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper background="gradient">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Comprehensive research and analytics solutions tailored to your business needs
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.08}>
            <motion.div
              className="group p-8 bg-white border-2 border-transparent rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(91, 46, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                initial={false}
              />

              <motion.div
                className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="relative text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-neutral-700 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                className="relative mt-4 text-primary font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <div className="mt-12 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Services
              <motion.svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}

