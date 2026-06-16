"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { VideoBackground, getDemoYouTubeEmbedUrl } from "./VideoBackground";
import { heroDemoVideo, heroVideos } from "./data";

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
  const embedUrl = getDemoYouTubeEmbedUrl(heroDemoVideo.url);
  const bg = heroVideos.hero1;

  return (
    <section className="relative min-h-[calc(100dvh-var(--nav-height))] overflow-hidden">
      <VideoBackground
        src={bg.src}
        fallbackSrc={bg.fallback}
        poster={bg.poster}
        overlayClassName="bg-gradient-to-r from-[var(--color-cream)]/92 via-[var(--color-cream)]/78 to-[var(--color-cream)]/35"
      />

      <div
        className="
          section-container relative z-10 grid min-h-[calc(100dvh-var(--nav-height))]
          grid-cols-1 items-center gap-6 py-10 text-center
          sm:gap-8 sm:py-14
          lg:grid-cols-2 lg:gap-14 lg:py-24 lg:text-left
        "
      >
        <div className="mx-auto max-w-xl lg:mx-0">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="brand-tag text-[var(--color-gold-dark)]"
          >
            Artisan Food · Mithila, Bihar
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-editorial mt-4 text-[clamp(2rem,6vw,4.25rem)] leading-[1.08] text-[var(--color-maroon)] sm:mt-5"
          >
            The flavours of{" "}
            <span className="italic text-[var(--color-gold-dark)]">Mithila</span>, packed with care
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-text-secondary)] sm:mt-5 sm:text-base lg:mx-0 lg:max-w-md"
          >
            Pickles, makhana, ghee, spices, and handmade snacks from Bihar — made with
            recipes rooted in Maithili tradition.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 lg:justify-start"
          >
            <Link href="/products" className="btn-gold">
              Explore Products
            </Link>
            <Link href="/about" className="btn-secondary">
              Our Story
            </Link>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full lg:justify-self-end"
        >
          <div className="overflow-hidden rounded-2xl border border-[var(--color-gold)]/40 bg-white/95 shadow-[var(--shadow-lg)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-[var(--color-beige)] px-4 py-3 sm:px-5">
              <p className="brand-tag text-[var(--color-gold-dark)]">Brand Demo</p>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Watch now
              </span>
            </div>

            <div className="relative aspect-video w-full bg-[var(--color-beige-light)]/50">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={heroDemoVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold-light)]/40 text-[var(--color-gold-dark)] sm:h-14 sm:w-14">
                    <Play size={22} fill="currentColor" />
                  </div>
                  <p className="font-display text-base text-[var(--color-maroon)] sm:text-lg">
                    {heroDemoVideo.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
