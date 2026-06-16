"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import {
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import { getDemoYouTubeEmbedUrl } from "@/components/Home/VideoBackground";
import { heroDemoVideo, hero1BackgroundImage } from "@/components/Home/data";
import WorldPresence from "@/components/WorldPresence";

const EMAIL = "hello@maithiliharvest.com";
const PHONE_DISPLAY = "+91 XXXXX XXXXX";
const PHONE_TEL = "+91XXXXXXXXXX";

const contactCards = [
  {
    Icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    action: "Send Email",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    action: "Call Us",
  },
  {
    Icon: MapPin,
    label: "Address",
    value: "Darbhanga, Bihar — 846001, India",
    href: "https://maps.google.com/?q=Darbhanga,Bihar",
    action: "View Map",
  },
  {
    Icon: Clock,
    label: "Reply Time",
    value: "Within 24 business hours",
    href: null,
    action: null,
  },
];

const socialLinks = [
  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/maithiliharvest" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://in.linkedin.com/in/amit-kumar-6a23a5184" },
  { Icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/@maithiliharvest" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/maithiliharvest" },
];

const mailTopics = [
  { id: "order", label: "Order", subject: "Order Enquiry" },
  { id: "wholesale", label: "Wholesale", subject: "Wholesale / B2B Enquiry" },
  { id: "partnership", label: "Partnership", subject: "Partnership Proposal" },
  { id: "press", label: "Press", subject: "Press & Media" },
] as const;

export default function ContactPage() {
  const [topicId, setTopicId] = useState<(typeof mailTopics)[number]["id"]>("order");
  const [copied, setCopied] = useState(false);

  const topic = mailTopics.find((t) => t.id === topicId) ?? mailTopics[0];
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(topic.subject)}&body=${encodeURIComponent("Hi Maithili Harvest team,\n\n")}`;
  const embedUrl = getDemoYouTubeEmbedUrl(heroDemoVideo.url);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <main className="bg-[var(--color-cream)]">
      {/* Hero with image + headline */}
      <section className="relative overflow-hidden border-b border-[var(--color-beige)]">
        <div className="absolute inset-0">
          <Image
            src={hero1BackgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-maroon)]/88 via-[var(--color-maroon)]/72 to-[var(--color-maroon)]/55" />
        </div>

        <div className="section-container relative z-10 py-16 sm:py-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="brand-tag mb-4 text-[var(--color-gold)]"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-editorial max-w-2xl text-[clamp(2.25rem,5vw,4rem)] leading-tight text-[var(--color-cream)]"
          >
            Let&apos;s start a conversation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-[var(--color-beige)]"
          >
            No forms, no waiting — tap your email app and write to us directly.
          </motion.p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="section-container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="brand-tag mb-3">Write To Us</p>
            <h2 className="font-editorial mb-6 text-3xl text-[var(--color-maroon)] sm:text-4xl">
              One tap to our inbox.
            </h2>

            <div className="mb-5 flex flex-wrap gap-2">
              {mailTopics.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTopicId(t.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    topicId === t.id
                      ? "border-[var(--color-maroon)] bg-[var(--color-maroon)] text-[var(--color-cream)]"
                      : "border-[var(--color-beige)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-gold)]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--color-beige)] bg-white p-8 shadow-[var(--shadow-md)]">
              <p className="brand-tag mb-2 text-[var(--color-text-muted)]">
                Subject: {topic.subject}
              </p>
              <p className="break-all font-editorial text-2xl text-[var(--color-maroon)] sm:text-3xl">
                {EMAIL}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={mailto} className="btn-primary inline-flex items-center gap-2">
                  Open Mail App
                  <ArrowUpRight size={16} />
                </Link>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy Email"}
                </button>
              </div>
            </div>

            {/* Contact cards grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactCards.map(({ Icon, label, value, href, action }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[var(--color-beige)] bg-white p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-maroon)]">
                    <Icon size={18} />
                  </div>
                  <p className="brand-tag mb-1">{label}</p>
                  <p className="text-base font-medium text-[var(--color-text-primary)]">
                    {value}
                  </p>
                  {href && action && (
                    <Link
                      href={href}
                      target={label === "Address" ? "_blank" : undefined}
                      rel={label === "Address" ? "noopener noreferrer" : undefined}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-gold-dark)] no-underline hover:text-[var(--color-maroon)]"
                    >
                      {action} <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — video + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 bg-white shadow-[var(--shadow-md)]">
              <div className="border-b border-[var(--color-beige)] px-5 py-3">
                <p className="brand-tag text-[var(--color-gold-dark)]">Behind the brand</p>
              </div>
              <div className="relative aspect-video bg-[var(--color-beige-light)]">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={heroDemoVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-6 text-center text-[var(--color-text-muted)]">
                    {heroDemoVideo.title}
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-beige)] bg-[var(--color-gold-light)]/40 p-6">
              <p className="brand-tag mb-4">Follow Us</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-beige)] bg-white text-[var(--color-maroon)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:shadow-[var(--shadow-sm)]"
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
                Recipes, harvest stories, and new product drops — follow us for
                the taste of Mithila.
              </p>
            </div>

            <blockquote className="border-l-4 border-[var(--color-gold)] pl-5">
              <p className="font-editorial text-lg italic leading-relaxed text-[var(--color-maroon)]">
                &ldquo;Great food — like great relationships — starts with an
                honest hello.&rdquo;
              </p>
              <cite className="brand-tag mt-3 block not-italic">
                — Amit Kumar, Founder
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <WorldPresence />
    </main>
  );
}
