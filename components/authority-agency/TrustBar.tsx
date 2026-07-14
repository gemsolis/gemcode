"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATS = [
  { value: "400+", label: "Stages Booked" },
  { value: "$40M+", label: "Client Revenue" },
  { value: "2018", label: "Established" },
];

const PRESS = ["Forbes", "Entrepreneur"];

export default function TrustBar() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden border-t border-white/10 py-16">
      <div aria-hidden="true" className="absolute inset-0 bg-white" />
      <div
        ref={sectionRef}
        className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <p className="reveal-heading mx-auto max-w-3xl text-center text-lg leading-8 text-black/70">
          Trusted by speakers, coaches, consultants, authors, and experts who
          are ready to stop chasing visibility and start building an{" "}
          <span className="font-semibold text-authority-navy">
            Authority Platform
          </span>{" "}
          that creates lasting{" "}
          <span className="font-semibold text-authority-navy">
            impact and income
          </span>
          .
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="reveal-item text-center">
              <p className="text-3xl font-bold text-authority-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-wide text-slate-800 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
