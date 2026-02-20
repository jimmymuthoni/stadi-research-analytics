"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Completed", color: "from-primary to-secondary" },
  { value: "50+", label: "Enterprise Clients", color: "from-secondary to-primary" },
  { value: "15+", label: "Countries Served", color: "from-primary to-secondary" },
  { value: "98%", label: "Client Satisfaction", color: "from-secondary to-primary" },
];

export default function StatsSection() {
  return (
    <SectionWrapper background="neutral">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.1}>
            <motion.div
              className="text-center p-6 rounded-2xl bg-white border-2 border-primary/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(91, 46, 255, 0.2)",
                borderColor: "rgba(91, 46, 255, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base text-neutral-800 font-medium">
                {stat.label}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

