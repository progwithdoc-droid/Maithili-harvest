"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FacebookIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import WorldPresence from "@/components/WorldPresence";

const contactDetails = [
  { Icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
  { Icon: Mail, label: "Email", value: "hello@maithiliharvest.com" },
  { Icon: MapPin, label: "Address", value: "Darbhanga, Bihar — 846001, India" },
  { Icon: Clock, label: "Response Time", value: "Within 24 business hours" },
];

const socialLinks = [
  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/maithiliharvest" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://in.linkedin.com/in/amit-kumar-6a23a5184" },
  { Icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/@maithiliharvest" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/maithiliharvest" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <main className="bg-[var(--color-cream)]">
      <section className="border-b border-[var(--color-beige)] bg-[var(--color-maroon)] pb-12 pt-8 sm:pb-20 sm:pt-12">
        <div className="section-container">
          <p className="brand-tag mb-5 text-[var(--color-gold)]">Get in Touch</p>
          <h1 className="font-editorial max-w-lg text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[var(--color-cream)]">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-5 max-w-md text-base italic text-[var(--color-beige)]">
            Whether it&apos;s a wholesale enquiry, a partnership idea, or a question
            about our products — write to us.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="section-container grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="brand-tag mb-4">Contact Details</p>
              <div className="flex flex-col">
                {contactDetails.map(({ Icon, label, value }, i) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 py-5"
                    style={{
                      borderBottom:
                        i < contactDetails.length - 1
                          ? "1px solid var(--color-beige)"
                          : "none",
                    }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-maroon)]">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="brand-tag mb-1">{label}</p>
                      <p className="text-sm text-[var(--color-text-primary)]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className="brand-tag mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-beige)] bg-white text-[var(--color-maroon)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold-light)] hover:shadow-[var(--shadow-md)]"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
              <p className="mt-3 text-xs text-[var(--color-text-muted)]">
                Connect with us on social media for recipes, harvest updates &amp; more.
              </p>
            </div>

            <div className="border-l-2 border-[var(--color-gold)] pl-5">
              <p className="font-editorial text-base italic leading-relaxed text-[var(--color-maroon)]">
                &ldquo;We believe great relationships — like great food — are built on
                honest conversation and shared values.&rdquo;
              </p>
              <p className="brand-tag mt-3">— Amit Kumar, Founder</p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            <p className="brand-tag mb-6">Send a Message</p>

            {sent ? (
              <div className="rounded-2xl border border-[var(--color-beige)] bg-white p-8 border-l-4 border-l-[var(--color-gold)]">
                <h3 className="font-display text-xl text-[var(--color-maroon)]">
                  Message received.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Thank you, {form.name}. We&apos;ll get back to you at{" "}
                  <span className="font-semibold text-[var(--color-gold-dark)]">
                    {form.email}
                  </span>{" "}
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { id: "contact-name", name: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "contact-email", name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="brand-tag mb-2 block">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        required
                        className="brand-input"
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="brand-tag mb-2 block">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className="brand-input"
                    value={form.subject}
                    onChange={handleChange}
                    style={{ cursor: "pointer" }}
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Enquiry</option>
                    <option value="wholesale">Wholesale / B2B</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="brand-tag mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="brand-input"
                    placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={handleChange}
                    style={{ resize: "vertical", minHeight: "130px" }}
                  />
                </div>

                <button type="submit" className="btn-primary self-start">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <WorldPresence />
    </main>
  );
}
