"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type Feature = {
  title: string;
  description: string;
  path: string;
};

const FEATURES: Feature[] = [
  {
    title: "Fast Performance",
    description:
      "Optimized builds and edge-ready delivery keep every page loading in a blink.",
    path: "M3.75 13.5 14.25 2.25 12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Secure by Default",
    description:
      "Best-practice security is baked into every project from day one, not bolted on after.",
    path: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286Z",
  },
  {
    title: "Scalable Architecture",
    description:
      "Built to grow with you, from a first prototype to millions of monthly visitors.",
    path: "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3",
  },
  {
    title: "Responsive Design",
    description:
      "Every screen, every device. Interfaces that adapt beautifully to any viewport.",
    path: "M10.5 1.5h-2.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  },
  {
    title: "SEO Optimized",
    description:
      "Structured, fast, and discoverable, so the right customers find you first.",
    path: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  },
  {
    title: "24/7 Support",
    description:
      "A dedicated team on hand around the clock to keep your product running smoothly.",
    path: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z",
  },
];

export default function Features() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28">
      <div ref={sectionRef} className="mx-auto w-full max-w-6xl px-6 sm:px-16">
        <div className="reveal-heading mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Everything you need to move fast
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            A full toolkit for shipping polished products without the usual
            growing pains.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="reveal-item">
              <div className="group rounded-xl border border-black/[.08] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/[.145] dark:bg-white/[.03]">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.path}
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-black dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
