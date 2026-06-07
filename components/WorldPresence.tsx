"use client";

import WorldMap from "@/components/ui/world-map";

/**
 * Reusable WorldPresence section.
 * Wraps the Aceternity WorldMap with brand-styled heading + copy.
 * Pass `variant="dark"` for sections on dark backgrounds.
 */
export default function WorldPresence({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  /* Connection arcs: Darbhanga (origin) → major global cities */
  const dots = [
    // Darbhanga → Delhi
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 28.61, lng: 77.21, label: "Delhi" } },
    // Darbhanga → Mumbai
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 19.08, lng: 72.88, label: "Mumbai" } },
    // Darbhanga → London
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 51.51, lng: -0.13, label: "London" } },
    // Darbhanga → New York
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 40.71, lng: -74.01, label: "New York" } },
    // Darbhanga → Dubai
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 25.2, lng: 55.27, label: "Dubai" } },
    // Darbhanga → Singapore
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 1.35, lng: 103.82, label: "Singapore" } },
    // Darbhanga → Sydney
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: -33.87, lng: 151.21, label: "Sydney" } },
    // Darbhanga → Toronto
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 43.65, lng: -79.38, label: "Toronto" } },
  ];

  return (
    <section
      style={{
        backgroundColor: isDark ? "var(--color-deep-cacao)" : "var(--color-ivory-cream)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: isDark
          ? "0.5px solid var(--color-rich-walnut)"
          : "0.5px solid var(--color-border-gold)",
        borderBottom: isDark
          ? "0.5px solid var(--color-rich-walnut)"
          : "0.5px solid var(--color-border-gold)",
      }}
    >
      <div className="section-container">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            className="brand-tag"
            style={{
              marginBottom: "1rem",
              color: isDark ? "var(--color-aged-gold)" : "var(--color-aged-gold)",
            }}
          >
            Global Reach
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "0.05em",
              color: isDark ? "var(--color-ivory-cream)" : "var(--color-deep-cacao)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            We Are Available All Around the World
          </h2>
          <p
            style={{
              fontFamily: "var(--font-editorial)",
              fontWeight: 300,
              fontSize: "1.05rem",
              fontStyle: "italic",
              letterSpacing: "0.03em",
              lineHeight: 1.8,
              color: isDark ? "rgba(196,164,106,0.7)" : "var(--color-spice-mahogany)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            From the fertile plains of Darbhanga, Bihar — our products travel to
            kitchens, restaurants, and pantries across continents. The taste of
            Mithila, wherever you are.
          </p>
        </div>

        {/* Map */}
        <div
          style={{
            border: isDark
              ? "0.5px solid rgba(196,164,106,0.12)"
              : "0.5px solid var(--color-border-gold)",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: isDark ? "var(--color-rich-walnut)" : "var(--color-linen-white)",
          }}
        >
          <WorldMap
            dots={dots}
            lineColor={isDark ? "#C4A46A" : "#9A7B50"}
          />
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "0",
            marginTop: "3rem",
            borderTop: isDark
              ? "0.5px solid var(--color-rich-walnut)"
              : "0.5px solid var(--color-border-gold)",
            borderLeft: isDark
              ? "0.5px solid var(--color-rich-walnut)"
              : "0.5px solid var(--color-border-gold)",
          }}
        >
          {[
            { value: "8+", label: "Countries" },
            { value: "25+", label: "Cities" },
            { value: "500+", label: "Happy Customers" },
            { value: "100%", label: "Authentic Sourcing" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "1.75rem 1rem",
                borderRight: isDark
                  ? "0.5px solid var(--color-rich-walnut)"
                  : "0.5px solid var(--color-border-gold)",
                borderBottom: isDark
                  ? "0.5px solid var(--color-rich-walnut)"
                  : "0.5px solid var(--color-border-gold)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(1.6rem, 3vw, 2rem)",
                  letterSpacing: "0.04em",
                  color: isDark ? "var(--color-warm-honey)" : "var(--color-aged-gold)",
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
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isDark ? "var(--color-text-muted)" : "var(--color-text-muted)",
                  marginTop: "0.5rem",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
