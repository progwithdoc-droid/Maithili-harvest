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
      "Expanded into food delivery by partnering with Zomato and Swiggy — an early validation of market appetite for authentic regional food.",
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

function TimelineCard({
  item,
  align,
}: {
  item: (typeof milestones)[0];
  align: "left" | "right";
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-rich-walnut)",
        border: "0.5px solid rgba(196,164,106,0.15)",
        borderRadius: "12px",
        padding: "1.5rem 1.75rem",
        textAlign: align,
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: "var(--color-warm-honey)",
          lineHeight: 1,
          marginBottom: "0.5rem",
        }}
      >
        {item.year}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          fontWeight: 400,
          letterSpacing: "0.03em",
          color: "var(--color-ivory-cream)",
          marginBottom: "0.75rem",
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "0.875rem",
          letterSpacing: "0.04em",
          lineHeight: 1.8,
          color: "var(--color-text-muted)",
        }}
      >
        {item.description}
      </p>
    </div>
  );
}

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

  const initial = { opacity: 0, x: isRight ? 50 : -50, y: 16 };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Left slot */}
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", paddingRight: "2.5rem" }}>
        {!isRight && (
          <motion.div
            initial={initial}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + index * 0.05 }}
            style={{ maxWidth: "280px", width: "100%" }}
          >
            <TimelineCard item={item} align="right" />
          </motion.div>
        )}
      </div>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.05 + index * 0.05, type: "spring", stiffness: 240, damping: 22 }}
        style={{
          flexShrink: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          backgroundColor: "var(--color-warm-honey)",
          border: "0.5px solid rgba(196,164,106,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          fontSize: "0.9rem",
        }}
      >
        {item.icon}
      </motion.div>

      {/* Right slot */}
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", paddingLeft: "2.5rem" }}>
        {isRight && (
          <motion.div
            initial={initial}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + index * 0.05 }}
            style={{ maxWidth: "280px", width: "100%" }}
          >
            <TimelineCard item={item} align="left" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function AnimatedSpine({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: "0.5px",
        transform: "translateX(-50%)",
        transformOrigin: "top",
        backgroundColor: "var(--color-rich-walnut)",
        scaleY,
      }}
    />
  );
}

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <ScrollProgress
        className="fixed top-[72px] left-0 z-40 h-[2px]"
        style={{ backgroundColor: "var(--color-warm-honey)" }}
      />

      <section
        ref={sectionRef}
        style={{
          backgroundColor: "var(--color-deep-cacao)",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="section-container">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: "5rem" }}
          >
            <p className="brand-tag" style={{ marginBottom: "1.5rem" }}>
              Our Journey
            </p>
            <h2
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                letterSpacing: "0.03em",
                color: "var(--color-ivory-cream)",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              The Story of{" "}
              <span style={{ color: "var(--color-warm-honey)" }}>
                Maithili Harvest
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 300,
                fontSize: "1.1rem",
                fontStyle: "italic",
                letterSpacing: "0.03em",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                maxWidth: "480px",
                margin: "0 auto 2rem",
              }}
            >
              From a single shop in Bihar to a registered agri-food startup —
              every milestone rooted in the soil of Mithila.
            </p>

            {/* Divider ornament */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "80px",
                  height: "0.5px",
                  backgroundColor: "var(--color-rich-walnut)",
                }}
              />
              <span style={{ color: "var(--color-warm-honey)", fontSize: "1rem" }}>🌾</span>
              <div
                style={{
                  width: "80px",
                  height: "0.5px",
                  backgroundColor: "var(--color-rich-walnut)",
                }}
              />
            </div>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            <AnimatedSpine sectionRef={sectionRef} />
            <div style={{ display: "flex", flexDirection: "column", gap: "4rem", paddingBlock: "1rem" }}>
              {milestones.map((item, i) => (
                <TimelineItem key={item.year} item={item} index={i} />
              ))}
            </div>

            {/* End glyph */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-warm-honey)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                🌾
              </motion.div>
            </div>
          </div>

          {/* Footer quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: "center", marginTop: "5rem" }}
          >
            <div
              style={{
                display: "inline-block",
                borderRadius: "12px",
                padding: "2rem 2.5rem",
                maxWidth: "520px",
                backgroundColor: "var(--color-rich-walnut)",
                border: "0.5px solid rgba(196,164,106,0.15)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontWeight: 300,
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  letterSpacing: "0.03em",
                  lineHeight: 1.8,
                  color: "var(--color-ivory-cream)",
                }}
              >
                "The soil of Mithila has fed generations. Our work is simply to
                carry that nourishment forward — with care, integrity, and pride."
              </p>
              <p
                className="brand-tag"
                style={{ marginTop: "1rem", color: "var(--color-warm-honey)" }}
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