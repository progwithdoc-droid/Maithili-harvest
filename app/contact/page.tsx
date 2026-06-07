"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import WorldPresence from "@/components/WorldPresence";

const contactDetails = [
  { Icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
  { Icon: Mail, label: "Email", value: "hello@maithiliharvest.com" },
  { Icon: MapPin, label: "Address", value: "Darbhanga, Bihar — 846001, India" },
  { Icon: Clock, label: "Response Time", value: "Within 24 business hours" },
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
    <main className="bg-white">
      <section className="border-b border-[var(--color-border)] bg-[var(--color-off-white)] pb-20 pt-12">
        <div className="section-container">
          <p className="brand-tag mb-5">Get in Touch</p>
          <h1 className="font-editorial max-w-lg text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[var(--color-ink)]">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-5 max-w-md text-base italic text-[var(--color-text-secondary)]">
            Whether it&apos;s a wholesale enquiry, a partnership idea, or a question
            about our products — write to us.
          </p>
        </div>
      </section>

      {/* ── Contact form + details ── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div
          className="section-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* LEFT — contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <p className="brand-tag" style={{ marginBottom: "1rem" }}>
                Contact Details
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {contactDetails.map(({ Icon, label, value }, i) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1.25rem 0",
                      borderBottom:
                        i < contactDetails.length - 1
                          ? "0.5px solid var(--color-border-gold)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        flexShrink: 0,
                        border: "0.5px solid var(--color-border-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-aged-gold)",
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          fontSize: "10px",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "var(--color-aged-gold)",
                          marginBottom: "3px",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 300,
                          fontSize: "0.9rem",
                          letterSpacing: "0.04em",
                          lineHeight: 1.6,
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div
              style={{
                borderLeft: "2px solid var(--color-warm-honey)",
                paddingLeft: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  fontStyle: "italic",
                  letterSpacing: "0.03em",
                  lineHeight: 1.85,
                  color: "var(--color-spice-mahogany)",
                }}
              >
                "We believe great relationships — like great food — are built on
                honest conversation and shared values."
              </p>
              <p
                className="brand-tag"
                style={{ marginTop: "0.75rem" }}
              >
                — Amit Kumar, Founder
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            <p className="brand-tag" style={{ marginBottom: "2rem" }}>
              Send a Message
            </p>

            {sent ? (
              <div
                style={{
                  padding: "2.5rem",
                  border: "0.5px solid var(--color-border-gold)",
                  backgroundColor: "var(--color-ivory-cream)",
                  borderLeft: "2px solid var(--color-forest-herb)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "1.4rem",
                    letterSpacing: "0.04em",
                    color: "var(--color-deep-cacao)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message received.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    letterSpacing: "0.05em",
                    lineHeight: 1.8,
                    color: "var(--color-text-muted)",
                  }}
                >
                  Thank you, {form.name}. We'll get back to you at{" "}
                  <span style={{ color: "var(--color-aged-gold)" }}>
                    {form.email}
                  </span>{" "}
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Name + Email row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                  className="grid-cols-1 sm:grid-cols-2"
                >
                  {[
                    { id: "contact-name", name: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "contact-email", name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          fontSize: "10px",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "var(--color-aged-gold)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
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

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-aged-gold)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className="brand-input"
                    value={form.subject}
                    onChange={handleChange}
                    style={{ cursor: "pointer", appearance: "none" }}
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Enquiry</option>
                    <option value="wholesale">Wholesale / B2B</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-aged-gold)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
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

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── World Map — "We Are Available All Around the World" ── */}
      <WorldPresence />
    </main>
  );
}
