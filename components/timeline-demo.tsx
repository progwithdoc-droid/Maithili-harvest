import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2020",
      content: (
        <div className="space-y-6">
          <p className="max-w-2xl text-sm font-normal text-neutral-700 md:text-base dark:text-neutral-200">
            Amit Kumar opened the first Maithili Harvest shop in Darbhanga, building a small but trusted local base for authentic regional food and provisions.
          </p>
          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/90 p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
              <Image
                src="/about/man-image.svg"
                alt="Founder portrait"
                width={900}
                height={1100}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Milestone</p>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">First retail outlet launched in Darbhanga.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                <Image
                  src="/about/signature.svg"
                  alt="Signature"
                  width={280}
                  height={120}
                  className="h-24 w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-6">
          <p className="max-w-2xl text-sm font-normal text-neutral-700 md:text-base dark:text-neutral-200">
            The business expanded into food delivery partnerships, proving demand for Mithila-origin recipes in urban markets.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Growth</p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">Zomato and Swiggy partnerships activated for wider reach.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Trust</p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">Early customer ratings stayed consistently high through word of mouth.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div className="space-y-6">
          <p className="max-w-2xl text-sm font-normal text-neutral-700 md:text-base dark:text-neutral-200">
            Maithili Harvest Private Limited became the formal brand identity, built for regional growth, traceability, and future expansion.
          </p>
          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Brand</p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">Registered as a formal startup with a premium regional identity.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Commitment</p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">Focused on authentic sourcing, cleaner packaging, and expanded distribution.</p>
            </div>
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
