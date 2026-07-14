"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Service = {
  title: string;
  description: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom, high-performance websites and web apps built on modern frameworks.",
    href: "/contact",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-driven interfaces that are as intuitive to use as they are beautiful.",
    href: "/contact",
  },
  {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and visual identity that make your brand memorable.",
    href: "/contact",
  },
];

export default function Services() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="border-t border-black/[.08] bg-zinc-50 py-20 sm:py-28 dark:border-white/[.145] dark:bg-white/[.02]">
      <div ref={sectionRef} className="mx-auto w-full max-w-6xl px-6 sm:px-16">
        <div className="reveal-heading mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Services built around your goals
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Whichever stage you&apos;re at, we have a service to help you get
            to the next one.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="reveal-item">
              <div className="group flex h-full flex-col rounded-xl border border-black/[.08] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/40 hover:shadow-lg dark:border-white/[.145] dark:bg-black dark:hover:border-blue-400/40">
                <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors group-hover:gap-2 dark:text-blue-400"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
