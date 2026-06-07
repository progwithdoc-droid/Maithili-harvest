"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Home Chef & Food Blogger",
    company: "Rasoi Se Dil Tak",
    avatar: "/testimonials/priya.svg",
    review:
      "The mustard oil and thekua mix from Maithili Harvest brought back memories of my nani's kitchen in Darbhanga. Genuinely authentic — you can taste the difference from supermarket brands.",
  },
  {
    id: 2,
    name: "Rajesh Jha",
    role: "Restaurant Owner",
    company: "Mithila Bhoj, Patna",
    avatar: "/testimonials/rajesh.svg",
    review:
      "We source our spices and organic rice exclusively from Maithili Harvest. The quality is consistent, packaging is clean, and Amit personally ensures every batch meets standard.",
  },
  {
    id: 3,
    name: "Ananya Mishra",
    role: "Nutritionist & Wellness Coach",
    company: "Sattvik Living",
    avatar: "/testimonials/ananya.svg",
    review:
      "I recommend Maithili Harvest to all my clients looking for unprocessed, region-authentic food. Their products are traceable, fresh, and free from unnecessary additives.",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "var(--color-linen-white)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: "0.5px solid var(--color-border-gold)",
      }}
    >
      <div className="section-container">

        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
            marginBottom: "4.5rem",
            alignItems: "end",
          }}
        >
          <div>
            <p className="brand-tag" style={{ marginBottom: "1.25rem" }}>
              Testimonials
            </p>
            <h2
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 300,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "0.03em",
                color: "var(--color-deep-cacao)",
                lineHeight: 1.25,
              }}
            >
              Trusted by those who{" "}
              <span style={{ color: "var(--color-aged-gold)", fontStyle: "italic" }}>
                value authenticity.
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.95rem",
              letterSpacing: "0.04em",
              lineHeight: 1.85,
              color: "var(--color-text-muted)",
              maxWidth: "400px",
            }}
          >
            From home cooks to restaurant owners — people across India trust
            Maithili Harvest for its uncompromising quality and regional authenticity.
          </p>
        </div>

        {/* Stats + Card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left — stats */}
          <div>
            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderTop: "0.5px solid var(--color-border-gold)",
                borderBottom: "0.5px solid var(--color-border-gold)",
                marginBottom: "3rem",
              }}
            >
              {[
                { value: "100+", label: "Happy Clients" },
                { value: "₹5Cr+", label: "Products Sourced" },
                { value: "4.9", label: "Avg. Rating" },
              ].map((stat, i, arr) => (
                <div
                  key={stat.label}
                  style={{
                    textAlign: "center",
                    padding: "1.75rem 0.5rem",
                    borderRight: i < arr.length - 1 ? "0.5px solid var(--color-border-gold)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      letterSpacing: "0.03em",
                      color: "var(--color-deep-cacao)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginTop: "0.5rem",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "2rem" }}>
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: "4px",
                    backgroundColor: i === active
                      ? "var(--color-warm-honey)"
                      : "var(--color-border-gold)",
                    border: "none",
                    cursor: "pointer",
                    transition: "width 0.3s ease, background-color 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 300,
                fontSize: "0.95rem",
                fontStyle: "italic",
                letterSpacing: "0.03em",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
              }}
            >
              "Every product tells a story of careful hands, honest soil,<br />
              and generations of knowledge."
            </p>
          </div>

          {/* Right — animated card stack */}
          <div style={{ position: "relative", height: "320px" }}>
            {/* Background card 2 */}
            <div
              style={{
                position: "absolute",
                inset: "0 0.5rem",
                top: "8px",
                borderRadius: "12px",
                border: "0.5px solid var(--color-border-gold)",
                backgroundColor: "var(--color-ivory-cream)",
                opacity: 0.5,
              }}
            />
            {/* Background card 1 */}
            <div
              style={{
                position: "absolute",
                inset: "0 1rem",
                top: "16px",
                borderRadius: "12px",
                border: "0.5px solid var(--color-border-gold)",
                backgroundColor: "var(--color-ivory-cream)",
                opacity: 0.3,
              }}
            />

            {/* Animated main card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ position: "absolute", inset: 0 }}
              >
                <TestimonialCard testimonial={testimonials[active]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}