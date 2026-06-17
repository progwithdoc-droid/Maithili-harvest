
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

type Burst = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  variant: "float" | "spin" | "pop";
};

const MIN_INTERVAL_MS = 18000;
const MAX_INTERVAL_MS = 42000;
const VISIBLE_MS = 3200;

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ThekuaSurprise() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const spawnBurst = useCallback(() => {
    const padding = 80;

    const variants: Burst["variant"][] = [
      "float",
      "spin",
      "pop",
    ];

    const count = randomBetween(4, 6);

    const newBursts: Burst[] = Array.from(
      { length: count },
      (_, index) => {
        const size = randomBetween(70, 120);

        const maxX = Math.max(
          padding,
          window.innerWidth - size - padding,
        );

        const maxY = Math.max(
          padding + 72,
          window.innerHeight - size - padding,
        );

        return {
          id: Date.now() + index,
          x: randomBetween(padding, maxX),
          y: randomBetween(padding + 72, maxY),
          size,
          rotation: randomBetween(-40, 40),
          variant:
            variants[
              randomBetween(0, variants.length - 1)
            ]!,
        };
      },
    );

    setBursts(newBursts);

    window.setTimeout(() => {
      setBursts([]);
    }, VISIBLE_MS);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const schedule = (delay: number) => {
      timeoutId = setTimeout(() => {
        if (cancelled) return;

        spawnBurst();

        schedule(
          randomBetween(
            MIN_INTERVAL_MS,
            MAX_INTERVAL_MS,
          ),
        );
      }, delay);
    };

    schedule(randomBetween(8000, 14000));

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [spawnBurst]);

  return (
    <AnimatePresence>
      {bursts.map((burst) => {
        const motionProps =
          burst.variant === "spin"
            ? {
                initial: {
                  opacity: 0,
                  scale: 0,
                  rotate: -180,
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  rotate:
                    burst.rotation + 360,
                },
                exit: {
                  opacity: 0,
                  scale: 0.4,
                  rotate:
                    burst.rotation + 540,
                },
              }
            : burst.variant === "pop"
              ? {
                  initial: {
                    opacity: 0,
                    scale: 0.2,
                    y: 20,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1.1,
                    y: 0,
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.6,
                    y: -30,
                  },
                }
              : {
                  initial: {
                    opacity: 0,
                    scale: 0.5,
                    y: 30,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    y: [30, -8, 0],
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.8,
                    y: -40,
                  },
                };

        return (
          <motion.div
            key={burst.id}
            className="pointer-events-none fixed z-40"
            style={{
              left: burst.x,
              top: burst.y,
              width: burst.size,
              height: burst.size,
            }}
            initial={motionProps.initial}
            animate={motionProps.animate}
            exit={motionProps.exit}
            transition={{
              duration: 0.85,
              delay: Math.random() * 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
          >
            <div className="thekua-surprise__ring" />

            <div className="thekua-surprise__spark thekua-surprise__spark--1" />
            <div className="thekua-surprise__spark thekua-surprise__spark--2" />
            <div className="thekua-surprise__spark thekua-surprise__spark--3" />

            <Image
              src="/thekua.png"
              alt=""
              width={burst.size}
              height={burst.size}
              className="relative z-10 h-full w-full object-contain drop-shadow-lg"
            />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}

