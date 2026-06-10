"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const MIN_DISPLAY_MS = 2200;
const FORCE_COMPLETE_MS = 5500;

type Phase = "loading" | "closing" | "opening" | "done";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    setVisible(true);
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let loaded = false;
    let raf = 0;

    const finish = () => {
      setProgress(100);
      setPhase("closing");

      window.setTimeout(() => setPhase("opening"), 380);

      window.setTimeout(() => {
        setVisible(false);
        setPhase("done");
        document.body.style.overflow = "";
      }, 1250);
    };

    const tryFinish = () => {
      const elapsed = Date.now() - start;
      if (loaded && elapsed >= MIN_DISPLAY_MS) {
        finish();
      } else if (elapsed >= FORCE_COMPLETE_MS) {
        finish();
      }
    };

    const tick = () => {
      const elapsed = Date.now() - start;
      const target = loaded
        ? Math.min(100, 70 + ((elapsed - MIN_DISPLAY_MS * 0.4) / MIN_DISPLAY_MS) * 30)
        : Math.min(88, (elapsed / MIN_DISPLAY_MS) * 88);

      setProgress((prev) => Math.max(prev, target));
      tryFinish();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onLoad = () => {
      loaded = true;
      tryFinish();
    };

    if (document.readyState === "complete") {
      loaded = true;
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = "";
    };
  }, []);

  const curtainTopY =
    phase === "loading" ? "-100%" : phase === "closing" ? "0%" : "-100%";
  const curtainBottomY =
    phase === "loading" ? "100%" : phase === "closing" ? "0%" : "100%";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="preloader-root"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "opening" ? 0 : 1 }}
          transition={{ duration: 0.3, delay: phase === "opening" ? 0.5 : 0 }}
        >
          <motion.div
            className="preloader-curtain preloader-curtain--left"
            animate={{ y: curtainTopY }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="preloader-curtain preloader-curtain--right"
            animate={{ y: curtainBottomY }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="preloader-grain" aria-hidden="true" />
          <div className="preloader-glow" aria-hidden="true" />

          <motion.div
            className="preloader-content"
            animate={
              phase !== "loading"
                ? { opacity: 0, y: -16, scale: 0.97 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="preloader-logo-wrap"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <div className="preloader-ring preloader-ring--outer" />
              <div className="preloader-ring preloader-ring--inner" />
              <div className="preloader-logo">
                <Image
                  src="/Logo.jpg"
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
            </motion.div>

            <motion.p
              className="preloader-tag brand-tag"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              Taste Mithila
            </motion.p>

            <motion.h1
              className="preloader-title font-display"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Maithili Harvest
            </motion.h1>

            <motion.p
              className="preloader-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Artisan food from the heart of Bihar
            </motion.p>

            <motion.div
              className="preloader-progress-wrap"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.85 }}
            >
              <div className="preloader-progress-track">
                <div
                  className="preloader-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="preloader-progress-label">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
