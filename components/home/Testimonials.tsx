"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type Testimonial = {
  name: string;
  company: string;
  initials: string;
  quote: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    company: "Founder, Globex",
    initials: "SC",
    quote:
      "GemCode took our idea from a rough sketch to a polished product in weeks, not months. The attention to detail was outstanding.",
    rating: 5,
  },
  {
    name: "Marcus Lee",
    company: "Head of Product, Initech",
    initials: "ML",
    quote:
      "The team communicated clearly at every step and delivered exactly what we asked for, on time and on budget.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    company: "CEO, Umbrella",
    initials: "PP",
    quote:
      "Our conversion rate jumped 30% after the redesign. Genuinely one of the best agencies we've worked with.",
    rating: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className="h-5 w-5"
    >
      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

export default function Testimonials() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="border-t border-black/[.08] bg-zinc-50 py-20 sm:py-28 dark:border-white/[.145] dark:bg-white/[.02]">
      <div ref={sectionRef} className="mx-auto w-full max-w-6xl px-6 sm:px-16">
        <div className="reveal-heading mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Loved by teams like yours
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Don&apos;t just take our word for it.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="reveal-item">
              <div className="flex h-full flex-col rounded-xl border border-black/[.08] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/[.145] dark:bg-black">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-zinc-50">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
