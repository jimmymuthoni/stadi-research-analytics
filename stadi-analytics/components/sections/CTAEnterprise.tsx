"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

export default function CTAEnterprise() {
  return (
    <section className="relative bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden animate-gradient-shift">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated Waves */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute w-full h-full"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Ready to Transform Your Data into Insights?
            </motion.h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Partner with us to unlock the full potential of your data. Our expert team is ready to help you make data-driven decisions that drive growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary text-base font-medium rounded-lg hover:shadow-2xl transition-all duration-200 group"
                >
                  Get Started Today
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

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-base font-medium rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/20 rounded-lg"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}

