"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { MessageCircleMore, ArrowUpRight, Link2 } from "lucide-react";
import { SpinningText } from "@/components/motion-primitives/spinning-text";

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
  };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-linen-white)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="section-container">

        {/* ── Top: Badge + Headline + Intro ── */}
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr" }}>
          <Reveal direction="up">
            <p className="brand-tag" style={{ marginBottom: "1.5rem" }}>
              About the Founder
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "var(--color-deep-cacao)",
                lineHeight: 1.2,
                maxWidth: "640px",
              }}
            >
              Rooted in Mithila.
              <br />
              <span style={{ color: "var(--color-aged-gold)" }}>
                Built for the world.
              </span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.12}>
            <p
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 300,
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                letterSpacing: "0.03em",
                lineHeight: 1.8,
                color: "var(--color-spice-mahogany)",
                maxWidth: "560px",
              }}
            >
              We help people reconnect with the authentic tastes, aromas, and
              traditions of Mithila — through carefully sourced, processed, and
              packaged food products that carry the soul of Bihar's harvest culture.
            </p>
          </Reveal>
        </div>

        {/* ── Divider ── */}
        <Reveal direction="none" delay={0.1}>
          <hr className="brand-divider" style={{ margin: "4rem 0" }} />
        </Reveal>

        {/* ── Main 2-col grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "start",
          }}
        >

          {/* LEFT — Image column */}
          <Reveal direction="left" delay={0.05}>
            <div style={{ position: "relative" }}>

              {/* Spinning badge */}
              <div
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "-20px",
                  zIndex: 20,
                  display: "none",
                }}
                className="md:block"
              >
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <SpinningText
                    radius={7}
                    fontSize={0.85}
                    className="font-body"
                    style={{ color: "var(--color-aged-gold)" }}
                  >
                    {` FOUNDER • AGRI-ENTREPRENEUR • MITHILA HARVEST • `}
                  </SpinningText>
                  <div
                    style={{
                      position: "absolute",
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "var(--color-linen-white)",
                      border: "0.5px solid var(--color-warm-honey)",
                    }}
                  >
                    <Image src="/logo.svg" alt="Maithili Harvest" width={26} height={26} />
                  </div>
                </div>
              </div>

              {/* Profile image */}
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "12px",
                  border: "0.5px solid var(--color-border-gold)",
                }}
              >
                <Image
                  src="/about/man-image.svg"
                  alt="Amit Kumar — Founder, Maithili Harvest"
                  width={700}
                  height={800}
                  style={{ display: "block", width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>

              {/* Partnership badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--color-linen-white)",
                  border: "0.5px solid var(--color-border-gold)",
                  padding: "10px 20px",
                  whiteSpace: "nowrap",
                  borderRadius: "4px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "var(--color-forest-herb)",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-aged-gold)",
                    }}
                  >
                    Open to Partnerships
                  </span>
                </div>
              </div>
            </div>

            {/* Name + role + social */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    color: "var(--color-deep-cacao)",
                    lineHeight: 1.2,
                  }}
                >
                  Amit Kumar
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontWeight: 300,
                    fontSize: "1rem",
                    fontStyle: "italic",
                    letterSpacing: "0.03em",
                    color: "var(--color-spice-mahogany)",
                    marginTop: "4px",
                  }}
                >
                  Founder, Maithili Harvest Pvt. Ltd.
                </p>

                {/* Tags */}
                <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
                  {["Agri-Entrepreneur", "Est. Feb 2026"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--color-ivory-cream)",
                        backgroundColor: "var(--color-spice-mahogany)",
                        padding: "5px 14px",
                        borderRadius: "2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                {[
                  { href: "https://www.instagram.com/maithiliharvest", icon: <MessageCircleMore size={18} />, label: "Instagram" },
                  { href: "https://in.linkedin.com/in/amit-kumar-6a23a5184", icon: <ArrowUpRight size={18} />, label: "LinkedIn" },
                  { href: "https://maithiliharvest.com", icon: <Link2 size={18} />, label: "Website" },
                ].map(({ href, icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      border: "0.5px solid var(--color-border-gold)",
                      color: "var(--color-aged-gold)",
                      transition: "border-color 0.2s ease, color 0.2s ease",
                      textDecoration: "none",
                    }}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Text column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            <Reveal direction="right" delay={0.1}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  lineHeight: 1.9,
                  color: "var(--color-text-primary)",
                }}
              >
                <span style={{ color: "var(--color-spice-mahogany)", fontWeight: 400 }}>
                  Maithili Harvest isn't just a business — it's a mission.
                </span>{" "}
                What began as a deep respect for Bihar's agricultural roots grew into a
                registered food and agri-startup, incorporated in February 2026, dedicated
                to bringing the finest traditional and regional products to modern markets.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.18}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  lineHeight: 1.9,
                  color: "var(--color-text-primary)",
                }}
              >
                <span style={{ color: "var(--color-spice-mahogany)", fontWeight: 400 }}>
                  Amit has built this brand from the ground up —
                </span>{" "}
                navigating import-export licensing, FSSAI food safety registrations, and
                e-commerce packaging standards firsthand. Every product on our shelf carries
                his personal commitment to authenticity, quality, and fair sourcing.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.26}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  lineHeight: 1.9,
                  color: "var(--color-text-primary)",
                }}
              >
                <span style={{ color: "var(--color-spice-mahogany)", fontWeight: 400 }}>
                  From hand-picked spices to exotic indoor plants —
                </span>{" "}
                Maithili Harvest is expanding what "local food" can mean. We believe the
                harvest of Mithila deserves a place in every Indian kitchen, and far beyond.
              </p>
            </Reveal>

            <Reveal direction="none" delay={0.3}>
              <hr className="brand-divider" />
            </Reveal>

            {/* Quote block */}
            <Reveal direction="up" delay={0.35}>
              <div
                style={{
                  padding: "1.75rem 2rem",
                  borderLeft: "2px solid var(--color-warm-honey)",
                  backgroundColor: "var(--color-ivory-cream)",
                  borderRadius: "0 4px 4px 0",
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
                    color: "var(--color-spice-mahogany)",
                  }}
                >
                  "The soil of Mithila has fed generations. Our work is simply to carry that
                  nourishment forward — with care, integrity, and pride."
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-aged-gold)",
                    marginTop: "1rem",
                  }}
                >
                  — Amit Kumar, Founder
                </p>
              </div>
            </Reveal>

            {/* Signature */}
            <Reveal direction="up" delay={0.42}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Image
                  src="/about/signature.svg"
                  alt="Amit Kumar Signature"
                  width={200}
                  height={90}
                  style={{ objectFit: "contain", opacity: 0.55 }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}