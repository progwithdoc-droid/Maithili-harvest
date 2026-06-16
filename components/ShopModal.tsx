"use client";

import Image from "next/image";
import { X } from "lucide-react";

const brands = [
  {
    name: "Amazon",
    logo: "/companies/amazones.jpg",
    url: "https://www.amazon.in",
  },
  {
    name: "Flipkart",
    logo: "/companies/flipkart.jpg",
    url: "https://www.flipkart.com",
  },
  {
    name: "Blinkit",
    logo: "/companies/blinkit.png",
    url: "https://blinkit.com",
  },
  {
    name: "Swiggy",
    logo: "/companies/swiggy.png",
    url: "https://www.swiggy.com",
  },
  {
    name: "Zomato",
    logo: "/companies/zomato.png",
    url: "https://www.zomato.com",
  },
] as const;

type ShopModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ShopModal({ open, onClose }: ShopModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(28,20,16,0.7)] p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90dvh] w-full max-w-[520px] overflow-y-auto rounded-xl border border-(--color-border-gold) bg-(--color-linen-white) p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center border border-(--color-border-gold) text-(--color-text-muted) transition-colors hover:border-(--color-gold) hover:text-(--color-maroon)"
        >
          <X size={16} />
        </button>

        <div className="flex flex-col items-center gap-6 text-center">
          <div className="pt-2">
            <p className="brand-tag">Available On</p>
            <h2 className="font-display mt-2 text-xl tracking-wide text-(--color-deep-cacao) sm:text-2xl">
              Shop Maithili Harvest
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-(--color-text-muted)">
              Tap a store below to browse our products on your preferred platform.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Shop on ${brand.name}`}
                className="group flex flex-col items-center gap-2 rounded-xl border border-(--color-beige) bg-white p-3 shadow-(--shadow-xs) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--color-gold) hover:shadow-(--shadow-md) sm:p-4"
              >
                <div className="flex h-14 w-full items-center justify-center sm:h-16">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={140}
                    height={56}
                    className="max-h-12 w-auto max-w-[110px] object-contain object-center sm:max-h-14 sm:max-w-[130px]"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--color-text-muted) transition-colors group-hover:text-(--color-maroon)">
                  {brand.name}
                </span>
              </a>
            ))}
          </div>

          <p className="text-[11px] leading-relaxed text-(--color-text-muted)/80">
            You will be redirected to the official {brands.length > 1 ? "store" : "platform"} website.
          </p>
        </div>
      </div>
    </div>
  );
}
