"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "motion/react";
import { ScrollProgress } from "@/components/motion-primitives/scroll-progress";

const milestones = [
  {
    year: "2020",
    title: "Started the Shop",
    description:
      "Amit Kumar took his first step into entrepreneurship — opening a small retail shop rooted in the spirit of Mithila's local trade culture.",
    side: "right",
    icon: "🛒",
  },
  {
    year: "2021",
    title: "BCA Foundation",
    description:
      "Laid the academic and strategic foundation with a BCA degree, sharpening the vision for a modern, tech-enabled agri-business.",
    side: "left",
    icon: "🎓",
  },
  {
    year: "2022",
    title: "Zomato & Swiggy Onboarding",
    description:
      "Expanded into food delivery by partnering with Zomato and Swiggy — an early validation of the market appetite for authentic regional food.",
    side: "right",
    icon: "🍱",
  },
  {
    year: "2024",
    title: "Corporate & Client Work",
    description:
      "Began working with corporate clients and B2B partners, building the operational backbone and supply chain expertise needed to scale.",
    side: "left",
    icon: "🤝",
  },
  {
    year: "2026",
    title: "Foundation of Maithili Harvest",
    description:
      "Maithili Harvest Private Limited was officially incorporated — a proud milestone to bring the authentic harvest of Mithila to kitchens across India and beyond.",
    side: "right",
    icon: "🌾",
  },
];

/* ── Single timeline card ── */
function TimelineItem({
  item,
  index,
}: {
  item: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isRight = item.side === "right";

  const initial = {
    opacity: 0,
    x: isRight ? 70 : -70,
    y: 20,
  };

  return (
    <div ref={ref} className="relative flex items-center w-full">

      {/* LEFT content */}
      <div className="flex-1 flex justify-end pr-10 md:pr-16">
        {!isRight && (
          <motion.div
            initial={initial}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
            transition={{
              duration: 0.75,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.15 + index * 0.05,
            }}
            className="text-right max-w-xs"
          >
            <CardContent item={item} align="right" />
          </motion.div>
        )}
      </div>

      {/* Center node */}
      <div className="relative flex flex-col items-center z-10 shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.05 + index * 0.05, type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center justify-center rounded-full text-base"
          style={{
            width: 40,
            height: 40,
            background: "linear-gradient(135deg, #D4A017, #8B3A2A)",
            boxShadow: "0 0 0 6px rgba(212,160,23,0.15), 0 0 24px rgba(212,160,23,0.3)",
            border: "2px solid rgba(212,160,23,0.5)",
          }}
        >
          <span style={{ fontSize: "1rem", lineHeight: 1 }}>{item.icon}</span>
        </motion.div>
      </div>

      {/* RIGHT content */}
      <div className="flex-1 flex justify-start pl-10 md:pl-16">
        {isRight && (
          <motion.div
            initial={initial}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
            transition={{
              duration: 0.75,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.15 + index * 0.05,
            }}
            className="text-left max-w-xs"
          >
            <CardContent item={item} align="left" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function CardContent({
  item,
  align,
}: {
  item: (typeof milestones)[0];
  align: "left" | "right";
}) {
  return (
    <div
      className="rounded-2xl px-5 py-4"
      style={{
        background: "rgba(212,160,23,0.06)",
        border: "1px solid rgba(212,160,23,0.18)",
        textAlign: align,
      }}
    >
      <span
        className="block font-bold mb-1"
        style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#D4A017",
          lineHeight: 1,
        }}
      >
        {item.year}
      </span>
      <h3
        className="font-bold mb-2 text-lg md:text-xl"
        style={{ fontFamily: "'Playfair Display', serif", color: "#F5ECD7" }}
      >
        {item.title}
      </h3>
      <p
        className="text-sm leading-6 font-light"
        style={{ fontFamily: "'Lato', sans-serif", color: "#9C7A56" }}
      >
        {item.description}
      </p>
    </div>
  );
}

/* ── Animated vertical spine ── */
function AnimatedSpine({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 origin-top"
      style={{
        background:
          "linear-gradient(to bottom, transparent, #8B3A2A 8%, #C8A97E 50%, #D4A017 92%, transparent)",
        scaleY,
      }}
    />
  );
}

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700&family=IM+Fell+English&display=swap');
      `}</style>

      {/* Page-level scroll progress bar at the very top */}
      <ScrollProgress
        className="fixed top-[72px] left-0 z-40 h-[3px]"
        style={{ background: "linear-gradient(90deg, #D4A017, #8B3A2A)" }}
      />

      <section
        ref={sectionRef}
        className="relative w-full min-h-screen py-28 overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #1C1208 0%, #2A1A0E 60%, #1C1208 100%)",
        }}
      >
        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Decorative glow orbs */}
        <div
          className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #D4A017, transparent)" }}
        />
        <div
          className="pointer-events-none absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, #8B3A2A, transparent)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <span
              className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
              style={{
                fontFamily: "'IM Fell English', serif",
                color: "#D4A017",
                borderColor: "rgba(212,160,23,0.35)",
                background: "rgba(212,160,23,0.07)",
              }}
            >
              Our Journey
            </span>
            <h2
              className="text-4xl md:text-6xl font-bold leading-tight mt-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F5ECD7",
              }}
            >
              The Story of
              <br />
              <span style={{ color: "#D4A017" }}>Maithili Harvest</span>
            </h2>
            <p
              className="text-lg italic mt-5 max-w-xl mx-auto leading-7"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#9C7A56",
              }}
            >
              From a single shop in Bihar to a registered agri-food startup —
              every milestone rooted in the soil of Mithila.
            </p>

            {/* Decorative wheat divider */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-24 opacity-30" style={{ background: "linear-gradient(90deg, transparent, #D4A017)" }} />
              <span style={{ color: "#D4A017", opacity: 0.6 }}>🌾</span>
              <div className="h-px w-24 opacity-30" style={{ background: "linear-gradient(90deg, #D4A017, transparent)" }} />
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">

            {/* Animated vertical spine */}
            <AnimatedSpine sectionRef={sectionRef} />

            {/* Items */}
            <div className="flex flex-col gap-20 py-6">
              {milestones.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>

            {/* End glyph */}
            <div className="flex justify-center mt-8">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #8B3A2A)",
                  boxShadow:
                    "0 0 0 8px rgba(212,160,23,0.12), 0 0 40px rgba(212,160,23,0.35)",
                }}
              >
                🌾
              </motion.div>
            </div>
          </div>

          {/* Footer quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mt-24 px-4"
          >
            <div
              className="inline-block rounded-2xl px-8 py-7 max-w-xl"
              style={{
                background: "rgba(212,160,23,0.07)",
                border: "1px solid rgba(212,160,23,0.2)",
                boxShadow: "inset 0 1px 0 rgba(212,160,23,0.15)",
              }}
            >
              <p
                className="text-lg italic leading-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C8A97E" }}
              >
                "The soil of Mithila has fed generations. Our work is simply to
                carry that nourishment forward — with care, integrity, and pride."
              </p>
              <p
                className="text-sm mt-4"
                style={{ fontFamily: "'IM Fell English', serif", color: "#8B3A2A" }}
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