
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const MIN_DISPLAY_MS = 3000;
const FORCE_COMPLETE_MS = 7000;

type Phase = "welcome" | "logo" | "opening" | "done";

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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let loaded = document.readyState === "complete";
    let raf = 0;

    const finish = () => {
      if (finishedRef.current) return;

      finishedRef.current = true;

      setProgress(100);
      setPhase("logo");

      setTimeout(() => {
        setPhase("opening");
      }, 1200);

      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 2600);
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
        ? Math.min(
            100,
            75 + ((elapsed - MIN_DISPLAY_MS * 0.3) / MIN_DISPLAY_MS) * 25
          )
        : Math.min(92, (elapsed / MIN_DISPLAY_MS) * 92);

      setProgress((prev) => Math.max(prev, target));

      tryFinish();

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onLoad = () => {
      loaded = true;
      tryFinish();
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

    const interval = setInterval(() => {
      setWelcomeIndex((i) => (i + 1) % WELCOME_MESSAGES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-9999 overflow-hidden bg-[#4b0f19]"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "opening" ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Grain */}
        <div className="absolute inset-0 opacity-10 bg-[url('/grain.png')]" />

        {/* Doors */}
        <motion.div
          className="absolute left-0 top-0 h-full w-1/2 bg-[#f4e6cb] z-30"
          initial={{ x: "-100%" }}
          animate={{
            x:
              phase === "opening"
                ? "-100%"
                : phase === "logo"
                ? "0%"
                : "-100%",
          }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
        />

        <motion.div
          className="absolute right-0 top-0 h-full w-1/2 bg-[#f4e6cb] z-30"
          initial={{ x: "100%" }}
          animate={{
            x:
              phase === "opening"
                ? "100%"
                : phase === "logo"
                ? "0%"
                : "100%",
          }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
        />

        {/* Welcome Text */}
        {phase === "welcome" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={welcomeIndex}
              className="absolute inset-0 flex items-center justify-center px-8"
              initial={{
                opacity: 0,
                scale: 1.3,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                filter: "blur(15px)",
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(3rem,10vw,10rem)",
                }}
                className="font-display text-center text-white font-bold leading-tight"
              >
                {WELCOME_MESSAGES[welcomeIndex]}
              </h1>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Logo Reveal */}
        <AnimatePresence>
          {phase !== "welcome" && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-20"
              initial={{
                scale: 0.15,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative"
              >
                <div className="absolute -inset-7.5 rounded-full bg-yellow-400/30 blur-3xl animate-pulse" />

                <div className="relative h-28 w-28 rounded-full overflow-hidden border-4 border-[#D4AF37]">
                  <Image
                    src="/Logo.jpg"
                    alt="Maithili Harvest"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="mt-8 text-white text-4xl md:text-6xl font-display"
              >
                Maithili Harvest
              </motion.h2>

              <p className="mt-3 text-[#d4af37] tracking-[0.25em] uppercase">
                Taste Mithila
              </p>

              <div className="mt-12 w-64">
                <div className="h-0.75 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#D4AF37]"
                    animate={{
                      width: `${progress}%`,
                    }}
                  />
                </div>

                <p className="mt-3 text-center text-white/70 text-sm">
                  Loading {Math.round(progress)}%
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center Light Burst */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: phase === "opening" ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-yellow-300/30 via-transparent to-transparent" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

