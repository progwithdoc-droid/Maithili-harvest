"use client";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { brandPillars } from "./data";

const pillarContent = brandPillars.map((pillar) => ({
  title: pillar.title,
  description: pillar.description,
  content: (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-md)]">
      <Image
        src={pillar.image}
        alt={pillar.title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-ink)]/80 to-transparent p-6">
        <span className="brand-tag text-[var(--color-gold-light)]">
          {pillar.tag}
        </span>
        <p className="mt-1 font-display text-sm font-semibold text-white">
          {pillar.metric}
        </p>
      </div>
    </div>
  ),
}));

export default function Hero2() {
  return (
    <section className="section-gap bg-[var(--color-off-white)]">
      <div className="section-container mb-12">
        <span className="brand-tag">Our Promise</span>
        <h2 className="font-editorial mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-tight text-[var(--color-ink)]">
          Not mass-produced.{" "}
          <span className="italic text-[var(--color-blue)]">Hand-curated.</span>
        </h2>
      </div>

      <div className="section-container">
        <StickyScroll content={pillarContent} />
      </div>
    </section>
  );
}
