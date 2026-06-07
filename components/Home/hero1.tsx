"use client";

import Link from "next/link";
import { motion } from "motion/react";

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
    <section className="relative min-h-[calc(100dvh-72px)] bg-white">
      <div className="section-container grid min-h-[calc(100dvh-72px)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* Copy */}
        <div>
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="brand-tag"
          >
            Artisan Food · Mithila, Bihar
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-editorial mt-5 text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] text-[var(--color-ink)]"
          >
            From the heart of{" "}
            <span className="text-gradient-gold italic">Mithila</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]"
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
            <Link href="/about" className="btn-secondary">
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Video placeholder — drop hero-video.mp4 in /public when ready */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)]"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--color-blue-light)] to-[var(--color-surface-warm)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--color-gold)] bg-white/80">
              <div className="ml-1 h-0 w-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-[var(--color-gold)]" />
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
              Video coming soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
