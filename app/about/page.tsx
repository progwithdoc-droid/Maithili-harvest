import About from "@/components/About";
import TimelineDemo from "@/components/timeline-demo";
import TestimonialSection from "@/components/TestimonialSection";
import WorldPresence from "@/components/WorldPresence";

export const metadata = {
  title: "About Us — Maithili Harvest",
  description:
    "Learn about Amit Kumar, founder of Maithili Harvest, and the journey from a small Bihar shop to a registered agri-food startup bringing the authentic harvest of Mithila to the world.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Founder story + bio */}
      <About />

      {/* World presence — we are all over the world */}
      <WorldPresence />

      {/* Timeline of milestones */}
      <TimelineDemo />

      {/* Testimonials */}
      <TestimonialSection />
    </div>
  );
}
