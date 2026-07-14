"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ImagePlaceholder from "@/components/authority-agency/ImagePlaceholder";

const HELP_POINTS = [
  "Clarify your authority message and niche",
  "Build a predictable speaking pipeline",
  "Convert stages into clients and referrals",
  "Create content and offers around your talks",
  "Turn one talk into a repeatable system",
];

export default function HowWeHelp() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="reveal-item">
            <div className="reveal-heading mx-auto max-w-2xl py-10">
              <p className="text-xs font-semibold tracking-widest text-authority-green uppercase">
                What We Do
              </p>
              <h2 className="font-authority-sans mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                How to Go From Random Speaking Opportunities to a Predictable
                Authority Ecosystem
              </h2>
            </div>
            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              We Help You
            </p>
            <ul className="mt-6 space-y-4">
              {HELP_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-authority-green/10 text-sm font-bold text-authority-green"
                  >
                    &#10003;
                  </span>
                  <span className="text-base leading-7 text-neutral-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-item">
            <ImagePlaceholder
              label="Speaker Photo"
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>

        <div className="reveal-item mt-14 rounded-2xl bg-authority-green px-8 py-8 text-center sm:px-12">
          <p className="text-xl font-semibold text-white sm:text-2xl">
            Speaking stops being something you do. It becomes part of who you
            are and how your business grows.
          </p>
        </div>
      </div>
    </section>
  );
}
