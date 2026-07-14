"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const CLIENTS = ["Acme Co.", "Globex", "Initech", "Umbrella", "Stark Ind.", "Wayne Ent."];

const STATS = [
  { label: "Projects Delivered", numericValue: 500, suffix: "+" },
  { label: "Client Satisfaction", numericValue: 98, suffix: "%" },
  { label: "Years in Business", numericValue: 12, suffix: "+" },
  { label: "Team Members", numericValue: 40, suffix: "+" },
];

export default function TrustSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const numberRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      STATS.forEach((stat, index) => {
        const el = numberRefs.current[index];
        if (!el) return;
        const proxy = { value: 0 };
        gsap.to(proxy, {
          value: stat.numericValue,
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            el.textContent = `${Math.round(proxy.value)}${stat.suffix}`;
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="border-t border-black/[.08] bg-zinc-50 py-20 sm:py-28 dark:border-white/[.145] dark:bg-white/[.02]">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-6xl px-6 sm:px-16"
      >
        <p className="reveal-heading text-center text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          Trusted by teams at
        </p>
        <div className="reveal-heading mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="text-xl font-semibold text-zinc-400 grayscale transition-colors hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
            >
              {client}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="reveal-item text-center">
              <p
                ref={(el) => {
                  numberRefs.current[index] = el;
                }}
                className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50"
              >
                0{stat.suffix}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal-heading mt-16 text-center text-base text-zinc-600 dark:text-zinc-400">
          Rated <span className="font-semibold text-black dark:text-zinc-50">4.9/5</span>{" "}
          from over 200 client reviews.
        </p>
      </div>
    </section>
  );
}
