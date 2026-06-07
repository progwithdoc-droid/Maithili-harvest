"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
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
    <footer className="bg-[var(--color-maroon)] text-[var(--color-cream)]">
      <div className="border-b border-white/10 py-16">
        <div className="section-container flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="brand-tag text-[var(--color-gold)]">Taste Mithila</p>
            <h2 className="font-editorial mt-2 text-[clamp(1.8rem,4vw,2.5rem)] text-[var(--color-cream)]">
              Ready to taste the heart of Mithila?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="btn-gold">
              Shop Now
            </Link>
            <Link
              href="/about"
              className="btn-secondary border-[var(--color-gold)]/40 text-[var(--color-cream)] hover:border-[var(--color-gold)] hover:bg-white/10"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 no-underline">
              <Image src="/logo.svg" alt="Logo" width={28} height={28} />
              <span className="font-display text-lg text-[var(--color-cream)]">
                Maithili Harvest
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-beige)]">
              From the soil of Mithila to your kitchen — authentic flavours, honest sourcing.
            </p>
          </div>

          <div>
            <p className="brand-tag mb-4 text-[var(--color-gold)]">Quick Links</p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-beige)] no-underline transition-colors hover:text-[var(--color-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="brand-tag mb-4 text-[var(--color-gold)]">Socials</p>
            <ul className="flex flex-col gap-3">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-beige)] no-underline transition-colors hover:text-[var(--color-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="brand-tag mb-4 text-[var(--color-gold)]">Stay Updated</p>
            {sent ? (
              <p className="text-sm text-[var(--color-gold)]">Thank you — we&apos;ll be in touch.</p>
            ) : (
              <div className="flex flex-col gap-2">
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
                  className="btn-gold w-full justify-center"
                  style={{ padding: "12px 20px" }}
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          {contactItems.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--color-gold)]/30 text-[var(--color-gold)]">
                <Icon size={16} />
              </div>
              <div>
                <p className="brand-tag text-[var(--color-gold)]">{label}</p>
                <p className="text-sm text-[var(--color-beige)]">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-wrap items-center justify-between gap-4 py-6">
          <p className="text-[11px] tracking-wide text-[var(--color-beige)]/60">
            © 2026 Maithili Harvest Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-wide text-[var(--color-beige)]/60 no-underline transition-colors hover:text-[var(--color-cream)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
