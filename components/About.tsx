"use client";

import Image from "next/image";
import Link from "next/link";

import { MessageCircleMore, ArrowUpRight, Link2 } from "lucide-react";

import { SpinningText } from "@/components/motion-primitives/spinning-text";

export default function About() {
  return (
    <section
      className="w-full py-20"
      style={{
        background: "linear-gradient(160deg, #F5ECD7 0%, #FAF3E4 60%, #F0E2C4 100%)",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Lato:wght@300;400;700&family=IM+Fell+English:ital@0;1&display=swap');

        .mh-display {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .mh-subheading {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .mh-body {
          font-family: 'Lato', sans-serif;
        }
        .mh-label {
          font-family: 'IM Fell English', Georgia, serif;
        }

        .mh-badge {
          border: 1px solid #8B3A2A;
          color: #8B3A2A;
          background: transparent;
          font-family: 'IM Fell English', serif;
          letter-spacing: 0.04em;
        }

        .mh-divider {
          border-color: #C8A97E;
          opacity: 0.5;
        }

        .mh-available-badge {
          background: #fff8ee;
          border: 1px solid #D4A017;
          box-shadow: 0 4px 24px rgba(212,160,23,0.13);
        }

        .mh-social-link {
          color: #8B3A2A;
          transition: color 0.2s, transform 0.2s;
        }
        .mh-social-link:hover {
          color: #D4A017;
          transform: scale(1.18);
        }

        .mh-accent-line {
          display: inline-block;
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #D4A017, #8B3A2A);
          border-radius: 2px;
          margin-bottom: 6px;
          vertical-align: middle;
          margin-right: 10px;
        }

        .mh-grain-overlay {
          position: relative;
        }
        .mh-grain-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          border-radius: inherit;
          z-index: 1;
          opacity: 0.35;
        }

        .mh-para-highlight {
          color: #8B3A2A;
          font-weight: 700;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.08em;
        }

        .mh-quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          line-height: 0.8;
          color: #D4A017;
          opacity: 0.25;
          display: block;
          margin-bottom: -1.5rem;
          user-select: none;
        }

        .mh-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #8B3A2A;
          color: #F5ECD7;
          font-family: 'IM Fell English', serif;
          font-size: 0.78rem;
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6">

        {/* ── Top Section ── */}
        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <span className="mh-badge inline-flex rounded-full px-4 py-1 text-sm">
              About the Founder
            </span>

            <h1
              className="mh-display mt-6 text-4xl font-bold leading-tight md:text-6xl"
              style={{ color: "#1C1208" }}
            >
              Rooted in Mithila.
              <br />
              <span style={{ color: "#8B3A2A" }}>Built for the world.</span>{" "}
              <span style={{ fontSize: "0.85em" }}>🌾</span>
            </h1>
          </div>

          <div className="flex items-center">
            <p
              className="mh-body max-w-xl text-lg leading-8"
              style={{ color: "#5C3D1E" }}
            >
              We help people reconnect with the authentic tastes, aromas, and
              traditions of Mithila — through carefully sourced, processed, and
              packaged food products that carry the soul of Bihar's harvest
              culture.
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mh-divider my-14 border-t" />

        {/* ── Main Content ── */}
        <div className="grid gap-16 lg:grid-cols-2">

          {/* ── LEFT SIDE ── */}
          <div>
            <div className="relative">

              {/* Spinning Badge */}
              <div className="absolute -left-6 -top-6 z-20 hidden md:block">
                <div className="relative flex items-center justify-center">
                  <SpinningText
                    radius={7}
                    fontSize={0.9}
                    className="font-medium"
                    style={{ color: "#8B3A2A" }}
                  >
                    {` FOUNDER • AGRI-ENTREPRENEUR • MITHILA HARVEST • `}
                  </SpinningText>
                  <div
                    className="absolute flex h-14 w-14 items-center justify-center rounded-full shadow-md"
                    style={{
                      background: "#F5ECD7",
                      border: "2px solid #D4A017",
                    }}
                  >
                    <Image
                      src="/logo.svg"
                      alt="Maithili Harvest Logo"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div
                className="mh-grain-overlay overflow-hidden rounded-[32px]"
                style={{
                  border: "2px solid #C8A97E",
                  boxShadow: "0 8px 40px rgba(139,58,42,0.12)",
                }}
              >
                <Image
                  src="/about/man-image.svg"
                  alt="Amit Kumar — Founder, Maithili Harvest"
                  width={700}
                  height={800}
                  className="h-auto w-full object-cover"
                  style={{ filter: "sepia(8%) saturate(105%) brightness(98%)" }}
                />
              </div>

              {/* Partnership Badge */}
              <div
                className="mh-available-badge absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl px-5 py-3"
                style={{ whiteSpace: "nowrap" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ background: "#D4A017" }}
                  />
                  <span
                    className="mh-label text-sm font-medium"
                    style={{ color: "#8B3A2A" }}
                  >
                    Open to Partnerships
                  </span>
                </div>
              </div>
            </div>

            {/* Name + Social */}
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3
                  className="mh-display text-3xl font-bold"
                  style={{ color: "#1C1208" }}
                >
                  Amit Kumar
                </h3>
                <p
                  className="mh-subheading mt-1 text-base italic"
                  style={{ color: "#8B3A2A", letterSpacing: "0.02em" }}
                >
                  Founder, Maithili Harvest Pvt. Ltd.
                </p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <span className="mh-tag-pill">🌾 Agri-Entrepreneur</span>
                  <span className="mh-tag-pill">Est. Feb 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/maithiliharvest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mh-social-link"
                  aria-label="Instagram"
                >
                  <MessageCircleMore size={22} />
                </Link>
                <Link
                  href="https://in.linkedin.com/in/amit-kumar-6a23a5184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mh-social-link"
                  aria-label="LinkedIn"
                >
                  <ArrowUpRight size={22} />
                </Link>
                <Link
                  href="https://maithiliharvest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mh-social-link"
                  aria-label="Website"
                >
                  <Link2 size={22} />
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="flex flex-col justify-between">
            <div className="space-y-10">

              {/* Para 1 */}
              <div>
                <span className="mh-quote-mark">"</span>
                <p
                  className="mh-body text-lg leading-9"
                  style={{ color: "#3D2410" }}
                >
                  <span className="mh-para-highlight">
                    Maithili Harvest isn't just a business — it's a mission.
                  </span>{" "}
                  What began as a deep respect for Bihar's agricultural roots
                  grew into a registered food and agri-startup, incorporated in
                  February 2026, dedicated to bringing the finest traditional
                  and regional products to modern markets.
                </p>
              </div>

              {/* Para 2 */}
              <div>
                <p
                  className="mh-body text-lg leading-9"
                  style={{ color: "#3D2410" }}
                >
                  <span className="mh-para-highlight">
                    Amit has built this brand from the ground up —
                  </span>{" "}
                  navigating import-export licensing, FSSAI food safety
                  registrations, and e-commerce packaging standards firsthand.
                  Every product on our shelf carries his personal commitment to
                  authenticity, quality, and fair sourcing.
                </p>
              </div>

              {/* Para 3 */}
              <div>
                <p
                  className="mh-body text-lg leading-9"
                  style={{ color: "#3D2410" }}
                >
                  <span className="mh-para-highlight">
                    From hand-picked spices and fresh groceries to exotic indoor
                    plants —
                  </span>{" "}
                  Maithili Harvest is expanding what "local food" can mean. We
                  believe the harvest of Mithila deserves a place in every
                  Indian kitchen, and far beyond.
                </p>
              </div>

              {/* Decorative Rule */}
              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, #D4A017 0%, #8B3A2A 50%, transparent 100%)",
                  opacity: 0.35,
                  borderRadius: 2,
                }}
              />

              {/* Founding Note */}
              <div
                className="rounded-2xl px-6 py-5"
                style={{
                  background: "rgba(212,160,23,0.08)",
                  border: "1px solid rgba(212,160,23,0.25)",
                }}
              >
                <p
                  className="mh-subheading text-base italic leading-7"
                  style={{ color: "#5C3D1E" }}
                >
                  "The soil of Mithila has fed generations. Our work is simply
                  to carry that nourishment forward — with care, integrity, and
                  pride."
                </p>
                <p
                  className="mh-label mt-3 text-sm"
                  style={{ color: "#8B3A2A" }}
                >
                  — Amit Kumar, Founder
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-16 flex justify-center lg:justify-end">
              <Image
                src="/about/signature.svg"
                alt="Amit Kumar Signature"
                width={220}
                height={100}
                className="object-contain"
                style={{ opacity: 0.75, filter: "sepia(40%) hue-rotate(-10deg)" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}