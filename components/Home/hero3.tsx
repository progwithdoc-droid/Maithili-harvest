"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { VideoBackground } from "./VideoBackground";
import { featuredProducts, trustedCompanies, heroVideos } from "./data";

function CompanyLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-[72px] w-[160px] shrink-0 items-center justify-center rounded-xl border border-[var(--color-beige)] bg-white px-6 py-3 shadow-[var(--shadow-sm)]">
      <Image
        src={logo}
        alt={name}
        width={140}
        height={48}
        className="h-11 w-auto max-w-[130px] object-contain"
        priority
      />
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof featuredProducts)[0];
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="overflow-hidden rounded-2xl border border-[var(--color-beige)] bg-white/92 shadow-[var(--shadow-sm)] backdrop-blur-md"
    >
      <div className="relative flex h-[200px] items-center justify-center bg-[var(--color-beige-light)]/60">
        {product.badge && (
          <span className="brand-badge--gold absolute left-4 top-4 z-10">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={120}
          height={120}
          className="object-contain"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-[var(--color-maroon)]/50"
        >
          <Link href={`/products/${product.slug}`} className="btn-gold text-[10px]">
            View Product
          </Link>
        </motion.div>
      </div>
      <div className="p-5">
        <span className="brand-tag">{product.category}</span>
        <h3 className="font-display mt-2 text-lg font-semibold text-[var(--color-maroon)]">
          {product.name}
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="font-display text-lg font-semibold">
              ₹{product.price}
            </span>
            <span className="ml-1 text-xs text-[var(--color-text-muted)]">
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

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--color-cream)]/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--color-cream)]/90 to-transparent" />
      <InfiniteSlider speed={35} gap={20} reverse={reverse}>
        {trustedCompanies.map((company) => (
          <CompanyLogo key={`${company.name}-${reverse}`} {...company} />
        ))}
      </InfiniteSlider>
    </div>
  );
}

export default function Hero3() {
  return (
    <section className="section-gap relative overflow-hidden">
      <VideoBackground
        src={heroVideos.hero3}
        overlayClassName="bg-gradient-to-b from-[var(--color-cream)]/90 via-[var(--color-cream)]/82 to-[var(--color-cream)]/88"
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-container mb-6 text-center brand-tag">
            Trusted by leading brands
          </p>
          <MarqueeRow reverse={false} />
          <MarqueeRow reverse />
        </motion.div>

        <div className="section-container">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="brand-tag">Featured</span>
              <h2 className="font-editorial mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--color-maroon)]">
                Honest food, honestly priced.
              </h2>
            </div>
            <Link href="/products" className="btn-secondary shrink-0">
              Shop All →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-maroon)]/90 p-8 backdrop-blur-sm md:p-12"
          >
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="brand-tag text-[var(--color-gold)]">
                  Full Catalogue
                </span>
                <h3 className="font-editorial mt-3 max-w-lg text-2xl text-[var(--color-cream)] md:text-3xl">
                  Over 40 products from Mithila&apos;s best farms.
                </h3>
              </div>
              <Link href="/products" className="btn-gold shrink-0">
                Shop Now →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
