"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "Within six months of working with the Authority Agency, I went from cold-pitching event organizers to being invited onto stages I used to only dream about.",
    name: "Rachel Simmons",
    role: "Leadership Coach",
    initials: "RS",
  },
  {
    quote:
      "They didn't just get me booked. They built me a system, so every talk now turns into new clients, not just applause.",
    name: "Marcus Alden",
    role: "Business Consultant",
    initials: "MA",
  },
  {
    quote:
      "I finally understand the difference between being a speaker and being an authority. That shift changed my entire business.",
    name: "Lena Okafor",
    role: "Author & Strategist",
    initials: "LO",
  },
];

export default function Testimonials() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  }, [index]);

  const testimonial = TESTIMONIALS[index];

  return (
    <section className="bg-authority-purple py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-4xl px-6 text-center sm:px-10 lg:px-16"
      >
        <div className="reveal-heading">
          <p className="text-xs font-semibold tracking-widest text-authority-gold uppercase">
            Trusted by Speakers Who&apos;ve Seen Results
          </p>
          <h2 className="font-authority-sans mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See What&apos;s Possible When You Speak with Authority
          </h2>
        </div>

        <div
          ref={cardRef}
          className="reveal-item mt-14 rounded-2xl border border-white/10 bg-white/5 p-10"
        >
          <p className="text-lg leading-8 text-white/80">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
              {testimonial.initials}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-sm text-white/60">{testimonial.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${item.name}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-authority-gold" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
