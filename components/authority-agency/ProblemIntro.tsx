"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const COLUMNS = [
  {
    step: "Step 1",
    title: "Still trying to get invited to speak",
    points: [
      "Applying to speak, hoping for a yes",
      "Pitching yourself to organizers cold",
      "Reaching out to your network for leads",
      "Building slides before you have a stage",
    ],
  },
  {
    step: "Step 2",
    title: "Already speaking, but the results don't match the effort",
    points: [
      "Showing up and delivering great talks",
      "Meeting people, handing out cards",
      "No consistent bookings after the event",
      "Unpredictable, one-off results",
    ],
  },
];

export default function ProblemIntro() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <div className="reveal-heading mx-auto max-w-3xl text-center">
          <h2 className="font-authority-sans text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Speaking Can Open Doors. But It Doesn&apos;t Automatically Grow a
            Business.
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Most speakers, coaches, consultants, and experts get on stage and
            hope opportunities follow. Hope isn&apos;t a strategy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {COLUMNS.map((column) => (
            <div key={column.step} className="reveal-item">
              <div className="h-full rounded-2xl border border-black/[.08] bg-authority-lime-tint p-8">
                <p className="text-xs font-semibold tracking-widest text-authority-green uppercase">
                  {column.step}
                </p>
                <h3 className="font-authority-sans mt-2 text-xl font-semibold text-neutral-900">
                  {column.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {column.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-neutral-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-14 text-center">
          <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            So you start asking&hellip;
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-authority-gold/15 p-6 text-base font-medium text-neutral-800">
              &ldquo;How do I get in front of the right audience?&rdquo;
            </div>
            <div className="rounded-2xl bg-authority-gold/15 p-6 text-base font-medium text-neutral-800">
              &ldquo;Why isn&apos;t my speaking creating more business?&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
