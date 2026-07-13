"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const WELCOME_MS = 1000;
const LOGO_MS = 550;
const FORCE_COMPLETE_MS = 2800;

type Phase = "welcome" | "logo" | "closing" | "opening" | "done";

const WELCOME_MESSAGES = [
  "Welcome to Maithili Harvest",
  "मैथिली हार्वेस्ट में आपका स्वागत है",
  "मैथिली हार्वेस्टमे अहाँक स्वागत अछि",
];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("welcome");
  const [welcomeIndex, setWelcomeIndex] = useState(0);

  const finishedRef = useRef(false);
  const phaseRef = useRef<Phase>("welcome");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let loaded = document.readyState === "complete";
    let raf = 0;

    const setPhaseSafe = (next: Phase) => {
      phaseRef.current = next;
      setPhase(next);
    };

    const runExit = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;

      setProgress(100);
      setPhaseSafe("closing");

      window.setTimeout(() => setPhaseSafe("opening"), 320);

      window.setTimeout(() => {
        setVisible(false);
        setPhaseSafe("done");
        document.body.style.overflow = "";
      }, 720);
    };

    const tryAdvance = () => {
      const elapsed = Date.now() - start;

      if (phaseRef.current === "welcome") {
        if (elapsed >= WELCOME_MS && loaded) {
          setPhaseSafe("logo");
        } else if (elapsed >= FORCE_COMPLETE_MS) {
          setPhaseSafe("logo");
        }
        return;
      }

      if (phaseRef.current === "logo") {
        const logoElapsed = elapsed - WELCOME_MS;
        if (logoElapsed >= LOGO_MS && loaded) {
          runExit();
        } else if (elapsed >= FORCE_COMPLETE_MS) {
          runExit();
        }
      }
    };

    const tick = () => {
      const elapsed = Date.now() - start;

      if (phaseRef.current === "welcome") {
        const target = Math.min(55, (elapsed / WELCOME_MS) * 55);
        setProgress((prev) => Math.max(prev, target));
      } else if (phaseRef.current === "logo") {
        const logoElapsed = Math.max(0, elapsed - WELCOME_MS);
        const target = Math.min(100, 55 + (logoElapsed / LOGO_MS) * 45);
        setProgress((prev) => Math.max(prev, target));
      }

      tryAdvance();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onLoad = () => {
      loaded = true;
      tryAdvance();
    };

    if (!loaded) {
      window.addEventListener("load", onLoad);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "welcome") return;

    const interval = window.setInterval(() => {
      setWelcomeIndex((i) => (i + 1) % WELCOME_MESSAGES.length);
    }, 650);

    return () => window.clearInterval(interval);
  }, [phase]);

  const topCurtainY = phase === "closing" ? "0%" : "-100%";
  const bottomCurtainY = phase === "closing" ? "0%" : "100%";

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        className="preloader-root"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "opening" ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, delay: phase === "opening" ? 0.12 : 0 }}
      >
        <div className="preloader-grain" aria-hidden="true" />
        <div className="preloader-glow" aria-hidden="true" />

        {/* Cream curtains — only close/open at the very end */}
        <motion.div
          className="preloader-curtain preloader-curtain--left"
          initial={{ y: "-100%" }}
          animate={{ y: topCurtainY }}
          transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="preloader-curtain preloader-curtain--right"
          initial={{ y: "100%" }}
          animate={{ y: bottomCurtainY }}
          transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Welcome — full-screen cycling text */}
        <AnimatePresence mode="wait">
          {phase === "welcome" && (
            <motion.div
              key={`welcome-${welcomeIndex}`}
              className="preloader-welcome"
              initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="preloader-welcome-text font-display">
                {WELCOME_MESSAGES[welcomeIndex]}
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo reveal — curtains stay off-screen so this stays visible */}
        <AnimatePresence>
          {(phase === "logo" || phase === "closing") && (
            <motion.div
              className="preloader-content"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="preloader-logo-wrap">
                <div className="preloader-ring preloader-ring--outer" />
                <div className="preloader-ring preloader-ring--inner" />
                <motion.div
                  className="preloader-logo"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/Logo.jpg"
                    alt="Maithili Harvest"
                    width={88}
                    height={88}
                    className="h-full w-full object-cover"
                    priority
                  />
                </motion.div>
              </div>

              <p className="brand-tag preloader-tag">Taste Mithila</p>
              <h2 className="preloader-title font-display">Maithili Harvest</h2>
              <p className="preloader-subtitle">Artisan food from the heart of Bihar</p>

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
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

