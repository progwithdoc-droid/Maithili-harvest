"use client";

import { Timeline } from "@/components/ui/timeline";

/* ── Milestone content blocks ── */
function MilestoneContent({
  year,
  description,
  highlights,
}: {
  year: string;
  description: string;
  highlights: string[];
}) {
  return (
    <div
      style={{
        paddingBottom: "2rem",
        borderBottom: "0.5px solid rgba(196,164,106,0.12)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "0.95rem",
          letterSpacing: "0.04em",
          lineHeight: 1.85,
          color: "rgba(196,164,106,0.7)",
          marginBottom: "1.5rem",
          maxWidth: "480px",
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {highlights.map((h) => (
          <div
            key={h}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              padding: "1rem 1.25rem",
              backgroundColor: "var(--color-rich-walnut)",
              border: "0.5px solid rgba(196,164,106,0.15)",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                display: "block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--color-warm-honey)",
                flexShrink: 0,
                marginTop: "6px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                lineHeight: 1.7,
                color: "var(--color-ivory-cream)",
              }}
            >
              {h}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const timelineData = [
  {
    title: "2020",
    content: (
      <MilestoneContent
        year="2020"
        description="Amit Kumar took his first step into entrepreneurship — opening a small retail shop rooted in the spirit of Mithila's local trade culture. A humble beginning with a clear vision."
        highlights={[
          "First retail outlet launched in Darbhanga",
          "Focus on locally sourced provisions",
          "Building early customer trust and community bonds",
        ]}
      />
    ),
  },
  {
    title: "2021",
    content: (
      <MilestoneContent
        year="2021"
        description="Laid the academic and strategic foundation with a BCA degree, sharpening the vision for a modern, technology-enabled agri-business that could scale beyond the local market."
        highlights={[
          "BCA degree completed — business & technology focus",
          "Market research into regional agri-supply chains",
          "Digital presence planning initiated",
        ]}
      />
    ),
  },
  {
    title: "2022",
    content: (
      <MilestoneContent
        year="2022"
        description="Expanded into food delivery by partnering with Zomato and Swiggy — an early validation of the market appetite for authentic, regional Mithila food among urban consumers."
        highlights={[
          "Zomato & Swiggy partnerships activated",
          "First 500+ orders fulfilled in 3 months",
          "4.8★ average customer rating maintained",
        ]}
      />
    ),
  },
  {
    title: "2024",
    content: (
      <MilestoneContent
        year="2024"
        description="Began working with corporate clients and B2B partners, building the operational backbone, supply chain systems, and quality control processes needed to scale the business."
        highlights={[
          "First B2B contracts with corporate kitchens",
          "FSSAI food safety registration completed",
          "Supply chain and vendor network established",
        ]}
      />
    ),
  },
  {
    title: "2026",
    content: (
      <MilestoneContent
        year="2026"
        description="Maithili Harvest Private Limited was officially incorporated — a proud milestone marking the transition from a passionate venture into a fully registered agri-food startup bringing the authentic harvest of Mithila to kitchens across India and beyond."
        highlights={[
          "Maithili Harvest Pvt. Ltd. incorporated",
          "Import-export licensing obtained",
          "E-commerce packaging standards achieved",
          "Pan-India & international expansion roadmap live",
        ]}
      />
    ),
  },
];

export default function Story() {
  return (
    <section style={{ backgroundColor: "var(--color-deep-cacao)" }}>
      {/* ── Override the timeline's default white bg with our dark theme ── */}
      <style>{`
        .maithili-timeline .w-full.bg-white {
          background-color: var(--color-deep-cacao) !important;
        }
        .maithili-timeline h2 {
          font-family: var(--font-display) !important;
          font-weight: 400 !important;
          letter-spacing: 0.04em !important;
          color: var(--color-ivory-cream) !important;
          font-size: clamp(1.6rem, 4vw, 2.8rem) !important;
        }
        .maithili-timeline .text-neutral-700 {
          font-family: var(--font-editorial) !important;
          font-weight: 300 !important;
          font-style: italic !important;
          letter-spacing: 0.03em !important;
          color: rgba(196,164,106,0.75) !important;
          font-size: 1rem !important;
          max-width: 460px !important;
        }
        .maithili-timeline h3 {
          font-family: var(--font-display) !important;
          font-weight: 400 !important;
          letter-spacing: 0.06em !important;
          color: var(--color-warm-honey) !important;
        }
        .maithili-timeline .bg-white.dark\\:bg-black {
          background-color: var(--color-deep-cacao) !important;
        }
        .maithili-timeline .bg-neutral-200 {
          background-color: var(--color-warm-honey) !important;
        }
        .maithili-timeline .via-neutral-200 {
          --tw-gradient-stops: transparent, rgba(196,164,106,0.25), transparent !important;
        }
        .maithili-timeline .from-purple-500 {
          --tw-gradient-from: var(--color-warm-honey) !important;
        }
        .maithili-timeline .via-blue-500 {
          --tw-gradient-via: var(--color-aged-gold) !important;
        }
        .maithili-timeline .border-neutral-300 {
          border-color: rgba(196,164,106,0.3) !important;
        }
        .maithili-timeline .text-neutral-500 {
          color: var(--color-warm-honey) !important;
          font-family: var(--font-display) !important;
          font-weight: 400 !important;
        }
      `}</style>

      <div className="maithili-timeline">
        {/* Section label above the timeline */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 1.5rem 0",
          }}
        >
          <p
            className="brand-tag"
            style={{ color: "var(--color-aged-gold)", marginBottom: "1rem" }}
          >
            Our Journey
          </p>
        </div>

        <Timeline
          data={timelineData.map((item) => ({
            title: item.title,
            content: item.content,
          }))}
        />
      </div>
    </section>
  );
}