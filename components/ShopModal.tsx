"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const brands = [
  { name: "Amazon", logo: "/brands/amazon.png" },
  { name: "Flipkart", logo: "/brands/flipkart.png" },
  { name: "Blinkit", logo: "/brands/blinkit.png" },
  { name: "Zomato", logo: "/brands/zomato.png" },
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
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "480px",
          backgroundColor: "var(--color-linen-white)",
          border: "0.5px solid var(--color-border-gold)",
          padding: "3rem 2.5rem",
        }}
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
            }}
          >
            <Image
              src={brands[current].logo}
              alt={brands[current].name}
              width={100}
              height={56}
              style={{ objectFit: "contain", maxHeight: "100%" }}
            />
          </div>

          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "1.6rem",
                letterSpacing: "0.04em",
                color: "var(--color-deep-cacao)",
                lineHeight: 1.2,
              }}
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