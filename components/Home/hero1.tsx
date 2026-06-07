"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { VideoBackground } from "./VideoBackground";
import { heroVideos } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero1() {
  return (
    <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden">
      <VideoBackground
        src={heroVideos.hero1}
        overlayClassName="bg-gradient-to-r from-[var(--color-maroon)]/88 via-[var(--color-maroon)]/72 to-[var(--color-maroon)]/55"
      />

      <div className="section-container relative z-10 flex min-h-[calc(100dvh-72px)] items-center py-16 lg:py-24">
        <div className="max-w-xl">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="brand-tag text-[var(--color-gold)]"
          >
            Artisan Food · Mithila, Bihar
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-editorial mt-5 text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.08] text-[var(--color-cream)]"
          >
            From the heart of{" "}
            <span className="italic text-[var(--color-gold-light)]">Mithila</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-beige)]"
          >
            Stone-ground spices, cold-pressed oils, and heirloom grains — curated
            directly from the farms of Bihar.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/products" className="btn-gold">
              Explore Products
            </Link>
            <Link
              href="/about"
              className="btn-secondary border-[var(--color-gold)]/50 text-[var(--color-cream)] hover:border-[var(--color-gold)] hover:bg-white/10"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
