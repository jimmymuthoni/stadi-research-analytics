"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const staff = [
  {
    name: "Dr. James Mwangi",
    role: "Lead Data Scientist",
    image: "/images/staff1.jpeg",
    bio: "Expertise in machine learning and predictive analytics with 10+ years experience",
  },
  {
    name: "Sarah Kamau",
    role: "Senior Research Analyst",
    image: "/images/staff2.jpeg",
    bio: "Specialized in market research and quantitative analysis methodologies",
  },
  {
    name: "Michael Omondi",
    role: "Data Engineering Lead",
    image: "/images/staff3.jpeg",
    bio: "Expert in data collection systems and mobile data toolkit implementation",
  },
];

export default function StaffGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {staff.map((member, index) => (
        <FadeIn key={member.name} delay={index * 0.12}>
          <div className="group">
            <div className="relative overflow-hidden rounded-lg shadow-sm mb-6 aspect-[4/5]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
