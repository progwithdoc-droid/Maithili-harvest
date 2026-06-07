"use client";

import Link from "next/link";
import { motion } from "motion/react";
import TestimonialSection from "@/components/TestimonialSection";

const categories = [
  { label: "Spices & Condiments", icon: "🌶", desc: "Stone-ground, unadulterated, sourced direct from Mithila farms." },
  { label: "Rice & Grains", icon: "🌾", desc: "Heirloom varieties grown on the fertile plains of Darbhanga." },
  { label: "Oils & Ghee", icon: "🫙", desc: "Cold-pressed mustard oil and cultured ghee. Nothing added." },
  { label: "Sweets & Snacks", icon: "🍯", desc: "Traditional recipes — thekua, khaja — made the old way." },
];

const features = [
  { tag: "Traceability", title: "Know your source", body: "Every product is traceable back to the farmer, the field, and the season it was harvested." },
  { tag: "Standards", title: "FSSAI Certified", body: "Registered under India's food safety authority. Clean, tested, and safe for every kitchen." },
  { tag: "Authenticity", title: "Region-true recipes", body: "We work with local communities to preserve traditional preparation methods, not replicate them." },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--color-linen-white)" }}>

      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: "var(--color-deep-cacao)",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(196,164,106,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />

        <div className="section-container" style={{ position: "relative", zIndex: 1, paddingBlock: "5rem" }}>
          <div style={{ maxWidth: "740px" }}>

            <motion.p
              className="brand-tag"
              style={{ color: "var(--color-aged-gold)", marginBottom: "2rem" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Artisan Food from Mithila, Bihar
            </motion.p>

            <motion.h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                letterSpacing: "0.05em",
                color: "var(--color-ivory-cream)",
                lineHeight: 1.15,
                marginBottom: "2rem",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The harvest of Mithila,
              <br />
              <span style={{ color: "var(--color-warm-honey)" }}>
                in your kitchen.
              </span>
            </motion.h1>

            <motion.p
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 300,
                fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)",
                letterSpacing: "0.03em",
                lineHeight: 1.85,
                color: "rgba(196,164,106,0.8)",
                maxWidth: "520px",
                marginBottom: "3rem",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Carefully sourced, honestly processed, and thoughtfully packaged —
              traditional food products that carry the soul of Bihar's rich agricultural heritage.
            </motion.p>

            <motion.div
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom divider line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "0.5px",
            backgroundColor: "var(--color-rich-walnut)",
          }}
        />
      </section>

      {/* ── CATEGORIES ── */}
      <section
        style={{
          backgroundColor: "var(--color-linen-white)",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          borderBottom: "0.5px solid var(--color-border-gold)",
        }}
      >
        <div className="section-container">
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="brand-tag" style={{ marginBottom: "1rem" }}>
              What we offer
            </p>
            <h2
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 300,
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                letterSpacing: "0.03em",
                color: "var(--color-deep-cacao)",
                lineHeight: 1.25,
              }}
            >
              Curated categories, rooted in tradition.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              border: "0.5px solid var(--color-border-gold)",
            }}
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  padding: "2.5rem 2rem",
                  backgroundColor: "var(--color-linen-white)",
                  borderRight: "0.5px solid var(--color-border-gold)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  cursor: "pointer",
                  transition: "background-color 0.25s ease",
                }}
              >
                <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>{cat.icon}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "1.05rem",
                    letterSpacing: "0.03em",
                    color: "var(--color-deep-cacao)",
                    lineHeight: 1.3,
                  }}
                >
                  {cat.label}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                    letterSpacing: "0.04em",
                    lineHeight: 1.8,
                    color: "var(--color-text-muted)",
                  }}
                >
                  {cat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MAITHILI ── */}
      <section
        style={{
          backgroundColor: "var(--color-deep-cacao)",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          borderBottom: "0.5px solid var(--color-rich-walnut)",
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left heading */}
            <div>
              <p className="brand-tag" style={{ color: "var(--color-aged-gold)", marginBottom: "1.25rem" }}>
                Why Maithili Harvest
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontWeight: 300,
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  letterSpacing: "0.03em",
                  color: "var(--color-ivory-cream)",
                  lineHeight: 1.25,
                }}
              >
                Not mass-produced.
                <br />
                <span style={{ color: "var(--color-warm-honey)", fontStyle: "italic" }}>
                  Hand-curated.
                </span>
              </h2>
            </div>

            {/* Right features */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.tag}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{
                    padding: "2rem 0",
                    borderBottom: i < features.length - 1 ? "0.5px solid var(--color-rich-walnut)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  <p className="brand-tag" style={{ color: "var(--color-aged-gold)" }}>
                    {f.tag}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "1.1rem",
                      letterSpacing: "0.03em",
                      color: "var(--color-ivory-cream)",
                      lineHeight: 1.3,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      letterSpacing: "0.04em",
                      lineHeight: 1.85,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {f.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSection />

      {/* ── BOTTOM CTA ── */}
      <section
        style={{
          backgroundColor: "var(--color-ivory-cream)",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          borderTop: "0.5px solid var(--color-border-gold)",
          textAlign: "center",
        }}
      >
        <div className="section-container" style={{ maxWidth: "600px" }}>
          <p className="brand-tag" style={{ marginBottom: "1.5rem" }}>
            Begin your journey
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "0.04em",
              color: "var(--color-deep-cacao)",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
            }}
          >
            Taste the difference of food made with intention.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-editorial)",
              fontWeight: 300,
              fontSize: "1.05rem",
              fontStyle: "italic",
              letterSpacing: "0.03em",
              lineHeight: 1.8,
              color: "var(--color-spice-mahogany)",
              marginBottom: "2.5rem",
            }}
          >
            Every jar, packet, and bottle from Maithili Harvest is a direct
            connection to the soil and the people of Mithila.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/products" className="btn-primary">
              Shop All Products
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ color: "var(--color-spice-mahogany)", borderColor: "var(--color-spice-mahogany)" }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
