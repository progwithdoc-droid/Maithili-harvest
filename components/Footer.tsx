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
  { label: "Instagram", href: "https://www.instagram.com/startupwithamit.in" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amitkumar1009/" },
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
    <footer className="bg-(--color-maroon) text-(--color-cream)">
      <div className="border-b border-white/10 py-10 md:py-16">
        <div className="section-container flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="brand-tag text-(--color-gold)">Taste Mithila</p>
            <h2 className="font-editorial mt-2 text-[clamp(2rem,4.5vw,2.75rem)] text-(--color-cream)">
              Bring Mithila home to your kitchen
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="btn-gold">
              Shop Now
            </Link>
            <Link href="/contact" className="btn-outline-light">
              Contact Now
            </Link>
          </div>
        </div>
      </div>

      <div className="section-container py-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="footer-brand-link flex items-center gap-2 no-underline">
              <Image src="/Logo.jpg" alt="Logo" width={28} height={28} className="footer-logo-img rounded-full object-cover transition-all duration-200" />
              <span className="font-display text-lg text-(--color-cream)  ">
                Maithili Harvest
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--color-beige)">
              Pickles, makhana, ghee, spices, and snacks from Mithila — honest
              sourcing, real flavour.
            </p>
          </div>

          <div>
            <p className="brand-tag mb-4 text-(--color-gold)">Quick Links</p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="footer-link inline-block text-base no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="brand-tag mb-4 text-(--color-gold)">Socials</p>
            <ul className="flex flex-col gap-3">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link inline-block text-base no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="brand-tag mb-4 text-(--color-gold)">Stay Updated</p>
            {sent ? (
              <p className="text-sm text-(--color-gold)">Thank you — we&apos;ll be in touch.</p>
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
            <div key={label} className="footer-contact-item flex items-center gap-3">
              <div className="footer-contact-icon flex h-10 w-10 shrink-0 items-center justify-center border border-(--color-gold)/30 text-(--color-gold) transition-all duration-200">
                <Icon size={16} />
              </div>
              <div>
                <p className="brand-tag text-(--color-gold)">{label}</p>
                <p className="text-sm text-(--color-beige)">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-[11px] tracking-wide text-(--color-beige)/60">
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
                className="footer-legal-link text-[11px] tracking-wide no-underline"
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
