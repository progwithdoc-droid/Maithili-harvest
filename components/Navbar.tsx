"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ShopModal from "./ShopModal";
const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const Navbar = ({ brandName = "Your Brand" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white border-b">
      <header className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={42}
              height={42}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">{brandName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition hover:text-black/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setOpenModal(true)}
              className="rounded-xl bg-black px-5 py-2 text-white"
            >
              Login
            </button>
          </div>
          

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setOpenModal(true)}
              className="rounded-xl bg-black px-5 py-2.5 text-sm text-white"
            >
              Login
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border p-2"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="pb-4 md:hidden">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-4 text-sm hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      <ShopModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>

  );
};

export default Navbar;
