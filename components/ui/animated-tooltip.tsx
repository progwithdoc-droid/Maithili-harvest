"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

type TooltipItem = {
  id: number;
  name: string;
  designation: string;
  image?: string;
  product?: string;
};

export const AnimatedTooltip = ({
  items,
  variant = "stack",
  className,
}: {
  items: TooltipItem[];
  variant?: "stack" | "inline";
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const target = event.currentTarget;
      const halfWidth = target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div
      className={cn(
        variant === "stack"
          ? "flex flex-row items-center justify-center"
          : "relative inline-flex items-center gap-3",
        className,
      )}
    >
      {items.map((item) => (
        <div
          className={cn(
            "group relative",
            variant === "stack" && "-mr-4",
          )}
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 14,
                  },
                }}
                exit={{ opacity: 0, y: 12, scale: 0.6 }}
                style={{
                  translateX: variant === "stack" ? translateX : 0,
                  rotate: variant === "stack" ? rotate : 0,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center"
              >
                {item.product ? (
                  <div className="relative">
                    <span className="brand-tag inline-flex rounded-full border border-[var(--color-champagne)] bg-[var(--color-obsidian)] px-3 py-1.5 text-[9px] text-[var(--color-champagne)]">
                      {item.product}
                    </span>
                    <span
                      className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-[var(--color-champagne)] bg-[var(--color-obsidian)]"
                      aria-hidden
                    />
                  </div>
                ) : (
                  <div className="rounded-md bg-black px-4 py-2 text-xs shadow-xl">
                    <div className="relative z-30 text-base font-bold text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-white">{item.designation}</div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {item.image ? (
            <img
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
            />
          ) : (
            <div
              onMouseMove={handleMouseMove}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-champagne)] to-[var(--color-gold-bright)] text-xs font-bold text-[var(--color-obsidian)]"
            >
              {item.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
