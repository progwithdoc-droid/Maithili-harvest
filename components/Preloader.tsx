"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const MIN_DISPLAY_MS = 2400;
const FORCE_COMPLETE_MS = 6000;

type Phase = "loading" | "closing" | "opening" | "done";

const WELCOME_MESSAGES = [
  "Welcome to Maithili Harvest",
  "मैथिली हार्वेस्ट में आपका स्वागत है",
  "मैथिली हार्वेस्टमे अहाँक स्वागत अछि",
];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
  const [welcomeIndex, setWelcomeIndex] = useState(0);
  const finishedRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let loaded = document.readyState === "complete";
    let raf = 0;

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;

      setProgress(100);
      setPhase("closing");

      window.setTimeout(() => setPhase("opening"), 500);

      window.setTimeout(() => {
        setVisible(false);
        setPhase("done");
        document.body.style.overflow = "";
      }, 1400);
    };

    const tryFinish = () => {
      const elapsed = Date.now() - start;
      if (loaded && elapsed >= MIN_DISPLAY_MS) finish();
      else if (elapsed >= FORCE_COMPLETE_MS) finish();
    };

    const tick = () => {
      const elapsed = Date.now() - start;
      const target = loaded
        ? Math.min(100, 72 + ((elapsed - MIN_DISPLAY_MS * 0.35) / MIN_DISPLAY_MS) * 28)
        : Math.min(90, (elapsed / MIN_DISPLAY_MS) * 90);

      setProgress((prev) => Math.max(prev, target));
      tryFinish();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onLoad = () => {
      loaded = true;
      tryFinish();
    };

    if (!loaded) window.addEventListener("load", onLoad);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWelcomeIndex((i) => (i + 1) % WELCOME_MESSAGES.length);
    }, 900);
    return () => window.clearInterval(interval);
  }, []);

  const topCurtainY = phase === "closing" ? "0%" : "-100%";
  const bottomCurtainY = phase === "closing" ? "0%" : "100%";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="preloader-root"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "opening" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, delay: phase === "opening" ? 0.45 : 0 }}
        >
          <div className="preloader-grain" aria-hidden="true" />
          <div className="preloader-glow" aria-hidden="true" />

          {/* Cream curtains close over maroon, then slide away */}
          <motion.div
            className="preloader-curtain preloader-curtain--left"
            initial={{ y: "-100%" }}
            animate={{ y: topCurtainY }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="preloader-curtain preloader-curtain--right"
            initial={{ y: "100%" }}
            animate={{ y: bottomCurtainY }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className="preloader-content"
            animate={
              phase !== "loading"
                ? { opacity: 0, y: -12, scale: 0.98 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.35 }}
          >
            <div className="preloader-logo-wrap">
              <div className="preloader-ring preloader-ring--outer" />
              <div className="preloader-ring preloader-ring--inner" />
              <div className="preloader-logo">
                <Image
                  src="/Logo.jpg"
                  alt=""
                  width={88}
                  height={88}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <p className="brand-tag preloader-tag">Taste Mithila</p>
            <h1 className="preloader-title font-display">Maithili Harvest</h1>
            <p className="preloader-subtitle">Artisan food from the heart of Bihar</p>

            <AnimatePresence mode="wait">
              <motion.p
                key={welcomeIndex}
                className="mt-4 text-sm tracking-wide text-[var(--color-gold-light)]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {WELCOME_MESSAGES[welcomeIndex]}
              </motion.p>
            </AnimatePresence>

            <div className="preloader-progress-wrap">
              <div className="preloader-progress-track">
                <div
                  className="preloader-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="preloader-progress-label">
                Loading {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
