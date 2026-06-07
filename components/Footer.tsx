"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      alert("Thank you! We'll keep you updated.");
      setEmail("");
    }
  };

  return (
    <footer className="bg-[linear-gradient(170deg,#1C1208_0%,#2A1A0E_100%)] text-[#F5ECD7]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-[#F5ECD7] sm:text-4xl lg:text-5xl font-serif">
            Ready to Taste the
            <br />
            <span className="text-[#D4A017]">Heart of Mithila?</span>
          </h2>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-[#F5ECD7] px-7 py-3.5 font-serif text-base tracking-wide text-[#1C1208] shadow-[0_4px_20px_rgba(212,160,23,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#D4A017] hover:shadow-[0_8px_28px_rgba(212,160,23,0.3)]"
          >
            Shop Now
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1C1208] text-sm text-[#F5ECD7] transition-colors duration-200 group-hover:bg-[#8B3A2A]">
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="h-px bg-[linear-gradient(90deg,rgba(212,160,23,0.35)_0%,rgba(139,58,42,0.35)_50%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3 text-current no-underline">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#D4A017,#8B3A2A)] text-lg shadow-lg shadow-black/20">
                🌾
              </div>
              <span className="text-[1.15rem] font-bold leading-tight font-serif">
                Maithili Harvest
              </span>
            </Link>
            <p className="mb-6 max-w-[15rem] text-sm italic leading-7 text-[#9C7A56] font-serif">
              From the soil of Mithila to your kitchen — authentic flavours,
              honest sourcing.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/maithiliharvest" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex text-[#C8A97E] transition duration-200 hover:scale-110 hover:text-[#D4A017]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(212,160,23,0.28)] bg-[rgba(212,160,23,0.1)] text-xs font-semibold tracking-[0.08em] text-[#F5ECD7]">
                  IG
                </span>
              </Link>
              <Link href="https://in.linkedin.com/in/amit-kumar-6a23a5184" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex text-[#C8A97E] transition duration-200 hover:scale-110 hover:text-[#D4A017]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(212,160,23,0.28)] bg-[rgba(212,160,23,0.1)] text-xs font-semibold tracking-[0.08em] text-[#F5ECD7]">
                  IN
                </span>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex text-[#C8A97E] transition duration-200 hover:scale-110 hover:text-[#D4A017]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(212,160,23,0.28)] bg-[rgba(212,160,23,0.1)] text-xs font-semibold tracking-[0.08em] text-[#F5ECD7]">
                  YT
                </span>
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.1em] text-[#D4A017] font-serif">Quick Links</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "About Us", href: "/about" },
                { label: "Our Story", href: "/story" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm font-light tracking-[0.01em] text-[#C8A97E] transition duration-200 hover:translate-x-1 hover:text-[#D4A017]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.1em] text-[#D4A017] font-serif">Socials</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/maithiliharvest" },
                { label: "LinkedIn", href: "https://in.linkedin.com/in/amit-kumar-6a23a5184" },
                { label: "YouTube", href: "https://youtube.com" },
                { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-light tracking-[0.01em] text-[#C8A97E] transition duration-200 hover:translate-x-1 hover:text-[#D4A017]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.1em] text-[#D4A017] font-serif">Stay Updated</p>
            <p className="mb-4 text-sm italic leading-7 text-[#9C7A56] font-serif">
              Get harvest updates, new products &amp; seasonal recipes delivered
              to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                className="w-full rounded-lg border border-[rgba(212,160,23,0.28)] bg-[rgba(245,236,215,0.07)] px-4 py-2.5 text-sm text-[#F5ECD7] outline-none transition duration-200 placeholder:text-[#9C7A56] focus:border-[#D4A017] focus:bg-[rgba(245,236,215,0.11)]"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              />
              <button
                className="w-full rounded-lg bg-[#8B3A2A] px-4 py-2.5 text-sm tracking-[0.05em] text-[#F5ECD7] transition duration-200 hover:-translate-y-0.5 hover:bg-[#D4A017] hover:text-[#1C1208]"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-[linear-gradient(90deg,#D4A017_0%,#8B3A2A_50%,transparent_100%)] opacity-30" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 py-8 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(212,160,23,0.28)] bg-[rgba(212,160,23,0.1)] text-[#D4A017]">
              <Phone size={18} />
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.1em] text-[#D4A017] font-serif">Phone No:</p>
              <p className="text-sm font-light text-[#C8A97E]">+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(212,160,23,0.28)] bg-[rgba(212,160,23,0.1)] text-[#D4A017]">
              <Mail size={18} />
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.1em] text-[#D4A017] font-serif">Email Address:</p>
              <p className="text-sm font-light text-[#C8A97E]">hello@maithiliharvest.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(212,160,23,0.28)] bg-[rgba(212,160,23,0.1)] text-[#D4A017]">
              <MapPin size={18} />
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.1em] text-[#D4A017] font-serif">Location:</p>
              <p className="text-sm font-light text-[#C8A97E]">Darbhanga, Bihar, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-[linear-gradient(90deg,rgba(200,169,126,0.18)_0%,rgba(200,169,126,0.18)_100%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#6B4C2A] font-serif">
            © 2026 Maithili Harvest Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-[#6B4C2A] transition duration-200 hover:text-[#D4A017]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#6B4C2A] transition duration-200 hover:text-[#D4A017]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}