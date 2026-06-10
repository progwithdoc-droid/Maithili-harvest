"use client";

import TimelineDemo from "../timeline-demo";
import WorldMapDemo from "../world-map-demo";
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
      <TimelineDemo/>
      <WorldMapDemo/>
    </main>
  );
}
