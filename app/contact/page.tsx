"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactDetails = [
  { Icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
  { Icon: Mail, label: "Email", value: "hello@maithiliharvest.com" },
  { Icon: MapPin, label: "Address", value: "Darbhanga, Bihar — 846001, India" },
  { Icon: Clock, label: "Response Time", value: "Within 24 business hours" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <main style={{ backgroundColor: "var(--color-linen-white)" }}>

      {/* ── Page header ── */}
      <section
        style={{
          backgroundColor: "var(--color-deep-cacao)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          borderBottom: "0.5px solid var(--color-rich-walnut)",
        }}
      >
        <div className="section-container">
          <p className="brand-tag" style={{ color: "var(--color-aged-gold)", marginBottom: "1.25rem" }}>
            Get in Touch
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.05em",
              color: "var(--color-ivory-cream)",
              lineHeight: 1.2,
              maxWidth: "520px",
            }}
          >
            We'd love to hear from you.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-editorial)",
              fontWeight: 300,
              fontSize: "1.05rem",
              fontStyle: "italic",
              letterSpacing: "0.03em",
              lineHeight: 1.8,
              color: "rgba(196,164,106,0.7)",
              marginTop: "1.25rem",
              maxWidth: "440px",
            }}
          >
            Whether it's a wholesale enquiry, a partnership idea, or just a question about our products — write to us.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
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

          {/* Left — contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <p className="brand-tag" style={{ marginBottom: "1rem" }}>
                Contact Details
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {contactDetails.map(({ Icon, label, value }, i) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1.25rem 0",
                      borderBottom: i < contactDetails.length - 1 ? "0.5px solid var(--color-border-gold)" : "none",
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
              <p className="brand-tag" style={{ marginTop: "0.75rem" }}>
                — Amit Kumar, Founder
              </p>
            </div>
          </div>

          {/* Right — form */}
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
                  <span style={{ color: "var(--color-aged-gold)" }}>{form.email}</span>{" "}
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label
                      htmlFor="contact-name"
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
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="brand-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
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
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="brand-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

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
                    placeholder="Tell us how we can help..."
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
    </main>
  );
}
