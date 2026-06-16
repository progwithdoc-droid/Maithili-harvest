"use client";

import TimelineDemo from "../timeline-demo";
import WorldPresence from "../WorldPresence";
import Hero1 from "./hero1";
import Hero2 from "./hero2";
import Hero3 from "./hero3";
import Hero4 from "./hero4";
import Hero5 from "./hero5";

export default function Home() {
  return (
    <main>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <section className="section-gap bg-(--color-cream)">
        <div className="section-container">
          <span className="brand-tag">Our Journey</span>
          <h2 className="font-editorial mt-3 text-[clamp(1.75rem,4vw,3rem)] leading-tight text-(--color-maroon)">
            Our Story
          </h2>
        </div>
      </section>
      <TimelineDemo />
      <WorldPresence />
    </main>
  );
}
