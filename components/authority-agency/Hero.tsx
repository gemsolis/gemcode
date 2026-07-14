"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .from(".hero-bg", { opacity: 0, scale: 1.08, duration: 1.2 })
        .from(".hero-heading", { opacity: 0, y: 28, duration: 0.7 }, "-=0.8")
        .from(".hero-subtext", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(
          ".hero-cta",
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.12 },
          "-=0.35",
        )
        .from(".hero-tagline", { opacity: 0, y: 12, duration: 0.5 }, "-=0.2");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen flex-col items-start justify-center overflow-hidden bg-authority-navy px-24 py-24 text-left sm:px-10 sm:py-32 lg:px-60"
    >
      <Image
        src="/assets/hero-aa.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="hero-bg object-cover"
      />
      <div className="relative z-10 max-w-2xl">
        <h1 className="hero-heading font-authority-sans text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Stop Being the{" "}
          <span className="text-authority-gold">Best Kept Secret</span> in Your
          Industry.
        </h1>
        <p className="hero-subtext mt-6 max-w-xl text-lg leading-8 text-white/70">
          Turn your expertise and authority into speaking opportunities that
          create Impact and Income &mdash; not just applause.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="hero-cta flex h-12 w-full items-center justify-center  bg-authority-green px-8 text-base font-semibold text-white transition-colors hover:bg-authority-green/70 sm:w-auto"
          >
            Book a Speaking Call
          </a>
          <a
            href="#programs"
            className="hero-cta flex h-12 w-full items-center justify-center  border border-white/30 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Explore Programs
          </a>
        </div>
        <p className="hero-tagline mt-10 text-lg text-white/60">
          Authority isn&apos;t given &mdash; it&apos;s{" "}
          <span className="font-authority-script text-2xl text-authority-lime">
            engineered.
          </span>
        </p>
      </div>
    </section>
  );
}
