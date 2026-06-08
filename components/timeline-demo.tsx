import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
    title: "2020",
    content: (
      <div className="space-y-6">
        <p className="max-w-3xl text-sm md:text-base text-neutral-700 dark:text-neutral-200">
          The entrepreneurial journey began in Darbhanga, Bihar. With a
          passion for serving quality food and everyday essentials, Amit Kumar
          opened a small retail store. Built on trust, customer relationships,
          and dedication, the shop quickly became a recognized local business.
          This was the foundation of what would later become Maithili Harvest.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Image
            src="/about/man-image.jpg"
            alt="Darbhanga Store"
            width={800}
            height={600}
            className="h-72 w-full rounded-2xl object-cover"
          />

          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
            <h3 className="mb-2 text-lg font-semibold">
              First Retail Store
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Opened the first local food and grocery shop in Darbhanga and
              started building customer trust through quality products and
              service.
            </p>

            <div className="mt-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
               Darbhanga, Bihar
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "2021",
    content: (
      <div className="space-y-6">
        <p className="max-w-3xl text-sm md:text-base text-neutral-700 dark:text-neutral-200">
          A new chapter began in Kolkata. While pursuing a Bachelor of Computer
          Applications (BCA), Amit launched "Puchkawala", combining traditional
          flavors with modern business practices. This period introduced him to
          branding, customer experience, and food entrepreneurship at scale.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
            <h3 className="mb-2 text-lg font-semibold">
              Launch of Puchkawala
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Started a street-food venture while studying in Kolkata,
              introducing authentic flavors to a wider audience.
            </p>

            <div className="mt-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
               Kolkata, West Bengal
            </div>
          </div>

          <Image
            src="/about/man-image.jpg"
            alt="Puchkawala"
            width={800}
            height={600}
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    ),
  },

  {
    title: "2022",
    content: (
      <div className="space-y-6">
        <p className="max-w-3xl text-sm md:text-base text-neutral-700 dark:text-neutral-200">
          The business embraced digital transformation by partnering with
          leading food delivery platforms. Joining Zomato and Swiggy enabled
          thousands of customers across Kolkata to enjoy the products while
          significantly increasing operational reach.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Image
            src="/about/man-image.jpg"
            alt="Food Delivery"
            width={600}
            height={500}
            className="h-64 w-full rounded-2xl object-cover"
          />

          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
            <h4 className="font-semibold">Zomato</h4>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Expanded customer reach through online ordering and delivery.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
            <h4 className="font-semibold">Swiggy</h4>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Improved accessibility and convenience for customers across the
              city.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "2023",
    content: (
      <div className="space-y-6">
        <p className="max-w-3xl text-sm md:text-base text-neutral-700 dark:text-neutral-200">
          With growing recognition, the company expanded into corporate catering
          and event food services. From office gatherings to college festivals,
          private celebrations, and corporate events, the team delivered food
          experiences to larger audiences.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Image
            src="/about/man-image.jpg"
            alt="Corporate Catering"
            width={800}
            height={600}
            className="h-72 w-full rounded-2xl object-cover"
          />

          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
            <h3 className="mb-2 text-lg font-semibold">
              Corporate Event Services
            </h3>

            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>✓ Corporate Catering</li>
              <li>✓ College Festivals</li>
              <li>✓ Office Events</li>
              <li>✓ Private Celebrations</li>
              <li>✓ Bulk Food Orders</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "2024 - 2025",
    content: (
      <div className="space-y-6">
        <p className="max-w-3xl text-sm md:text-base text-neutral-700 dark:text-neutral-200">
          During these years, extensive market research, product development,
          branding, packaging innovation, and supplier partnerships laid the
          groundwork for a larger vision. Traditional Mithila foods were
          carefully selected and prepared for a premium consumer brand.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Image
            src="/about/man-image.jpg"
            alt="Research"
            width={600}
            height={500}
            className="h-56 w-full rounded-2xl object-cover"
          />

          <Image
            src="/about/man-image.jpg"
            alt="Packaging"
            width={600}
            height={500}
            className="h-56 w-full rounded-2xl object-cover"
          />

          <Image
            src="/about/man-image.jpg"
            alt="Development"
            width={600}
            height={500}
            className="h-56 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    ),
  },

  {
    title: "2026",
    content: (
      <div className="space-y-6">
        <p className="max-w-3xl text-sm md:text-base text-neutral-700 dark:text-neutral-200">
          Maithili Harvest was officially launched with a mission to bring the
          authentic taste of Mithila to households across India. From Makhana,
          Pickles, Sattu, Traditional Sweets, Rice, Spices, and Heritage Foods,
          the brand represents culture, quality, and authenticity.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
            <h3 className="mb-3 text-lg font-semibold">
              Maithili Harvest Launch
            </h3>

            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>✓ Premium Food Brand</li>
              <li>✓ FSSAI Registered</li>
              <li>✓ Traditional Mithila Products</li>
              <li>✓ Online Marketplace Presence</li>
              <li>✓ Pan-India Expansion Vision</li>
            </ul>
          </div>

          <Image
            src="/about/man-image.jpg"
            alt="Maithili Harvest"
            width={900}
            height={700}
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    ),
  },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
