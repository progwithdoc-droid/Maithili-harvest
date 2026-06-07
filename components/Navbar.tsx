"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import ShopModal from "./ShopModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-[var(--color-beige)] bg-[var(--color-cream)]/95 backdrop-blur-md transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "var(--shadow-sm)" : "none" }}
      >
        <div className="section-container flex h-full items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-gold)]">
              <Image src="/logo.svg" alt="Logo" width={22} height={22} />
            </div>
            <span className="font-display text-lg tracking-wide text-[var(--color-maroon)]">
              {brandName}
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-[11px] font-semibold uppercase tracking-[0.18em] no-underline transition-colors duration-200"
                  style={{
                    color: isActive
                      ? "var(--color-maroon)"
                      : "var(--color-text-secondary)",
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[var(--color-gold)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setOpenModal(true)}
              className="btn-gold"
              style={{ padding: "10px 28px", fontSize: "10px" }}
            >
              Shop Now
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setOpenModal(true)}
              className="btn-gold"
              style={{ padding: "8px 18px", fontSize: "10px" }}
            >
              Shop
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center border border-[var(--color-beige)] p-2 text-[var(--color-maroon)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-[var(--color-beige)] bg-[var(--color-cream)] md:hidden"
            >
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-[var(--color-beige)] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] no-underline"
                    style={{
                      color: isActive
                        ? "var(--color-maroon)"
                        : "var(--color-text-secondary)",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ShopModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
