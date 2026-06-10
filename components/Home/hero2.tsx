"use client";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { brandPillars } from "./data";

const pillarContent = brandPillars.map((pillar) => ({
  title: pillar.title,
  description: pillar.description,
  content: (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-(--color-beige) bg-white shadow-(--shadow-md)">
      <div className="relative flex flex-1 items-center justify-center bg-(--color-cream) p-5 sm:p-8">
        <div className="relative h-full w-full min-h-[200px] lg:min-h-[320px]">
          <Image
            src={pillar.image}
            alt={pillar.title}
            fill
            priority
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-(--color-beige) bg-(--color-beige-light)/40 px-5 py-4">
        <span className="brand-tag text-(--color-gold-dark)">{pillar.tag}</span>
        <p className="font-display text-right text-sm font-semibold text-(--color-maroon)">
          {pillar.metric}
        </p>
      </div>
    </div>
  ),
}));

export default function Hero2() {
  return (
    <section className="section-gap bg-(--color-cream)">
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
