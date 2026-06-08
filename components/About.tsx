"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { SpinningText } from "@/components/motion-primitives/spinning-text";

// ── Highlight components ────────────────────────────────────────────────────

function HlHarvest({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background:
          "linear-gradient(120deg, rgba(184,137,75,0.18) 0%, rgba(184,137,75,0.07) 100%)",
        borderBottom: "1.5px solid var(--color-aged-gold)",
        paddingInline: "2px",
        color: "var(--color-spice-mahogany)",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

function HlName({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background:
          "linear-gradient(120deg, rgba(106,54,25,0.13) 0%, rgba(106,54,25,0.05) 100%)",
        borderBottom: "1.5px solid rgba(106,54,25,0.55)",
        paddingInline: "2px",
        color: "var(--color-deep-cacao)",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

// ── Scroll-reveal wrapper ───────────────────────────────────────────────────

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

// ── Social links data ───────────────────────────────────────────────────────
// Icons are served from public/icons/ — update filenames to match your actual files.
// Common conventions: instagram.png / instagram.svg, linkedin.png / linkedin.svg, website.png / globe.svg

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/startupwithamit.in/",
    icon: "/icons/instagram.png",   // ← update filename if different
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/amitkumar1009/",
    icon: "/icons/linkedin.png",    // ← update filename if different
    label: "LinkedIn",
  },
  {
    href: "https://maithiliharvest.com",
    icon: "/icons/website.png",     // ← update filename if different (globe.png, web.png, etc.)
    label: "Website",
  },
];

// ── Page component ──────────────────────────────────────────────────────────

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
              Reconnecting India — and the world — with the authentic tastes,
              aromas, and traditions of Mithila through carefully sourced,
              ethically processed, and artisanally packaged food products that
              carry the living soul of Bihar's harvest culture.
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
                  left: "-36px",
                  top: "-36px",
                  zIndex: 30,
                  display: "block",
                }}
                className="hidden md:block"
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 96,
                    height: 96,
                  }}
                >
                  <SpinningText
                    radius={5.6}
                    fontSize={0.72}
                    className="font-body"
                    style={{ color: "var(--color-aged-gold)", opacity: 0.95 }}
                  >
                    {` FOUNDER • AMIT KUMAR • MITHILA HARVEST • `}
                  </SpinningText>
                  <div
                    style={{
                      position: "absolute",
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(180deg, rgba(255,250,243,0.96), rgba(247,244,238,0.92))",
                      border: "1px solid rgba(184,137,75,0.35)",
                      boxShadow: "0 14px 32px rgba(17,24,39,0.08)",
                    }}
                  >
                    <Image
                      src="/logo.jpg"
                      alt="Maithili Harvest"
                      width={26}
                      height={26}
                    />
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
                  src="/about/man-image.jpg"
                  alt="Amit Kumar — Founder, Maithili Harvest"
                  width={700}
                  height={800}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
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
                {/* Highlighted founder name */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                  }}
                >
                  <HlName>Amit Kumar</HlName>
                </h3>

                {/* Highlighted brand name */}
                <p
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontWeight: 300,
                    fontSize: "1rem",
                    fontStyle: "italic",
                    letterSpacing: "0.03em",
                    color: "var(--color-spice-mahogany)",
                    marginTop: "6px",
                  }}
                >
                  Founder &amp; Director,{" "}
                  <HlHarvest>Maithili Harvest</HlHarvest> Pvt. Ltd.
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "12px",
                    flexWrap: "wrap",
                  }}
                >
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

              {/* ── Social links using public/icons images ── */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                {SOCIAL_LINKS.map(({ href, icon, label }) => (
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
                      borderRadius: "4px",
                      transition: "border-color 0.2s ease, background 0.2s ease",
                      textDecoration: "none",
                    }}
                  >
                    <Image
                      src={icon}
                      alt={label}
                      width={18}
                      height={18}
                      style={{ objectFit: "contain" }}
                    />
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
                  <HlHarvest>Maithili Harvest</HlHarvest> is more than a
                  business — it is a calling.
                </span>{" "}
                What began as a deep reverence for Bihar's ancient agricultural
                traditions has grown into a formally registered food and
                agri-startup, incorporated in February 2026, dedicated to
                bringing the finest traditional and regional products to modern
                Indian and global markets.
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
                  <HlName>Amit Kumar</HlName> has built this brand entirely
                  from the ground up —
                </span>{" "}
                navigating the full arc of compliance firsthand: import-export
                licensing (IEC), FSSAI food safety registrations, and
                e-commerce packaging standards. Every product on the shelf
                carries his personal commitment to authenticity, quality, and
                fair sourcing directly from local Mithila farmers.
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
                  From hand-selected indigenous spices to exotic indoor plants —
                </span>{" "}
                <HlHarvest>Maithili Harvest</HlHarvest> is actively expanding
                what "local food" can mean at scale. The mission is clear: the
                harvest of Mithila deserves a place in every Indian kitchen, and
                in homes far beyond.
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
                  "The soil of Mithila has nourished generations. Our work is
                  simply to carry that nourishment forward — with integrity,
                  care, and enduring pride in where we come from."
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
                  — <HlName>Amit Kumar</HlName>, Founder
                </p>
              </div>
            </Reveal>

            {/* Signature */}
            <Reveal direction="up" delay={0.42}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Image
                  src="/about/signature.png"
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