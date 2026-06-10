"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { VideoBackground, getDemoYouTubeEmbedUrl } from "./VideoBackground";
import { hero1BackgroundVideo, heroDemoVideo } from "./data";

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

  return (
    <section className="relative min-h-[calc(100dvh-var(--nav-height))] overflow-hidden bg-(--color-cream)">
      <VideoBackground
        src={hero1BackgroundVideo}
        overlayClassName="bg-gradient-to-r from-(--color-cream)/95 via-(--color-cream)/75 to-(--color-cream)/25"
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
            className="brand-tag text-(--color-gold-dark)"
          >
            Artisan Food · Mithila, Bihar
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-editorial mt-4 text-[clamp(2rem,6vw,4.25rem)] leading-[1.08] text-(--color-maroon) sm:mt-5"
          >
            From the heart of{" "}
            <span className="italic text-(--color-gold-dark)">Mithila</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-(--color-text-secondary) sm:mt-5 sm:text-base lg:mx-0 lg:max-w-md"
          >
            Stone-ground spices, cold-pressed oils, and heirloom grains — curated
            directly from the farms of Bihar.
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
          <div className="overflow-hidden rounded-2xl border border-(--color-gold)/40 bg-white/95 shadow-(--shadow-lg)">
            <div className="flex items-center justify-between border-b border-(--color-beige) px-4 py-3 sm:px-5">
              <p className="brand-tag text-(--color-gold-dark)">Brand Demo</p>
              <span className="text-[10px] uppercase tracking-[0.14em] text-(--color-text-muted)">
                Watch now
              </span>
            </div>

            <div className="relative aspect-video w-full bg-(--color-beige-light)/50">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--color-gold)/50 bg-(--color-gold-light)/40 text-(--color-gold-dark) sm:h-14 sm:w-14">
                    <Play size={22} fill="currentColor" />
                  </div>
                  <p className="font-display text-base text-(--color-maroon) sm:text-lg">
                    {heroDemoVideo.title}
                  </p>
                  <p className="max-w-xs text-xs leading-relaxed text-(--color-text-muted) sm:text-sm">
                    Add your YouTube link in{" "}
                    <code className="text-(--color-gold-dark)">components/Home/data.ts</code>
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
