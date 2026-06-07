"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircleMore, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);


const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Home Chef & Food Blogger",
    company: "Rasoi Se Dil Tak",
    avatar: "/testimonials/priya.svg",
    review:
      "The mustard oil and thekua mix from Maithili Harvest brought back memories of my nani's kitchen in Darbhanga. Genuinely authentic — you can taste the difference from supermarket brands.",
  },

  {
    id: 2,
    name: "Rajesh Jha",
    role: "Restaurant Owner",
    company: "Mithila Bhoj, Patna",
    avatar: "/testimonials/rajesh.svg",
    review:
      "We source our spices and organic rice exclusively from Maithili Harvest. The quality is consistent, packaging is clean, and Amit personally ensures every batch meets standard. Truly a brand built with purpose.",
  },

  {
    id: 3,
    name: "Ananya Mishra",
    role: "Nutritionist & Wellness Coach",
    company: "Sattvik Living",
    avatar: "/testimonials/ananya.svg",
    review:
      "I recommend Maithili Harvest to all my clients looking for unprocessed, region-authentic food. Their products are traceable, fresh, and free from unnecessary additives. Exactly what clean eating should look like.",
  },
];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <span className="inline-flex rounded-full border px-4 py-1 text-sm">
              Testimonials
            </span>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Trusted by clients
              <br />
              around the globe. 🌍
            </h2>
          </div>

          <p className="max-w-xl text-lg text-muted-foreground">
            I'm grateful to collaborate with forward-thinking
            brands and teams who value design that creates
            a real difference in user experiences and drives
            business success.
          </p>

        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="flex flex-col justify-between">

            <div>

              <p className="mb-12 text-xl text-muted-foreground">
                I'm grateful to collaborate with brands and teams.
              </p>

              <div className="grid grid-cols-3 border-y py-10">

                <div className="text-center">
                  <h3 className="text-4xl font-bold">
                    100+
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Happy Client
                  </p>
                </div>

                <div className="text-center border-x">
                  <h3 className="text-4xl font-bold">
                    $250m
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Revenue Added
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-4xl font-bold">
                    4.8
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Average Rating
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-12 flex gap-5">

              <button className="flex items-center gap-2 rounded-full border px-6 py-3">
                Let's Talk
                <MessageCircleMore size={18} />
              </button>

              <button className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white">
                Hire Me
                <ArrowUpRight size={18} />
              </button>

            </div>
          </div>

          {/* RIGHT */}

          <div className="relative h-[420px]">

            {/* Back Card 3 */}
            <div className="absolute left-10 right-10 top-0 scale-[0.90] rounded-[28px] border bg-white opacity-50">
              <div className="h-[250px]" />
            </div>

            {/* Back Card 2 */}
            <div className="absolute left-5 right-5 top-5 scale-[0.95] rounded-[28px] border bg-white opacity-70">
              <div className="h-[250px]" />
            </div>

            {/* Main Animated Card */}

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -50,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute inset-x-0 top-10"
              >
                <TestimonialCard
                  testimonial={testimonials[active]}
                />
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}