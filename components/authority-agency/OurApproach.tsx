"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ImagePlaceholder from "@/components/authority-agency/ImagePlaceholder";

const CARDS = [
  { title: "Industry Insight", tag: "Market Positioning" },
  { title: "A Proven System", tag: "Speaking Systems" },
  { title: "Results That Matter", tag: "Client Results" },
];

export default function OurApproach() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-authority-purple py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <div className="reveal-heading mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-authority-gold uppercase">
            Our Approach
          </p>
          <h2 className="font-authority-sans mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We Don&apos;t Just Help You Get Booked. We Help You Build
            Authority.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            What Authority are you building? Because getting booked is not
            the goal. Impact and Income is the goal.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.title} className="reveal-item">
              <ImagePlaceholder
                tone="light"
                label={card.title}
                className="aspect-[4/3] w-full"
              />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-authority-sans text-base font-semibold text-white">
                  {card.title}
                </h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-14 rounded-2xl bg-authority-green px-8 py-8 text-center sm:px-12">
          <p className="text-xl font-bold text-white sm:text-2xl">
            You don&apos;t need more applause. You need more{" "}
            <span className="font-authority-script text-3xl text-authority-lime sm:text-4xl">
              outcomes.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
