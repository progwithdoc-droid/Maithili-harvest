"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ShopModal from "./ShopModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ brandName = "Maithili Harvest" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "72px",
          backgroundColor: "var(--color-deep-cacao)",
          borderBottom: scrolled
            ? "0.5px solid var(--color-rich-walnut)"
            : "0.5px solid transparent",
          transition: "border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "var(--content-width)",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo + Brand */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "0.5px solid rgba(196,164,106,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Image src="/logo.svg" alt="Logo" width={22} height={22} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: "var(--color-ivory-cream)",
              }}
            >
              {brandName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "2.5rem" }}
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isActive
                      ? "var(--color-warm-honey)"
                      : "rgba(196,164,106,0.6)",
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "2px",
                    borderBottom: isActive
                      ? "0.5px solid var(--color-warm-honey)"
                      : "0.5px solid transparent",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => setOpenModal(true)}
              className="btn-primary"
              style={{ padding: "10px 28px", fontSize: "10px" }}
            >
              Shop Now
            </button>
          </div>

          {/* Mobile actions */}
          <div
            className="flex md:hidden"
            style={{ alignItems: "center", gap: "12px" }}
          >
            <button
              onClick={() => setOpenModal(true)}
              className="btn-primary"
              style={{ padding: "8px 18px", fontSize: "10px" }}
            >
              Shop
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: "none",
                border: "0.5px solid rgba(196,164,106,0.3)",
                color: "var(--color-warm-honey)",
                padding: "7px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className="md:hidden"
          style={{
            backgroundColor: "var(--color-deep-cacao)",
            borderTop: "0.5px solid var(--color-rich-walnut)",
            overflow: "hidden",
            maxHeight: isOpen ? "260px" : "0",
            transition: "max-height 0.3s ease",
          }}
        >
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 24px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isActive
                    ? "var(--color-warm-honey)"
                    : "rgba(196,164,106,0.6)",
                  textDecoration: "none",
                  borderBottom: "0.5px solid var(--color-rich-walnut)",
                }}
              >
                {isActive && (
                  <span style={{ marginRight: 10, color: "var(--color-warm-honey)" }}>—</span>
                )}
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <ShopModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
