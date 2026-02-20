"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedLogo from "@/components/ui/AnimatedLogo";
import { motion } from "framer-motion";

export default function HeroEnterprise() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-[#F3F0FF] to-secondary/10 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Animated Company Name */}
            <div className="mb-6 sm:mb-8 flex justify-center lg:justify-start">
              <AnimatedLogo />
            </div>

            <FadeIn delay={0.5}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4 sm:mb-6 px-4 sm:px-0">
                Unleash the Power of{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Data
                  </span>
                  <motion.span
                    className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  />
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                Transform your business decisions with advanced research methodologies, 
                comprehensive data analytics, and data science expertise across East Africa.
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="/services"
                    className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base font-medium rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-gradient-shift"
                  >
                    Explore Services
                    <motion.svg
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-primary text-primary text-sm sm:text-base font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right Image */}
          <FadeIn delay={0.8} direction="left">
            <motion.div
              className="relative mt-8 lg:mt-0"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl animate-pulse-glow"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                <Image
                  src="/images/home.jpeg"
                  alt="Stadi Research & Analytics"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Brand Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-10 left-10 w-16 h-16 lg:w-20 lg:h-20 border-4 border-primary/20 rounded-lg rotate-45 animate-spin-slow" style={{ animationDuration: '8s' }}></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-12 h-12 lg:w-16 lg:h-16 border-4 border-secondary/20 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
    </section>
  );
}

