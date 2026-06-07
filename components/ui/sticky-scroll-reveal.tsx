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
      <div className="flex flex-col lg:flex-row lg:gap-20">
        {/* Left — scroll runway; each block is one viewport tall */}
        <div className="w-full lg:w-1/2">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="flex min-h-[60vh] flex-col justify-center py-16 lg:min-h-[85vh] lg:py-20"
            >
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.4 }}
                className="font-display text-2xl font-semibold text-[var(--color-ink)] md:text-3xl lg:text-4xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.4 }}
                className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
              >
                {item.description}
              </motion.p>

              {/* Mobile — show card inline below each block */}
              <div className="mt-8 lg:hidden">
                <div
                  className={cn(
                    "h-[18rem] overflow-hidden rounded-2xl",
                    contentClassName,
                  )}
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right — sticky panel (desktop only) */}
        <div className="hidden w-full lg:block lg:w-1/2">
          <div
            className={cn(
              "sticky top-28 h-[28rem] w-full overflow-hidden rounded-2xl xl:top-32 xl:h-[32rem]",
              contentClassName,
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="h-full w-full"
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
