"use client";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { brandPillars } from "./data";

const pillarContent = brandPillars.map((pillar) => ({
  title: pillar.title,
  description: pillar.description,
  content: (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-(--color-gold)/30 bg-(--color-cream) p-4 shadow-(--shadow-lg) sm:p-6">
      <div className="relative h-full w-full min-h-[220px] lg:min-h-[360px]">
        <Image
          src={pillar.image}
          alt={pillar.title}
          fill
          priority
          className="object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-(--color-maroon)/95 via-(--color-maroon)/50 to-transparent px-5 pb-4 pt-10">
        <span className="brand-tag text-(--color-gold)">{pillar.tag}</span>
        <p className="mt-1 font-display text-sm font-semibold text-(--color-cream)">
          {pillar.metric}
        </p>
      </div>
    </div>
  ),
}));

export default function Hero2() {
  return (
    <section className="section-gap bg-(--color-beige-light)/40">
      <div className="section-container mb-8 sm:mb-10 lg:mb-12">
        <span className="brand-tag">Our Promise</span>
        <h2 className="font-editorial mt-3 max-w-2xl text-[clamp(1.75rem,4vw,3rem)] leading-tight text-(--color-maroon)">
          Not mass-produced.{" "}
          <span className="italic text-(--color-gold-dark)">Hand-curated.</span>
        </h2>
      </div>

      <div className="section-container">
        <StickyScroll content={pillarContent} />
      </div>
    </section>
  );
}
