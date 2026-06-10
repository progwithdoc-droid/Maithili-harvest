"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { featuredProducts, trustedCompanies } from "./data";

/* ─── Company Logo Card ──────────────────────────────────────────────────── */
function CompanyLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      className="
        flex shrink-0 items-center justify-center
        h-16 w-32.5
        sm:h-18 sm:w-38.75
        rounded-xl
        border border-(--color-beige)
        bg-white
        px-4 py-3
        sm:px-5
        shadow-(--shadow-sm)
      "
    >
      <Image
        src={logo}
        alt={name}
        width={140}
        height={48}
        className="h-8 w-auto max-w-25 object-contain sm:h-10 sm:max-w-30"
        priority
      />
    </div>
  );
}

/* ─── Marquee Row ────────────────────────────────────────────────────────── */
function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-2.5">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-24" />

      <InfiniteSlider speed={38} gap={14} reverse={reverse}>
        {trustedCompanies.map((company) => (
          <CompanyLogo key={`${company.name}-${reverse ? "r" : "f"}`} {...company} />
        ))}
      </InfiniteSlider>
    </div>
  );
}

/* ─── Product Card ───────────────────────────────────────────────────────── */
function ProductCard({ product }: { product: (typeof featuredProducts)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="overflow-hidden rounded-2xl border border-(--color-beige) bg-white shadow-(--shadow-sm)"
    >
      {/* Image area */}
      <div className="relative flex h-45 items-center justify-center bg-(--color-beige-light)/60 sm:h-50">
        {product.badge && (
          <span className="brand-badge--gold absolute left-3 top-3 z-10 text-[10px] sm:left-4 sm:top-4">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={120}
          height={120}
          className="h-25 w-auto object-contain sm:h-30"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-(--color-maroon)/50"
        >
          <Link href={`/products/${product.slug}`} className="btn-gold text-[10px]">
            View Product
          </Link>
        </motion.div>
      </div>

      {/* Info area */}
      <div className="p-4 sm:p-5">
        <span className="brand-tag">{product.category}</span>
        <h3 className="font-display mt-2 text-base font-semibold text-(--color-maroon) sm:text-lg">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center justify-between sm:mt-4">
          <div>
            <span className="font-display text-base font-semibold sm:text-lg">
              ₹{product.price}
            </span>
            <span className="ml-1 text-xs text-(--color-text-muted)">
              / {product.unit}
            </span>
          </div>
          <button type="button" className="btn-icon" aria-label="Add to cart">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────────── */
export default function Hero3() {
  return (
    <section className="section-gap overflow-hidden bg-white">

      {/* ── Trusted brands marquee ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-12 sm:mb-16"
      >
        <p className="section-container mb-5 text-center brand-tag sm:mb-6">
          Trusted by leading brands
        </p>
        <MarqueeRow reverse={false} />
        <MarqueeRow reverse />
      </motion.div>

      {/* ── Featured products ── */}
      <div className="section-container">

        {/* Section header */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="brand-tag">Featured</span>
            <h2 className="font-editorial mt-3 text-[clamp(1.75rem,4vw,3rem)] leading-tight text-(--color-maroon)">
              Honest food, honestly priced.
            </h2>
          </div>
          <Link
            href="/products"
            className="btn-secondary shrink-0 self-start md:self-auto"
          >
            Shop All →
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="
            mt-10 sm:mt-14 lg:mt-16
            overflow-hidden rounded-2xl
            border border-(--color-gold)/30
            bg-(--color-maroon)
            p-6 sm:p-8 md:p-12
          "
        >
          <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="brand-tag text-(--color-gold)">
                Full Catalogue
              </span>
              <h3 className="font-editorial mt-3 max-w-lg text-xl text-(--color-cream) sm:text-2xl md:text-3xl">
                Over 40 products from Mithila&apos;s best farms.
              </h3>
            </div>
            <Link
              href="/products"
              className="btn-gold shrink-0 self-start md:self-auto"
            >
              Shop Now →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}