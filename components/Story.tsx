"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ScrollProgress } from "@/components/motion-primitives/scroll-progress";

const milestones = [
  {
    year: "2020",
    title: "Started the Shop",
    description:
      "Amit Kumar took his first step into entrepreneurship — opening a small retail shop rooted in the spirit of Mithila's local trade culture.",
    side: "right",
  },
  {
    year: "2021",
    title: "BCA Foundation",
    description:
      "Laid the academic and strategic foundation with a BCA degree, sharpening the vision for a modern, tech-enabled agri-business.",
    side: "left",
  },
  {
    year: "2022",
    title: "Zomato & Swiggy Onboarding",
    description:
      "Expanded into food delivery by partnering with Zomato and Swiggy — an early validation of the market appetite for authentic regional food.",
    side: "right",
  },
  {
    year: "2024",
    title: "Corporate & Client Work",
    description:
      "Began working with corporate clients and B2B partners, building the operational backbone and supply chain expertise needed to scale.",
    side: "left",
  },
  {
    year: "2026",
    title: "Foundation of Maithili Harvest",
    description:
      "Maithili Harvest Private Limited was officially incorporated — a proud milestone to bring the authentic harvest of Mithila to kitchens across India and beyond.",
    side: "right",
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isRight = item.side === "right";

  return (
    <div ref={ref} className="relative flex items-center w-full">
      {/* LEFT content */}
      <div className="flex-1 flex justify-end pr-10 md:pr-14">
        {!isRight && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="text-right max-w-xs"
          >
            <span
              className="block font-['IM_Fell_English',serif] text-4xl md:text-5xl font-bold mb-1"
              style={{ color: "#D4A017" }}
            >
              {item.year}
            </span>
            <h3
              className="font-['Playfair_Display',serif] text-lg md:text-xl font-bold mb-2"
              style={{ color: "#F5ECD7" }}
            >
              {item.title}
            </h3>
            <p
              className="font-['Lato',sans-serif] text-sm leading-6 font-light"
              style={{ color: "#9C7A56" }}
            >
              {item.description}
            </p>
          </motion.div>
        )}
      </div>

      {/* Center dot + line connector */}
      <div className="relative flex flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
          style={{
            background: "#D4A017",
            borderColor: "#8B3A2A",
            boxShadow: "0 0 0 5px rgba(212,160,23,0.15), 0 0 20px rgba(212,160,23,0.25)",
          }}
        >
          <div className="w-2 h-2 rounded-full" style={{ background: "#1C1208" }} />
        </motion.div>
      </div>

      {/* RIGHT content */}
      <div className="flex-1 flex justify-start pl-10 md:pl-14">
        {isRight && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="text-left max-w-xs"
          >
            <span
              className="block font-['IM_Fell_English',serif] text-4xl md:text-5xl font-bold mb-1"
              style={{ color: "#D4A017" }}
            >
              {item.year}
            </span>
            <h3
              className="font-['Playfair_Display',serif] text-lg md:text-xl font-bold mb-2"
              style={{ color: "#F5ECD7" }}
            >
              {item.title}
            </h3>
            <p
              className="font-['Lato',sans-serif] text-sm leading-6 font-light"
              style={{ color: "#9C7A56" }}
            >
              {item.description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Story() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700&family=IM+Fell+English&display=swap');
      `}</style>

      {/* Scroll progress bar at top */}
      <ScrollProgress
        className="fixed top-0 left-0 z-50 h-[3px]"
        style={{ background: "linear-gradient(90deg, #D4A017, #8B3A2A)" }}
      />

      <section
        className="relative w-full min-h-screen py-24 overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #1C1208 0%, #2A1A0E 60%, #1C1208 100%)",
        }}
      >
        {/* Subtle grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <span
              className="inline-block font-['IM_Fell_English',serif] text-sm tracking-widest uppercase mb-4 px-4 py-1 rounded-full border"
              style={{ color: "#D4A017", borderColor: "rgba(212,160,23,0.3)" }}
            >
              Our Journey
            </span>
            <h1
              className="font-['Playfair_Display',serif] text-4xl md:text-6xl font-bold leading-tight"
              style={{ color: "#F5ECD7" }}
            >
              The Story of
              <br />
              <span style={{ color: "#D4A017" }}>Maithili Harvest</span>
            </h1>
            <p
              className="font-['Cormorant_Garamond',serif] text-lg italic mt-4 max-w-xl mx-auto leading-7"
              style={{ color: "#9C7A56" }}
            >
              From a single shop in Bihar to a registered agri-food startup —
              every milestone rooted in the soil of Mithila.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">

            {/* Vertical spine line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #8B3A2A 8%, #C8A97E 50%, #8B3A2A 92%, transparent)",
              }}
            />

            {/* Items */}
            <div className="flex flex-col gap-20 py-4">
              {milestones.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>

            {/* End dot */}
            <div className="flex justify-center mt-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #8B3A2A)",
                  boxShadow: "0 0 0 6px rgba(212,160,23,0.12), 0 0 30px rgba(212,160,23,0.3)",
                }}
              >
                🌾
              </motion.div>
            </div>
          </div>

          {/* Footer quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mt-20 px-4"
          >
            <div
              className="inline-block rounded-2xl px-8 py-6 max-w-xl"
              style={{
                background: "rgba(212,160,23,0.07)",
                border: "1px solid rgba(212,160,23,0.2)",
              }}
            >
              <p
                className="font-['Cormorant_Garamond',serif] text-lg italic leading-8"
                style={{ color: "#C8A97E" }}
              >
                "The soil of Mithila has fed generations. Our work is simply to
                carry that nourishment forward — with care, integrity, and pride."
              </p>
              <p
                className="font-['IM_Fell_English',serif] text-sm mt-3"
                style={{ color: "#8B3A2A" }}
              >
                — Amit Kumar, Founder
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}