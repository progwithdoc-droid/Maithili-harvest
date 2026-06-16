"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-(--color-cream) font-sans md:px-10"
      ref={containerRef}
    >
      <div className="section-container py-12 md:py-20">
        <p className="brand-tag mb-4">Our Journey</p>
        <h2 className="font-editorial max-w-3xl text-[clamp(1.75rem,4vw,3rem)] leading-tight text-(--color-maroon)">
          From a Darbhanga shop to a national brand.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
          Key milestones in Amit Kumar&apos;s entrepreneurial journey — retail,
          street food, education, delivery platforms, and Maithili Harvest.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start gap-4 pt-8 md:gap-10 md:pt-40"
          >
            <div className="sticky top-24 z-40 flex max-w-xs flex-col items-center self-start md:top-40 md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-(--color-gold)/40 bg-white md:left-3">
                <div className="h-3 w-3 rounded-full border border-(--color-gold) bg-(--color-gold-light)" />
              </div>
              <h3 className="hidden font-display text-xl font-bold text-(--color-gold-dark) md:block md:pl-20 md:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-14 pr-2 sm:pl-16 md:pl-4">
              <h3 className="mb-4 block text-left font-display text-xl font-bold text-(--color-gold-dark) sm:text-2xl md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-0.5 overflow-hidden bg-linear-to-b from-transparent via-(--color-beige) to-transparent md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-b from-(--color-gold) via-(--color-maroon) to-(--color-gold)"
          />
        </div>
      </div>
    </div>
  );
};
