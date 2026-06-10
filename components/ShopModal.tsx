"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const brands = [
  { name: "Amazon", accent: "A" },
  { name: "Flipkart", accent: "F" },
  { name: "Blinkit", accent: "B" },
  { name: "Zomato", accent: "Z" },
];

type ShopModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ShopModal({ open, onClose }: ShopModalProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % brands.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(28,20,16,0.7)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative mx-4 max-h-[90dvh] w-full max-w-[480px] overflow-y-auto border border-[var(--color-border-gold)] bg-[var(--color-linen-white)] p-6 sm:mx-0 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "none",
            border: "0.5px solid var(--color-border-gold)",
            color: "var(--color-text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            cursor: "pointer",
            transition: "border-color 0.2s ease",
          }}
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.75rem",
            textAlign: "center",
          }}
        >
          <p className="brand-tag">Available On</p>

          {/* Logo area */}
          <div
            style={{
              width: 120,
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "0.5px solid var(--color-border-gold)",
              padding: "1rem",
              background: "linear-gradient(135deg, rgba(17,24,39,0.96), rgba(184,137,75,0.85))",
              color: "var(--color-ivory-cream)",
            }}
          >
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", letterSpacing: "0.08em" }}>
              {brands[current].accent}
            </span>
          </div>

          <div>
            <h2
              className="font-display text-xl leading-tight tracking-wide text-[var(--color-deep-cacao)] sm:text-2xl"
              style={{ fontWeight: 400 }}
            >
              Shop on {brands[current].name}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                color: "var(--color-text-muted)",
                marginTop: "0.5rem",
                lineHeight: 1.7,
              }}
            >
              Explore our full range of authentic Mithila products.
            </p>
          </div>

          {/* Indicators */}
          <div style={{ display: "flex", gap: "6px" }}>
            {brands.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  borderRadius: "3px",
                  backgroundColor: i === current
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

          <button
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}