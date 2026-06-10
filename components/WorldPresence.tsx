"use client";

import WorldMap from "@/components/ui/world-map";

export default function WorldPresence() {
  const dots = [
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 28.61, lng: 77.21, label: "Delhi" } },
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 19.08, lng: 72.88, label: "Mumbai" } },
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 51.51, lng: -0.13, label: "London" } },
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 40.71, lng: -74.01, label: "New York" } },
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 25.2, lng: 55.27, label: "Dubai" } },
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 1.35, lng: 103.82, label: "Singapore" } },
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: -33.87, lng: 151.21, label: "Sydney" } },
    { start: { lat: 26.12, lng: 85.9, label: "Darbhanga" }, end: { lat: 43.65, lng: -79.38, label: "Toronto" } },
  ];

  const stats = [
    { value: "2+", label: "Countries" },
    { value: "25+", label: "Cities" },
    { value: "5000+", label: "Happy Customers" },
    { value: "100%", label: "Authentic Sourcing" },
  ];

  return (
    <section className="border-t border-[var(--color-beige)] bg-[var(--color-beige-light)]/30 py-12 md:py-20">
      <div className="section-container">
        <div className="mb-8 text-center md:mb-14">
          <p className="brand-tag mb-4">Global Reach</p>
          <h2 className="font-editorial text-[clamp(1.8rem,4vw,2.8rem)] text-[var(--color-maroon)]">
            We Are Available All Around the World
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base italic text-[var(--color-text-secondary)]">
            From the fertile plains of Darbhanga, Bihar — our products travel to
            kitchens, restaurants, and pantries across continents.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-[var(--color-beige)] bg-white shadow-[var(--shadow-sm)]">
          <WorldMap dots={dots} lineColor="#D39D55" />
        </div>

        <div className="mt-12 grid grid-cols-2 border border-[var(--color-beige)] bg-white sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-r border-[var(--color-beige)] p-4 text-center last:border-r-0 sm:border-b-0 sm:p-6 even:border-r-0 sm:even:border-r"
            >
              <p className="font-display text-xl font-bold text-[var(--color-maroon)] sm:text-2xl md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
