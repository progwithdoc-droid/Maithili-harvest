"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface Props {
  testimonial: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    review: string;
  };
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div
      className="brand-card"
      style={{ overflow: "hidden" }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.5rem 1.75rem",
          borderBottom: "0.5px solid var(--color-border-gold)",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            flexShrink: 0,
            borderRadius: "50%",
            overflow: "hidden",
            border: "0.5px solid var(--color-border-gold)",
          }}
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={46}
            height={46}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "1rem",
              letterSpacing: "0.03em",
              color: "var(--color-deep-cacao)",
              lineHeight: 1.2,
            }}
          >
            {testimonial.name}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "var(--color-text-muted)",
              marginTop: "3px",
            }}
          >
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Stars */}
        <div style={{ display: "flex", gap: "3px" }}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill="var(--color-warm-honey)"
              color="var(--color-warm-honey)"
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
            lineHeight: 1.85,
            color: "var(--color-text-primary)",
          }}
        >
          {testimonial.review}
        </p>
      </div>
    </div>
  );
}