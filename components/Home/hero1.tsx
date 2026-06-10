"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { VideoBackground, getDemoYouTubeEmbedUrl } from "./VideoBackground";
import { heroBackgroundVideo, heroDemoVideo } from "./data";

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
    <section className="relative min-h-[calc(100dvh-var(--nav-height))] overflow-hidden">
      {/* Full-section background — not the right-side demo box */}
      <VideoBackground
        src={heroBackgroundVideo}
        overlayClassName="bg-gradient-to-r from-[var(--color-maroon)]/85 via-[var(--color-maroon)]/65 to-[var(--color-maroon)]/45"
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
            className="brand-tag text-(--color-gold)"
          >
            Artisan Food · Mithila, Bihar
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-editorial mt-4 text-[clamp(2rem,6vw,4.25rem)] leading-[1.08] text-(--color-cream) sm:mt-5"
          >
            From the heart of{" "}
            <span className="italic text-(--color-gold-light)">Mithila</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-(--color-beige) sm:mt-5 sm:text-base lg:mx-0 lg:max-w-md"
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
            <Link
              href="/about"
              className="btn-secondary border-(--color-gold)/50 text-(--color-cream) hover:border-(--color-gold) hover:bg-white/10"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Demo video only — separate from background */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full lg:justify-self-end"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-(--color-gold)/45 bg-(--color-maroon-dark)/40 shadow-(--shadow-lg) backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
              <p className="brand-tag text-(--color-gold)">Brand Demo</p>
              <span className="text-[10px] uppercase tracking-[0.14em] text-(--color-beige)/70">
                Watch now
              </span>
            </div>

            <div className="relative aspect-video w-full bg-black/30">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--color-gold)/50 bg-(--color-maroon)/60 text-(--color-gold) sm:h-14 sm:w-14">
                    <Play size={22} fill="currentColor" />
                  </div>
                  <p className="font-display text-base text-(--color-cream) sm:text-lg">
                    {heroDemoVideo.title}
                  </p>
                  <p className="max-w-xs text-xs leading-relaxed text-(--color-beige)/80 sm:text-sm">
                    Add your YouTube link in{" "}
                    <code className="text-(--color-gold-light)">components/Home/data.ts</code>
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
