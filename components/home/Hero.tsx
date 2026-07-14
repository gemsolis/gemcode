"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
        .from(
          ".hero-heading",
          { opacity: 0, y: 24, duration: 0.7 },
          "-=0.8",
        )
        .from(".hero-subtext", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(
          ".hero-cta",
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.12 },
          "-=0.35",
        )
        .from(
          ".hero-illustration",
          { opacity: 0, y: 32, scale: 0.97, duration: 0.7 },
          "-=0.2",
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-16 sm:py-32"
    >
      <Image
        src="/assets/hero-light-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="hero-bg object-cover dark:hidden"
      />
      <Image
        src="/assets/hero-dark-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="hero-bg hidden object-cover dark:block"
      />
      <div className="relative flex flex-col items-center">
        <h1 className="hero-heading max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl dark:text-zinc-50">
          Building Your Next Big Idea, Faster.
        </h1>
        <p className="hero-subtext mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          GemCode helps you launch modern web experiences with speed,
          precision, and design that scales with your business.
        </p>
        <div className="mt-10 flex w-full max-w-md flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="hero-cta flex h-12 w-full items-center justify-center rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
          >
            Get Started
          </Link>
          <Link
            href="/projects"
            className="hero-cta flex h-12 w-full items-center justify-center rounded-full border border-black/[.08] px-8 text-base font-semibold text-black transition-colors hover:bg-black/[.04] sm:w-auto dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.08]"
          >
            View Projects
          </Link>
        </div>

        <div className="hero-illustration mt-16 w-full max-w-3xl rounded-2xl border border-black/[.08] bg-white/80 p-4 shadow-2xl backdrop-blur-md sm:p-6 dark:border-white/[.145] dark:bg-zinc-900/80">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="col-span-1 space-y-3 rounded-xl bg-zinc-100 p-4 dark:bg-white/5">
              <div className="h-3 w-2/3 rounded-full bg-zinc-300 dark:bg-white/15" />
              <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-white/10" />
              <div className="h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-white/10" />
              <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-white/10" />
            </div>
            <div className="col-span-2 space-y-3 rounded-xl bg-zinc-100 p-4 dark:bg-white/5">
              <div className="flex items-center justify-between">
                <div className="h-3 w-1/3 rounded-full bg-zinc-300 dark:bg-white/15" />
                <div className="h-6 w-16 rounded-full bg-blue-600/90" />
              </div>
              <div className="flex items-end gap-2 pt-2">
                <div className="h-10 w-full rounded-md bg-blue-200 dark:bg-blue-500/20" />
                <div className="h-16 w-full rounded-md bg-blue-300 dark:bg-blue-500/30" />
                <div className="h-8 w-full rounded-md bg-blue-200 dark:bg-blue-500/20" />
                <div className="h-20 w-full rounded-md bg-blue-400 dark:bg-blue-500/40" />
                <div className="h-12 w-full rounded-md bg-blue-200 dark:bg-blue-500/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
