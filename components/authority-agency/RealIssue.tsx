"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ISSUES = [
  "Chasing stages instead of attracting the right stages",
  "Speaking without creating real momentum",
  "Being visible without becoming truly known",
  "Working harder without measurable growth",
];

export default function RealIssue() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-16"
      >
        <div className="reveal-heading text-center">
          <p className="text-xs font-semibold tracking-widest text-authority-green uppercase">
            The Real Issue
          </p>
          <h2 className="font-authority-sans mx-auto mt-4 max-w-3xl text-2xl font-bold text-neutral-900 sm:text-3xl">
            The problem isn&apos;t your expertise. The problem is that most
            people treat speaking as an <em>activity</em>, not a{" "}
            <strong className="text-authority-green">strategy</strong>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Without a clear Authority Ecosystem, speaking becomes a
            collection of disconnected opportunities instead of a business
            growth engine. That often leads to:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ISSUES.map((issue) => (
            <div
              key={issue}
              className="reveal-item flex items-center justify-center rounded-xl bg-authority-purple px-5 py-6 text-center text-sm font-medium text-white"
            >
              {issue}
            </div>
          ))}
        </div>

        <div className="reveal-item mt-10 rounded-2xl border border-black/[.06] bg-neutral-50 p-8 text-center sm:p-10">
          <p className="text-lg font-semibold text-neutral-900 sm:text-xl">
            You don&apos;t need more random opportunities.
            <br />
            You need a <strong>system</strong> that turns speaking into
            Authority.
          </p>
          <div className="mt-6 flex justify-center">
            <div
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-black/15 bg-black/[.03]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="h-6 w-6 text-black/25"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
