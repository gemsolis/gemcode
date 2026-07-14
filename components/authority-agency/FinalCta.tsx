"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FinalCta() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-authority-navy py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-3xl px-6 text-center sm:px-10 lg:px-16"
      >
        <div className="reveal-heading">
          <p className="text-xs font-semibold tracking-widest text-authority-gold uppercase">
            Get Ready
          </p>
          <h2 className="font-authority-sans mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Ready to Turn Your Expertise into Authority
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Whether you&apos;re just getting started or ready to scale, we
            have a path built for you. Book a call and let&apos;s find the
            right one.
          </p>
        </div>
        <div className="reveal-item mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="flex h-12 w-full items-center justify-center rounded-full bg-authority-green px-8 text-base font-semibold text-white transition-colors hover:bg-authority-green-dark sm:w-auto"
          >
            Get Started
          </a>
          <a
            href="#programs"
            className="flex h-12 w-full items-center justify-center rounded-full border border-white/30 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            See the Speaker Agency in Action
          </a>
        </div>
      </div>
    </section>
  );
}
