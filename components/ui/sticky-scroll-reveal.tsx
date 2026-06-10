"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segment = 1 / content.length;
    const index = Math.min(
      Math.floor(latest / segment),
      content.length - 1,
    );
    setActiveCard(index);
  });

  return (
    <div ref={ref} className="relative w-full">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — scroll runway */}
        <div>
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="flex min-h-[55vh] flex-col justify-center py-8 sm:min-h-[65vh] sm:py-12 lg:min-h-[100vh] lg:py-20"
            >
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.25 }}
                transition={{ duration: 0.4 }}
                className="font-display text-2xl font-semibold text-[var(--color-maroon)] md:text-3xl lg:text-4xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.25 }}
                transition={{ duration: 0.4 }}
                className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
              >
                {item.description}
              </motion.p>

              {/* Mobile — inline image */}
              <div className="mt-8 lg:hidden">
                <div
                  className={cn(
                    "h-[min(320px,50vw)] overflow-hidden rounded-2xl",
                    contentClassName,
                  )}
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right — sticky panel (desktop) */}
        <div className="relative hidden lg:block">
          <div
            className={cn(
              "sticky top-[calc(var(--nav-height)+1rem)] h-[min(560px,72vh)] w-full overflow-hidden rounded-2xl xl:top-[calc(var(--nav-height)+1.5rem)] xl:h-[min(600px,75vh)]",
              contentClassName,
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full"
              >
                {content[activeCard].content ?? null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
