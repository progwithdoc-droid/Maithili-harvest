"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const brands = [
  {
    name: "Amazon",
    logo: "/brands/amazon.png",
  },
  {
    name: "Flipkart",
    logo: "/brands/flipkart.png",
  },
  {
    name: "Blinkit",
    logo: "/brands/blinkit.png",
  },
  {
    name: "Zomato",
    logo: "/brands/zomato.png",
  },
];

type ShopModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ShopModal({ open, onClose }: ShopModalProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % brands.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col items-center gap-5">

          <div className="relative h-28 w-28">
            <Image
              src={brands[current].logo}
              alt={brands[current].name}
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold">
            Shop Now
          </h2>

          <p className="text-center text-gray-500">
            Explore amazing offers from
            <span className="font-semibold ml-1">
              {brands[current].name}
            </span>
          </p>

          <button className="rounded-xl bg-black px-6 py-3 text-white">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}