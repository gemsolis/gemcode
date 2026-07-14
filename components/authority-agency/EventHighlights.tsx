"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ImagePlaceholder from "@/components/authority-agency/ImagePlaceholder";

const EVENTS = [
  "Masterclass",
  "One Day Event",
  "Virtual Summits",
  "Three Day Events",
];

export default function EventHighlights() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <div className="reveal-heading mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-authority-green uppercase">
            Client Event Highlights
          </p>
          <h2 className="font-authority-sans mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            The Stages We Help Build
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((event) => (
            <div key={event} className="reveal-item">
              <ImagePlaceholder label={event} className="aspect-square w-full" />
              <h3 className="font-authority-sans mt-4 text-center text-base font-semibold text-neutral-900">
                {event}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
