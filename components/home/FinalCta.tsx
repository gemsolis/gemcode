"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FinalCta() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="border-t border-black/[.08] py-20 sm:py-28 dark:border-white/[.145]">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-4xl px-6 text-center sm:px-16"
      >
        <div className="reveal-heading">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Ready to build something great?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Tell us about your project and we&apos;ll get back to you within
            one business day.
          </p>
        </div>
        <div className="reveal-item mt-10 flex justify-center">
          <Link
            href="/contact"
            className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
