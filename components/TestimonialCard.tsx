"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface Props {
  testimonial: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    review: string;
  };
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <div className="w-full rounded-[28px] border bg-white shadow-sm">
      <div className="flex items-center gap-4 border-b p-6">

        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={50}
          height={50}
          className="rounded-full"
        />

        <div>
          <h3 className="font-semibold">
            {testimonial.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {testimonial.role} {testimonial.company}
          </p>
        </div>
      </div>

      <div className="space-y-5 p-6">

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="currentColor"
            />
          ))}
        </div>

        <p className="text-muted-foreground leading-8">
          {testimonial.review}
        </p>
      </div>
    </div>
  );
}