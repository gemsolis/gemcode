"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects launch within 4 to 8 weeks, depending on scope. We'll give you a clear timeline after our initial discovery call.",
  },
  {
    question: "What does the pricing look like?",
    answer:
      "We scope every project individually and provide a fixed quote up front, so there are no surprises once work begins.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every project includes a support window post-launch, and we offer flexible retainers for ongoing maintenance and iteration.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We regularly plug into existing product and engineering teams, adapting to your tools and workflow.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We've shipped products across SaaS, e-commerce, healthcare, and consumer apps. Our process adapts to the needs of your industry.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28">
      <div ref={sectionRef} className="mx-auto w-full max-w-3xl px-6 sm:px-16">
        <div className="reveal-heading text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-12 divide-y divide-black/[.08] dark:divide-white/[.145]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="reveal-item py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-semibold text-black dark:text-zinc-50">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 dark:text-zinc-400 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="pt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
