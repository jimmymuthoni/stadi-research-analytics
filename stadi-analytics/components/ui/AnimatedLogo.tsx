"use client";

import { motion } from "framer-motion";

export default function AnimatedLogo() {
  const text = "STADI";
  const subtitle = "RESEARCH & ANALYTICS";

  const letterVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-1">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent inline-block"
            style={{
              backgroundSize: "200% auto",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        className="text-xs md:text-sm lg:text-base font-semibold text-primary tracking-widest mt-2"
      >
        {subtitle}
      </motion.div>
    </div>
  );
}
