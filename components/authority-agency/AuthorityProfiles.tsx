"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const PROFILES = [
  {
    number: "01",
    title: "The Authority Seeker",
    quote: "I know I should be speaking, but I don't know where to start.",
    points: [
      "Unclear on your message or niche",
      "Struggling to get booked",
      "No consistent visibility strategy",
    ],
  },
  {
    number: "02",
    title: "The Authority Builder",
    quote: "I'm getting bookings, but it's not translating into business.",
    points: [
      "Booking some stages already",
      "Inconsistent follow-through after events",
      "No systemized offer after speaking",
    ],
  },
  {
    number: "03",
    title: "The Authority Leader",
    quote: "I'm ready to build something bigger than one-off gigs.",
    points: [
      "Established credibility in your space",
      "Ready to scale reach and revenue",
      "Building signature programs and IP",
    ],
  },
];

export default function AuthorityProfiles() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-authority-navy py-20 sm:py-28">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <div className="reveal-heading mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-authority-gold uppercase">
            Where Are You on Your Authority Journey
          </p>
          <h2 className="font-authority-sans mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three Authority Profiles. One Clear Path Forward.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROFILES.map((profile) => (
            <div key={profile.number} className="reveal-item">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-authority-gold/40">
                <span className="text-sm font-semibold text-authority-gold">
                  {profile.number}
                </span>
                <h3 className="font-authority-sans mt-2 text-xl font-semibold text-white">
                  {profile.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60 italic">
                  &ldquo;{profile.quote}&rdquo;
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {profile.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-white/70"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-authority-gold"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 flex h-11 w-full items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Find Your Fit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
