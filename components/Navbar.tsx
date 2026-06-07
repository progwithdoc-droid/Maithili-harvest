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

const Navbar = ({ brandName = "Maithili Harvest" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(28, 18, 8, 0.85)"
            : "rgba(28, 18, 8, 0.60)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(212,160,23,0.25)"
            : "1px solid rgba(212,160,23,0.10)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.35)"
            : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-18 items-center justify-between" style={{ height: "72px" }}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="relative flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #8B3A2A)",
                  boxShadow: "0 0 0 2px rgba(212,160,23,0.3)",
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={26}
                  height={26}
                  className="rounded-full"
                />
              </div>
              <span
                className="text-lg font-bold tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#F5ECD7",
                  letterSpacing: "0.02em",
                }}
              >
                {brandName}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative text-sm font-medium transition-all duration-200 group"
                    style={{
                      color: isActive ? "#D4A017" : "#C8A97E",
                      fontFamily: "'Lato', sans-serif",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {item.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        width: isActive ? "100%" : "0%",
                        background: "linear-gradient(90deg, #D4A017, #8B3A2A)",
                      }}
                    />
                    <span
                      className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                      style={{
                        background: "linear-gradient(90deg, #D4A017, #8B3A2A)",
                        display: isActive ? "none" : "block",
                      }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => setOpenModal(true)}
                className="rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #8B3A2A)",
                  color: "#F5ECD7",
                  fontFamily: "'Lato', sans-serif",
                  letterSpacing: "0.04em",
                  boxShadow: "0 4px 16px rgba(212,160,23,0.25)",
                }}
              >
                Shop Now
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setOpenModal(true)}
                className="rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #8B3A2A)",
                  color: "#F5ECD7",
                }}
              >
                Shop
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg p-2 transition-all duration-200"
                style={{
                  border: "1px solid rgba(212,160,23,0.3)",
                  color: "#C8A97E",
                  background: "rgba(212,160,23,0.08)",
                }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className="overflow-hidden transition-all duration-300 md:hidden"
          style={{
            maxHeight: isOpen ? "320px" : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div
            className="mx-4 mb-4 rounded-2xl px-2 py-2"
            style={{
              background: "rgba(28, 18, 8, 0.95)",
              border: "1px solid rgba(212,160,23,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm transition-all duration-200"
                  style={{
                    color: isActive ? "#D4A017" : "#C8A97E",
                    background: isActive
                      ? "rgba(212,160,23,0.1)"
                      : "transparent",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  {isActive && (
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "#D4A017" }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <ShopModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Navbar;
