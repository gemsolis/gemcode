"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

const RESOURCES = [
  {
    title: "The Authority Growth Blueprint",
    description:
      "The exact framework top speakers use to turn visibility into consistent bookings and income.",
    cta: "Get the Blueprint",
  },
  {
    title: "Your Authority Profile",
    description:
      "Discover which authority profile matches your current stage, and exactly what to focus on next.",
    cta: "Take the Quiz",
  },
  {
    title: "Client Event Highlights",
    description:
      "See real results from real clients speaking, hosting workshops, and running signature events.",
    cta: "See the Highlights",
  },
];

export default function Resources() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src="/assets/stage-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0" />
      <div
        ref={sectionRef}
        className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <div className="reveal-heading mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-authority-gold uppercase">
            Start Here
          </p>
          <h2 className="font-authority-sans mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resources to Guide Your Next Move
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {RESOURCES.map((resource) => (
            <div key={resource.title} className="reveal-item">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-authority-navy/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-authority-green/40 hover:bg-authority-navy/70">
                <h3 className="font-authority-sans text-lg font-semibold text-white">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/60">
                  {resource.description}
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-authority-green"
                >
                  {resource.cta}
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
