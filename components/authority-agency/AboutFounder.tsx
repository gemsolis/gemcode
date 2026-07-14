"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ImagePlaceholder from "@/components/authority-agency/ImagePlaceholder";

const STATS = [
  { value: "2x", label: "Bestselling Author" },
  { value: "52+", label: "Stages a Year" },
  { value: "500+", label: "Speakers Coached" },
  { value: "10yr", label: "In the Industry" },
];

export default function AboutFounder() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-16"
      >
        <div className="reveal-item">
          <ImagePlaceholder label="Founder Photo" className="aspect-[4/5] w-full" />
        </div>

        <div className="reveal-item">
          <p className="text-xs font-semibold tracking-widest text-authority-green uppercase">
            Meet the Founder
          </p>
          <h2 className="font-authority-sans mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Meet Daniella Dorrett
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Daniella has built her career helping speakers, coaches, and
            experts turn stage time into real business growth. After booking
            hundreds of speaking engagements herself, she built the Authority
            Agency to give clients the same system, without the years of
            trial and error.
          </p>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            &ldquo;She doesn&apos;t just talk about speaking. She lives it.&rdquo;
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl font-bold text-neutral-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
