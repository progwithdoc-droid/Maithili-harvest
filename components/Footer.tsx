"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/maithiliharvest" },
  { label: "LinkedIn", href: "https://in.linkedin.com/in/amit-kumar-6a23a5184" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX" },
];

const contactItems = [
  { Icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
  { Icon: Mail, label: "Email", value: "hello@maithiliharvest.com" },
  { Icon: MapPin, label: "Location", value: "Darbhanga, Bihar, India" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <footer style={{ backgroundColor: "var(--color-deep-cacao)" }}>

      {/* ── Top divider ── */}
      <div className="brand-divider--dark" style={{ borderTop: "0.5px solid var(--color-rich-walnut)" }} />

      {/* ── CTA banner ── */}
      <div
        style={{
          borderBottom: "0.5px solid var(--color-rich-walnut)",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          className="section-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
            <p className="brand-tag" style={{ color: "var(--color-aged-gold)" }}>
              Taste Mithila
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "0.04em",
                color: "var(--color-ivory-cream)",
                lineHeight: 1.2,
              }}
            >
              Ready to taste the heart of Mithila?
            </h2>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/products" className="btn-primary">
              Shop Now
            </Link>
            <Link href="/about" className="btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div
        className="section-container"
        style={{ padding: "4rem 1.5rem", position: "relative", overflow: "hidden" }}
      >
        {/* Watermark brand name */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(4rem, 10vw, 9rem)",
            letterSpacing: "0.04em",
            color: "var(--color-ivory-cream)",
            opacity: 0.03,
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          Maithili Harvest
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "3rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "1.2rem",
                letterSpacing: "0.04em",
                color: "var(--color-ivory-cream)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>🌾</span>
              Maithili Harvest
            </Link>
            <p
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 300,
                fontSize: "0.9rem",
                fontStyle: "italic",
                letterSpacing: "0.03em",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                maxWidth: "220px",
              }}
            >
              From the soil of Mithila to your kitchen — authentic flavours, honest sourcing.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { label: "IG", href: "https://www.instagram.com/maithiliharvest" },
                { label: "IN", href: "https://in.linkedin.com/in/amit-kumar-6a23a5184" },
                { label: "YT", href: "https://youtube.com" },
              ].map(({ label, href }) => (
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
                    width: 34,
                    height: 34,
                    border: "0.5px solid rgba(196,164,106,0.2)",
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="brand-tag" style={{ color: "var(--color-aged-gold)", marginBottom: "1.25rem" }}>
              Quick Links
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      letterSpacing: "0.05em",
                      color: "var(--color-text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="brand-tag" style={{ color: "var(--color-aged-gold)", marginBottom: "1.25rem" }}>
              Socials
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      letterSpacing: "0.05em",
                      color: "var(--color-text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="brand-tag" style={{ color: "var(--color-aged-gold)", marginBottom: "1.25rem" }}>
              Stay Updated
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                marginBottom: "1rem",
              }}
            >
              Harvest updates, new arrivals &amp; seasonal recipes in your inbox.
            </p>
            {sent ? (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  color: "var(--color-warm-honey)",
                }}
              >
                Thank you — we'll be in touch.
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <input
                  type="email"
                  className="brand-input brand-input--dark"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                />
                <button
                  onClick={handleSubscribe}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "12px 20px" }}
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Contact bar ── */}
      <div style={{ borderTop: "0.5px solid var(--color-rich-walnut)" }}>
        <div
          className="section-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            padding: "2.5rem 1.5rem",
          }}
        >
          {contactItems.map(({ Icon, label, value }) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  flexShrink: 0,
                  border: "0.5px solid rgba(196,164,106,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-aged-gold)",
                }}
              >
                <Icon size={16} />
              </div>
              <div>
                <p className="brand-tag" style={{ color: "var(--color-aged-gold)", marginBottom: "2px" }}>
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                    letterSpacing: "0.04em",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "0.5px solid var(--color-rich-walnut)" }}>
        <div
          className="section-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1.5rem",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: "0.75rem" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "rgba(138,117,96,0.6)",
              }}
            >
              © 2026 Maithili Harvest Pvt. Ltd. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "rgba(138,117,96,0.6)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}