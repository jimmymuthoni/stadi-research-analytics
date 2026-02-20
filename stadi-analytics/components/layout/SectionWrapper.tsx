import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "neutral" | "gradient";
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  background = "white",
  id,
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-white",
    neutral: "bg-[#F3F0FF]",
    gradient: "bg-gradient-to-br from-primary/10 via-[#F3F0FF] to-secondary/10",
  };

  return (
    <section
      id={id}
      className={`${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        {children}
      </div>
    </section>
  );
}
