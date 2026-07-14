"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start by understanding your goals, audience, and the problem worth solving.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes and prototypes turn ideas into a clear, testable experience.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Our engineers build the product with clean, scalable, well-tested code.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "We ship, monitor, and iterate, keeping things running smoothly post-launch.",
  },
];

export default function Process() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 sm:py-28">
      <div ref={sectionRef} className="mx-auto w-full max-w-6xl px-6 sm:px-16">
        <div className="reveal-heading mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            How we work
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            A simple, proven process that takes you from idea to launch.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px bg-black/[.08] lg:block dark:bg-white/[.145]"
          />
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="reveal-item relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-white">
                {item.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-black dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
