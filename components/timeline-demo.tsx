import type { ReactNode } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

function TimelineImage({
  src,
  alt,
  className = "h-72",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-(--color-beige) bg-(--color-cream) ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={900}
        height={700}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

function InfoCard({
  title,
  children,
  badge,
}: {
  title: string;
  children: ReactNode;
  badge?: string;
}) {
  return (
    <div className="rounded-2xl border border-(--color-beige) bg-white p-6 shadow-(--shadow-sm)">
      <h3 className="mb-2 font-display text-lg font-semibold text-(--color-maroon)">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-(--color-text-secondary)">
        {children}
      </div>
      {badge && (
        <div className="mt-4 inline-flex rounded-full bg-(--color-gold-light)/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--color-maroon-dark)">
          {badge}
        </div>
      )}
    </div>
  );
}

export default function TimelineDemo() {
  const data = [
    {
      title: "2020",
      content: (
        <div className="space-y-6">
          <p className="max-w-3xl text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
            The entrepreneurial journey began in Darbhanga, Bihar. With a passion
            for serving quality food and everyday essentials, Amit Kumar opened a
            small retail store built on trust, customer relationships, and
            dedication — the foundation of what would later become Maithili
            Harvest.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <TimelineImage src="/about/man-image.png" alt="First retail store in Darbhanga" />
            <InfoCard title="First Retail Store" badge="Darbhanga, Bihar">
              Opened the first local food and grocery shop in Darbhanga and
              started building customer trust through quality products and
              service.
            </InfoCard>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="space-y-6">
          <p className="max-w-3xl text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
            A new chapter began in Kolkata with the launch of Puchkawala —
            bringing authentic Mithila street flavours to a wider audience while
            learning branding, customer experience, and food entrepreneurship.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard title="Launch of Puchkawala" badge="Kolkata, West Bengal">
              Started a street-food venture in Kolkata, introducing crispy phuchka
              and traditional flavours to new customers across the city.
            </InfoCard>
            <TimelineImage src="/products/puchka.jpeg" alt="Puchkawala street food" />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-6">
          <p className="max-w-3xl text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
            Amit began his Bachelor of Computer Applications (BCA) in Kolkata —
            balancing academics with entrepreneurship. This year strengthened
            both business discipline and digital thinking for the brand ahead.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <TimelineImage src="/about/bca.jpeg" alt="BCA journey — campus life" />
            <TimelineImage src="/about/bca2.jpeg" alt="BCA studies in Kolkata" />
          </div>
          <InfoCard title="Started BCA" badge="Kolkata · 2022">
            Enrolled in Bachelor of Computer Applications while continuing to
            grow the food business — merging technology skills with real-world
            entrepreneurial experience.
          </InfoCard>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-6">
          <p className="max-w-3xl text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
            The business embraced digital transformation by partnering with
            leading food delivery platforms. Joining Zomato and Swiggy enabled
            thousands of customers across Kolkata to enjoy the products while
            significantly increasing operational reach.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <TimelineImage src="/about/man-image.png" alt="Food delivery expansion" className="h-64 md:col-span-1" />
            <InfoCard title="Zomato">
              Expanded customer reach through online ordering and doorstep delivery
              across Kolkata.
            </InfoCard>
            <InfoCard title="Swiggy">
              Improved accessibility and convenience for customers through
              platform partnerships.
            </InfoCard>
          </div>
        </div>
      ),
    },
    {
      title: "2024 – 2025",
      content: (
        <div className="space-y-6">
          <p className="max-w-3xl text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
            With growing recognition, the team expanded into corporate catering,
            event food services, and brand operations. Market research, packaging
            innovation, and supplier partnerships laid the groundwork for
            Maithili Harvest.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <TimelineImage src="/about/office.jpeg" alt="Office and operations" />
            <InfoCard title="Growth & Operations" badge="Corporate · Events">
              <ul className="space-y-2">
                <li>✓ Corporate catering & office events</li>
                <li>✓ College festivals & celebrations</li>
                <li>✓ Product development & packaging</li>
                <li>✓ Supplier & marketplace partnerships</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div className="space-y-6">
          <p className="max-w-3xl text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
            Maithili Harvest was officially launched with a mission to bring the
            authentic taste of Mithila to households across India — from Makhana,
            pickles, and traditional sweets to heritage grains and spices.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard title="Maithili Harvest Launch" badge="Registered · 2026">
              <ul className="space-y-2">
                <li>✓ Premium food brand from Mithila</li>
                <li>✓ FSSAI registered products</li>
                <li>✓ Traditional & regional specialities</li>
                <li>✓ Online marketplace presence</li>
                <li>✓ Pan-India expansion vision</li>
              </ul>
            </InfoCard>
            <TimelineImage src="/Logo.jpg" alt="Maithili Harvest brand launch" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-(--color-cream)">
      <Timeline data={data} />
    </div>
  );
}
